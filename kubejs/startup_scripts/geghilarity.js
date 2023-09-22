//Platform.mods.geghilarity.name = 'Geghilarity'
Platform.mods.modern_industrialization.name = 'Gregic Industrial'
//Platform.mods.geghilarity_fatmachines.name = 'Geghilarity Fatmachines'

//onEvent('fluid.registry', event => {
StartupEvents.registry('fluid', event => {

  event
    .create('geghilarity:nitric_acid')
  	.displayName('Nitric Acid') 
	//.stillTexture('geghilarity:block/nastill')
	//.stillTexture('tnp:block/molten_zinc_still')
    //.flowingTexture('geghilarity:block/naflow')
	.thinTexture(0xBBBD03)
    .noBucket

	event
    .create('geghilarity:nitrogen_dioxide')
  	.displayName('Nitrogen Dioxide') 
	.thinTexture(0x34ADFF)
    .noBucket
	
	event
    .create('geghilarity:nitric_oxide')
  	.displayName('Nitric Oxide') 
	.thinTexture(0x50778C)
    .noBucket
	
	// MI
		/*
	event
    .create('geghilarity:chlorine')
  	.displayName('Chlorine') 
	.thinTexture(0x1D473D)
    .noBucket
	
	// MI
	event
    .create('geghilarity:hydrochloric_acid')
  	.displayName('Hydrochloric Acid') 
	.thinTexture(0x6C7572)
    .noBucket
	*/
	
	event
    .create('geghilarity:chloroauric_acid')
  	.displayName('Cholorauric Acid') 
	.thinTexture(0xA59C1C)
    .noBucket
	
	// PGM
	event
    .create('geghilarity:ammonia')
  	.displayName('Ammonia') 
	.thinTexture(0x302A53)
    .noBucket
	
	event
    .create('geghilarity:ammonium_chloride')
  	.displayName('Ammonium Chloride') 
	.thinTexture(0x6B0E14)
    .noBucket
	
	event
    .create('geghilarity:aqua_regia')
  	.displayName('Aqua Regia') 
	.thinTexture(0xB57E25)
    .noBucket
	
	event
    .create('geghilarity:platinum_concentrate')
  	.displayName('Platinum Concentrate') 
	.thinTexture(0xBAB86F)
    .noBucket
	
	event
    .create('geghilarity:palladium_enriched_ammonia')
  	.displayName('Palladium Enriched Ammonia') 
	.thinTexture(0xBCBD73)
    .noBucket
	
	event
    .create('geghilarity:carbon_monoxide')
  	.displayName('Carbon Monoxide') 
	.thinTexture(0x153555)
    .noBucket
	
	event
    .create('geghilarity:sodium_formate')
  	.displayName('Sodium Formate') 
	.thinTexture(0xBC8080)
    .noBucket
	
	event
    .create('geghilarity:sulfur_trioxide')
  	.displayName('Sulfur Trioxide') 
	.thinTexture(0x63641C)
    .noBucket
	
	event
    .create('geghilarity:formic_acid')
  	.displayName('Formic Acid') 
	.thinTexture(0xBD815E)
    .noBucket
	
	event
    .create('geghilarity:acetic_acid')
  	.displayName('Acetic Acid') 
	.thinTexture(0x756C64)
    .noBucket
	
	event
    .create('geghilarity:ethane')
  	.displayName('Ethane') 
	.thinTexture(0x767794)
    .noBucket
	
	event
    .create('geghilarity:carbon_dioxide')
  	.displayName('Carbon Dioxide') 
	.thinTexture(0x7E9BB7)
    .noBucket
	
	event
    .create('geghilarity:sodium_persulfate')
  	.displayName('Sodium Persulfate') 
	.thinTexture(0x0E4A4F)
    .noBucket
	
	event
    .create('geghilarity:rhodium_sulfate')
  	.displayName('Rhodium Sulfate') 
	.thinTexture(0xB18144)
    .noBucket
	
	event
    .create('geghilarity:rhodium_sulfate_solution')
  	.displayName('Rhodium Sulfate Solution') 
	.thinTexture(0xB9884B)
    .noBucket
	
	event
    .create('geghilarity:rhodium_salt_solution')
  	.displayName('Rhodium Salt Solution') 
	.thinTexture(0x4A5663)
    .noBucket
	
	event
    .create('geghilarity:rhodium_filter_cake_solution')
  	.displayName('Rhodium Filter Cake Solution') 
	.thinTexture(0x4E5A66)
    .noBucket
	
	event
    .create('geghilarity:ruthenium_tetroxide_solution')
  	.displayName('Ruthenium Tetroxide Solution') 
	.thinTexture(0x8F8F8F)
    .noBucket
	
	event
    .create('geghilarity:hot_ruthenium_tetroxide_solution')
  	.displayName('Hot Ruthenium Tetroxide Solution') 
	.thinTexture(0xA1A1A1)
    .noBucket
	
	event
    .create('geghilarity:ruthenium_tetroxide')
  	.displayName('Ruthenium Tetroxide') 
	.thinTexture(0x919292)
    .noBucket
	
	event
    .create('geghilarity:acidic_osmium_tetroxide_solution')
  	.displayName('Acidic Osmium Tetroxide Solution') 
	.thinTexture(0x1F1FA9)
    .noBucket
	
	event
    .create('geghilarity:osmium_tetroxide_solution')
  	.displayName('Osmium Tetroxide Solution') 
	.thinTexture(0x1F1FB6)
    .noBucket
	
	event
    .create('geghilarity:acidic_iridium_solution')
  	.displayName('Acidic Iridium Solution') 
	.thinTexture(0x933F49)
    .noBucket
	
	//part 2
	event
    .create('geghilarity:titanium_tetrachloride')
  	.displayName('Titanium Tetrachloride') 
	.thinTexture(0x60183C)
    .noBucket
	
	event
    .create('geghilarity:salt_water')
  	.displayName('Salt Water') 
	.thinTexture(0x0202BB)
    .noBucket
	
	//part 3
	event
    .create('geghilarity:hydrogen_sulfide')
  	.displayName('Hydrogen Sulfide') 
	.thinTexture(0xD65703)
    .noBucket
	
	event
    .create('geghilarity:wood_tar')
  	.displayName('Wood Tar') 
	.thinTexture(0x231A15)
    .noBucket
	
	event
    .create('geghilarity:dichlorobenzene')
  	.displayName('Dichlorobenzene') 
	.thinTexture(0x0C323D)
    .noBucket
	
	event
    .create('geghilarity:phenol')
  	.displayName('Phenol') 
	.thinTexture(0x4C3323)
    .noBucket
	
	event
    .create('geghilarity:calcium_acetate_solution')
  	.displayName('Calcium Acetate Solution') 
	.thinTexture(0x847971)
    .noBucket
	
	event
    .create('geghilarity:acetone')
  	.displayName('Acetone') 
	.thinTexture(0x6F7072)
    .noBucket
	
	event
    .create('geghilarity:quicklime_sludge')
  	.displayName('Quicklime Sludge') 
	.thinTexture(0x4D4D4D)
    .noBucket
	
	event
    .create('geghilarity:biomass')
  	.displayName('Biomass') 
	.thinTexture(0x00D700)
    .noBucket
	
	event
    .create('geghilarity:glycerol')
  	.displayName('Glycerol') 
	.thinTexture(0x588658)
    .noBucket
	
	event
    .create('geghilarity:epichlorohydrin')
  	.displayName('Epichlorohydrin') 
	.thinTexture(0xBABBBD)
    .noBucket
	
	event
    .create('geghilarity:bisphenol_a')
  	.displayName('Bisphenol A') 
	.thinTexture(0x816B10)
    .noBucket
	
	event
    .create('geghilarity:diluted_hydrochloric_acid')
  	.displayName('Diluted Hydrochloric Acid') 
	.thinTexture(0x5D6667)
    .noBucket
	
	event
    .create('geghilarity:epoxy_resin')
  	.displayName('Epoxy resin') 
	.thinTexture(0x996D15)
    .noBucket
	
	event
    .create('geghilarity:mercury')
  	.displayName('Mercury') 
	.thinTexture(0xBDA4A4)
    .noBucket
	
	//AM
	event
    .create('geghilarity:rich_nitrogen_mixture')
	.thinTexture(0x4F6EA3)
    .noBucket
	
	event
    .create('geghilarity:oxidized_rich_nitrogen_mixture')
	.thinTexture(0x55699C)
    .noBucket
	
	event
    .create('geghilarity:ethanolamine')
	.thinTexture(0x556069)
    .noBucket
	
	event
    .create('geghilarity:purified_rich_nitrogen_mixture')
	.thinTexture(0x506EA0)
    .noBucket
	
	event
    .create('geghilarity:carbonated_ethanolamine')
	.thinTexture(0x56616A)
    .noBucket
	
	event
    .create('geghilarity:ammonia_rich_mixture')
	.thinTexture(0x294C7A)
    .noBucket
	
	//LCR
	event
    .create('geghilarity:chloroform')
	.thinTexture(0x562461)
    .noBucket
	
	event
    .create('geghilarity:fluorine')
	.thinTexture(0x3A6A64)
    .noBucket
	
	event
    .create('geghilarity:hydrofluoric_acid')
	.thinTexture(0x0B5163)
    .noBucket
	
	event
    .create('geghilarity:tetrafluoroethylene')
	.thinTexture(0x4A4A4B)
    .noBucket
	
	event
    .create('geghilarity:polytetrafluoroethylene')
	.thinTexture(0x494949)
    .noBucket
	
	event
    .create('geghilarity:diluted_sulfuric_acid')
	.thinTexture(0x6D491C)
    .noBucket
	
	event
    .create('geghilarity:sodium_hydroxide_bauxite')
	.thinTexture(0x8C5414)
    .noBucket
	
	event
    .create('geghilarity:impure_aluminium_hydroxide_solution')
	.thinTexture(0x9E4A2E)
    .noBucket
	
	event
    .create('geghilarity:red_mud')
	.thinTexture(0x942601)
    .noBucket
	
	event
    .create('geghilarity:pure_aluminium_hydroxide_solution')
	.thinTexture(0x642B9E)
    .noBucket
	
	event
    .create('geghilarity:neutralised_red_mud')
	.thinTexture(0x952601)
    .noBucket
	
	event
    .create('geghilarity:red_slurry')
	.thinTexture(0x982601)
    .noBucket
	
	event
    .create('geghilarity:ferric_ree_chloride')
	.displayName('Ferric REE Chloride')
	.thinTexture(0x242414)
    .noBucket
	
	event
    .create('geghilarity:titanyl_sulfate')
	.thinTexture(0xA12E5C)
    .noBucket
	
	event
    .create('geghilarity:sodium_hexafluoroaluminate')
	.thinTexture(0x5C310D)
    .noBucket
	
	// naquadah
	
	event
    .create('geghilarity:lead_zinc_solution')
	.displayName('Lead-Zinc Solution') 
	.thinTexture(0x260803)
    .noBucket
	
	event
    .create('geghilarity:naquadah_sulfate')
	.thinTexture(0x2E2B12)
    .noBucket
	
	event
    .create('geghilarity:potassium_hydroxide')
	.thinTexture(0x5B619B)
    .noBucket
	
	event
    .create('geghilarity:naquadah_difluoride')
	.thinTexture(0x253235)
    .noBucket
	
	event
    .create('geghilarity:fluoronaquadric_acid')
	.thinTexture(0x344345)
    .noBucket
	
	event
    .create('geghilarity:naquadric_solution')
	.thinTexture(0x1B1A1C)
    .noBucket
	
	event
    .create('geghilarity:fluoroantimonic_acid')
	.thinTexture(0x68787C)
    .noBucket
	
	event
    .create('geghilarity:antimony_pentafluoride')
	.thinTexture(0xA2A497)
    .noBucket
	
	event
    .create('geghilarity:indium_concentrate')
	.thinTexture(0x051E3F)
    .noBucket
	
	event
    .create('geghilarity:diluted_nitric_acid')
	.thinTexture(0x4E4F63)
    .noBucket
	
	event
    .create('geghilarity:ethylene_oxide')
	.thinTexture(0x7992A5)
    .noBucket
	
	// vanadium & coils

	event
    .create('geghilarity:iron_iii_chloride')
	.displayName('Iron III Chloride') 
	.thinTexture(0x060909)
    .noBucket
	
	event
    .create('geghilarity:sulfur_dioxide')
  	.displayName('Sulfur Dioxide') 
	.thinTexture(0x727219)
    .noBucket
	
	event
    .create('geghilarity:tin')
	.thinTexture(0x9C9C9C)
    .noBucket
	
	event
    .create('geghilarity:aluminium')
	.thinTexture(0x5B8EAB)
    .noBucket
	
	event
    .create('geghilarity:nichrome')
	.thinTexture(0x9293B0)
    .noBucket
	
	event
    .create('geghilarity:tungsten')
	.thinTexture(0x272727)
    .noBucket
	
	// RHE
	
	event
    .create('geghilarity:molybdenite_concentrate')
	.thinTexture(0x504f80)
    .noBucket
	
	event
    .create('geghilarity:hydrogen_cyanide')
	.thinTexture(0x53514A)
    .noBucket
	
	event
    .create('geghilarity:sodium_peroxide')
	.thinTexture(0xBFCE67)
    .noBucket
	
	event
    .create('geghilarity:gold_depleted_molybdenite_concentrate')
	.thinTexture(0x948db5)
    .noBucket
	
	event
    .create('geghilarity:trioctylmethylammonium_diethylhexylphosphate')
	.thinTexture(0xffae00)
    .noBucket
	
	event
    .create('geghilarity:octylmethylimidazolium_bistriflimide')
	.thinTexture(0x5d24d6)
    .noBucket
	
	event
    .create('geghilarity:organic_molybdenum_solution')
	.thinTexture(0x363852)
    .noBucket
	
	event
    .create('geghilarity:organic_perrhenate_solution')
	.thinTexture(0x363852)
    .noBucket
	
	event
    .create('geghilarity:octanol')
	.thinTexture(0x669c33)
    .noBucket
	
	event
    .create('geghilarity:trioctylamine')
	.thinTexture(0x46bdab)
    .noBucket
	
	event
    .create('geghilarity:chloromethane')
	.thinTexture(0x912A7A)
    .noBucket
	
	event
    .create('geghilarity:diethylhexylphosphoric_acid')
	.thinTexture(0x644fc2)
    .noBucket
	
	event
    .create('geghilarity:chlorooctane')
	.thinTexture(0x7dd12e)
    .noBucket
	
	event
    .create('geghilarity:glyoxal')
	.thinTexture(0x91917D)
    .noBucket
	
	event
    .create('geghilarity:formaldehyde')
	.thinTexture(0x3ab5a9)
    .noBucket
	
	event
    .create('geghilarity:methylamine')
	.thinTexture(0x554467)
    .noBucket
	
	event
    .create('geghilarity:methylimidazole')
	.thinTexture(0x773e78)
    .noBucket
	
	event
    .create('geghilarity:octylmethylimidazolium_chloride')
	.thinTexture(0x6c42c7)
    .noBucket
	
	event
    .create('geghilarity:oleum')
	.thinTexture(0xbdbdbd)
    .noBucket
	
	event
    .create('geghilarity:mesylic_acid')
	.thinTexture(0xcfc44e)
    .noBucket
	
	event
    .create('geghilarity:triflyl_fluoride')
	.thinTexture(0x339618)
    .noBucket
	
	event
    .create('geghilarity:lithium')
	.thinTexture(0x969DAC)
    .noBucket
	
	event
    .create('geghilarity:hydrogen_peroxide')
	.thinTexture(0x9BBCBC)
    .noBucket
	
	/////
	event
    .create('geghilarity:naphthalene')
	.thinTexture(0x339618)
    .noBucket
	
	event
    .create('geghilarity:coal_tar')
	.thinTexture(0x161717)
    .noBucket
	
	event
    .create('geghilarity:acetaldehyde')
	.thinTexture(0xBFBEBE)
    .noBucket
	
	event
    .create('geghilarity:methanol')
	.thinTexture(0x7E6605)
    .noBucket
	
	event
    .create('geghilarity:potassium')
	.thinTexture(0x91A8C3)
    .noBucket
	
	event
    .create('geghilarity:butyraldehide')
	.thinTexture(0xAB9A56)
    .noBucket
	
	event
    .create('geghilarity:ethylhydroxycaproaldehyde')
	.thinTexture(0x687cc4)
    .noBucket
	
	event
    .create('geghilarity:ethylhexanol')
	.thinTexture(0x5d6687)
    .noBucket
	
	event
    .create('geghilarity:triethylaluminium')
	.thinTexture(0x51b587)
    .noBucket
	
	event
    .create('geghilarity:trialkylaluminium_mixture')
	.thinTexture(0x66ad80)
    .noBucket
	
	event
    .create('geghilarity:fatty_alcohols_mixture')
	.thinTexture(0x57c27e)
    .noBucket
	
	event
    .create('geghilarity:dodecanol')
	.thinTexture(0x308a6d)
    .noBucket
	
	event
    .create('geghilarity:decanol')
	.thinTexture(0x308a40)
    .noBucket
	
	event
    .create('geghilarity:hexanol')
	.thinTexture(0x8da336)
    .noBucket
	
	event
    .create('geghilarity:phosphoric_acid')
	.thinTexture(0x7F7F0E)
    .noBucket
	
	event
    .create('geghilarity:cumene')
	.thinTexture(0x361C0A)
    .noBucket
	
	event
    .create('geghilarity:rare_earth_hydroxides_solution')
	.thinTexture(0x978460)
    .noBucket
	
	event
    .create('geghilarity:rare_earth_chloride_solution')
	.thinTexture(0x143A39)
    .noBucket
	
	event
    .create('geghilarity:air')
	.thinTexture(0x4F6070)
    .noBucket
	
	event
    .create('geghilarity:nether_air')
	.thinTexture(0x453535)
    .noBucket
	
	event
    .create('geghilarity:ender_air')
	.thinTexture(0x2D354A)
    .noBucket
	
	event
    .create('geghilarity:noble_gases')
	.thinTexture(0x7B97B2)
    .noBucket
	
	event
    .create('geghilarity:neon')
	.thinTexture(0xC33322)
    .noBucket
	
	event
    .create('geghilarity:krypton')
	.thinTexture(0x269224)
    .noBucket
	
	event
    .create('geghilarity:xenon')
	.thinTexture(0x1F0175)
    .noBucket

	event
    .create('geghilarity:zinc_exhaust_mixture')
	.thinTexture(0x772865)
    .noBucket
	
	event
    .create('geghilarity:zinc_slag_slurry')
	.thinTexture(0xB7B0A1)
    .noBucket
	
	event
    .create('geghilarity:metal_rich_slag_slurry')
	.thinTexture(0xB3ACA5)
    .noBucket
	
	event
    .create('geghilarity:acidic_metal_rich_slag_slurry')
	.thinTexture(0x9B975B)
    .noBucket
	
	event
    .create('geghilarity:separated_metal_rich_slag_slurry')
	.thinTexture(0xB2AB9C)
    .noBucket
	
	event
    .create('geghilarity:metal_hydroxide_mix')
	.thinTexture(0xB5AE98)
    .noBucket
	
	event
    .create('geghilarity:zinc_poor_mixture')
	.thinTexture(0x7C7D75)
    .noBucket
	
	event
    .create('geghilarity:iron_poor_mixture')
	.thinTexture(0xBA5E08)
    .noBucket
	
	event
    .create('geghilarity:indium_hydroxide_concentrate')
	.thinTexture(0x265E2A)
    .noBucket
	
	// LYEO
	event
	.create('geghilarity:liquid_ruthenium')
	.displayName('Molten Ruthenium') 
	.thinTexture(0x494949)
    .noBucket
	
	event
	.create('geghilarity:liquid_rhodium')
  	.displayName('Molten Rhodium') 
	.thinTexture(0xB2B2B2)
    .noBucket
	
	event
    .create('geghilarity:liquid_tritanium')
  	.displayName('Molten Tritanium') 
	.thinTexture(0xB6B6B6)
    .noBucket
	
	event
	.create('geghilarity:liquid_osmium')
  	.displayName('Molten Osmium') 
	.thinTexture(0x3C3DBD)
    .noBucket
	
	event
	.create('geghilarity:mtin')
	.displayName('Molten Tin')
	.thinTexture(0xA1A1A2)
    .noBucket
	
	event
    .create('geghilarity:mcopper')
	.displayName('Molten Copper')
	.thinTexture(0xBD6207)
    .noBucket
	
	event
    .create('geghilarity:maluminium')
	.displayName('Molten Aluminium')
	.thinTexture(0x6196B5)
    .noBucket
	
	event
    .create('geghilarity:mnichrome')
	.displayName('Molten Nichrome')
	.thinTexture(0x9A9CBA)
    .noBucket
	
	event
    .create('geghilarity:mtungsten')
	.displayName('Molten Tungsten')
	.thinTexture(0x28292B)
    .noBucket
	
	/// naq2 PBI
	event
    .create('geghilarity:diphenyl_isophthalate')
	.thinTexture(0x205544)
    .noBucket
	
	event
    .create('geghilarity:phthalic_acid')
	.thinTexture(0x9A9A9A)
    .noBucket
	
	// MARCH
	
	event
    .create('geghilarity:enriched_naquadric_solution')
	.thinTexture(0x27212D)
    .noBucket
	
	event
    .create('geghilarity:naquadriatic_solution')
	.thinTexture(0x27212E)
    .noBucket
	
	event
    .create('geghilarity:enriched_fluoronaquadric_acid')
	.thinTexture(0x3A4A4E)
    .noBucket
	
	event
    .create('geghilarity:fluoronaquadriatic_acid')
	.thinTexture(0x37484C)
    .noBucket
	
	event
    .create('geghilarity:enriched_naquadah_difluoride')
	.thinTexture(0x12191B)
    .noBucket
	
	event
    .create('geghilarity:naquadria_difluoride')
	.thinTexture(0x111919)
    .noBucket
	
	event
    .create('geghilarity:enriched_naquadahhexafluoride')
	.thinTexture(0x06072A)
    .noBucket
	
	event
    .create('geghilarity:naquadria_hexafluoride')
	.thinTexture(0x101923)
    .noBucket
	
	event
    .create('geghilarity:enriched_xenon_hexafluoronaquadate')
	.thinTexture(0x1B1C92)
    .noBucket
	
	event
    .create('geghilarity:radon_difluoride')
	.thinTexture(0x734FC1)
    .noBucket
	
	event
    .create('geghilarity:radon_naquadriaoctafluoride')
	.thinTexture(0x121A24)
    .noBucket
	
	event
    .create('geghilarity:xenoauric_fluoroantimonic_acid')
	.thinTexture(0x51480C)
    .noBucket
	
	event
    .create('geghilarity:bromine')
	.thinTexture(0x8A3D55)
    .noBucket
	
	event
    .create('geghilarity:auric_chloride')
	.thinTexture(0xA2B740)
    .noBucket
	
	event
    .create('geghilarity:bromine_trifluoride')
	.thinTexture(0xB7A21C)
    .noBucket
	
	event
    .create('geghilarity:caesium_xenontrioxide_fluoride')
	.thinTexture(0x292A9B)
    .noBucket
	
	event
    .create('geghilarity:radon_trioxide')
	.thinTexture(0x6F4CB9)
    .noBucket
	
	event
    .create('geghilarity:naquadria_caesium_xenonnonfluoride')
	.displayName('Naquadria-Caesium-Xenonnonfluoride')
	.thinTexture(0x151544)
    .noBucket
	
	event
    .create('geghilarity:nitryl_fluoride')
	.thinTexture(0x4C7287)
    .noBucket
	
	event
    .create('geghilarity:nitrosonium_octafluoroxenate')
	.thinTexture(0x303060)
    .noBucket
	
	event
    .create('geghilarity:naquadria_caesiumfluoride')
	.thinTexture(0x474757)
    .noBucket
	
	event
    .create('geghilarity:radon')
	.thinTexture(0xFF00FF)
    .noBucket
	
	event
    .create('geghilarity:xenon_trioxide')
	.thinTexture(0x311D68)
    .noBucket
	
	event
    .create('geghilarity:caesium_fluoride')
	.thinTexture(0x7C7C4D)
    .noBucket
	
	event
    .create('geghilarity:acidic_salt_water')
	.thinTexture(0x014D47)
    .noBucket
	
	event
    .create('geghilarity:crude_bromine_solution')
	.thinTexture(0xB53A01)
    .noBucket
	
	event
    .create('geghilarity:debrominated_water')
	.thinTexture(0x0101B5)
    .noBucket
	
	event
    .create('geghilarity:brine')
	.thinTexture(0xB7B764)
    .noBucket
	
	event
    .create('geghilarity:chilled_brine')
	.thinTexture(0xB5B56B)
    .noBucket
	
	event
    .create('geghilarity:magnesium_containing_brine')
	.thinTexture(0xB9B98A)
    .noBucket
	
	event
    .create('geghilarity:lithium_chloride_solution')
	.thinTexture(0x85856D)
    .noBucket
	
	event
    .create('geghilarity:hot_vapour_mixture')
	.thinTexture(0xBB3C01)
    .noBucket
	
	event
    .create('geghilarity:damp_bromine')
	.thinTexture(0xA1556A)
    .noBucket
	
	event
    .create('geghilarity:nitration_mixture')
	.thinTexture(0xABAB7B)
    .noBucket
	
	event
    .create('geghilarity:chlorobenzene')
	.thinTexture(0x264F30)
    .noBucket
	
	event
    .create('geghilarity:nitrochlorobenzene')
	.thinTexture(0x678215)
    .noBucket
	
	event
    .create('geghilarity:dichlorobenzidine')
	.thinTexture(0x739E77)
    .noBucket
	
	event
    .create('geghilarity:diaminobenzidine')
	.thinTexture(0x295F45)
    .noBucket
	
	event
    .create('geghilarity:polybenzimidazole')
	.displayName('Polybenzimidazole (PBI)')
	.thinTexture(0x242425)
    .noBucket
	
	event
	.create('geghilarity:dimethylbenzene')
	.thinTexture(0x507834)
    .noBucket
	
	event
    .create('geghilarity:phtalic_acid')
	.thinTexture(0x9B9B9C)
    .noBucket
	
	////////
	
	event
    .create('geghilarity:impure_enriched_naquadric_solution')
	.thinTexture(0x2D632C)
    .noBucket
	
	event
    .create('geghilarity:naquadah_waste')
	.thinTexture(0x2B482B)
    .noBucket
	
	event
    .create('geghilarity:impure_naquadriatic_solution')
	.thinTexture(0x416843)
    .noBucket
	
	event
    .create('geghilarity:liquid_ender_air')
	.thinTexture(0x232D45)
    .noBucket
	
	event
    .create('geghilarity:tritium')
	.thinTexture(0xFF3838)
    .noBucket
	
	event
    .create('geghilarity:molten_bronze')
	.thinTexture(0xD46C02)
    .noBucket
	
	event
	.create('geghilarity:cryolite')
	.thinTexture(0x1F717C)
    .noBucket
	
	event
	.create('geghilarity:hydrogen_fluoride')
	.thinTexture(0x610D4B)
    .noBucket
	
	event
	.create('geghilarity:sodium_fluoride_solution')
	.thinTexture(0x320479)
    .noBucket
	
	event
	.create('geghilarity:sodium_aluminate_solution')
	.thinTexture(0x32568F)
    .noBucket
	
	event
	.create('geghilarity:impure_sodium_aluminate_solution')
	.thinTexture(0x45618B)
    .noBucket
	
	event
	.create('geghilarity:impure_soda_ash_solution')
	.thinTexture(0x6A6B73)
    .noBucket
	
	event
	.create('geghilarity:impure_sodium_hydroxide_solution')
	.thinTexture(0x2D386D)
    .noBucket
	
	/////////////
	
	event
	.create('geghilarity:carburized_stainless_steel')
	.thinTexture(0x524E40)
    .noBucket
	
	event
	.create('geghilarity:stainless_steel')
	.thinTexture(0xA9A9BA)
    .noBucket
	
	event
	.create('geghilarity:soda_ash_solution')
	.thinTexture(0x5454C0)
    .noBucket
	
	event
	.create('geghilarity:potassium_carbonate_solution')
	.thinTexture(0x267C3E)
    .noBucket
	
	event
	.create('geghilarity:rock_salt_solution')
	.thinTexture(0x2D47AF)
    .noBucket
	
	event
	.create('geghilarity:hydrogen_chloride')
	.thinTexture(0x590440)
    .noBucket
	
	event
	.create('geghilarity:potassium_bisulfate_solution')
	.thinTexture(0x24A8A7)
    .noBucket
	
	event
	.create('geghilarity:potassium_bisulfate')
	.thinTexture(0x499797)
    .noBucket
	
	event
	.create('geghilarity:seed_oil')
	.thinTexture(0x9BAD62)
    .noBucket
	
	event
	.create('geghilarity:liquid_fat')
	.displayName('Liquid Fat (Stearin)')
	.thinTexture(0xB8944B)
    .noBucket
	
	event
	.create('geghilarity:sodium_stearate')
	.displayName('Sodium Stearate (Soap)')
	.thinTexture(0xBBBBBB)
    .noBucket
	
	event
	.create('geghilarity:tetrafluoroethylene_emulsion')
	.thinTexture(0x2B2229)
    .noBucket
	
	event
	.create('geghilarity:polytetrafluoroethylene_solution')
	.displayName('Polytetrafluoroethylene (PTFE) Solution')
	.thinTexture(0x262685)
    .noBucket
	
	/////////////////////////
	
	event
	.create('geghilarity:rocket_fuel')
	.displayName('Rocket Fuel H8N4C204')
	.thinTexture(0x489A1B)
    .noBucket
	
	event
	.create('geghilarity:dimethylhydrazine')
	.displayName('1,1-Dimethylhydrazine')
	.thinTexture(0x12123B)
    .noBucket
	
	event
	.create('geghilarity:dinitrogen_tetroxide')
	.thinTexture(0x113153)
    .noBucket
	
	event
	.create('geghilarity:chloramine')
	.thinTexture(0x316353)
    .noBucket
	
	event
	.create('geghilarity:dimethylamine')
	.thinTexture(0x3B3344)
    .noBucket
	
	event
	.create('geghilarity:hypochlorous_acid')
	.thinTexture(0x48565A)
    .noBucket
	
	event
	.create('geghilarity:vinyl_chloride_solution')
	.thinTexture(0x52B3B3)
    .noBucket
	
	event
	.create('geghilarity:polyvinyl_chloride_solution')
	.thinTexture(0x4FB2B1)
    .noBucket
	
	////
	event
	.create('geghilarity:chloromethane_solution')
	.thinTexture(0x4C159C)
    .noBucket
	
	event
	.create('geghilarity:chlorinated_methane_mixture')
	.thinTexture(0x60239C)
    .noBucket
	
	event
	.create('geghilarity:dichloromethane')
	.thinTexture(0x4E4E83)
    .noBucket
	
	event
	.create('geghilarity:carbon_tetrachloride')
	.thinTexture(0x959595)
    .noBucket
	
	event
	.create('geghilarity:chlorinated_dichloromethane_mixture')
	.thinTexture(0x361C73)
    .noBucket
	
	event
	.create('geghilarity:chlorinated_chloromethane_mixture')
	.thinTexture(0x451C82)
    .noBucket
	
	/////
	
	event
	.create('geghilarity:ammonium_nitrate_solution')
	.thinTexture(0x0DA93D)
    .noBucket
	
	//// oil
	event
	.create('geghilarity:diluted_oil')
	.thinTexture(0x252832)
    .noBucket
	
	event
	.create('geghilarity:oily_brine')
	.thinTexture(0x4F4F3C)
    .noBucket
	
	event
	.create('geghilarity:desalted_oil')
	.thinTexture(0x040404)
    .noBucket
	
	event
	.create('geghilarity:isoprene')
	.thinTexture(0x121213)
    .noBucket
	
	// PBI SUSY
	
	event
    .create('geghilarity:diphenyl_isophthalate_solution')
	.thinTexture(0x164652)
    .noBucket
	
	event
    .create('geghilarity:diaminobenzidine_solution')
	.thinTexture(0x4C5E55)
    .noBucket
	
	event
    .create('geghilarity:polybenzimidazole_polymerization_mix')
	.thinTexture(0x312721)
    .noBucket
	
	event
    .create('geghilarity:polybenzimidazole_prepolymer_foam')
	.thinTexture(0x27231F)
    .noBucket
	
	event
    .create('geghilarity:impure_polybenzimidazole_solution')
	.thinTexture(0x252221)
    .noBucket
	
	event
    .create('geghilarity:dimethylacetamide')
	.thinTexture(0x0A6108)
    .noBucket
	
	event
    .create('geghilarity:polybenzimidazole_solution')
	.thinTexture(0x14110E)
    .noBucket
	
	event
    .create('geghilarity:polybenzimidazole_waste')
	.thinTexture(0x1A1B1D)
    .noBucket
	
	event
    .create('geghilarity:dichloroethane')
	.thinTexture(0x37074A)
    .noBucket
	
	event
    .create('geghilarity:trimethylamine')
	.thinTexture(0x391E48)
    .noBucket
	
	event
    .create('geghilarity:dimethylacetamide_solution')
	.thinTexture(0x073360)
    .noBucket
	
	event
    .create('geghilarity:hot_compressed_ammonia')
	.thinTexture(0x352D60)
    .noBucket
	
	event
    .create('geghilarity:3_3_dichlorobenzidine_solution')
	.displayName('3,3-Dichlorobenzidine Solution')
	.thinTexture(0x98AF3F)
    .noBucket
	
	event
    .create('geghilarity:2_2_dichlorohydrazobenzene_solution')
	.displayName('2,2-Dichlorohydrazobenzene Solution')
	.thinTexture(0x665E38)
    .noBucket
	
	event
    .create('geghilarity:hot_high-pressure_hydrogen')
	.thinTexture(0x04047D)
    .noBucket
	
	event
    .create('geghilarity:2-nitrochlorobenzene')
	.displayName('2-Nitrochlorobenzene')
	.thinTexture(0x698414)
    .noBucket
	
	event
    .create('geghilarity:mixed_nitrochlorobenzene_solution')
	.thinTexture(0x8A6412)
    .noBucket
	
	event
    .create('geghilarity:phosgene')
	.thinTexture(0x6F2804)
    .noBucket
	
	event
    .create('geghilarity:dichloroethane_isophthalic_acid_solution')
	.thinTexture(0x2C954B)
    .noBucket
	
	event
    .create('geghilarity:isophthaloyl_dichloride_solution')
	.thinTexture(0x3F1654)
    .noBucket
	
	event
    .create('geghilarity:isophthalic_acid_solution')
	.thinTexture(0x3C507D)
    .noBucket
	
	event
    .create('geghilarity:hot_high-pressure_oxygen')
	.thinTexture(0x3786AE)
    .noBucket
	
	event
    .create('geghilarity:hot_high-pressure_air')
	.thinTexture(0x758FA7)
    .noBucket
	
	event
    .create('geghilarity:m-xylene')
	.displayName('m-Xylene')
	.thinTexture(0x302B24)
    .noBucket
	
	event
    .create('geghilarity:m-p-xylene_mixture')
	.displayName('m/p-Xylene Mixture')
	.thinTexture(0x201A13)
    .noBucket
	
	event
    .create('geghilarity:xylene_mixture')
	.thinTexture(0x231E18)
    .noBucket
	
	event
    .create('geghilarity:btex')
	.displayName('B.T.E.X')
	.thinTexture(0x5E5E4B)
    .noBucket
	
	event
    .create('geghilarity:btex_extract')
	.displayName('B.T.E.X Extract')
	.thinTexture(0x7A7A5B)
    .noBucket
	
	event
    .create('geghilarity:furfural')
	.thinTexture(0x131193)
    .noBucket
	
	event
    .create('geghilarity:furfural_solution')
	.thinTexture(0x289588)
    .noBucket
	
	event
    .create('geghilarity:rearranged_cumene')
	.thinTexture(0x39221D)
    .noBucket
	
	event
    .create('geghilarity:acidic_cumene')
	.thinTexture(0x40140A)
    .noBucket
	
	event
    .create('geghilarity:hot_high-pressure_propene')
	.thinTexture(0xBBA54C)
    .noBucket
	
	event
    .create('geghilarity:hot_high-pressure_benzene')
	.thinTexture(0x1C1A19)
    .noBucket
	
	event
    .create('geghilarity:sodium_phenoxide_solution')
	.thinTexture(0x076D7D)
    .noBucket
	
	event
    .create('geghilarity:naphtha_reformate')
	.thinTexture(0xB0B076)
    .noBucket
	
	event
    .create('geghilarity:mixed_nitrochlorobenzene')
	.thinTexture(0x777932)
    .noBucket
	
	event
    .create('geghilarity:methylamine_mix')
	.thinTexture(0x4D3976)
    .noBucket
	
	event
    .create('geghilarity:tetrabromomethane')
	.thinTexture(0x330A0A)
    .noBucket
	
	event
    .create('geghilarity:low-grade_red_mud')
	.thinTexture(0x682E21)
    .noBucket
	
	event
    .create('geghilarity:concentrated_low-grade_red_mud')
	.thinTexture(0x5D2F25)
    .noBucket
	
	event
    .create('geghilarity:sodium_silicate_solution')
	.thinTexture(0x122871)
    .noBucket
	
	event
    .create('geghilarity:diluted_sodium_silicate_solution')
	.thinTexture(0x088009)
    .noBucket
	
	// rubber styrene butadiene
	
	event
    .create('geghilarity:polymerized_styrene_butadiene_solution')
	.displayName('Polymerized Styrene-Butadiene Solution')
	.thinTexture(0x2E1C07)
    .noBucket
	
	event
    .create('geghilarity:n-butyllithium')
	.displayName('n-Butyllitium')
	.thinTexture(0x0F373D)
    .noBucket
	
	event
    .create('geghilarity:diluted_n-butyllithium')
	.displayName('Diluted n-Butyllitium')
	.thinTexture(0x08791E)
    .noBucket
	
	event
    .create('geghilarity:styrene_butadiene_solution')
	.displayName('Styrene-Butadiene Solution')
	.thinTexture(0x9E0970)
    .noBucket
	
	event
    .create('geghilarity:dry_ethanol')
	.thinTexture(0xA74D26)
    .noBucket
	
	event
    .create('geghilarity:crude_styrene')
	.thinTexture(0x3C3C32)
    .noBucket
	
	event
    .create('geghilarity:lithium_solution')
	.thinTexture(0x5F0504)
    .noBucket
	
	event
    .create('geghilarity:1-bromobutane')
	.displayName('1-Bromobutane')
	.thinTexture(0x0C5674)
    .noBucket
	
	event
    .create('geghilarity:diluted_1-bromobutane')
	.displayName('Diluted 1-Bromobutane')
	.thinTexture(0x078999)
    .noBucket
	
	event
    .create('geghilarity:hydrobromic_acid')
	.thinTexture(0x167E6B)
    .noBucket
	
	event
    .create('geghilarity:n-butanol')
	.displayName('n-Butanol')
	.thinTexture(0x0A5A37)
    .noBucket
	
	event
    .create('geghilarity:ziegler_alfol_mixture')
	.thinTexture(0x935A28)
    .noBucket
	
	event
    .create('geghilarity:aluminium_alkoxide_solution')
	.thinTexture(0x4B575E)
    .noBucket
	
	event
    .create('geghilarity:brominated_sulfur_dioxide')
	.thinTexture(0x4D190B)
    .noBucket
	
	event
    .create('geghilarity:chlorinated_beryl')
	.thinTexture(0x340E11)
    .noBucket
	
	event
    .create('geghilarity:aluminium_chloride')
	.thinTexture(0x9E2A30)
    .noBucket
	
	event
    .create('geghilarity:silicon_tetrachloride')
	.thinTexture(0x49605E)
    .noBucket
	
	event
    .create('geghilarity:beryllium_chloride')
	.thinTexture(0x97301C)
    .noBucket
	
	event
    .create('geghilarity:salt')
	.thinTexture(0xC3C3C3)
    .noBucket
	
	event
	.create('geghilarity:molten_titanium')
	.thinTexture(0xA87AB7)
    .noBucket
	
	// gtnh monazite
	event
    .create('geghilarity:muddy_monazite_rare_earth_solution')
	.thinTexture(0x5A402F)
    .noBucket
	
	event
    .create('geghilarity:diluted_monazite_rare_earth_mud')
	.thinTexture(0x7F614A)
    .noBucket
	
	event
    .create('geghilarity:hafnium_tetrachloride_solution')
	.thinTexture(0xAAB0B1)
    .noBucket
	
	event
    .create('geghilarity:zirconium_tetrachloride_solution')
	.thinTexture(0x81766D)
    .noBucket
	
	event
    .create('geghilarity:diluted_monazite_sulfate')
	.thinTexture(0xA98F7E)
    .noBucket
	
	event
    .create('geghilarity:nitrogenated_monazite_rare_earth_concentrate')
	.thinTexture(0xB7A480)
    .noBucket
	
	event
    .create('geghilarity:nitric-leached_monazite_mixture')
	.displayName('Nitric-Leached Monazite Mixture')
	.thinTexture(0x5A2563)
    .noBucket
	
	event
    .create('geghilarity:iodine')
	.thinTexture(0x7E1E81)
    .noBucket
	
	event
    .create('geghilarity:nitric_monazite_leached_concentrate')
	.thinTexture(0xAD9011)
    .noBucket
	
	event
    .create('geghilarity:oxalate')
	.thinTexture(0x589B3E)
    .noBucket
	
	event
    .create('geghilarity:seaweed_concentrate')
	.thinTexture(0x344A35)
    .noBucket
	
	event
    .create('geghilarity:seaweed_byproducts')
	.thinTexture(0x5B2565)
    .noBucket
	
	event
    .create('geghilarity:acid_naquadah_emulsion')
	.thinTexture(0x1B1A1A)
    .noBucket
	
	event
    .create('geghilarity:naquadah_emulsion')
	.thinTexture(0x363333)
    .noBucket
	
	event
    .create('geghilarity:molten_neodymium')
	.thinTexture(0x585858)
    .noBucket
	
	event
    .create('geghilarity:molten_europium')
	.thinTexture(0xD9A0E1)
    .noBucket
	
	event
    .create('geghilarity:naquadah_gas')
	.thinTexture(0x46A005)
    .noBucket
	
	event
    .create('geghilarity:naquadah_solution')
	.thinTexture(0x636061)
    .noBucket
	
	event
    .create('geghilarity:light_naquadah_fuel')
	.thinTexture(0x48984A)
    .noBucket
	
	event
    .create('geghilarity:heavy_naquadah_fuel')
	.thinTexture(0x2CBC2E)
    .noBucket
	
	event
    .create('geghilarity:naquadah_asphalt')
	.thinTexture(0x09200B)
    .noBucket
	
	event
    .create('geghilarity:naquadah_based_liquid_fuel_mki')
	.displayName('Naquadah Based Liquid Fuel MK-1')
	.thinTexture(0x4F4B4B)
    .noBucket
	
	event
    .create('geghilarity:naquadah_based_liquid_fuel_mki_depleted')
	.displayName('Naquadah Based Liquid Fuel MK-1 (Depleted)')
	.thinTexture(0x969191)
    .noBucket
	
	event
    .create('geghilarity:sodium_potassium')
	.thinTexture(0x4AB683)
    .noBucket
	
	///////////////////
	
	event
    .create('geghilarity:sulfuric_oil_residue')
	.thinTexture(0x424021)
    .noBucket
	
	event
    .create('geghilarity:sulfuric_fuel_oil')
	.thinTexture(0x615E27)
    .noBucket
	
	event
    .create('geghilarity:sulfuric_diesel')
	.thinTexture(0x787325)
    .noBucket
	
	event
    .create('geghilarity:sulfuric_refinery_gas')
	.thinTexture(0x9B9B94)
    .noBucket
	
	event
    .create('geghilarity:treated_sulfuric_refinery_gas')
	.thinTexture(0x9B9B94)
    .noBucket
	
	event
    .create('geghilarity:treated_sulfuric_naphtha')
	.thinTexture(0x8D8A1F)
    .noBucket
	
	event
    .create('geghilarity:treated_sulfuric_diesel')
	.thinTexture(0x8C8630)
    .noBucket
	
	event
    .create('geghilarity:treated_sulfuric_fuel_oil')
	.thinTexture(0x716F3A)
    .noBucket
	
	event
    .create('geghilarity:treated_sulfuric_oil_residue')
	.thinTexture(0x2B2A17)
    .noBucket
	
	event
    .create('geghilarity:treated_sulfuric_light_fuel')
	.thinTexture(0xB3AD2F)
    .noBucket
	
	event
    .create('geghilarity:treated_sulfuric_heavy_fuel')
	.thinTexture(0x9C972C)
    .noBucket
	
	event
    .create('geghilarity:sour_gas')
	.thinTexture(0xA2A274)
    .noBucket
	
	event
    .create('geghilarity:fuel_oil')
	.thinTexture(0x716F3A)
    .noBucket
	
	event
    .create('geghilarity:oil_residue')
	.thinTexture(0x1C1B0F)
    .noBucket
	
	event
    .create('geghilarity:refinery_gas')
	.thinTexture(0xB4B4B4)
    .noBucket
	
	event
    .create('geghilarity:ethanolamine_mix')
	.thinTexture(0x2D6088)
    .noBucket
	
	event
    .create('geghilarity:rich_amine')
	.thinTexture(0x2F7A8A)
    .noBucket
	
	event
    .create('geghilarity:impure_ethylene_oxide')
	.thinTexture(0x3B5241)
    .noBucket
	
	event
    .create('geghilarity:butyraldehide_mixture')
	.thinTexture(0x6E6B0B)
    .noBucket
	
	event
    .create('geghilarity:sodium_bisulfate_solution')
	.thinTexture(0x061F83)
    .noBucket
	
	event
    .create('geghilarity:n-bromopropane')
	.displayName('n-Bromopropane')
	.thinTexture(0x756130)
    .noBucket
	
	event
    .create('geghilarity:impure_ethanol')
	.thinTexture(0x8C7257)
    .noBucket
	
	event
    .create('geghilarity:fusel_oil')
	.thinTexture(0x7F2109)
    .noBucket
	
	event
    .create('geghilarity:n-propanol')
	.displayName('n-Propanol')
	.thinTexture(0x7D690F)
    .noBucket
	
	event
    .create('geghilarity:tripropylamine')
	.thinTexture(0x6D8B36)
    .noBucket
	
	event
    .create('geghilarity:tetrapropylammonium_bromide')
	.thinTexture(0x6C500C)
    .noBucket
	
	event
    .create('geghilarity:crude_manganese_ii_sulfate_solution')
	.displayName('Crude Manganese II Sulfate Solution')
	.thinTexture(0x49AF13)
    .noBucket
	
	event
    .create('geghilarity:manganese_ii_sulfate_solution')
	.displayName('Manganese II Sulfate Solution')
	.thinTexture(0x4FBD15)
    .noBucket
	
	event
    .create('geghilarity:sodium_sulfate_solution')
	.thinTexture(0x82818C)
    .noBucket
	
	event
    .create('geghilarity:distilled_water')
	.thinTexture(0x396CB7)
    .noBucket
	
	event
    .create('geghilarity:molten_alumina')
	.thinTexture(0xA8A8C6)
    .noBucket
   
	event
    .create('geghilarity:impure_wolframite_slurry')
	.thinTexture(0x2F2D46)
    .noBucket
	
	event
    .create('geghilarity:wolframite_slurry')
	.thinTexture(0x1D1B2E)
    .noBucket
	
	event
    .create('geghilarity:granite_tailing_slurry')
	.thinTexture(0x8E5E56)
    .noBucket
	
	event
    .create('geghilarity:oleic_acid')
	.thinTexture(0x8BA289)
    .noBucket
	
	event
    .create('geghilarity:wastewater')
	.thinTexture(0x243024)
    .noBucket
	
	event
    .create('geghilarity:sodium_tungstate_solution')
	.thinTexture(0x207863)
    .noBucket
	
	event
    .create('geghilarity:silicate_free_tungstate_solution')
	.thinTexture(0x216056)
    .noBucket
	
	event
    .create('geghilarity:molybdenum_free_tungstate_solution')
	.thinTexture(0x1B6170)
    .noBucket
	
	event
    .create('geghilarity:diluted_sodium_sulfate_solution')
	.thinTexture(0x686880)
    .noBucket
	
	event
    .create('geghilarity:tungsten_extract')
	.thinTexture(0x725A22)
    .noBucket
	
	event
    .create('geghilarity:tungsten_extraction_mixture')
	.thinTexture(0x888030)
    .noBucket
	
	event
    .create('geghilarity:demineralized_water')
	.thinTexture(0x34477A)
    .noBucket
	
	event
    .create('geghilarity:scrubbed_tungsten_extract')
	.thinTexture(0x60791B)
    .noBucket
	
	event
    .create('geghilarity:ammonia_solution')
	.thinTexture(0x186F8A)
    .noBucket
	
	event
    .create('geghilarity:ammonium_isopolytungstate_solution')
	.thinTexture(0x190A6A)
    .noBucket
	
	event
    .create('geghilarity:aminated_ethylene_mixture')
	.thinTexture(0x83799B)
    .noBucket
	
	event
    .create('geghilarity:neutralized_aminated_ethylene_mixture')
	.thinTexture(0x665F73)
    .noBucket
	
	event
    .create('geghilarity:ethylenediamine')
	.thinTexture(0x035815)
    .noBucket
	
	event
    .create('geghilarity:cyclopentadiene_solution')
	.thinTexture(0x22201C)
    .noBucket
	
	event
    .create('geghilarity:cyclopentadiene')
	.thinTexture(0x2F2C25)
    .noBucket
	
	event
    .create('geghilarity:crude_iron_pentacarbonyl')
	.thinTexture(0x282220)
    .noBucket
	
	event
    .create('geghilarity:iron_pentacarbonyl')
	.thinTexture(0x65120A)
    .noBucket
	
	event
    .create('geghilarity:aluminium_phenolate')
	.thinTexture(0x0F573B)
    .noBucket
	
	event
    .create('geghilarity:isobutylene')
	.thinTexture(0x716659)
    .noBucket
	
	event
    .create('geghilarity:2_6_di_tert_butylphenol')
	.displayName('2,6-Di-tert-butylphenol')
	.thinTexture(0x0B7F59)
    .noBucket
	
	event
    .create('geghilarity:cresol')
	.thinTexture(0x615B4E)
    .noBucket
	
	event
    .create('geghilarity:butylated_hydroxytoluene')
	.thinTexture(0x0B2D37)
    .noBucket
	
	event
    .create('geghilarity:xylenol')
	.thinTexture(0x512E2D)
    .noBucket
	
	event
    .create('geghilarity:2_4_dimethyl_6_tert_butylphenol')
	.displayName('2,4-Dimethyl-6-tert-butylphenol')
	.thinTexture(0x0C3410)
    .noBucket
	
	event
    .create('geghilarity:gasoline_antioxidants')
	.thinTexture(0x2C0E11)
    .noBucket
	
	event
    .create('geghilarity:iso-octane')
	.displayName('iso-Octane')
	.thinTexture(0x0A2611)
    .noBucket
	
	event
    .create('geghilarity:tetraethyl_lead')
	.thinTexture(0x0C4B93)
    .noBucket
	
	event
    .create('geghilarity:chloroethane')
	.thinTexture(0x291767)
    .noBucket
	
	event
    .create('geghilarity:tetraethyl_lead_sludge')
	.thinTexture(0x241B1C)
    .noBucket
	
	event
    .create('geghilarity:isobutane')
	.thinTexture(0x6D625D)
    .noBucket
	
	event
    .create('geghilarity:gasoline_antiknock')
	.thinTexture(0x38394A)
    .noBucket
	
	event
    .create('geghilarity:hydrated_propene')
	.thinTexture(0x937260)
    .noBucket
	
	event
    .create('geghilarity:isopropyl_alcohol')
	.thinTexture(0x0D5224)
    .noBucket
	
	event
    .create('geghilarity:butane')
	.thinTexture(0x8A382D)
    .noBucket
	
	event
    .create('geghilarity:tert-butyl_alcohol')
	.displayName('tert-Butyl Alcohol')
	.thinTexture(0x0D5C3D)
    .noBucket
	
	event
    .create('geghilarity:ethyl_tert-butyl_ether')
	.displayName('Ethyl Tert-Butyl Ether')
	.thinTexture(0x814509)
    .noBucket
	
	event
    .create('geghilarity:gasoline_oxygenates')
	.thinTexture(0x8592A5)
    .noBucket
	
	event
    .create('geghilarity:propane')
	.thinTexture(0xB2A345)
    .noBucket
	
	event
    .create('geghilarity:diluted_nitromethane')
	.thinTexture(0x107FA4)
    .noBucket
	
	event
    .create('geghilarity:nitromethane')
	.thinTexture(0x15ABA1)
    .noBucket
	
	event
    .create('geghilarity:gasoline_general_additives')
	.thinTexture(0x535E55)
    .noBucket
	
	event
    .create('geghilarity:supreme_gasoline')
	.thinTexture(0xB25218)
    .noBucket
	
	event
    .create('geghilarity:premium_gasoline')
	.thinTexture(0x9F6221)
    .noBucket
	
	event
    .create('geghilarity:midgrade_gasoline')
	.thinTexture(0x92712B)
    .noBucket
	
	event
    .create('geghilarity:purified_isoprene')
	.thinTexture(0x030304)
    .noBucket
	
	event
    .create('geghilarity:piperazine')
	.thinTexture(0x656976)
    .noBucket
	
	event
    .create('geghilarity:triethylenetetramine')
	.thinTexture(0x307280)
    .noBucket
	
	event
    .create('geghilarity:aminoethylpiperazine')
	.thinTexture(0x99AD4C)
    .noBucket
	
	event
    .create('geghilarity:diethylenetriamine')
	.thinTexture(0x052A80)
    .noBucket
	
	event
    .create('geghilarity:o-xylene')
	.displayName('o-Xylene')
	.thinTexture(0x2F2921)
    .noBucket
	
	event
    .create('geghilarity:styrene_solution')
	.thinTexture(0x504DA5)
    .noBucket
	
	event
    .create('geghilarity:polystyrene_solution')
	.thinTexture(0x3D3E35)
    .noBucket
	
	event
    .create('geghilarity:polystyrene')
	.thinTexture(0x7F816F)
    .noBucket
	
	event
    .create('geghilarity:diethylbenzene')
	.thinTexture(0x807171)
    .noBucket
	
	event
    .create('geghilarity:divinylbenzene')
	.thinTexture(0x827272)
    .noBucket
	
	event
    .create('geghilarity:crosslinked_polystyrene-divinylbenzene')
	.displayName('Crosslinked Polystyrene-Divinylbenzene')
	.thinTexture(0x8989AC)
    .noBucket
	
	event
    .create('geghilarity:chlorinated_glycerol')
	.thinTexture(0x2C1485)
    .noBucket
	
	event
    .create('geghilarity:epichlorohydrin_solution')
	.thinTexture(0x744B33)
    .noBucket
	
	event
    .create('geghilarity:allyl_chloride')
	.thinTexture(0x64A27E)
    .noBucket
	
	event
    .create('geghilarity:allyl_alcohol_mix')
	.thinTexture(0x8BA273)
    .noBucket
	
	event
    .create('geghilarity:diluted_epichlorohydrin')
	.thinTexture(0x6B4D3C)
    .noBucket
	
	event
    .create('geghilarity:diluted_saltwater')
	.thinTexture(0x334D8D)
    .noBucket
	
	event
    .create('geghilarity:fatty_acid_solution')
	.thinTexture(0x767F48)
    .noBucket
   
	event
	.create('geghilarity:urea_solution')
	.thinTexture(0x082021)
    .noBucket
	
	event
	.create('geghilarity:oleic_acid_solution')
	.thinTexture(0x678A4D)
    .noBucket
	
	event
	.create('geghilarity:tripropylene')
	.thinTexture(0x954518)
    .noBucket
	
	event
	.create('geghilarity:isodecanal_mixture')
	.thinTexture(0x7F7F33)
    .noBucket
	
	event
	.create('geghilarity:isodecanal')
	.thinTexture(0x9E5F24)
    .noBucket
	
	event
	.create('geghilarity:isodecanol')
	.thinTexture(0xA76B33)
    .noBucket
	
	event
	.create('geghilarity:molybdenic_acid_solution')
	.thinTexture(0x355265)
    .noBucket
	
	event
	.create('geghilarity:neutralized_ammonium_molybdate_solution')
	.thinTexture(0x1C0995)
    .noBucket
	
	event
	.create('geghilarity:ammonium_chloride_solution')
	.thinTexture(0x3A6842)
    .noBucket
	
	event
	.create('geghilarity:raw_molecular_sieve')
	.thinTexture(0x686E7E)
    .noBucket
	
	event
	.create('geghilarity:unscrubbed_wood_gas')
	.thinTexture(0x696963)
    .noBucket
	
	event
	.create('geghilarity:wood_gas')
	.thinTexture(0xA49C73)
    .noBucket
	
	event
	.create('geghilarity:muddy_bastnasite_rare_earth_solution')
	.thinTexture(0x966433)
    .noBucket
	
	event
	.create('geghilarity:steam-cracked_bastnasite_mud')
	.displayName('Steam-Cracked Bastnasite Mud')
	.thinTexture(0x996533)
    .noBucket
	
	event
	.create('geghilarity:sodiumfluorosilicate')
	.thinTexture(0x966433)
    .noBucket
	
	event
	.create('geghilarity:conditioned_bastnasite_mud')
	.thinTexture(0x976433)
    .noBucket
	
	event
	.create('geghilarity:hexafluorosilicic_acid')
	.thinTexture(0x255688)
    .noBucket
	
	event
	.create('geghilarity:diluted_bastnasite_mud')
	.thinTexture(0x966433)
    .noBucket
	
	event
	.create('geghilarity:filtered_bastnasite_mud')
	.thinTexture(0x9B6633)
    .noBucket
	
	event
	.create('geghilarity:nitrogenated_bastnasite_rarer_earth_oxides')
	.thinTexture(0x794631)
    .noBucket
	
	event
	.create('geghilarity:bastnasite_rarer_earth_oxide_suspension')
	.thinTexture(0x814731)
    .noBucket
	
	event
	.create('geghilarity:diluted_acetone')
	.thinTexture(0xB9B9B6)
    .noBucket
	
	event
	.create('geghilarity:calcium_fluoride')
	.thinTexture(0xBDB9B9)
    .noBucket
	
	event
	.create('geghilarity:hydrated_ammonium_nitrate_slurry')
	.thinTexture(0x733C73)
    .noBucket
	
	event
	.create('geghilarity:lightly_steam-cracked_light_fuel')
	.displayName('Lightly Steam-Cracked Light Fuel')
	.thinTexture(0xA7A238)
    .noBucket
	
	event
	.create('geghilarity:lightly_steam-cracked_heavy_fuel')
	.displayName('Lightly Steam-Cracked Heavy Fuel')
	.thinTexture(0xA5A242)
    .noBucket
	
	event
	.create('geghilarity:lightly_steam-cracked_naphtha')
	.displayName('Lightly Steam-Cracked Naphtha')
	.thinTexture(0x898307)
    .noBucket
	
	event
	.create('geghilarity:severely_steam-cracked_light_fuel')
	.displayName('Severely Steam-Cracked Light Fuel')
	.thinTexture(0xB4AE49)
    .noBucket
	
	event
	.create('geghilarity:severely_steam-cracked_heavy_fuel')
	.displayName('Severely Steam-Cracked Heavy Fuel')
	.thinTexture(0xB0AE65)
    .noBucket
	
	event
	.create('geghilarity:severely_steam-cracked_naphtha')
	.displayName('Severely Steam-Cracked Naphtha')
	.thinTexture(0x8C860D)
    .noBucket
	
	event
	.create('geghilarity:lightly_hydro-cracked_light_fuel')
	.displayName('Lightly Hydro-Cracked Light Fuel')
	.thinTexture(0x999434)
    .noBucket
	
	event
	.create('geghilarity:lightly_hydro-cracked_heavy_fuel')
	.displayName('Lightly Hydro-Cracked Heavy Fuel')
	.thinTexture(0x8F8D41)
    .noBucket
	
	event
	.create('geghilarity:lightly_hydro-cracked_naphtha')
	.displayName('Lightly Hydro-Cracked Naphtha')
	.thinTexture(0x8C870D)
    .noBucket
	
	event
	.create('geghilarity:severely_hydro-cracked_light_fuel')
	.displayName('Severely Hydro-Cracked Light Fuel')
	.thinTexture(0x8B863B)
    .noBucket
	
	event
	.create('geghilarity:severely_hydro-cracked_heavy_fuel')
	.displayName('Severely Hydro-Cracked Heavy Fuel')
	.thinTexture(0x8A884B)
    .noBucket
	
	event
	.create('geghilarity:severely_hydro-cracked_naphtha')
	.displayName('Severely Hydro-Cracked Naphtha')
	.thinTexture(0x8E880D)
    .noBucket
	
	event
	.create('geghilarity:butene_mixture')
	.thinTexture(0x9A491C)
    .noBucket
	
	event
	.create('geghilarity:steam-cracked_propane')
	.displayName('Steam-Cracked Propane')
	.thinTexture(0x837330)
    .noBucket
	
	event
	.create('geghilarity:steam-cracked_ethane')
	.displayName('Steam-Cracked Ethane')
	.thinTexture(0x686882)
    .noBucket
	
	event
	.create('geghilarity:steam-cracked_butane')
	.displayName('Steam-Cracked Butane')
	.thinTexture(0x5D2215)
    .noBucket
	
	event
	.create('geghilarity:sodium_chromate_solution')
	.thinTexture(0x797C2B)
    .noBucket
	
	event
	.create('geghilarity:sodium_dichromate_solution')
	.thinTexture(0xA06924)
    .noBucket
	
	event
	.create('geghilarity:upgraded_fuel_oil_mix')
	.thinTexture(0x6D6A29)
    .noBucket
	
	event
	.create('geghilarity:flue_gas')
	.thinTexture(0x3E4245)
    .noBucket
	
   
})

//onEvent('item.registry', (event) => {
StartupEvents.registry('item', event => {

	event.create('geghilarity:ccf').displayName('Cheap Chinese Fan');
	//event.create('geghilarity:sus_alloy_dust').displayName('Suspicious Alloy Dust');
	//event.create('geghilarity:sus_alloy_ingot').displayName('Suspicious Alloy Ingot');
	event.create('geghilarity:precious_ingot').displayName('Precious Metal Ingot');
	event.create('geghilarity:precious_nugget');
	event.create('geghilarity:gold_alloy_ingot').displayName('Gold Alloy Ingot');
	event.create('geghilarity:gold_leach').displayName('Gold Leach');
	event.create('geghilarity:leached_copper_dust').displayName('Leached Copper');
	event.create('geghilarity:potassium_dust').displayName('Potassium Dust');
	event.create('geghilarity:potassium_metabisulfate_dust').displayName('Potassium Metabisulfate Dust');
	
	// PGM
	event.create('geghilarity:tiny_platinum_metallic_powder_dust').displayName('Tiny Pile of Platinum Metallic Powder Dust');
	event.create('geghilarity:platinum_metallic_powder_dust').displayName('Platinum Metallic Powder Dust');
	event.create('geghilarity:tiny_platinum_residue_dust').displayName('Tiny Pile of Platinum Residue Dust');
	event.create('geghilarity:small_platinum_salt_dust').displayName('Small Pile of Platinum Salt Dust');
	event.create('geghilarity:reprecipitated_platinum_dust').displayName('Reprecipitated Platinum Dust');
	event.create('geghilarity:platinum_salt_dust').displayName('Platinum Salt Dust');
	event.create('geghilarity:refined_platinum_salt_dust').displayName('Refined Platinum Salt Dust');
	event.create('geghilarity:calcium_dust').displayName('Calcium Dust');
	event.create('geghilarity:calcium_chloride_dust').displayName('Calcium Chloride Dust');
	event.create('geghilarity:palladium_metallic_powder_dust').displayName('Palladium Metallic Powder Dust');
	event.create('geghilarity:small_palladium_salt_dust').displayName('Small Pile of Palladium Salt Dust');
	event.create('geghilarity:tiny_reprecipitated_palladium_dust').displayName('Tiny Pile of Reprecipitated Palladium Dust');
	event.create('geghilarity:palladium_salt_dust').displayName('Palladium Salt Dust');
	event.create('geghilarity:tiny_ashes').displayName('Tiny Pile of Ashes');
	event.create('geghilarity:sodium_hydroxide_dust').displayName('Sodium Hydroxide Dust');
	event.create('geghilarity:sodium_bisulfate_dust').displayName('Sodium Bisulfate Dust');
	event.create('geghilarity:reprecipitated_palladium_dust').displayName('Reprecipitated Palladium Dust');
	event.create('geghilarity:palladium_dust').displayName('Palladium Dust');
	
	event.create('geghilarity:potassium_disulfate_dust').displayName('Potassium Disulfate Dust');
	event.create('geghilarity:platinum_residue_dust').displayName('Platinum Residue Dust');
	event.create('geghilarity:leach_residue_dust').displayName('Leach Residue Dust');
	event.create('geghilarity:potassium_sulfate').displayName('Potassium Sulfate');
	event.create('geghilarity:tiny_leach_residue_dust').displayName('Tiny Pile of Leach Residue Dust');
	event.create('geghilarity:zinc_sulfate_dust').displayName('Zinc Sulfate Dust');
	event.create('geghilarity:crude_rhodium_metal_dust').displayName('Crude Rhodium Metal Dust');
	event.create('geghilarity:rhodium_salt_dust').displayName('Rhodium Salt Dust');
	event.create('geghilarity:sodium_nitrate_dust').displayName('Sodium Nitrate Dust');
	event.create('geghilarity:rhodium_nitrate_dust').displayName('Rhodium Nitrate Dust');
	event.create('geghilarity:rhodium_filter_cake_dust').displayName('Rhodium Filter Cake Dust');
	event.create('geghilarity:reprecipitated_rhodium_dust').displayName('Reprecipitated Rhodium Dust');
	event.create('geghilarity:rhodium_dust').displayName('Rhodium Dust');
	event.create('geghilarity:soda_ash_dust').displayName('Soda Ash (Sodium Carbonate) Dust');
	event.create('geghilarity:rarest_metal_residue_dust').displayName('Rarest Metal Residue Dust');
	event.create('geghilarity:sodium_ruthenate_dust').displayName('Sodium Ruthenate Dust');
	event.create('geghilarity:ruthenium_tetroxide_dust').displayName('Ruthenium Tetroxide Dust');
	event.create('geghilarity:ruthenium_dust').displayName('Ruthenium Dust');
	event.create('geghilarity:iridium_metal_residue_dust').displayName('Iridium Metal Residue Dust');
	event.create('geghilarity:osmium_dust').displayName('Osmium Dust');
	event.create('geghilarity:iridium_dioxide_dust').displayName('Iridium Dioxide Dust');
	event.create('geghilarity:sludge_dust_residue_dust').displayName('Sludge Dust Residue Dust');
	event.create('geghilarity:iridium_chloride_dust').displayName('Iridium Chloride Dust');
	event.create('geghilarity:metallic_sludge_dust_residue_dust').displayName('Metallic Sludge Dust Residue Dust');
	
	// use MI instead
	event.create('geghilarity:iridium_dust').displayName('Iridium Dust');
	
	event.create('geghilarity:silicon_dioxide_dust').displayName('Silicon Dioxide Dust');
	
	// dusts completed
	event.create('geghilarity:small_platinum_metallic_powder_dust').displayName('Small Pile of Platinum Metallic Powder Dust');
	event.create('geghilarity:small_platinum_residue_dust').displayName('Small Pile of Platinum Residue Dust');
	event.create('geghilarity:tiny_platinum_salt_dust').displayName('Tiny Pile of Platinum Salt Dust');
	event.create('geghilarity:tiny_palladium_salt_dust').displayName('Tiny Pile of Palladium Salt Dust');
	event.create('geghilarity:small_reprecipitated_palladium_dust').displayName('Small Pile of Reprecipitated Palladium Dust');
	event.create('geghilarity:small_ashes').displayName('Small Pile of Ashes');
	event.create('geghilarity:ashes').displayName('Ashes');
	event.create('geghilarity:small_leach_residue_dust').displayName('Small Pile of Leach Residue Dust');
	
	// use MI instead
	event.create('geghilarity:sulfur_dust').displayName('Sulfur Dust');
	
	// ALU
	event.create('geghilarity:rutile_dust').displayName('Rutile Dust');
	
	event.create('geghilarity:magnesium_dust').displayName('Magnesium Dust');
	event.create('geghilarity:magnesium_chloride_dust').displayName('Magnesium Chloride Dust');
	
	event.create('geghilarity:tungstate_dust').displayName('Tungstate Dust');
	event.create('geghilarity:lithium_hydroxide_dust').displayName('Lithium Hydroxide Dust');
	event.create('geghilarity:calcium_hydroxide_dust').displayName('Calcium Hydroxide Dust');
	event.create('geghilarity:tungsten_trioxide_dust').displayName('Tungsten Trioxide Dust');
	event.create('geghilarity:lithium_dust').displayName('Lithium Dust');
	event.create('geghilarity:crushed_nickel').displayName('Crushed Nickel Ore');
	event.create('geghilarity:purified_nickel_ore').displayName('Purified Nickel Ore');
	event.create('geghilarity:purified_nickel_dust').displayName('Purified Pile of Nickel Dust');
	
	//part 3
	event.create('geghilarity:quicklime_dust').displayName('Quicklime Dust');
	event.create('geghilarity:epoxy_resin_sheet').displayName('Epoxy Resin Sheet');
	event.create('geghilarity:copper_foil').displayName('Copper Foil');
	event.create('geghilarity:epoxy_circuit_board').displayName('Epoxy Circuit Board');
	event.create('geghilarity:electrum_foil').displayName('Electrum Foil');
	event.create('geghilarity:advanced_circuit_board').displayName('Advanced Circuit Board');
	event.create('geghilarity:pyrite_dust').displayName('Pyrite Dust');
	
	//part 4
	event.create('geghilarity:tiny_rock_salt_dust').displayName('Tiny Pile of Rock Salt');
	event.create('geghilarity:small_rock_salt_dust').displayName('Small Pile of Rock Salt');
	event.create('geghilarity:rock_salt_dust').displayName('Rock Salt');
	event.create('geghilarity:hot_tungsten_ingot');
	event.create('geghilarity:tungstensteel_dust');
	event.create('geghilarity:hot_tungstensteel_ingot');
	event.create('geghilarity:tungstensteel_ingot');
	event.create('geghilarity:tungstensteel_plate');
	
	//AM
	event.create('geghilarity:nickel_oxide_alumina_catalyst');
	event.create('geghilarity:iron_chromium_oxide_catalyst');
	event.create('geghilarity:long_titanium_rod');
	event.create('geghilarity:alumina');
	event.create('geghilarity:garnierite_dust');
	event.create('geghilarity:chromium_trioxide_dust');
	event.create('geghilarity:aluminium_hydride');
	event.create('geghilarity:aluminium_hydroxide');
	
	//LCR
	event.create('geghilarity:sodium_fluoride_dust');
	event.create('geghilarity:aluminium_trifluoride_dust');
	event.create('geghilarity:charcoal_dust').burnTime(1600);
	event.create('geghilarity:polyethylene_foil')
	event.create('geghilarity:polyethylene_sheet')
	event.create('geghilarity:polytetrafluoroethylene_foil')
	event.create('geghilarity:polytetrafluoroethylene_sheet')
	event.create('geghilarity:ptfe_pipe').displayName('Large Polytetrafluoroethylene Pipe')
	
	event.create('geghilarity:biotite_dust');
	
	event.create('geghilarity:sacred_platinoreum');
	
	event.create('geghilarity:indium_dust');
	event.create('geghilarity:indium_trioxide_dust');
	event.create('geghilarity:indium_trifluoride_dust');
	event.create('geghilarity:naquadah_dust');
	event.create('geghilarity:potassium_fluoride_dust');
	event.create('geghilarity:naquadah_concentrate_dust');
	event.create('geghilarity:potassium_peroxymonosulfate');
	event.create('geghilarity:antimony_trifluoride_dust');
	event.create('geghilarity:antimony_trioxide_dust');
	event.create('geghilarity:tiny_indium_dust').displayName('Tiny Pile of Indium Dust');
	event.create('geghilarity:naquadric_compound_dust');
	
	// coils/vanadium
	event.create('geghilarity:tiny_tungstate_dust').displayName('Tiny Pile of Tungstate Dust');
	event.create('geghilarity:small_tungstate_dust').displayName('Small Pile of Tungstate Dust');
	event.create('geghilarity:ammonium_chloride_dust');
	event.create('geghilarity:vanadium_magnetite_dust');
	event.create('geghilarity:sodium_metavanadate_dust');
	event.create('geghilarity:ammonium_metavanadate_dust');
	event.create('geghilarity:vanadium_pentoxide_dust');
	event.create('geghilarity:vanadium_dust');
	event.create('geghilarity:alumino_silicate_wool');
	event.create('geghilarity:mica_insulator_foil');
	event.create('geghilarity:mica_based_sheet');
	event.create('geghilarity:mica_insulator_sheet');
	event.create('geghilarity:mica_based_pulp');
	event.create('geghilarity:asbestos_dust');
	event.create('geghilarity:mica_dust');
	event.create('geghilarity:nichrome_cable');
	event.create('geghilarity:nichrome_wire');
	event.create('geghilarity:nichrome_plate');
	event.create('geghilarity:hot_nichrome_ingot');
	event.create('geghilarity:nichrome_ingot');
	event.create('geghilarity:nichrome_dust');
	event.create('geghilarity:tungstensteel_wire');
	event.create('geghilarity:tungstensteel_cable');
	event.create('geghilarity:molybdenum_dust');
	event.create('geghilarity:hss-g_dust').displayName('HSS-G Dust');
	event.create('geghilarity:hss-g_plate').displayName('HSS-G Plate');
	event.create('geghilarity:hss-g_ingot').displayName('HSS-G Ingot');
	event.create('geghilarity:hot_hss-g_ingot').displayName('Hot HSS-G Ingot');
	event.create('geghilarity:hss-g_wire').displayName('HSS-G wire');
	event.create('geghilarity:hss-g_cable').displayName('HSS-G Cable');
	event.create('geghilarity:hss-e_dust').displayName('HSS-E Dust');
	event.create('geghilarity:hss-e_ingot').displayName('HSS-E Ingot');
	event.create('geghilarity:hot_hss-e_ingot').displayName('Hot HSS-E Ingot');
	event.create('geghilarity:cobalt_dust');
	event.create('geghilarity:hss-s_dust').displayName('HSS-S Dust');
	event.create('geghilarity:hss-s_ingot').displayName('HSS-S Ingot');
	event.create('geghilarity:hot_hss-s_ingot').displayName('Hot HSS-S Ingot');
	
	event.create('geghilarity:molybdenum_ingot');
	event.create('geghilarity:molybdenite_dust');
	event.create('geghilarity:ammonium_molybdate_dust');
	event.create('geghilarity:ammonium_sulfate_dust');
	event.create('geghilarity:sodium_cyanide_dust');
	event.create('geghilarity:gold_depleted_molybdenite_dust');
	event.create('geghilarity:sodium_dicyanoaurate_dust');
	event.create('geghilarity:ammonium_perrhenate_dust');
		event.create('geghilarity:hot_rhenium_ingot');
	event.create('geghilarity:rhenium_ingot');
	event.create('geghilarity:trioctylmethylammonium_chloride_dust');
	event.create('geghilarity:trioctylmethylammonium_hydroxide_dust');
	event.create('geghilarity:zinc_chloride_dust');
	event.create('geghilarity:lithium_nitride_dust');
	event.create('geghilarity:lithium_fluoride_dust');
	event.create('geghilarity:lithium_bistriflimide_dust');
	event.create('geghilarity:lithium_chloride_dust');
	event.create('geghilarity:sodium_peroxide_dust');
	event.create('geghilarity:twoethylanthraquinone_dust').displayName('2-Ethylanthraquinone Dust');
	event.create('geghilarity:phthalic_anhydride_dust');
	event.create('geghilarity:tiny_vanadium_pentoxide_dust').displayName('Tiny Pile of Vanadium Pentoxide Dust');
	event.create('geghilarity:potassium_hydride_dust');
	event.create('geghilarity:phosphorus_pentoxide_dust');
	event.create('geghilarity:phosphorus_dust');
	event.create('geghilarity:gypsum_dust');
	
	event.create('geghilarity:rare_earth_dust');
	event.create('geghilarity:phosphate_dust');
	
	event.create('geghilarity:thorium-uranium_sludge_dust').displayName('Thorium-Uranium Sludge');
	event.create('geghilarity:thorium_oxide_dust');
	event.create('geghilarity:tiny_thorium_dust').displayName('Tiny Pile of Thorium Dust');
	event.create('geghilarity:thorium_dust');
	event.create('geghilarity:neodymium_oxide_dust');
	event.create('geghilarity:yttrium_oxide_dust');
	
	event.create('geghilarity:zinc_ore_coke_pellets');
	event.create('geghilarity:zincite_dust');
	event.create('geghilarity:zinc_residual_slag');
	event.create('geghilarity:fine_zinc_slag_dust');
	event.create('geghilarity:disodium_phosphate');
	event.create('geghilarity:zinc_fine_wire');
	event.create('geghilarity:zinc_wire');
	event.create('geghilarity:zinc_plate');
	event.create('geghilarity:small_zinc_dust').displayName('Small Pile of Zinc Dust');
	event.create('geghilarity:tiny_zinc_dust').displayName('Tiny Pile of Zinc Dust');
	event.create('geghilarity:iron_fine_wire');
	event.create('geghilarity:iron_wire');
	event.create('geghilarity:indium_hydroxide');
	
	
	//LYEO
		event.create('unfinished_tier1_rocket').displayName('Unfinished Tier 1 Rocket')
		event.create('unfinished_tier2_rocket').displayName('Unfinished Tier 2 Rocket')
		event.create('unfinished_tier3_rocket').displayName('Unfinished Tier 3 Rocket')
		event.create('unfinished_tier4_rocket').displayName('Unfinished Tier 4 Rocket')
	event.create('geghilarity:palladium_ingot').displayName('Palladium Ingot');
	event.create('geghilarity:hot_rhodium_plated_palladium_ingot').displayName('Hot Rhodium Plated Palladium Ingot');
	event.create('geghilarity:rhodium_plated_palladium_ingot').displayName('Rhodium Plated Palladium Ingot');
	event.create('geghilarity:rhodium_plated_palladium_plate').displayName('Rhodium Plated Palladium Plate');
	event.create('geghilarity:hot_osmium_ingot').displayName('Hot Osmium Ingot');
	event.create('geghilarity:osmium_ingot').displayName('Osmium Ingot');
	
	event.create('unfinished_processing_unit').displayName('Unfinished Processing Unit')
	
	event.create('geghilarity:hot_naquadah_ingot').displayName('Hot Naquadah Ingot');
	event.create('geghilarity:naquadah_ingot').displayName('Naquadah Ingot');
	event.create('geghilarity:naquadah_plate').displayName('Naquadah Plate');
	
	event.create('geghilarity:hot_tritanium_ingot').displayName('Hot Tritanium Ingot');
	event.create('geghilarity:tritanium_ingot').displayName('Tritanium Ingot');
	event.create('geghilarity:tritanium_plate').displayName('Tritanium Plate');
	
		event.create('incomplete_command_block').displayName('Incomplete Command Block')
	
	// MARCH
	event.create('geghilarity:crushed_naquadric_compound_ore')	
	event.create('geghilarity:impure_enriched_naquadric_compound_dust')
	
	event.create('geghilarity:enriched_naquadric_compound_dust')
	event.create('geghilarity:purified_naquadric_compound_ore')
	event.create('geghilarity:centrifuged_naquadric_compound_ore')
	
	event.create('geghilarity:purified_enriched_naquadric_compound_dust')
	event.create('geghilarity:naquadriatic_compound_dust')
	
	
	event.create('geghilarity:enriched_naquadah_concentrate_dust')
    event.create('geghilarity:naquadria_concentrate_dust')
	event.create('geghilarity:auric_fluoride_dust')
	event.create('geghilarity:enriched_naquadah_dust')
	event.create('geghilarity:naquadria_dust')
	event.create('geghilarity:caesium_dust')
	event.create('geghilarity:magnesium_sulfate_dust')
	event.create('geghilarity:polybenzimidazole_sheet')
	event.create('geghilarity:chromium_dioxide_dust')
	event.create('geghilarity:potassium_nitrate_dust')
	event.create('geghilarity:potassium_dichromate_dust')
	event.create('geghilarity:osmiridium_dust')
	event.create('geghilarity:naquadah_alloy_dust')
	event.create('geghilarity:zpm_super_base_dust').displayName('ZPM Superconductor Base Dust')
	event.create('geghilarity:tiny_jasper_dust').displayName('Tiny Pile of Jasper Dust')
	event.create('geghilarity:tungsten_hexachloride_dust')
	event.create('geghilarity:tungstencarbide_dust')
	event.create('geghilarity:tungsten_titanium_carbide_dust')
	event.create('geghilarity:jasper_dust')
	event.create('geghilarity:titan_steel_dust')
	
	event.create('geghilarity:titanium_trifluoride_dust')
	event.create('geghilarity:trinium_sulfide_dust')
	event.create('geghilarity:hot_trinium_ingot')
	event.create('geghilarity:trinium_ingot')
	event.create('geghilarity:trinium_dust')
	event.create('geghilarity:zinc_sulfide_dust')
	
	event.create('geghilarity:osmium_plate')
	event.create('geghilarity:double_osmium_plate')
	event.create('geghilarity:osmium_curved_plate')
	event.create('geghilarity:osmium_bolt')
	event.create('geghilarity:osmium_rod')
	event.create('geghilarity:osmium_drill_head')

	// alu
	event.create('geghilarity:cryolite_dust')
	//event.create('geghilarity:calcium_sulfate_dust') //  check uses
	event.create('geghilarity:acanthite_dust')
	event.create('geghilarity:tiny_calcite_dust').displayName('Tiny Pile of Calcite Dust')
	event.create('geghilarity:small_silver_oxide_dust').displayName('Small Pile of Silver Oxide Dust');
	event.create('geghilarity:silver_oxide_dust')
	
	event.create('geghilarity:nickel_rod')
	
	event.create('geghilarity:graphite_dust')
	event.create('geghilarity:graphite_ingot')
	//event.create('geghilarity:graphite_rod')
	event.create('geghilarity:graphite_electrode')
	event.create('geghilarity:chromite_dust')
	event.create('geghilarity:ferrochromium_dust')
	event.create('geghilarity:ferrosilicon_dust')
	event.create('geghilarity:fluorite_dust')
	event.create('geghilarity:gallium_dust')
	event.create('geghilarity:tiny_gallium_dust').displayName('Tiny Pile of Gallium Dust');
	event.create('geghilarity:silicon_carbide_dust')
	event.create('geghilarity:wood_ash_dust')
	event.create('geghilarity:dark_ashes')
	event.create('geghilarity:potassium_carbonate_dust')
	event.create('geghilarity:potassium_bisulfate_dust')
	event.create('geghilarity:potassium_persulfate_dust')
	event.create('geghilarity:polytetrafluoroethylene_pulp').displayName('Polytetrafluoroethylene (PTFE) Pulp')
	event.create('geghilarity:philips_catalyst_dust')
	event.create('geghilarity:ziegler_natta_catalyst_dust')
	
	event.create('geghilarity:small_ferrosilicon_dust').displayName('Small Pile of Ferrosilicon Dust');
	
	event.create('geghilarity:tiny_dark_ashes').displayName('Tiny Pile of Dark Ashes')
	event.create('geghilarity:raw_electrode')
	
	event.create('geghilarity:calcium_carbide_dust')
	event.create('geghilarity:slaked_lime_dust').displayName('Slaked Lime (Calcium Hydroxide) Dust')
	event.create('geghilarity:polyvinyl_chloride_pulp').displayName('Polyvinyl Chloride (PVC) Pulp')
	event.create('geghilarity:mercury_chloride_dust').displayName('Mercury II Chloride Dust')
	
	event.create('geghilarity:pentlandite_dust')
	
	event.create('geghilarity:ammonium_nitrate_dust')
	
	// pbi
	event.create('geghilarity:polybenzimidazole_pulp')
	event.create('geghilarity:cobalt_catalyst_pellet')
	event.create('geghilarity:cobalt_catalyst_bed')
	event.create('geghilarity:palladium_catalyst_pellet')
	event.create('geghilarity:palladium_catalyst_bed')
	event.create('geghilarity:4-nitrochlorobenzene_dust').displayName('4-Nitrochlorobenzene Dust')
	event.create('geghilarity:mixed_nitrochlorobenzene_dust')
	event.create('geghilarity:isophthalic_acid_dust')
	event.create('geghilarity:amoco_process_catalyst_dust')
	event.create('geghilarity:p-xylene_dust').displayName('p-Xylene Dust')
	event.create('geghilarity:platinum_catalyst_pellet')
	event.create('geghilarity:platinum_catalyst_bed')
	event.create('geghilarity:impregnated_alumina_catalyst_dust')
	event.create('geghilarity:iron_iii_oxide_dust').displayName('Iron III Oxide Dust')
	event.create('geghilarity:iron_iii_oxide_catalyst_bed').displayName('Iron III Oxide Catalyst Bed')
	event.create('geghilarity:iron_iii_oxide_catalyst_pellet').displayName('Iron III Oxide Catalyst Pellet')
	event.create('geghilarity:catalyst_bed_support_grid')
	event.create('geghilarity:red_mud_slag')
	event.create('geghilarity:leached_red_mud_slag')
	event.create('geghilarity:silica_gel_dust')
	event.create('geghilarity:wet_silica_gel_dust')
	event.create('geghilarity:nickel_catalyst_bed')
	event.create('geghilarity:nickel_catalyst_pellet')
	
	event.create('geghilarity:raw_styrene_butadiene_rubber_dust').displayName('Raw Styrene-Butadiene Rubber Dust')
	event.create('geghilarity:styrene_butadiene_rubber_bar').displayName('Styrene-Butadiene Rubber Bar')
	event.create('geghilarity:lithium_bromide_dust')
	event.create('geghilarity:aluminium_alkoxide_mixture_dust')
	event.create('geghilarity:beryllium_chloride_dust')
	
	event.create('geghilarity:borax_dust')
	event.create('geghilarity:boron_dust')
	event.create('geghilarity:borosilicate_glass_dust')
	event.create('geghilarity:hafnia-zirconia_blend_dust').displayName('Hafnia-Zirconia Blend Dust')
	event.create('geghilarity:thorianite_dust')
	event.create('geghilarity:hafnia_dust')
	event.create('geghilarity:zirconia_dust')
	event.create('geghilarity:hafnium_tetrachloride_dust')
	event.create('geghilarity:low-purity_hafnium_dust').displayName('Low-Purity Hafnium Dust')
	event.create('geghilarity:iodine_dust')
	event.create('geghilarity:hafnium_iodide_dust')
	event.create('geghilarity:hot_hafnium_ingot')
	event.create('geghilarity:hafnium_ingot')
	event.create('geghilarity:hafnium_runoff_dust')
	event.create('geghilarity:zirconium_tetrachloride_dust')
	event.create('geghilarity:hot_zirconium_ingot')
	event.create('geghilarity:zirconium_ingot')
	event.create('geghilarity:monazite_sulfate_dust')
	event.create('geghilarity:red_zircon_dust')
	event.create('geghilarity:zirconium_dust')
	event.create('geghilarity:ilmenite_dust')
	event.create('geghilarity:acidic_monazite_powder_dust')
	event.create('geghilarity:monazite_rare_earth_filtrate_dust')
	event.create('geghilarity:thorium-phosphate_cake_dust').displayName('Thorium-Phosphate Cake Dust')
	event.create('geghilarity:thorium-phosphate_concentrate_dust').displayName('Thorium-Phosphate Concentrate Dust')
	event.create('geghilarity:neutralized_monazite_rare_earth_filtrate_dust')
	event.create('geghilarity:monazite_rare_earth_hydroxide_concentrate_dust')
	event.create('geghilarity:uranium_filtrate_dust')
	event.create('geghilarity:neutralized_uranium_filtrate_dust')
	event.create('geghilarity:dried_monazite_rare_earth_concentrate_dust')
	event.create('geghilarity:cerium-rich_mixture_dust').displayName('Cerium-Rich Mixture Dust')
	event.create('geghilarity:cerium_dioxide_dust')
	event.create('geghilarity:cooled_monazite_rare_earth_concentrate_dust')
	event.create('geghilarity:europium_iii_oxide_dust').displayName('Europium III Oxide Dust')
	event.create('geghilarity:monazite_rarer_earth_sediment_dust')
	event.create('geghilarity:europium_dust')
	event.create('geghilarity:europium_oxide_dust')
	event.create('geghilarity:heterogenous_halogenic_monazite_rare_earth_mixture_dust')
	event.create('geghilarity:saturated_monazite_rare_earth_dust')
	event.create('geghilarity:samarium_dust')
	event.create('geghilarity:gadolinium_dust')
	event.create('geghilarity:samaric_residue_dust')
	event.create('geghilarity:cerium_chloride_dust')
	event.create('geghilarity:cerium_oxalate_dust')
	event.create('geghilarity:cerium_iii_oxide_dust').displayName('Cerium (III) Oxide Dust')
	event.create('geghilarity:cerium_dust')
	event.create('geghilarity:small_seaweed_ash_dust').displayName('Small Pile of Seaweed Ash Dust');
	event.create('geghilarity:seaweed_ash_dust')
	event.create('geghilarity:extremely_unstable_naquadah_dust')
	event.create('geghilarity:fluorspar_dust')
	event.create('geghilarity:radioactive_sludge_dust')
	
	event.create('geghilarity:alumina_catalyst_bed')
	event.create('geghilarity:alumina_catalyst_pellet')
	event.create('geghilarity:silver_catalyst_bed')
	event.create('geghilarity:silver_catalyst_pellet')
	event.create('geghilarity:dicobalt_octacarbonyl_dust')
	event.create('geghilarity:lv_emitter').displayName('LV Emitter');
	event.create('geghilarity:aluminium_sulfate_dust')
	event.create('geghilarity:zsm5_dust').displayName('ZSM-5 Dust');
	event.create('geghilarity:zsm5_catalyst_pellet').displayName('ZSM-5 Catalyst Pellet');
	event.create('geghilarity:zsm5_catalyst_bed').displayName('ZSM-5 Catalyst Bed');
	event.create('geghilarity:sodium_aluminate_dust')
	event.create('geghilarity:molecular_sieve_dust')
	event.create('geghilarity:wet_molecular_sieve_dust')
	event.create('geghilarity:pyrolusite_dust')
	event.create('geghilarity:manganese_ii_oxide_dust').displayName('Manganese II Oxide Dust');
	event.create('geghilarity:iron_iii_hydroxide_dust').displayName('Iron III Hydroxide Dust');
	event.create('geghilarity:sodium_sulfate_dust')
	event.create('geghilarity:wolframite_dust')
	event.create('geghilarity:sifted_wolframite_dust')
	event.create('geghilarity:gold_concentrate_dust')
	event.create('geghilarity:sodium_silicate_dust')
	event.create('geghilarity:flotated_wolframite_dust')
	event.create('geghilarity:aluminium_silicate_dust')
	event.create('geghilarity:sodium_sulfide_dust')
	event.create('geghilarity:ammonium_paratungstate_dust')
	event.create('geghilarity:granite_tailing_dust')
	event.create('geghilarity:molybdenum_trisulfide_dust')
	event.create('geghilarity:potassium-loaded_molecular_sieve_dust').displayName('Potassium-Loaded Molecular Sieve Dust');
	event.create('geghilarity:saturated_potassium-loaded_molecular_sieve_dust').displayName('Saturated Potassium-Loaded Molecular Sieve Dust');
	event.create('geghilarity:ferrocene_dust')
	event.create('geghilarity:sodium-lead_alloy_ingot').displayName('Sodium-Lead Alloy Ingot');
	event.create('geghilarity:sodium-lead_alloy_dust').displayName('Sodium-Lead Alloy Dust');
	event.create('geghilarity:aluminium_chloride_dust')
	event.create('geghilarity:2-methylmidazole_dust').displayName('2-Methylmidazole Dust');
	event.create('geghilarity:dicyandiamide_dust')
	event.create('geghilarity:epoxy_curing_mixture_dust')
	event.create('geghilarity:calcium_cyanamide_dust')
	event.create('geghilarity:cyanamide_dust')
	event.create('geghilarity:tiny_potassium_persulfate_dust').displayName('Tiny Pile of Potassium Persulfate Dust')
	event.create('geghilarity:polystyrene_pulp')
	event.create('geghilarity:crosslinked_polystyrene-divinylbenzene_nugget').displayName('Crosslinked Polystyrene-Divinylbenzene Nugget')
	event.create('geghilarity:crosslinked_polystyrene-divinylbenzene_round').displayName('Crosslinked Polystyrene-Divinylbenzene Round')
	event.create('geghilarity:ag_50w-x8_resin_beads').displayName('AG 50W-X8 Resin Beads')
	event.create('geghilarity:bisphenol_a_dust')
	event.create('geghilarity:wet_epoxy_dust')
	event.create('geghilarity:epoxy_resin_pulp')
	event.create('geghilarity:urea_dust')
	event.create('geghilarity:oleic_acid_dust')
	event.create('geghilarity:impure_molybdenum_trioxide_dust')
	event.create('geghilarity:ammonium_dimolybdate_dust')
	event.create('geghilarity:purified_molybdenum_trioxide_dust')
	event.create('geghilarity:potash_dust')
	event.create('geghilarity:crushed_bastnasite_ore')
	event.create('geghilarity:gangue_dust')
	event.create('geghilarity:bastnasite_rare_earth_oxides_dust')
	event.create('geghilarity:acid-leached_bastnasite_rare_earth_oxides_dust').displayName('Acid-Leached Bastnasite Rare Earth Oxides Dust')
	event.create('geghilarity:roasted_rare_earth_oxides_dust')
	event.create('geghilarity:wet_rare_earth_oxides_dust')
	event.create('geghilarity:cerium-oxidised_rare_earth_oxides_dust').displayName('Cerium-Oxidised Rare Earth Oxides Dust')
	event.create('geghilarity:bastnasite_rarer_earth_oxides_dust')
	event.create('geghilarity:neodymium_rare_earth_concentrate_dust')
	event.create('geghilarity:samaric_rare_earth_concentrate_dust')
	event.create('geghilarity:lanthanium_chloride_dust')
	event.create('geghilarity:lanthanum_dust')
	event.create('geghilarity:fluorinated_samaric_concentrate_dust')
	event.create('geghilarity:holmium_dust')
	event.create('geghilarity:samarium-terbium_mixture_dust').displayName('Samarium-Terbium Dust')
	event.create('geghilarity:calcium_fluoride_dust')
	event.create('geghilarity:nitrogenated_samarium-terbium_mixture_dust').displayName('Nitrogenated Samarium-Terbium Dust')
	event.create('geghilarity:terbium_nitrate_dust')
	event.create('geghilarity:terbium_dust')
	
	event.create('geghilarity:sodium_chromate_mixture_dust')
	event.create('geghilarity:sodium_dichromate_dust')
	event.create('geghilarity:chromium-soda_mixture_dust').displayName('Chromium-Soda Mixture Dust')
	event.create('geghilarity:chromium_iii_oxide_dust').displayName('Chromium III Oxide Dust');
	event.create('geghilarity:magnesia_dust')
	event.create('geghilarity:cracking_catalyst')
	event.create('geghilarity:spent_cracking_catalyst')

})	




//.stillTexture('kubejs:block/strawberry_still')
    //.flowingTexture('kubejs:block/strawberry_flow')