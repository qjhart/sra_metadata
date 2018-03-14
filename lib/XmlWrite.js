/*global XmlWrite */
class XmlWrite {
	writer(xmlwriter) {
		if (xmlwriter)
			this._writer=xmlwriter;
		return this._writer
	}

	_xml_pass(func,...args) {
		if (! this._writer) {
			throw "No XML Writer Specified";
		}
		this._writer[func](...args);
		return this;
	}
	startDocument(...args) { return this._xml_pass('startDocument',...args); }
	startElement(...args) { return this._xml_pass('startElement',...args); }
	endElement(...args) { return this._xml_pass('endElement',...args); }
	writeElement(...args) { return this._xml_pass('writeElement',...args); }
	writeAttribute(...args) { return this._xml_pass('writeAttribute',...args); }
	endDocument(...args) { return this._xml_pass('endDocument',...args); }
	text(...args) { return this._xml_pass('text',...args); }
}

module.exports = XmlWrite;
