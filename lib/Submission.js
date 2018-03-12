const XmlWrite = require('./XmlWrite');
const Biosample = require('./Biosample');

class Submission extends XmlWrite {

		config(add) {
				if (add) {
						this._config={...this._config,...add};
				}
				return this._config;
		}

		constructor() {
				super();
				this._config = {
						SPUID : {
								namespace:'University of California, Davis'
						},
						organization: {
				      "name" : "University of California, Davis",
				      "contact" : { "email" : "sra@ucdavis.edu" },
							role:"owner",
							site:"institute"
						}
				};
				this.biosample=new Biosample();
				this.biosample.submission=this;
		}

		writer(...args) {
				super.writer(...args);
				this.biosample.writer(...args)
		}

	writeDescription() {
		let c=this.config();
		this.startElement('Description')
    .startElement('Submitter')
    .writeAttribute('user_name',c.submitter.user_name)
    .endElement()
		.startElement('Organization')
		.writeAttribute('role',c.organization.role)
		.writeAttribute('type',c.organization.type)
		.writeElement('Name',c.organization.name)
		.startElement('Contact')
		.writeAttribute('email',c.organization.contact.email)
		.endElement()
		.endElement()
		.endElement();
	}

		writeIdentifier(data) {
      let sample_name=this.biosample.sample_name(data);
			let spuid=this.config().SPUID;

	    this.startElement('Identifier')
			.startElement('SPUID')
			.writeAttribute('spuid_namespace',spuid.namespace)
			.text(sample_name)
			.endElement()
			.endElement();
			return this;
		}

		writeBioSampleAction(data) {
			this.startElement('Action')
			.startElement('AddData')
			.writeAttribute('target_db','BioSample')
			.startElement('Data')
			.writeAttribute('content_type','XML')
			.startElement('XmlContent')
			.writeBioSample(data)
			.endElement('XmlContent')
			.endElement('Data')
      .writeIdentifier(data)
			.endElement('AddData')
			.endElement('Action');
		}

		writeBioSample(data) {
			this.biosample.writeBioSample(data);
			return this;
		}

  writeSubmission(rows) {
		this.startDocument('1.0', 'UTF-8')
		.startElement('Submission')
		.writeAttribute('schema_version',"2.0")
		.writeDescription();
		rows.forEach(
				(data)=>{
						this.writeBioSampleAction(data);
				});
		this.endElement();
		this.endDocument();
  }
}

module.exports=Submission;
