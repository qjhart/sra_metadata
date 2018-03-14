sra_meta

This is the beginning of the some node development for tool(s) that can help
pipeline SRA metadata submissions.  Currently, the only planned command is to
convert SRA biosample TSV files into ncbi submission.xml files.

## Installation

Clone this repository and with node and npm installed `sudo npm install -g`


## Configuration
There are a number of configuration parameters that are used to complete the
biosample submission.  Most of these have to do with the submitting
organization, while some; particularly the biosample.package used, have to do
with the data itself.

There are two methods of configuration and they can both be used.  First, the
application will look for a `submission.json` file in the CWD.  If found, this
configuration file will read and used for the required values.

In addition, parameters can be added to the command line.  Any values in the
command-line will overwrite the submission.json values.  See the example below
showing how the biosample package name is overwritten.

## Running the code.

I couldn't find a real-life example of biosample data.  Instead, I took the
somewhat complete example from mothur, that shows some example data.  This uses
a human gut biosample template.  The following command creates a biosample
submission for this entry, and saves it to `submission.xml`.


``` bash
sra_meta --file=submission.xml --biosample.package=MIMARKS.survey.human-gut.4.0 mothur/stool_pretend.tsv
```

## Validating the submission
NCBI includes a biosample validation tool located at
`https://www.ncbi.nlm.nih.gov/projects/biosample/validate/`.  However, while
NCBI allows multiple biosamples to be submitted with a single submission, the
validator tool only checks the first submission however.

To allow better validation, we've added an `--each` parameter, which will write
each row of the submission to it's own file, make sure to include either the
`<%=row=>` or `<%=sample_name=>` in the `--file` template.  For example, here is a
way to validate every submission.   This uses httpie as a transfer mechanism.

``` bash
sra_meta --each --file='sub_<%=row%>.xml' --biosample.package=MIMARKS.survey.human-gut.4.0
mothur/stool_pretend.tsv
ncbi=https://www.ncbi.nlm.nih.gov/projects/biosample/validate/
for f in sub_*.xml; do
  http --print=b POST $ncbi < $f | tee $f.validate
done
```

## Mothur
Note that this setup is pretty similar to the submission process that is used
with the more complete mothur command line utilities.  See the
[mothur](./mothur) directory for an example of how their application works.
