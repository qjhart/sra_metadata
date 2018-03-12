
``` bash
	node bin/csv_to_biosample --file=foo.xml mothur/stool_pretend.tsv
 http POST https://www.ncbi.nlm.nih.gov/projects/biosample/validate/ < foo.xml
```


<BioSamplePackages>
<Package>
<Name>Generic.1.0</Name>
<DisplayName>Generic</DisplayName>
<ShortName/>
<EnvPackage/>
<EnvPackageDisplay/>
<Description>Generic</Description>
<Example/>
</Package>
<Package group="Pathogen" antibiogram="true" antibiogram_class="Antibiogram.1.0" antibiogram_template="https://www.ncbi.nlm.nih.gov/biosample/docs/templates/Antibiogram.1.0.xlsx">
<Name>Pathogen.cl.1.0</Name>
<DisplayName>Pathogen: clinical or host-associated; version 1.0</DisplayName>
<ShortName>Pathogen: clinical or host-associated</ShortName>
<EnvPackage/>
<EnvPackageDisplay/>
<Description>Clinical or host-associated pathogen</Description>
<Example>SAMN02928182</Example>
</Package>
<Package group="Pathogen" antibiogram="true" antibiogram_class="Antibiogram.1.0" antibiogram_template="https://www.ncbi.nlm.nih.gov/biosample/docs/templates/Antibiogram.1.0.xlsx">
<Name>Pathogen.env.1.0</Name>
<DisplayName>Pathogen: environmental/food/other; version 1.0</DisplayName>
<ShortName>Pathogen: environmental/food/other</ShortName>
<EnvPackage/>
<EnvPackageDisplay/>
<Description>Environmental, food or other pathogen</Description>
<Example>SAMN02730065</Example>
</Package>
<Package>
<Name>Microbe.1.0</Name>
<DisplayName>Microbe; version 1.0</DisplayName>
<ShortName>Microbe</ShortName>
<EnvPackage/>
<EnvPackageDisplay/>
<Description>
Use for bacteria or other unicellular microbes when it is not appropriate or advantageous to use MIxS, Pathogen or Virus packages.
</Description>
<Example>SAMN02911891</Example>
</Package>
<Package>
<Name>Model.organism.animal.1.0</Name>
<DisplayName>Model organism or animal; version 1.0</DisplayName>
<ShortName>Model organism or animal</ShortName>
<EnvPackage/>
<EnvPackageDisplay/>
<Description>
Use for multicellular samples or cell lines derived from common laboratory model organisms, e.g., mouse, rat, Drosophila, worm, fish, frog, or large mammals including zoo and farm animals.
</Description>
<Example>SAMN02905883</Example>
</Package>
<Package>
<Name>Metagenome.environmental.1.0</Name>
<DisplayName>Metagenome or environmental; version 1.0</DisplayName>
<ShortName>Metagenome or environmental</ShortName>
<EnvPackage/>
<EnvPackageDisplay/>
<Description>
Use for metagenomic and environmental samples when it is not appropriate or advantageous to use MIxS packages.
</Description>
<Example/>
</Package>
<Package>
<Name>Invertebrate.1.0</Name>
<DisplayName>Invertebrate; version 1.0</DisplayName>
<ShortName>Invertebrate</ShortName>
<EnvPackage/>
<EnvPackageDisplay/>
<Description>Use for any invertebrate sample.</Description>
<Example/>
</Package>
<Package>
<Name>Human.1.0</Name>
<DisplayName>Human; version 1.0</DisplayName>
<ShortName>Human</ShortName>
<EnvPackage/>
<EnvPackageDisplay/>
<Description>
WARNING: Only use for human samples or cell lines that have no privacy concerns. For all studies involving human subjects, it is the submitter's responsibility to ensure that the information supplied protects participant privacy in accordance with all applicable laws, regulations and institutional policies. Make sure to remove any direct personal identifiers from your submission. If there are patient privacy concerns regarding making data fully public, please submit samples and data to NCBI's dbGaP database. dbGaP has controlled access mechanisms and is an appropriate resource for hosting sensitive patient data. For samples isolated from humans use the Pathogen, Microbe or appropriate MIxS package.
</Description>
<Example>SAMN02911274</Example>
</Package>
<Package>
<Name>Plant.1.0</Name>
<DisplayName>Plant; version 1.0</DisplayName>
<ShortName>Plant</ShortName>
<EnvPackage/>
<EnvPackageDisplay/>
<Description>Use for any plant sample or cell line.</Description>
<Example>SAMN02870692</Example>
</Package>
<Package>
<Name>Virus.1.0</Name>
<DisplayName>Virus; version 1.0</DisplayName>
<ShortName>Viral</ShortName>
<EnvPackage/>
<EnvPackageDisplay/>
<Description>
Use for all virus samples not directly associated with disease. Viral pathogens should be submitted using the Pathogen: Clinical or host-associated pathogen package.
</Description>
<Example>SAMN02927319</Example>
</Package>
<Package group="MIMS.me">
<Name>MIMS.me.air.4.0</Name>
<DisplayName>MIMS: metagenome/environmental, air; version 4.0</DisplayName>
<ShortName>MIMS Environmental/Metagenome</ShortName>
<EnvPackage>air</EnvPackage>
<EnvPackageDisplay>air</EnvPackageDisplay>
<Description/>
<Example>SAMN02904796</Example>
</Package>
<Package group="MIMS.me">
<Name>MIMS.me.built.4.0</Name>
<DisplayName>MIMS: metagenome/environmental, built; version 4.0</DisplayName>
<ShortName>MIMS Environmental/Metagenome</ShortName>
<EnvPackage>built</EnvPackage>
<EnvPackageDisplay>built</EnvPackageDisplay>
<Description/>
<Example/>
</Package>
<Package group="MIMS.me">
<Name>MIMS.me.host-associated.4.0</Name>
<DisplayName>
MIMS: metagenome/environmental, host-associated; version 4.0
</DisplayName>
<ShortName>MIMS Environmental/Metagenome</ShortName>
<EnvPackage>host-associated</EnvPackage>
<EnvPackageDisplay>host-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN02232114</Example>
</Package>
<Package group="MIMS.me">
<Name>MIMS.me.human-associated.4.0</Name>
<DisplayName>
MIMS: metagenome/environmental, human-associated; version 4.0
</DisplayName>
<ShortName>MIMS Environmental/Metagenome</ShortName>
<EnvPackage>human-associated</EnvPackage>
<EnvPackageDisplay>human-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN02808661</Example>
</Package>
<Package group="MIMS.me">
<Name>MIMS.me.human-gut.4.0</Name>
<DisplayName>
MIMS: metagenome/environmental, human-gut; version 4.0
</DisplayName>
<ShortName>MIMS Environmental/Metagenome</ShortName>
<EnvPackage>human-gut</EnvPackage>
<EnvPackageDisplay>human-gut</EnvPackageDisplay>
<Description/>
<Example>SAMN02711913</Example>
</Package>
<Package group="MIMS.me">
<Name>MIMS.me.human-oral.4.0</Name>
<DisplayName>
MIMS: metagenome/environmental, human-oral; version 4.0
</DisplayName>
<ShortName>MIMS Environmental/Metagenome</ShortName>
<EnvPackage>human-oral</EnvPackage>
<EnvPackageDisplay>human-oral</EnvPackageDisplay>
<Description/>
<Example>SAMN02333701</Example>
</Package>
<Package group="MIMS.me">
<Name>MIMS.me.human-skin.4.0</Name>
<DisplayName>
MIMS: metagenome/environmental, human-skin; version 4.0
</DisplayName>
<ShortName>MIMS Environmental/Metagenome</ShortName>
<EnvPackage>human-skin</EnvPackage>
<EnvPackageDisplay>human-skin</EnvPackageDisplay>
<Description/>
<Example>SAMN01894483</Example>
</Package>
<Package group="MIMS.me">
<Name>MIMS.me.human-vaginal.4.0</Name>
<DisplayName>
MIMS: metagenome/environmental, human-vaginal; version 4.0
</DisplayName>
<ShortName>MIMS Environmental/Metagenome</ShortName>
<EnvPackage>human-vaginal</EnvPackage>
<EnvPackageDisplay>human-vaginal</EnvPackageDisplay>
<Description/>
<Example>SAMN02795945</Example>
</Package>
<Package group="MIMS.me">
<Name>MIMS.me.microbial.4.0</Name>
<DisplayName>
MIMS: metagenome/environmental, microbial; version 4.0
</DisplayName>
<ShortName>MIMS Environmental/Metagenome</ShortName>
<EnvPackage>microbial</EnvPackage>
<EnvPackageDisplay>microbial mat/biofilm</EnvPackageDisplay>
<Description/>
<Example>SAMN02213668</Example>
</Package>
<Package group="MIMS.me">
<Name>MIMS.me.miscellaneous.4.0</Name>
<DisplayName>
MIMS: metagenome/environmental, miscellaneous; version 4.0
</DisplayName>
<ShortName>MIMS Environmental/Metagenome</ShortName>
<EnvPackage>miscellaneous</EnvPackage>
<EnvPackageDisplay>miscellaneous or artificial</EnvPackageDisplay>
<Description/>
<Example>SAMN02146473</Example>
</Package>
<Package group="MIMS.me">
<Name>MIMS.me.plant-associated.4.0</Name>
<DisplayName>
MIMS: metagenome/environmental, plant-associated; version 4.0
</DisplayName>
<ShortName>MIMS Environmental/Metagenome</ShortName>
<EnvPackage>plant-associated</EnvPackage>
<EnvPackageDisplay>plant-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN02918283</Example>
</Package>
<Package group="MIMS.me">
<Name>MIMS.me.sediment.4.0</Name>
<DisplayName>
MIMS: metagenome/environmental, sediment; version 4.0
</DisplayName>
<ShortName>MIMS Environmental/Metagenome</ShortName>
<EnvPackage>sediment</EnvPackage>
<EnvPackageDisplay>sediment</EnvPackageDisplay>
<Description/>
<Example>SAMN02892988</Example>
</Package>
<Package group="MIMS.me">
<Name>MIMS.me.soil.4.0</Name>
<DisplayName>MIMS: metagenome/environmental, soil; version 4.0</DisplayName>
<ShortName>MIMS Environmental/Metagenome</ShortName>
<EnvPackage>soil</EnvPackage>
<EnvPackageDisplay>soil</EnvPackageDisplay>
<Description/>
<Example>SAMN02899785</Example>
</Package>
<Package group="MIMS.me">
<Name>MIMS.me.wastewater.4.0</Name>
<DisplayName>
MIMS: metagenome/environmental, wastewater; version 4.0
</DisplayName>
<ShortName>MIMS Environmental/Metagenome</ShortName>
<EnvPackage>wastewater</EnvPackage>
<EnvPackageDisplay>wastewater/sludge</EnvPackageDisplay>
<Description/>
<Example>SAMN02911905</Example>
</Package>
<Package group="MIMS.me">
<Name>MIMS.me.water.4.0</Name>
<DisplayName>MIMS: metagenome/environmental, water; version 4.0</DisplayName>
<ShortName>MIMS Environmental/Metagenome</ShortName>
<EnvPackage>water</EnvPackage>
<EnvPackageDisplay>water</EnvPackageDisplay>
<Description/>
<Example>SAMN00001362</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.4.0</Name>
<DisplayName>MIGS: cultured bacteria/archaea; version 4.0</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>No environmental package</EnvPackage>
<EnvPackageDisplay>No environmental package</EnvPackageDisplay>
<Description/>
<Example>SAMN02676578</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.air.4.0</Name>
<DisplayName>MIGS: cultured bacteria/archaea, air; version 4.0</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>air</EnvPackage>
<EnvPackageDisplay>air</EnvPackageDisplay>
<Description/>
<Example>SAMN02676578</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.built.4.0</Name>
<DisplayName>
MIGS: cultured bacteria/archaea, built; version 4.0
</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>built</EnvPackage>
<EnvPackageDisplay>built</EnvPackageDisplay>
<Description/>
<Example>SAMN02676578</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.host-associated.4.0</Name>
<DisplayName>
MIGS: cultured bacteria/archaea, host-associated; version 4.0
</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>host-associated</EnvPackage>
<EnvPackageDisplay>host-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN02378805</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.human-associated.4.0</Name>
<DisplayName>
MIGS: cultured bacteria/archaea, human-associated; version 4.0
</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>human-associated</EnvPackage>
<EnvPackageDisplay>human-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN02839585</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.human-gut.4.0</Name>
<DisplayName>
MIGS: cultured bacteria/archaea, human-gut; version 4.0
</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>human-gut</EnvPackage>
<EnvPackageDisplay>human-gut</EnvPackageDisplay>
<Description/>
<Example>SAMN02402847</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.human-oral.4.0</Name>
<DisplayName>
MIGS: cultured bacteria/archaea, human-oral; version 4.0
</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>human-oral</EnvPackage>
<EnvPackageDisplay>human-oral</EnvPackageDisplay>
<Description/>
<Example>SAMN02698681</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.human-skin.4.0</Name>
<DisplayName>
MIGS: cultured bacteria/archaea, human-skin; version 4.0
</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>human-skin</EnvPackage>
<EnvPackageDisplay>human-skin</EnvPackageDisplay>
<Description/>
<Example>SAMN02736786</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.human-vaginal.4.0</Name>
<DisplayName>
MIGS: cultured bacteria/archaea, human-vaginal; version 4.0
</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>human-vaginal</EnvPackage>
<EnvPackageDisplay>human-vaginal</EnvPackageDisplay>
<Description/>
<Example>SAMN02400363</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.microbial.4.0</Name>
<DisplayName>
MIGS: cultured bacteria/archaea, microbial; version 4.0
</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>microbial</EnvPackage>
<EnvPackageDisplay>microbial mat/biofilm</EnvPackageDisplay>
<Description/>
<Example>SAMN02641242</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.miscellaneous.4.0</Name>
<DisplayName>
MIGS: cultured bacteria/archaea, miscellaneous; version 4.0
</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>miscellaneous</EnvPackage>
<EnvPackageDisplay>miscellaneous or artificial</EnvPackageDisplay>
<Description/>
<Example>SAMN02894449</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.plant-associated.4.0</Name>
<DisplayName>
MIGS: cultured bacteria/archaea, plant-associated; version 4.0
</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>plant-associated</EnvPackage>
<EnvPackageDisplay>plant-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN02866194</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.sediment.4.0</Name>
<DisplayName>
MIGS: cultured bacteria/archaea, sediment; version 4.0
</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>sediment</EnvPackage>
<EnvPackageDisplay>sediment</EnvPackageDisplay>
<Description/>
<Example>SAMN02725841</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.soil.4.0</Name>
<DisplayName>MIGS: cultured bacteria/archaea, soil; version 4.0</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>soil</EnvPackage>
<EnvPackageDisplay>soil</EnvPackageDisplay>
<Description/>
<Example>SAMN02853142</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.wastewater.4.0</Name>
<DisplayName>
MIGS: cultured bacteria/archaea, wastewater; version 4.0
</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>wastewater</EnvPackage>
<EnvPackageDisplay>wastewater/sludge</EnvPackageDisplay>
<Description/>
<Example>SAMN02364111</Example>
</Package>
<Package group="MIGS.ba">
<Name>MIGS.ba.water.4.0</Name>
<DisplayName>
MIGS: cultured bacteria/archaea, water; version 4.0
</DisplayName>
<ShortName>MIGS Cultured Bacterial/Archaeal</ShortName>
<EnvPackage>water</EnvPackage>
<EnvPackageDisplay>water</EnvPackageDisplay>
<Description/>
<Example>SAMN02867807</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.4.0</Name>
<DisplayName>MIGS: eukaryote; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>No environmental package</EnvPackage>
<EnvPackageDisplay>No environmental package</EnvPackageDisplay>
<Description/>
<Example>SAMN02900669</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.air.4.0</Name>
<DisplayName>MIGS: eukaryote, air; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>air</EnvPackage>
<EnvPackageDisplay>air</EnvPackageDisplay>
<Description/>
<Example>SAMN02900669</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.built.4.0</Name>
<DisplayName>MIGS: eukaryote, built; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>built</EnvPackage>
<EnvPackageDisplay>built</EnvPackageDisplay>
<Description/>
<Example>SAMN02900669</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.host-associated.4.0</Name>
<DisplayName>MIGS: eukaryote, host-associated; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>host-associated</EnvPackage>
<EnvPackageDisplay>host-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN02776974</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.human-associated.4.0</Name>
<DisplayName>MIGS: eukaryote, human-associated; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>human-associated</EnvPackage>
<EnvPackageDisplay>human-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN02909964</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.human-gut.4.0</Name>
<DisplayName>MIGS: eukaryote, human-gut; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>human-gut</EnvPackage>
<EnvPackageDisplay>human-gut</EnvPackageDisplay>
<Description/>
<Example>SAMN02909964</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.human-oral.4.0</Name>
<DisplayName>MIGS: eukaryote, human-oral; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>human-oral</EnvPackage>
<EnvPackageDisplay>human-oral</EnvPackageDisplay>
<Description/>
<Example>SAMN02909964</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.human-skin.4.0</Name>
<DisplayName>MIGS: eukaryote, human-skin; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>human-skin</EnvPackage>
<EnvPackageDisplay>human-skin</EnvPackageDisplay>
<Description/>
<Example>SAMN02909964</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.human-vaginal.4.0</Name>
<DisplayName>MIGS: eukaryote, human-vaginal; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>human-vaginal</EnvPackage>
<EnvPackageDisplay>human-vaginal</EnvPackageDisplay>
<Description/>
<Example>SAMN02909964</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.microbial.4.0</Name>
<DisplayName>MIGS: eukaryote, microbial; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>microbial</EnvPackage>
<EnvPackageDisplay>microbial mat/biofilm</EnvPackageDisplay>
<Description/>
<Example>SAMN02639477</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.miscellaneous.4.0</Name>
<DisplayName>MIGS: eukaryote, miscellaneous; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>miscellaneous</EnvPackage>
<EnvPackageDisplay>miscellaneous or artificial</EnvPackageDisplay>
<Description/>
<Example>SAMN02838029</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.plant-associated.4.0</Name>
<DisplayName>MIGS: eukaryote, plant-associated; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>plant-associated</EnvPackage>
<EnvPackageDisplay>plant-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN02469069</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.sediment.4.0</Name>
<DisplayName>MIGS: eukaryote, sediment; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>sediment</EnvPackage>
<EnvPackageDisplay>sediment</EnvPackageDisplay>
<Description/>
<Example>SAMN02903338</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.soil.4.0</Name>
<DisplayName>MIGS: eukaryote, soil; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>soil</EnvPackage>
<EnvPackageDisplay>soil</EnvPackageDisplay>
<Description/>
<Example>SAMN02796050</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.wastewater.4.0</Name>
<DisplayName>MIGS: eukaryote, wastewater; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>wastewater</EnvPackage>
<EnvPackageDisplay>wastewater/sludge</EnvPackageDisplay>
<Description/>
<Example>SAMN02928772</Example>
</Package>
<Package group="MIGS.eu">
<Name>MIGS.eu.water.4.0</Name>
<DisplayName>MIGS: eukaryote, water; version 4.0</DisplayName>
<ShortName>MIGS Eukaryotic</ShortName>
<EnvPackage>water</EnvPackage>
<EnvPackageDisplay>water</EnvPackageDisplay>
<Description/>
<Example>SAMN02729510</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.4.0</Name>
<DisplayName>MIGS: virus; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>No environmental package</EnvPackage>
<EnvPackageDisplay>No environmental package</EnvPackageDisplay>
<Description/>
<Example>SAMN02412548</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.air.4.0</Name>
<DisplayName>MIGS: virus, air; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>air</EnvPackage>
<EnvPackageDisplay>air</EnvPackageDisplay>
<Description/>
<Example>SAMN02412548</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.built.4.0</Name>
<DisplayName>MIGS: virus, built; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>built</EnvPackage>
<EnvPackageDisplay>built</EnvPackageDisplay>
<Description/>
<Example>SAMN02412548</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.host-associated.4.0</Name>
<DisplayName>MIGS: virus, host-associated; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>host-associated</EnvPackage>
<EnvPackageDisplay>host-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN00792846</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.human-associated.4.0</Name>
<DisplayName>MIGS: virus, human-associated; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>human-associated</EnvPackage>
<EnvPackageDisplay>human-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN00780298</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.human-gut.4.0</Name>
<DisplayName>MIGS: virus, human-gut; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>human-gut</EnvPackage>
<EnvPackageDisplay>human-gut</EnvPackageDisplay>
<Description/>
<Example>SAMN00780298</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.human-oral.4.0</Name>
<DisplayName>MIGS: virus, human-oral; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>human-oral</EnvPackage>
<EnvPackageDisplay>human-oral</EnvPackageDisplay>
<Description/>
<Example>SAMN00780298</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.human-skin.4.0</Name>
<DisplayName>MIGS: virus, human-skin; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>human-skin</EnvPackage>
<EnvPackageDisplay>human-skin</EnvPackageDisplay>
<Description/>
<Example>SAMN00780298</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.human-vaginal.4.0</Name>
<DisplayName>MIGS: virus, human-vaginal; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>human-vaginal</EnvPackage>
<EnvPackageDisplay>human-vaginal</EnvPackageDisplay>
<Description/>
<Example>SAMN00780298</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.microbial.4.0</Name>
<DisplayName>MIGS: virus, microbial; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>microbial</EnvPackage>
<EnvPackageDisplay>microbial mat/biofilm</EnvPackageDisplay>
<Description/>
<Example>SAMN02412548</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.miscellaneous.4.0</Name>
<DisplayName>MIGS: virus, miscellaneous; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>miscellaneous</EnvPackage>
<EnvPackageDisplay>miscellaneous or artificial</EnvPackageDisplay>
<Description/>
<Example>SAMN02412548</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.plant-associated.4.0</Name>
<DisplayName>MIGS: virus, plant-associated; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>plant-associated</EnvPackage>
<EnvPackageDisplay>plant-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN02412548</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.sediment.4.0</Name>
<DisplayName>MIGS: virus, sediment; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>sediment</EnvPackage>
<EnvPackageDisplay>sediment</EnvPackageDisplay>
<Description/>
<Example>SAMN02412548</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.soil.4.0</Name>
<DisplayName>MIGS: virus, soil; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>soil</EnvPackage>
<EnvPackageDisplay>soil</EnvPackageDisplay>
<Description/>
<Example>SAMN02692667</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.wastewater.4.0</Name>
<DisplayName>MIGS: virus, wastewater; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>wastewater</EnvPackage>
<EnvPackageDisplay>wastewater/sludge</EnvPackageDisplay>
<Description/>
<Example>SAMN02412548</Example>
</Package>
<Package group="MIGS.vi">
<Name>MIGS.vi.water.4.0</Name>
<DisplayName>MIGS: virus, water; version 4.0</DisplayName>
<ShortName>MIGS Viral</ShortName>
<EnvPackage>water</EnvPackage>
<EnvPackageDisplay>water</EnvPackageDisplay>
<Description/>
<Example>SAMN02928814</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.4.0</Name>
<DisplayName>MIMARKS: specimen; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>No environmental package</EnvPackage>
<EnvPackageDisplay>No environmental package</EnvPackageDisplay>
<Description/>
<Example>SAMN02905116</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.air.4.0</Name>
<DisplayName>MIMARKS: specimen, air; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>air</EnvPackage>
<EnvPackageDisplay>air</EnvPackageDisplay>
<Description/>
<Example>SAMN02905116</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.built.4.0</Name>
<DisplayName>MIMARKS: specimen, built; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>built</EnvPackage>
<EnvPackageDisplay>built</EnvPackageDisplay>
<Description/>
<Example>SAMN02905116</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.host-associated.4.0</Name>
<DisplayName>MIMARKS: specimen, host-associated; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>host-associated</EnvPackage>
<EnvPackageDisplay>host-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN02902605</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.human-associated.4.0</Name>
<DisplayName>MIMARKS: specimen, human-associated; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>human-associated</EnvPackage>
<EnvPackageDisplay>human-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN02256168</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.human-gut.4.0</Name>
<DisplayName>MIMARKS: specimen, human-gut; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>human-gut</EnvPackage>
<EnvPackageDisplay>human-gut</EnvPackageDisplay>
<Description/>
<Example>SAMN02799483</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.human-oral.4.0</Name>
<DisplayName>MIMARKS: specimen, human-oral; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>human-oral</EnvPackage>
<EnvPackageDisplay>human-oral</EnvPackageDisplay>
<Description/>
<Example>SAMN02486006</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.human-skin.4.0</Name>
<DisplayName>MIMARKS: specimen, human-skin; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>human-skin</EnvPackage>
<EnvPackageDisplay>human-skin</EnvPackageDisplay>
<Description/>
<Example>SAMN02256168</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.human-vaginal.4.0</Name>
<DisplayName>MIMARKS: specimen, human-vaginal; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>human-vaginal</EnvPackage>
<EnvPackageDisplay>human-vaginal</EnvPackageDisplay>
<Description/>
<Example>SAMN02256168</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.microbial.4.0</Name>
<DisplayName>MIMARKS: specimen, microbial; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>microbial</EnvPackage>
<EnvPackageDisplay>microbial mat/biofilm</EnvPackageDisplay>
<Description/>
<Example>SAMN02905116</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.miscellaneous.4.0</Name>
<DisplayName>MIMARKS: specimen, miscellaneous; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>miscellaneous</EnvPackage>
<EnvPackageDisplay>miscellaneous or artificial</EnvPackageDisplay>
<Description/>
<Example>SAMN02690052</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.plant-associated.4.0</Name>
<DisplayName>MIMARKS: specimen, plant-associated; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>plant-associated</EnvPackage>
<EnvPackageDisplay>plant-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN03009543</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.sediment.4.0</Name>
<DisplayName>MIMARKS: specimen, sediment; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>sediment</EnvPackage>
<EnvPackageDisplay>sediment</EnvPackageDisplay>
<Description/>
<Example>SAMN02044724</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.soil.4.0</Name>
<DisplayName>MIMARKS: specimen, soil; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>soil</EnvPackage>
<EnvPackageDisplay>soil</EnvPackageDisplay>
<Description/>
<Example>SAMN02468916</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.wastewater.4.0</Name>
<DisplayName>MIMARKS: specimen, wastewater; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>wastewater</EnvPackage>
<EnvPackageDisplay>wastewater/sludge</EnvPackageDisplay>
<Description/>
<Example>SAMN02382038</Example>
</Package>
<Package group="MIMARKS.specimen">
<Name>MIMARKS.specimen.water.4.0</Name>
<DisplayName>MIMARKS: specimen, water; version 4.0</DisplayName>
<ShortName>MIMARKS Specimen</ShortName>
<EnvPackage>water</EnvPackage>
<EnvPackageDisplay>water</EnvPackageDisplay>
<Description/>
<Example>SAMN02927987</Example>
</Package>
<Package group="MIMARKS.survey">
<Name>MIMARKS.survey.air.4.0</Name>
<DisplayName>MIMARKS: survey, air; version 4.0</DisplayName>
<ShortName>MIMARKS Survey related</ShortName>
<EnvPackage>air</EnvPackage>
<EnvPackageDisplay>air</EnvPackageDisplay>
<Description/>
<Example>SAMN02872842</Example>
</Package>
<Package group="MIMARKS.survey">
<Name>MIMARKS.survey.built.4.0</Name>
<DisplayName>MIMARKS: survey, built; version 4.0</DisplayName>
<ShortName>MIMARKS Survey related</ShortName>
<EnvPackage>built</EnvPackage>
<EnvPackageDisplay>built</EnvPackageDisplay>
<Description/>
<Example>SAMN02872842</Example>
</Package>
<Package group="MIMARKS.survey">
<Name>MIMARKS.survey.host-associated.4.0</Name>
<DisplayName>MIMARKS: survey, host-associated; version 4.0</DisplayName>
<ShortName>MIMARKS Survey related</ShortName>
<EnvPackage>host-associated</EnvPackage>
<EnvPackageDisplay>host-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN02908805</Example>
</Package>
<Package group="MIMARKS.survey">
<Name>MIMARKS.survey.human-associated.4.0</Name>
<DisplayName>MIMARKS: survey, human-associated; version 4.0</DisplayName>
<ShortName>MIMARKS Survey related</ShortName>
<EnvPackage>human-associated</EnvPackage>
<EnvPackageDisplay>human-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN02256130</Example>
</Package>
<Package group="MIMARKS.survey">
<Name>MIMARKS.survey.human-gut.4.0</Name>
<DisplayName>MIMARKS: survey, human-gut; version 4.0</DisplayName>
<ShortName>MIMARKS Survey related</ShortName>
<EnvPackage>human-gut</EnvPackage>
<EnvPackageDisplay>human-gut</EnvPackageDisplay>
<Description/>
<Example>SAMN02722276</Example>
</Package>
<Package group="MIMARKS.survey">
<Name>MIMARKS.survey.human-oral.4.0</Name>
<DisplayName>MIMARKS: survey, human-oral; version 4.0</DisplayName>
<ShortName>MIMARKS Survey related</ShortName>
<EnvPackage>human-oral</EnvPackage>
<EnvPackageDisplay>human-oral</EnvPackageDisplay>
<Description/>
<Example>SAMN02584167</Example>
</Package>
<Package group="MIMARKS.survey">
<Name>MIMARKS.survey.human-skin.4.0</Name>
<DisplayName>MIMARKS: survey, human-skin; version 4.0</DisplayName>
<ShortName>MIMARKS Survey related</ShortName>
<EnvPackage>human-skin</EnvPackage>
<EnvPackageDisplay>human-skin</EnvPackageDisplay>
<Description/>
<Example>SAMN02256130</Example>
</Package>
<Package group="MIMARKS.survey">
<Name>MIMARKS.survey.human-vaginal.4.0</Name>
<DisplayName>MIMARKS: survey, human-vaginal; version 4.0</DisplayName>
<ShortName>MIMARKS Survey related</ShortName>
<EnvPackage>human-vaginal</EnvPackage>
<EnvPackageDisplay>human-vaginal</EnvPackageDisplay>
<Description/>
<Example>SAMN02256130</Example>
</Package>
<Package group="MIMARKS.survey">
<Name>MIMARKS.survey.microbial.4.0</Name>
<DisplayName>MIMARKS: survey, microbial; version 4.0</DisplayName>
<ShortName>MIMARKS Survey related</ShortName>
<EnvPackage>microbial</EnvPackage>
<EnvPackageDisplay>microbial mat/biofilm</EnvPackageDisplay>
<Description/>
<Example>SAMN02898629</Example>
</Package>
<Package group="MIMARKS.survey">
<Name>MIMARKS.survey.miscellaneous.4.0</Name>
<DisplayName>MIMARKS: survey, miscellaneous; version 4.0</DisplayName>
<ShortName>MIMARKS Survey related</ShortName>
<EnvPackage>miscellaneous</EnvPackage>
<EnvPackageDisplay>miscellaneous or artificial</EnvPackageDisplay>
<Description/>
<Example>SAMN02721610</Example>
</Package>
<Package group="MIMARKS.survey">
<Name>MIMARKS.survey.plant-associated.4.0</Name>
<DisplayName>MIMARKS: survey, plant-associated; version 4.0</DisplayName>
<ShortName>MIMARKS Survey related</ShortName>
<EnvPackage>plant-associated</EnvPackage>
<EnvPackageDisplay>plant-associated</EnvPackageDisplay>
<Description/>
<Example>SAMN01888400</Example>
</Package>
<Package group="MIMARKS.survey">
<Name>MIMARKS.survey.sediment.4.0</Name>
<DisplayName>MIMARKS: survey, sediment; version 4.0</DisplayName>
<ShortName>MIMARKS Survey related</ShortName>
<EnvPackage>sediment</EnvPackage>
<EnvPackageDisplay>sediment</EnvPackageDisplay>
<Description/>
<Example>SAMN02866459</Example>
</Package>
<Package group="MIMARKS.survey">
<Name>MIMARKS.survey.soil.4.0</Name>
<DisplayName>MIMARKS: survey, soil; version 4.0</DisplayName>
<ShortName>MIMARKS Survey related</ShortName>
<EnvPackage>soil</EnvPackage>
<EnvPackageDisplay>soil</EnvPackageDisplay>
<Description/>
<Example>SAMN02919305</Example>
</Package>
<Package group="MIMARKS.survey">
<Name>MIMARKS.survey.wastewater.4.0</Name>
<DisplayName>MIMARKS: survey, wastewater; version 4.0</DisplayName>
<ShortName>MIMARKS Survey related</ShortName>
<EnvPackage>wastewater</EnvPackage>
<EnvPackageDisplay>wastewater/sludge</EnvPackageDisplay>
<Description/>
<Example>SAMN02678185</Example>
</Package>
<Package group="MIMARKS.survey">
<Name>MIMARKS.survey.water.4.0</Name>
<DisplayName>MIMARKS: survey, water; version 4.0</DisplayName>
<ShortName>MIMARKS Survey related</ShortName>
<EnvPackage>water</EnvPackage>
<EnvPackageDisplay>water</EnvPackageDisplay>
<Description/>
<Example>SAMN02767997</Example>
</Package>
<Package>
<Name>Beta-lactamase.1.0</Name>
<DisplayName>Beta-lactamase; version 1.0</DisplayName>
<ShortName>Beta-lactamase</ShortName>
<EnvPackage/>
<EnvPackageDisplay/>
<Description>
Use for beta-lactamase gene transformants that have sequence and antibiotic resistance data. Please use the 'Supplementary Files' wizard to submit corresponding Sequin and Antibiogram files.
</Description>
<Example>SAMN04099646</Example>
</Package>
</BioSamplePackages>
