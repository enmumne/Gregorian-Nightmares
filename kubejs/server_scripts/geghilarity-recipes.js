//onEvent('recipes', event => {
ServerEvents.recipes(event => {
	
	// pbf mixer
	event.remove({type: "modern_industrialization:mixer", output: `modern_industrialization:fire_clay_dust`})
	event.recipes.modern_industrialization.mixer({
		eu: 2,
		duration: 100,
		item_inputs : [
			{item: "geggy:clay_dust", amount: 2},
			{item: "modern_industrialization:brick_dust", amount: 1},
			{item: "magick:calcite_dust", amount: 1}
		],
		item_outputs :[
			{item: "modern_industrialization:fire_clay_dust", amount: 1}
		]
	})
	event.recipes.modern_industrialization.compressor({
		eu: 2,
		duration: 300,
		item_inputs : [
			{item: "modern_industrialization:fire_clay_dust", amount: 3}
		],
		item_outputs :[
			{item: "geggy:compressed_fireclay", amount: 2}
		]
	})
	event.recipes.modern_industrialization.compressor({
		eu: 2,
		duration: 300,
		item_inputs : [
			{item: "geggy:clay_brick", amount: 4}
		],
		item_outputs :[
			{item: "geggy:clay_bricks", amount: 1}
		]
	})
	//event.remove({type: 'minecraft:crafting_shaped', output: 'minecraft:bricks'})
	event.recipes.modern_industrialization.compressor({
		eu: 2,
		duration: 300,
		item_inputs : [
			{item: "minecraft:brick", amount: 4}
		],
		item_outputs :[
			{item: "minecraft:bricks", amount: 1}
		]
	})
	/*
	event.recipes.modern_industrialization.compressor({
		eu: 2,
		duration: 600,
		item_inputs : [
			{item: "geggy:unfired_tempered_dust", amount: 1}
		],
		item_outputs :[
			{item: "geggy:unfired_tempered_brick", amount: 1}
		]
	})
	*/
	
	event.remove({type: 'modern_industrialization:mixer', output: 'modern_industrialization:uncooked_steel_dust'})
	event.recipes.modern_industrialization.mixer(2, 100)
        .itemIn("7x geggy:wrought_dust")
        .itemIn("2x modern_industrialization:coke_dust")
		.itemOut("9x modern_industrialization:uncooked_steel_dust")
        //.fluidIn("modern_industrialization:oxygen", 1000)
        //.fluidOut("modern_industrialization:creosote", 5000)
		
	// iron nerf macerator	
	event.remove({type: 'modern_industrialization:macerator', output: 'minecraft:raw_iron'})
	event.recipes.modern_industrialization.macerator(2, 200)
        .itemIn("#c:iron_ores")
		.itemOut("2x minecraft:raw_iron")

	event.recipes.modern_industrialization.blast_furnace({
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 2},
			{item: "geggy:compressed_fireclay", probability: 0.0}
		],
		item_outputs :
		[
			{item: "geggy:mold_ball", amount: 1}
		]
	})
	event.recipes.modern_industrialization.blast_furnace({
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 2},
			{tag: "c:ingots", probability: 0.0}
		],
		item_outputs :
		[
			{item: "geggy:mold_ingot", amount: 1}
		]
	})
	event.recipes.modern_industrialization.blast_furnace({
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 2},
			{item: "minecraft:cobblestone", probability: 0.0}
		],
		item_outputs :
		[
			{item: "geggy:mold_block", amount: 1}
		]
	})
	event.recipes.modern_industrialization.blast_furnace({
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 2},
			{tag: "c:nuggets", probability: 0.0}
		],
		item_outputs :
		[
			{item: "geggy:mold_nugget", amount: 1}
		]
	})
	event.recipes.modern_industrialization.blast_furnace({
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 2},
			{item: "minecraft:flint", probability: 0.0}
		],
		item_outputs :
		[
			{item: "geggy:mold_bottle", amount: 1}
		]
	})
	event.recipes.modern_industrialization.blast_furnace({
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 2},
			{item: "modern_industrialization:lead_plate", probability: 0.0}
		],
		item_outputs :
		[
			{item: "geggy:mold_plate", amount: 1}
		]
	})
	
	/*
	event.recipes.modern_industrialization.blast_furnace(2, 400)
        .itemIn("2x modern_industrialization:uncooked_steel_dust")
		.itemIn("1x #c:ingots", 0.0)
		.itemOut("geggy:mold_ingot")
	event.recipes.modern_industrialization.blast_furnace(2, 400)
        .itemIn("2x modern_industrialization:uncooked_steel_dust")
		.itemIn("1x minecraft:cobblestone", 0.0)
		.itemOut("geggy:mold_block")
	event.recipes.modern_industrialization.blast_furnace(2, 400)
        .itemIn("2x modern_industrialization:uncooked_steel_dust")
		.itemIn("1x #c:nuggets", 0.0)
		.itemOut("geggy:mold_nugget")	
	*/	
	
	
	event.remove({type: "modern_industrialization:packer", output: `modern_industrialization:fire_clay_bricks`})
	event.recipes.modern_industrialization.packer({eu: 2, duration: 100,item_inputs: [{item: "modern_industrialization:fire_clay_brick", amount: 4},{item: "geggy:kelp_dust", amount: 1}],
			item_outputs: [{item: "modern_industrialization:fire_clay_bricks", amount: 1}]})
	
	event.recipes.modern_industrialization.macerator({
		eu: 2,
		duration: 30,
		item_inputs: [ 
			{item: "minecraft:clay_ball", amount: 1}
		],
		item_outputs: [
			{item: "geggy:clay_dust", amount: 1}
		]
	})	
	event.recipes.modern_industrialization.macerator({
		eu: 2,
		duration: 60,
		item_inputs: [ 
			{item: "minecraft:dried_kelp", amount: 1}
		],
		item_outputs: [
			{item: "geggy:kelp_dust", amount: 1}
		]
	})	

	event.remove({type: "modern_industrialization:macerator", output: `modern_industrialization:tungsten_dust`})
	event.recipes.modern_industrialization.macerator({
		eu: 2,
		duration: 400,
		item_inputs: [ 
			{item: "modern_industrialization:raw_tungsten", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:tungstate_dust", amount: 1},
			{item: "geghilarity:tungstate_dust", amount: 1, probability: 0.5}
		]
	})	
	
	event.remove({type: "modern_industrialization:assembler", output: `modern_industrialization:digital_circuit_board`})
	event.recipes.modern_industrialization.assembler({
		eu: 16,
		duration: 500,
		item_inputs: [ 
			{item: "modern_industrialization:aluminum_cable", amount: 6},
			{item: "modern_industrialization:silicon_battery", amount: 1},
			{item: "modern_industrialization:electronic_circuit_board", amount: 1},
			{item: "modern_industrialization:stainless_steel_plate", amount: 4},
			{item: "geghilarity:advanced_circuit_board", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:polyethylene", amount: 750}
		],
		item_outputs: [
			{item: "modern_industrialization:digital_circuit_board", amount: 1}
		]
	})
	
	// start
	event.recipes.modern_industrialization.centrifuge({
		eu: 8,
		duration: 1600,
		item_inputs: [ 
			{item: "geghilarity:ccf", probability: 0.0}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:nitrogen", amount: 3900},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})	

	// a1
	event.recipes.modern_industrialization.chemical_reactor(
	{
		eu: 30,
		duration: 1250,
		fluid_inputs: [ 
			{fluid: "modern_industrialization:oxygen", amount: 2000},
			{fluid: "modern_industrialization:nitrogen", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:nitrogen_dioxide", amount: 1000}
		]
	})	
		
	// MV?	
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 240,
			duration: 30,
			fluid_inputs: [ 
				{fluid: "minecraft:water", amount: 1000},
				{fluid: "geghilarity:nitrogen_dioxide", amount: 3000}
			],
			fluid_outputs: [
				{fluid: "geghilarity:nitric_oxide", amount: 1000},
				{fluid: "geghilarity:nitric_acid", amount: 2000}
			]
		})
	
	// a2
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 240,
			fluid_inputs: [ 
				{fluid: "minecraft:water", amount: 1000},
				{fluid: "modern_industrialization:oxygen", amount: 1000},
				{fluid: "geghilarity:nitrogen_dioxide", amount: 2000}
			],
			fluid_outputs: [
				{fluid: "geghilarity:nitric_acid", amount: 2000}
			]
		})
		
	event.remove({type: "modern_industrialization:macerator", input: `#c:salt_ores`})	
		
	//aa	
	//DEPP MaGICK
	event.recipes.modern_industrialization.macerator({
		eu: 12,
		duration: 400,
		item_inputs: [ 
			{tag: "c:salt_ores", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:salt_crushed_dust", amount: 6},
			{item: "geghilarity:rock_salt_dust", amount: 1, probability: 0.35},
			{item: "magick:stone_dust", amount: 1, probability: 0.60}
		]
	})
		
	//bb	
	//DEPP MAGICK
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "modern_industrialization:salt_crushed_dust"}
		],
		"results": [
			{"count": 1, "item": "modern_industrialization:salt_dust"},
			{"count": 3, "item": "geghilarity:tiny_rock_salt_dust"},
			{"count": 1, "item": "magick:stone_dust"}
		]	
	})
		
	// event.remove modern_industrialization:materials/electrolyzer/salt_electrolysis	
	event.remove({type: "modern_industrialization:electrolyzer", output: `modern_industrialization:sodium_dust`})
	event.remove({type: "modern_industrialization:electrolyzer", input: `minecraft:water`})
	
	// 1
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 30,
			duration: 1500,
			fluid_inputs: [ 
				{fluid: "minecraft:water", amount: 1000}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:oxygen", amount: 1000},
				{fluid: "modern_industrialization:hydrogen", amount: 2000}
			]
		})
	
	// 2
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 30,
			duration: 288,
			item_inputs: [ 
				{item: "geghilarity:rock_salt_dust", amount: 2}
			],
			item_outputs: [
				{item : "geghilarity:potassium_dust", amount: 1}
			],	
			fluid_outputs: [
				{fluid: "modern_industrialization:chlorine", amount: 1000}
			]
		})	
		
	// 2b
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 30,
			duration: 224,
			item_inputs: [ 
				{item: "modern_industrialization:salt_dust", amount: 2}
			],
			item_outputs: [
				{item : "modern_industrialization:sodium_dust", amount: 1}
			],	
			fluid_outputs: [
				{fluid: "modern_industrialization:chlorine", amount: 1000}
			]
		})	
		
	// 3
	event.recipes.modern_industrialization.mixer({
		eu: 30,
		duration: 100,
		item_inputs : [
			{item: "geghilarity:potassium_dust", amount: 2},
			{item: "modern_industrialization:sulfur_dust", amount: 2},
			{item: "geggy:selector_1", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:oxygen", amount: 5000}
		],
		item_outputs :
		[
			{item: "geghilarity:potassium_metabisulfate_dust", amount: 9}
		]
	})
				
	// 4
	event.recipes.modern_industrialization.mixer(
		{
			eu: 30,
			duration: 100,
			item_inputs : [
				{item: "modern_industrialization:copper_dust", amount: 3},
				{item: "geghilarity:precious_ingot", amount: 1}
			],
			fluid_inputs: [ 
				{fluid: "geghilarity:nitric_acid", amount: 1000}
			],
			item_outputs :
			[
				{item: "geghilarity:gold_alloy_ingot", amount: 4}
			]
		})
		
	event.recipes.minecraft.blasting(
		{
			cookingtime: 400,
			ingredient: [ 
				{item: "geggy:precious_ore"}
			],
			result: "geghilarity:precious_ingot"
		})	
		
	event.recipes.minecraft.blasting(
		{
			cookingtime: 400,
			ingredient: [ 
				{item: "geggy:nether_precious_ore"}
			],
			result: "geghilarity:precious_ingot"
		})

	event.recipes.minecraft.blasting(
		{
			cookingtime: 400,
			ingredient: [ 
				{item: "geggy:deepslate_precious_ore"}
			],
			result: "geghilarity:precious_ingot"
		})

	// need create mechanism
	event.recipes.minecraft.smelting({
		cookingtime: 600,
		ingredient: [ 
			{item: "geghilarity:precious_ingot"}
		],
		result: "minecraft:gold_nugget"
	})				
		
	/*	
	// 4 sus alloy 
	event.recipes.modern_industrialization.mixer(
		{
			eu: 30,
			duration: 100,
			item_inputs : [
				{item: "modern_industrialization:copper_dust", amount: 3},
				{item: "modern_industrialization:lead_dust", amount: 3}
			],
			fluid_inputs: [ 
				{fluid: "geghilarity:nitric_acid", amount: 1000}
			],
			item_outputs :
			[
				{item: "geghilarity:sus_alloy_dust", amount: 4}
			]
		})

	// 4bis dust to ingot
	event.recipes.minecraft.blasting(
		{
			cookingtime: 100,
			igredient : [
				{item: "geghilarity:sus_alloy_dust"},
			],
			result :
			[
				{item: "geghilarity:sus_alloy_ingot"}
			]
		})
	*/		
	
	/*
	// 5 
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 80,
			item_inputs : [
				{item: "geghilarity:sus_alloy_ingot", amount: 4}
			],
			fluid_inputs: [ 
				{fluid: "geghilarity:nitric_acid", amount: 1000}
			],
			item_outputs :
			[
				{item: "geghilarity:gold_leach", amount: 4},
				{fluid: "geghilarity:nitrogen_dioxide", amount: 1000}
			]
		})
	*/	

	// 5 
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 80,
			item_inputs : [
				{item: "geghilarity:gold_alloy_ingot", amount: 4}
			],
			fluid_inputs: [ 
				{fluid: "geghilarity:nitric_acid", amount: 1000}
			],
			item_outputs :
			[
				{item: "geghilarity:gold_leach", amount: 4}
			],
			fluid_outputs :
			[
				{fluid: "geghilarity:nitrogen_dioxide", amount: 1000}
			]
		})			
		
	// 6
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 8,
			duration: 60,
			fluid_inputs: [ 
				{fluid: "modern_industrialization:hydrogen", amount: 1000},
				{fluid: "modern_industrialization:chlorine", amount: 1000}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
			]
		})	

	// 7
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 80,
			item_inputs : [
				{item: "geghilarity:gold_leach", amount: 4}
			],
			fluid_inputs: [ 
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
			],
			item_outputs :
			[
				{item: "geghilarity:leached_copper_dust", amount: 4}
			],
			fluid_outputs: [
				{fluid: "minecraft:water", amount: 1000},
				{fluid: "geghilarity:chloroauric_acid", amount: 1000}
			]
		})		
	
	// 8
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 100,
		item_inputs : [
			{item: "geghilarity:potassium_metabisulfate_dust", probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:chloroauric_acid", amount: 1000}
		],
		item_outputs :
		[
			{item: "modern_industrialization:gold_dust", amount: 2}
		],
		fluid_outputs: [
			{fluid: "minecraft:water", amount: 1000},
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		]
	})
	
	// PGM!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	
	//GATED AND DISABLED
	// 01
	/*
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 384,
			duration: 320,
			fluid_inputs: [ 
				{fluid: "modern_industrialization:nitrogen", amount: 1000},
				{fluid: "modern_industrialization:hydrogen", amount: 3000}
			],
			fluid_outputs: [
				{fluid: "geghilarity:ammonia", amount: 1000}
			]
		})	
	*/	
		
	// 02
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 16,
			fluid_inputs: [ 
				{fluid: "geghilarity:ammonia", amount: 1000},
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
			],
			fluid_outputs: [
				{fluid: "geghilarity:ammonium_chloride", amount: 1000}
			]
		})
		
	// 03 TEMP purified zinc > zinc
	event.recipes.modern_industrialization.centrifuge(
		{
			eu: 5,
			duration: 220,
			item_inputs: [ 
				{item: "geghilarity:purified_nickel_dust", amount: 1}
			],
			item_outputs: [
				{item: "modern_industrialization:nickel_dust", amount: 1},
				{item: "geghilarity:tiny_platinum_metallic_powder_dust", amount: 3}
			]
		})	

	// 04
	event.recipes.modern_industrialization.mixer(
		{
			eu: 30,
			duration: 30,
			fluid_inputs: [ 
				{fluid: "geghilarity:nitric_acid", amount: 1000},
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
			],
			fluid_outputs :
			[
				{fluid: "geghilarity:aqua_regia", amount: 2000}
			]
		})
	
	// 05
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 250,
			item_inputs: [
				{item: "geghilarity:platinum_metallic_powder_dust", amount: 2}
			],
			fluid_inputs: [ 
				{fluid: "geghilarity:aqua_regia", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:tiny_platinum_residue_dust", amount: 5}
			],
			fluid_outputs: [
				{fluid: "geghilarity:platinum_concentrate", amount: 1000}
			]
		})
		
	// 06 TEMP
	event.recipes.modern_industrialization.lcr({
		eu: 30,
		duration: 1200,
		fluid_inputs: [ 
			{fluid: "geghilarity:platinum_concentrate", amount: 2000},
			{fluid: "geghilarity:ammonium_chloride", amount: 200}
		],
		item_ouputs: [
			{item: "geghilarity:small_platinum_salt_dust", amount: 10},
			{item: "geghilarity:reprecipitated_platinum_dust", amount: 2}
		],
		fluid_outputs: [
			{fluid: "geghilarity:palladium_enriched_ammonia", amount: 200},
			{fluid: "geghilarity:nitric_acid", amount: 1000},
			{fluid: "modern_industrialization:hydrogen", amount: 1200}
		]
	})	
	
	// 07 TEMP sifter > mixer
	event.recipes.modern_industrialization.mixer(
		{
			eu: 24,
			duration: 300,
			item_inputs: [ 
				{item: "geghilarity:platinum_salt_dust", amount: 2}
			],
			item_outputs :
			[
				{item: "geghilarity:refined_platinum_salt_dust", amount: 2, probability: 0.95}
			]
		})

	// 08
	event.recipes.modern_industrialization.blast_furnace({
			eu: 120,
			duration: 200,
			item_inputs: [ 
				{item: "geghilarity:refined_platinum_salt_dust", amount: 2}
			],
			item_outputs: [
				{item: "geghilarity:platinum_metallic_powder_dust", amount: 2},
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:chlorine", amount: 133}
			]
	})
		
	// 09 TEMP LCR > chem.rea 
	event.recipes.modern_industrialization.lcr(
		{
			eu: 30,
			duration: 250,
			item_inputs: [ 
				{item: "geghilarity:reprecipitated_platinum_dust", amount: 2},
				{item: "geghilarity:calcium_dust", amount: 1}
			],
			item_outputs: [
				{item: "modern_industrialization:platinum_dust", amount: 1},
				{item: "geghilarity:calcium_chloride_dust", amount: 3}
			]	
		})	
		
	// 10 
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 30,
			duration: 432,
			item_inputs: [ 
				{item: "geghilarity:calcium_chloride_dust", amount: 3}
			],
			item_outputs: [
				{item : "geghilarity:calcium_dust", amount: 1}
			],	
			fluid_outputs: [
				{fluid: "modern_industrialization:chlorine", amount: 2000}
			]
		})	

	// 11 TEMP LCR  
	event.recipes.modern_industrialization.lcr(
		{
			eu: 30,
			duration: 250,
			item_inputs: [ 
				{item: "geghilarity:palladium_metallic_powder_dust", amount: 2}
			],
			fluid_inputs: [
				{fluid: "geghilarity:palladium_enriched_ammonia", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:small_palladium_salt_dust", amount: 10},
				{item: "geghilarity:tiny_reprecipitated_palladium_dust", amount: 12}
			]	
		})
  
	// 12 
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 250,
			fluid_inputs: [
				{fluid: "geghilarity:palladium_enriched_ammonia", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:palladium_salt_dust", amount: 2}
			]	
		})	
		
	// 12a
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 250,
		item_inputs: [ 
			{item: "geghilarity:palladium_metallic_powder_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "geghilarity:ammonia", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:palladium_enriched_ammonia", amount: 1000}
		]	
	})	
		
	// 13 TEMP sifter > mixer
	event.recipes.modern_industrialization.mixer(
		{
			eu: 24,
			duration: 300,
			item_inputs: [ 
				{item: "geghilarity:palladium_salt_dust", amount: 2}
			],
			item_outputs :
			[
				{item: "geghilarity:palladium_metallic_powder_dust", amount: 2, probability: 0.95}
			]
		})	
		
	// 14a 
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 8,
			duration: 80,
			item_inputs: [ 
				{item: "minecraft:coal", amount: 1},
				{item: "geggy:selector_1", amount: 1, probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:oxygen", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:tiny_ashes", amount: 1}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:carbon_monoxide", amount: 1000}
			]	
		})	
	
	// 14b 
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 8,
			duration: 80,
			item_inputs: [ 
				{item: "modern_industrialization:carbon_dust", amount: 1},
				{item: "geggy:selector_1", amount: 1, probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:oxygen", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:carbon_monoxide", amount: 1000}
			]	
		})
		
	// 15
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 8,
			duration: 40,
			item_inputs: [ 
				{item: "modern_industrialization:sodium_dust", amount: 1}
			],
			fluid_inputs: [
				{fluid: "minecraft:water", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:hydrogen", amount: 1000}
			]	
		})	
		
	// 15 opt
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 60,
			item_inputs: [ 
				{item: "geghilarity:sodium_bisulfate_dust", amount: 7}
			],
			fluid_inputs: [
				{fluid: "minecraft:water", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
			]	
		})	
		
	// 16
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 60,
			item_inputs: [ 
				{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
			],
			fluid_inputs: [
				{fluid: "geghilarity:carbon_monoxide", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:sodium_formate", amount: 1000}
			]	
		})
	//redone as V5
	/* 
	// 17
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 280,
			item_inputs: [ 
				{item: "modern_industrialization:sulfur_dust", amount: 1}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:oxygen", amount: 3000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:sulfur_trioxide", amount: 1000}
			]	
		})	
	*/	

	// 18
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 8,
			duration: 320,
			fluid_inputs: [
				{fluid: "minecraft:water", amount: 1000},
				{fluid: "geghilarity:sulfur_trioxide", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
			]	
		})	
	
	// 19
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 60,
			fluid_inputs: [
				{fluid: "modern_industrialization:sulfuric_acid", amount: 1000},
				{fluid: "geghilarity:sodium_formate", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:sodium_bisulfate_dust", amount: 7}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:formic_acid", amount: 1000}
			]	
		})	
		
	// 20
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 1920,
			duration: 300,
			item_inputs: [
				{item: "geghilarity:reprecipitated_palladium_dust", amount: 2}
			],
			fluid_inputs: [
				{fluid: "geghilarity:formic_acid", amount: 2000}
			],
			item_outputs: [
				{item: "geghilarity:palladium_dust", amount: 2}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:ammonia", amount: 3000},
				{fluid: "geghilarity:acetic_acid", amount: 1000}
			]	
		})	

	// 21
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 60,
			duration: 512,
			fluid_inputs: [ 
				{fluid: "geghilarity:acetic_acid", amount: 2000}
			],
			fluid_outputs: [
				{fluid: "geghilarity:ethane", amount: 1000},
				{fluid: "geghilarity:carbon_dioxide", amount: 2000},
				{fluid: "modern_industrialization:hydrogen", amount: 2000}
			]
		})	

	// 22
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 30,
			duration: 168,
			fluid_inputs: [ 
				{fluid: "geghilarity:carbon_dioxide", amount: 1000}
			],
			item_outputs: [
				{item: "modern_industrialization:carbon_dust", amount: 1}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:oxygen", amount: 2000}
			]
		})		
		
	// 23
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 30,
			duration: 128,
			fluid_inputs: [ 
				{fluid: "geghilarity:ethane", amount: 1000}
			],
			item_outputs: [
				{item: "modern_industrialization:carbon_dust", amount: 2}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:hydrogen", amount: 6000}
			]
		})	

	// 24
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 60,
			duration: 448,
			item_inputs: [
				{item: "geghilarity:sodium_bisulfate_dust", amount: 14}
			],
			fluid_outputs: [
				{fluid: "geghilarity:sodium_persulfate", amount: 1000},
				{fluid: "modern_industrialization:hydrogen", amount: 2000}
			]
		})		

	// 25
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 60,
			duration: 864,
			fluid_inputs: [
				{fluid: "geghilarity:sodium_persulfate", amount: 1000}
			],
			item_outputs: [
				{item: "modern_industrialization:sodium_dust", amount: 2},
				{item: "modern_industrialization:sulfur_dust", amount: 2}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:oxygen", amount: 8000}
			]
		})
		
	// 26 
	event.recipes.modern_industrialization.mixer(
		{
			eu: 96,
			duration: 42,
			fluid_inputs: [
				{fluid: "modern_industrialization:oxygen", amount: 7000}
			],
			item_inputs: [ 
				{item: "geghilarity:potassium_dust", amount: 2},
				{item: "modern_industrialization:sulfur_dust", amount: 2},
				{item: "geggy:selector_2", amount: 1, probability: 0.0}
			],
			item_outputs :
			[
				{item: "geghilarity:potassium_disulfate_dust", amount: 11}
			]
		})	

	// 27 IMAGE
	event.recipes.modern_industrialization.blaster_furnace({
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:potassium_disulfate_dust", amount: 11},
			{item: "geghilarity:platinum_residue_dust", amount: 5}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:leach_residue_dust", amount: 4},
			{item: "geghilarity:potassium_sulfate", amount: 7}
		],
		fluid_outputs: [
			{fluid: "geghilarity:rhodium_sulfate", amount: 1000}
		]
	})	

	// 28
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 120,
			duration: 180,
			item_inputs: [ 
				{item: "geghilarity:potassium_sulfate", amount: 7}
			],
			item_outputs: [
				{item: "geghilarity:potassium_dust", amount: 2},
				{item: "modern_industrialization:sulfur_dust", amount: 1}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:oxygen", amount: 4000}
			]
		})

	// 29
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 400,
			fluid_inputs: [
				{fluid: "minecraft:water", amount: 1000},
				{fluid: "geghilarity:rhodium_sulfate", amount: 3000}
			],
			item_outputs: [
				{item: "geghilarity:tiny_leach_residue_dust", amount: 4}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:rhodium_sulfate_solution", amount: 3000}
			]	
		})	

	// 30 
	event.recipes.modern_industrialization.dehy({
		eu: 30,
		duration: 300,
		item_inputs: [ 
			{item: "kubejs:zinc_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:rhodium_sulfate_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:zinc_sulfate_dust", amount: 6},
			{item: "geghilarity:crude_rhodium_metal_dust", amount: 2}
		]
	})

	// to do
	// 31
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 60,
			duration: 624,
			item_inputs: [ 
				{item: "geghilarity:zinc_sulfate_dust", amount: 6}
			],
			item_outputs: [
				{item: "kubejs:zinc_dust", amount: 1},
				{item: "modern_industrialization:sulfur_dust", amount: 1}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:oxygen", amount: 4000}
			]
		})

	// 32
	event.recipes.modern_industrialization.blast_furnace(
		{
			eu: 120,
			duration: 300,
			item_inputs: [ 
				{item: "geghilarity:crude_rhodium_metal_dust", amount: 2},
				{item: "modern_industrialization:salt_dust", amount: 2}
			],
			item_outputs: [
				{item: "geghilarity:rhodium_salt_dust", amount: 3}
			]
		})	

	// 33
	event.recipes.modern_industrialization.mixer(
		{
			eu: 30,
			duration: 30,
			fluid_inputs: [
				{fluid: "modern_industrialization:chlorine", amount: 1000}
			],
			item_inputs: [ 
				{item: "geghilarity:rhodium_salt_dust", amount: 3}
			],
			fluid_outputs: [
				{fluid: "geghilarity:rhodium_salt_solution", amount: 1000}
			]
		})

	// 34
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 320,
			fluid_inputs: [
				{fluid: "geghilarity:ammonia", amount: 1000},
				{fluid: "modern_industrialization:oxygen", amount: 4000}
			],
			fluid_outputs: [	
				{fluid: "minecraft:water", amount: 1000},
				{fluid: "geghilarity:nitric_acid", amount: 1000}
			]	
		})	

	// 35
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 60,
			duration: 8,
			item_inputs: [ 
				{item: "modern_industrialization:sodium_dust", amount: 2}
			],
			fluid_inputs: [
				{fluid: "geghilarity:nitric_acid", amount: 2000},
				{fluid: "modern_industrialization:oxygen", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:sodium_nitrate_dust", amount: 10}
			],
			fluid_outputs: [	
				{fluid: "minecraft:water", amount: 1000}
			]	
		})	

	// 36 TEMP LCR > chem.rea 
	event.recipes.modern_industrialization.lcr(
		{
			eu: 30,
			duration: 300,
			item_inputs: [ 
				{item: "geghilarity:sodium_nitrate_dust", amount: 5}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:oxygen", amount: 2000},
				{fluid: "geghilarity:nitrogen_dioxide", amount: 2000},
				{fluid: "geghilarity:rhodium_salt_solution", amount: 1000}
			],
			item_outputs: [
				{item: "modern_industrialization:salt_dust", amount: 6},
				{item: "geghilarity:rhodium_nitrate_dust", amount: 13}
			]
		})	

	// 37 TEMP sifter > mixer
	event.recipes.modern_industrialization.mixer(
		{
			eu: 30,
			duration: 600,
			item_inputs: [ 
				{item: "geghilarity:rhodium_nitrate_dust", amount: 13}
			],
			item_outputs :
			[
				{item: "geghilarity:rhodium_filter_cake_dust", amount: 2, probability: 0.95}
			]
		})	
		
	// 38
	event.recipes.modern_industrialization.mixer(
		{
			eu: 30,
			duration: 300,
			item_inputs: [ 
				{item: "geghilarity:rhodium_filter_cake_dust", amount: 2}
			],
			fluid_inputs: [
				{fluid: "minecraft:water", amount: 2000}
			],
			fluid_outputs : [
				{fluid: "geghilarity:rhodium_filter_cake_solution", amount: 1000}
			]
		})	

	// 39 
	event.recipes.modern_industrialization.dehy({
		eu: 30,
		duration: 500,
		fluid_inputs: [
			{fluid: "geghilarity:rhodium_filter_cake_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:reprecipitated_rhodium_dust", amount: 1}
		],
		fluid_outputs : [
			{fluid: "geghilarity:ammonia", amount: 2000}
		]
	})	
	
	// 39b
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 300,
		item_inputs: [ 
			{item: "geghilarity:reprecipitated_rhodium_dust", amount: 2}
		],
		item_outputs: [
			{item: "geghilarity:rhodium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 1000}
		]	
	})
		
	// 40
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 480,
			duration: 80,
			item_inputs: [ 
				{item: "geghilarity:sodium_hydroxide_dust", amount: 6}
			],
			fluid_inputs: [
				{fluid: "geghilarity:carbon_dioxide", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:soda_ash_dust", amount: 6}
			],
			fluid_outputs: [	
				{fluid: "minecraft:water", amount: 1000}
			]	
		})	
		
	// 40b magick IMAGE
	event.recipes.modern_industrialization.blaster_furnace({
		eu: 120,
		duration: 120,
		item_inputs: [ 
			{item: "magick:calcite_dust", amount: 5},
			{item: "modern_industrialization:salt_dust", amount: 4}
		],
		item_outputs: [
			{item: "geghilarity:soda_ash_dust", amount: 6},
			{item: "geghilarity:calcium_chloride_dust", amount: 3}
		]
	})	
		
	// 41 IMAGE
	event.recipes.modern_industrialization.blaster_furnace({
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:leach_residue_dust", amount: 40},
			{item: "geghilarity:soda_ash_dust", amount: 18}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 3000}
		],
		item_outputs: [
			{item: "geghilarity:rarest_metal_residue_dust", amount: 6},
			{item: "geghilarity:sodium_ruthenate_dust", amount: 21}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:carbon_monoxide", amount: 3000}
		]
	})	

	// 42
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:sodium_ruthenate_dust", amount: 7}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:chlorine", amount: 2000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:ruthenium_tetroxide_solution", amount: 1000}
		]	
	})	
		
	// 43 crack.unit > chem.rea
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 480,
			duration: 150,
			fluid_inputs: [
				{fluid: "modern_industrialization:steam", amount: 1000},
				{fluid: "geghilarity:ruthenium_tetroxide_solution", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:hot_ruthenium_tetroxide_solution", amount: 2000}
			]
		})		
	
	// 44
	event.recipes.modern_industrialization.distillation_tower({
		eu: 480,
		duration: 1500,
		fluid_inputs: [
			{fluid: "geghilarity:hot_ruthenium_tetroxide_solution", amount: 2000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:ruthenium_tetroxide", amount: 1000},
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		]
	})	
		
	// 45 TEMP fluid.solidifier + ball mold > vacuum freezer
	event.recipes.modern_industrialization.vacuum_freezer({
		eu: 8,
		duration: 16,
		item_inputs: [ 
			{item: "geggy:mold_ball", probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:ruthenium_tetroxide", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:ruthenium_tetroxide_dust", amount: 5}
		]
	})		
		
	// 46 
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 300,
			item_inputs: [ 
				{item: "geghilarity:ruthenium_tetroxide_dust", amount: 5}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 8000}
			],
			item_outputs: [
				{item: "geghilarity:ruthenium_dust", amount: 1}
			],
			fluid_outputs: [	
				{fluid: "minecraft:water", amount: 4000},
				{fluid: "modern_industrialization:chlorine", amount: 8000}
			]
		})	

	// 47
	event.recipes.modern_industrialization.blast_furnace(
		{
			eu: 120,
			duration: 100,
			item_inputs: [ 
				{item: "geghilarity:rarest_metal_residue_dust", amount: 2}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:iridium_metal_residue_dust", amount: 2}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:acidic_osmium_tetroxide_solution", amount: 2000}
			]
		})	

	// 48
	event.recipes.modern_industrialization.distillation_tower(
		{
			eu: 7680,
			duration: 150,
			fluid_inputs: [
				{fluid: "geghilarity:acidic_osmium_tetroxide_solution", amount: 2000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:osmium_tetroxide_solution", amount: 1000},
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
			]
		})	
		
	// 49 
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 300,
			fluid_inputs: [
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 8000},
				{fluid: "geghilarity:osmium_tetroxide_solution", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:osmium_dust", amount: 1}
			],
			fluid_outputs: [	
				{fluid: "minecraft:water", amount: 5000},
				{fluid: "modern_industrialization:chlorine", amount: 8000}
			]
		})	

	// 50 IMAGE
	event.recipes.modern_industrialization.blaster_furnace(
		{
			eu: 120,
			duration: 200,
			item_inputs: [ 
				{item: "geghilarity:iridium_metal_residue_dust", amount: 1}
			],
			item_outputs: [
				{item: "geghilarity:iridium_dioxide_dust", amount: 6},
				{item: "geghilarity:sludge_dust_residue_dust", amount: 5}
			]
		})	
	
	// 51
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 300,
			item_inputs: [ 
				{item: "geghilarity:iridium_dioxide_dust", amount: 6}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 2000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:acidic_iridium_solution", amount: 1000}
			]
		})	
		
	// 52 
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 300,
			fluid_inputs: [
				{fluid: "geghilarity:ammonium_chloride", amount: 3000},
				{fluid: "geghilarity:acidic_iridium_solution", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:iridium_chloride_dust", amount: 8}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:ammonia", amount: 3000},
				{fluid: "minecraft:water", amount: 3000}
			]
		})	

	// 53 TEMP LCR > chem.rea 
	event.recipes.modern_industrialization.lcr(
		{
			eu: 1920,
			duration: 300,
			item_inputs: [ 
				{item: "geghilarity:iridium_chloride_dust", amount: 4}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:hydrogen", amount: 3000}
			],
			item_outputs: [
				{item: "geghilarity:metallic_sludge_dust_residue_dust", amount: 2},
				{item: "modern_industrialization:iridium_dust", amount: 1}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 3000}
			]
		})	
		
	// 54 
	event.recipes.modern_industrialization.centrifuge(
		{
			eu: 30,
			duration: 180,
			item_inputs: [ 
				{item: "geghilarity:metallic_sludge_dust_residue_dust", amount: 2}
			],
			item_outputs: [
				{item: "modern_industrialization:copper_dust", amount: 1},
				{item: "modern_industrialization:nickel_dust", amount: 1}
			]
		})	
		
	// 55 thermal centrifuge > centrifuge 
	event.recipes.modern_industrialization.centrifuge({
		eu: 10,
		duration: 226,
		item_inputs: [ 
			{item: "geghilarity:sludge_dust_residue_dust", amount: 5}
		],
		item_outputs: [
			{item: "geghilarity:silicon_dioxide_dust", amount: 6},
			{item: "modern_industrialization:gold_dust", amount: 3}
		]
	})	
	
	// REMOVE Titanium/alu
	event.remove({id: `modern_industrialization:materials/electrolyzer/bauxite`})
	event.remove({id: `modern_industrialization:materials/blast_furnace/bauxite_to_aluminum_nugget`})
		
	// extra1
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 60,
			duration: 1792,
			item_inputs: [ 
				{item: "minecraft:sugar", amount: 32}
			],
			item_outputs: [
				{item: "modern_industrialization:carbon_dust", amount: 2}
			],
			fluid_outputs: [
				{fluid: "minecraft:water", amount: 5000},
				{fluid: "modern_industrialization:oxygen", amount: 25000}
			]
		})

	/* gone indrev
	// extra2
	event.recipes.modern_industrialization.macerator(
		{
			eu: 2,
			duration: 100,
			item_inputs: [ 
				{item: "indrev:sulfur_crystal", amount: 32}
			],
			item_outputs: [
				{item: "modern_industrialization:sulfur_dust", amount: 1},
				{item: "modern_industrialization:sulfur_dust", amount: 1, probability: 0.50},
				{item: "modern_industrialization:sulfur_dust", amount: 1, probability: 0.50}
			]
		})	
	*/	
		
	// ALU
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 60,
			duration: 2496,
			item_inputs: [ 
				{item: "modern_industrialization:bauxite_dust", amount: 39}
			],
			item_outputs: [
				{item: "geghilarity:rutile_dust", amount: 6},
				{item: "modern_industrialization:aluminum_dust", amount: 16}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:hydrogen", amount: 10000},
				{fluid: "modern_industrialization:oxygen", amount: 11000}
			]
		})
		
	// P1
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 480,
			duration: 500,
			item_inputs: [ 
				{item: "geghilarity:rutile_dust", amount: 3},
				{item: "modern_industrialization:carbon_dust", amount: 2}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:chlorine", amount: 4000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:carbon_monoxide", amount: 2000},
				{fluid: "geghilarity:titanium_tetrachloride", amount: 1000}
			]
		})	

	// P2 EBF NERF, was 480 IMAGE
	event.recipes.modern_industrialization.blaster_furnace(
		{
			eu: 480,
			duration: 800,
			item_inputs: [ 
				{item: "geghilarity:magnesium_dust", amount: 2}
			],
			fluid_inputs: [
				{fluid: "geghilarity:titanium_tetrachloride", amount: 1000}
			],
			item_outputs: [
				{item: "modern_industrialization:titanium_hot_ingot", amount: 1},
				{item: "geghilarity:magnesium_chloride_dust", amount: 6}
			]
		})	

	event.remove({id: 'modern_industrialization:materials/titanium/vacuum_freezer/hot_ingot'})
	event.remove({id: 'modern_industrialization:materials/blast_furnace/titanium_from_raw'})
	// P3 
	event.recipes.modern_industrialization.vacuum_freezer({
		eu: 120,
		duration: 144,
		item_inputs: [
			{item: "modern_industrialization:titanium_hot_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "modern_industrialization:titanium_ingot", amount: 1}
		]
	})	
		
	// P4
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 30,
			duration: 360,
			item_inputs: [ 
				{item: "geghilarity:magnesium_chloride_dust", amount: 3}
			],
			item_outputs: [
				{item: "geghilarity:magnesium_dust", amount: 1}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:chlorine", amount: 2000}
			]
		})	
		
	// PXa
	event.recipes.modern_industrialization.mixer({
		eu: 30,
		duration: 60,
		item_inputs: [ 
			{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
		],
		fluid_inputs: [
				{fluid: "minecraft:water", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sodium_hydroxide_solution", amount: 1000}
		]
	})	
	
	// PX1
	event.recipes.modern_industrialization.mixer({
		eu: 30,
		duration: 240,
		item_inputs: [ 
			{item: "modern_industrialization:bauxite_dust", amount: 39}
		],
		fluid_inputs: [
				{fluid: "geghilarity:sodium_hydroxide_solution", amount: 24000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sodium_hydroxide_bauxite", amount: 24000}
		]
	})
	
	// PX2t fluid heater > centrifuge
	event.recipes.modern_industrialization.centrifuge({
		eu: 30,
		duration: 30,
		fluid_inputs: [ 
			{fluid: "geghilarity:sodium_hydroxide_bauxite", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:impure_aluminium_hydroxide_solution", amount: 1000}
		]
	})
	
	// PX3
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 230,
		fluid_inputs: [
			{fluid: "geghilarity:impure_aluminium_hydroxide_solution", amount: 24000},
			{fluid: "minecraft:water", amount: 9000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:red_mud", amount: 8000},
			{fluid: "geghilarity:pure_aluminium_hydroxide_solution", amount: 16000}
		]
	})
	
	// PX4
	event.recipes.modern_industrialization.mixer({
		eu: 120,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:red_mud", amount: 1000},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 4500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:neutralised_red_mud", amount: 2000}
		]
	})
	
	// PX5
	event.recipes.modern_industrialization.centrifuge({
		eu: 120,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "geghilarity:neutralised_red_mud", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:red_slurry", amount: 1000},
			{fluid: "geghilarity:ferric_ree_chloride", amount: 1000},
			{fluid: "geghilarity:salt_water", amount: 6000}
		]
	})
	
	// PX6
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 160,
		fluid_inputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 2000},
			{fluid: "geghilarity:red_slurry", amount: 2000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:titanyl_sulfate", amount: 2000},
			{fluid: "minecraft:water", amount: 2000}
		]
	})
	
	// PX7
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 960,
		duration: 160,
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 4000},
			{fluid: "geghilarity:titanyl_sulfate", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:titanium_tetrachloride", amount: 1000},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 2100}
		]
	})
	
	// PXX1 
	event.recipes.modern_industrialization.dehy({
		eu: 120,
		duration: 240,
		item_inputs: [ 
			{item: "geggy:selector_1", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:pure_aluminium_hydroxide_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:aluminium_hydroxide", amount: 14}
		]
	})
	
	// PXX2 
	event.recipes.modern_industrialization.dehy({
		eu: 240,
		duration: 240,
		item_inputs: [ 
			{item: "geghilarity:aluminium_hydroxide", amount: 1, probability: 0.0},
			{item: "geggy:selector_2", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:pure_aluminium_hydroxide_solution", amount: 4000}
		],
		item_outputs: [
			{item: "geghilarity:aluminium_hydroxide", amount: 56}
		]
	})
	
	// PXX3
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 400,
		item_inputs: [ 
			{item: "geghilarity:sodium_hydroxide_dust", amount: 18},
			{item: "geghilarity:alumina", amount: 5}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hydrofluoric_acid", amount: 12000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sodium_hexafluoroaluminate", amount: 2000},
			{fluid: "minecraft:water", amount: 9000}
		]
	})
	
	// PXX4
	event.recipes.modern_industrialization.electrolyzer({
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:alumina", amount: 10}
		],
		fluid_inputs: [
			{fluid: "geghilarity:sodium_hexafluoroaluminate", amount: 1000}
		],
		item_outputs: [
			{item: "modern_industrialization:aluminum_dust", amount: 4},
			{item: "geghilarity:sodium_fluoride_dust", amount: 6},
			{item: "geghilarity:aluminium_trifluoride", amount: 4}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:oxygen", amount: 6000}
		]
	})
	
	// PXX5
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 160,
		item_inputs: [ 
			{item: "geghilarity:sodium_fluoride_dust", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:sodium_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:fluorine", amount: 1000}
		]
	})
	
	// PXX6
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 140,
		item_inputs: [ 
			{item: "geghilarity:aluminium_trifluoride", amount: 8}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 3000}
		],
		item_outputs: [
			{item: "geghilarity:alumina", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:hydrofluoric_acid", amount: 6000}
		]
	})
		
	// X1
	// DEPP Create
	event.recipes.modern_industrialization.electrolyzer({
		eu: 60,
		duration: 960,
		item_inputs: [ 
			{item: "create:powdered_obsidian", amount: 12}
		],
		item_outputs: [
			{item: "geghilarity:magnesium_dust", amount: 1},
			{item: "modern_industrialization:iron_dust", amount: 1},
			{item: "modern_industrialization:silicon_dust", amount: 2}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:oxygen", amount: 8000}
		]
	})
		
	// X2 TEMP replaced marble with prismarine > basalt
	// DEPP MAGICK
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 30,
			duration: 640,
			item_inputs: [ 
				{item: "minecraft:basalt", amount: 4}
			],
			item_outputs: [
				{item: "magick:calcite_dust", amount: 4},
				{item: "geghilarity:magnesium_dust", amount: 2}
			]
		})	
		
	// T1
	event.recipes.modern_industrialization.mixer({
		eu: 480,
		duration: 160,
		item_inputs: [ 
			{item: "geghilarity:tungstate_dust", amount: 7},
			{item: "geghilarity:sodium_hydroxide_dust", amount: 6}
		],
		item_outputs :
		[
			{item: "geghilarity:lithium_hydroxide_dust", amount: 6}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sodium_tungstate", amount: 1000}
		]
	})	

	// T2
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 60,
		item_inputs: [ 
			{item: "geghilarity:calcium_chloride_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 2000},
			{fluid: "geghilarity:sodium_tungstate", amount: 1000}
		],
		item_outputs : [
			{item: "geghilarity:calcium_tungstate_dust", amount: 6}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:salt_water", amount: 2000}
		]
	})	
		
	// T3 TEMPI LCR > chem.rea
	event.recipes.modern_industrialization.lcr({
		eu: 480,
		duration: 150,
		item_inputs: [ 
			{item: "geghilarity:calcium_tungstate_dust", amount: 6}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 2000}
		],
		item_outputs :
		[
			{item: "geghilarity:tungstic_acid_dust", amount: 7},
			{item: "geghilarity:calcium_hydroxide_dust", amount: 5}
		]
	})	
		
	// T4 
	event.recipes.modern_industrialization.dehy({
		eu: 120,
		duration: 150,
		item_inputs: [ 
			{item: "geghilarity:tungstic_acid_dust", amount: 7}
		],
		item_outputs: [
			{item: "geghilarity:tungsten_trioxide_dust", amount: 4}
		]
	})	

	// T5
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 1920,
			duration: 66,
			item_inputs: [ 
				{item: "geghilarity:tungsten_trioxide_dust", amount: 4}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:hydrogen", amount: 6000}
			],
			item_outputs :
			[
				{item: "modern_industrialization:tungsten_dust", amount: 1}
			],
			fluid_outputs: [	
				{fluid: "minecraft:water", amount: 3000}
			]
		})	

	// T6
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 120,
			duration: 60,
			item_inputs: [ 
				{item: "geghilarity:calcium_hydroxide_dust", amount: 5}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 2000}
			],
			item_outputs :
			[
				{item: "geghilarity:calcium_chloride_dust", amount: 3}
			],
			fluid_outputs: [	
				{fluid: "minecraft:water", amount: 2000}
			]
		})	
		
	// T7
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 30,
			duration: 720,
			fluid_inputs: [ 
				{fluid: "geghilarity:salt_water", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:chlorine", amount: 1000},
				{fluid: "modern_industrialization:hydrogen", amount: 1000}
			]
		})	
		
	// T8
	event.recipes.modern_industrialization.mixer(
		{
			eu: 8,
			duration: 40,
			fluid_inputs: [ 
				{fluid: "minecraft:water", amount: 1000}
			],
			item_inputs: [ 
				{item: "modern_industrialization:salt_dust", amount: 2}
			],
			fluid_outputs: [
				{fluid: "geghilarity:salt_water", amount: 1000}
			]
		})	
		
	// T9
	event.recipes.modern_industrialization.mixer(
		{
			eu: 8,
			duration: 238,
			item_inputs: [ 
				{item: "modern_industrialization:steel_dust", amount: 1},
				{item: "modern_industrialization:tungsten_dust", amount: 1}
			],
			item_outputs: [
				{item: "geghilarity:tungstensteel_dust", amount: 1}
			]
		})	
		
	// T10 	
	event.recipes.modern_industrialization.blast_furnace(
		{
			eu: 120,
			duration: 10980,
			item_inputs: [ 
				{item: "modern_industrialization:tungsten_dust", amount: 1}
			],
			item_outputs: [
				{item: "geghilarity:hot_tungsten_ingot", amount: 1}
			]
		})
		
	// T11	
	event.recipes.modern_industrialization.vacuum_freezer({
		eu: 120,
		duration: 550,
		item_inputs: [
			{item: "geghilarity:hot_tungsten_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "modern_industrialization:tungsten_ingot", amount: 1}
		]
	})	
		
	// TS2A	
	event.recipes.modern_industrialization.blaster_furnace2({
		eu: 120,
		duration: 7140,
		item_inputs: [ 
			{item: "geghilarity:tungstensteel_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:hot_tungstensteel_ingot", amount: 1}
		]
	})	
	
	// TS2B EBF NERF, was 480
	event.recipes.modern_industrialization.blaster_furnace2({
		eu: 128,
		duration: 3000,
		item_inputs: [ 
			{item: "modern_industrialization:steel_ingot", amount: 1},
			{item: "modern_industrialization:tungsten_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:hot_tungstensteel_ingot", amount: 1}
		]
	})
	
	// TS3
	event.recipes.modern_industrialization.vacuum_freezer({
		eu: 120,
		duration: 188,
		item_inputs: [
			{item: "geghilarity:hot_tungstensteel_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:tungstensteel_ingot", amount: 1}
		]
	})
	
	// TS4
	event.recipes.modern_industrialization.compressor({
		eu: 24,
		duration: 118,
		item_inputs: [ 
			{item: "geghilarity:tungstensteel_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:tungstensteel_plate", amount: 1}
		]
	})
		
	// X3
	event.recipes.modern_industrialization.centrifuge({
		eu: 30,
		duration: 60,
		item_inputs: [ 
			{item: "minecraft:bone_meal", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:calcium_dust", amount: 1}
		]
	})	
		
	// X4 TEMP calcite magick
	// DEPP MAGICK
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 60,
			duration: 400,
			item_inputs: [ 
				{item: "magick:calcite_dust", amount: 5}
			],
			item_outputs: [
				{item: "geghilarity:calcium_dust", amount: 1},
				{item: "modern_industrialization:carbon_dust", amount: 1}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:oxygen", amount: 3000}
			]
		})	

	// X5  60 > 30 lyeo?
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 30,
			duration: 688,
			item_inputs: [ 
				{item: "geggy:clay_dust", amount: 13}
			],
			item_outputs: [
				{item: "modern_industrialization:sodium_dust", amount: 2},
				{item: "geghilarity:lithium_dust", amount: 1},
				{item: "modern_industrialization:aluminum_dust", amount: 2},
				{item: "modern_industrialization:silicon_dust", amount: 2}
			],
			fluid_outputs: [
				{fluid: "minecraft:water", amount: 6000}
			]
		})	

	// XX1 TEMP ore washing > create
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "geghilarity:crushed_nickel"}
		],
		"results": [
			{"count": 1, "item": "geghilarity:purified_nickel_ore"},
			{"chance": 0.25, "count": 1, "item": "geghilarity:cobalt_dust"},
			{"count": 1, "item": "magick:stone_dust"}
		]	
	})
	
	// XX1b TEMP ore washing > create
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "minecraft:raw_copper"}
		],
		"results": [
			{"count": 6, "item": "modern_industrialization:copper_tiny_dust"},
			{"chance": 0.1, "count": 1, "item": "geghilarity:cobalt_dust"}
		]	
	})
	
	// XX1c TEMP ore washing > create
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "modern_industrialization:raw_tin"}
		],
		"results": [
			{"count": 6, "item": "modern_industrialization:tin_tiny_dust"},
			{"chance": 0.25, "count": 1, "item": "geghilarity:mica_dust"}
		]	
	})
		
	// XX2
	event.recipes.modern_industrialization.macerator({
		eu: 12,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:purified_nickel_ore", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:purified_nickel_dust", amount: 1},
			{item: "geghilarity:platinum_metallic_powder_dust", amount: 1, probability: 0.35}
		]
	})	
		
	// XX3
	event.recipes.modern_industrialization.macerator(
		{
			eu: 12,
			duration: 200,
			item_inputs: [ 
				{tag: "c:nickel_ores", amount: 1}
			],
			item_outputs: [
				{item: "geghilarity:crushed_nickel", amount: 2},
				{item: "geghilarity:crushed_nickel", amount: 1, probability: 0.35}
			]
		})	

	// X6
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 8,
			duration: 60,
			item_inputs: [ 
				{item: "modern_industrialization:sulfur_dust", amount: 5}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:hydrogen", amount: 2000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:hydrogen_sulfide", amount: 1000}
			]
		})	

	// X7
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 320,
			fluid_inputs: [
				{fluid: "modern_industrialization:oxygen", amount: 4000},
				{fluid: "geghilarity:hydrogen_sulfide", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
			]
		})	
		
	// E1 
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 480,
			item_inputs: [ 
				{item: "modern_industrialization:carbon_dust", amount: 2},
				{item: "geggy:selector_2", amount: 1, probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:hydrogen", amount: 4000},
				{fluid: "modern_industrialization:oxygen", amount: 2000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:acetic_acid", amount: 1000}
			]
		})	

	// E2 
	event.recipes.modern_industrialization.pyro({
		eu: 64,
		duration: 640,
		item_inputs: [ 
			{tag: "minecraft:logs", amount: 16},
			{item: "geggy:selector_1", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "minecraft:charcoal", amount: 20}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:wood_tar", amount: 1500}
		]
	})	

	// E3
	event.recipes.modern_industrialization.distillery({
		eu: 64,
		duration: 80,
		fluid_inputs: [
			{fluid: "geghilarity:wood_tar", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:benzene", amount: 350}
		]
	})	

	// E4 
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 120,
		item_inputs: [ 
				{item: "geggy:selector_1", amount: 1, probability: 0.0}
			],
		fluid_inputs: [
			{fluid: "modern_industrialization:chlorine", amount: 4000},
			{fluid: "modern_industrialization:benzene", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 2000},
			{fluid: "geghilarity:dichlorobenzene", amount: 1000}
		]
	})

	// E4b 
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 36,
		duration: 160,
		fluid_inputs: [
			{fluid: "geghilarity:cumene", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 2000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:phenol", amount: 1000},
			{fluid: "geghilarity:acetone", amount: 1000}
		]
	})	
		
	// E5 
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 36,
			duration: 120,
			item_inputs: [ 
				{item: "geghilarity:sodium_hydroxide_dust", amount: 6}
			],
			fluid_inputs: [
				{fluid: "geghilarity:dichlorobenzene", amount: 1000}
			],
			item_outputs: [
				{item: "modern_industrialization:salt_dust", amount: 4}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:phenol", amount: 1000},
				{fluid: "modern_industrialization:oxygen", amount: 1000}
			]
		})		
		
	// E6 
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 2000,
			duration: 400,
			fluid_inputs: [
				{fluid: "modern_industrialization:oxygen", amount: 1000},
				{fluid: "modern_industrialization:benzene", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:phenol", amount: 1000}
			]
		})	
		
	// E7
	// DEPP MAGICK
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 240,
			item_inputs: [ 
				{item: "magick:calcite_dust", amount: 5}
			],
			item_outputs: [
				{item: "geghilarity:quicklime_dust", amount: 2}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:carbon_dioxide", amount: 1000}
			]
		})	
		
	// E8
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 380,
			duration: 400,
			item_inputs: [ 
				{item: "geghilarity:quicklime_dust", amount: 2}
			],
			fluid_inputs: [
				{fluid: "geghilarity:acetic_acid", amount: 2000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:calcium_acetate_solution", amount: 1000}
			]
		})	
		
	// E9
	event.recipes.modern_industrialization.distillation_tower(
		{
			eu: 120,
			duration: 80,
			fluid_inputs: [
				{fluid: "geghilarity:calcium_acetate_solution", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:acetone", amount: 1000},
				{fluid: "geghilarity:carbon_dioxide", amount: 1000},
				{fluid: "geghilarity:quicklime_sludge", amount: 1000}
			]
		})	

	// E9bis TEMP chem.dehydra > centrifuge
	event.recipes.modern_industrialization.centrifuge(
		{
			eu: 30,
			duration: 100,
			fluid_inputs: [
				{fluid: "geghilarity:quicklime_sludge", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:quicklime_dust", amount: 2}
			],
			fluid_outputs: [	
				{fluid: "minecraft:water", amount: 1000}
			]
		})	
		
	// E9tris
	event.recipes.modern_industrialization.compressor(
		{
			eu: 2,
			duration: 200,
			item_inputs: [ 
				{item: "minecraft:sugar_cane", amount: 8}
			],
			item_outputs: [
				{item: "geghilarity:plant_ball", amount: 1}
			]
		})	
	// E9B gtnh	
	event.recipes.modern_industrialization.macerator({
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:plant_ball", amount: 2}
		],
		item_outputs: [
			{item: "geggy:plant_mass", amount: 2},
			{item: "geggy:plant_mass", amount: 1, probability: 0.5},
			{item: "geggy:plant_mass", amount: 1, probability: 0.25}
		]
	})	
		
	// E10 centrifuge
	event.recipes.modern_industrialization.centrifuge({
		eu: 4,
		duration: 300,
		item_inputs: [ 
			{item: "geggy:plant_mass", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:bio_chaff", amount: 1}
		]
	})	
	
	// E10B
	event.recipes.modern_industrialization.pyro({
		eu: 10,
		duration: 900,
		item_inputs: [ 
			{item: "geggy:bio_chaff", amount: 4}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 4000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:biomass", amount: 5000}
		]
	})
	
	// E11
	event.recipes.modern_industrialization.distillery({
		eu: 24,
		duration: 400,
		fluid_inputs: [
			{fluid: "geghilarity:biomass", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:ethanol", amount: 500}
		]
	})
	
	// E11B
	event.recipes.modern_industrialization.distillation_tower({
		eu: 400,
		duration: 40,
		fluid_inputs: [
			{fluid: "geghilarity:biomass", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 300},
			{fluid: "modern_industrialization:ethanol", amount: 600}
		]
	})	
	
	// LYEO, to check later
	// E12
	//Biodiesel Rework
	//First, remove normal biodiesel
	event.remove({id: 'modern_industrialization:oil/chemical_reactor/plant_oil_to_raw_biodiesel'})
	event.remove({id: 'modern_industrialization:oil/chemical_reactor/raw_biodiesel_to_biodiesel'})
	
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: 'modern_industrialization:sodium_hydroxide', amount: 100},
			{fluid: 'modern_industrialization:ethanol', amount: 1000},
			{fluid: 'modern_industrialization:creosote', amount: 6000}
		],
		fluid_outputs: [	
			{fluid: 'modern_industrialization:raw_biodiesel', amount: 6000}
		]
	})	
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: 'modern_industrialization:sodium_hydroxide', amount: 100},
			{fluid: 'modern_industrialization:ethanol', amount: 1000},
			{fluid: 'modern_industrialization:plant_oil', amount: 6000}
		],
		fluid_outputs: [	
			{fluid: 'modern_industrialization:raw_biodiesel', amount: 6000},
			{fluid: 'geghilarity:glycerol', amount: 166}
		]
	})
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: 'modern_industrialization:raw_biodiesel', amount: 1000},
			{fluid: 'modern_industrialization:steam', amount: 1000}
		],
		fluid_outputs: [	
			{fluid: 'modern_industrialization:biodiesel', amount: 1000}
		]
	})
		
	/*	
	// E12
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 600,
		item_inputs: [ 
			{item: "geghilarity:sodium_hydroxide_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:ethanol", amount: 1000},
			{fluid: "modern_industrialization:creosote", amount: 6000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:biodiesel", amount: 6000},
			{fluid: "geghilarity:glycerol", amount: 1000}
		]
	})	
	*/
		
	// E13
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 480,
			fluid_inputs: [
				{fluid: "geghilarity:glycerol", amount: 1000},
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "minecraft:water", amount: 2000},
				{fluid: "geghilarity:epichlorohydrin", amount: 1000}
			]
		})	

	// E14
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 160,
			fluid_inputs: [
				{fluid: "geghilarity:phenol", amount: 2000},
				{fluid: "geghilarity:acetone", amount: 1000},
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:bisphenol_a", amount: 1000},
				{fluid: "geghilarity:diluted_hydrochloric_acid", amount: 1000}
			]
		})	

	// E15
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "geghilarity:bisphenol_a", amount: 1000},
			{fluid: "geghilarity:epichlorohydrin", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:epoxy_resin", amount: 1000},
			{fluid: "geghilarity:salt_water", amount: 1000}
		]
	})
	
	// E15b
	event.recipes.modern_industrialization.lcr({
		eu: 30,
		duration: 480,
		item_inputs: [ 
			{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:acetone", amount: 1000},
			{fluid: "geghilarity:phenol", amount: 2000},
			{fluid: "geghilarity:epichlorohydrin", amount: 1000},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:epoxy_resin", amount: 1000},
			{fluid: "geghilarity:salt_water", amount: 1000},
			{fluid: "geghilarity:diluted_hydrochloric_acid", amount: 1000}
		]
	})

	// TO FIX 1.19
	//E16 tinkers cursed epoxy into sheet
	event.recipes.modern_industrialization.dehy({
		eu: 8,
		duration: 40,
		item_inputs: [
			{item: "geggy:mold_plate", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:epoxy_resin", amount: 144}
			],
		item_outputs: [
			{item: "geghilarity:epoxy_resin_sheet", amount: 1}
		]
	})	
		
	// E17
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 10,
			duration: 500,
			item_inputs: [ 
				{item: "geghilarity:epoxy_resin_sheet", amount: 1},
				{item: "geghilarity:copper_foil", amount: 1}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:sulfuric_acid", amount: 125}
			],
			item_outputs: [	
				{item: "geghilarity:epoxy_circuit_board", amount: 1}
			]
		})	
		
	// E20
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 200,
			item_inputs: [ 
				{item: "geghilarity:electrum_foil", amount: 8},
				{item: "geghilarity:epoxy_circuit_board", amount: 1}
			],
			fluid_inputs: [
				{fluid: "geghilarity:sodium_persulfate", amount: 1000}
			],
			item_outputs: [	
				{item: "geghilarity:advanced_circuit_board", amount: 1}
			]
		})
		
	// E21
	event.recipes.modern_industrialization.distillation_tower({
		eu: 64,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:diluted_hydrochloric_acid", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 1000},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
		]
	})	
		
	// FOIL1
	event.recipes.modern_industrialization.cutting_machine({
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "c:copper_ingots", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:copper_foil", amount: 4}
		]
	})

	// FOIL2
	event.recipes.modern_industrialization.cutting_machine({
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "c:electrum_ingots", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:electrum_foil", amount: 4}
		]
	})	

	// X8 
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 60,
			duration: 2880,
			item_inputs: [ 
				{item: "minecraft:redstone", amount: 10}
			],
			item_outputs: [
				{item: "modern_industrialization:silicon_dust", amount: 1},
				{item: "geghilarity:pyrite_dust", amount: 5},
				{item: "modern_industrialization:ruby_dust", amount: 1}
			],
			fluid_outputs: [
				{fluid: "geghilarity:mercury", amount: 3000}
			]
		})

	// X9 
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 60,
			duration: 576,
			item_inputs: [ 
				{item: "modern_industrialization:ruby_dust", amount: 6}
			],
			item_outputs: [
				{item: "modern_industrialization:chromium_dust", amount: 1},
				{item: "modern_industrialization:aluminum_dust", amount: 2}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:oxygen", amount: 3000}
			]
		})	

	// X10 
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 456,
		item_inputs: [ 
			{item: "geghilarity:pyrite_dust", amount: 3}
		],
		item_outputs: [
			{item: "modern_industrialization:iron_dust", amount: 1},
			{item: "modern_industrialization:sulfur_dust", amount: 2}
		]
	})	
		
	// X11 
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 30,
			duration: 60,
			item_inputs: [ 
				{item: "modern_industrialization:salt_dust", amount: 2}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:sodium_bisulfate_dust", amount: 7}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
			]
		})	
		
	// AM1
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 120,
			duration: 120,
			item_inputs: [ 
				{item: "geghilarity:nickel_oxide_alumina_catalyst", probability: 0.0},
				{item: "geghilarity:ccf", probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:steam", amount: 960},
				{fluid: "modern_industrialization:methane", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:rich_nitrogen_mixture", amount: 3000}
			]
		})	
		
	// AM1b
	event.recipes.modern_industrialization.chemical_reactor(
		{
			eu: 120,
			duration: 120,
			item_inputs: [ 
				{item: "geghilarity:nickel_oxide_alumina_catalyst", probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:nitrogen", amount: 1000},
				{fluid: "modern_industrialization:steam", amount: 960},
				{fluid: "modern_industrialization:methane", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:rich_nitrogen_mixture", amount: 5000}
			]
		})	
		
	// AM2
	event.recipes.modern_industrialization.mixer({
			eu: 120,
			duration: 60,
			item_inputs: [ 
				{item: "geghilarity:iron_chromium_oxide_catalyst", probability: 0.0},
				{item: "geghilarity:long_titanium_rod", probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "minecraft:water", amount: 1000},
				{fluid: "geghilarity:rich_nitrogen_mixture", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:oxidized_rich_nitrogen_mixture", amount: 2000}
			]
	})	
	
	// AM3
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 120,
			duration: 120,
			fluid_inputs: [
				{fluid: "geghilarity:ethanolamine", amount: 1000},
				{fluid: "geghilarity:oxidized_rich_nitrogen_mixture", amount: 1000},
				{fluid: "minecraft:water", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:purified_rich_nitrogen_mixture", amount: 1000},
				{fluid: "geghilarity:carbonated_ethanolamine", amount: 2000}
			]
	})	
	
	// AM4 adapted
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 120,
			duration: 240,
			item_inputs: [ 
				{item: "modern_industrialization:iron_dust", probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "geghilarity:carbon_dioxide", amount: 500, probability: 0.0},
				{fluid: "geghilarity:purified_rich_nitrogen_mixture", amount: 2000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:ammonia_rich_mixture", amount: 2000}
			]
	})
	
	// AM5
	event.recipes.modern_industrialization.centrifuge({
		eu: 120,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:ammonia_rich_mixture", amount: 2000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:ammonia", amount: 1000},
			{fluid: "geghilarity:purified_rich_nitrogen_mixture", amount: 1000}
		]
	})
		
	// AMC1
	event.recipes.modern_industrialization.mixer({
			eu: 30,
			duration: 100,
			item_inputs: [ 
				{item: "geghilarity:alumina", amount: 5},
				{item: "geghilarity:garnierite_dust", amount: 2}
			],
			item_outputs: [
				{item: "geghilarity:nickel_oxide_alumina_catalyst", amount: 7}
			]
	})	
	
	// AMC2
	event.recipes.modern_industrialization.mixer({
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:chromium_trioxide_dust", amount: 4},
			{item: "modern_industrialization:iron_dust", amount: 1}
		],
	item_outputs: [
			{item: "geghilarity:iron_chromium_oxide_catalyst", amount: 1}
		]	
	})	
	
	// AMR1
	event.recipes.modern_industrialization.distillation_tower({
			eu: 120,
			duration: 100,
			fluid_inputs: [
				{fluid: "geghilarity:carbonated_ethanolamine", amount: 2000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:ethanolamine", amount: 1000},
				{fluid: "geghilarity:carbon_dioxide", amount: 500},
				{fluid: "minecraft:water", amount: 500}
			]
	})
	
	// AMR2
	event.recipes.modern_industrialization.distillery({
			eu: 64,
			duration: 80,
			fluid_inputs: [
				{fluid: "geghilarity:carbonated_ethanolamine", amount: 2000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:ethanolamine", amount: 1000}
			]
		})	
		
	// AME2
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 60,
			duration: 100,
			item_inputs: [ 
				{item: "modern_industrialization:nickel_dust", amount: 1}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:oxygen", amount: 1000}
			],
			item_outputs: [
				{item: "geghilarity:garnierite_dust", amount: 2}
			]
		})	
		
	// AME3
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 30,
			duration: 80,
			item_inputs: [ 
				{item: "modern_industrialization:aluminum_dust", amount: 1}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:oxygen", amount: 3000}
			],
			item_outputs: [
				{item: "geghilarity:aluminium_hydride", amount: 4}
			]
		})	
		
	// AME4
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 30,
			duration: 100,
			item_inputs: [ 
				{item: "geghilarity:aluminium_hydride", amount: 4}
			],
			fluid_inputs: [
				{fluid: "minecraft:water", amount: 3000}
			],
			item_outputs: [
				{item: "geghilarity:aluminium_hydroxide", amount: 7}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:hydrogen", amount: 6000}
			]
		})	
		
	// AME5
	event.recipes.modern_industrialization.blast_furnace({
			eu: 120,
			duration: 200,
			item_inputs: [ 
				{item: "geghilarity:aluminium_hydroxide", amount: 14}
			],
			item_outputs: [
				{item: "geghilarity:alumina", amount: 5},
			],
			fluid_outputs: [
				{fluid: "minecraft:water", amount: 3000}
			]
	})	
	
	// A+1
	event.recipes.modern_industrialization.assembler({
		eu: 120,
		duration: 120,
		item_inputs: [
			{item: "geggy:biocircuit", amount: 1, probability: 0.0},
			{item: "minecraft:kelp", amount: 4},
			{item: "minecraft:glow_berries", amount: 2},
			{item: "minecraft:vine", amount: 1}
			
		],
		item_outputs: [
			{item: "geggy:gb_biomass", amount: 4}
		]
	})
	// A+2
	event.recipes.modern_industrialization.assembler({
		eu: 120,
		duration: 30,
		item_inputs: [
			{item: "geggy:biocircuit", amount: 1, probability: 0.0},
			{item: "geggy:gb_biomass", amount: 2}	
		],
		item_outputs: [
			{item: "geggy:gb_cellulose_fiber", amount: 1}
		]
	})
	// A+3
	event.recipes.modern_industrialization.centrifuge({
		eu: 120,
		duration: 2400,
		item_inputs: [
			{item: "geggy:gb_cellulose_fiber", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:ammonia", amount: 50}
		]
	})
	event.shaped('geggy:biocircuit', [
		'AB ',
		'   ',
		'   '
	], {
		A: 'modern_industrialization:analog_circuit',
		B: 'modern_industrialization:electronic_circuit'
	})
	// AX1
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1000},
			{fluid: "modern_industrialization:ethylene", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:ethylene_oxide", amount: 1000}
		]	
	})
	// AX2
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 400,
		fluid_inputs: [
			{fluid: "geghilarity:ethylene_oxide", amount: 1000},
			{fluid: "geghilarity:ammonia", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:ethanolamine", amount: 1000}
		]	
	})
	
	event.recipes.modern_industrialization.packer({eu: 16, duration: 48,item_inputs: [{item: "modern_industrialization:titanium_rod", amount: 2}],
		item_outputs: [{item: "geghilarity:long_titanium_rod", amount: 1}]})
	
	// bullshit
	/*
	event.recipes.modern_industrialization.the_bull({eu: 16, duration: 48,item_inputs: [{item: "modern_industrialization:titanium_rod", amount: 2}],
		item_outputs: [{item: "geghilarity:long_titanium_rod", amount: 1}]})

	event.recipes.modern_industrialization.the_bull({eu: 1, duration: 1200,item_inputs: [{item: "minecraft:lava_bucket", amount: 1}],
		item_outputs: [{item: "geghilarity:precious_ore", amount: 2}]})
			
	event.recipes.modern_industrialization.ironq({eu: 1, duration: 1200,item_inputs: [{item: "minecraft:stick", amount: 1}],
			item_outputs: [{item: "minecraft:raw_iron", amount: 2}]})
	*/	

	// ethylene nerf
	event.remove({id: "modern_industrialization:oil/chemical_reactor/ethanol_to_ethylene"})

	// LCR1
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 3500,
		item_inputs: [ 
			{item: "modern_industrialization:carbon_dust", amount: 1},
			{item: "geggy:selector_3", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 4000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:methane", amount: 1000}
		]	
	})

	// LCR2
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 30,
			duration: 80,
			item_inputs: [ 
			{item: "geggy:selector_2", amount: 1, probability: 0.0}
		],
			fluid_inputs: [
				{fluid: "modern_industrialization:methane", amount: 1000},
				{fluid: "modern_industrialization:chlorine", amount: 6000}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 3000},
				{fluid: "geghilarity:chloroform", amount: 1000}
			]	
		})	
		
	event.remove({mod: 'magick', output: 'magick:blackstone_dust'})	
	// FLUO1 MAGICK
	event.recipes.modern_industrialization.macerator({
		eu: 8,
		duration: 150,
		item_inputs: [ 
			{tag: "magick:blackstone_tag_9", amount: 1}
		],
		item_outputs: [
			{item: "magick:blackstone_dust", amount: 1},
			{item: "magick:blackstone_dust", amount: 1, probability: 0.35}
		]
	})	
	
	// FLUO2
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 400,
		item_inputs: [ 
			{item: "magick:blackstone_dust", amount: 5}
		],
		item_outputs: [
			{item: "geghilarity:silicon_dioxide_dust", amount: 4},
			{item: "geghilarity:biotite_dust", amount: 1}
		]
	})
	
	// FLUO3
	event.recipes.modern_industrialization.electrolyzer({
		eu: 60,
		duration: 1760,
		item_inputs: [ 
			{item: "geghilarity:biotite_dust", amount: 22}
		],
		item_outputs: [
			{item: "geghilarity:potassium_dust", amount: 1},
			{item: "geghilarity:magnesium_dust", amount: 3},
			{item: "modern_industrialization:aluminum_dust", amount: 3},
			{item: "modern_industrialization:silicon_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:fluorine", amount: 2000},
			{fluid: "modern_industrialization:oxygen", amount: 10000}
		]
	})
	
	// FLUO+
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 240,
		item_inputs: [ 
			{item: "geghilarity:silicon_dioxide_dust", amount: 3}
		],
		item_outputs: [
			{item: "modern_industrialization:silicon_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 2000}
		]
	})
	
	// FLUO++
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 80,
		fluid_inputs: [ 
			{fluid: "geghilarity:hydrofluoric_acid", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:fluorine", amount: 1000},
			{fluid: "modern_industrialization:hydrogen", amount: 1000}
		]
	})
		
	// LCR4
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 8,
			duration: 60,
			fluid_inputs: [
				{fluid: "geghilarity:fluorine", amount: 1000},
				{fluid: "modern_industrialization:hydrogen", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:hydrofluoric_acid", amount: 1000}
			]	
		})	

	// LCR5
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 256,
			duration: 240,
			fluid_inputs: [
				{fluid: "geghilarity:hydrofluoric_acid", amount: 4000},
				{fluid: "geghilarity:chloroform", amount: 2000}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:hydrochloric_acid", amount: 6000},
				{fluid: "geghilarity:tetrafluoroethylene", amount: 1000}
			]	
		})	

	// LCR6
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 30,
			duration: 160,
			item_inputs: [ 
				{item: "geghilarity:ccf", probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "geghilarity:tetrafluoroethylene", amount: 144}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:polytetrafluoroethylene", amount: 144}
			]	
		})		
		
	// LCR7
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 30,
			duration: 160,
			fluid_inputs: [
				{fluid: "geghilarity:tetrafluoroethylene", amount: 144},
				{fluid: "modern_industrialization:oxygen", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:polytetrafluoroethylene", amount: 216}
			]	
		})	

	// LCR8
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 30,
			duration: 800,
			item_inputs: [ 
				{item: "geghilarity:ccf", probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "geghilarity:titanium_tetrachloride", amount: 100},
				{fluid: "geghilarity:tetrafluoroethylene", amount: 2160}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:polytetrafluoroethylene", amount: 3240}
			]	
	})	

	// LCR9
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 30,
			duration: 800,
			item_inputs: [ 
				{item: "geghilarity:ccf", probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "geghilarity:titanium_tetrachloride", amount: 100},
				{fluid: "geghilarity:tetrafluoroethylene", amount: 2160},
				{fluid: "modern_industrialization:oxygen", amount: 7500}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:polytetrafluoroethylene", amount: 4320}
			]	
	})		
		
	// LCR1xa
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 8,
			duration: 40,
			item_inputs: [ 
				{item: "minecraft:coal", amount: 1},
				{item: "geggy:selector_2", amount: 1, probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:oxygen", amount: 2000}
			],
			item_outputs: [
				{item: "geghilarity:tiny_ashes", amount: 1}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:carbon_dioxide", amount: 1000}
			]	
	})	
	
	// LCR1xb
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 8,
			duration: 40,
			item_inputs: [ 
				{item: "modern_industrialization:carbon_dust", amount: 1},
				{item: "geggy:selector_4", amount: 1, probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:oxygen", amount: 2000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:carbon_dioxide", amount: 1000}
			]	
	})
	
	// LCR2x eu from 200 to 150, to make ethylene craftable with basic upgrades
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 150,
			duration: 400,
			fluid_inputs: [
				{fluid: "geghilarity:carbon_dioxide", amount: 1000},
				{fluid: "geghilarity:glycerol", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:ethylene", amount: 2000},
				{fluid: "modern_industrialization:oxygen", amount: 5000}
			]	
	})
	
	// LCR3x
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 120,
			duration: 1200,
			fluid_inputs: [
				{fluid: "modern_industrialization:sulfuric_acid", amount: 1000},
				{fluid: "modern_industrialization:ethanol", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:ethylene", amount: 1000},
				{fluid: "geghilarity:diluted_sulfuric_acid", amount: 1000}
			]	
	})	
	
	// LCR4x
	event.recipes.modern_industrialization.distillery({
			eu: 30,
			duration: 1200,
			fluid_inputs: [
				{fluid: "geghilarity:diluted_sulfuric_acid", amount: 3000}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:sulfuric_acid", amount: 2000}
			]
		})
		
	// LCR6x
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 30,
			duration: 160,
			item_inputs: [ 
				{item: "geghilarity:ccf", probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:ethylene", amount: 144}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:polyethylene", amount: 144}
			]	
	})		
		
	// LCR7x
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 30,
			duration: 160,
			fluid_inputs: [
				{fluid: "modern_industrialization:ethylene", amount: 144},
				{fluid: "modern_industrialization:oxygen", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:polyethylene", amount: 216}
			]	
	})	

	// LCR8x
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 30,
			duration: 800,
			item_inputs: [ 
				{item: "geghilarity:ccf", probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "geghilarity:titanium_tetrachloride", amount: 100},
				{fluid: "modern_industrialization:ethylene", amount: 2160}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:polyethylene", amount: 3240}
			]	
	})	

	// LCR9x
	event.recipes.modern_industrialization.chemical_reactor({
			eu: 30,
			duration: 800,
			item_inputs: [ 
				{item: "geghilarity:ccf", probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "geghilarity:titanium_tetrachloride", amount: 100},
				{fluid: "modern_industrialization:ethylene", amount: 2160},
				{fluid: "modern_industrialization:oxygen", amount: 7500}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:polyethylene", amount: 4320}
			]	
	})	
	
	// P0
	event.recipes.modern_industrialization.pyro({
		eu: 120,
		duration: 720,
		item_inputs: [ 
			{item: "minecraft:coal", amount: 12},
			{item: "geggy:selector_2", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geghilarity:ashes", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:coal_tar", amount: 2200}
		]
	})
	
	// P1
	event.recipes.modern_industrialization.pyro({
		eu: 96,
		duration: 440,
		item_inputs: [ 
			{item: "minecraft:coal", amount: 16},
			{item: "geggy:selector_1", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "modern_industrialization:coke_dust", amount: 20}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:creosote", amount: 1000}
		]
	})
	
	// P2
	event.recipes.modern_industrialization.pyro({
		eu: 64,
		duration: 640,
		item_inputs: [ 
			{item: "minecraft:sugar", amount: 23}
		],
		item_outputs: [
			{item: "geghilarity:charcoal_dust", amount: 12}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 1500}
		]
	})
	
	// P3
	event.recipes.modern_industrialization.pyro({
		eu: 64,
		duration: 440,
		item_inputs: [ 
			{tag: "minecraft:logs", amount: 16},
			{item: "geggy:selector_2", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "minecraft:charcoal", amount: 20}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:creosote", amount: 4000}
		]
	})
	
	// PX
	event.recipes.modern_industrialization.centrifuge({
		eu: 30,
		duration: 18,
		item_inputs: [
			{item: "geghilarity:charcoal_dust", amount: 1}
		],
		item_outputs: [	
			{item: "modern_industrialization:carbon_dust", amount: 1}
		]
	})
	
	event.recipes.modern_industrialization.macerator({
		eu: 8,
		duration: 30,
		item_inputs: [ 
			{item: "minecraft:charcoal", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:charcoal_dust", amount: 1}
		]
	})
	
	event.recipes.modern_industrialization.dehy({
		eu: 30,
		duration: 80,
		fluid_inputs: [
			{fluid: "geghilarity:salt_water", amount: 1000}
		],
		item_outputs: [
			{item: "modern_industrialization:salt_dust", amount: 2}
		]
	})
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'modern_industrialization:quantum_machine_casing'})
	event.remove({type: 'modern_industrialization:assembler', output: 'modern_industrialization:quantum_machine_casing'})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:iridium_plate", amount: 4},
			{item: "geghilarity:sacred_platinoreum", amount: 4},
			{item: "modern_industrialization:highly_advanced_machine_hull", amount: 1}
			
		],
		item_outputs: [
			{item: "modern_industrialization:quantum_machine_casing", amount: 1}
		]
	})
	event.recipes.modern_industrialization.implosion_compressor({
		eu: 60,
		duration: 1200,
		item_inputs: [
			{item: "geghilarity:palladium_dust", amount: 1},
			{item: "geghilarity:rhodium_dust", amount: 1},
			{item: "geghilarity:ruthenium_dust", amount: 1},
			{item: "geghilarity:naquadah_alloy_dust", amount: 1}
			
		],
		item_outputs: [
			{item: "geghilarity:sacred_platinoreum", amount: 1}
		]
	})
	
	// LC1
	event.recipes.modern_industrialization.cutting_machine({
		eu: 24,
		duration: 4,
		item_inputs: [ 
			{item: "geghilarity:polyethylene_sheet", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:polyethylene_foil", amount: 4}
		]
	})
	// LC2
	event.recipes.modern_industrialization.cutting_machine({
		eu: 24,
		duration: 4,
		item_inputs: [ 
			{item: "geghilarity:polytetrafluoroethylene_sheet", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:polytetrafluoroethylene_foil", amount: 4}
		]
	})
	// LC3
	event.recipes.modern_industrialization.dehy({
		eu: 8,
		duration: 40,
		item_inputs: [ 
			{item: "geggy:mold_plate", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:polyethylene", amount: 144}
		],
		item_outputs: [
			{item: "geghilarity:polyethylene_sheet", amount: 1}
		]
	})
	// LC4
	event.recipes.modern_industrialization.dehy({
		eu: 8,
		duration: 40,
		item_inputs: [ 
			{item: "geggy:mold_plate", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:polytetrafluoroethylene", amount: 144}
		],
		item_outputs: [
			{item: "geghilarity:polytetrafluoroethylene_sheet", amount: 1}
		]
	})
	
	event.recipes.modern_industrialization.assembler({
		eu: 2000,
		duration: 100,
		item_inputs: [
			{item: "modern_industrialization:steel_machine_casing", amount: 1}	
		],
		fluid_inputs: [
			{fluid: "geghilarity:polytetrafluoroethylene", amount: 216}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:ptfe_casing", amount: 1}
		]
	})
	
	// NAA
	event.recipes.modern_industrialization.macerator({
		eu: 12,
		duration: 400,
		item_inputs: [ 
			{item: "geghilarity:naquadric_compound_ore", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:crushed_naquadric_compound_ore", amount: 1},
			{item: "geghilarity:crushed_naquadric_compound_ore", amount: 1, probability: 0.5}
		]
	})
	
	// NAB
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "geghilarity:crushed_naquadric_compound_ore"}
		],
		"results": [
			{"count": 1, "item": "geghilarity:purified_naquadric_compound_ore"},
			{"chance": 0.25, "count": 1, "item": "geghilarity:crushed_naquadric_compound_ore"}
		]	
	})
	
	// 
	event.recipes.modern_industrialization.macerator({
		eu: 12,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:purified_naquadric_compound_ore", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:naquadric_compound_dust", amount: 1},
			{item: "geghilarity:crushed_naquadric_compound_ore", amount: 1, probability: 0.5}
		]
	})
	
	event.recipes.modern_industrialization.centrifuge({
		eu: 60,
		duration: 2352,
		item_inputs: [
			{item: "geghilarity:purified_naquadric_compound_ore", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:naquadric_compound_dust", amount: 2},
			{item: "geghilarity:naquadric_compound_dust", amount: 2, probability: 0.5}//,
			//{item: "geghilarity:tiny_jasper_dust", count: 1, probability: 0.8}
		],
		fluid_outputs: [
			{fluid: "geghilarity:naquadah_waste", amount: 10}
		]
	})
	
	// 2 start
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "geghilarity:impure_enriched_naquadric_compound_dust"}
		],
		"results": [
			{"count": 1, "item": "geghilarity:purified_enriched_naquadric_compound_dust"},
			{"chance": 0.2, "count": 1, "item": "geghilarity:impure_enriched_naquadric_compound_dust"}
		]	
	})
	
	event.recipes.modern_industrialization.macerator({
		eu: 32,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:purified_enriched_naquadric_compound_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:enriched_naquadric_compound_dust", amount: 1},
			{item: "geghilarity:impure_enriched_naquadric_compound_dust", amount: 1, probability: 0.3}
		]
	})
	
	event.recipes.modern_industrialization.centrifuge({
		eu: 128,
		duration: 2352,
		item_inputs: [
			{item: "geghilarity:purified_enriched_naquadric_compound_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:enriched_naquadric_compound_dust", amount: 2},
			{item: "geghilarity:enriched_naquadric_compound_dust", amount: 2, probability: 0.5},
			{item: "geghilarity:tiny_jasper_dust", count: 1, probability: 0.8}
		],
		fluid_outputs: [
			{fluid: "geghilarity:naquadah_waste", amount: 20}
		]
	})
	

	// N01a
	event.recipes.modern_industrialization.lcr({
		eu: 480,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:naquadric_compound_dust", amount: 1}	
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:aqua_regia", amount: 4000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:naquadric_solution", amount: 1000},
			{fluid: "geghilarity:diluted_nitric_acid", amount: 2000},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000},
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		]
	})
	
	// N01b
	event.recipes.modern_industrialization.lcr({
		eu: 480,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:enriched_naquadric_compound_dust", amount: 1}	
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:aqua_regia", amount: 4000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:enriched_naquadric_solution", amount: 1000},
			{fluid: "geghilarity:diluted_nitric_acid", amount: 2000},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000},
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		]
	})
	
	// N01c
	event.recipes.modern_industrialization.lcr({
		eu: 480,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:naquadriatic_compound_dust", amount: 1}	
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:aqua_regia", amount: 4000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:naquadriatic_solution", amount: 1000},
			{fluid: "geghilarity:diluted_nitric_acid", amount: 2000},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000},
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		]
	})
	
	// N03
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 600,
		duration: 50,
		item_inputs: [ 
			{item: "modern_industrialization:aluminum_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "geghilarity:indium_concentrate", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:tiny_indium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:lead_zinc_solution", amount: 1000}
		]	
	})
	
	// NO4 arc furnace > centrifuge
	event.recipes.modern_industrialization.centrifuge({
		eu: 30,
		duration: 60,
		item_inputs: [
			{item: "modern_industrialization:antimony_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 3000}
		],
		item_outputs: [	
			{item: "geghilarity:antimony_trioxide_dust", amount: 5}
		]
	})
	
	// N05
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:antimony_trioxide_dust", amount: 5}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hydrofluoric_acid", amount: 6000}
		],
		item_outputs: [
			{item: "geghilarity:antimony_trifluoride_dust", amount: 8}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 3000}
		]	
	})
	
	// N06
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:antimony_trifluoride_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "geghilarity:fluorine", amount: 2000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:antimony_pentafluoride", amount: 1000}
		]	
	})
	
	// N07
	event.recipes.modern_industrialization.lcr({
		eu: 480,
		duration: 200,
		fluid_inputs: [ 
			{fluid: "geghilarity:hydrofluoric_acid", amount: 2000},
			{fluid: "geghilarity:antimony_pentafluoride", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:fluoroantimonic_acid", amount: 1000}
		]
	})
	
	// N08a
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:fluoroantimonic_acid", amount: 1000},
			{fluid: "geghilarity:naquadric_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:antimony_trifluoride_dust", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:fluoronaquadric_acid", amount: 1000},
			{fluid: "geghilarity:nitrogen_dioxide", amount: 1000}
		]	
	})
	
	// N08b
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:fluoroantimonic_acid", amount: 1000},
			{fluid: "geghilarity:enriched_naquadric_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:antimony_trifluoride_dust", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:enriched_fluoronaquadric_acid", amount: 1000},
			{fluid: "geghilarity:nitrogen_dioxide", amount: 1000}
		]	
	})
	
	// N08c
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:fluoroantimonic_acid", amount: 1000},
			{fluid: "geghilarity:naquadriatic_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:antimony_trifluoride_dust", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:fluoronaquadriatic_acid", amount: 1000},
			{fluid: "geghilarity:nitrogen_dioxide", amount: 1000}
		]	
	})
	
	// N09a
	event.recipes.modern_industrialization.electrolyzer({
		eu: 7680,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "geghilarity:fluoronaquadric_acid", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:hydrofluoric_acid", amount: 2000},
			{fluid: "geghilarity:naquadah_difluoride", amount: 1000}
		]
	})
	
	// N09b
	event.recipes.modern_industrialization.electrolyzer({
		eu: 7680,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "geghilarity:enriched_fluoronaquadric_acid", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:hydrofluoric_acid", amount: 2000},
			{fluid: "geghilarity:enriched_naquadah_difluoride", amount: 1000}
		]
	})
	
	// N09c
	event.recipes.modern_industrialization.electrolyzer({
		eu: 7680,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "geghilarity:fluoronaquadriatic_acid", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:hydrofluoric_acid", amount: 2000},
			{fluid: "geghilarity:naquadria_difluoride", amount: 1000}
		]
	})
	
	// N10a
	event.recipes.modern_industrialization.blaster_furnace3({
		eu: 30720,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:indium_dust", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:naquadah_difluoride", amount: 3000}
		],
		item_outputs: [
			{item: "geghilarity:indium_trifluoride_dust", amount: 8},
			{item: "geghilarity:naquadah_concentrate_dust", amount: 3}
		]
	})
	
	// N10b
	event.recipes.modern_industrialization.blaster_furnace3({
		eu: 30720,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:indium_dust", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:enriched_naquadah_difluoride", amount: 3000}
		],
		item_outputs: [
			{item: "geghilarity:indium_trifluoride_dust", amount: 8},
			{item: "geghilarity:enriched_naquadah_concentrate_dust", amount: 3}
		]
	})
	
	// N10c
	event.recipes.modern_industrialization.blaster_furnace3({
		eu: 30720,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:indium_dust", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:naquadria_difluoride", amount: 3000}
		],
		item_outputs: [
			{item: "geghilarity:indium_trifluoride_dust", amount: 8},
			{item: "geghilarity:naquadria_concentrate_dust", amount: 3}
		]
	})
	
	// N11
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 270,
		item_inputs: [ 
			{item: "geghilarity:rock_salt_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:potassium_hydroxide", amount: 1000},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
		]	
	})
	
	// N12
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 100,
		fluid_inputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 1000},
			{fluid: "geghilarity:potassium_hydroxide", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:potassium_peroxymonosulfate", amount: 8}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 1000}
		]	
	})
	
	// N13
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:potassium_peroxymonosulfate", amount: 8},
			{item: "geghilarity:naquadah_concentrate_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hydrofluoric_acid", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:potassium_fluoride_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 1000},
			{fluid: "geghilarity:naquadah_sulfate", amount: 1000}
		]	
	})
	
	// N14
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 7680,
		duration: 200,
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 2000},
			{fluid: "geghilarity:naquadah_sulfate", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:naquadah_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		]	
	})
	
	// NR1
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 224,
		item_inputs: [ 
			{item: "geghilarity:potassium_fluoride_dust", amount: 2}
		],
		item_outputs: [
			{item: "geghilarity:potassium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:fluorine", amount: 1000}
		]
	})
	
	// NR2
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 220,
		item_inputs: [ 
			{item: "geghilarity:potassium_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:rock_salt_dust", amount: 2}
		]	
	})
	
	// NR3
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:indium_trifluoride_dust", amount: 8}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 3000}
		],
		item_outputs: [
			{item: "geghilarity:indium_trioxide_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:hydrofluoric_acid", amount: 6000}
		]		
	})
	
	// NR4 EBF NERF, was 480
	event.recipes.modern_industrialization.blaster_furnace3({
		eu: 128,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:indium_trioxide_dust", amount: 5},
			{item: "modern_industrialization:carbon_dust", amount: 3}
		],
		item_outputs: [
			{item: "geghilarity:indium_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:carbon_monoxide", amount: 3000}
		]
	})
	
	// NR5
	event.recipes.modern_industrialization.centrifuge({
		eu: 30,
		duration: 714,
		fluid_inputs: [
			{fluid: "geghilarity:lead_zinc_solution", amount: 1000}
		],
		item_outputs: [	
			{item: "modern_industrialization:lead_dust", amount: 1},
			{item: "modern_industrialization:silver_dust", amount: 1},
			{item: "kubejs:zinc_dust", amount: 1},
			{item: "modern_industrialization:sulfur_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 1000}
		]
	})
	
	// NR6
	event.recipes.modern_industrialization.distillery({
		eu: 120,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:diluted_nitric_acid", amount: 2000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:nitric_acid", amount: 1000}
		]
	})
	
	// NC1
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 176,
		item_inputs: [ 
			{item: "geghilarity:enriched_naquadah_concentrate_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:fluorine", amount: 6000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:enriched_naquadahhexafluoride", amount: 1000}
		]	
	})
	
	// NC2
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:naquadria_concentrate_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:fluorine", amount: 6000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:naquadria_hexafluoride", amount: 1000}
		]	
	})
	
	// NC3
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:xenon", amount: 1000},
			{fluid: "geghilarity:enriched_naquadahhexafluoride", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:enriched_xenon_hexafluoronaquadate", amount: 1000},
			{fluid: "geghilarity:naquadah_waste", amount: 1000}
		]	
	})
	
	// NC4
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:naquadria_hexafluoride", amount: 1000},
			{fluid: "geghilarity:radon_difluoride", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:radon_naquadriaoctafluoride", amount: 1000}
		]	
	})
	
	// NC5
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:auric_fluoride_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 9000},
			{fluid: "geghilarity:enriched_xenon_hexafluoronaquadate", amount: 1000},
			{fluid: "geghilarity:fluoroantimonic_acid", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:enriched_naquadah_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:xenoauric_fluoroantimonic_acid", amount: 1000},
			{fluid: "geghilarity:hydrofluoric_acid", amount: 9000}
		]	
	})
	
	// NC6
	event.recipes.modern_industrialization.electrolyzer({
		eu: 7680,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:xenoauric_fluoroantimonic_acid", amount: 1000}
		],
		item_outputs: [
			{item: "modern_industrialization:gold_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:xenon", amount: 1000},
			{fluid: "geghilarity:hydrofluoric_acid", amount: 2000},
			{fluid: "geghilarity:antimony_pentafluoride", amount: 1000}
		]
	})
	
	// NC7
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:auric_chloride", amount: 1000},
			{fluid: "geghilarity:bromine_trifluoride", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:auric_fluoride_dust", amount: 8}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:bromine", amount: 2000},
			{fluid: "modern_industrialization:chlorine", amount: 6000}
		]	
	})
	
	// NC8
	event.recipes.modern_industrialization.electrolyzer({
		eu: 120,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:gold_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:chlorine", amount: 6000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:auric_chloride", amount: 1000}
		]
	})
	
	// NC9 
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 150,
		fluid_inputs: [
			{fluid: "geghilarity:fluorine", amount: 3000},
			{fluid: "geghilarity:bromine", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:bromine_trifluoride", amount: 1000}
		]	
	})
	
	// NC10
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 7680,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:radon_naquadriaoctafluoride", amount: 1000},
			{fluid: "geghilarity:caesium_xenontrioxide_fluoride", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:radon_trioxide", amount: 1000},
			{fluid: "geghilarity:naquadria_caesium_xenonnonfluoride", amount: 1000}
		]	
	})
	
	// NC11
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 400,
		fluid_inputs: [
			{fluid: "geghilarity:naquadria_caesium_xenonnonfluoride", amount: 1000},
			{fluid: "geghilarity:nitryl_fluoride", amount: 2000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:nitrosonium_octafluoroxenate", amount: 1000},
			{fluid: "geghilarity:naquadria_caesiumfluoride", amount: 1000},
			{fluid: "geghilarity:naquadah_waste", amount: 1000}
		]	
	})
	
	// NC12
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30720,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:naquadria_caesiumfluoride", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:naquadria_dust", amount: 1},
			{item: "geghilarity:caesium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:fluorine", amount: 3000}
		]
	})
	
	// NC13
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:fluorine", amount: 2000},
			{fluid: "geghilarity:radon", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:radon_difluoride", amount: 1000}
		]	
	})
	
	// NC14
	event.recipes.modern_industrialization.electrolyzer({
		eu: 120,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:radon_trioxide", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:radon", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 3000}
		]
	})
	
	// NC15
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:xenon_trioxide", amount: 1000},
			{fluid: "geghilarity:caesium_fluoride", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:caesium_xenontrioxide_fluoride", amount: 1000}
		]	
	})
	
	// NC16
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 100,
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 3000},
			{fluid: "geghilarity:xenon", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:xenon_trioxide", amount: 1000}
		]	
	})
	
	// NC17
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:caesium_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:fluorine", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:caesium_fluoride", amount: 1000}
		]	
	})
	
	// NC18
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:fluorine", amount: 1000},
			{fluid: "geghilarity:nitrogen_dioxide", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:nitryl_fluoride", amount: 1000}
		]	
	})
	
	// NC19
	event.recipes.modern_industrialization.electrolyzer({
		eu: 120,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:nitrosonium_octafluoroxenate", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:fluorine", amount: 8000},
			{fluid: "geghilarity:xenon", amount: 1000},
			{fluid: "geghilarity:nitrogen_dioxide", amount: 2000}
		]
	})
	
	// NE1
	event.recipes.modern_industrialization.pressurizer(64, 400)
		.itemIn("modern_industrialization:air_intake", 0.00)
		.fluidOut("geghilarity:liquid_ender_air", 1000)
		.dimension("nether")
		
	// NE2
	event.recipes.modern_industrialization.distillation_tower({
		eu: 7680,
		duration: 2000,
		fluid_inputs: [
			{fluid: "geghilarity:liquid_ender_air", amount: 200000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:radon", amount: 1000},
			{fluid: "geghilarity:tritium", amount: 10000},
			{fluid: "geghilarity:krypton", amount: 1000},
			{fluid: "geghilarity:xenon", amount: 1000},
			{fluid: "geghilarity:nitrogen_dioxide", amount: 122000},
			{fluid: "modern_industrialization:deuterium", amount: 50000},
			{fluid: "modern_industrialization:helium", amount: 15000}
		]
	})
	
	// TEMP TEMP TEMP
	event.recipes.modern_industrialization.electrolyzer({
		eu: 60,
		duration: 6864,
		item_inputs: [ 
			{item: "geghilarity:mica_dust", amount: 22}
		],
		item_outputs: [
			{item: "geghilarity:caesium_dust", amount: 2},
			{item: "modern_industrialization:aluminum_dust", amount: 2},
			{item: "modern_industrialization:silicon_dust", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 2000},
			{fluid: "modern_industrialization:oxygen", amount: 12000}
		]
	})
	
	// NC21
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 180,
		fluid_inputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 500},
			{fluid: "modern_industrialization:chlorine", amount: 1000},
			{fluid: "geghilarity:salt_water", amount: 1500}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:acidic_salt_water", amount: 3000}
		]	
	})
	
	// NC22
	event.recipes.modern_industrialization.centrifuge({
		eu: 480,
		duration: 180,
		fluid_inputs: [
			{fluid: "geghilarity:acidic_salt_water", amount: 6000}
		],
		item_outputs: [	
			{item: "modern_industrialization:salt_dust", amount: 6}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:crude_bromine_solution", amount: 2000},
			{fluid: "geghilarity:debrominated_water", amount: 2000}
		]
	})
	
	// NC23
	event.recipes.modern_industrialization.dehy({
		eu: 480,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:debrominated_water", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:brine", amount: 100}
		]
	})
	
	// NC24
	event.recipes.modern_industrialization.vacuum_freezer({
		eu: 120,
		duration: 260,
		fluid_inputs: [ 
			{fluid: "geghilarity:brine", amount: 6400}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:chilled_brine", amount: 3000}
		]
	})
	
	// NC25 MAGICK
	event.recipes.modern_industrialization.dehy({
		eu: 480,
		duration: 190,
		fluid_inputs: [
			{fluid: "geghilarity:chilled_brine", amount: 2000}
		],
		item_outputs: [
			{item: "magick:calcite_dust", amount: 5},
			{item: "geghilarity:gypsum_dust", amount: 8},
			{item: "modern_industrialization:salt_dust", amount: 2},
			{item: "geghilarity:rock_salt_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:magnesium_containing_brine", amount: 1000}
		]
	})
	
	// NC26
	event.recipes.modern_industrialization.dehy({
		eu: 480,
		duration: 270,
		fluid_inputs: [
			{fluid: "geghilarity:magnesium_containing_brine", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:magnesium_chloride_dust", amount: 3},
			{item: "geghilarity:magnesium_sulfate_dust", amount: 6}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:lithium_chloride_solution", amount: 200}
		]
	})
	
	// NC27
	event.recipes.modern_industrialization.dehy({
		eu: 120,
		duration: 180,
		fluid_inputs: [
			{fluid: "geghilarity:lithium_chloride_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:lithium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		]
	})
	
	// NC28
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 150,
		fluid_inputs: [
			{fluid: "modern_industrialization:steam", amount: 1000},
			{fluid: "geghilarity:crude_bromine_solution", amount: 2000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:hot_vapour_mixture", amount: 3000}
		]	
	})
	
	// NC29
	event.recipes.modern_industrialization.centrifuge({
		eu: 480,
		duration: 180,
		fluid_inputs: [
			{fluid: "geghilarity:hot_vapour_mixture", amount: 3000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000},
			{fluid: "geghilarity:debrominated_water", amount: 1000},
			{fluid: "modern_industrialization:chlorine", amount: 2000},
			{fluid: "geghilarity:damp_bromine", amount: 1000}
		]
	})
	
	// NC30
	event.recipes.modern_industrialization.dehy({
		eu: 480,
		duration: 400,
		fluid_inputs: [
			{fluid: "geghilarity:damp_bromine", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:bromine", amount: 1000}
		]
	})
	
	// NC31
	event.recipes.modern_industrialization.electrolyzer({
		eu: 120,
		duration: 180,
		item_inputs: [ 
			{item: "geghilarity:magnesium_sulfate_dust", amount: 6}
		],
		item_outputs: [
			{item: "geghilarity:magnesium_dust", amount: 1},
			{item: "modern_industrialization:sulfur_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 4000}
		]
	})
	
	// NX1
	event.recipes.modern_industrialization.lcr({
		eu: 30720,
		duration: 600,
		item_inputs: [
			{item: "geghilarity:naquadah_dust", amount: 6}	
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:sulfuric_acid", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:titanium_trifluoride_dust", amount: 3}
		],
		fluid_outputs: [
			{fluid: "geghilarity:impure_enriched_naquadric_solution", amount: 2000}
		]
	})
	
	// NX2
	event.recipes.modern_industrialization.blaster_furnace({
		eu: 480,
		duration: 900,
		item_inputs: [ 
			{item: "geghilarity:titanium_trifluoride_dust", amount: 4}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:hydrogen", amount: 3000}
		],
		item_outputs: [
			{item: "modern_industrialization:titanium_hot_ingot", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:hydrofluoric_acid", amount: 3000}
		]
	})
	
	// NX3
	event.recipes.modern_industrialization.electrolyzer({
		eu: 60,
		duration: 220,
		fluid_inputs: [
			{fluid: "geghilarity:fluoroantimonic_acid", amount: 1000}
		],
		item_outputs: [
			{item: "modern_industrialization:antimony_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:hydrogen", amount: 2000},
			{fluid: "geghilarity:fluorine", amount: 7000}
		]
	})
	
	// NX4
	event.recipes.modern_industrialization.centrifuge({
		eu: 1920,
		duration: 400,
		fluid_inputs: [
			{fluid: "geghilarity:impure_enriched_naquadric_solution", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:trinium_sulfide_dust", amount: 1},
			{item: "geghilarity:antimony_trifluoride_dust", amount: 1},
			{item: "geghilarity:impure_enriched_naquadric_compound_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		]
	})
	
	// NX5
	event.recipes.modern_industrialization.blaster_furnace5({
		eu: 30720,
		duration: 750,
		item_inputs: [ 
			{item: "geghilarity:trinium_sulfide_dust", amount: 2},
			{item: "kubejs:zinc_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:hot_trinium_ingot", amount: 1},
			{item: "geghilarity:zinc_sulfide_dust", amount: 2}
		]
	})
	
	// NX6
	event.recipes.modern_industrialization.vacuum_freezer({
		eu: 120,
		duration: 969,
		item_inputs: [ 
			{item: "geghilarity:hot_trinium_ingot", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:helium_plasma", amount: 500}
		],
		item_outputs: [	
			{item: "geghilarity:trinium_ingot", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:helium", amount: 250}
		]
	})
	
	// NX6b
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 92,
		item_inputs: [
			{item: "geghilarity:zinc_sulfide_dust", amount: 2}
		],
		item_outputs: [
			{item: "kubejs:zinc_dust", amount: 1},
			{item: "modern_industrialization:sulfur_dust", amount: 1}
		]
	})
	
	// NX7
	event.recipes.modern_industrialization.distillation_tower({
		eu: 480,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:naquadah_waste", amount: 2000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 500},
			{fluid: "geghilarity:impure_enriched_naquadric_solution", amount: 250},
			{fluid: "geghilarity:impure_naquadriatic_solution", amount: 250}
		]
	})	
	
	// NX8
	event.recipes.modern_industrialization.lcr({
		eu: 30720,
		duration: 600,
		item_inputs: [
			{item: "geghilarity:enriched_naquadah_concentrate_dust", amount: 3}	
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:sulfuric_acid", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:titanium_trifluoride_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:impure_naquadriatic_solution", amount: 1000}
		]
	})
	
	// NX9
	event.recipes.modern_industrialization.centrifuge({
		eu: 1920,
		duration: 400,
		fluid_inputs: [
			{fluid: "geghilarity:impure_naquadriatic_solution", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:trinium_sulfide_dust", amount: 1},
			{item: "geghilarity:antimony_trifluoride_dust", amount: 1},
			{item: "geghilarity:naquadriatic_compound_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		]
	})
	
	///////////////////////////////////////////////////////////////////////////
	
	event.recipes.modern_industrialization.macerator({
		eu: 8,
		duration: 150,
		item_inputs: [ 
			{item: "minecraft:netherrack", amount: 1}
		],
		item_outputs: [
			{item: "geggy:netherrack_dust", amount: 1},
			{item: "geggy:netherrack_dust", amount: 1, probability: 0.25}
		]
	})
	
	// IN01
	event.recipes.modern_industrialization.mixer({
		eu: 120,
		duration: 50,
		item_inputs: [ 
			{item: "kubejs:zinc_dust", amount: 1},
			{item: "modern_industrialization:coke_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:zinc_ore_coke_pellets", amount: 3}
		]	
	})
	
	// IN02
	event.recipes.modern_industrialization.blaster_furnace({
		eu: 120,
		duration: 120,
		item_inputs: [ 
			{item: "geghilarity:zinc_ore_coke_pellets", amount: 6}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:oxygen", amount: 6000}
		],
		item_outputs: [
			{item: "geghilarity:zincite_dust", amount: 4},
			{item: "geghilarity:zinc_residual_slag", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:zinc_exhaust_mixture", amount: 1000}
		]
	})
	
	// IN03
	event.recipes.modern_industrialization.macerator({
		eu: 120,
		duration: 80,
		item_inputs: [ 
			{item: "geghilarity:zinc_residual_slag", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:fine_zinc_slag_dust", amount: 1}
		]
	})
	
	// IN04
	event.recipes.modern_industrialization.mixer({
		eu: 30,
		duration: 80,
		item_inputs: [ 
			{item: "geghilarity:fine_zinc_slag_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:zinc_slag_slurry", amount: 1000}
		]	
	})
	
	// IN05
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 130,
		fluid_inputs: [
			{fluid: "geghilarity:zinc_slag_slurry", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:zinc_residual_slag", amount: 1, probability: 0.25}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:metal_rich_slag_slurry", amount: 1000}
		]
	})
	
	// IN06
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 140,
		fluid_inputs: [
			{fluid: "geghilarity:phosphoric_acid", amount: 1000},
			{fluid: "geghilarity:metal_rich_slag_slurry", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:acidic_metal_rich_slag_slurry", amount: 1000}
		]		
	})
	
	// IN07
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 180,
		fluid_inputs: [
			{fluid: "geghilarity:phosphoric_acid", amount: 1000},
			{fluid: "geghilarity:acidic_metal_rich_slag_slurry", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:separated_metal_rich_slag_slurry", amount: 1000},	
			{fluid: "geghilarity:acidic_metal_rich_slag_slurry", amount: 1000}
		]		
	})
	
	// IN08
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 150,
		item_inputs: [ 
			{item: "geghilarity:sodium_hydroxide_dust", amount: 18}
		],
		fluid_inputs: [
			{fluid: "geghilarity:separated_metal_rich_slag_slurry", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:disodium_phosphate", amount: 24}
		],
		fluid_outputs: [
			{fluid: "geghilarity:metal_hydroxide_mix", amount: 1000},	
			{fluid: "minecraft:water", amount: 7000}
		]		
	})
	
	// IN09
	event.recipes.modern_industrialization.electrolyzer({
		eu: 120,
		duration: 130,
		item_inputs: [ 
			{item: "geghilarity:zinc_fine_wire", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:metal_hydroxide_mix", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:small_zinc_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:zinc_poor_mixture", amount: 1000}
		]
	})
	
	// IN10
	event.recipes.modern_industrialization.electrolyzer({
		eu: 120,
		duration: 130,
		item_inputs: [ 
			{item: "geghilarity:iron_fine_wire", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:zinc_poor_mixture", amount: 1000}
		],
		item_outputs: [
			{item: "modern_industrialization:iron_tiny_dust", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:iron_poor_mixture", amount: 1000}
		]
	})
	
	// IN11
	event.recipes.modern_industrialization.electrolyzer({
		eu: 480,
		duration: 50,
		item_inputs: [ 
			{item: "modern_industrialization:copper_fine_wire", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:iron_poor_mixture", amount: 1000}
		],
		item_outputs: [
			{item: "modern_industrialization:copper_tiny_dust", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:indium_hydroxide_concentrate", amount: 1000}
		]
	})
	
	// IN12
	event.recipes.modern_industrialization.dehy({
		eu: 120,
		duration: 230,
		fluid_inputs: [
			{fluid: "geghilarity:indium_hydroxide_concentrate", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:indium_hydroxide", amount: 7}
		]
	})
	
	// IN13
	event.recipes.modern_industrialization.blaster_furnace3({
		eu: 120,
		duration: 240,
		item_inputs: [ 
			{item: "geghilarity:indium_hydroxide", amount: 7}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:hydrogen", amount: 3000}
		],
		item_outputs: [
			{item: "geghilarity:indium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:steam", amount: 3000}
		]
	})
	
	// IN+1
	event.recipes.modern_industrialization.electrolyzer({
		eu: 120,
		duration: 50,
		item_inputs: [ 
			{item: "geghilarity:disodium_phosphate", amount: 8}
		],
		item_outputs: [
			{item: "geghilarity:phosphorus_dust", amount: 1},
			{item: "modern_industrialization:sodium_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:hydrogen", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 4000}
		]
	})
	
	// IN+2
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 304,
		item_inputs: [ 
			{item: "geghilarity:zincite_dust", amount: 2}
		],
		item_outputs: [
			{item: "kubejs:zinc_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})
	
	// N+
	event.recipes.modern_industrialization.centrifuge({
		eu: 20,
		duration: 160,
		item_inputs: [ 
			{item: "geggy:netherrack_dust"}
		],
		item_outputs: [	
			{item: "geghilarity:precious_nugget", amount: 2, probability: 0.15},
			{item: "modern_industrialization:redstone_tiny_dust", amount: 1, probability: 0.75},
			{item: "modern_industrialization:coal_tiny_dust", amount: 1, probability: 0.75},
			{item: "modern_industrialization:sulfur_tiny_dust", amount: 1, probability: 0.75}
		]
	})
	
	// V0
	event.recipes.modern_industrialization.dehy({
		eu: 16,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:ammonium_chloride", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:ammonium_chloride_dust", amount: 2}
		]
	})
	
	// V1
	event.recipes.modern_industrialization.blast_furnace({
		eu: 120,
		duration: 450,
		item_inputs: [ 
			{item: "geghilarity:vanadium_magnetite_dust", amount: 6},
			{item: "modern_industrialization:salt_dust", amount: 6}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 8000}
		],
		item_outputs: [
			{item: "geghilarity:sodium_metavanadate_dust", amount: 15}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:iron_iii_chloride", amount: 1000}
		]
	})
	
	// V2
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 150,
		item_inputs: [ 
			{item: "geghilarity:sodium_metavanadate_dust", amount: 5},
			{item: "geghilarity:ammonium_chloride_dust", amount: 2}
		],
		item_outputs: [
			{item: "geghilarity:ammonium_metavanadate_dust", amount: 9},
			{item: "modern_industrialization:salt_dust", amount: 2}
		]		
	})
	
	// V3
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 150,
		item_inputs: [ 
			{item: "geghilarity:ammonium_metavanadate_dust", amount: 18}
		],
		item_outputs: [
			{item: "geghilarity:vanadium_pentoxide_dust", amount: 7}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:ammonia", amount: 2000},
			{fluid: "minecraft:water", amount: 1000}
		]		
	})
	
	// V4
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 168,
		item_inputs: [ 
			{item: "geghilarity:vanadium_pentoxide_dust", amount: 7}
		],
		item_outputs: [
			{item: "geghilarity:vanadium_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 5000}
		]
	})
	
	// V5 redoes 17
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 7,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:vanadium_pentoxide_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1000},
			{fluid: "geghilarity:sulfur_dioxide", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_trioxide", amount: 1000}
		]	
	})
	
	// V6 
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 7,
		duration: 60,
		item_inputs: [ 
			{item: "modern_industrialization:sulfur_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 2000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 1000}
		]	
	})
	
	// V7
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 152,
		fluid_inputs: [
			{fluid: "geghilarity:iron_iii_chloride", amount: 1000}
		],
		item_outputs: [
			{item: "modern_industrialization:iron_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:chlorine", amount: 3000}
		]
	})
	
	// C1
	event.recipes.modern_industrialization.fextract({
		eu: 38,
		duration: 80,
		item_inputs: [ 
			{item: "modern_industrialization:tin_ingot", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:tin", amount: 144}
		]
	})
	
	// C1a
	event.recipes.modern_industrialization.salloy({
		eu: 30,
		duration: 1200,
		item_inputs: [
			{item: "geghilarity:silicon_dioxide_dust", amount: 3},
			{item: "modern_industrialization:ruby_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:alumino_silicate_wool", amount: 2}
		]
	})
	
	// C1b
	event.recipes.modern_industrialization.electrolyzer({
		eu: 25,
		duration: 500,
		item_inputs: [
			{item: "minecraft:sand", amount: 8}
		],
		item_outputs: [
			{item: "geghilarity:silicon_dioxide_dust", amount: 1}
		]
	})
	
	// C1c
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 80,
		item_inputs: [
			{item: "geggy:glass_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:silicon_dioxide_dust", amount: 1}
		]
	})
	
	// C1d
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 80,
		item_inputs: [
			{item: "geggy:flint_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:silicon_dioxide_dust", amount: 1}
		]
	})
	
	event.remove({id: `modern_industrialization:materials/cupronickel/craft/coil`})
	event.remove({id: `modern_industrialization:materials/kanthal/craft/coil`})
	event.remove({id: `modern_industrialization:materials/cupronickel/assembler/coil`})
	event.remove({id: `modern_industrialization:materials/kanthal/assembler/coil`})
	// C2
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:alumino_silicate_wool", amount: 12},
			{item: "modern_industrialization:cupronickel_cable", amount: 8}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:tin", amount: 144}
		],
		item_outputs: [
			{item: "modern_industrialization:cupronickel_coil", amount: 1}
		]
	})
	
	// C3
	event.recipes.modern_industrialization.assembler({
		eu: 30,
		duration: 300,
		item_inputs: [ 
			{item: "geghilarity:mica_insulator_foil", amount: 8},
			{item: "modern_industrialization:kanthal_cable", amount: 8}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:mcopper", amount: 144}
		],
		item_outputs: [
			{item: "modern_industrialization:kanthal_coil", amount: 1}
		]
	})
	
	// C4 needed for basic upgrades, requires upgrade, so jumpstarted by created at a loss
	event.recipes.modern_industrialization.fextract({
		eu: 38,
		duration: 80,
		item_inputs: [ 
			{item: "minecraft:copper_ingot", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:mcopper", amount: 144}
		]
	})
	
	// C5
	event.recipes.modern_industrialization.cutting_machine({
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:mica_insulator_sheet", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:mica_insulator_foil", amount: 4}
		]
	})
	
	// C6
	event.recipes.modern_industrialization.salloy({
		eu: 30,
		duration: 400,
		item_inputs: [
			{item: "geghilarity:mica_based_sheet", amount: 5},
			{item: "geghilarity:silicon_dioxide_dust", amount: 3}
		],
		item_outputs: [
			{item: "geghilarity:mica_insulator_sheet", amount: 8}
		]
	})
	
	// C7
	event.recipes.modern_industrialization.salloy({
		eu: 28,
		duration: 400,
		item_inputs: [
			{item: "geghilarity:mica_based_pulp", amount: 4},
			{item: "geghilarity:asbestos_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:mica_based_sheet", amount: 5}
		]
	})
	
	// C8
	event.recipes.modern_industrialization.mixer({
		eu: 8,
		duration: 400,
		item_inputs: [ 
			{item: "geghilarity:mica_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:synthetic_rubber", amount: 500}
		],
	item_outputs: [
			{item: "geghilarity:mica_based_pulp", amount: 4}
		]	
	})
	
	// C9
	event.recipes.modern_industrialization.assembler({
		eu: 120,
		duration: 400,
		item_inputs: [ 
			{item: "geghilarity:mica_insulator_foil", amount: 8},
			{item: "geghilarity:nichrome_cable", amount: 8}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:aluminium", amount: 144}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:nichrome_coil", amount: 1}
		]
	})
	
	// C9a
	event.recipes.modern_industrialization.compressor({
		eu: 4,
		duration: 500,
		item_inputs: [ 
			{item: "geghilarity:nichrome_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:nichrome_plate", amount: 1}
		]
	})
	
	// C9b
	event.recipes.modern_industrialization.wiremill({
		eu: 4,
		duration: 500,
		item_inputs: [ 
			{item: "geghilarity:nichrome_plate", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:nichrome_wire", amount: 2}
		]
	})
	
	// C9c
	event.recipes.modern_industrialization.assembler({
		eu: 4,
		duration: 500,
		item_inputs: [ 
			{item: "geghilarity:nichrome_wire", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 6}
		],
		item_outputs: [
			{item: "geghilarity:nichrome_cable", amount: 4}
		]
	})
	
	// C10
	event.recipes.modern_industrialization.fextract({
		eu: 128,
		duration: 80,
		item_inputs: [ 
			{item: "modern_industrialization:aluminum_ingot", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:aluminium", amount: 144}
		]
	})
	
	// C11
	event.recipes.modern_industrialization.blaster_furnace({
		eu: 480,
		duration: 2700,
		item_inputs: [ 
			{item: "modern_industrialization:nickel_ingot", amount: 4},
			{item: "modern_industrialization:chromium_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:hot_nichrome_ingot", amount: 5},
			{item: "geghilarity:tiny_ashes", amount: 2}
		]
	})
	
	// C12
	event.recipes.modern_industrialization.blaster_furnace({
		eu: 120,
		duration: 3024,
		item_inputs: [ 
			{item: "geghilarity:nichrome_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:hot_nichrome_ingot", amount: 1}
		]
	})
	
	// C13
	event.recipes.modern_industrialization.mixer({
		eu: 30,
		duration: 280,
		item_inputs: [ 
			{item: "modern_industrialization:nickel_dust", amount: 4},
			{item: "modern_industrialization:chromium_dust", amount: 1}
		],
	item_outputs: [
			{item: "geghilarity:nichrome_dust", amount: 5}
		]	
	})
	
	// C14
	event.recipes.modern_industrialization.assembler({
		eu: 1920,
		duration: 600,
		item_inputs: [ 
			{item: "geghilarity:mica_insulator_foil", amount: 8},
			{item: "geghilarity:tungstensteel_cable", amount: 8}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:nichrome", amount: 144}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:tungstensteel_coil", amount: 1}
		]
	})
	
	// C14a > done before

	
	// C14b
	event.recipes.modern_industrialization.wiremill({
		eu: 8,
		duration: 500,
		item_inputs: [ 
			{item: "geghilarity:tungstensteel_plate", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:tungstensteel_wire", amount: 2}
		]
	})
	
	// C14c
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 500,
		item_inputs: [ 
			{item: "geghilarity:tungstensteel_wire", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 12}
		],
		item_outputs: [
			{item: "geghilarity:tungstensteel_cable", amount: 4}
		]
	})
	
	// C15
	event.recipes.modern_industrialization.assembler({
		eu: 1920,
		duration: 600,
		item_inputs: [ 
			{item: "geghilarity:mica_insulator_foil", amount: 8},
			{item: "geghilarity:hss-g_cable", amount: 8}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:tungsten", amount: 144}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:hss-g_coil", amount: 1}
		]
	})
	
	// C15b
	event.recipes.modern_industrialization.vacuum_freezer({
		eu: 120,
		duration: 168,
		item_inputs: [ 
			{item: "geghilarity:hot_nichrome_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:nichrome_ingot", amount: 1}
		]
	})
	
	// C16
	event.recipes.modern_industrialization.fextract({
		eu: 512,
		duration: 80,
		item_inputs: [ 
			{item: "geghilarity:nichrome_ingot", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:nichrome", amount: 144}
		]
	})
	
	// C17
	event.recipes.modern_industrialization.fextract({
		eu: 512,
		duration: 80,
		item_inputs: [ 
			{item: "modern_industrialization:tungsten_ingot", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:tungsten", amount: 144}
		]
	})
	
	// C18
	event.recipes.modern_industrialization.mixer({
		eu: 30,
		duration: 882,
		item_inputs: [ 
			{item: "geghilarity:tungstensteel_dust", amount: 5},
			{item: "geghilarity:molybdenum_dust", amount: 2},
			{item: "modern_industrialization:chromium_dust", amount: 1},
			{item: "geghilarity:vanadium_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:hss-g_dust", amount: 9}
		]	
	})
	
	// C19
	event.recipes.modern_industrialization.blaster_furnace3({
		eu: 1920,
		duration: 871,
		item_inputs: [ 
			{item: "geghilarity:hss-g_dust", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:helium", amount: 100}
		],
		item_outputs: [
			{item: "geghilarity:hot_hss-g_ingot", amount: 1}
		]
	})
	
	// C19a
	event.recipes.modern_industrialization.compressor({
		eu: 16,
		duration: 500,
		item_inputs: [ 
			{item: "geghilarity:hss-g_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:hss-g_plate", amount: 1}
		]
	})
	
	// C19b
	event.recipes.modern_industrialization.wiremill({
		eu: 16,
		duration: 500,
		item_inputs: [ 
			{item: "geghilarity:hss-g_plate", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:hss-g_wire", amount: 2}
		]
	})
	
	// C19c
	event.recipes.modern_industrialization.assembler({
		eu: 16,
		duration: 500,
		item_inputs: [ 
			{item: "geghilarity:hss-g_wire", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 12}
		],
		item_outputs: [
			{item: "geghilarity:hss-g_cable", amount: 4}
		]
	})
	
	// C20
	event.recipes.modern_industrialization.vacuum_freezer({
		eu: 120,
		duration: 294,
		item_inputs: [ 
			{item: "geghilarity:hot_hss-g_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:hss-g_ingot", amount: 1}
		]
	})
	
	// C21
	event.recipes.modern_industrialization.blaster_furnace4({
		eu: 1920,
		duration: 938,
		item_inputs: [ 
			{item: "geghilarity:hss-e_dust", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:argon", amount: 50}
		],
		item_outputs: [
			{item: "geghilarity:hot_hss-e_ingot", amount: 1}
		]
	})
	
	// C22
	event.recipes.modern_industrialization.vacuum_freezer({
		eu: 120,
		duration: 250,
		item_inputs: [ 
			{item: "geghilarity:hot_hss-e_ingot", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:helium_plasma", amount: 500}
		],
		item_outputs: [	
			{item: "geghilarity:hss-e_ingot", amount: 1}
		],
		fluid_outputs: [ 
			{fluid: "modern_industrialization:helium", amount: 250}
		]
	})
	
	// C23
	event.recipes.modern_industrialization.mixer({
		eu: 4046,
		duration: 450,
		item_inputs: [ 
			{item: "geghilarity:hss-g_dust", amount: 6},
			{item: "geghilarity:cobalt_dust", amount: 1},
			{item: "modern_industrialization:manganese_dust", amount: 1},
			{item: "modern_industrialization:silicon_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:hss-e_dust", amount: 9}
		]	
	})
	
	// C24
	event.recipes.modern_industrialization.blaster_furnace4({
		eu: 1920,
		duration: 1005,
		item_inputs: [ 
			{item: "geghilarity:hss-s_dust", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:argon", amount: 50}
		],
		item_outputs: [
			{item: "geghilarity:hot_hss-s_ingot", amount: 1}
		]
	})
	
	// C25
	event.recipes.modern_industrialization.vacuum_freezer({
		eu: 120,
		duration: 388,
		item_inputs: [ 
			{item: "geghilarity:hot_hss-s_ingot", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:helium_plasma", amount: 500}
		],
		item_outputs: [	
			{item: "geghilarity:hss-s_ingot", amount: 1}
		],
		fluid_outputs: [ 
			{fluid: "modern_industrialization:helium", amount: 250}
		]
	})
	
	// C26
	event.recipes.modern_industrialization.mixer({
		eu: 7680,
		duration: 25,
		item_inputs: [ 
			{item: "geghilarity:hss-g_dust", amount: 6},
			{item: "modern_industrialization:iridium_dust", amount: 2},
			{item: "geghilarity:osmium_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:hss-s_dust", amount: 9}
		]	
	})
	
	// XXT1
	event.recipes.modern_industrialization.macerator({
		eu: 8,
		duration: 150,
		item_inputs: [ 
			{item: "minecraft:end_stone", amount: 1}
		],
		item_outputs: [
			{item: "geggy:endstone_dust", amount: 1},
			{item: "geghilarity:tiny_tungstate_dust", amount: 1, probability: 0.19}
		]
	})
	
	// XXT2
	event.recipes.modern_industrialization.centrifuge({
		eu: 20,
		duration: 320,
		item_inputs: [ 
			{item: "geggy:endstone_dust"}
		],
		item_outputs: [	
			{item: "geghilarity:tiny_platinum_metallic_powder_dust", amount: 2, probability: 0.09},
			{item: "geghilarity:small_tungstate_dust", amount: 1, probability: 0.18},
			{item: "minecraft:sand", amount: 1, probability: 0.90}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:helium", amount: 120}
		]
	})
	
	// XXT3
	event.recipes.modern_industrialization.electrolyzer({
		eu: 20,
		duration: 320,
		item_inputs: [ 
			{item: "geggy:endstone_dust"}
		],
		item_outputs: [	
			{item: "geghilarity:molybdenum_dust", amount: 1, probability: 0.1}
		]
	})
	
	// XXT4
	event.recipes.modern_industrialization.centrifuge({
		eu: 20,
		duration: 320,
		item_inputs: [ 
			{item: "modern_industrialization:raw_tin"}
		],
		item_outputs: [	
			{item: "modern_industrialization:tin_tiny_dust", amount: 6},
			{item: "geghilarity:asbestos_dust", amount: 1, probability: 0.15}
		]
	})
	
	
	//LITHIUM HYDROXIDE ELECTROLYSIS
	event.recipes.modern_industrialization.electrolyzer(
		{
			eu: 30,
			duration: 200,
					fluid_inputs: [ 
			{fluid: "modern_industrialization:hydrogen", amount: 1000}
			],
			item_inputs: [ 
			{item: "geghilarity:lithium_hydroxide_dust"}
			],
			item_outputs: [
				{item: "geghilarity:lithium_dust", amount: 1}
			],
			fluid_outputs: [
				{fluid: "minecraft:water", amount: 1000}
			]
	})
	
	//silicon battery rework
		event.remove({id: 'modern_industrialization:assembler_generated/electric_age/battery/silicon_battery'})
		event.remove({id: 'modern_industrialization:electric_age/battery/silicon_battery_asbl'})
		
			event.shaped("modern_industrialization:silicon_battery", [
		"ABA",
		"CLC",
		"CLC"
	], {
		C: "modern_industrialization:battery_alloy_curved_plate",
		B: "modern_industrialization:battery_alloy_plate",
		A: "modern_industrialization:aluminum_cable",
		L: "geghilarity:lithium_dust"
	})
	event.recipes.modern_industrialization.assembler({
		eu: 64,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:aluminum_cable", amount: 2},
			{item: "modern_industrialization:battery_alloy_plate", amount: 1},
			{item: "modern_industrialization:battery_alloy_curved_plate", amount: 4},
			{item: "geghilarity:lithium_dust", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:silicon_battery", amount: 1}
		]
	})
	
	// PC01 TEMP autoclave > centrifuge
	event.recipes.modern_industrialization.centrifuge({
		eu: 480,
		duration: 600,
		item_inputs: [ 
			{item: "geghilarity:molybdenite_dust", amount: 3}
		],
		fluid_inputs: [ 
			{fluid: "minecraft:water", amount: 3000},
			{fluid: "modern_industrialization:oxygen", amount: 9000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:molybdenite_concentrate", amount: 2000}
		]
	})
	
	// PC02 TEMP chem.bath > centrifuge
	event.recipes.modern_industrialization.dehy({
		eu: 30,
		duration: 600,
		fluid_inputs: [ 
			{fluid: "geghilarity:molybdenite_concentrate", amount: 2000},
			{fluid: "geghilarity:ammonia", amount: 6000}
		],
		item_outputs: [
			{item: "geghilarity:ammonium_molybdate_dust", amount: 15},
			{item: "geghilarity:ammonium_sulfate_dust", amount: 6}
		]
	})
	
	// PC03
	event.recipes.modern_industrialization.blaster_furnace3({
		eu: 480,
		duration: 600,
		item_inputs: [ 
			{item: "geghilarity:ammonium_molybdate_dust", amount: 15},
			{item: "modern_industrialization:coke_dust", amount: 3}
		],
		item_outputs: [
			{item: "geghilarity:molybdenum_ingot", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ammonia", amount: 2000},
			{fluid: "geghilarity:carbon_monoxide", amount: 3000}
		]
	})
	
	// PC04
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hydrogen_cyanide", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:sodium_cyanide_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 1000}
		]		
	})
	
	// PC05
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 600,
		item_inputs: [ 
			{item: "geghilarity:molybdenite_dust", amount: 3},
			{item: "geghilarity:sodium_cyanide_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "geghilarity:sodium_peroxide", amount: 500}
		],
		item_outputs: [
			{item: "geghilarity:gold_depleted_molybdenite_dust", amount: 3},
			{item: "geghilarity:sodium_dicyanoaurate_dust", amount: 6},
			{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
		]		
	})
	
	// PC06
	event.recipes.modern_industrialization.electrolyzer({
		eu: 16,
		duration: 650,
		item_inputs: [ 
			{item: "geghilarity:sodium_dicyanoaurate_dust", amount: 6},
			{item: "modern_industrialization:sodium_dust", amount: 1},
			{item: "modern_industrialization:gold_plate", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000}
		],
		item_outputs: [
			{item: "modern_industrialization:gold_dust", amount: 1},
			{item: "geghilarity:sodium_cyanide_dust", amount: 6}
		]
	})
	
	// PC07 TEMP autoclave > centrifuge
	event.recipes.modern_industrialization.centrifuge({
		eu: 480,
		duration: 600,
		item_inputs: [ 
			{item: "geghilarity:gold_depleted_molybdenite_dust", amount: 3}
		],
		fluid_inputs: [ 
			{fluid: "minecraft:water", amount: 4500},
			{fluid: "modern_industrialization:oxygen", amount: 7750}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gold_depleted_molybdenite_concentrate", amount: 2000}
		]
	})
	
	// PC08 TEMP solvent.ext > lcr (can probably make a dedicated MB)
	event.recipes.modern_industrialization.lcr({
		eu: 122880,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "geghilarity:gold_depleted_molybdenite_concentrate", amount: 2000},
			{fluid: "geghilarity:trioctylmethylammonium_diethylhexylphosphate", amount: 1000},
			{fluid: "geghilarity:octylmethylimidazolium_bistriflimide", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:organic_molybdenum_solution", amount: 500},
			{fluid: "geghilarity:organic_perrhenate_solution", amount: 500},
			{fluid: "geghilarity:diluted_sulfuric_acid", amount: 3000}
		]
	})
	
	// PC09
	event.recipes.modern_industrialization.mixer({
		eu: 480,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "geghilarity:organic_molybdenum_solution", amount: 500},
			{fluid: "geghilarity:ammonia", amount: 2000},
			{fluid: "minecraft:water", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:ammonium_molybdate_dust", amount: 15}
		]	
	})
	
	// PC10 TEMP, chanced
	event.recipes.modern_industrialization.mixer({
		eu: 480,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "geghilarity:organic_perrhenate_solution", amount: 500},
			{fluid: "geghilarity:ammonia", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:ammonium_perrhenate_dust", amount: 5},
			{item: "geghilarity:ammonium_perrhenate_dust", amount: 3, probability: 0.85},
			{item: "geghilarity:ammonium_perrhenate_dust", amount: 2, probability: 0.60}
		]	
	})
	
	// PC11 TEMP, EBF4?
	event.recipes.modern_industrialization.blaster_furnace3({
		eu: 7680,
		duration: 8000,
		item_inputs: [ 
			{item: "geghilarity:ammonium_perrhenate_dust", amount: 10}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:hydrogen", amount: 7000}
		],
		item_outputs: [
			{item: "geghilarity:hot_rhenium_ingot", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ammonia", amount: 1000},
			{fluid: "minecraft:water", amount: 4000}
		]
	})
	
	// PC11b
	event.recipes.modern_industrialization.vacuum_freezer({
		eu: 120,
		duration: 558,
		item_inputs: [
			{item: "geghilarity:hot_rhenium_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:rhenium_ingot", amount: 1}
		]
	})
	
	// PC12
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 60,
		fluid_inputs: [
			{fluid: "geghilarity:octanol", amount: 3000},
			{fluid: "geghilarity:ammonia", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:trioctylamine", amount: 1000},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 3000}
		]		
	})
	
	// PC13
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 20,
		fluid_inputs: [
			{fluid: "geghilarity:trioctylamine", amount: 1000},
			{fluid: "geghilarity:chlorometane", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:trioctylmethylammonium_chloride_dust", amount: 8}
		]		
	})
	
	// PC14
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 20,
		item_inputs: [ 
			{item: "geghilarity:trioctylmethylammonium_chloride_dust", amount: 8},
			{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
		],
		item_outputs: [
			{item: "geghilarity:trioctylmethylammonium_hydroxide_dust", amount: 8},
			{item: "modern_industrialization:salt_dust", amount: 2}
		]		
	})
	
	// PC15
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 20,
		item_inputs: [ 
			{item: "geghilarity:trioctylmethylammonium_hydroxide_dust", amount: 8}
		],
		fluid_inputs: [
			{fluid: "geghilarity:diethylhexylphosphoric_acid", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:trioctylmethylammonium_diethylhexylphosphate", amount: 1000},
			{fluid: "minecraft:water", amount: 1000}
		]		
	})
	
	// PC16
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "kubejs:zinc_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:chlorine", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:zinc_chloride_dust", amount: 3}
		]		
	})
	
	// PC17
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:zinc_chloride_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:octanol", amount: 1000},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:chlorooctane", amount: 1000},
			{fluid: "minecraft:water", amount: 1000}
		]	
	})
	
	// PC18 TEMP lcr due to 4 input fluid
	event.recipes.modern_industrialization.lcr({
		eu: 480,
		duration: 200,
		fluid_inputs: [ 
			{fluid: "geghilarity:glyoxal", amount: 1000},
			{fluid: "geghilarity:formaldehyde", amount: 1000},
			{fluid: "geghilarity:methylamine", amount: 1000},
			{fluid: "geghilarity:ammonia", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:methylimidazole", amount: 1000},
			{fluid: "minecraft:water", amount: 3000}
		]
	})
	
	// PC19
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:methylimidazole", amount: 1000},
			{fluid: "geghilarity:chlorooctane", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:octylmethylimidazolium_chloride", amount: 1000}
		]	
	})
	
	// PC20
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 60,
		fluid_inputs: [
			{fluid: "modern_industrialization:methane", amount: 1000},
			{fluid: "geghilarity:oleum", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:mesylic_acid", amount: 1000},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		]	
	})
	
	// PC21
	event.recipes.modern_industrialization.electrolyzer({
		eu: 480,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:nickel_plate", amount: 1, probability: 0.0},
			{item: "modern_industrialization:titanium_plate", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:mesylic_acid", amount: 1000},
			{fluid: "geghilarity:hydrofluoric_acid", amount: 4000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:triflyl_fluoride", amount: 1000},
			{fluid: "minecraft:water", amount: 1000},
			{fluid: "modern_industrialization:hydrogen", amount: 6000}
		]
	})
	
	// PC22
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 60,
		fluid_inputs: [
			{fluid: "geghilarity:lithium", amount: 432},
			{fluid: "modern_industrialization:nitrogen", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:lithium_nitride_dust", amount: 4}
		]
	})
	
	// PC23
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 60,
		item_inputs: [ 
			{item: "geghilarity:lithium_nitride_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "geghilarity:triflyl_fluoride", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:lithium_fluoride_dust", amount: 4},
			{item: "geghilarity:lithium_bistriflimide_dust", amount: 1}
		]
	})
	
	// PC24
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:lithium_bistriflimide_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:octylmethylimidazolium_chloride", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:lithium_chloride_dust", amount: 2}
		],
		fluid_outputs: [
			{fluid: "geghilarity:octylmethylimidazolium_bistriflimide", amount: 1000}
		]
	})
	
	// PX01
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:sodium_hydroxide_dust", amount: 6}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hydrogen_peroxide", amount: 7000}
		],
		item_outputs: [
			{item: "geghilarity:sodium_peroxide_dust", amount: 4}
		],
		fluid_outputs: [
			{fluid: "minecraft:water", amount: 8000},
			{fluid: "modern_industrialization:oxygen", amount: 6000}
		]
	})
	
	// PX02
	event.recipes.modern_industrialization.lcr({
		eu: 180,
		duration: 330,
		item_inputs: [ 
			{item: "geghilarity:palladium_dust", amount: 1, probability: 0.0},
			{item: "geghilarity:twoethylanthraquinone_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:oxygen", amount: 6000},
			{fluid: "modern_industrialization:hydrogen", amount: 6000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hydrogen_peroxide", amount: 3000}
		]
	})
	
	// PX03
	event.recipes.modern_industrialization.electrolyzer({
		eu: 1920,
		duration: 1000,
		item_inputs: [ 
			{item: "geghilarity:phthalic_anhydride_dust", amount: 15}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:ethylbenzene", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:twoethylanthraquinone_dust", amount: 30}
		],
		fluid_outputs: [
			{fluid: "minecraft:water", amount: 1000}
		]
	})
	
	// PX04
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 125,
		item_inputs: [ 
			{item: "geghilarity:tiny_vanadium_pentoxide_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 5000},
			{fluid: "geghilarity:naphthalene", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:phthalic_anhydride_dust", amount: 15}
		],
		fluid_outputs: [
			{fluid: "geghilarity:carbon_dioxide", amount: 1000}
		]
	})
	
	// PX05
	event.recipes.modern_industrialization.distillery({
		eu: 30,
		duration: 160,
		fluid_inputs: [
			{fluid: "geghilarity:coal_tar", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:naphthalene", amount: 400}
		]
	})
	
	// PX06
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 80,
		item_inputs: [ 
			{item: "geggy:selector_1", amount: 1, probability: 0.0}
		],	
		fluid_inputs: [
			{fluid: "modern_industrialization:methane", amount: 1000},
			{fluid: "modern_industrialization:chlorine", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000},
			{fluid: "geghilarity:chlorometane", amount: 1000}
		]
	})
	
	// PX07
	event.recipes.modern_industrialization.lcr({
		eu: 60,
		duration: 120,
		fluid_inputs: [ 
			{fluid: "geghilarity:nitric_acid", amount: 2000},
			{fluid: "geghilarity:acetaldehyde", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:glyoxal", amount: 2000},
			{fluid: "geghilarity:nitrogen_dioxide", amount: 1000},
			{fluid: "minecraft:water", amount: 3000}
		]
	})
	
	// PX08
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 120,
		item_inputs: [ 
			{item: "geghilarity:palladium_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1000},
			{fluid: "modern_industrialization:ethylene", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:acetaldehyde", amount: 1000}
		]
	})
	
	// PX09 or 120 100 tic
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 1920,
		duration: 50,
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 3000},
			{fluid: "geghilarity:ammonia", amount: 1000},
			{fluid: "modern_industrialization:methane", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hydrogen_cyanide", amount: 1000},
			{fluid: "minecraft:water", amount: 3000}
		]
	})
	
	// PX10
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30720,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:silver_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:methanol", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:formaldehyde", amount: 1000},
			{fluid: "minecraft:water", amount: 1000}
		]
	})
	
	// PX11
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 96,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:carbon_dioxide", amount: 1000},
			{fluid: "modern_industrialization:hydrogen", amount: 6000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:methanol", amount: 1000},
			{fluid: "minecraft:water", amount: 1000}
		]
	})
	
	// PX12
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 96,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:carbon_monoxide", amount: 1000},
			{fluid: "modern_industrialization:hydrogen", amount: 4000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:methanol", amount: 1000}
		]
	})
	
	// PX13
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 96,
		duration: 320,
		item_inputs: [ 
			{item: "modern_industrialization:carbon_dust", amount: 1},
			{item: "geggy:selector_5", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1000},
			{fluid: "modern_industrialization:hydrogen", amount: 4000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:methanol", amount: 1000}
		]
	})
	
	// PX14
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 7680,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:alumino_silicate_wool", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:methanol", amount: 1000},
			{fluid: "geghilarity:ammonia", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:methylamine", amount: 1000},
			{fluid: "minecraft:water", amount: 1000}
		]
	})
	
	// PX15 
	event.recipes.modern_industrialization.mixer({
		eu: 4,
		duration: 60,
		fluid_inputs: [ 
			{fluid: "geghilarity:sulfur_trioxide", amount: 1000},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:oleum", amount: 1000}
		]
	})
	
	// PX16
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 460,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:potassium", amount: 144},
			{fluid: "modern_industrialization:hydrogen", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:potassium_hydride_dust", amount: 2}
		]
	})
	
	// PX17
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 60,
		item_inputs: [ 
			{item: "geghilarity:potassium_hydride_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:butyraldehide", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethylhydroxycaproaldehyde", amount: 1000}
		]
	})
	
	// PX18
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 60,
		item_inputs: [ 
			{item: "modern_industrialization:platinum_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:ethylhydroxycaproaldehyde", amount: 1000},
			{fluid: "modern_industrialization:hydrogen", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethylhexanol", amount: 1000},
			{fluid: "minecraft:water", amount: 1000}
		]
	})
	
	// PX19
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 60,
		item_inputs: [ 
			{item: "geghilarity:phosphorus_pentoxide_dust", amount: 7}
		],
		fluid_inputs: [
			{fluid: "geghilarity:ethylhexanol", amount: 4000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diethylhexylphosphoric_acid", amount: 2000},
			{fluid: "minecraft:water", amount: 1000}
		]
	})
	
	// PX20
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 240,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:aluminum_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:ethylene", amount: 3000},
			{fluid: "modern_industrialization:hydrogen", amount: 3000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:triethylaluminium", amount: 1000}
		]
	})
	
	// PX21
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 1920,
		duration: 40,
		fluid_inputs: [
			{fluid: "geghilarity:triethylaluminium", amount: 1000},
			{fluid: "modern_industrialization:ethylene", amount: 10500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:trialkylaluminium_mixture", amount: 1000}
		]
	})
	
	// PX22 TEMP deionized water
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 1920,
		duration: 40,
		fluid_inputs: [
			{fluid: "geghilarity:trialkylaluminium_mixture", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 3000},
			{fluid: "minecraft:water", amount: 3000}
		],
		item_outputs: [
			{item: "geghilarity:aluminium_hydroxide", amount: 7}
		],
		fluid_outputs: [
			{fluid: "geghilarity:fatty_alcohols_mixture", amount: 1000}
		]
	})
	
	// PX23
	event.recipes.modern_industrialization.distillation_tower({
		eu: 1920,
		duration: 40,
		fluid_inputs: [
			{fluid: "geghilarity:fatty_alcohols_mixture", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:dodecanol", amount: 250},
			{fluid: "geghilarity:decanol", amount: 250},
			{fluid: "geghilarity:octanol", amount: 250},
			{fluid: "geghilarity:hexanol", amount: 250}
		]
	})	
	
	// PX24
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 200,
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 2000},
			{fluid: "modern_industrialization:propene", amount: 1000},
			{fluid: "geghilarity:carbon_monoxide", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butyraldehide", amount: 1000}
		]
	})
	
	// PX25
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 40,
		item_inputs: [ 
			{item: "geghilarity:phosphorus_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:phosphorus_pentoxide_dust", amount: 14}
		]
	})
	
	// PPX1
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 1920,
		fluid_inputs: [
			{fluid: "geghilarity:phosphoric_acid", amount: 1, probability: 0.0},
			{fluid: "modern_industrialization:benzene", amount: 8000},
			{fluid: "modern_industrialization:propene", amount: 8000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:cumene", amount: 8000}
		]
	})
	
	// PPX2
	event.recipes.modern_industrialization.electrolyzer({
		eu: 60,
		duration: 384,
		fluid_inputs: [ 
			{fluid: "geghilarity:phosphoric_acid", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:phosphorus_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 3000},
			{fluid: "modern_industrialization:oxygen", amount: 4000}
		]
	})
	
	// PPX3
	event.recipes.modern_industrialization.electrolyzer({
		eu: 60,
		duration: 576,
		item_inputs: [ 
			{item: "geghilarity:gypsum_dust", amount: 8}
		],
		item_outputs: [
			{item: "geghilarity:calcium_dust", amount: 1},
			{item: "modern_industrialization:sulfur_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "minecraft:water", amount: 2000},
			{fluid: "modern_industrialization:oxygen", amount: 4000}
		]
	})
	
	// PPX4
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 320,
		item_inputs: [ 
			{item: "minecraft:prismarine_shard", amount: 9}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 10000},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 5000}
		],
		item_outputs: [
			{item: "geghilarity:gypsum_dust", amount: 8}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000},
			{fluid: "geghilarity:phosphoric_acid", amount: 3000}
		]
	})
	
	// PPX5
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 96,
		item_inputs: [
			{item: "geghilarity:lithium_fluoride_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:lithium_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:fluorine", amount: 1000}
		]
	})
	
	// PPX6
	event.recipes.modern_industrialization.electrolyzer({
		eu: 120,
		duration: 110,
		item_inputs: [
			{item: "geghilarity:lithium_chloride_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:lithium_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		]
	})
	
	// PPX7
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 576,
		item_inputs: [
			{item: "modern_industrialization:mozanite_dust", amount: 2}
		],
		item_outputs: [
			{item: "geghilarity:rare_earth_dust", amount: 1},
			{item: "geghilarity:phosphate_dust", amount: 1}
		]
	})
	
	// PPX8
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 360,
		item_inputs: [
			{item: "geghilarity:phosphate_dust", amount: 5}
		],
		item_outputs: [
			{item: "geghilarity:phosphorus_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:oxygen", amount: 4000}
		]
	})
	
	event.remove({id: `modern_industrialization:materials/centrifuge/mozanite_tiny_dust`})
	
	// NU01
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:rare_earth_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 3000},
			{fluid: "geghilarity:sodium_hydroxide_solution", amount: 3000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:rare_earth_hydroxides_solution", amount: 1000},
			{fluid: "modern_industrialization:hydrogen", amount: 3000}
		]
	})
	
	// NU02
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:rare_earth_hydroxides_solution", amount: 1000},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 3000}
		],
		item_outputs: [
			{item: "geghilarity:thorium-uranium_sludge_dust", amount: 2}
		],
		fluid_outputs: [
			{fluid: "geghilarity:rare_earth_chloride_solution", amount: 3000},
			{fluid: "geghilarity:sodium_hydroxide_solution", amount: 3000}
		]
	})
	
	// NU03
	event.recipes.modern_industrialization.centrifuge({
		eu: 480,
		duration: 250,
		item_inputs: [ 
			{item: "geghilarity:thorium-uranium_sludge_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 500}
		],
		item_outputs: [
			{item: "geghilarity:thorium_oxide_dust", amount: 2},
			{item: "geghilarity:tiny_thorium_dust", amount: 1, probability: 0.25},
			{item: "modern_industrialization:uranium_tiny_dust", amount: 1, probability: 0.25}
		]
	})	
	
	// NU04
	event.recipes.modern_industrialization.blaster_furnace({
		eu: 120,
		duration: 150,
		item_inputs: [ 
			{item: "geghilarity:calcium_chloride_dust", amount: 3},
			{item: "geghilarity:thorium_oxide_dust", amount: 2}
		],
		item_outputs: [
			{item: "geghilarity:thorium_dust", amount: 1},
			{item: "geghilarity:quicklime_dust", amount: 2}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:chlorine", amount: 2000}
		]
	})

	event.remove({id: `modern_industrialization:materials/centrifuge/mozanite_dust`})	
	
	// NU0X
	event.recipes.modern_industrialization.centrifuge({
		eu: 480,
		duration: 250,
		fluid_inputs: [
			{fluid: "geghilarity:rare_earth_chloride_solution", amount: 3000}
		],
		item_outputs: [
			{item: "geghilarity:neodymium_oxide_dust", amount: 6},
			{item: "geghilarity:yttrium_oxide_dust", amount: 6},
			{item: "modern_industrialization:cadmium_dust", amount: 3}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:helium", amount: 300, probability: 0.5}
		]
	})
	
	// NU05
	event.recipes.modern_industrialization.blaster_furnace3({
		eu: 480,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:neodymium_oxide_dust", amount: 10},
			{item: "modern_industrialization:carbon_dust", amount: 3}
		],
		item_outputs: [
			{item: "modern_industrialization:neodymium_dust", amount: 4}
		],
		fluid_outputs: [
			{fluid: "geghilarity:carbon_dioxide", amount: 3000}
		]
	})
	
	// NU06
	event.recipes.modern_industrialization.blaster_furnace3({
		eu: 480,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:yttrium_oxide_dust", amount: 10},
			{item: "modern_industrialization:carbon_dust", amount: 3}
		],
		item_outputs: [
			{item: "modern_industrialization:yttrium_dust", amount: 4}
		],
		fluid_outputs: [
			{fluid: "geghilarity:carbon_dioxide", amount: 3000}
		]
	})
	
	event.remove({id: `modern_industrialization:materials/centrifuge/liquid_air`})
	
	// AI02
	event.recipes.modern_industrialization.centrifuge({
		eu: 5,
		duration: 1484,
		fluid_inputs: [
			{fluid: "modern_industrialization:liquid_air", amount: 53000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:nitrogen", amount: 40000},
			{fluid: "modern_industrialization:oxygen", amount: 11000},
			{fluid: "modern_industrialization:argon", amount: 1000},
			{fluid: "geghilarity:noble_gases", amount: 1000}
		]
	})
	
	// AI03
	event.recipes.modern_industrialization.centrifuge({
		eu: 5,
		duration: 680,
		fluid_inputs: [
			{fluid: "geghilarity:noble_gases", amount: 34000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:carbon_dioxide", amount: 21000},
			{fluid: "modern_industrialization:helium", amount: 9000},
			{fluid: "modern_industrialization:methane", amount: 3000},
			{fluid: "modern_industrialization:deuterium", amount: 1000}
		]
	})
	
	// AI04
	event.recipes.modern_industrialization.distillation_tower({
			eu: 510,
			duration: 600,
			fluid_inputs: [
				{fluid: "modern_industrialization:liquid_air", amount: 100000}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:nitrogen", amount: 78000},
				{fluid: "modern_industrialization:oxygen", amount: 20000},
				{fluid: "modern_industrialization:argon", amount: 1000},
				{fluid: "geghilarity:carbon_dioxide", amount: 500},
				{fluid: "geghilarity:neon", amount: 100},
				{fluid: "modern_industrialization:helium", amount: 50},
				{fluid: "modern_industrialization:methane", amount: 20},
				{fluid: "geghilarity:krypton", amount: 10},
				{fluid: "modern_industrialization:hydrogen", amount: 5},
				{fluid: "geghilarity:xenon", amount: 1}
			]
	})	
	
	// XXX1
	event.recipes.modern_industrialization.centrifuge({
		eu: 30,
		duration: 30,
		item_inputs: [
			{item: "geggy:glass_dust"}
		],
		item_outputs: [
			{item: "geghilarity:silicon_dioxide_dust"}
		]
	})
	
	// XXX2
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 20,
		fluid_inputs: [
			{fluid: "modern_industrialization:methane", amount: 1000}
		],
		item_outputs: [
			{item: "modern_industrialization:carbon_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 4000}
		]
	})
	
	// XXX3
	event.recipes.modern_industrialization.electrolyzer({
		eu: 60,
		duration: 84,
		fluid_inputs: [
			{fluid: "geghilarity:glycerol", amount: 1000}
		],
		item_outputs: [
			{item: "modern_industrialization:carbon_dust", amount: 3}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 8000},
			{fluid: "modern_industrialization:oxygen", amount: 3000}
		]
	})
	
	// XXX4
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 150,
		fluid_inputs: [
			{fluid: "modern_industrialization:methane", amount: 1000},
			{fluid: "minecraft:water", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 8000},
			{fluid: "geghilarity:carbon_dioxide", amount: 1000}
		]
	})
	
	// PB01
	event.recipes.modern_industrialization.mixer({
		eu: 2,
		duration: 500,
		fluid_inputs: [
			{fluid: "geghilarity:nitric_acid", amount: 1000},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:nitration_mixture", amount: 2000}
		]
	})
	
	// PB02
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 240,
		item_inputs: [
			{item: "geggy:selector_2", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:chlorine", amount: 2000},
			{fluid: "modern_industrialization:benzene", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:chlorobenzene", amount: 1000},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
		]
	})
	
	// PB03
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:chlorobenzene", amount: 1000},
			{fluid: "geghilarity:nitration_mixture", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:nitrochlorobenzene", amount: 1000},
			{fluid: "geghilarity:diluted_sulfuric_acid", amount: 1000}
		]
	})
	
	// PB04
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 1920,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:copper_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 2000},
			{fluid: "geghilarity:nitrochlorobenzene", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:dichlorobenzidine", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 4000}
		]
	})
	
	// PB05
	event.recipes.modern_industrialization.lcr({
		eu: 7680,
		duration: 100,
		item_inputs: [
			{item: "kubejs:zinc_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:dichlorobenzidine", amount: 1000},
			{fluid: "geghilarity:ammonia", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diaminobenzidine", amount: 1000},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 2000}
		]
	})
	
	// PB06
	event.recipes.modern_industrialization.lcr({
		eu: 7680,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "geghilarity:diphenyl_isophthalate", amount: 1000},
			{fluid: "geghilarity:diaminobenzidine", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:phenol", amount: 2000},
			{fluid: "geghilarity:polybenzimidazole", amount: 1000}
		]
	})
	
	// PB07
	event.recipes.modern_industrialization.dehy({
		eu: 8,
		duration: 40,
		item_inputs: [
			{item: "geggy:mold_plate", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:polybenzimidazole", amount: 144}
			],
		item_outputs: [
			{item: "geghilarity:polybenzimidazole_sheet", amount: 1}
		]
	})
	
	// PB08
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 800,
		item_inputs: [
			{item: "modern_industrialization:chromium_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:chromium_dioxide_dust", amount: 3}
		]
	})
	
	// PB09
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 60,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:chromium_dioxide_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:chromium_trioxide_dust", amount: 4}
		]
	})
	
	// PB10
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:potassium_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:nitric_acid", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:potassium_nitrate_dust", amount: 5}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 1000}
		]
	})
	
	// PB11
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:potassium_nitrate_dust", amount: 10},
			{item: "geghilarity:chromium_trioxide_dust", amount: 8}
		],
		item_outputs: [
			{item: "geghilarity:potassium_dichromate_dust", amount: 11}
		],
		fluid_outputs: [
			{fluid: "geghilarity:nitric_oxide", amount: 2000}
		]
	})
	
	// PB12
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 160,
		fluid_inputs: [
			{fluid: "geghilarity:nitric_oxide", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:nitrogen_dioxide", amount: 1000}
		]
	})
	
	// PB13
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 4000,
		fluid_inputs: [
			{fluid: "modern_industrialization:methane", amount: 2000},
			{fluid: "modern_industrialization:benzene", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:dimethylbenzene", amount: 1000},
			{fluid: "modern_industrialization:hydrogen", amount: 4000}
		]
	})
	
	// PB14
	event.recipes.modern_industrialization.distillation_tower({
		eu: 256,
		duration: 40,
		fluid_inputs: [
			{fluid: "geghilarity:wood_tar", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:benzene", amount: 400},
			{fluid: "modern_industrialization:toluene", amount: 100},
			{fluid: "geghilarity:dimethylbenzene", amount: 150},
			{fluid: "modern_industrialization:creosote", amount: 250},
			{fluid: "geghilarity:phenol", amount: 100}
		]
	})
	
	// PB15
	event.recipes.modern_industrialization.lcr({
		eu: 1920,
		duration: 900,
		item_inputs: [
			{item: "geghilarity:potassium_dichromate_dust", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:dimethylbenzene", amount: 9000},
			{fluid: "modern_industrialization:oxygen", amount: 54000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:phtalic_acid", amount: 9000}
		]
	})
	
	// PB16
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 30,
		duration: 240,
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000},
			{fluid: "geghilarity:chlorobenzene", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diluted_hydrochloric_acid", amount: 1000},
			{fluid: "geghilarity:phenol", amount: 1000}
		]
	})
	
	// PB17
	event.recipes.modern_industrialization.lcr({
		eu: 7680,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "geghilarity:phtalic_acid", amount: 1000},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000},
			{fluid: "geghilarity:phenol", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diphenyl_isophthalate", amount: 1000},
			{fluid: "geghilarity:diluted_sulfuric_acid", amount: 1000}
		]
	})
	
	// O1
	event.recipes.modern_industrialization.blaster_furnace3({
		eu: 30720,
		duration: 670,
		item_inputs: [ 
			{item: "geghilarity:osmium_dust", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:argon", amount: 50}
		],
		item_outputs: [
			{item: "geghilarity:hot_osmium_ingot", amount: 1}
		]
	})
	
	// O2
	event.recipes.modern_industrialization.vacuum_freezer({
		eu: 120,
		duration: 570,
		item_inputs: [
			{item: "geghilarity:hot_osmium_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:osmium_ingot", amount: 1}
		]
	})
	
	// O3
	event.recipes.modern_industrialization.compressor({
		eu: 24,
		duration: 190,
		item_inputs: [
			{item: "geghilarity:osmium_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:osmium_plate", amount: 1}
		]
	})
	
	// O4
	event.recipes.modern_industrialization.compressor({
		eu: 24,
		duration: 190,
		item_inputs: [
			{item: "geghilarity:osmium_plate", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:osmium_curved_plate", amount: 1}
		]
	})
	
	// O5
	event.recipes.modern_industrialization.packer({
		eu: 96,
		duration: 380,
		item_inputs: [
			{item: "geghilarity:osmium_plate", amount: 2}
		],
		item_outputs: [	
			{item: "geghilarity:double_osmium_plate", amount: 1}
		]
	})
	
	// AL1
	event.recipes.modern_industrialization.mixer({
		eu: 30,
		duration: 764,
		item_inputs : [
			{item: "modern_industrialization:iridium_dust", amount: 3},
			{item: "geghilarity:osmium_dust", amount: 1}
		],
		item_outputs :[
			{item: "geghilarity:osmiridium_dust", amount: 4}
		]
	})
	
	// AL2
	event.recipes.modern_industrialization.mixer({
		eu: 7680,
		duration: 484,
		item_inputs : [
			{item: "geghilarity:naquadah_dust", amount: 2},
			{item: "geghilarity:osmiridium_dust", amount: 1},
			{item: "geghilarity:trinium_dust", amount: 1}
		],
		item_outputs :[
			{item: "geghilarity:naquadah_alloy_dust", amount: 4}
		]
	})
	
	// AL3
	event.recipes.modern_industrialization.mixer({
		eu: 30,
		duration: 2224,
		item_inputs : [
			{item: "geghilarity:palladium_dust", amount: 6},
			{item: "geghilarity:naquadah_dust", amount: 4},
			{item: "geghilarity:indium_dust", amount: 2},
			{item: "geghilarity:osmium_dust", amount: 1}
		],
		item_outputs :[
			{item: "geghilarity:zpm_super_base_dust", amount: 13}
		]
	})
	
	// TI1
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 120,
		item_inputs : [
			{item: "modern_industrialization:tungsten_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:chlorine", amount: 6000}
		],
		item_outputs :[
			{item: "geghilarity:tungsten_hexachloride_dust", amount: 7}
		]
	})
	
	// TI2
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 480,
		duration: 100,
		item_inputs : [
			{item: "geghilarity:tungsten_hexachloride_dust", amount: 7}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 2000},
			{fluid: "modern_industrialization:methane", amount: 1000}
		],
		item_outputs :[
			{item: "geghilarity:tungstencarbide_dust", amount: 2}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 6000}
		]
	})
	
	// TI3
	event.recipes.modern_industrialization.mixer({
		eu: 30,
		duration: 820,
		item_inputs : [
			{item: "geghilarity:tungstencarbide_dust", amount: 7},
			{item: "modern_industrialization:titanium_dust", amount: 3}
		],
		item_outputs :[
			{item: "geghilarity:tungsten_titanium_carbide_dust", amount: 10}
		]
	})
	
	// TI4
	event.recipes.modern_industrialization.mixer({
		eu: 30,
		duration: 820,
		item_inputs : [
			{item: "geghilarity:tungsten_titanium_carbide_dust", amount: 3},
			{item: "geghilarity:jasper_dust", amount: 3}
		],
		item_outputs :[
			{item: "geghilarity:titan_steel_dust", amount: 6}
		]
	})
		
})

