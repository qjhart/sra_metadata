const XmlWrite=require('./XmlWrite');

class Biosample extends XmlWrite {

  ucfirst(string)  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

	headerMap(header) {
		var map={
			"organism":{},
			"attributes":{},
			"descriptor":{},
		};
		for (var i = 0; i < header.length; i++) {
			var head=header[i];
			head=head.replace('*',''); // Remove Indicators if they exist
			switch (head) {
				case "sample_name":
				case "bioproject_accession":
				map[head]=i;
				map.attributes[head]=i;
				break;
				case "organism":
				map.organism['OrganismName']=i
				map.attributes[head]=i;
				break;
				case "isolate":
				case "cultivar":
				case "ecotype":
				case "isolation_source":
				map.organism[this.ucfirst(head)]=i
				map.attributes[head]=i;
				break;
				case "description":
				map.descriptor['Description']=i;
				map.attributes[head]=i;
				break;
				case "sample_title":
				map.descriptor['Title']=i;
				map.attributes[head]=i;
				break;
				default:
				map.attributes[head]=i;
			}
		}
		// Now Test for goodness
		if (! 'sample_name' in map) {
			throw "Required sample_name missing";
		}
		return map;
	}

  sample_name(data) {
		let map=this.map;
		if (! map ) { throw "No Specified Header Map"; }

		let sample_name=data[map.sample_name];
		if (! sample_name.length > 0) {
			throw "Missing Required Sample Name";
		}
		return sample_name;
  }

	writeSampleId(data) {
		let spuid=this.submission.config().SPUID;
    let sample_name=this.sample_name(data);
		this.startElement('SampleId')
		.startElement('SPUID')
		.writeAttribute('spuid_namespace',spuid.namespace)
		.text(sample_name)
		.endElement()
		.endElement();
		return this;
	}

	writeDescriptor() {
		let map=this.map;
		if (! map ) { throw "No Specified Header Map"; }
		let data=this.data;
		if (! data ) { throw "No Biosample Data Array"; }
		this.startElement('Descriptor')
    let ordered=['Title','Description'];

    //				for (var n in map.descriptor ) {
    ordered.forEach( (n) => {
			var d=data[map.descriptor[n]];
			if (d.length > 0) {
        if (n=='Description') {
          this.startElement('Description')
          .writeElement('p',d).endElement();
        } else {
					this.writeElement(n,d);
				}
      }
		});
		this.endElement();
		return this;
	}

	writeOrganism() {
		let map=this.map;
		if (! map ) { throw "No Specified Header Map"; }
		let data=this.data;
		if (! data ) { throw "No Biosample Data Array"; }

		this.startElement('Organism');
    let ordered=["OrganismName","Label","Strain","IsolateName","Breed","Cultivar"];
    //				for (var n in map.organism ) {
    ordered.forEach( (n) => {
      if(map.organism[n]) {
				var d=data[map.organism[n]];
        if (d.length > 0) {
					this.writeElement(n,d);
				}
      }
		});
		this.endElement();
		return this;
	}

	writePackage() {
		this.writeElement('Package',this.submission.config().biosample.package);
		return this;
	}

	writeBioSample(data) {
		let map=this.map;
		if (! map ) { throw "No Specified Header Map"; }
		if (! data ) { throw "No Biosample Data Array"; }
    this.data=data;

		this.startElement('BioSample')
		.writeAttribute('schema_version','2.0')
		.writeSampleId(data)
		.writeDescriptor()
		.writeOrganism()
    .writePackage()
		this.startElement('Attributes');
    let keys=Object.keys(map.attributes).sort();
    for (let i in keys) {
      let a=keys[i];
			if (data[map.attributes[a]].length > 0) {
				this.startElement('Attribute')
				.writeAttribute('attribute_name',a)
				.text(data[map.attributes[a]])
				.endElement();
			}
		}
		this.endElement('Attributes');
		this.endElement('BioSample');
		return this;
	}
}

module.exports=Biosample;
