//onEvent('recipes', event => {
ServerEvents.recipes(event => {
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 300,
		item_inputs : [
			{item: "modern_industrialization:fire_clay_dust", amount: 3}
		],
		item_outputs :[
			{item: "geggy:compressed_fireclay", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
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
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 300,
		item_inputs : [
			{item: "minecraft:brick", amount: 4}
		],
		item_outputs :[
			{item: "minecraft:bricks", amount: 1}
		]
	})

	event.custom({ 
		type: "modern_industrialization:blast_furnace",
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
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
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
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
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
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
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
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
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
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
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
	
	event.remove({type: "modern_industrialization:packer", output: `modern_industrialization:fire_clay_bricks`})
	event.custom({ 
		type: "modern_industrialization:packer",eu: 2, duration: 100,item_inputs: [{item: "modern_industrialization:fire_clay_brick", amount: 4},{item: "geggy:kelp_dust", amount: 1}],
			item_outputs: [{item: "modern_industrialization:fire_clay_bricks", amount: 1}]})
	
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 30,
		item_inputs: [ 
			{item: "minecraft:clay_ball", amount: 1}
		],
		item_outputs: [
			{item: "geggy:clay_dust", amount: 1}
		]
	})	
	event.custom({ 
		type: "modern_industrialization:macerator",
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
	event.custom({ 
		type: "modern_industrialization:macerator",
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
	
	// start
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 8,
		duration: 1600,
		fluid_inputs: [ 
			{fluid: "geghilarity:air", amount: 10000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:nitrogen", amount: 3900},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})	

	// a1
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
		
	// event.remove modern_industrialization:materials/electrolyzer/salt_electrolysis	
	event.remove({type: "modern_industrialization:electrolyzer", output: `modern_industrialization:sodium_dust`})
	event.remove({type: "modern_industrialization:electrolyzer", input: `minecraft:water`})
	
	// 1
	event.remove({id: "modern_industrialization:materials/electrolyzer/water"})
	event.custom({ 
		type: "modern_industrialization:elecell",
			eu: 30,
			duration: 1500,
			item_inputs: [ 
				{item: "geghilarity:nickel_rod", amount: 1, probability: 0.0},
				{item: "modern_industrialization:iron_rod", amount: 1, probability: 0.0}
			],
			fluid_inputs: [ 
				{fluid: "minecraft:water", amount: 3000}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:hydrogen", amount: 2000},
				{fluid: "modern_industrialization:oxygen", amount: 1000}
				
			]
		})
	
	// 2
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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

	// hydrogen oxygen loop, only uses water
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 60,
		duration: 144,
		item_inputs: [ 
			{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
		],
		item_outputs: [
			{item : "modern_industrialization:sodium_dust", amount: 1}
		],	
		fluid_outputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1000},
			{fluid: "modern_industrialization:hydrogen", amount: 1000}
		]
	})
		
	// 3
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 100,
		item_inputs : [
			{item: "geghilarity:potassium_dust", amount: 2},
			{item: "modern_industrialization:sulfur_dust", amount: 2}
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
		
	event.custom({ 
		type: "minecraft:blasting",

			cookingtime: 400,
			ingredient: [ 
				{item: "geggy:precious_ore"}
			],
			result: "geghilarity:precious_ingot"
		})	
		
	event.custom({ 
		type: "minecraft:blasting",

			cookingtime: 400,
			ingredient: [ 
				{item: "geggy:nether_precious_ore"}
			],
			result: "geghilarity:precious_ingot"
		})

	event.custom({ 
		type: "minecraft:blasting",

			cookingtime: 400,
			ingredient: [ 
				{item: "geggy:deepslate_precious_ore"}
			],
			result: "geghilarity:precious_ingot"
		})

	// need create mechanism
	event.custom({ 
		type: "minecraft:smelting",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:lcr",
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
	
	// 07 
	event.custom({ 
		type: "modern_industrialization:sifter",
			eu: 24,
			duration: 300,
			item_inputs: [ 
				{item: "geghilarity:platinum_salt_dust", amount: 1}
			],
			item_outputs :
			[
				{item: "geghilarity:refined_platinum_salt_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:refined_platinum_salt_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:refined_platinum_salt_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:refined_platinum_salt_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:refined_platinum_salt_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:refined_platinum_salt_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:refined_platinum_salt_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:refined_platinum_salt_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:refined_platinum_salt_dust", amount: 1, probability: 0.15}
			]
		})

	// 08
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
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
	event.custom({ 
		type: "modern_industrialization:lcr",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:lcr",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
		
	// 13 
	event.custom({ 
		type: "modern_industrialization:sifter",
			eu: 24,
			duration: 300,
			item_inputs: [ 
				{item: "geghilarity:palladium_salt_dust", amount: 1}
			],
			item_outputs :
			[
				{item: "geghilarity:palladium_metallic_powder_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:palladium_metallic_powder_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:palladium_metallic_powder_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:palladium_metallic_powder_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:palladium_metallic_powder_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:palladium_metallic_powder_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:palladium_metallic_powder_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:palladium_metallic_powder_dust", amount: 1, probability: 0.1},
				{item: "geghilarity:palladium_metallic_powder_dust", amount: 1, probability: 0.15}
			]
		})	
		
	// 14a 
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
			eu: 8,
			duration: 80,
			item_inputs: [ 
				{item: "minecraft:coal", amount: 1}
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
			eu: 8,
			duration: 80,
			item_inputs: [ 
				{item: "modern_industrialization:carbon_dust", amount: 1}
			],
			fluid_inputs: [
				{fluid: "modern_industrialization:oxygen", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:carbon_monoxide", amount: 1000}
			]	
		})
		
	// 15
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
			eu: 96,
			duration: 42,
			fluid_inputs: [
				{fluid: "modern_industrialization:oxygen", amount: 7000}
			],
			item_inputs: [ 
				{item: "geghilarity:potassium_dust", amount: 2},
				{item: "modern_industrialization:sulfur_dust", amount: 2}
			],
			item_outputs :
			[
				{item: "geghilarity:potassium_disulfate_dust", amount: 11}
			]
		})	

	// 27 IMAGE
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:dehy",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:lcr",
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

	// 37 
	event.custom({ 
		type: "modern_industrialization:sifter",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:dehy",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
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
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
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
		
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 1920,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:acidic_osmium_tetroxide_solution", amount: 2000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:osmium_tetroxide_solution", amount: 1000}
		]
	})	

	// 48
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:lcr",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
			eu: 60,
			duration: 2496,
			item_inputs: [ 
				{item: "modern_industrialization:bauxite_dust", amount: 39}
			],
			item_outputs: [
				{item: "geghilarity:rutile_dust", amount: 6},
				{item: "geghilarity:alumina", amount: 16}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:hydrogen", amount: 10000},
				{fluid: "modern_industrialization:oxygen", amount: 11000}
			]
		})
		
	// P1
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
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
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 60,
		item_inputs: [ 
			{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
		],
		fluid_inputs: [
				{fluid: "minecraft:water", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 1000}
		]
	})	
	
	// PX1
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 240,
		item_inputs: [ 
			{item: "modern_industrialization:bauxite_dust", amount: 39}
		],
		fluid_inputs: [
				{fluid: "modern_industrialization:sodium_hydroxide", amount: 24000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sodium_hydroxide_bauxite", amount: 24000}
		]
	})
	
	// PX2t fluid heater > centrifuge
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 120,
		duration: 240,
		fluid_inputs: [ 
			{fluid: "geghilarity:pure_aluminium_hydroxide_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:aluminium_hydroxide", amount: 14}
		]
	})
	
	// PXX2 
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 240,
		duration: 240,
		item_inputs: [ 
			{item: "geghilarity:aluminium_hydroxide", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:pure_aluminium_hydroxide_solution", amount: 4000}
		],
		item_outputs: [
			{item: "geghilarity:aluminium_hydroxide", amount: 56}
		]
	})
	
	// PXX3
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
			{item: "geghilarity:aluminium_trifluoride_dust", amount: 4}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:oxygen", amount: 6000}
		]
	})
	
	// PXX5
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 120,
		duration: 140,
		item_inputs: [ 
			{item: "geghilarity:aluminium_trifluoride_dust", amount: 8}
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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

	// T6
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
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
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace2",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace2",
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
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 120,
		duration: 188,
		item_inputs: [
			{item: "geghilarity:hot_tungstensteel_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:tungstensteel_ingot", amount: 1}
		]
	})
		
	// X3
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
			eu: 30,
			duration: 688,
			item_inputs: [ 
				{item: "geggy:clay_dust", amount: 13}
			],
			item_outputs: [
				{item: "modern_industrialization:sodium_dust", amount: 2},
				{item: "geghilarity:lithium_dust", amount: 1},
				{item: "geghilarity:biotite_dust", amount: 1},
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
	event.custom({ 
		type: "modern_industrialization:macerator",
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
	event.custom({ 
		type: "modern_industrialization:macerator",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
			eu: 30,
			duration: 480,
			item_inputs: [ 
				{item: "modern_industrialization:carbon_dust", amount: 2}
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
	event.custom({ 
		type: "modern_industrialization:pyro",
		eu: 64,
		duration: 640,
		item_inputs: [ 
			{tag: "minecraft:logs", amount: 16}
		],
		item_outputs: [
			{item: "minecraft:charcoal", amount: 20}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:wood_tar", amount: 1500}
		]
	})	

	// E3
	event.custom({ 
		type: "modern_industrialization:distillery",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 30,
		duration: 120,
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:compressor",
			eu: 2,
			duration: 200,
			item_inputs: [ 
				{item: "minecraft:sugar_cane", amount: 8}
			],
			item_outputs: [
				{item: "geggy:plant_ball", amount: 1}
			]
		})	
	// E9B gtnh	
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:plant_ball", amount: 2}
		],
		item_outputs: [
			{item: "geggy:plant_mass", amount: 2},
			{item: "geggy:plant_mass", amount: 1, probability: 0.5},
			{item: "geggy:plant_mass", amount: 1, probability: 0.25}
		]
	})	
		
	// E10 centrifuge
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:pyro",
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
	event.custom({ 
		type: "modern_industrialization:distillery",
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
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
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
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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

	// TO FIX 1.19
	//E16 tinkers cursed epoxy into sheet
	event.custom({ 
		type: "modern_industrialization:dehy",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
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

	// SUSY EPOXY TAKEOVER
	
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 30,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:acetaldehyde", amount: 1000},
			{fluid: "geghilarity:ammonia", amount: 2000},
			{fluid: "geghilarity:glyoxal", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:2-methylmidazole_dust", amount: 12}
		]
	})	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 20,
		item_inputs: [ 
			{item: "geghilarity:2-methylmidazole_dust", amount: 1},
			{item: "geghilarity:dicyandiamide_dust", amount: 2},
			{item: "geghilarity:phthalic_anhydride_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:epoxy_curing_mixture_dust", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:calcium_carbide_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:nitrogen", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:calcium_cyanamide_dust", amount: 4},
			{item: "modern_industrialization:carbon_dust", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:calcium_cyanamide_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "geghilarity:carbon_dioxide", amount: 1000},
			{fluid: "geghilarity:distilled_water", amount: 1000}
		],
		item_outputs: [
			{item: "magick:calcite_dust", amount: 5},
			{item: "geghilarity:cyanamide_dust", amount: 5}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:cyanamide_dust", amount: 10}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:dicyandiamide_dust", amount: 10}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 60,
		duration: 500,
		fluid_inputs: [
			{fluid: "geghilarity:xylene_mixture", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:o-xylene", amount: 200},
			{fluid: "geghilarity:m-p-xylene_mixture", amount: 800}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:xylene_mixture", amount: 200}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:o-xylene", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fluidized_bed_reactor",
		eu: 240,
		duration: 300,
		item_inputs: [ 
			{item: "geghilarity:vanadium_pentoxide_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 6000},
			{fluid: "geghilarity:o-xylene", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:phthalic_anhydride_dust", amount: 15}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:steam", amount: 3000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 200,
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000},
			{fluid: "modern_industrialization:styrene", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:styrene_solution", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:poly_tank",
		eu: 60,
		duration: 300,
		item_inputs: [ 
			{item: "geghilarity:tiny_potassium_persulfate_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:styrene_solution", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:polystyrene_solution", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 260,
		fluid_inputs: [
			{fluid: "geghilarity:polystyrene_solution", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:polystyrene_pulp", amount: 7}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 6,
		item_inputs: [ 
			{item: "geghilarity:polystyrene_pulp", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:polystyrene", amount: 144}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 120,
		duration: 5,
		fluid_inputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 50, probability: 0.0},
			{fluid: "modern_industrialization:ethylbenzene", amount: 50},
			{fluid: "modern_industrialization:ethylene", amount: 50}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:diethylbenzene", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fluidized_bed_reactor",
		eu: 120,
		duration: 300,
		item_inputs: [ 
			{item: "geghilarity:chromium_trioxide_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:diethylbenzene", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:divinylbenzene", amount: 1000},
			{fluid: "modern_industrialization:hydrogen", amount: 4000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:poly_tank",
		eu: 120,
		duration: 160,
		item_inputs: [ 
			{item: "geghilarity:tiny_potassium_persulfate_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:divinylbenzene", amount: 1000},
			{fluid: "geghilarity:polystyrene", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:crosslinked_polystyrene-divinylbenzene", amount: 1008}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 7,
		duration: 98,
		item_inputs: [ 
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:crosslinked_polystyrene-divinylbenzene", amount: 144}
		],
		item_outputs: [
			{item: "geghilarity:crosslinked_polystyrene-divinylbenzene_nugget", amount: 9}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 120,
		duration: 5,
		fluid_inputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 50},
			{fluid: "geghilarity:sulfur_trioxide", amount: 50}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:oleum", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:crosslinked_polystyrene-divinylbenzene_round", amount: 32}
		],
		fluid_inputs: [
			{fluid: "geghilarity:oleum", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:ag_50w-x8_resin_beads", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 480,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:ag_50w-x8_resin_beads", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:acetone", amount: 1000},
			{fluid: "geghilarity:phenol", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:bisphenol_a_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "minecraft:water", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:bisphenol_a_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:bisphenol_a", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 5,
		fluid_inputs: [ 
			{fluid: "geghilarity:glycerol", amount: 50},
			{fluid: "geghilarity:hydrogen_chloride", amount: 100},
			{fluid: "geghilarity:acetic_acid", amount: 10}
		],
		fluid_outputs: [
			{fluid: "geghilarity:chlorinated_glycerol", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 120,
		item_inputs: [ 
			{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:chlorinated_glycerol", amount: 4000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:epichlorohydrin_solution", amount: 5000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 120,
		fluid_inputs: [ 
			{fluid: "geghilarity:epichlorohydrin_solution", amount: 5000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:acetic_acid", amount: 200},
			{fluid: "geghilarity:epichlorohydrin", amount: 1000},
			{fluid: "minecraft:water", amount: 3000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 120,
		fluid_inputs: [ 
			{fluid: "geghilarity:epichlorohydrin_solution", amount: 5000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:epichlorohydrin", amount: 500}
		]	
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 8,
		fluid_inputs: [ 
			{fluid: "modern_industrialization:chlorine", amount: 100},
			{fluid: "modern_industrialization:propene", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hydrogen_chloride", amount: 50},
			{fluid: "geghilarity:allyl_chloride", amount: 50}
		]	
	})
	event.custom({ 
		type: "modern_industrialization:bubble_reactor",
		eu: 30,
		duration: 6,
		fluid_inputs: [ 
			{fluid: "modern_industrialization:chlorine", amount: 100},
			{fluid: "minecraft:water", amount: 50},
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 50, probability: 0.0}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hydrogen_chloride", amount: 50},
			{fluid: "geghilarity:hypochlorous_acid", amount: 50}
		]	
	})
	event.custom({ 
		type: "modern_industrialization:bubble_reactor",
		eu: 30,
		duration: 5,
		fluid_inputs: [ 
			{fluid: "geghilarity:hypochlorous_acid", amount: 50},
			{fluid: "geghilarity:allyl_chloride", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:allyl_alcohol_mix", amount: 50}
		]	
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 120,
		item_inputs: [ 
			{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:allyl_alcohol_mix", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diluted_epichlorohydrin", amount: 2000}
		]	
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 160,
		fluid_inputs: [ 
			{fluid: "geghilarity:diluted_epichlorohydrin", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:epichlorohydrin", amount: 500}
		]	
	})
	event.custom({ 
		type: "modern_industrialization:poly_tank",
		eu: 480,
		duration: 25,
		item_inputs: [ 
			{item: "geghilarity:bisphenol_a_dust", amount: 4},
			{item: "geghilarity:epoxy_curing_mixture_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 4000},
			{fluid: "geghilarity:epichlorohydrin", amount: 4800}
		],
		item_outputs: [
			{item: "geghilarity:wet_epoxy_dust", amount: 28}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diluted_saltwater", amount: 8000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:poly_tank",
		eu: 480,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:bisphenol_a_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 1000},
			{fluid: "geghilarity:diethylenetriamine", amount: 100},
			{fluid: "geghilarity:epichlorohydrin", amount: 1200}
		],
		item_outputs: [
			{item: "geghilarity:wet_epoxy_dust", amount: 7}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diluted_saltwater", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:poly_tank",
		eu: 480,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:bisphenol_a_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 1000},
			{fluid: "geghilarity:aminoethylpiperazine", amount: 50},
			{fluid: "geghilarity:epichlorohydrin", amount: 1200}
		],
		item_outputs: [
			{item: "geghilarity:wet_epoxy_dust", amount: 7}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diluted_saltwater", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:poly_tank",
		eu: 480,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:bisphenol_a_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 1000},
			{fluid: "geghilarity:triethylenetetramine", amount: 50},
			{fluid: "geghilarity:epichlorohydrin", amount: 1200}
		],
		item_outputs: [
			{item: "geghilarity:wet_epoxy_dust", amount: 7}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diluted_saltwater", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:poly_tank",
		eu: 480,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:bisphenol_a_dust", amount: 4},
			{item: "geghilarity:phthalic_anhydride_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 4000},
			{fluid: "geghilarity:epichlorohydrin", amount: 4800}
		],
		item_outputs: [
			{item: "geghilarity:wet_epoxy_dust", amount: 28}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diluted_saltwater", amount: 8000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:poly_tank",
		eu: 480,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:bisphenol_a_dust", amount: 4},
			{item: "geghilarity:dicyandiamide_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 4000},
			{fluid: "geghilarity:epichlorohydrin", amount: 4800}
		],
		item_outputs: [
			{item: "geghilarity:wet_epoxy_dust", amount: 28}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diluted_saltwater", amount: 8000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:vacuum_chamber",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:nichrome_spring", amount: 1, probability: 0.0},
			{item: "geghilarity:wet_epoxy_dust", amount: 7}
		],
		item_outputs: [
			{item: "geghilarity:epoxy_resin_pulp", amount: 7}
		]
	})
	// temp?
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:epoxy_resin_pulp", amount: 4}
		],
		fluid_outputs: [
			{fluid: "geghilarity:epoxy_resin", amount: 144}
		]
	})

	// X8 
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.remove({id: 'modern_industrialization:materials/centrifuge/chromium_crushed_dust'})
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
			eu: 60,
			duration: 576,
			item_inputs: [ 
				{item: "modern_industrialization:ruby_dust", amount: 12}
			],
			item_outputs: [
				{item: "modern_industrialization:chromium_crushed_dust", amount: 1},
				{item: "geghilarity:alumina", amount: 2}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:oxygen", amount: 3000}
			]
		})	

	// X10 
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
		
	// X11 SUSY
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 30,
		duration: 1,
		fluid_inputs: [
			{fluid: "geghilarity:salt_water", amount: 50},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 50}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:hydrogen_chloride", amount: 50},
			{fluid: "geghilarity:sodium_bisulfate_solution", amount: 50}
		]
	})	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 60,
		fluid_inputs: [
			{fluid: "geghilarity:sodium_bisulfate_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:sodium_bisulfate_dust", amount: 7}
		]
	})
		
	// AM1
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
			eu: 120,
			duration: 120,
			item_inputs: [ 
				{item: "geghilarity:nickel_oxide_alumina_catalyst", probability: 0.0}
			],
			fluid_inputs: [
				{fluid: "geghilarity:air", amount: 1000},
				{fluid: "modern_industrialization:steam", amount: 960},
				{fluid: "modern_industrialization:methane", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:rich_nitrogen_mixture", amount: 3000}
			]
		})	
		
	// AM1b
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
			eu: 120,
			duration: 30,
			fluid_inputs: [
				{fluid: "geghilarity:ethanolamine", amount: 250},
				{fluid: "geghilarity:oxidized_rich_nitrogen_mixture", amount: 250},
				{fluid: "minecraft:water", amount: 250}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:purified_rich_nitrogen_mixture", amount: 250},
				{fluid: "geghilarity:carbonated_ethanolamine", amount: 500}
			]
	})	
	
	// AM4 adapted
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 120,
		duration: 40,
		fluid_inputs: [
			{fluid: "geghilarity:carbonated_ethanolamine", amount: 500}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:ethanolamine", amount: 250},
			{fluid: "geghilarity:carbon_dioxide", amount: 125},
			{fluid: "minecraft:water", amount: 125}
		]
	})
	
	// AMR2
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 64,
		duration: 50,
		fluid_inputs: [
			{fluid: "geghilarity:carbonated_ethanolamine", amount: 500}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:ethanolamine", amount: 250}
		]
	})	
		
	// AME2
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
		
	// AME5 lowered eu for alu and avoid kanthal (chrome)
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
			eu: 32,
			duration: 1200,
			item_inputs: [ 
				{item: "geghilarity:aluminium_hydroxide", amount: 14}
			],
			item_outputs: [
				{item: "geghilarity:alumina", amount: 5},
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:steam", amount: 3000}
			]
	})	
	
	// A+1
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	// SUSY AX1 ++
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 10,
		item_inputs: [
			{item: "geghilarity:silver_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 50},
			{fluid: "modern_industrialization:ethylene", amount: 50}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:impure_ethylene_oxide", amount: 45},
			{fluid: "geghilarity:carbon_dioxide", amount: 5}
		]	
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 16,
		fluid_inputs: [
			{fluid: "geghilarity:impure_ethylene_oxide", amount: 36}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:ethylene_oxide", amount: 32}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 1,
		fluid_inputs: [
			{fluid: "geghilarity:ethylene_oxide", amount: 150},
			{fluid: "geghilarity:ammonia", amount: 300}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:ethanolamine_mix", amount: 150}
		]	
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 30,
		duration: 16,
		fluid_inputs: [
			{fluid: "geghilarity:ethanolamine_mix", amount: 120}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:ethanolamine", amount: 40}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:packer",eu: 16, duration: 48,item_inputs: [{item: "modern_industrialization:titanium_rod", amount: 2}],
		item_outputs: [{item: "geghilarity:long_titanium_rod", amount: 1}]})

	// ethylene nerf
	event.remove({id: "modern_industrialization:oil/chemical_reactor/ethanol_to_ethylene"})

	// LCR1
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 30,
		duration: 3500,
		item_inputs: [ 
			{item: "modern_industrialization:carbon_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 4000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:methane", amount: 1000}
		]	
	})

	// LCR2
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
			eu: 30,
			duration: 80,
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
	event.custom({ 
		type: "modern_industrialization:macerator",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 60,
		duration: 1760,
		item_inputs: [ 
			{item: "geghilarity:biotite_dust", amount: 22}
		],
		item_outputs: [
			{item: "geghilarity:potassium_dust", amount: 1},
			{item: "geghilarity:magnesium_dust", amount: 3},
			{item: "geghilarity:alumina", amount: 3},
			{item: "modern_industrialization:silicon_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:fluorine", amount: 2000},
			{fluid: "modern_industrialization:oxygen", amount: 10000}
		]
	})
	
	// FLUO+
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	
	/*
	// LCR6
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	*/	
		
	// LCR1xa
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
			eu: 8,
			duration: 40,
			item_inputs: [ 
				{item: "minecraft:coal", amount: 1}
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
			eu: 8,
			duration: 40,
			item_inputs: [ 
				{item: "modern_industrialization:carbon_dust", amount: 1}
			],	
			fluid_inputs: [
				{fluid: "modern_industrialization:oxygen", amount: 2000}
			],
			fluid_outputs: [	
				{fluid: "geghilarity:carbon_dioxide", amount: 1000}
			]	
	})
	
	// LCR2x eu from 200 to 150, to make ethylene craftable with basic upgrades
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
			eu: 120,
			duration: 1200,
			fluid_inputs: [
				{fluid: "modern_industrialization:sulfuric_acid", amount: 1000},
				{fluid: "modern_industrialization:ethanol", amount: 1000}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:ethylene", amount: 1000},
				{fluid: "geghilarity:diluted_sulfuric_acid", amount: 2000}
			]	
	})	
	
	// LCR4x
	event.custom({ 
		type: "modern_industrialization:distillery",
			eu: 30,
			duration: 1200,
			fluid_inputs: [
				{fluid: "geghilarity:diluted_sulfuric_acid", amount: 2000}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
			]
		})
	
	/*	
	// LCR6x
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	*/
	
	event.custom({ 
		type: "modern_industrialization:poly_tank",
		eu: 30,
		duration: 75,
		item_inputs: [
			{item: "geghilarity:philips_catalyst_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:ethylene", amount: 144},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:polyethylene", amount: 216}
		]
	})
	

	// LCR8x
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
			eu: 30,
			duration: 800,
			fluid_inputs: [
				{fluid: "geghilarity:titanium_tetrachloride", amount: 100},
				{fluid: "modern_industrialization:ethylene", amount: 2160},
				{fluid: "geghilarity:air", amount: 7500}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:polyethylene", amount: 3240}
			]	
	})	

	// LCR9x
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
			eu: 30,
			duration: 800,
			fluid_inputs: [
				{fluid: "geghilarity:titanium_tetrachloride", amount: 100},
				{fluid: "modern_industrialization:ethylene", amount: 2160},
				{fluid: "modern_industrialization:oxygen", amount: 7500}
			],
			fluid_outputs: [	
				{fluid: "modern_industrialization:polyethylene", amount: 4320}
			]	
	})	
	
	event.custom({ 
		type: "modern_industrialization:poly_tank",
		eu: 30,
		duration: 30,
		item_inputs: [
			{item: "geghilarity:ziegler_natta_catalyst_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:ethylene", amount: 144},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:polyethylene", amount: 288}
		]
	})
	
	// P0
	event.custom({ 
		type: "modern_industrialization:pyro",
		eu: 120,
		duration: 720,
		item_inputs: [ 
			{item: "minecraft:coal", amount: 12}
		],
		item_outputs: [
			{item: "geghilarity:ashes", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:coal_tar", amount: 2200}
		]
	})
	
	// P1
	event.custom({ 
		type: "modern_industrialization:pyro",
		eu: 96,
		duration: 440,
		item_inputs: [ 
			{item: "minecraft:coal", amount: 16}
		],
		item_outputs: [
			{item: "modern_industrialization:coke_dust", amount: 20}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:creosote", amount: 1000}
		]
	})
	
	// P2
	event.custom({ 
		type: "modern_industrialization:pyro",
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
	event.custom({ 
		type: "modern_industrialization:pyro",
		eu: 64,
		duration: 440,
		item_inputs: [ 
			{tag: "minecraft:logs", amount: 16}
		],
		item_outputs: [
			{item: "minecraft:charcoal", amount: 20}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:creosote", amount: 4000}
		]
	})

	event.custom({ 
		type: "modern_industrialization:pyro",
		eu: 64,
		duration: 320,
		fluid_inputs: [
			{fluid: "geghilarity:biomass", amount: 3000}
		],
		item_outputs: [	
			{item: "geghilarity:dark_ashes", amount: 8}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:unscrubbed_wood_gas", amount: 3000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 160,
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 200},
			{fluid: "geghilarity:unscrubbed_wood_gas", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:creosote", amount: 50},
			{fluid: "geghilarity:wood_gas", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 12,
		duration: 200,
		fluid_inputs: [
			{fluid: "modern_industrialization:creosote", amount: 500}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:phenol", amount: 50}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 8,
		duration: 30,
		item_inputs: [ 
			{item: "minecraft:charcoal", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:charcoal_dust", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:dehy",
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:implosion_compressor",
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
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
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
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
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
	event.custom({ 
		type: "modern_industrialization:dehy",
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
	event.custom({ 
		type: "modern_industrialization:dehy",
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
	
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:macerator",
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
	event.custom({ 
		type: "modern_industrialization:macerator",
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
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	
	event.custom({ 
		type: "modern_industrialization:macerator",
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
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:lcr",
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
	event.custom({ 
		type: "modern_industrialization:lcr",
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
	event.custom({ 
		type: "modern_industrialization:lcr",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:lcr",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace3",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace3",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace3",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace3",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:distillery",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 60,
		duration: 6864,
		item_inputs: [ 
			{item: "geghilarity:mica_dust", amount: 22}
		],
		item_outputs: [
			{item: "geghilarity:caesium_dust", amount: 2},
			{item: "geghilarity:alumina", amount: 2},
			{item: "modern_industrialization:silicon_dust", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 2000},
			{fluid: "modern_industrialization:oxygen", amount: 12000}
		]
	})
	
	// NC21
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:dehy",
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
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
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
	event.custom({ 
		type: "modern_industrialization:dehy",
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
	event.custom({ 
		type: "modern_industrialization:dehy",
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
	event.custom({ 
		type: "modern_industrialization:dehy",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:dehy",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:lcr",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace5",
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
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
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
	event.custom({ 
		type: "modern_industrialization:lcr",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	
	event.custom({ 
		type: "modern_industrialization:macerator",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
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
	event.custom({ 
		type: "modern_industrialization:macerator",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:dehy",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace3",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:dehy",
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
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:fextract",
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
	event.custom({ 
		type: "modern_industrialization:salloy",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 30,
		duration: 80,
		item_inputs: [
			{item: "geggy:flint_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:silicon_dioxide_dust", amount: 1}
		]
	})
	
	// C4 needed for basic upgrades, requires upgrade, so jumpstarted by created at a loss
	event.custom({ 
		type: "modern_industrialization:fextract",
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
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
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
	event.custom({ 
		type: "modern_industrialization:salloy",
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
	event.custom({ 
		type: "modern_industrialization:salloy",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 8,
		duration: 400,
		item_inputs: [ 
			{item: "geghilarity:mica_dust", amount: 3},
			{item: "geggy:rubber_pulp", amount: 1}
		],
	item_outputs: [
			{item: "geghilarity:mica_based_pulp", amount: 4}
		]	
	})
	
	// C9
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:compressor",
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
	event.custom({ 
		type: "modern_industrialization:wiremill",
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:fextract",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	
	// C14c
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
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
	event.custom({ 
		type: "modern_industrialization:fextract",
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
	event.custom({ 
		type: "modern_industrialization:fextract",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace3",
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
	event.custom({ 
		type: "modern_industrialization:compressor",
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
	event.custom({ 
		type: "modern_industrialization:wiremill",
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace4",
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
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace4",
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
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:macerator",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",

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
	
	// PC01 TEMP autoclave > adv.centrifuge, 2 fluids in
	event.custom({ 
		type: "modern_industrialization:advanced_centrifuge",
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
	
	// PC02 TEMP chem.bath > dehy
	event.custom({ 
		type: "modern_industrialization:dehy",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace3",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:lcr",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace3",
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
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 480,
		duration: 20,
		fluid_inputs: [
			{fluid: "geghilarity:trioctylamine", amount: 1000},
			{fluid: "geghilarity:chloromethane", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:trioctylmethylammonium_chloride_dust", amount: 8}
		]		
	})
	
	// PC14
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:lcr",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:lcr",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 30,
		duration: 160,
		fluid_inputs: [
			{fluid: "geghilarity:coal_tar", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:naphthalene", amount: 400}
		]
	})
	
	// PX06A
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 5,	
		fluid_inputs: [
			{fluid: "geghilarity:methanol", amount: 50},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:chloromethane_solution", amount: 150}
		]
	})
	// PX06B
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 6,
		duration: 120,	
		fluid_inputs: [
			{fluid: "geghilarity:chloromethane_solution", amount: 120}
		],
		fluid_outputs: [
			{fluid: "geghilarity:chloromethane", amount: 40}
		]
	})
	// PX06C
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 5,	
		fluid_inputs: [
			{fluid: "modern_industrialization:methane", amount: 50},
			{fluid: "modern_industrialization:chlorine", amount: 250}
		],
		fluid_outputs: [
			{fluid: "geghilarity:chlorinated_methane_mixture", amount: 200}
		]
	})
	// PX06D
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 160,	
		fluid_inputs: [
			{fluid: "geghilarity:chlorinated_methane_mixture", amount: 4000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hydrogen_chloride", amount: 2500},
			{fluid: "geghilarity:chloromethane", amount: 250},
			{fluid: "geghilarity:dichloromethane", amount: 250},
			{fluid: "geghilarity:chloroform", amount: 250},
			{fluid: "geghilarity:carbon_tetrachloride", amount: 250}
		]
	})
	// PX06E
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 5,	
		fluid_inputs: [
			{fluid: "geghilarity:dichloromethane", amount: 50},
			{fluid: "modern_industrialization:chlorine", amount: 150}
		],
		fluid_outputs: [
			{fluid: "geghilarity:chlorinated_dichloromethane_mixture", amount: 150}
		]
	})
	// PX06F
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 160,	
		fluid_inputs: [
			{fluid: "geghilarity:chlorinated_dichloromethane_mixture", amount: 3000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hydrogen_chloride", amount: 1500},
			{fluid: "geghilarity:chloroform", amount: 500},
			{fluid: "geghilarity:carbon_tetrachloride", amount: 500}
		]
	})
	// PX06G
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 5,	
		fluid_inputs: [
			{fluid: "geghilarity:chloromethane", amount: 15},
			{fluid: "modern_industrialization:chlorine", amount: 60}
		],
		fluid_outputs: [
			{fluid: "geghilarity:chlorinated_chloromethane_mixture", amount: 50}
		]
	})
	// PX06H
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 160,	
		fluid_inputs: [
			{fluid: "geghilarity:chlorinated_chloromethane_mixture", amount: 5000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hydrogen_chloride", amount: 3000},
			{fluid: "geghilarity:dichloromethane", amount: 500},
			{fluid: "geghilarity:chloroform", amount: 500},
			{fluid: "geghilarity:carbon_tetrachloride", amount: 500}
		]
	})
	
	// PX07
	event.custom({ 
		type: "modern_industrialization:lcr",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 96,
		duration: 320,
		item_inputs: [ 
			{item: "modern_industrialization:carbon_dust", amount: 1}
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	
	// PX16
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
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
	
	// PX24 > SUSY
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:cobalt_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "geghilarity:carbon_monoxide", amount: 8000}
		],
		item_outputs: [
			{item: "geghilarity:dicobalt_octacarbonyl_dust", amount: 18}
		]
	})
	event.custom({ 
		type: "modern_industrialization:reaction_furnace",
		eu: 240,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:dicobalt_octacarbonyl_dust", amount: 18}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hot_high-pressure_hydrogen", amount: 2000},
			{fluid: "modern_industrialization:propene", amount: 1000},
			{fluid: "geghilarity:carbon_monoxide", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butyraldehide_mixture", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:butyraldehide_mixture", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butyraldehide", amount: 400}
		]
	})
	
	// PX25
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 480,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:rare_earth_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 3000},
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 3000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:rare_earth_hydroxides_solution", amount: 1000},
			{fluid: "modern_industrialization:hydrogen", amount: 3000}
		]
	})
	
	// NU02
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 3000}
		]
	})
	
	// NU03
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace3",
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
	event.custom({ 
		type: "modern_industrialization:blaster_furnace3",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
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
	event.custom({ 
		type: "modern_industrialization:centrifuge",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 30,
		duration: 240,
		fluid_inputs: [
			{fluid: "modern_industrialization:chlorine", amount: 2000},
			{fluid: "modern_industrialization:benzene", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:chlorobenzene", amount: 1000},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
		]
	})
	
	// SUSY plugin
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 60,
		item_inputs: [
			{item: "geggy:saltpeter", amount: 5}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:potassium_bisulfate_dust", amount: 7}
		],
		fluid_outputs: [
			{fluid: "geghilarity:nitric_acid", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 480,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "geghilarity:chlorobenzene", amount: 50},
			{fluid: "geghilarity:nitration_mixture", amount: 100},
			{fluid: "modern_industrialization:toluene", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:mixed_nitrochlorobenzene_solution", amount: 100}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 300,
		fluid_inputs: [ 
			{fluid: "geghilarity:mixed_nitrochlorobenzene_solution", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:mixed_nitrochlorobenzene_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diluted_sulfuric_acid", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 98,
		item_inputs: [
			{item: "geghilarity:mixed_nitrochlorobenzene_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:mixed_nitrochlorobenzene", amount: 144}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:mixed_nitrochlorobenzene", amount: 144}
		],
		item_outputs: [
			{item: "geghilarity:4-nitrochlorobenzene_dust", amount: 1, probability: 0.65}
		],
		fluid_outputs: [
			{fluid: "geghilarity:2-nitrochlorobenzene", amount: 48}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 120,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:palladium_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hot_high-pressure_hydrogen", amount: 2000},
			{fluid: "geghilarity:2-nitrochlorobenzene", amount: 288}
		],
		fluid_outputs: [
			{fluid: "geghilarity:2_2_dichlorohydrazobenzene_solution", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 120,
		duration: 10,
		fluid_inputs: [
			{fluid: "geghilarity:2_2_dichlorohydrazobenzene_solution", amount: 50},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:3_3_dichlorobenzidine_solution", amount: 100}
		]
	})
	
	// PB05
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 7680,
		duration: 100,
		item_inputs: [
			{item: "modern_industrialization:copper_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:3_3_dichlorobenzidine_solution", amount: 1000},
			{fluid: "geghilarity:hot_compressed_ammonia", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diaminobenzidine_solution", amount: 1000},
			{fluid: "geghilarity:hydrogen_chloride", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fluid_compressor",
		eu: 240,
		duration: 100,
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 1280}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hot_high-pressure_hydrogen", amount: 1280}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fluid_compressor",
		eu: 120,
		duration: 20,
		fluid_inputs: [
			{fluid: "geghilarity:ammonia", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hot_compressed_ammonia", amount: 1000}
		]
	})
	
	// PB06 MOD
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 7680,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "geghilarity:diphenyl_isophthalate_solution", amount: 3000},
			{fluid: "geghilarity:diaminobenzidine_solution", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:polybenzimidazole_polymerization_mix", amount: 5000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:poly_tank",
		eu: 240,
		duration: 200,
		fluid_inputs: [ 
			{fluid: "geghilarity:polybenzimidazole_polymerization_mix", amount: 5000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:polybenzimidazole_prepolymer_foam", amount: 25000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:poly_tank",
		eu: 240,
		duration: 200,
		fluid_inputs: [ 
			{fluid: "geghilarity:polybenzimidazole_prepolymer_foam", amount: 25000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:impure_polybenzimidazole_solution", amount: 7000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:advanced_centrifuge",
		eu: 120,
		duration: 300,
		fluid_inputs: [ 
			{fluid: "geghilarity:impure_polybenzimidazole_solution", amount: 7000},
			{fluid: "geghilarity:dimethylacetamide", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:polybenzimidazole_solution", amount: 1000},
			{fluid: "geghilarity:polybenzimidazole_waste", amount: 7000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 120,
		duration: 300,
		fluid_inputs: [ 
			{fluid: "geghilarity:polybenzimidazole_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:polybenzimidazole_pulp", amount: 7}
		],
		fluid_outputs: [
			{fluid: "geghilarity:dimethylacetamide", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 8,
		item_inputs: [
			{item: "geghilarity:polybenzimidazole_pulp", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:polybenzimidazole", amount: 144}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 240,
		duration: 300,
		fluid_inputs: [ 
			{fluid: "geghilarity:polybenzimidazole_waste", amount: 7000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:dichloroethane", amount: 1000},
			{fluid: "geghilarity:phenol", amount: 1000},
			{fluid: "modern_industrialization:toluene", amount: 1000},
			{fluid: "minecraft:water", amount: 4000},
		]
	})
	
	// dimethylacetamide jumpstart
	
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 5,
		item_inputs: [
			{item: "geghilarity:cobalt_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:oxygen", amount: 100},
			{fluid: "geghilarity:acetaldehyde", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:acetic_acid", amount: 100}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 120,
		duration: 8,
		item_inputs: [
			{item: "geghilarity:impregnated_alumina_catalyst_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:ammonia", amount: 150},
			{fluid: "geghilarity:methanol", amount: 300}
		],
		fluid_outputs: [
			{fluid: "geghilarity:methylamine_mix", amount: 450}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 90,
		duration: 1200,
		fluid_inputs: [ 
			{fluid: "geghilarity:methylamine_mix", amount: 9000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:trimethylamine", amount: 1000},
			{fluid: "geghilarity:dimethylamine", amount: 1000},
			{fluid: "geghilarity:methylamine", amount: 1000},
			{fluid: "minecraft:water", amount: 6000},
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 5,
		fluid_inputs: [ 
			{fluid: "geghilarity:dimethylamine", amount: 50},
			{fluid: "geghilarity:acetic_acid", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:dimethylacetamide_solution", amount: 100}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 60,
		duration: 16,
		fluid_inputs: [ 
			{fluid: "geghilarity:dimethylacetamide_solution", amount: 80}
		],
		fluid_outputs: [
			{fluid: "geghilarity:dimethylacetamide", amount: 40}
		]
	})

	
	// PB07
	event.custom({ 
		type: "modern_industrialization:dehy",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
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
	event.custom({ 
		type: "modern_industrialization:lcr",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	
	// furfural
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 180,
		item_inputs: [ 
			{item: "modern_industrialization:wood_pulp", amount: 4}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:furfural_solution", amount: 5000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:furfural_solution", amount: 5000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000},
			{fluid: "geghilarity:furfural", amount: 1000},	
			{fluid: "minecraft:water", amount: 3000}
		]
	})
	
	// susy B.T.E.X
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 60,
		duration: 300,
		item_inputs: [ 
			{item: "geghilarity:platinum_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:hydrogen", amount: 1000},
			{fluid: "modern_industrialization:naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:naphtha_reformate", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:advanced_centrifuge",
		eu: 30,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:furfural", amount: 100},
			{fluid: "geghilarity:naphtha_reformate", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:btex_extract", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:advanced_centrifuge",
		eu: 30,
		duration: 200,
		fluid_inputs: [
			{fluid: "modern_industrialization:steam", amount: 1000},
			{fluid: "geghilarity:btex_extract", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:furfural", amount: 100},
			{fluid: "geghilarity:btex", amount: 1000}
		]
	})
	
	// susy isophthaloyl
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 60,
		duration: 260,
		fluid_inputs: [
			{fluid: "geghilarity:btex", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:xylene_mixture", amount: 400},
			{fluid: "modern_industrialization:ethylbenzene", amount: 50},
			{fluid: "modern_industrialization:toluene", amount: 400},
			{fluid: "modern_industrialization:benzene", amount: 150}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 40,
		fluid_inputs: [
			{fluid: "geghilarity:xylene_mixture", amount: 40}
		],
		fluid_outputs: [
			{fluid: "geghilarity:m-p-xylene_mixture", amount: 32}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:crystallizer",
		eu: 30,
		duration: 500,
		fluid_inputs: [ 
			{fluid: "geghilarity:m-p-xylene_mixture", amount: 4000}
		],
		item_outputs: [
			{item: "geghilarity:p-xylene_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:m-xylene", amount: 3000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fluid_compressor",
		eu: 30,
		duration: 100,
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1280}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hot_high-pressure_oxygen", amount: 1280}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fluid_compressor",
		eu: 60,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:air", amount: 1280}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hot_high-pressure_air", amount: 1280}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 1920,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:amoco_process_catalyst_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:hot_high-pressure_air", amount: 8000},
			{fluid: "geghilarity:m-xylene", amount: 1000},
			{fluid: "geghilarity:acetic_acid", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:isophthalic_acid_solution", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 1920,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:amoco_process_catalyst_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:carbon_dioxide", amount: 6000, probability: 0.0},
			{fluid: "geghilarity:hot_high-pressure_oxygen", amount: 2000},
			{fluid: "geghilarity:m-xylene", amount: 1000},
			{fluid: "geghilarity:acetic_acid", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:isophthalic_acid_solution", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 120,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "geghilarity:isophthalic_acid_solution", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:isophthalic_acid_dust", amount: 18}
		],
		fluid_outputs: [
			{fluid: "geghilarity:acetic_acid", amount: 1000},
			{fluid: "minecraft:water", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 10,
		item_inputs: [ 
			{item: "geghilarity:iron_iii_oxide_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:ethylene", amount: 50},
			{fluid: "modern_industrialization:chlorine", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:dichloroethane", amount: 50}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 120,
		item_inputs: [ 
			{item: "geghilarity:isophthalic_acid_dust", amount: 18}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:dichloroethane", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:dichloroethane_isophthalic_acid_solution", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 10,
		item_inputs: [ 
			{item: "modern_industrialization:carbon_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:chlorine", amount: 100},
			{fluid: "geghilarity:carbon_monoxide", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:phosgene", amount: 50}
		]
	})
	
	// PB17 MOD
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 7680,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "geghilarity:phosgene", amount: 1000},
			{fluid: "geghilarity:dichloroethane_isophthalic_acid_solution", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:isophthaloyl_dichloride_solution", amount: 1000},
			{fluid: "geghilarity:carbon_dioxide", amount: 2000},
			{fluid: "geghilarity:hydrogen_chloride", amount: 2000}
		]
	})
	
	// susy phenol
	event.custom({ 
		type: "modern_industrialization:fluid_compressor",
		eu: 30,
		duration: 100,
		fluid_inputs: [
			{fluid: "modern_industrialization:benzene", amount: 1280}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hot_high-pressure_benzene", amount: 1280}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fluid_compressor",
		eu: 30,
		duration: 100,
		fluid_inputs: [
			{fluid: "modern_industrialization:propene", amount: 1280}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hot_high-pressure_propene", amount: 1280}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 10,
		fluid_inputs: [
			{fluid: "geghilarity:hot_high-pressure_propene", amount: 50},
			{fluid: "geghilarity:hot_high-pressure_benzene", amount: 50},
			{fluid: "geghilarity:phosphoric_acid", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:acidic_cumene", amount: 100}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 10,
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 50},
			{fluid: "geghilarity:acidic_cumene", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:rearranged_cumene", amount: 150}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:rearranged_cumene", amount: 150}
		],
		fluid_outputs: [
			{fluid: "geghilarity:phosphoric_acid", amount: 50},
			{fluid: "geghilarity:phenol", amount: 50},
			{fluid: "geghilarity:acetone", amount: 50}
		]
	})
	
	// susy diphenyil isophthalate
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 160,
		item_inputs: [ 
			{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "geghilarity:phenol", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sodium_phenoxide_solution", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 10,
		fluid_inputs: [
			{fluid: "geghilarity:isophthaloyl_dichloride_solution", amount: 50},
			{fluid: "geghilarity:sodium_phenoxide_solution", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diphenyl_isophthalate_solution", amount: 150}
		]
	})
	
	// O1
	event.custom({ 
		type: "modern_industrialization:blaster_furnace3",
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
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
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
	event.custom({ 
		type: "modern_industrialization:compressor",
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
	event.custom({ 
		type: "modern_industrialization:compressor",
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
	event.custom({ 
		type: "modern_industrialization:packer",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	
	// aluminium redone
	event.custom({ 
		type: "modern_industrialization:elecell",
		eu: 60,
		duration: 300,
		item_inputs : [
			{item: "geghilarity:alumina", amount: 10},
			{item: "geghilarity:aluminium_trifluoride_dust", amount: 1},
			{item: "modern_industrialization:carbon_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "geghilarity:cryolite", amount: 144}
		],
		item_outputs :[
			{item: "modern_industrialization:aluminum_ingot", amount: 4}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hydrogen_fluoride", amount: 1350},
			{fluid: "geghilarity:carbon_dioxide", amount: 3000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 20,
		item_inputs: [ 
			{item: "geghilarity:cryolite_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:cryolite", amount: 144}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 180,
		item_inputs: [ 
			{item: "geghilarity:aluminium_trifluoride_dust", amount: 4},
			{item: "geghilarity:sodium_fluoride_dust", amount: 6}
		],
		item_outputs: [
			{item: "geghilarity:cryolite_dust", amount: 10}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:crystallizer",
		eu: 30,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:sodium_fluoride_solution", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:sodium_fluoride_dust", amount: 2}
		],
		fluid_outputs: [
			{fluid: "minecraft:water", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:bubble_reactor",
		eu: 30,
		duration: 5,
		fluid_inputs: [
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 50},
			{fluid: "geghilarity:hydrogen_fluoride", amount: 50}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sodium_fluoride_solution", amount: 50}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 60,
		duration: 60,
		fluid_inputs: [
			{fluid: "geghilarity:fluorine", amount: 1000},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hydrogen_fluoride", amount: 1000}
		]
	})

	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 300,
		item_inputs: [ 
			{item: "geghilarity:alumina", amount: 5}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hydrofluoric_acid", amount: 6000}
		],
		item_outputs: [
			{item: "geghilarity:aluminium_trifluoride_dust", amount: 8}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:steam", amount: 9000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:crystallizer",
		eu: 30,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:carbon_dioxide", amount: 1000},
			{fluid: "minecraft:water", amount: 1000},
			{fluid: "geghilarity:sodium_aluminate_solution", amount: 3000}
		],
		item_outputs: [	
			{item: "geghilarity:aluminium_hydroxide", amount: 14}
		],
		fluid_outputs: [
			{fluid: "geghilarity:impure_soda_ash_solution", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:crystallizer",
		eu: 30,
		duration: 300,
		item_inputs: [ 
			{item: "geghilarity:aluminium_hydroxide", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1500},
			{fluid: "geghilarity:sodium_aluminate_solution", amount: 1500}
		],
		item_outputs: [	
			{item: "geghilarity:aluminium_hydroxide", amount: 7}
		],
		fluid_outputs: [
			{fluid: "geghilarity:impure_sodium_hydroxide_solution", amount: 1000}
		]
	})
	
	// red mud changed to not conflict with titanium
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:impure_sodium_aluminate_solution", amount: 3000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sodium_aluminate_solution", amount: 2000},
			{fluid: "geghilarity:low-grade_red_mud", amount: 500}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:bauxite_dust", amount: 5},
			{item: "modern_industrialization:sodium_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000},	
			{fluid: "modern_industrialization:hydrogen", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:impure_sodium_aluminate_solution", amount: 3000}
		]
	})
	
	event.remove({id: 'modern_industrialization:materials/aluminum/blast_furnace/tiny_dust'})
	event.remove({id: 'modern_industrialization:materials/aluminum/blast_furnace/dust'})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 600,
		item_inputs: [ 
			{item: "modern_industrialization:aluminum_tiny_dust", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:aluminum_nugget", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 884,
		item_inputs: [ 
			{item: "modern_industrialization:aluminum_dust", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:aluminum_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 592,
		item_inputs: [ 
			{item: "modern_industrialization:aluminum_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:nitrogen", amount: 1000}
		],
		item_outputs: [
			{item: "modern_industrialization:aluminum_ingot", amount: 1}
		]
	})
	
	// sysy silver
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 120,
		item_inputs: [ 
			{item: "geghilarity:acanthite_dust", amount: 3},
			{item: "geghilarity:tiny_calcite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 3000}
		],
		item_outputs: [	
			{item: "geghilarity:small_silver_oxide_dust", amount: 9}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sulfur_dioxide", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 120,
		item_inputs: [ 
			{item: "modern_industrialization:carbon_dust", amount: 1},
			{item: "geghilarity:silver_oxide_dust", amount: 3}
		],
		item_outputs: [	
			{item: "modern_industrialization:silver_dust", amount: 2}
		],
		fluid_outputs: [
			{fluid: "geghilarity:carbon_monoxide", amount: 1000}
		]
	})
	
	// chrome redone
	
	// stainless
	
	event.custom({ 
		type: "modern_industrialization:sintering_oven",
		eu: 30,
		duration: 150,
		item_inputs: [ 
			{item: "geghilarity:raw_electrode", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:methane", amount: 100},
			{fluid: "geghilarity:air", amount: 100}
		],
		item_outputs: [	
			{item: "geghilarity:graphite_electrode", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:carbon_dioxide", amount: 50}
		]
	})
	
	event.remove({id: 'modern_industrialization:materials/electrolyzer/chromium_tiny_dust'})
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 16,
		duration: 400,
		fluid_inputs: [
			{fluid: "modern_industrialization:chromium_hydrochloric_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:chromite_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 450},
			{fluid: "modern_industrialization:chlorine", amount: 450}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:chromite_dust", amount: 7},
			{item: "modern_industrialization:carbon_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 200}
		],
		item_outputs: [	
			{item: "geghilarity:ferrochromium_dust", amount: 3}
		],
		fluid_outputs: [
			{fluid: "geghilarity:carbon_monoxide", amount: 4000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
		eu: 60,
		duration: 300,
		item_inputs: [ 
			{item: "geghilarity:silicon_dioxide_dust", amount: 3},
			{item: "modern_industrialization:iron_dust", amount: 3},
			{item: "modern_industrialization:coke_dust", amount: 2}
		],
		item_outputs: [
			{item: "geghilarity:ferrosilicon_dust", amount: 4}
		],
		fluid_outputs: [
			{fluid: "geghilarity:carbon_monoxide", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blaster_furnace2",
		eu: 240,
		duration: 800,
		item_inputs: [ 
			{item: "modern_industrialization:iron_dust", amount: 6},
			{item: "modern_industrialization:nickel_dust", amount: 1},
			{item: "modern_industrialization:manganese_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:carburized_stainless_steel", amount: 1440}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:arc_furnace",
		eu: 120,
		duration: 600,
		item_inputs: [ 
			{item: "geghilarity:small_ferrosilicon_dust", amount: 2},
			{item: "geghilarity:ferrochromium_dust", amount: 3},
			{item: "geghilarity:quicklime_dust", amount: 1},
			{item: "geghilarity:fluorite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:carburized_stainless_steel", amount: 1440},
			{fluid: "modern_industrialization:nitrogen", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:stainless_steel", amount: 1440}
		]
	})
	
	event.remove({id: 'modern_industrialization:alloy/mixer/stainless_steel/dust'})
	event.remove({id: 'modern_industrialization:materials/stainless_steel/blast_furnace/dust'})
	event.remove({id: 'modern_industrialization:petrochem/polymerization/ethylene_chromium'})
	event.remove({id: 'modern_industrialization:petrochem/polymerization/ethylene_lead'})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 32,
		duration: 400,
		item_inputs: [ 
			{item: "geggy:mold_ingot", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:stainless_steel", amount: 144}
		],
		item_outputs: [
			{item: "modern_industrialization:stainless_steel_hot_ingot", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 239,
		item_inputs: [ 
			{item: "geghilarity:ferrochromium_dust", amount: 3}
		],
		item_outputs: [
			{item: "modern_industrialization:iron_dust", amount: 1},
			{item: "modern_industrialization:chromium_dust", amount: 2}
		]
	})
	
	// polymerization
	
	// electrolyzer to elecell due to lack of slots
	event.custom({ 
		type: "modern_industrialization:elecell",
		eu: 30,
		duration: 300,
		item_inputs: [
			{item: "modern_industrialization:steel_rod", amount: 1, probability: 0.0},
			{item: "geghilarity:graphite_electrode", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:impure_sodium_hydroxide_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:tiny_gallium_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 1000}
		]
	})
	
	// electrolyzer to elecell due to lack of slots
	event.custom({ 
		type: "modern_industrialization:elecell",
		eu: 30,
		duration: 300,
		item_inputs: [ 
			{item: "modern_industrialization:steel_rod", amount: 1, probability: 0.0},
			{item: "geghilarity:graphite_electrode", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:impure_soda_ash_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:tiny_gallium_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:soda_ash_solution", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 160,
		fluid_inputs: [
			{fluid: "geghilarity:soda_ash_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:soda_ash_dust", amount: 6}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:arc_furnace",
		eu: 60,
		duration: 300,
		item_inputs: [ 
			{item: "geghilarity:silicon_dioxide_dust", amount: 3},
			{item: "geghilarity:charcoal_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 300}
		],
		item_outputs: [
			{item: "geghilarity:silicon_carbide_dust", amount: 2}
		],
		fluid_outputs: [
			{fluid: "geghilarity:carbon_monoxide", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:arc_furnace",
		eu: 60,
		duration: 300,
		item_inputs: [ 
			{item: "geghilarity:silicon_dioxide_dust", amount: 3},
			{item: "modern_industrialization:coal_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 300}
		],
		item_outputs: [
			{item: "geghilarity:silicon_carbide_dust", amount: 2}
		],
		fluid_outputs: [
			{fluid: "geghilarity:carbon_monoxide", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:arc_furnace",
		eu: 60,
		duration: 270,
		item_inputs: [ 
			{item: "geghilarity:silicon_carbide_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 270}
		],
		item_outputs: [
			{item: "modern_industrialization:silicon_dust", amount: 1},
			{item: "geghilarity:graphite_dust", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 40,
		item_inputs: [ 
			{item: "geghilarity:graphite_dust", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:carbon_dust", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:pyro",
		eu: 64,
		duration: 320,
		item_inputs: [ 
			{item: "modern_industrialization:wood_pulp", amount: 48}
		],
		item_outputs: [
			{item: "geghilarity:wood_ash_dust", amount: 20}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:wood_tar", amount: 100}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 120,
		item_inputs: [ 
			{item: "geghilarity:wood_ash_dust", amount: 10}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:dark_ashes", amount: 9}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:potassium_carbonate_solution", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 160,
		fluid_inputs: [
			{fluid: "geghilarity:potassium_carbonate_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:potassium_carbonate_dust", amount: 6}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 6,
		duration: 250,
		item_inputs: [ 
			{item: "geghilarity:dark_ashes", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:ashes", amount: 1},
			{item: "modern_industrialization:carbon_dust", amount: 1}
		]
	})
	
	// enforce longer chain
	/*
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 7,
		duration: 80,
		item_inputs: [ 
			{item: "geghilarity:rock_salt_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:rock_salt_solution", amount: 1000}
		]
	})
	*/
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 120,
		item_inputs: [ 
			{item: "geghilarity:potassium_carbonate_dust", amount: 6}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:rock_salt_solution", amount: 2000},
			{fluid: "geghilarity:carbon_dioxide", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 1,
		fluid_inputs: [
			{fluid: "geghilarity:rock_salt_solution", amount: 50},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hydrogen_chloride", amount: 50},
			{fluid: "geghilarity:potassium_bisulfate_solution", amount: 50}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 60,
		fluid_inputs: [
			{fluid: "geghilarity:potassium_bisulfate_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:potassium_bisulfate_dust", amount: 7}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 19,
		item_inputs: [
			{item: "geghilarity:potassium_bisulfate_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:potassium_bisulfate", amount: 144}
		]
	})
	
	// electrolyzer to elecell?
	event.custom({ 
		type: "modern_industrialization:elecell",
		eu: 30,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:graphite_electrode", amount: 1, probability: 0.0},
			{item: "modern_industrialization:iron_rod", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:potassium_bisulfate", amount: 2016}
		],
		item_outputs: [
			{item: "geghilarity:potassium_persulfate_dust", amount: 12}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 2,
		duration: 32,
		item_inputs: [
			{tag: "c:seeds", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:seed_oil", amount: 10}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 7,
		duration: 80,
		item_inputs: [
			{item: "minecraft:redstone", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:seed_oil", amount: 250}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:lubricant", amount: 500}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 1200,
		item_inputs: [
			{item: "geghilarity:soda_ash_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:seed_oil", amount: 8000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:liquid_fat", amount: 4000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 60,
		item_inputs: [
			{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 2000},
			{fluid: "geghilarity:liquid_fat", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sodium_stearate", amount: 3000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 30,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:sodium_stearate", amount: 100},
			{fluid: "minecraft:water", amount: 1000},
			{fluid: "geghilarity:tetrafluoroethylene", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:tetrafluoroethylene_emulsion", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:poly_tank",
		eu: 60,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:potassium_persulfate_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:tetrafluoroethylene_emulsion", amount: 1000},
			{fluid: "geghilarity:titanium_tetrachloride", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:polytetrafluoroethylene_solution", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 260,
		fluid_inputs: [
			{fluid: "geghilarity:polytetrafluoroethylene_solution", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:polytetrafluoroethylene_pulp", amount: 7}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 16,
		item_inputs: [
			{item: "geghilarity:polytetrafluoroethylene_pulp", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:polytetrafluoroethylene", amount: 144}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 7,
		duration: 1,
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 50},
			{fluid: "geghilarity:fluorine", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hydrogen_fluoride", amount: 50}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 30,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:silicon_dioxide_dust", amount: 3},
			{item: "geghilarity:chromium_trioxide_dust", amount: 4}
		],
		item_outputs: [
			{item: "geghilarity:philips_catalyst_dust", amount: 7}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 160,
		fluid_inputs: [
			{fluid: "geghilarity:titanium_tetrachloride", amount: 1000},
			{fluid: "geghilarity:triethylaluminium", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:ziegler_natta_catalyst_dust", amount: 10}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 160,
		item_inputs: [
			{item: "geghilarity:calcium_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:fluorine", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:fluorite_dust", amount: 2}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 7,
		duration: 40,
		item_inputs: [
			{item: "modern_industrialization:coke", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:carbon_dioxide", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 80,
		item_inputs: [
			{item: "geggy:limestone_dust", amount: 5}
		],
		item_outputs: [
			{item: "geghilarity:quicklime_dust", amount: 2}
		],
		fluid_outputs: [
			{fluid: "geghilarity:carbon_dioxide", amount: 3000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:bubble_reactor",
		eu: 7,
		duration: 1,
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 50},
			{fluid: "geghilarity:hydrogen_fluoride", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hydrofluoric_acid", amount: 50}
		]
	})
	
	// air
	event.recipes.modern_industrialization.gas_collector(16, 200)
        .itemIn("geggy:selector_1", 0.0)
        .fluidOut("geghilarity:air", 5000)
        .dimension("overworld")
	event.recipes.modern_industrialization.gas_collector(64, 200)
        .itemIn("geggy:selector_2", 0.0)
        .fluidOut("geghilarity:nether_air", 5000)
        .dimension("nether")
	event.recipes.modern_industrialization.gas_collector(256, 200)
        .itemIn("geggy:selector_3", 0.0)
        .fluidOut("geghilarity:ender_air", 5000)
        .dimension("end")	
		
	// methane early...
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 16,
		duration: 200,
		item_inputs: [
			{item: "create:bar_of_chocolate", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 10}
		]
	})
	
	// was 8/60> 10 redstone > 5 iron dust + 1 ruby dust + 1 quartz dust + 1 tiny neodymium 50%
	event.remove({id: 'modern_industrialization:materials/centrifuge/ruby_dust'})
	
	event.custom({ 
		type: "modern_industrialization:crystallizer",
		eu: 30,
		duration: 600,
		item_inputs: [ 
			{item: "modern_industrialization:coke_dust", amount: 4},
			{item: "modern_industrialization:coal_dust", amount: 6},
			{item: "geggy:rubber_pulp", amount: 2}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 2000},
			{fluid: "geghilarity:carbon_monoxide", amount: 1000}
		],
		item_outputs: [	
			{item: "geggy:pitch_binder", amount: 4}
		]
	})
	
	// rocket fuel TJ
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 480,
		duration: 280,
		fluid_inputs: [
			{fluid: "geghilarity:dimethylhydrazine", amount: 1000},
			{fluid: "geghilarity:dinitrogen_tetroxide", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:rocket_fuel", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 32,
		duration: 480,
		fluid_inputs: [
			{fluid: "geghilarity:ammonia", amount: 2000},
			{fluid: "modern_industrialization:oxygen", amount: 7000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:dinitrogen_tetroxide", amount: 1000},
			{fluid: "minecraft:water", amount: 3000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 480,
		duration: 960,
		fluid_inputs: [
			{fluid: "geghilarity:chloramine", amount: 1000},
			{fluid: "geghilarity:dimethylamine", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:dimethylhydrazine", amount: 1000},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 120,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:methanol", amount: 2000},
			{fluid: "geghilarity:ammonia", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:dimethylamine", amount: 1000},
			{fluid: "minecraft:water", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 32,
		duration: 160,
		fluid_inputs: [
			{fluid: "geghilarity:ammonia", amount: 1000},
			{fluid: "geghilarity:hypochlorous_acid", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:chloramine", amount: 1000},
			{fluid: "minecraft:water", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 32,
		duration: 144,
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:hydrogen", amount: 1000},
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 32,
		duration: 120,
		fluid_inputs: [
			{fluid: "modern_industrialization:chlorine", amount: 2000},
			{fluid: "minecraft:water", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000},
			{fluid: "geghilarity:hypochlorous_acid", amount: 1000}
		]
	})
	
	event.remove({id: 'modern_industrialization:materials/chemical_reactor/hydrochloric_acid'})
	
	// PVC redone
	event.remove({id: 'modern_industrialization:petrochem/polymerization/vinyl_chloride_lead'})
	event.remove({id: 'modern_industrialization:petrochem/polymerization/vinyl_chloride_chromium'})
	event.remove({id: 'modern_industrialization:oil/chemical_reactor/vinyl_chloride'})
	event.remove({id: 'modern_industrialization:petrochem/distillation/steam_cracked_light_fuel_1'})
	event.remove({id: 'modern_industrialization:petrochem/distillation/steam_cracked_naphtha_1'})
	event.remove({id: 'modern_industrialization:oil/blast_furnace/methane_to_acetylene'})
	
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 400,
		item_inputs: [ 
			{item: "geghilarity:quicklime_dust", amount: 2},
			{item: "modern_industrialization:carbon_dust", amount: 3}
		],
		item_outputs: [	
			{item: "geghilarity:calcium_carbide_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:carbon_monoxide", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:crystallizer",
		eu: 30,
		duration: 120,
		item_inputs: [ 
			{item: "geghilarity:calcium_carbide_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 2000}
		],
		item_outputs: [	
			{item: "geghilarity:slaked_lime_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:acetylene", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 120,
		item_inputs: [ 
			{item: "geghilarity:slaked_lime_dust", amount: 5}
		],
		item_outputs: [	
			{item: "geghilarity:quicklime_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:steam", amount: 1000}
		]
	})
	
	// MAGICK
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 120,
		item_inputs: [ 
			{item: "geghilarity:slaked_lime_dust", amount: 5}
		],
		fluid_inputs: [
			{fluid: "geghilarity:carbon_dioxide", amount: 1000}
		],
		item_outputs: [	
			{item: "magick:calcite_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:steam", amount: 1000}
		]
	})
	
	/*
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 1,
		fluid_inputs: [
			{fluid: "modern_industrialization:chlorine", amount: 100},
			{fluid: "modern_industrialization:ethylene", amount: 50}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:vinyl_chloride", amount: 50},
			{fluid: "geghilarity:hydrogen_chloride", amount: 50}
		]
	})
	*/
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 1,
		item_inputs: [ 
			{item: "geghilarity:mercury_chloride_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hydrogen_chloride", amount: 50},
			{fluid: "modern_industrialization:acetylene", amount: 50}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:vinyl_chloride", amount: 50}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 120,
		fluid_inputs: [
			{fluid: "modern_industrialization:vinyl_chloride", amount: 1000},
			{fluid: "minecraft:water", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:vinyl_chloride_solution", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:poly_tank",
		eu: 60,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:potassium_persulfate_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:vinyl_chloride_solution", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:polyvinyl_chloride_solution", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 260,
		fluid_inputs: [
			{fluid: "geghilarity:polyvinyl_chloride_solution", amount: 2000}
		],
		item_outputs: [	
			{item: "geghilarity:polyvinyl_chloride_pulp", amount: 7}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 60,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:polyvinyl_chloride_solution", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:polyvinyl_chloride", amount: 500}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:crystallizer",
		eu: 30,
		duration: 200,
		fluid_inputs: [
			{fluid: "modern_industrialization:chlorine", amount: 2000},
			{fluid: "geghilarity:mercury", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:mercury_chloride_dust", amount: 3}
		]
	})
	
	// andesite centrifuge
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 54,
		item_inputs: [
			{item: "minecraft:andesite", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:andesite_dust", amount: 3},
			{item: "geggy:gravel_dust", amount: 8}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 300,
		item_inputs: [
			{item: "geggy:andesite_dust", amount: 6}
		],
		item_outputs: [	
			{item: "geghilarity:asbestos_dust", amount: 4},
			{item: "geggy:saltpeter", amount: 1}
		]
	})
	
	// nickel tweaks
	event.remove({id: 'modern_industrialization:materials/nickel/smelting/raw_metal_to_ingot_smelting'})
	event.remove({id: 'modern_industrialization:materials/nickel/smelting/ore_to_ingot_smelting'})
	event.remove({id: 'modern_industrialization:materials/nickel/smelting/ore_deepslate_to_ingot_smelting'})
	event.remove({id: 'modern_industrialization:materials/nickel/smelting/dust_to_ingot_smelting'})
	event.remove({id: 'modern_industrialization:materials/nickel/smelting/raw_metal_to_ingot_blasting'})
	event.remove({id: 'modern_industrialization:materials/nickel/smelting/ore_to_ingot_blasting'})
	event.remove({id: 'modern_industrialization:materials/nickel/smelting/ore_deepslate_to_ingot_blasting'})
	event.remove({id: 'modern_industrialization:materials/nickel/smelting/dust_to_ingot_blasting'})
	event.remove({id: 'create:smelting/nickel_ingot_compat_modern_industrialization'})
	event.remove({id: 'create:blasting/nickel_ingot_compat_modern_industrialization'})
	
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 120,
		item_inputs: [
			{item: "geghilarity:pentlandite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 3000}
		],
		item_outputs: [	
			{item: "geghilarity:garnierite_dust", amount: 1},
			{item: "geghilarity:tiny_dark_ashes", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sulfur_dioxide", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 4,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:garnierite_dust", amount: 2},
			{item: "modern_industrialization:coal_dust", amount: 2}
		],
		item_outputs: [	
			{item: "modern_industrialization:nickel_ingot", amount: 1},
			{item: "geghilarity:tiny_dark_ashes", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 4,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:nickel_dust", amount: 1},
			{item: "modern_industrialization:coal_dust", amount: 2}
		],
		item_outputs: [	
			{item: "modern_industrialization:nickel_ingot", amount: 1},
			{item: "geghilarity:tiny_dark_ashes", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 80,
		item_inputs: [
			{item: "modern_industrialization:nickel_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:nitrogen", amount: 1000}
		],
		item_outputs: [	
			{item: "modern_industrialization:nickel_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 30,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:garnierite_dust", amount: 2},
			{item: "modern_industrialization:coal_dust", amount: 2}
		],
		item_outputs: [	
			{item: "modern_industrialization:nickel_ingot", amount: 1}
		]
		,
		fluid_outputs: [
			{fluid: "geghilarity:carbon_monoxide", amount: 1000}
		]
	})
	
	// ELYTRA SYSY
	event.custom({ 
		type: "modern_industrialization:bubble_reactor",
		eu: 30,
		duration: 10,
		fluid_inputs: [
			{fluid: "geghilarity:ammonia", amount: 50},
			{fluid: "geghilarity:nitric_acid", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ammonium_nitrate_solution", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 22,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:ammonium_nitrate_solution", amount: 500}
		],
		item_outputs: [	
			{item: "geghilarity:ammonium_nitrate_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "minecraft:water", amount: 500}
		]
	})
	event.remove({id: 'minecraft:firework_rocket'})
	event.remove({id: 'minecraft:firework_rocket_simple'})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 200,
		duration: 60,
		item_inputs: [
			{item: "modern_industrialization:stainless_steel_plate", amount: 2},
			{item: "geghilarity:ammonium_nitrate_dust", amount: 1},
			{item: "minecraft:gunpowder", amount: 1},
			{item: "geggy:fine_red_alloy_wire", amount: 1}
		],
		item_outputs: [	
			{item: "minecraft:firework_rocket", amount: 16}
		]
	})
	
	//old petrochem
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_light_fuel", amount: 1000}
		],
		item_outputs: [	
			{item: "modern_industrialization:carbon_tiny_dust", amount: 2}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:propene", amount: 250}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 30,
		duration: 120,
		fluid_inputs: [
			{fluid: "modern_industrialization:propene", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 1000},
			{fluid: "geghilarity:isoprene", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 30,
		duration: 160,
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 2000},
			{fluid: "geghilarity:isoprene", amount: 144}
		],
		item_outputs: [	
			{item: "modern_industrialization:rubber_sheet", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 30,
		duration: 52,
		fluid_inputs: [
			{fluid: "geghilarity:isoprene", amount: 1000}
		],
		item_outputs: [	
			{item: "modern_industrialization:carbon_dust", amount: 5}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 8000}
		]
	})
	
	
	// SUSY CATALYSTS
	
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:silicon_dioxide_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:steam", amount: 1000},
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diluted_sodium_silicate_solution", amount: 4000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 40,
		fluid_inputs: [
			{fluid: "geghilarity:diluted_sodium_silicate_solution", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sodium_silicate_solution", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:hydrogen_chloride", amount: 2000},
			{fluid: "geghilarity:sodium_silicate_solution", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:wet_silica_gel_dust", amount: 3}
		],
		fluid_outputs: [
			{fluid: "geghilarity:salt_water", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:wet_silica_gel_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:silica_gel_dust", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:low-grade_red_mud", amount: 2000}
		],
		item_outputs: [
			{item: "geghilarity:iron_iii_oxide_dust", amount: 1, probability: 0.5}
		],
		fluid_outputs: [
			{fluid: "geghilarity:concentrated_low-grade_red_mud", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blaster_furnace2",
		eu: 240,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:concentrated_low-grade_red_mud", amount: 2000}
		],
		item_outputs: [
			{item: "minecraft:iron_ingot", amount: 1},
			{item: "geghilarity:red_mud_slag", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 480,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:red_mud_slag", amount: 3}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 750}
		],
		item_outputs: [
			{item: "geghilarity:rutile_dust", amount: 1},
			{item: "geghilarity:leached_red_mud_slag", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blaster_furnace3",
		eu: 480,
		duration: 40,
		item_inputs: [
			{item: "geghilarity:iron_iii_oxide_dust", amount: 5}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 6000}
		],
		item_outputs: [
			{item: "minecraft:iron_ingot", amount: 2},
			{item: "geghilarity:silicon_dioxide_dust", amount: 1, probability: 0.5}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:steam", amount: 3000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 120,
		duration: 3,
		fluid_inputs: [
			{fluid: "modern_industrialization:acetylene", amount: 50},
			{fluid: "geghilarity:bromine", amount: 200}
		],
		fluid_outputs: [
			{fluid: "geghilarity:tetrabromomethane", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 120,
		item_inputs: [
			{item: "geghilarity:cobalt_dust", amount: 1},
			{item: "modern_industrialization:manganese_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:tetrabromomethane", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:amoco_process_catalyst_dust", amount: 2}
		]
	})
	
	// ZSM-5 catalyst bed
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 120,
		duration: 5,
		item_inputs: [
			{item: "geghilarity:lv_emitter", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:propene", amount: 1000},
			{fluid: "geghilarity:hydrobromic_acid", amount: 1000},
			{fluid: "geghilarity:hydrogen_peroxide", amount: 50, probability: 0.0}
		],
		fluid_outputs: [
			{fluid: "geghilarity:n-bromopropane", amount: 1000},
			{fluid: "minecraft:water", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 100,
		item_inputs: [
			{item: "create:wheat_flour", amount: 2}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geggy:grain_solution", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 16,
		duration: 2400,
		item_inputs: [
			{item: "minecraft:sugar", amount: 24}
		],
		fluid_inputs: [
			{fluid: "geggy:grain_solution", amount: 1000},
			{fluid: "minecraft:water", amount: 16000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:impure_ethanol", amount: 16000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:impure_ethanol", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:fusel_oil", amount: 20}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:fusel_oil", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:n-propanol", amount: 7}
		]
	})
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 120,
		duration: 5,
		item_inputs: [
			{item: "geghilarity:alumina_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:n-propanol", amount: 150},
			{fluid: "geghilarity:ammonia", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:tripropylamine", amount: 50},
			{fluid: "minecraft:water", amount: 150}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 120,
		duration: 5,
		fluid_inputs: [
			{fluid: "geghilarity:n-bromopropane", amount: 50},
			{fluid: "geghilarity:tripropylamine", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:tetrapropylammonium_bromide", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 120,
		duration: 100,
		item_inputs: [
			{item: "modern_industrialization:aluminum_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 3000}
		],
		item_outputs: [	
			{item: "geghilarity:aluminium_sulfate_dust", amount: 17}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 6000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 480,
		duration: 500,
		item_inputs: [
			{item: "geghilarity:silicon_dioxide_dust", amount: 6},
			{item: "geghilarity:aluminium_sulfate_dust", amount: 51},
			{item: "geghilarity:sodium_hydroxide_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:tetrapropylammonium_bromide", amount: 100},
			{fluid: "modern_industrialization:ethanol", amount: 100}
		],
		item_outputs: [	
			{item: "geghilarity:zsm5_dust", amount: 1}
		]
	})
	
	// styrene-butadiene susy
	
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:bromine", amount: 100},
			{fluid: "geghilarity:sulfur_dioxide", amount: 50},
			{fluid: "minecraft:water", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:brominated_sulfur_dioxide", amount: 150}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:brominated_sulfur_dioxide", amount: 60}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hydrobromic_acid", amount: 40}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 500,
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 3000},
			{fluid: "geghilarity:trialkylaluminium_mixture", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:aluminium_alkoxide_solution", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 500,
		fluid_inputs: [
			{fluid: "geghilarity:aluminium_alkoxide_solution", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:aluminium_alkoxide_mixture_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:diethyl_ether", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 500,
		item_inputs: [
			{item: "geghilarity:aluminium_alkoxide_mixture_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 3000}
		],
		item_outputs: [	
			{item: "geghilarity:aluminium_hydroxide", amount: 7}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ziegler_alfol_mixture", amount: 3000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 332,
		fluid_inputs: [
			{fluid: "geghilarity:ziegler_alfol_mixture", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:n-butanol", amount: 34}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 120,
		duration: 5,
		item_inputs: [
			{item: "geghilarity:platinum_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 100},
			{fluid: "geghilarity:butyraldehide", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:n-butanol", amount: 50}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 10,
		fluid_inputs: [
			{fluid: "geghilarity:hydrobromic_acid", amount: 50},
			{fluid: "geghilarity:n-butanol", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diluted_1-bromobutane", amount: 100}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 8,
		fluid_inputs: [
			{fluid: "geghilarity:diluted_1-bromobutane", amount: 80}
		],
		fluid_outputs: [
			{fluid: "geghilarity:1-bromobutane", amount: 40}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 320,
		item_inputs: [
			{item: "geghilarity:lithium_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:diethyl_ether", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:lithium_solution", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:1-bromobutane", amount: 1000},
			{fluid: "geghilarity:lithium_solution", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:lithium_bromide_dust", amount: 2}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diluted_n-butyllithium", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 90,
		duration: 360,
		fluid_inputs: [
			{fluid: "geghilarity:diluted_n-butyllithium", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:n-butyllithium", amount: 1000},
			{fluid: "modern_industrialization:diethyl_ether", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 22,
		duration: 28,
		fluid_inputs: [
			{fluid: "geghilarity:diluted_n-butyllithium", amount: 80}
		],
		fluid_outputs: [
			{fluid: "geghilarity:n-butyllithium", amount: 40}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 120,
		duration: 5,
		fluid_inputs: [
			{fluid: "modern_industrialization:benzene", amount: 50},
			{fluid: "modern_industrialization:ethylene", amount: 50},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 50, probability: 0.0}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:ethylbenzene", amount: 50}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 2,
		item_inputs: [
			{item: "geghilarity:iron_iii_oxide_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:steam", amount: 50},
			{fluid: "modern_industrialization:ethylbenzene", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:crude_styrene", amount: 50},
			{fluid: "modern_industrialization:hydrogen", amount: 90}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 2,
		fluid_inputs: [
			{fluid: "geghilarity:crude_styrene", amount: 40}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:styrene", amount: 36}
		]
	})
	
	// was mixer, no slots
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 60,
		duration: 450,
		fluid_inputs: [
			{fluid: "geghilarity:dry_ethanol", amount: 100},
			{fluid: "modern_industrialization:styrene", amount: 1000},
			{fluid: "modern_industrialization:butadiene", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:styrene_butadiene_solution", amount: 3000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:poly_tank",
		eu: 120,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:n-butyllithium", amount: 100, probability: 0.0},
			{fluid: "geghilarity:styrene_butadiene_solution", amount: 3000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:polymerized_styrene_butadiene_solution", amount: 3000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 120,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:polymerized_styrene_butadiene_solution", amount: 3000}
		],
		item_outputs: [	
			{item: "geghilarity:raw_styrene_butadiene_rubber_dust", amount: 16}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:ethanol", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 7,
		duration: 600,
		item_inputs: [
			{item: "geghilarity:raw_styrene_butadiene_rubber_dust", amount: 1},
			{item: "modern_industrialization:sulfur_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:styrene_butadiene_rubber_bar", amount: 4}
		]
	})
	
	// molecular sieve dust
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:aluminum_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 2000}
		],
		item_outputs: [	
			{item: "geghilarity:sodium_aluminate_dust", amount: 8}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 6000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 160,
		fluid_inputs: [
			{fluid: "geghilarity:sodium_aluminate_solution", amount: 1500}
		],
		item_outputs: [	
			{item: "geghilarity:sodium_aluminate_dust", amount: 4}
		],
		fluid_outputs: [
			{fluid: "minecraft:water", amount: 1500}
		]
	})
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu: 30,
		duration: 450,
		item_inputs: [
			{item: "geghilarity:molecular_sieve_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:ethanol", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:wet_molecular_sieve_dust", amount: 4}
		],
		fluid_outputs: [
			{fluid: "geghilarity:dry_ethanol", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:wet_molecular_sieve_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:molecular_sieve_dust", amount: 1}
		]
	})
	
	
	///////
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 10,
		item_inputs: [
			{item: "geghilarity:lithium_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:lithium", amount: 144}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:reaction_furnace",
		eu: 1920,
		duration: 480,
		item_inputs: [
			{item: "modern_industrialization:emerald_dust", amount: 1},
			{item: "modern_industrialization:carbon_dust", amount: 18}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:chlorine", amount: 36000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:chlorinated_beryl", amount: 900}
		]
	})
	
	// to fix, should be distillation tower when it's patched in mod
	
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 1920,
		duration: 480,
		fluid_inputs: [
			{fluid: "geghilarity:chlorinated_beryl", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:beryllium_chloride_dust", amount: 9}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:aluminium_chloride", amount: 2000},
			{fluid: "geghilarity:silicon_tetrachloride", amount: 6000},
			{fluid: "geghilarity:carbon_monoxide", amount: 18000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 480,
		fluid_inputs: [
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 3000},
			{fluid: "geghilarity:aluminium_chloride", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:aluminium_hydroxide", amount: 7}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:salt_water", amount: 3000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 26,
		item_inputs: [
			{item: "geghilarity:beryllium_chloride_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:beryllium_chloride", amount: 144}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:elecell",
		eu: 1920,
		duration: 480,
		item_inputs: [
			{item: "geghilarity:graphite_electrode", amount: 1, probability: 0.0},
			{item: "modern_industrialization:aluminum_rod", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:beryllium_chloride", amount: 432},
			{fluid: "geghilarity:salt", amount: 432, probability: 0.0}
		],
		item_outputs: [	
			{item: "modern_industrialization:beryllium_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:chlorine", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 480,
		duration: 160,
		item_inputs: [
			{item: "modern_industrialization:beryllium_dust", amount: 1},
			{item: "geghilarity:potassium_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:nitrogen", amount: 5000}
		],
		item_outputs: [	
			{item: "geggy:enderpearl_dust", amount: 10}
		]
	})
	
	// manganese susy
	event.custom({ 
		type: "modern_industrialization:reaction_furnace",
		eu: 480,
		duration: 120,
		item_inputs: [
			{item: "geghilarity:pyrolusite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:carbon_monoxide", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:manganese_ii_oxide_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:carbon_dioxide", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:reaction_furnace",
		eu: 480,
		duration: 120,
		item_inputs: [
			{item: "geghilarity:pyrolusite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 2000}
		],
		item_outputs: [	
			{item: "geghilarity:manganese_ii_oxide_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:steam", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 120,
		item_inputs: [
			{item: "geghilarity:manganese_ii_oxide_dust", amount: 2},
			{item: "modern_industrialization:carbon_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:ashes", amount: 1, probability: 0.85},
			{item: "modern_industrialization:manganese_dust", amount: 1, probability: 0.15}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:carbon_monoxide", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 120,
		duration: 120,
		item_inputs: [
			{item: "geghilarity:manganese_ii_oxide_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1375}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:crude_manganese_ii_sulfate_solution", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 120,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:sodium_hydroxide_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "geghilarity:crude_manganese_ii_sulfate_solution", amount: 4000}
		],
		item_outputs: [	
			{item: "geghilarity:iron_iii_hydroxide_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:manganese_ii_sulfate_solution", amount: 4000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:elecell",
		eu: 120,
		duration: 480,
		item_inputs: [
			{item: "geggy:manganese_rod", amount: 1, probability: 0.0},
			{item: "geghilarity:graphite_electrode", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:manganese_ii_sulfate_solution", amount: 1000}
		],
		item_outputs: [	
			{item: "modern_industrialization:manganese_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sodium_sulfate_solution", amount: 375},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:sodium_sulfate_solution", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:sodium_sulfate_dust", amount: 7}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 120,
		item_inputs: [
			{item: "geghilarity:sodium_sulfate_dust", amount: 7}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:sodium_bisulfate_dust", amount: 14}
		]
	})
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 80,
		item_inputs: [
			{item: "geghilarity:iron_iii_hydroxide_dust", amount: 14}
		],
		item_outputs: [	
			{item: "geghilarity:iron_iii_oxide_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:steam", amount: 3000}
		]
	})
	
	// susy tungsten & molybdenum
	
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu: 30,
		duration: 20,
		item_inputs: [
			{item: "geghilarity:wolframite_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:sifted_wolframite_dust", amount: 1},
			{item: "geghilarity:gold_concentrate_dust", amount: 1, probability: 0.05},
			{item: "geghilarity:granite_tailing_dust", amount: 1, probability: 0.65}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 480,
		duration: 80,
		item_inputs: [
			{item: "geghilarity:sifted_wolframite_dust", amount: 8}
		],
		fluid_inputs: [
			{fluid: "geghilarity:distilled_water", amount: 2000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:impure_wolframite_slurry", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fluidized_bed_reactor",
		eu: 480,
		duration: 80,
		item_inputs: [
			{item: "geghilarity:sodium_silicate_dust", amount: 6, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:oleic_acid", amount: 144, probability: 0.0},
			{fluid: "geghilarity:impure_wolframite_slurry", amount: 2000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:wolframite_slurry", amount: 1000},
			{fluid: "geghilarity:granite_tailing_slurry", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 20,
		fluid_inputs: [
			{fluid: "geghilarity:wolframite_slurry", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:floated_wolframite_dust", amount: 16}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:wastewater", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 480,
		duration: 20,
		item_inputs: [
			{item: "geghilarity:floated_wolframite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:distilled_water", amount: 1000},
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 2000}
		],
		item_outputs: [	
			{item: "magick:calcite_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sodium_tungstate_solution", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 480,
		duration: 90,
		item_inputs: [
			{item: "geghilarity:aluminium_sulfate_dust", amount: 17}
		],
		fluid_inputs: [
			{fluid: "geghilarity:sodium_tungstate_solution", amount: 18000}
		],
		item_outputs: [	
			{item: "geghilarity:aluminium_silicate_dust", amount: 8}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:silicate_free_tungstate_solution", amount: 18000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 480,
		duration: 180,
		item_inputs: [
			{item: "geghilarity:sodium_sulfide_dust", amount: 6}
		],
		fluid_inputs: [
			{fluid: "geghilarity:distilled_water", amount: 2000},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 3000},
			{fluid: "geghilarity:silicate_free_tungstate_solution", amount: 9000}
		],
		item_outputs: [	
			{item: "geghilarity:molybdenum_trisulfide_dust", amount: 4, probability: 0.5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:molybdenum_free_tungstate_solution", amount: 11250},
			{fluid: "geghilarity:hydrogen_sulfide", amount: 500}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 480,
		duration: 20,
		fluid_inputs: [
			{fluid: "geghilarity:tungsten_extraction_mixture", amount: 8000},
			{fluid: "geghilarity:molybdenum_free_tungstate_solution", amount: 11250}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:diluted_sodium_sulfate_solution", amount: 11250},
			{fluid: "geghilarity:tungsten_extract", amount: 8000}
		]
	})	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 480,
		duration: 20,
		fluid_inputs: [
			{fluid: "geghilarity:demineralized_water", amount: 2000},
			{fluid: "geghilarity:tungsten_extract", amount: 8000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:scrubbed_tungsten_extract", amount: 8000},
			{fluid: "geghilarity:wastewater", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 480,
		duration: 20,
		fluid_inputs: [
			{fluid: "geghilarity:ammonia_solution", amount: 5000},
			{fluid: "geghilarity:scrubbed_tungsten_extract", amount: 8000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:tungsten_extraction_mixture", amount: 8000},
			{fluid: "geghilarity:ammonium_isopolytungstate_solution", amount: 5000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:crystallizer",
		eu: 480,
		duration: 20,
		fluid_inputs: [
			{fluid: "geghilarity:ammonium_isopolytungstate_solution", amount: 5000}
		],
		item_outputs: [	
			{item: "geghilarity:ammonium_paratungstate_dust", amount: 1, probabilty: 0.5}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 480,
		duration: 20,
		item_inputs: [
			{item: "geghilarity:ammonium_paratungstate_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:air", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:tungsten_trioxide_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:steam", amount: 6000},
			{fluid: "geghilarity:ammonia", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:reaction_furnace",
		eu: 1920,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:tungsten_trioxide_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 6000}
		],
		item_outputs: [	
			{item: "modern_industrialization:tungsten_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:steam", amount: 3000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:aluminium_silicate_dust", amount: 8}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 2000}
		],
		item_outputs: [	
			{item: "geghilarity:alumina", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sodium_silicate_solution", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 20,
		fluid_inputs: [
			{fluid: "geghilarity:sodium_silicate_solution", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:sodium_silicate_dust", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 60,
		item_inputs: [
			{item: "geghilarity:sodium_sulfate_dust", amount: 7},
			{item: "modern_industrialization:carbon_dust", amount: 2}
		],
		item_outputs: [	
			{item: "geghilarity:sodium_sulfide_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:carbon_dioxide", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 20,
		fluid_inputs: [
			{fluid: "geghilarity:diluted_sodium_sulfate_solution", amount: 9000}
		],
		item_outputs: [	
			{item: "geghilarity:sodium_sulfate_dust", amount: 7}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 30,
		duration: 160,
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 288}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:distilled_water", amount: 260}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 30,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:ammonia", amount: 1000},
			{fluid: "minecraft:water", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:ammonia_solution", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:seed_oil", amount: 1000},
			{fluid: "modern_industrialization:steam", amount: 3000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:glycerol", amount: 1000},
			{fluid: "geghilarity:fatty_acid_solution", amount: 3000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 10,
		fluid_inputs: [
			{fluid: "geghilarity:ammonia", amount: 100},
			{fluid: "geghilarity:carbon_dioxide", amount: 50}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:urea_solution", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:urea_solution", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:urea_dust", amount: 8}
		]
	})
	event.custom({ 
		type: "modern_industrialization:crystallizer",
		eu: 30,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:urea_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:methanol", amount: 1000},
			{fluid: "geghilarity:fatty_acid_solution", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:oleic_acid_solution", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:crystallizer",
		eu: 30,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:oleic_acid_solution", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:oleic_acid_dust", amount: 18}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:methanol", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 5,
		item_inputs: [
			{item: "geghilarity:oleic_acid_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:oleic_acid", amount: 144}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 20,
		fluid_inputs: [
			{fluid: "geghilarity:granite_tailing_slurry", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:granite_tailing_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:wastewater", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu: 30,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:granite_tailing_dust", amount: 3}
		],
		item_outputs: [	
			{item: "geggy:quartzite_dust", amount: 1, probability: 0.5},
			{item: "geggy:quartzite_dust", amount: 1, probability: 0.5},
			{item: "geggy:quartzite_dust", amount: 1, probability: 0.5},
			{item: "geggy:quartzite_dust", amount: 1, probability: 0.5}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 5,
		item_inputs: [
			{item: "geghilarity:zsm5_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:propene", amount: 150}
		],
		fluid_outputs: [
			{fluid: "geghilarity:tripropylene", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:reaction_furnace",
		eu: 480,
		duration: 80,
		item_inputs: [
			{item: "geghilarity:dicobalt_octacarbonyl_dust", amount: 18}
		],
		fluid_inputs: [
			{fluid: "geghilarity:tripropylene", amount: 1000},
			{fluid: "geghilarity:carbon_monoxide", amount: 1000},
			{fluid: "geghilarity:hot_high-pressure_hydrogen", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:isodecanal_mixture", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:reaction_furnace",
		eu: 480,
		duration: 80,

		fluid_inputs: [
			{fluid: "geghilarity:isodecanal_mixture", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:dicobalt_octacarbonyl_dust", amount: 18}
		],
		fluid_outputs: [
			{fluid: "geghilarity:isodecanal", amount: 500}
		]
	})
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 480,
		duration: 40,
		item_inputs: [
			{item: "geghilarity:platinum_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 100},
			{fluid: "geghilarity:isodecanal", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:isodecanol", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 1920,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:isodecanol", amount: 50},
			{fluid: "geghilarity:trioctylamine", amount: 625},
			{fluid: "modern_industrialization:heavy_fuel", amount: 325}
		],
		fluid_outputs: [
			{fluid: "geghilarity:tungsten_extraction_mixture", amount: 1000}
		]
	})
	
	// MOLYBDENUM AS BYPROD SUSY
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 480,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:molybdenum_trisulfide_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 9000}
		],
		item_outputs: [	
			{item: "geghilarity:impure_molybdenum_trioxide_dust", amount: 4}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sulfur_dioxide", amount: 3000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 480,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:impure_molybdenum_trioxide_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "geghilarity:distilled_water", amount: 1000},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:molybdenic_acid_solution", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 480,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:molybdenic_acid_solution", amount: 1000},
			{fluid: "geghilarity:ammonia_solution", amount: 3000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:neutralized_ammonium_molybdate_solution", amount: 4000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:crystallizer",
		eu: 480,
		duration: 100,
		item_inputs: [
			{item: "geggy:nichrome_spring", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:neutralized_ammonium_molybdate_solution", amount: 8000}
		],
		item_outputs: [	
			{item: "geghilarity:ammonium_dimolybdate_dust", amount: 19}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ammonia", amount: 2000},
			{fluid: "modern_industrialization:steam", amount: 7000},
			{fluid: "geghilarity:ammonium_chloride_solution", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 1,
		fluid_inputs: [
			{fluid: "geghilarity:ammonium_chloride_solution", amount: 50},
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ammonia", amount: 50},
			{fluid: "geghilarity:salt_water", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 480,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:ammonium_dimolybdate_dust", amount: 19}
		],
		item_outputs: [	
			{item: "geghilarity:purified_molybdenum_trioxide_dust", amount: 8}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:steam", amount: 1000},
			{fluid: "geghilarity:ammonia", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:reaction_furnace",
		eu: 1920,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:purified_molybdenum_trioxide_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 6000}
		],
		item_outputs: [	
			{item: "geghilarity:molybdenum_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:steam", amount: 3000}
		]
	})

	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 180,
		item_inputs: [
			{item: "geghilarity:sodium_aluminate_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "geghilarity:sodium_silicate_solution", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:raw_molecular_sieve", amount: 4000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 400,
		fluid_inputs: [
			{fluid: "geghilarity:raw_molecular_sieve", amount: 4000}
		],
		item_outputs: [	
			{item: "geghilarity:molecular_sieve_dust", amount: 10}
		]
	})
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:molecular_sieve_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:demineralized_water", amount: 900}
		]
	})
	
	// susy synth methane
	
	event.custom({ 
		type: "modern_industrialization:reaction_furnace",
		eu: 120,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:nickel_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 8000},
			{fluid: "geghilarity:carbon_dioxide", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:methane", amount: 1000},
			{fluid: "modern_industrialization:steam", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:reaction_furnace",
		eu: 120,
		duration: 150,
		item_inputs: [
			{item: "geghilarity:nickel_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 6000},
			{fluid: "geghilarity:carbon_monoxide", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:methane", amount: 1000},
			{fluid: "modern_industrialization:steam", amount: 1000}
		]
	})
	
	// GTNH monazite line, why not
	
	// digester
	event.custom({ 
		type: "modern_industrialization:fluidized_bed_reactor",
		eu: 1920,
		duration: 400,
		item_inputs: [
			{item: "modern_industrialization:mozanite_crushed_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "geghilarity:nitric_acid", amount: 700}
		],
		item_outputs: [	
			{item: "geghilarity:silicon_dioxide_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:muddy_monazite_rare_earth_solution", amount: 400}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:dissolution_tank",
		eu: 480,
		duration: 8100,
		item_inputs: [
			{item: "geggy:saltpeter", amount: 9}
		],
		fluid_inputs: [
			{fluid: "geghilarity:muddy_monazite_rare_earth_solution", amount: 9000},
			{fluid: "minecraft:water", amount: 90000}
		],
		item_outputs: [	
			{item: "geghilarity:hafnia-zirconia_blend_dust", amount: 4},
			{item: "geghilarity:thorianite_dust", amount: 9},
			{item: "modern_industrialization:mozanite_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:diluted_monazite_rare_earth_mud", amount: 99000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 1920,
		duration: 600,
		item_inputs: [
			{item: "geghilarity:hafnia-zirconia_blend_dust", amount: 9}
		],
		item_outputs: [	
			{item: "geghilarity:hafnia_dust", amount: 3},
			{item: "geghilarity:zirconia_dust", amount: 9}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 7,
		duration: 60,
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 1000},
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 480,
		duration: 400,
		item_inputs: [
			{item: "modern_industrialization:sodium_dust", amount: 4},
			{item: "geghilarity:magnesium_chloride_dust", amount: 6}
		],
		item_outputs: [	
			{item: "geghilarity:magnesium_dust", amount: 2},
			{item: "modern_industrialization:salt_dust", amount: 8}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 30,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:hafnia_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 4000}
		],
		item_outputs: [	
			{item: "geghilarity:hafnium_tetrachloride_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 30,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:hafnium_tetrachloride_dust", amount: 5}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:hafnium_tetrachloride_solution", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blaster_furnace2",
		eu: 1920,
		duration: 600,
		item_inputs: [
			{item: "geghilarity:magnesium_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hafnium_tetrachloride_solution", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:low-purity_hafnium_dust", amount: 1},
			{item: "geghilarity:magnesium_chloride_dust", amount: 6}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 30,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:low-purity_hafnium_dust", amount: 1},
			{item: "geghilarity:iodine_dust", amount: 4}
		],
		item_outputs: [	
			{item: "geghilarity:hafnium_iodide_dust", amount: 5}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 30,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:low-purity_hafnium_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:iodine", amount: 4000}
		],
		item_outputs: [	
			{item: "geghilarity:hafnium_iodide_dust", amount: 5}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blaster_furnace3",
		eu: 1920,
		duration: 5400,
		item_inputs: [
			{item: "geghilarity:hafnium_iodide_dust", amount: 45}
		],
		item_outputs: [	
			{item: "geghilarity:hot_hafnium_ingot", amount: 9},
			{item: "geghilarity:hafnium_runoff_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:iodine", amount: 36000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 120,
		duration: 534,
		item_inputs: [
			{item: "geghilarity:hot_hafnium_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:hafnium_ingot", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 30,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:zirconia_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 4000}
		],
		item_outputs: [	
			{item: "geghilarity:zirconium_tetrachloride_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 30,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:zirconium_tetrachloride_dust", amount: 5}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:zirconium_tetrachloride_solution", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blaster_furnace4",
		eu: 1920,
		duration: 600,
		item_inputs: [
			{item: "geghilarity:magnesium_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "geghilarity:zirconium_tetrachloride_solution", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:hot_zirconium_ingot", amount: 1},
			{item: "geghilarity:magnesium_chloride_dust", amount: 6}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 120,
		duration: 273,
		item_inputs: [
			{item: "geghilarity:hot_zirconium_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:zirconium_ingot", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 60,
		duration: 53,
		item_inputs: [
			{item: "geghilarity:thorianite_dust", amount: 3}
		],
		item_outputs: [	
			{item: "geghilarity:thorium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 60,
		duration: 104,
		item_inputs: [
			{item: "modern_industrialization:mozanite_dust", amount: 2}
		],
		item_outputs: [	
			{item: "geghilarity:thorium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu: 240,
		duration: 400,
		fluid_inputs: [
			{fluid: "geghilarity:diluted_monazite_rare_earth_mud", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:monazite_sulfate_dust", amount: 1, probability: 0.9},
			{item: "geghilarity:silicon_dioxide_dust", amount: 1, probability: 0.75},
			{item: "geghilarity:rutile_dust", amount: 1, probability: 0.2},
			{item: "geghilarity:red_zircon_dust", amount: 1, probability: 0.05},
			{item: "geghilarity:ilmenite_dust", amount: 1, probability: 0.2}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 90,
		duration: 250,
		item_inputs: [
			{item: "geghilarity:red_zircon_dust", amount: 6}
		],
		item_outputs: [	
			{item: "geghilarity:zirconium_dust", amount: 1},
			{item: "geghilarity:silicon_dioxide_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
		eu: 480,
		duration: 2130,
		item_inputs: [
			{item: "geghilarity:zirconium_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:hot_zirconium_ingot", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
		eu: 480,
		duration: 3200,
		item_inputs: [
			{item: "geghilarity:ilmenite_dust", amount: 9},
			{item: "modern_industrialization:carbon_dust", amount: 9}
		],
		item_outputs: [	
			{item: "geggy:pig_iron_ingot", amount: 4},
			{item: "geghilarity:rutile_dust", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:carbon_monoxide", amount: 9000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 400,
		duration: 4800,
		item_inputs: [
			{item: "geghilarity:monazite_sulfate_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 6000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:diluted_monazite_sulfate", amount: 7000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 480,
		duration: 4320,
		fluid_inputs: [
			{fluid: "geghilarity:diluted_monazite_sulfate", amount: 9000},
			{fluid: "geghilarity:ammonium_nitrate_solution", amount: 1800}
		],
		item_outputs: [	
			{item: "geghilarity:acidic_monazite_powder_dust", amount: 3}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu: 256,
		duration: 600,
		item_inputs: [
			{item: "geghilarity:acidic_monazite_powder_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:monazite_rare_earth_filtrate_dust", amount: 1, probability: 0.9},
			{item: "geghilarity:thorium-phosphate_cake_dust", amount: 1, probability: 0.7}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:thorium-phosphate_cake_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:thorium-phosphate_concentrate_dust", amount: 1}
		]
	})
	
	// termal centrifuge
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 240,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:thorium-phosphate_concentrate_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:thorium_dust", amount: 1},
			{item: "geghilarity:phosphate_dust", amount: 1}
		]
	})
	
	// chemical bath
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 240,
		duration: 120,
		item_inputs: [
			{item: "geghilarity:monazite_rare_earth_filtrate_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:ammonium_nitrate_solution", amount: 320}
		],
		item_outputs: [	
			{item: "geghilarity:neutralized_monazite_rare_earth_filtrate_dust", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu: 480,
		duration: 800,
		item_inputs: [
			{item: "geghilarity:neutralized_monazite_rare_earth_filtrate_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:monazite_rare_earth_hydroxide_concentrate_dust", amount: 1, probability: 0.9},
			{item: "geghilarity:uranium_filtrate_dust", amount: 1, probability: 0.5},
			{item: "geghilarity:uranium_filtrate_dust", amount: 1, probability: 0.4}
		]
	})
	
	// chemical bath
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 120,
		duration: 360,
		item_inputs: [
			{item: "geghilarity:uranium_filtrate_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hydrofluoric_acid", amount: 100}
		],
		item_outputs: [	
			{item: "geghilarity:neutralized_uranium_filtrate_dust", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu: 30,
		duration: 1000,
		item_inputs: [
			{item: "geghilarity:neutralized_uranium_filtrate_dust", amount: 1}
		],
		item_outputs: [	
			{item: "modern_industrialization:uranium_238_dust", amount: 1, probability: 0.45},
			{item: "modern_industrialization:uranium_238_dust", amount: 1, probability: 0.4},
			{item: "modern_industrialization:uranium_238_dust", amount: 1, probability: 0.3},
			{item: "modern_industrialization:uranium_235_dust", amount: 1, probability: 0.3},
			{item: "modern_industrialization:uranium_235_dust", amount: 1, probability: 0.2}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:monazite_rare_earth_hydroxide_concentrate_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:dried_monazite_rare_earth_concentrate_dust", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 480,
		duration: 500,
		item_inputs: [
			{item: "geghilarity:dried_monazite_rare_earth_concentrate_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:nitric_acid", amount: 500}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:nitrogenated_monazite_rare_earth_concentrate", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:nitrogenated_monazite_rare_earth_concentrate", amount: 1000},
			{fluid: "minecraft:water", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:nitric-leached_monazite_mixture", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 220,
		item_inputs: [
			{item: "geghilarity:cerium-rich_mixture_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "geghilarity:nitrogenated_monazite_rare_earth_concentrate", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:nitric-leached_monazite_mixture", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu: 240,
		duration: 400,
		fluid_inputs: [
			{fluid: "geghilarity:nitric-leached_monazite_mixture", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:cerium_dioxide_dust", amount: 1, probability: 0.1111}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:nitric_monazite_leached_concentrate", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 240,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:nitric_monazite_leached_concentrate", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:cooled_monazite_rare_earth_concentrate_dust", amount: 1}
		]
	})
	
	// electro separator
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 1920,
		duration: 600,
		item_inputs: [
			{item: "geghilarity:cooled_monazite_rare_earth_concentrate_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:monazite_rarer_earth_sediment_dust", amount: 1, probability: 0.9},
			{item: "geghilarity:europium_iii_oxide_dust", amount: 5, probability: 0.05}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 8400,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:europium_iii_oxide_dust", amount: 5},
			{item: "geghilarity:europium_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:europium_oxide_dust", amount: 4}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 33000,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:europium_oxide_dust", amount: 2}
		],
		item_outputs: [	
			{item: "geghilarity:europium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
		eu: 480,
		duration: 500,
		item_inputs: [
			{item: "geghilarity:monazite_rarer_earth_sediment_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:heterogenous_halogenic_monazite_rare_earth_mixture_dust", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 240,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:salt_dust", amount: 1},
			{item: "geghilarity:heterogenous_halogenic_monazite_rare_earth_mixture_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:acetone", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:saturated_monazite_rare_earth_dust", amount: 1}
		]
	})
	
	// simple samarium vs samarium ore concentrate
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 240,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:samarium_dust", amount: 2},
			{item: "geghilarity:heterogenous_halogenic_monazite_rare_earth_mixture_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:acetone", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:saturated_monazite_rare_earth_dust", amount: 3}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 1920,
		duration: 3150,
		item_inputs: [
			{item: "geghilarity:saturated_monazite_rare_earth_dust", amount: 4}
		],
		item_outputs: [	
			{item: "geghilarity:samaric_residue_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:chloromethane", amount: 400}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu: 1920,
		duration: 133,
		item_inputs: [
			{item: "geghilarity:samaric_residue_dust", amount: 3}
		],
		item_outputs: [	
			{item: "geghilarity:samarium_dust", amount: 2},
			{item: "geghilarity:gadolinium_dust", amount: 1}
		]
	})
	
	// cerium
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 30,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:cerium_dioxide_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "geghilarity:ammonium_chloride", amount: 3000},
			{fluid: "modern_industrialization:hydrogen", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:cerium_chloride_dust", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:ammonia", amount: 3000},
			{fluid: "modern_industrialization:steam", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 30,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:cerium_chloride_dust", amount: 8}
		],
		fluid_inputs: [
			{fluid: "geghilarity:oxalate", amount: 3000}
		],
		item_outputs: [	
			{item: "geghilarity:cerium_oxalate_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 6000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
		eu: 480,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:cerium_oxalate_dust", amount: 5},
			{item: "modern_industrialization:carbon_dust", amount: 3}
		],
		item_outputs: [	
			{item: "geghilarity:cerium_iii_oxide_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:carbon_monoxide", amount: 9000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 60,
		duration: 70,
		item_inputs: [
			{item: "geghilarity:cerium_iii_oxide_dust", amount: 5}
		],
		item_outputs: [	
			{item: "geghilarity:cerium_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 3000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 480,
		duration: 80,
		fluid_inputs: [
			{fluid: "geghilarity:nitric_oxide", amount: 9000},
			{fluid: "modern_industrialization:oxygen", amount: 9000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:nitrogen_dioxide", amount: 9000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 30,
		duration: 320,
		fluid_inputs: [
			{fluid: "geghilarity:nitrogen_dioxide", amount: 2000},
			{fluid: "modern_industrialization:oxygen", amount: 1000},
			{fluid: "minecraft:water", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:nitric_acid", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 30,
		duration: 300,
		item_inputs: [
			{item: "minecraft:sugar", amount: 24},
			{item: "geghilarity:vanadium_pentoxide_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:nitric_acid", amount: 6000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:oxalate", amount: 3000},
			{fluid: "geghilarity:nitric_oxide", amount: 6000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 30,
		duration: 80,
		fluid_inputs: [
			{fluid: "geghilarity:ammonia", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 2500}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:nitric_oxide", amount: 1000}
		]
	})
	
	// iodine source // MAGICK
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 240,
		duration: 600,
		item_inputs: [
			{item: "geghilarity:seaweed_ash_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "geghilarity:diluted_sulfuric_acid", amount: 1200}
		],
		item_outputs: [	
			{item: "magick:calcite_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:seaweed_concentrate", amount: 1200}
		]
	})
	// seaweed byproducts, no use
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 480,
		duration: 760,
		fluid_inputs: [
			{fluid: "modern_industrialization:benzene", amount: 1000},
			{fluid: "geghilarity:seaweed_concentrate", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:iodine_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:seaweed_byproducts", amount: 200}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 127,
		item_inputs: [
			{item: "geghilarity:iodine_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:iodine", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 1200,
		item_inputs: [
			{item: "minecraft:sugar", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		],
		item_outputs: [	
			{item: "minecraft:charcoal", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:diluted_sulfuric_acid", amount: 1000}
		]
	})
	
	// superconductor
	event.remove({id: 'modern_industrialization:alloy/mixer/superconductor/dust'})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 491520,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:naquadria_dust", amount: 4},
			{item: "geghilarity:osmiridium_dust", amount: 3},
			{item: "geghilarity:europium_dust", amount: 1},
			{item: "geghilarity:samarium_dust", amount: 1}
		],
		item_outputs: [	
			{item: "modern_industrialization:superconductor_dust", amount: 9}
		]
	})
	
	// europium jumpstart?
	
	event.custom({ 
		type: "modern_industrialization:fusion_reactor",
		eu: 24576,
		duration: 32,
		fluid_inputs: [
			{fluid: "geghilarity:molten_neodymium", amount: 16},
			{fluid: "modern_industrialization:hydrogen", amount: 48}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:molten_europium", amount: 16}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blaster_furnace2",
		eu: 4080,
		duration: 3600,
		item_inputs: [
			{item: "geghilarity:naquadria_dust", amount: 32}
		],
		fluid_inputs: [
			{fluid: "geghilarity:fluoroantimonic_acid", amount: 4000}
		],
		item_outputs: [	
			{item: "geghilarity:extremely_unstable_naquadah_dust", amount: 17}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:acid_naquadah_emulsion", amount: 8000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 120,
		duration: 240,
		item_inputs: [
			{item: "geghilarity:quicklime_dust", amount: 32}
		],
		fluid_inputs: [
			{fluid: "geghilarity:acid_naquadah_emulsion", amount: 4000}
		],
		item_outputs: [	
			{item: "geghilarity:antimony_trioxide_dust", amount: 1},
			{item: "geghilarity:fluorspar_dust", amount: 16}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:naquadah_emulsion", amount: 4000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 30,
		duration: 250,
		item_inputs: [
			{item: "geghilarity:antimony_trioxide_dust", amount: 5}
		],
		item_outputs: [	
			{item: "modern_industrialization:antimony_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 3000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 60,
		duration: 19,
		item_inputs: [
			{item: "geghilarity:fluorspar_dust", amount: 3}
		],
		item_outputs: [	
			{item: "geghilarity:calcium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:fluorine", amount: 2000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu: 120,
		duration: 800,
		fluid_inputs: [
			{fluid: "geghilarity:naquadah_emulsion", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:radioactive_sludge_dust", amount: 4, probability: 0.8},
			{item: "geghilarity:radioactive_sludge_dust", amount: 2, probability: 0.75},
			{item: "geghilarity:radioactive_sludge_dust", amount: 1, probability: 0.50},
			{item: "geghilarity:radioactive_sludge_dust", amount: 1, probability: 0.25},
			{item: "geghilarity:radioactive_sludge_dust", amount: 1, probability: 0.5},
			{item: "geghilarity:radioactive_sludge_dust", amount: 1, probability: 0.01}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:naquadah_solution", amount: 500}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 1920,
		duration: 20,
		fluid_inputs: [
			{fluid: "geghilarity:naquadah_solution", amount: 20}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:naquadah_gas", amount: 60},
			{fluid: "minecraft:water", amount: 10},
			{fluid: "geghilarity:light_naquadah_fuel", amount: 10},
			{fluid: "geghilarity:heavy_naquadah_fuel", amount: 5},
			{fluid: "geghilarity:naquadah_asphalt", amount: 2}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fusion_reactor",
		eu: 26000,
		duration: 500,
		fluid_inputs: [
			{fluid: "geghilarity:light_naquadah_fuel", amount: 780},
			{fluid: "geghilarity:heavy_naquadah_fuel", amount: 360}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:naquadah_based_liquid_fuel_mki", amount: 100}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 1920,
		duration: 750,
		fluid_inputs: [
			{fluid: "geghilarity:naquadah_based_liquid_fuel_mki_depleted", amount: 125}
		],
		item_outputs: [	
			{item: "geghilarity:naquadah_dust", amount: 8, probability: 0.9},
			{item: "geghilarity:naquadah_dust", amount: 6, probability: 0.85},
			{item: "geghilarity:naquadah_dust", amount: 4, probability: 0.5},
			{item: "modern_industrialization:neodymium_dust", amount: 4, probability: 0.4},
			{item: "geghilarity:europium_dust", amount: 4, probability: 0.2}
		]
	})
	
	// potassium from saltpeter
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 60,
		duration: 100,
		item_inputs: [
			{item: "geggy:saltpeter", amount: 5}
		],
		item_outputs: [	
			{item: "geghilarity:potassium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:nitrogen", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 3000}
		]
	})
	
	// sodium potassium for energy hatches
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 3000,
		item_inputs: [
			{item: "modern_industrialization:sodium_dust", amount: 1},
			{item: "geghilarity:potassium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sodium_potassium", amount: 1000}
		]
	})
	
	// GTNH ash recycle
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 6000,
		item_inputs: [
			{item: "geghilarity:ashes", amount: 36}
		],
		item_outputs: [	
			{item: "geghilarity:quicklime_dust", amount: 18, probabilty: 0.64},
			{item: "geghilarity:potash_dust", amount: 9, probabilty: 0.6},
			{item: "geghilarity:magnesia_dust", amount: 1, probabilty: 0.45},
			{item: "geghilarity:phosphorus_pentoxide_dust", amount: 2},
			{item: "geghilarity:soda_ash_dust", amount: 1},
			{item: "modern_industrialization:iron_dust", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 30,
		duration: 140,
		item_inputs: [
			{item: "geghilarity:phosphorus_pentoxide_dust", amount: 7}
		],
		item_outputs: [	
			{item: "geghilarity:phosphorus_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 5000}
		]
	})
	// add ebf
	
	// BASTNASITE GTNH
	
	event.custom({ 
		type: "modern_industrialization:fluidized_bed_reactor",
		eu: 30,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:crushed_bastnasite_ore", amount: 2}
		],
		fluid_inputs: [
			{fluid: "geghilarity:nitric_acid", amount: 700}
		],
		item_outputs: [	
			{item: "geghilarity:silicon_dioxide_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:muddy_bastnasite_rare_earth_solution", amount: 400}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 480,
		duration: 30,
		fluid_inputs: [
			{fluid: "modern_industrialization:steam", amount: 1000},
			{fluid: "geghilarity:muddy_bastnasite_rare_earth_solution", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:steam-cracked_bastnasite_mud", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 800,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_bastnasite_mud", amount: 1000},
			{fluid: "geghilarity:sodiumfluorosilicate", amount: 320}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:conditioned_bastnasite_mud", amount: 1320}
		]
	})
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 480,
		duration: 600,
		item_inputs: [
			{item: "modern_industrialization:salt_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hexafluorosilicic_acid", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 2000},
			{fluid: "geghilarity:sodiumfluorosilicate", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 120,
		duration: 400,
		item_inputs: [
			{item: "modern_industrialization:silicon_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hydrofluoric_acid", amount: 6000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:hydrogen", amount: 4000},
			{fluid: "geghilarity:hexafluorosilicic_acid", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dissolution_tank",
		eu: 1920,
		duration: 1000,
		item_inputs: [
			{item: "geggy:saltpeter", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:conditioned_bastnasite_mud", amount: 1000},
			{fluid: "minecraft:water", amount: 10000}
		],
		item_outputs: [	
			{item: "geghilarity:gangue_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:diluted_bastnasite_mud", amount: 11000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu:240,
		duration: 400,
		fluid_inputs: [
			{fluid: "geghilarity:diluted_bastnasite_mud", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:silicon_dioxide_dust", amount: 1, probability: 0.9},
			{item: "geghilarity:rutile_dust", amount: 1, probability: 0.75},
			{item: "geghilarity:red_zircon_dust", amount: 1, probability: 0.1},
			{item: "geghilarity:ilmenite_dust", amount: 1, probability: 0.05}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:filtered_bastnasite_mud", amount: 400}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blaster_furnace4",
		eu: 600,
		duration: 500,
		fluid_inputs: [
			{fluid: "geghilarity:filtered_bastnasite_mud", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:bastnasite_rare_earth_oxides_dust", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 30,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:bastnasite_rare_earth_oxides_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 500}
		],
		item_outputs: [	
			{item: "geghilarity:acid-leached_bastnasite_rare_earth_oxides_dust", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blaster_furnace",
		eu: 120,
		duration: 600,
		item_inputs: [
			{item: "geghilarity:acid-leached_bastnasite_rare_earth_oxides_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:roasted_rare_earth_oxides_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:fluorine", amount: 13}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:roasted_rare_earth_oxides_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 200}
		],
		item_outputs: [	
			{item: "geghilarity:wet_rare_earth_oxides_dust", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 480,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:wet_rare_earth_oxides_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:fluorine", amount: 4000}
		],
		item_outputs: [	
			{item: "geghilarity:cerium-oxidized_rare_earth_oxides_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:hydrofluoric_acid", amount: 4000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 480,
		duration: 600,
		item_inputs: [
			{item: "geghilarity:cerium-oxidized_rare_earth_oxides_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:bastnasite_rarer_earth_oxides_dust", amount: 1},
			{item: "geghilarity:cerium_dioxide_dust", amount: 1, probability: 0.9}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 480,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:bastnasite_rarer_earth_oxides_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:nitric_acid", amount: 400}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:nitrogenated_bastnasite_rarer_earth_oxides", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 480,
		duration: 700,
		fluid_inputs: [
			{fluid: "geghilarity:nitrogenated_bastnasite_rarer_earth_oxides", amount: 1000},
			{fluid: "geghilarity:acetone", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:bastnasite_rarer_earth_oxide_suspension", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 480,
		duration: 900,
		fluid_inputs: [
			{fluid: "geghilarity:bastnasite_rarer_earth_oxide_suspension", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:neodymium_rare_earth_concentrate_dust", amount: 1, probability: 0.8},
			{item: "geghilarity:samaric_rare_earth_concentrate_dust", amount: 1, probability: 0.5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:diluted_acetone", amount: 750}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 120,
		duration: 24,
		fluid_inputs: [
			{fluid: "geghilarity:diluted_acetone", amount: 50}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:acetone", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 800,
		duration: 900,
		item_inputs: [
			{item: "geghilarity:neodymium_rare_earth_concentrate_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 2000}
		],
		item_outputs: [	
			{item: "geghilarity:lanthanium_chloride_dust", amount: 1},
			{item: "geghilarity:neodymium_oxide_dust", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 60,
		duration: 54,
		item_inputs: [
			{item: "geghilarity:lanthanium_chloride_dust", amount: 4}
		],
		item_outputs: [	
			{item: "geghilarity:lanthanium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:chlorine", amount: 3000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 60,
		duration: 72,
		item_inputs: [
			{item: "geghilarity:neodymium_oxide_dust", amount: 5}
		],
		item_outputs: [	
			{item: "modern_industrialization:neodymium_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 3000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 480,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:samaric_rare_earth_concentrate_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hydrofluoric_acid", amount: 2000}
		],
		item_outputs: [	
			{item: "geghilarity:fluorinated_samaric_concentrate_dust", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blaster_furnace5",
		eu: 1920,
		duration: 1600,
		item_inputs: [
			{item: "geghilarity:fluorinated_samaric_concentrate_dust", amount: 8},
			{item: "geghilarity:calcium_dust", amount: 4}
		],
		item_outputs: [	
			{item: "geghilarity:holmium_dust", amount: 1},
			{item: "geghilarity:samarium-terbium_mixture_dust", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:calcium_fluoride", amount: 12000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 25,
		fluid_inputs: [
			{fluid: "geghilarity:calcium_fluoride", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:calcium_fluoride_dust", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 60,
		duration: 19,
		item_inputs: [
			{item: "geghilarity:calcium_fluoride_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:calcium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:fluorine", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:reaction_furnace",
		eu: 120,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:ammonia", amount: 4000},
			{fluid: "geghilarity:nitric_acid", amount: 4000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:hydrated_ammonium_nitrate_slurry", amount: 5184}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 480,
		duration: 225,
		fluid_inputs: [
			{fluid: "geghilarity:hydrated_ammonium_nitrate_slurry", amount: 144}
		],
		item_outputs: [	
			{item: "geghilarity:ammonium_nitrate_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 250}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 480,
		duration: 600,
		item_inputs: [
			{item: "geghilarity:samarium-terbium_mixture_dust", amount: 1},
			{item: "geghilarity:ammonium_nitrate_dust", amount: 9}
		],
		item_outputs: [	
			{item: "geghilarity:nitrogenated_samarium-terbium_mixture_dust", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 1920,
		duration: 3200,
		item_inputs: [
			{item: "geghilarity:nitrogenated_samarium-terbium_mixture_dust", amount: 4},
			{item: "modern_industrialization:copper_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:terbium_nitrate_dust", amount: 2},
			{item: "geghilarity:samaric_residue_dust", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 90,
		duration: 32,
		item_inputs: [
			{item: "geghilarity:terbium_nitrate_dust", amount: 5}
		],
		item_outputs: [	
			{item: "geghilarity:terbium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 3000},
			{fluid: "modern_industrialization:nitrogen", amount: 1000}
		]
	})
	
	// chrome susy
	
	event.custom({ 
		type: "modern_industrialization:arc_furnace",
		eu: 120,
		duration: 400,
		item_inputs: [
			{item: "geghilarity:chromite_dust", amount: 2},
			{item: "geghilarity:soda_ash_dust", amount: 24}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 7010},
			{fluid: "geghilarity:refinery_gas", amount: 10}
		],
		item_outputs: [	
			{item: "geghilarity:sodium_chromate_mixture_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:carbon_dioxide", amount: 4000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:arc_furnace",
		eu: 120,
		duration: 400,
		item_inputs: [
			{item: "geghilarity:chromite_dust", amount: 2},
			{item: "geghilarity:soda_ash_dust", amount: 24}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 7010},
			{fluid: "modern_industrialization:methane", amount: 10}
		],
		item_outputs: [	
			{item: "geghilarity:sodium_chromate_mixture_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:carbon_dioxide", amount: 4000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 120,
		duration: 800,
		item_inputs: [
			{item: "geghilarity:sodium_chromate_mixture_dust", amount: 10}
		],
		fluid_inputs: [
			{fluid: "geghilarity:distilled_water", amount: 8000}
		],
		item_outputs: [	
			{item: "geghilarity:iron_iii_oxide_dust", amount: 10}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sodium_chromate_solution", amount: 8000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 120,
		duration: 5,

		fluid_inputs: [
			{fluid: "geghilarity:sodium_chromate_solution", amount: 50},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 50}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sodium_dichromate_solution", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:sodium_dichromate_solution", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:sodium_dichromate_dust", amount: 11}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 120,
		duration: 100,
		item_inputs: [
			{item: "modern_industrialization:carbon_dust", amount: 2},
			{item: "geghilarity:sodium_dichromate_dust", amount: 11}
		],
		item_outputs: [	
			{item: "geghilarity:chromium-soda_mixture_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:carbon_monoxide", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 120,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:chromium-soda_mixture_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:chromium_iii_oxide_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:soda_ash_solution", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:reaction_furnace",
		eu: 120,
		duration: 100,
		item_inputs: [
			{item: "modern_industrialization:aluminum_dust", amount: 2},
			{item: "geghilarity:chromium_iii_oxide_dust", amount: 5}
		],
		item_outputs: [	
			{item: "geghilarity:alumina", amount: 5},
			{item: "modern_industrialization:chromium_dust", amount: 2}
		]
	})
	
	
})

/*
	event.custom({ 
		type: "modern_industrialization:",
		eu: 30,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:", amount: 1000}
		]
	})
*/	