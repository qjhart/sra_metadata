* Mother

[[https://mothur.org/wiki/Creating_a_new_submission][New Submission]] documents the required steps for making a new submission.
However, there are no documents at all that describe what any of these data look
like for submission.  The [[https://www.mothur.org/wiki/Costello_stool_analysis][Costello Stool Analysis]] includes the files that I
should need to pretend create a submission.

#+BEGIN_EXAMPLE
mothur > make.fastq(fasta=stool.fasta,qfile=stool.qual)
make.sra(fastq=stool.fastq,oligos=stool.oligos,project=stool.project,mimark=stool.tsv)

#+END_EXAMPLE
