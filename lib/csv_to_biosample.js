#!/usr/bin/env node
const parse=require('csv-parse/lib/sync');
const fs = require('fs');
const _ = require('lodash');
const path= require('path');
const XMLWriter = require('xml-writer');
const Submission = require('./Submission');

const argv = require('yargs')
			.usage('Usage: $0 --file=[template] --package= <files>')
			.default({file:"<%= dir_name %>.xml",
								package:"Generic.1.0",
								each:false})
			.demandCommand(1)
			.argv;

const sub = new Submission();

const config_fn=path.join(process.cwd(),'submission.json');

if (fs.existsSync(config_fn)) {
		var add_config=require(config_fn);
		sub.config(add_config);
}

console.log(argv);
sub.config(argv);

argv.file_template=_.template(argv.file);

argv._.forEach((fn)=> {
		let parts=path.parse(fn);
		parts.file=fn;
		parts.dir_name=path.join(parts.dir,parts.name);
		let os;
		if (argv.file === '-') {
				os=process.stdout;
		} else {
				parts.row=0;
				parts.sample_name='';
				let of=argv.file_template(parts);
				os=fs.createWriteStream(of);
		}

		sub.writer(new XMLWriter(true,(string,encoding) => { os.write(string,encoding); }));

		let tsv=fs.readFileSync(fn,{encoding:'UTF-8'});
		let rows=parse(tsv,{delimiter: '\t' , comment: '#'});
		let map=sub.biosample.headerMap(rows.shift());
		sub.biosample.map=map;

		if (argv.each) {
				for (let i=0; i<rows.length; i++) {
						parts.row=i;
						parts.sample_name=sub.biosample.sample_name(rows[i]);
						console.log(parts);
						let of=argv.file_template(parts);
						os=fs.createWriteStream(of);
						sub.writeSubmission([rows[i]]);
				}
		} else {
				sub.writeSubmission(rows);
		}
});
