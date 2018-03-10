#!/usr/bin/make

base=https://www.mothur.org/w/images/d/d8
zip=CostelloData.zip

stool.fasta stool.oligos stool.qual stool.batch:
	[[ -f ${zip} ]] || wget ${base}/${zip}
	unzip ${zip}
	rm -rf __MACOSX

submission.xml: stool.fasta
	mothur submission.batch
