class PackageSingleton {
  constructor() {
    this.choices=this.packages();
  }

  packages() {
    return ['Generic.1.0',
            'Pathogen.cl.1.0','Pathogen.env.1.0',
            'Microbe.1.0','Model.organism.animal.1.0','Metagenome.environmental.1.0',
            'Invertebrate.1.0','Human.1.0','Plant.1.0','Virus.1.0',
            'MIMS.me.air.4.0','MIMS.me.built.4.0','MIMS.me.host-associated.4.0',
            'MIMS.me.human-associated.4.0','MIMS.me.human-gut.4.0','MIMS.me.human-oral.4.0',
            'MIMS.me.human-skin.4.0','MIMS.me.human-vaginal.4.0','MIMS.me.microbial.4.0',
            'MIMS.me.miscellaneous.4.0','MIMS.me.plant-associated.4.0','MIMS.me.sediment.4.0',
            'MIMS.me.soil.4.0','MIMS.me.wastewater.4.0','MIMS.me.water.4.0',
            'MIGS.ba.4.0','MIGS.ba.air.4.0','MIGS.ba.built.4.0','MIGS.ba.host-associated.4.0',
            'MIGS.ba.human-associated.4.0','MIGS.ba.human-gut.4.0','MIGS.ba.human-oral.4.0',
            'MIGS.ba.human-skin.4.0','MIGS.ba.human-vaginal.4.0','MIGS.ba.microbial.4.0',
            'MIGS.ba.miscellaneous.4.0','MIGS.ba.plant-associated.4.0','MIGS.ba.sediment.4.0',
            'MIGS.ba.soil.4.0','MIGS.ba.wastewater.4.0','MIGS.ba.water.4.0','MIGS.eu.4.0','MIGS.eu.air.4.0',
            'MIGS.eu.built.4.0','MIGS.eu.host-associated.4.0','MIGS.eu.human-associated.4.0',
            'MIGS.eu.human-gut.4.0','MIGS.eu.human-oral.4.0','MIGS.eu.human-skin.4.0',
            'MIGS.eu.human-vaginal.4.0','MIGS.eu.microbial.4.0','MIGS.eu.miscellaneous.4.0',
            'MIGS.eu.plant-associated.4.0','MIGS.eu.sediment.4.0','MIGS.eu.soil.4.0','MIGS.eu.wastewater.4.0',
            'MIGS.eu.water.4.0','MIGS.vi.4.0','MIGS.vi.air.4.0','MIGS.vi.built.4.0',
            'MIGS.vi.host-associated.4.0','MIGS.vi.human-associated.4.0','MIGS.vi.human-gut.4.0',
            'MIGS.vi.human-oral.4.0','MIGS.vi.human-skin.4.0','MIGS.vi.human-vaginal.4.0',
            'MIGS.vi.microbial.4.0','MIGS.vi.miscellaneous.4.0','MIGS.vi.plant-associated.4.0',
            'MIGS.vi.sediment.4.0','MIGS.vi.soil.4.0','MIGS.vi.wastewater.4.0','MIGS.vi.water.4.0',
            'MIMARKS.specimen.4.0','MIMARKS.specimen.air.4.0','MIMARKS.specimen.built.4.0',
            'MIMARKS.specimen.host-associated.4.0','MIMARKS.specimen.human-associated.4.0',
            'MIMARKS.specimen.human-gut.4.0','MIMARKS.specimen.human-oral.4.0',
            'MIMARKS.specimen.human-skin.4.0','MIMARKS.specimen.human-vaginal.4.0',
            'MIMARKS.specimen.microbial.4.0','MIMARKS.specimen.miscellaneous.4.0',
            'MIMARKS.specimen.plant-associated.4.0','MIMARKS.specimen.sediment.4.0',
            'MIMARKS.specimen.soil.4.0','MIMARKS.specimen.wastewater.4.0','MIMARKS.specimen.water.4.0',
            'MIMARKS.survey.air.4.0','MIMARKS.survey.built.4.0','MIMARKS.survey.host-associated.4.0',
            'MIMARKS.survey.human-associated.4.0','MIMARKS.survey.human-gut.4.0',
            'MIMARKS.survey.human-oral.4.0','MIMARKS.survey.human-skin.4.0',
            'MIMARKS.survey.human-vaginal.4.0','MIMARKS.survey.microbial.4.0',
            'MIMARKS.survey.miscellaneous.4.0','MIMARKS.survey.plant-associated.4.0',
            'MIMARKS.survey.sediment.4.0','MIMARKS.survey.soil.4.0','MIMARKS.survey.wastewater.4.0',
            'MIMARKS.survey.water.4.0','Beta-lactamase.1.0'];
  }
}

module.exports = new PackageSingleton();
//module.exports={ choices:Package.choices }
