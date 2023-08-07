	function legacy_quarry_recipes(event) {
	event.remove({type:"modern_industrialization:quarry"})
	
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_bronze_drill"}],
			"results": [{"item": "modern_industrialization:bronze_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_copper_drill"}],
			"results": [{"item": "modern_industrialization:copper_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_steel_drill"}],
			"results": [{"item": "modern_industrialization:steel_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_stainless_steel_drill"}],
			"results": [{"item": "modern_industrialization:stainless_steel_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_aluminum_drill"}],
			"results": [{"item": "modern_industrialization:aluminum_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_titanium_drill"}],
			"results": [{"item": "modern_industrialization:titanium_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_mob_slaughtering_drill"}],
			"results": [{"item": "kubejs:mob_slaughtering_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_andesite_alloy_drill"}],
			"results": [{"item": "kubejs:andesite_alloy_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_gold_drill"}],
			"results": [{"item": "modern_industrialization:gold_drill"}]
	})
	
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "drilly:dirty_bronze_refined_drill"}],
			"results": [{"item": "drilly:bronze_refined_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "drilly:dirty_iron_refined_drill"}],
			"results": [{"item": "drilly:iron_refined_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "drilly:dirty_hsla_base_drill"}],
			"results": [{"item": "drilly:hsla_base_drill"}]
	})
	
	
	event.recipes.modern_industrialization.quarry(256, 1200)
        .itemIn("kubejs:osmium_drill")
		.itemOut("kubejs:dirty_osmium_drill", 0.92)
		.itemOut("2x geghilarity:naquadric_compound_ore",  0.35)
        .dimension("end")
		.id("quarry_naq")

	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_osmium_drill"}],
			"results": [{"item": "kubejs:osmium_drill"}]
	})
	
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 400,
		item_inputs: [
			{item: "geghilarity:osmium_rod", amount: 1}
			
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 2}
			
		],
		item_outputs: [	
			{item: "geghilarity:osmium_bolt", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 400,
		item_inputs: [
			{item: "geghilarity:osmium_ingot", amount: 1}
			
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 2}
			
		],
		item_outputs: [	
			{item: "geghilarity:osmium_rod", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 2,
		duration: 400,
		item_inputs: [
			{item: "geghilarity:double_osmium_plate", amount: 1},
			{item: "geghilarity:osmium_curved_plate", amount: 2},
			{item: "geghilarity:osmium_rod", amount: 1},
			{item: "geghilarity:osmium_bolt", amount: 3},
			{item: "modern_industrialization:titanium_gear", amount: 2}
			
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 75}
			
		],
		item_outputs: [	
			{item: "geghilarity:osmium_drill_head", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:osmium_drill_head", amount: 1},
			{item: "modern_industrialization:titanium_gear", amount: 2},
			{item: "modern_industrialization:item_pipe", amount: 2},
			{item: "modern_industrialization:large_advanced_motor", amount: 2},
			{item: "modern_industrialization:platinum_cable", amount: 1},
			{item: "modern_industrialization:processing_unit", amount: 1}
			
		],
		item_outputs: [	
			{item: "kubejs:osmium_drill", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:quarry",

			eu: 16,
			duration: 600,
			item_inputs: [
				{item: "modern_industrialization:aluminum_drill", amount: 1}
			],
			item_outputs: [
				{
					item: "kubejs:dirty_aluminum_drill",
					amount: 1,
					probability: 0.96
				},
				{
					// AE2 1.19?????
					item: "ae2:quartz_cluster",
					amount: 8,
					probability: 0.02
				}
			]
		}
	)	
	
	event.shaped("kubejs:andesite_alloy_drill_head", [
		"AAA",
		"AOA",
		"OOO"
	], {
		A: "create:andesite_alloy",
		O: "minecraft:obsidian"
	})

	event.shaped("kubejs:andesite_alloy_drill", [
		"  D",
		"GI ",
		"FG "
	], {
		D: "kubejs:andesite_alloy_drill_head",
		G: "modern_industrialization:iron_gear",
		I: "moderndynamics:item_pipe",
		F: "moderndynamics:fluid_pipe"
	})


	event.shaped("kubejs:mob_slaughtering_drill_head", [
		"RRR",
		"ROR",
		"SSS"
	], {
		R: "wiredredstone:redstone_alloy_ingot",
		O: "minecraft:obsidian",
		S: "wiredredstone:stone_plate"
	})

	event.shaped("kubejs:mob_slaughtering_drill", [
		"  D",
		"GI ",
		"FG "
	], {
		D: "kubejs:mob_slaughtering_drill_head",
		G: "modern_industrialization:iron_gear",
		I: "moderndynamics:item_pipe",
		F: "moderndynamics:fluid_pipe"
	})

	event.custom({ 
		type: "modern_industrialization:quarry",

			type: "modern_industrialization:quarry",
			eu: 4,
			duration: 600,
			item_inputs: {
				item: "modern_industrialization:copper_drill",
				amount: 1,
				probability: 1
			},
			item_outputs: [
				{
					item: "kubejs:dirty_copper_drill",
					amount: 1,
					probability: 0.9
				},
				{
					item: "minecraft:cobblestone",
					amount: 64,
					probability: 1
				},
				{
					item: "minecraft:diorite",
					amount: 16,
					probability: 0.25
				},
				{
					item: "minecraft:andesite",
					amount: 16,
					probability: 0.25
				},
				{
					item: "minecraft:granite",
					amount: 16,
					probability: 0.25
				},
				{
					item: "minecraft:dirt",
					amount: 10,
					probability: 0.5
				},
				{
					item: "minecraft:gravel",
					amount: 10,
					probability: 0.5
				},
				{
					item: "minecraft:cobbled_deepslate",
					amount: 16,
					probability: 0.25
				},
				{
					item: "minecraft:tuff",
					amount: 16,
					probability: 0.25
				},
			]
		}
	)

	event.custom({ 
		type: "modern_industrialization:quarry",

			type: "modern_industrialization:quarry",
			eu: 8,
			duration: 600,
			item_inputs: {
				item: "modern_industrialization:gold_drill",
				amount: 1,
				probability: 1
			},
			item_outputs: [
				{
					item: "kubejs:dirty_gold_drill",
					amount: 1,
					probability: 0.9
				},
				{
					item: "minecraft:netherrack",
					amount: 64,
					probability: 1
				},
				{
					item: "minecraft:blackstone",
					amount: 16,
					probability: 0.25
				},
				{
					item: "minecraft:basalt",
					amount: 16,
					probability: 0.25
				},
				{
					item: "minecraft:soul_soil",
					amount: 20,
					probability: 0.10
				},
				{
					item: "minecraft:magma_block",
					amount: 10,
					probability: 0.05
				},
				{
					item: "minecraft:soul_sand",
					amount: 20,
					probability: 0.25
				},
				{
					item: "minecraft:ancient_debris",
					amount: 1,
					probability: 0.01
				},
				{
					item: "minecraft:glowstone",
					amount: 12,
					probability: 0.05
				}				
			]
		}
	)

	event.custom({ 
		type: "modern_industrialization:quarry",

			type: "modern_industrialization:quarry",
			eu: 32,
			duration: 600,
			item_inputs: {
				item: "modern_industrialization:stainless_steel_drill",
				amount: 1,
				probability: 1
			},
			item_outputs: [
				{
					item: "kubejs:dirty_stainless_steel_drill",
					amount: 1,
					probability: 0.96
				},
				{
					item: "modern_industrialization:tungsten_ore",
					amount: 5,
					probability: 0.02
				},
				{
					item: "modern_industrialization:mozanite_ore",
					amount: 5,
					probability: 0.05
				},
				// TO FIX
				{
					item: "geghilarity:vanadium_magnetite_dust",
					amount: 2,
					probability: 0.05
				}
			]
		}
	)

	event.custom({ 
		type: "modern_industrialization:quarry",

			type: "modern_industrialization:quarry",
			eu: 128,
			duration: 600,
			item_inputs: {
				item: "modern_industrialization:titanium_drill",
				amount: 1,
				probability: 1
			},
			item_outputs: [
				{
					item: "kubejs:dirty_titanium_drill",
					amount: 1,
					probability: 0.96
				},
				{
					item: "modern_industrialization:uranium_ore",
					amount: 10,
					probability: 0.02
				}
			]
		}
	)

	event.custom({ 
		type: "modern_industrialization:quarry",

			type: "modern_industrialization:quarry",
			eu: 32,
			duration: 600,
			item_inputs: {
				item: "kubejs:mob_slaughtering_drill",
				amount: 1,
				probability: 1
			},
			item_outputs: [
				{
					item: "kubejs:dirty_mob_slaughtering_drill",
					amount: 1,
					probability: 0.96
				},
				{
					item: "minecraft:blaze_rod",
					amount: 1,
					probability: 0.01
				},
				{
					item: "minecraft:ender_pearl",
					amount: 1,
					probability: 0.01
				},
				{
					item: "minecraft:ghast_tear",
					amount: 1,
					probability: 0.01
				},
				{
					item: "minecraft:bone",
					amount: 5,
					probability: 0.05
				},
				{
					item: "minecraft:rotten_flesh",
					amount: 5,
					probability: 0.05
				}
			]
		}
	)
	
}


ServerEvents.recipes(event => {
	
	/*
	event.recipes.modern_industrialization.puff(2, 100)
        .itemIn("modern_industrialization:bronze_drill", 0.04)
        .itemOut("minecraft:iron_ore", 0.4)
        .itemOut("minecraft:coal_ore", 0.4)
        .itemOut("minecraft:copper_ore", 0.2)
        .dimension("overworld")
        .adjacentBlock("geghilarity:ironicus_maximum", "below")
	*/
	
	event.shaped('drilly:whole_tier1_experience', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'drilly:tiny_tier1_experience'
	})
	event.shaped('drilly:whole_tier2_experience', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'drilly:tiny_tier2_experience'
	})
	event.shaped('drilly:whole_tier3_experience', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'drilly:tiny_tier3_experience'
	})
	event.shaped('drilly:whole_tier4_experience', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'drilly:tiny_tier4_experience'
	})
	event.shaped('drilly:whole_tier5_experience', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'drilly:tiny_tier5_experience'
	})

	// driller
	event.shaped('modern_industrialization:bronze_drill1', [
		'BCB',
		'ADA',
		'BEB'
	], {
		A: 'modern_industrialization:copper_rod',
		B: 'modern_industrialization:copper_plate',
		C: 'modern_industrialization:copper_gear',
		D: 'create:cogwheel',
		E: 'create:mechanical_piston'
	})

	event.shaped('modern_industrialization:bronze_drill2', [
		'BAB',
		'CEC',
		'BDB'
	], {
		A: 'drilly:whole_tier1_experience',
		B: 'modern_industrialization:bronze_plate',
		C: 'modern_industrialization:bronze_gear',
		D: 'modern_industrialization:bronze_drill1',
		E: 'modern_industrialization:bronze_machine_casing'
	})	

	// experience to be replaced by mechanism, and embedded in it for early game processing chain
	event.shaped('modern_industrialization:bronze_drill3', [
		'BAF',
		'CEC',
		'BDB'
	], {
		A: 'drilly:whole_tier2_experience',
		B: 'modern_industrialization:bronze_plate',
		C: 'modern_industrialization:bronze_gear',
		D: 'modern_industrialization:bronze_drill2',
		E: 'modern_industrialization:bronze_machine_casing',
		F: 'create:precision_mechanism'
	})	
	
	// same as above
	event.shaped('modern_industrialization:steel_drill4', [
		'BAF',
		'CEC',
		'BDB'
	], {
		A: 'drilly:whole_tier3_experience',
		B: 'modern_industrialization:steel_plate',
		C: 'modern_industrialization:steel_gear',
		D: 'modern_industrialization:bronze_drill3',
		E: 'modern_industrialization:steel_machine_casing',
		F: 'create:precision_mechanism'
	})
	
	event.shaped('drilly:copper_drill', [
		'BCB',
		' B ',
		'   '
	], {
		B: 'modern_industrialization:copper_plate',
		C: 'create:cogwheel'
	})
	
	event.shaped('drilly:bronze_base_drill', [
		' D ',
		'BCB',
		' B '
	], {
		B: 'modern_industrialization:bronze_plate',
		C: 'modern_industrialization:bronze_gear',
		D: 'create:mechanical_piston'
	})
	
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "modern_industrialization:bronze_plate"},
		transitionalItem: {"item": "drilly:incomplete_bronze_refined_drill"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_bronze_refined_drill"},
					{"item": "modern_industrialization:bronze_plate"}
				],
				results: [{
					"item": "drilly:incomplete_bronze_refined_drill"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "drilly:incomplete_bronze_refined_drill"}
				],
				results: [{
					"item": "drilly:incomplete_bronze_refined_drill"
				}]
		  	},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_bronze_refined_drill"},
					{"item": "modern_industrialization:bronze_rod"}
				],
				results: [{
					"item": "drilly:incomplete_bronze_refined_drill"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_bronze_refined_drill"},
					{"item": "modern_industrialization:bronze_rod"}
				],
				results: [{
					"item": "drilly:incomplete_bronze_refined_drill"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_bronze_refined_drill"},
					{"item": "modern_industrialization:bronze_gear"}
				],
				results: [{
					"item": "drilly:incomplete_bronze_refined_drill"
				}]
			},
			{
				
				type: "create:filling",
				ingredients: [
					{"item": "drilly:incomplete_bronze_refined_drill"},
					{"amount": 1620, "fluid": "modern_industrialization:lubricant"}
				],
				results: [{
					"item": "drilly:incomplete_bronze_refined_drill"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_bronze_refined_drill"},
					{"item": "create:mechanical_piston"}
				],
				results: [{
					"item": "drilly:incomplete_bronze_refined_drill"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_bronze_refined_drill"},
					{"item": "modern_industrialization:bronze_curved_plate"}
				],
				results: [{
					"item": "drilly:incomplete_bronze_refined_drill"
				}]
			}		
		],
		results: [{
			"item": "drilly:bronze_refined_drill"
		}],
		loops: 1
	  }
	)
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "modern_industrialization:iron_plate"},
		transitionalItem: {"item": "drilly:incomplete_iron_refined_drill"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_iron_refined_drill"},
					{"item": "modern_industrialization:iron_plate"}
				],
				results: [{
					"item": "drilly:incomplete_iron_refined_drill"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "drilly:incomplete_iron_refined_drill"}
				],
				results: [{
					"item": "drilly:incomplete_iron_refined_drill"
				}]
		  	},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_iron_refined_drill"},
					{"item": "modern_industrialization:iron_rod"}
				],
				results: [{
					"item": "drilly:incomplete_iron_refined_drill"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_iron_refined_drill"},
					{"item": "modern_industrialization:iron_rod"}
				],
				results: [{
					"item": "drilly:incomplete_iron_refined_drill"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_iron_refined_drill"},
					{"item": "modern_industrialization:bronze_gear"}
				],
				results: [{
					"item": "drilly:incomplete_iron_refined_drill"
				}]
			},
			{
				
				type: "create:filling",
				ingredients: [
					{"item": "drilly:incomplete_iron_refined_drill"},
					{"amount": 3240, "fluid": "modern_industrialization:lubricant"}
				],
				results: [{
					"item": "drilly:incomplete_iron_refined_drill"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_iron_refined_drill"},
					{"item": "create:mechanical_piston"}
				],
				results: [{
					"item": "drilly:incomplete_iron_refined_drill"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_iron_refined_drill"},
					{"item": "geggy:iron_curved_plate"}
				],
				results: [{
					"item": "drilly:incomplete_iron_refined_drill"
				}]
			}		
		],
		results: [{
			"item": "drilly:iron_refined_drill"
		}],
		loops: 1
	  }
	)
	
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "geggy:hsla_plate"},
		transitionalItem: {"item": "drilly:incomplete_hsla_drill_head"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_hsla_drill_head"},
					{"item": "geggy:hsla_shaft_unit"}
				],
				results: [{
					"item": "drilly:incomplete_hsla_drill_head"
				}]
			},
			{	
				type: "create:filling",
				ingredients: [
					{"item": "drilly:incomplete_hsla_drill_head"},
					{"amount": 972, "fluid": "modern_industrialization:soldering_alloy"}
				],
				results: [{
					"item": "drilly:incomplete_hsla_drill_head"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_hsla_drill_head"},
					{"item": "geggy:hsla_ingot"}
				],
				results: [{
					"item": "drilly:incomplete_hsla_drill_head"
				}]
			},
						{
				type: "create:pressing",
				ingredients: [
					{"item": "drilly:incomplete_hsla_drill_head"}
				],
				results: [{
					"item": "drilly:incomplete_hsla_drill_head"
				}]
		  	},
			{
				type: "create:cutting",
				ingredients: [
					{"item": "drilly:incomplete_hsla_drill_head"}
				],
				results: [{
					"item": "drilly:incomplete_hsla_drill_head"
				}]
			}		
		],
		results: [{
			"item": "drilly:hsla_drill_head"
		}],
		loops: 2
	  }
	)
	
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "drilly:hsla_drill_head"},
		transitionalItem: {"item": "drilly:incomplete_hsla_base_drill"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_hsla_base_drill"},
					{"item": "modern_industrialization:iron_ring"}
				],
				results: [{
					"item": "drilly:incomplete_hsla_base_drill"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_hsla_base_drill"},
					{"item": "modern_industrialization:iron_ring"}
				],
				results: [{
					"item": "drilly:incomplete_hsla_base_drill"
				}]
			},
			{	
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_hsla_base_drill"},
					{"item": "modern_industrialization:rubber_sheet"}
				],
				results: [{
					"item": "drilly:incomplete_hsla_base_drill"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_hsla_base_drill"},
					{"item": "create:mechanical_piston"}
				],
				results: [{
					"item": "drilly:incomplete_hsla_base_drill"
				}]
			},
			{	
				type: "create:filling",
				ingredients: [
					{"item": "drilly:incomplete_hsla_base_drill"},
					{"amount": 972, "fluid": "modern_industrialization:soldering_alloy"}
				],
				results: [{
					"item": "drilly:incomplete_hsla_base_drill"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_hsla_base_drill"},
					{"item": "geggy:bronze_piston"}
				],
				results: [{
					"item": "drilly:incomplete_hsla_base_drill"
				}]
			}
		],
		results: [{
			"item": "drilly:hsla_base_drill"
		}],
		loops: 1
	  }
	)
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 300,
		item_inputs: [ 
			{item: "geggy:hsla_plate", amount: 1},
			{item: "geggy:hsla_shaft_unit", amount: 2}, 
			{item: "geggy:hsla_ingot", amount: 2}
		],
		fluid_inputs: [
		{fluid: "modern_industrialization:soldering_alloy", amount: 24}
		],
		item_outputs: [
			{item: "drilly:hsla_drill_head", amount: 1},
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 400,
		item_inputs: [ 
			{item: "drilly:hsla_drill_head", amount: 1},
			{item: "modern_industrialization:iron_ring", amount: 2},
			{item: "create:mechanical_piston", amount: 1}, 
			{item: "geggy:bronze_piston", amount: 1}
		],
		fluid_inputs: [
		{fluid: "modern_industrialization:soldering_alloy", amount: 12},
		{fluid: "modern_industrialization:synthetic_rubber", amount: 50}
		],
		item_outputs: [
			{item: "drilly:hsla_base_drill", amount: 1},
		]
	})
	
	/*
	event.shaped('drilly:bronze_refined_drill', [
		'ADA',
		'BCB',
		' E '
	], {
		A: 'modern_industrialization:bronze_rod',
		B: 'modern_industrialization:bronze_plate',
		C: 'modern_industrialization:bronze_gear',
		D: 'create:mechanical_piston',
		E: 'modern_industrialization:bronze_curved_plate'
	})
	
	event.shaped('drilly:iron_refined_drill', [
		'ADA',
		'BCB',
		' E '
	], {
		A: 'modern_industrialization:iron_rod',
		B: 'modern_industrialization:iron_plate',
		C: 'modern_industrialization:iron_gear',
		D: 'create:mechanical_piston',
		E: 'geggy:iron_curved_plate'
	})
	*/
	
	event.shaped('modern_industrialization:bronze_proto', [
		'DED',
		'DBD',
		'CAC'
	], {
		A: 'minecraft:furnace',
		B: 'create:fluid_tank',
		C: 'create:fluid_pipe',
		D: 'modern_industrialization:copper_plate',
		E: 'modern_industrialization:copper_rotor'
	})
	

	
	// Tier 1/2 copper
	
	event.recipes.modern_industrialization.drill1(2, 6000)
        .itemIn("drilly:copper_drill", 0.09)
		.itemIn("drilly:drill_group1", 0.00)
		//.itemIn("geggy:selector_1", 0.00)
        .itemOut("5x minecraft:raw_copper", 0.58)
        .itemOut("modern_industrialization:raw_tin",  0.25)
        .itemOut("minecraft:raw_iron", 0.07)
		.itemOut("minecraft:coal", 0.08)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("001_coppercore_slow")
		
	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:copper_drill", 0.14) // 0.09
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("5x minecraft:raw_copper", 0.69) // +4
        .itemOut("modern_industrialization:raw_tin",  0.29) // +4
        .itemOut("minecraft:raw_iron", 0.08) // +1
		.itemOut("minecraft:coal", 0.09)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("009_coppercore_slow")	
	/*	
	event.recipes.modern_industrialization.drill1(2, 3600)
        .itemIn("drilly:copper_drill", 0.24)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("5x minecraft:raw_copper", 0.32)
		.itemOut("modern_industrialization:raw_tin",  0.22)
		.itemOut("minecraft:raw_iron", 0.10)
		.itemOut("minecraft:coal", 0.11)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("002_coppercore_fast")
	*/	
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:copper_drill", 0.34) // 0.12
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("5x minecraft:raw_copper", 0.68)
		.itemOut("modern_industrialization:raw_tin",  0.26)
		.itemOut("minecraft:raw_iron", 0.11)
		.itemOut("minecraft:coal", 0.12)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("010_coppercore_fast")	
		
	// copper/tin	

	event.recipes.modern_industrialization.drill1(2, 6000)
        .itemIn("drilly:copper_drill", 0.10)
		.itemIn("drilly:drill_group1", 0.00)
		//.itemIn("geggy:selector_1", 0.00)
        .itemOut("2x modern_industrialization:raw_tin", 0.3)
        .itemOut("minecraft:raw_copper",  0.20)
		.itemOut("minecraft:coal", 0.08)
		.itemOut("2x minecraft:andesite", 0.12)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("003_tincore_slow")
		
	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:copper_drill", 0.15)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("2x modern_industrialization:raw_tin", 0.34)
        .itemOut("minecraft:raw_copper",  0.24)
		.itemOut("minecraft:coal", 0.09)
		.itemOut("2x minecraft:andesite", 0.14) // +2
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("011_tincore_slow")	
	/*	
	event.recipes.modern_industrialization.drill1(2, 3600)
        .itemIn("drilly:copper_drill", 0.26)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("2x modern_industrialization:raw_tin", 0.33)
		.itemOut("minecraft:raw_copper",  0.18)
		.itemOut("minecraft:coal", 0.11)
		.itemOut("2x minecraft:andesite", 0.10)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("004_tincore_fast")
	*/	
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:copper_drill", 0.36)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("2x modern_industrialization:raw_tin", 0.32)
		.itemOut("minecraft:raw_copper",  0.22)
		.itemOut("minecraft:coal", 0.12)
		.itemOut("2x minecraft:andesite", 0.12) // +2
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("012_tincore_fast")	
		
	// copper/coal			

	event.recipes.modern_industrialization.drill1(2, 6000)
        .itemIn("drilly:copper_drill", 0.08)
		.itemIn("drilly:drill_group2", 0.00)
		//.itemIn("geggy:selector_1", 0.00)
        .itemOut("5x minecraft:coal", 0.35)
        .itemOut("modern_industrialization:lignite_coal",  0.25)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("005_coalcore_slow")
		
	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:copper_drill", 0.13)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("5x minecraft:coal", 0.39)
        .itemOut("modern_industrialization:lignite_coal",  0.28) // +3
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("013_coalcore_slow")	
	/*	
	event.recipes.modern_industrialization.drill1(2, 3600)
        .itemIn("drilly:copper_drill", 0.22)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("5x minecraft:coal", 0.32)
		.itemOut("modern_industrialization:lignite_coal",  0.2)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("006_coalcore_fast")
	*/	
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:copper_drill", 0.32)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("5x minecraft:coal", 0.36)
		.itemOut("modern_industrialization:lignite_coal",  0.23)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("014_coalcore_fast")

	// copper/lignite	

	event.recipes.modern_industrialization.drill1(2, 6000)
        .itemIn("drilly:copper_drill", 0.07)
		.itemIn("drilly:drill_group2", 0.00)
		//.itemIn("geggy:selector_1", 0.00)
        .itemOut("4x modern_industrialization:lignite_coal",  0.35)
		.itemOut("2x minecraft:andesite", 0.25)
        .itemOut("minecraft:raw_iron", 0.03)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")
		.id("007_lignitecore_slow")
		
	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:copper_drill", 0.12)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("4x modern_industrialization:lignite_coal",  0.39)
		.itemOut("2x minecraft:andesite", 0.28) // +3
        .itemOut("minecraft:raw_iron", 0.03)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")
		.id("015_lignitecore_slow")	
	/*	
	event.recipes.modern_industrialization.drill1(2, 3600)
        .itemIn("drilly:copper_drill", 0.20)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("4x modern_industrialization:lignite_coal",  0.32)
		.itemOut("2x minecraft:andesite", 0.22)
		.itemOut("minecraft:raw_iron", 0.02)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")	
		.id("008_lignitecore_fast")	
	*/
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:copper_drill", 0.30)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("4x modern_industrialization:lignite_coal",  0.36)
		.itemOut("2x minecraft:andesite", 0.25)
		.itemOut("minecraft:raw_iron", 0.03)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")	
		.id("016_lignitecore_fast")	

	// QUARTZ early access
	event.recipes.modern_industrialization.drill1(2, 6000)
        .itemIn("drilly:copper_drill", 0.09)
		.itemIn("drilly:drill_groupx", 0.00)
		//.itemIn("geggy:selector_1", 0.00)
		.itemOut("2x minecraft:quartz",  0.52)
		.itemOut("1x minecraft:andesite", 0.24)
		.itemOut("1x minecraft:basalt", 0.15)
		.itemOut("1x minecraft:glowstone", 0.06)
		.itemOut("1x geghilarity:precious_nugget", 0.2)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("qea_quartzcore_slow")	

	// ZINC early access
	event.recipes.modern_industrialization.drill1(2, 6000)
        .itemIn("drilly:copper_drill", 0.06)
		.itemIn("drilly:drill_group3", 0.00)
		//.itemIn("geggy:selector_1", 0.00)
		.itemOut("2x create:raw_zinc",  0.15)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:zinc_corenode", "below")	
		.id("qea_zinccore_slow")	
		
	// TIER 2/bronze1	
		
	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.09)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("9x minecraft:raw_copper", 0.58)
        .itemOut("2x modern_industrialization:raw_tin",  0.25)
        .itemOut("2x minecraft:raw_iron", 0.07)
		.itemOut("2x minecraft:coal", 0.08)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("017_coppercore_slow")
		
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.24)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("9x minecraft:raw_copper", 0.56)
		.itemOut("2x modern_industrialization:raw_tin",  0.22)
		.itemOut("2x minecraft:raw_iron", 0.10)
		.itemOut("2x minecraft:coal", 0.11)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("018_coppercore_fast")

	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.10)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("4x modern_industrialization:raw_tin", 0.30)
        .itemOut("2x minecraft:raw_copper",  0.20)
		.itemOut("2x minecraft:coal", 0.08)
		.itemOut("4x minecraft:andesite", 0.12)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("019_tincore_slow")
		
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.26)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("4x modern_industrialization:raw_tin", 0.28)
		.itemOut("2x minecraft:raw_copper",  0.18)
		.itemOut("2x minecraft:coal", 0.11)
		.itemOut("4x minecraft:andesite", 0.10)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("020_tincore_fast")

	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.08)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("9x minecraft:coal", 0.35)
        .itemOut("2x modern_industrialization:lignite_coal",  0.25)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("021_coalcore_slow")
		
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.22)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("9x minecraft:coal", 0.32)
		.itemOut("2x modern_industrialization:lignite_coal",  0.2)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("022_coalcore_fast")

	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.07)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("8x modern_industrialization:lignite_coal",  0.35)
		.itemOut("3x minecraft:andesite", 0.25)
        .itemOut("2x minecraft:raw_iron", 0.03)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")
		.id("023_lignitecore_slow")
		
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.20)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("8x modern_industrialization:lignite_coal",  0.32)
		.itemOut("3x minecraft:andesite", 0.22)
		.itemOut("2x minecraft:raw_iron", 0.02)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")	
		.id("024_lignitecore_fast")
		
	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.09)
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("2x modern_industrialization:raw_lead",  0.2)
		.itemOut("create:raw_zinc", 0.15)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:lead_corenode", "below")	
		.id("024a_leadcore_slow")

	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.24)
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("2x modern_industrialization:raw_lead",  0.18)
		.itemOut("create:raw_zinc", 0.14)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:lead_corenode", "below")	
		.id("024b_leadcore_fast")	
		
	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.09)
		.itemIn("drilly:drill_groupx", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("3x minecraft:quartz",  0.52)
		.itemOut("2x minecraft:andesite", 0.24)
		.itemOut("1x minecraft:basalt", 0.30)
		.itemOut("1x minecraft:glowstone", 0.12)
		.itemOut("1x geghilarity:precious_nugget", 0.3)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("024xa_quartzcore_slow")
		
	// ZINC early access
	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.06)
		.itemIn("drilly:drill_group3", 0.00)
		//.itemIn("geggy:selector_1", 0.00)
		.itemOut("3x create:raw_zinc",  0.15)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:zinc_corenode", "below")	
		.id("qea2_zinccore_slow")	

	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.24)
		.itemIn("drilly:drill_groupx", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("3x minecraft:quartz",  0.48)
		.itemOut("2x minecraft:andesite", 0.22)
		.itemOut("1x minecraft:basalt", 0.28)
		.itemOut("1x minecraft:glowstone", 0.1)
		.itemOut("1x geghilarity:precious_nugget", 0.28)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("024xb_quartzcore_fast")	
		
	// TIER 3/bronze1	
	
	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.15) // +6
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("9x minecraft:raw_copper", 0.67) // +4
        .itemOut("2x modern_industrialization:raw_tin",  0.29) // +4
        .itemOut("2x minecraft:raw_iron", 0.08) // +1
		.itemOut("2x minecraft:coal", 0.09)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("025_coppercore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.36)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("9x minecraft:raw_copper", 0.66)
		.itemOut("2x modern_industrialization:raw_tin",  0.26)
		.itemOut("2x minecraft:raw_iron", 0.11)
		.itemOut("2x minecraft:coal", 0.12)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("026_coppercore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.16)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("4x modern_industrialization:raw_tin", 0.35)
        .itemOut("2x minecraft:raw_copper",  0.26)
		.itemOut("2x minecraft:coal", 0.09)
		.itemOut("4x minecraft:andesite", 0.14)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("027_tincore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.38)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("4x modern_industrialization:raw_tin", 0.33)
		.itemOut("2x minecraft:raw_copper",  0.24)
		.itemOut("2x minecraft:coal", 0.12)
		.itemOut("4x minecraft:andesite", 0.12)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("028_tincore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.14)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("9x minecraft:coal", 0.39)
        .itemOut("2x modern_industrialization:lignite_coal",  0.28)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("029_coalcore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.34)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("9x minecraft:coal", 0.36)
		.itemOut("2x modern_industrialization:lignite_coal",  0.28)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("030_coalcore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.13)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("8x modern_industrialization:lignite_coal",  0.39)
		.itemOut("3x minecraft:andesite", 0.28)
        .itemOut("2x minecraft:raw_iron", 0.03)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")
		.id("031_lignitecore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.32)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("8x modern_industrialization:lignite_coal",  0.36)
		.itemOut("3x minecraft:andesite", 0.25)
		.itemOut("2x minecraft:raw_iron", 0.03)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")	
		.id("032_lignitecore_fast")
		
	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.15)
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("2x modern_industrialization:raw_lead",  0.24)
		.itemOut("create:raw_zinc", 0.18)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:lead_corenode", "below")	
		.id("032a_leadcore_slow")

	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.36)
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("2x modern_industrialization:raw_lead",  0.22)
		.itemOut("create:raw_zinc", 0.17)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:lead_corenode", "below")	
		.id("032b_leadcore_fast")	
		
	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.15)
		.itemIn("drilly:drill_groupx", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("3x minecraft:quartz",  0.58)
		.itemOut("2x minecraft:andesite", 0.27)
		.itemOut("1x minecraft:basalt", 0.33)
		.itemOut("1x minecraft:glowstone", 0.15)
		.itemOut("1x geghilarity:precious_nugget", 0.33)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("032xa_quartzcore_slow")

	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.36)
		.itemIn("drilly:drill_groupx", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("3x minecraft:quartz",  0.54)
		.itemOut("2x minecraft:andesite", 0.25)
		.itemOut("1x minecraft:basalt", 0.31)
		.itemOut("1x minecraft:glowstone", 0.13)
		.itemOut("1x geghilarity:precious_nugget", 0.31)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("032xb_quartzcore_fast")	
		
	// T3/t3-bronze2

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill") // +6
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.93)
        .itemOut("15x minecraft:raw_copper", 0.41) // +6
        .itemOut("3x modern_industrialization:raw_tin",  0.25) // +1
        .itemOut("3x minecraft:raw_iron", 0.07)
		.itemOut("3x minecraft:coal", 0.08)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("033_coppercore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.80)
		.itemOut("15x minecraft:raw_copper", 0.40)
		.itemOut("3x modern_industrialization:raw_tin",  0.22)
		.itemOut("3x minecraft:raw_iron", 0.10)
		.itemOut("3x minecraft:coal", 0.11)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("034_coppercore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.92)
        .itemOut("7x modern_industrialization:raw_tin", 0.30)
        .itemOut("3x minecraft:raw_copper",  0.20)
		.itemOut("3x minecraft:coal", 0.08)
		.itemOut("5x minecraft:andesite", 0.12)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("035_tincore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.78)
		.itemOut("7x modern_industrialization:raw_tin", 0.28)
		.itemOut("3x minecraft:raw_copper",  0.18)
		.itemOut("3x minecraft:coal", 0.11)
		.itemOut("5x minecraft:andesite", 0.10)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("036_tincore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.94)
        .itemOut("15x minecraft:coal", 0.28)
        .itemOut("3x modern_industrialization:lignite_coal",  0.25)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("037_coalcore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.82)
		.itemOut("15x minecraft:coal", 0.25)
		.itemOut("3x modern_industrialization:lignite_coal",  0.2)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("038_coalcore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.95)
        .itemOut("12x modern_industrialization:lignite_coal",  0.26)
		.itemOut("4x minecraft:andesite", 0.25)
        .itemOut("3x minecraft:raw_iron", 0.03)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")
		.id("039_lignitecore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.84)
		.itemOut("12x modern_industrialization:lignite_coal",  0.23)
		.itemOut("4x minecraft:andesite", 0.22)
		.itemOut("3x minecraft:raw_iron", 0.02)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")	
		.id("040_lignitecore_fast")	
		
	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.93)
		.itemOut("3x modern_industrialization:raw_lead",  0.20)
		.itemOut("2x create:raw_zinc", 0.15)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:lead_corenode", "below")	
		.id("040a_leadcore_slow")

	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.8)
		.itemOut("3x modern_industrialization:raw_lead",  0.18)
		.itemOut("2x create:raw_zinc", 0.14)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:lead_corenode", "below")	
		.id("040b_leadcore_fast")
		
	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_groupx", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.93)
		.itemOut("5x minecraft:quartz",  0.43)
		.itemOut("3x minecraft:andesite", 0.24)
		.itemOut("2x minecraft:basalt", 0.30)
		.itemOut("2x minecraft:glowstone", 0.12)
		.itemOut("2x geghilarity:precious_nugget", 0.3)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("040xa_quartzcore_slow")

	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_groupx", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.8)
		.itemOut("5x minecraft:quartz",  0.39)
		.itemOut("3x minecraft:andesite", 0.22)
		.itemOut("2x minecraft:basalt", 0.28)
		.itemOut("2x minecraft:glowstone", 0.1)
		.itemOut("2x geghilarity:precious_nugget", 0.28)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("040xb_quartzcore_fast")	

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.85)
		.itemOut("5x minecraft:raw_iron",  0.15)
		.itemOut("2x modern_industrialization:raw_tin", 0.15)
		.itemOut("2x modern_industrialization:raw_nickel", 0.12)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:iron_corenode", "below")	
		.id("040c_ironcore_slow")

	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.72)
		.itemOut("5x minecraft:raw_iron",  0.13)
		.itemOut("2x modern_industrialization:raw_tin", 0.12)
		.itemOut("2x modern_industrialization:raw_nickel", 0.1)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:iron_corenode", "below")	
		.id("040d_ironcore_fast")	
		
	// ZINC early access
	event.recipes.modern_industrialization.drill3(2, 6000)
		.itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group3", 0.00)
		//.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.95)
		.itemOut("5x create:raw_zinc",  0.15)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:zinc_corenode", "below")	
		.id("qea3_zinccore_slow")	
		
	// T4/t3-bronze2	
	
	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:bronze_refined_drill") // +6
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.87)
        .itemOut("15x minecraft:raw_copper", 0.44) // +6
        .itemOut("3x modern_industrialization:raw_tin",  0.29) // +1
        .itemOut("3x minecraft:raw_iron", 0.08)
		.itemOut("3x minecraft:coal", 0.09)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("041_coppercore_slow")
		
	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.66)
		.itemOut("15x minecraft:raw_copper", 0.43)
		.itemOut("3x modern_industrialization:raw_tin",  0.26)
		.itemOut("3x minecraft:raw_iron", 0.11)
		.itemOut("3x minecraft:coal", 0.12)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("042_coppercore_fast")

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.86)
        .itemOut("7x modern_industrialization:raw_tin", 0.34)
        .itemOut("3x minecraft:raw_copper",  0.24)
		.itemOut("3x minecraft:coal", 0.09)
		.itemOut("5x minecraft:andesite", 0.14)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("043_tincore_slow")
		
	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.64)
		.itemOut("7x modern_industrialization:raw_tin", 0.32)
		.itemOut("3x minecraft:raw_copper",  0.24)
		.itemOut("3x minecraft:coal", 0.12)
		.itemOut("5x minecraft:andesite", 0.12)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("044_tincore_fast")

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.88)
        .itemOut("15x minecraft:coal", 0.32)
        .itemOut("3x modern_industrialization:lignite_coal",  0.28)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("045_coalcore_slow")
		
	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.68)
		.itemOut("15x minecraft:coal", 0.29)
		.itemOut("3x modern_industrialization:lignite_coal",  0.23)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("046_coalcore_fast")

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.89)
        .itemOut("12x modern_industrialization:lignite_coal",  0.3)
		.itemOut("4x minecraft:andesite", 0.28)
        .itemOut("3x minecraft:raw_iron", 0.03)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")
		.id("047_lignitecore_slow")
		
	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.70)
		.itemOut("12x modern_industrialization:lignite_coal",  0.27)
		.itemOut("4x minecraft:andesite", 0.25)
		.itemOut("3x minecraft:raw_iron", 0.03)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")	
		.id("048_lignitecore_fast")	
		
	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.87)
		.itemOut("3x modern_industrialization:raw_lead",  0.24)
		.itemOut("2x geghilarity:acanthite_dust", 0.2)
		.itemOut("2x create:raw_zinc", 0.18)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:lead_corenode", "below")	
		.id("048a_leadcore_slow")

	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.66)
		.itemOut("3x modern_industrialization:raw_lead",  0.22)
		.itemOut("2x geghilarity:acanthite_dust", 0.18)
		.itemOut("2x create:raw_zinc", 0.17)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:lead_corenode", "below")	
		.id("048b_leadcore_fast")	
		
	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_groupx", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.87)
		.itemOut("5x minecraft:quartz",  0.49)
		.itemOut("3x minecraft:andesite", 0.27)
		.itemOut("2x minecraft:basalt", 0.33)
		.itemOut("2x minecraft:glowstone", 0.15)
		.itemOut("2x geghilarity:precious_nugget", 0.33)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("048xa_quartzcore_slow")

	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_groupx", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.66)
		.itemOut("5x minecraft:quartz",  0.45)
		.itemOut("3x minecraft:andesite", 0.25)
		.itemOut("2x minecraft:basalt", 0.31)
		.itemOut("2x minecraft:glowstone", 0.13)
		.itemOut("2x geghilarity:precious_nugget", 0.31)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("048xb_quartzcore_fast")	

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.77)
		.itemOut("5x minecraft:raw_iron",  0.20)
		.itemOut("2x modern_industrialization:raw_tin", 0.18)
		.itemOut("2x modern_industrialization:raw_nickel", 0.15)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:iron_corenode", "below")	
		.id("048c_ironcore_slow")

	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.56)
		.itemOut("5x minecraft:raw_iron",  0.18)
		.itemOut("2x modern_industrialization:raw_tin", 0.15)
		.itemOut("2x modern_industrialization:raw_nickel", 0.13)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:iron_corenode", "below")	
		.id("048d_ironcore_fast")	
		
	// tier4/iron

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:iron_refined_drill") // +6
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.89)
        .itemOut("20x minecraft:raw_copper", 0.35) // +5
        .itemOut("3x modern_industrialization:raw_tin",  0.25) // +1
        .itemOut("3x minecraft:raw_iron", 0.07)
		.itemOut("3x minecraft:coal", 0.08)
		.itemOut("drilly:tiny_tier4_experience", 0.26)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("049_coppercore_slow")
		
	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.75)
		.itemOut("20x minecraft:raw_copper", 0.33)
		.itemOut("3x modern_industrialization:raw_tin",  0.22)
		.itemOut("3x minecraft:raw_iron", 0.1)
		.itemOut("3x minecraft:coal", 0.11)
		.itemOut("drilly:tiny_tier4_experience", 0.16)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("050_coppercore_fast")

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.88)
        .itemOut("9x modern_industrialization:raw_tin", 0.3)
        .itemOut("3x minecraft:raw_copper",  0.20)
		.itemOut("3x minecraft:coal", 0.08)
		.itemOut("6x minecraft:andesite", 0.12)
		.itemOut("drilly:tiny_tier4_experience", 0.26)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("051_tincore_slow")
		
	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.73)
		.itemOut("9x modern_industrialization:raw_tin", 0.28)
		.itemOut("3x minecraft:raw_copper",  0.18)
		.itemOut("3x minecraft:coal", 0.11)
		.itemOut("6x minecraft:andesite", 0.1)
		.itemOut("drilly:tiny_tier4_experience", 0.16)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("052_tincore_fast")

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.9)
        .itemOut("20x minecraft:coal", 0.26)
        .itemOut("3x modern_industrialization:lignite_coal", 0.26)
		.itemOut("drilly:tiny_tier4_experience", 0.26)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("053_coalcore_slow")
		
	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.77)
		.itemOut("20x minecraft:coal", 0.23)
		.itemOut("3x modern_industrialization:lignite_coal", 0.2)
		.itemOut("drilly:tiny_tier4_experience", 0.16)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("054_coalcore_fast")

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.91)
        .itemOut("15x modern_industrialization:lignite_coal", 0.23)
		.itemOut("5x minecraft:andesite", 0.25)
        .itemOut("3x minecraft:raw_iron", 0.03)
		.itemOut("drilly:tiny_tier4_experience", 0.26)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")
		.id("055_lignitecore_slow")
		
	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.78)
		.itemOut("15x modern_industrialization:lignite_coal", 0.2)
		.itemOut("5x minecraft:andesite", 0.22)
		.itemOut("3x minecraft:raw_iron", 0.02)
		.itemOut("drilly:tiny_tier4_experience", 0.16)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")	
		.id("056_lignitecore_fast")	
		
	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.87)
		.itemOut("4x modern_industrialization:raw_lead", 0.25)
		.itemOut("3x geghilarity:acanthite_dust", 0.18)
		.itemOut("3x create:raw_zinc", 0.15)
		.itemOut("drilly:tiny_tier4_experience", 0.26)
        .dimension("overworld")
        .adjacentBlock("geggy:lead_corenode", "below")	
		.id("056a_leadcore_slow")

	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.72)
		.itemOut("4x modern_industrialization:raw_lead",  0.23)
		.itemOut("3x geghilarity:acanthite_dust", 0.16)
		.itemOut("3x create:raw_zinc", 0.14)
		.itemOut("drilly:tiny_tier4_experience", 0.16)
        .dimension("overworld")
        .adjacentBlock("geggy:lead_corenode", "below")	
		.id("056b_leadcore_fast")

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_groupx", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.9)
		.itemOut("7x minecraft:quartz",  0.39)
		.itemOut("4x minecraft:andesite", 0.24)
		.itemOut("3x minecraft:basalt", 0.30)
		.itemOut("3x minecraft:glowstone", 0.12)
		.itemOut("3x geghilarity:precious_nugget", 0.3)
		.itemOut("drilly:tiny_tier4_experience", 0.26)
        .dimension("nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("056xa_quartzcore_slow")

	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_groupx", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.76)
		.itemOut("7x minecraft:quartz",  0.36)
		.itemOut("4x minecraft:andesite", 0.22)
		.itemOut("3x minecraft:basalt", 0.28)
		.itemOut("3x minecraft:glowstone", 0.1)
		.itemOut("3x geghilarity:precious_nugget", 0.28)
		.itemOut("drilly:tiny_tier4_experience", 0.16)
        .dimension("nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("056xb_quartzcore_fast")		
		
	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.85)
		.itemOut("8x minecraft:raw_iron", 0.52)
		.itemOut("3x modern_industrialization:raw_tin", 0.15)
		.itemOut("3x modern_industrialization:raw_nickel", 0.12)
		.itemOut("drilly:tiny_tier4_experience", 0.26)
        .dimension("overworld")
        .adjacentBlock("geggy:iron_corenode", "below")	
		.id("056c_ironcore_slow")

	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.65)
		.itemOut("8x minecraft:raw_iron",  0.45)
		.itemOut("3x modern_industrialization:raw_tin", 0.12)
		.itemOut("3x modern_industrialization:raw_nickel", 0.1)
		.itemOut("drilly:tiny_tier4_experience", 0.16)
        .dimension("overworld")
        .adjacentBlock("geggy:iron_corenode", "below")	
		.id("056d_ironcore_fast")	

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.84)
		.itemOut("8x modern_industrialization:raw_nickel", 0.15)
		.itemOut("drilly:tiny_tier4_experience", 0.26)
        .dimension("overworld")
        .adjacentBlock("geggy:nickel_corenode", "below")	
		.id("056e_nickelcore_slow")

	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.64)
		.itemOut("8x modern_industrialization:raw_nickel", 0.13)
		.itemOut("drilly:tiny_tier4_experience", 0.16)
        .dimension("overworld")
        .adjacentBlock("geggy:nickel_corenode", "below")	
		.id("056f_nickelcore_fast")	
		
	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.87)
		.itemOut("8x create:raw_zinc", 0.15)
		.itemOut("drilly:tiny_tier4_experience", 0.26)
        .dimension("overworld")
        .adjacentBlock("geggy:zinc_corenode", "below")	
		.id("056g_zinccore_slow")

	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.67)
		.itemOut("8x create:raw_zinc", 0.13)
		.itemOut("drilly:tiny_tier4_experience", 0.16)
        .dimension("overworld")
        .adjacentBlock("geggy:zinc_corenode", "below")	
		.id("056h_zinccore_fast")
		
	//////////////////////////////////////////////////////
	// LV //
	//////////////////////////////////////////////////////

	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill") // +6
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.92)
        .itemOut("2x minecraft:copper_ore", 0.34)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("060a_coppercore_slow")
		
	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.82)
		.itemOut("2x minecraft:copper_ore", 0.29)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("060b_coppercore_fast")

	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.94)
        .itemOut("3x modern_industrialization:tin_ore", 0.37)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("061a_tincore_slow")
		
	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.84)
		.itemOut("3x modern_industrialization:tin_ore", 0.32)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("061b_tincore_fast")

	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.95)
        .itemOut("5x minecraft:coal_ore", 0.3)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("062a_coalcore_slow")
		
	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.85)
		.itemOut("5x minecraft:coal_ore", 0.25)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("062b_coalcore_fast")

	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.96)
        .itemOut("3x modern_industrialization:lignite_coal_ore", 0.22)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")
		.id("063a_lignitecore_slow")
		
	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.86)
		.itemOut("3x modern_industrialization:lignite_coal_ore", 0.17)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")	
		.id("063b_lignitecore_fast")	
		
	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.9)
		.itemOut("2x modern_industrialization:lead_ore", 0.2)
		.itemOut("3x geghilarity:acanthite_dust", 0.2)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("overworld")
        .adjacentBlock("geggy:lead_corenode", "below")	
		.id("064a_leadcore_slow")	

	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.8)
		.itemOut("2x modern_industrialization:lead_ore", 0.15)
		.itemOut("3x geghilarity:acanthite_dust", 0.18)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:lead_corenode", "below")	
		.id("064b_leadcore_fast")

	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_groupx", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.88)
		.itemOut("2x modern_industrialization:quartz_ore",  0.28)
		.itemOut("2x minecraft:basalt", 0.32)
		.itemOut("1x minecraft:glowstone", 0.3)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("065a_quartzcore_slow")

	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_groupx", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.78)
		.itemOut("2x modern_industrialization:quartz_ore",  0.23)
		.itemOut("2x minecraft:basalt", 0.3)
		.itemOut("1x minecraft:glowstone", 0.28)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("065b_quartzcore_fast")		
		
	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.86)
		.itemOut("3x minecraft:iron_ore", 0.59)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("overworld")
        .adjacentBlock("geggy:iron_corenode", "below")	
		.id("066a_ironcore_slow")

	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.76)
		.itemOut("3x minecraft:iron_ore", 0.54)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:iron_corenode", "below")	
		.id("066b_ironcore_fast")	

	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.86)
		.itemOut("2x modern_industrialization:nickel_ore", 0.28)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("overworld")
        .adjacentBlock("geggy:nickel_corenode", "below")	
		.id("067a_nickelcore_slow")

	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.76)
		.itemOut("2x modern_industrialization:nickel_ore", 0.23)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:nickel_corenode", "below")	
		.id("067b_nickelcore_fast")	
		
	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.86)
		.itemOut("2x create:zinc_ore", 0.24)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("overworld")
        .adjacentBlock("geggy:zinc_corenode", "below")	
		.id("068a_zinccore_slow")

	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.76)
		.itemOut("2x create:zinc_ore", 0.19)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:zinc_corenode", "below")	
		.id("068b_zinccore_fast")

	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group4", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.88)
		.itemOut("1x modern_industrialization:salt_ore", 0.33)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("overworld")
        .adjacentBlock("geggy:salt_corenode", "below")	
		.id("069a_saltcore_slow")

	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group4", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.78)
		.itemOut("1x modern_industrialization:salt_ore", 0.28)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:salt_corenode", "below")	
		.id("069b_saltcore_fast")

	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group4", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.85)
		.itemOut("2x minecraft:redstone_ore", 0.15)
		.itemOut("2x modern_industrialization:antimony_ore", 0.24)
		.itemOut("minecraft:lapis_ore", 0.12)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("overworld")
        .adjacentBlock("geggy:redstone_corenode", "below")	
		.id("070a_redstonecore_slow")

	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group4", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.75)
		.itemOut("2x minecraft:redstone_ore", 0.1)
		.itemOut("2x modern_industrialization:antimony_ore", 0.19)
		.itemOut("minecraft:lapis_ore", 0.1)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:redstone_corenode", "below")	
		.id("070b_redstonecore_fast")
		
	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group4", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.88)
		.itemOut("2x geggy:precious_ore", 0.29)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("overworld")
        .adjacentBlock("geggy:precious_corenode", "below")	
		.id("072a_preciouscore_slow")

	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group4", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.78)
		.itemOut("2x geggy:precious_ore", 0.24)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:precious_corenode", "below")	
		.id("072b_preciouscore_fast")	
		
	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group4", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.85)
		.itemOut("3x modern_industrialization:bauxite_ore", 0.25)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("overworld")
        .adjacentBlock("geggy:bauxite_corenode", "below")	
		.id("073a_bauxitecore_slow")

	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group4", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.75)
		.itemOut("3x modern_industrialization:bauxite_ore", 0.2)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:bauxite_corenode", "below")	
		.id("073b_bauxitecore_fast")	

	
		
	////////////////////////////////////////	bucket = 1000mb = 1/20tick = 16.6 min autonomy 1 bucket/ 2000 max tank
	// 25 sec, 1000 steam bucket max recipe, 500 ticks
	event.recipes.modern_industrialization.proto(2, 498)
        .itemIn("2x #boiler_fuel")
		.fluidIn("minecraft:water", 50)
		.fluidOut("modern_industrialization:steam", 2000)
		.id("protoboy")	
		
	// EXP DUST RECYCLE //

	const tier1 = [
		'modern_industrialization:coal',
		'modern_industrialization:lignite_coal',
		'modern_industrialization:copper',
		'modern_industrialization:tin',
		'modern_industrialization:quartz',
		'kubejs:zinc'
	]
	
	const tier2 = [
		'modern_industrialization:coal',
		'modern_industrialization:lignite_coal',
		'modern_industrialization:copper',
		'modern_industrialization:tin',
		'modern_industrialization:lead',
		'modern_industrialization:quartz',
		'kubejs:zinc'
	]
	
	const tier3 = [
		'modern_industrialization:coal',
		'modern_industrialization:lignite_coal',
		'modern_industrialization:copper',
		'modern_industrialization:tin',
		'modern_industrialization:lead',
		'modern_industrialization:quartz',
		'kubejs:zinc',
		'modern_industrialization:iron'
	]
	
	const tier4 = [
		'modern_industrialization:coal',
		'modern_industrialization:lignite_coal',
		'modern_industrialization:copper',
		'modern_industrialization:tin',
		'modern_industrialization:lead',
		'modern_industrialization:quartz',
		'kubejs:zinc',
		'modern_industrialization:iron',
		'modern_industrialization:nickel'
	]
	
	const tier5 = [
		'modern_industrialization:coal',
		'modern_industrialization:lignite_coal',
		'modern_industrialization:copper',
		'modern_industrialization:tin',
		'modern_industrialization:lead',
		'modern_industrialization:quartz',
		'kubejs:zinc',
		'modern_industrialization:iron',
		'modern_industrialization:nickel',
		'modern_industrialization:salt',
		'modern_industrialization:bauxite',
		'modern_industrialization:antimony'
	]
	
	tier1.forEach(mat =>{
		event.custom({
			"type": "create:mixing",
			"processingTime":2400,
			"ingredients": [{"item": "drilly:whole_tier1_experience"},{"item": mat+"_dust"}],
			"results": [{"item": mat+"_dust", "count": 20}]
		})
	})		
	
	tier2.forEach(mat =>{
		event.custom({
			"type": "create:mixing",
			"processingTime":2400,
			"ingredients": [{"item": "drilly:whole_tier2_experience"},{"item": mat+"_dust"}],
			"results": [{"item": mat+"_dust", "count": 30}]
		})
	})	
	
	tier3.forEach(mat =>{
		event.custom({
			"type": "create:mixing",
			"processingTime":2400,
			"ingredients": [{"item": "drilly:whole_tier3_experience"},{"item": mat+"_dust"}],
			"results": [{"item": mat+"_dust", "count": 40}]
		})
	})	
	
	tier4.forEach(mat =>{
		event.custom({
			"type": "create:mixing",
			"processingTime":2400,
			"ingredients": [{"item": "drilly:whole_tier4_experience"},{"item": mat+"_dust"}],
			"results": [{"item": mat+"_dust", "count": 50}]
		})
	})	
	
	tier5.forEach(mat =>{
		event.custom({
			"type": "create:mixing",
			"processingTime":2400,
			"ingredients": [{"item": "drilly:whole_tier5_experience"},{"item": mat+"_dust"}],
			"results": [{"item": mat+"_dust", "count": 60}]
		})
	})
	
	event.custom({
		"type": "create:mixing",
		"processingTime":2400,
		"ingredients": [{"item": "drilly:whole_tier5_experience"},{"item": "minecraft:redstone"}],
		"results": [{"item": "minecraft:redstone", "count": 60}]
	})
	event.custom({
		"type": "create:mixing",
		"processingTime":2400,
		"ingredients": [{"item": "drilly:whole_tier5_experience"},{"item": "geggy:precious_ore"}],
		"results": [{"item": "geggy:precious_ore", "count": 60}]
	})
	
	

	legacy_quarry_recipes(event)
	
	/*
		event.recipes.modern_industrialization.drill1(2, 400)
        .itemIn("minecraft:stick", 0.0)
		//.itemIn("geggy:selector_1", 0.00)
        .itemOut("5x minecraft:raw_copper")
        .dimension("overworld")
        .adjacentBlock("ad_astra:oil", "below")
		.id("testadad")
		
	*/	
	
})

ServerEvents.tags('block', event => { 

  event.add('minecraft:needs_iron_tool', 'geggy:iron_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:iron_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:copper_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:copper_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:tin_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:tin_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:coal_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:coal_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:antimony_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:antimony_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:bauxite_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:bauxite_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:lead_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:lead_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:lignite_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:lignite_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:mozanite_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:mozanite_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:nickel_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:nickel_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:zinc_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:zinc_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:salt_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:salt_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:tungsten_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:tungsten_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:uranium_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:uranium_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:precious_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:precious_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:redstone_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:redstone_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:quartz_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:quartz_corenode')
  
})

ServerEvents.blockLootTables(event => {
	
  event.addBlock('geggy:iron_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('minecraft:raw_iron', 1, [12, 20]) 
    })
  })
 
  event.addBlock('geggy:copper_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('minecraft:raw_copper', 1, [12, 20]) 
    })
  })

  event.addBlock('geggy:tin_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('modern_industrialization:raw_tin', 1, [12, 20]) 
    })
  })

  event.addBlock('geggy:coal_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('minecraft:coal', 1, [12, 20]) 
    })
  })
  
  event.addBlock('geggy:antimony_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('modern_industrialization:raw_antimony', 1, [12, 20]) 
    })
  })

  event.addBlock('geggy:bauxite_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('modern_industrialization:bauxite_dust', 1, [12, 20]) 
    })
  })

  event.addBlock('geggy:lead_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('modern_industrialization:raw_lead', 1, [12, 20]) 
    })
  })

  event.addBlock('geggy:lignite_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('modern_industrialization:lignite_coal', 1, [12, 20]) 
    })
  })

  event.addBlock('geggy:mozanite_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('modern_industrialization:mozanite_dust', 1, [12, 20]) 
    })
  })

  event.addBlock('geggy:nickel_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('modern_industrialization:raw_nickel', 1, [12, 20]) 
    })
  })

  event.addBlock('geggy:zinc_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('create:raw_zinc', 1, [12, 20]) 
    })
  })

  event.addBlock('geggy:salt_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('modern_industrialization:salt_dust', 1, [12, 20]) 
    })
  })

  event.addBlock('geggy:tungsten_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('modern_industrialization:raw_tungsten', 1, [12, 20]) 
    })
  })

  event.addBlock('geggy:uranium_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('modern_industrialization:raw_uranium', 1, [12, 20]) 
    })
  })

  event.addBlock('geggy:precious_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 3 
      pool.addItem('geghilarity:precious_nugget', 1, [28, 50]) 
    })
  })

  event.addBlock('geggy:redstone_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('minecraft:redstone', 1, [12, 20]) 
    })
  })

  event.addBlock('geggy:quartz_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('minecraft:quartz', 1, [12, 20]) 
    })
  })

  // nether
  event.addBlock('geggy:nether_precious_ore', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('geghilarity:precious_nugget', 1, [2, 8]) 
    })
  })

  event.addBlock('minecraft:gilded_blackstone', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('geghilarity:precious_nugget', 1, [4, 16]) 
    })
  })	

  event.addBlock('byg:blue_nether_gold_ore', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('geghilarity:precious_nugget', 1, [4, 16]) 
    })
  }) 

  event.addBlock('byg:brimstone_nether_gold_ore', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('geghilarity:precious_nugget', 1, [4, 16]) 
    })
  })
  
}); 
  
