class Biosample {

ucfirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

biosampleXML(meta,map,data) {
  var biosample=XmlService.createElement('BioSample')
  .setAttribute('schema_version',"2.0");
  if (data[map.sample_name].length > 0) {
    var sample_id=XmlService.createElement('SampleId').addContent(SPUID(meta,data[map.sample_name]));
    biosample.addContent(sample_id);
  } else {
    throw "Missing Required Sample Name";
  }
  biosample.addContent(descriptorXML(meta,map,data));
  biosample.addContent(organismXML(meta,map,data));
  var attrs=XmlService.createElement('Attributes');
  for (var a in map.attributes) {
    if (data[map.attributes[a]].length > 0 ) {
      var attr=XmlService.createElement('Attribute')
      .setAttribute('attribute_name',a)
      .setText(data[map.attributes[a]]);
      attrs.addContent(attr);
    }
  }
//  biosample.addContent(
//    XmlService.createElement('BioProject').setText(data[map.attributes['BioProject']]);
//  );
  biosample.addContent(
    XmlService.createElement('Package').setText(meta.package)
  );
  biosample.addContent(attrs);

  return biosample;
}

submissionXML() {
//  var sheet = SpreadsheetApp.getActive().getSheets();
  var sheets= SpreadsheetApp.getActiveSpreadsheet().getSheets();
  Logger.log("SHEETS:"+sheets.length);
  var meta={
    "spuid_namespace":'University Of California, Davis',
    "package": ''
  };
  var sub=XmlService.createElement('Submission')
  .setAttribute('schema_version',"2.0")
  .addContent(descriptionXML());

  for (var i in sheets) {
    var sheet=sheets[i];
    var pkg=sheet.getName();
    if (pkg.match(/.*\.1\.0$/)) {
      meta.pkg=pkg;
      var rows = sheet.getDataRange().getValues();
      var map=headerMap(rows[0]);

      for(i=1; i<rows.length; i++){
        var data=rows[i];
        var biosample=biosampleXML(meta,map,data);
        var id=XmlService.createElement('Identifier').addContent(SPUID(meta,data[map.sample_name]));
        sub.addContent(actionXML(biosample,id));
      }
    }
  }
  var document = XmlService.createDocument(sub);
  var xml = XmlService.getPrettyFormat().format(document);
  Logger.log(xml);
  return(xml);

}
}
module.exports = new Biosample();
