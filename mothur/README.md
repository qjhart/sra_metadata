# Mothur SRA Submission

The command-line utilities [mothur](https://www.mothur.org/), include steps to
create and SRA submission.  This step is somewhat similar to the process under
consideration.  One of the biggest differences, however, is that in the mothur
case, the submission is always made at the end of the data creation process, and
be default bundles up the bioproject creation, all biosamples, and the src
submission all into a single submission for NCBI.

Mothur's [New Submission](https://mothur.org/wiki/Creating_a_new_submission) documents
the required steps for making a new submission. However, there are no examples
that can be used to verify these steps work, and what data is required.  The
closest that I could come was the [Costello Stool
Analysis](https://www.mothur.org/wiki/Costello_stool_analysis) which includes
most of the files needed to create a submission.  However, there is no biosample
information, so I've invented that data.

There is a Makefile that can be run to show the steps to create an NCBI
Biosample submission using this data and mothur.  The data added to the create
the submission project, are `stool.project` and `stool_pretend.tsv`. You can
look at the `submission.batch` file to see how those are used.

If you have `mothur` installed you can run `make -B submission.xml` to run that
process.
