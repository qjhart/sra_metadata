#!/usr/bin/make
SHELL=/bin/bash

base=https://www.mothur.org/w/images/d/d8
zip=CostelloData.zip

stool.fasta stool.oligos stool.qual stool.batch:
	[[ -f ${zip} ]] || wget ${base}/${zip}
	unzip ${zip} stool.fasta stool.oligos stool.qual

submission.xml: stool.fasta
	mothur submission.batch

.PHONY: clean

clean:
	@rm -f stool.*.fastq stool.fastq stool.fasta stool.qual stool.batch stool.tsv \
	submit.ready *.logfile
