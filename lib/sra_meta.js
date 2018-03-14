#!/usr/bin/env node
const parse=require('csv-parse/lib/sync');
const fs = require('fs');
const _ = require('lodash');
const path= require('path');
const XMLWriter = require('xml-writer');
const Submission = require('./Submission');
const Package = require('./Package');

const argv = require('yargs')
			.option('biosample.package', {
				alias: 'p',
				describe: 'Select the appropriate Biosample Package',
				choices: Package.choices,
				'default':"Generic.1.0"
			})
			.option('file',{
				alias: 'f',
				describe: 'Set the output file template.  Based on lodash templates (https://lodash.com/docs/4.17.5#temp.  The available parameters for the template inclcude [file|dir|dir_name].  In addition, both [row|sample_name] are available when using the --each switch.  Selecting "-" will send to stdout.',
				"default": "<%= dir_name %>.xml"
			})
			.option('each',{
				alias: 'e',
				describe: 'create a seperate submission for each row of biosample data.',
				"default": false
			})
			.demandCommand(1)
			.argv;

const sub = new Submission();

const config_fn=path.join(process.cwd(),'submission.json');

if (fs.existsSync(config_fn)) {
	var add_config=require(config_fn);
	sub.config(add_config);
}

sub.config(argv);

argv.file_template=_.template(argv.file);

argv._.forEach((fn)=> {
	let parts=path.parse(fn);
	parts.file=fn;
	parts.dir_name=path.join(parts.dir,parts.name);
	let os;

  os=process.stdout;

	let tsv=fs.readFileSync(fn,{encoding:'UTF-8'});
	let rows=parse(tsv,{delimiter: '\t' , comment: '#'});
	let map=sub.biosample.headerMap(rows.shift());
	sub.biosample.map=map;

	if (argv.each) {
		for (let i=0; i<rows.length; i++) {
			parts.row=i;
			parts.sample_name=sub.biosample.sample_name(rows[i]);
      if ( ! argv.stdout) {
			  let of=argv.file_template(parts);
			  os=fs.createWriteStream(of);
      }
      sub.writer(new XMLWriter(true,(string,encoding) => { os.write(string,encoding); }));
			sub.writeSubmission([rows[i]]);
      if ( ! argv.stdout) {
        os.end();
      }
		}
	} else {
	  if ( ! argv.stdout ) {
		  parts.row=0;
		  parts.sample_name='';
		  let of=argv.file_template(parts);
		  os=fs.createWriteStream(of);
	  }
    sub.writer(new XMLWriter(true,(string,encoding) => { os.write(string,encoding); }));
		sub.writeSubmission(rows);
    if ( ! argv.stdout ) {
      os.end();
    }
	}
});
