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
        .dimension("the_end")
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
				},
				{
					item: "geghilarity:tiny_chromite_dust",
					amount: 40,
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
					probability: 0.99
				},
				{
					item: "minecraft:blaze_rod",
					amount: 1,
					probability: 0.02
				},
				{
					item: "minecraft:ender_pearl",
					amount: 1,
					probability: 0.02
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
		'FBA',
		'CEC',
		'BDB'
	], {
		A: 'drilly:whole_tier1_experience',
		B: 'modern_industrialization:bronze_plate',
		C: 'modern_industrialization:bronze_gear',
		D: 'modern_industrialization:bronze_drill1',
		E: 'modern_industrialization:bronze_machine_casing',
		F: 'modern_industrialization:copper_wire'
	})	

	// experience to be replaced by mechanism, and embedded in it for early game processing chain
	event.shaped('modern_industrialization:bronze_drill3', [
		'GAF',
		'CEC',
		'BDB'
	], {
		A: 'drilly:whole_tier2_experience',
		B: 'modern_industrialization:bronze_plate',
		C: 'modern_industrialization:bronze_gear',
		D: 'modern_industrialization:bronze_drill2',
		E: 'modern_industrialization:bronze_machine_casing',
		F: 'create:precision_mechanism',
		G: 'modern_industrialization:copper_wire'
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
		'ECE',
		' B '
	], {
		B: 'modern_industrialization:bronze_plate',
		C: 'modern_industrialization:bronze_gear',
		D: 'create:andesite_encased_cogwheel',
		E: 'modern_industrialization:bronze_curved_plate'
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
					{"item": "modern_industrialization:bronze_curved_plate"}
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
					{"amount": 810, "fluid": "modern_industrialization:lubricant"}
				],
				results: [{
					"item": "drilly:incomplete_bronze_refined_drill"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_bronze_refined_drill"},
					{"item": "create:andesite_encased_cogwheel"}
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
					{"item": "geggy:iron_curved_plate"}
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
					{"amount": 1620, "fluid": "modern_industrialization:lubricant"}
				],
				results: [{
					"item": "drilly:incomplete_iron_refined_drill"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "drilly:incomplete_iron_refined_drill"},
					{"item": "create:andesite_encased_cogwheel"}
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
					{"item": "create:andesite_encased_cogwheel"}
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
		{fluid: "modern_industrialization:soldering_alloy", amount: 20}
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
			{item: "modern_industrialization:iron_ring", amount: 3},
			{item: "create:large_cogwheel", amount: 1}, 
			{item: "geggy:bronze_piston", amount: 1}
		],
		fluid_inputs: [
		{fluid: "modern_industrialization:soldering_alloy", amount: 10},
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
	

	
	// tier 1 - single speed
	
	event.recipes.modern_industrialization.drill1(2, 6000)
        .itemIn("drilly:copper_drill", 0.09)
		.itemIn("drilly:drill_group1", 0.00)
		//.itemIn("geggy:selector_1", 0.00)
        .itemOut("5x gegology:tetrahedrite_ore", 0.54)
        .itemOut("5x gegology:malachite_ore", 0.54)
        .itemOut("2x gegology:azurite_ore", 0.67)
		.itemOut("5x gegology:chalcopyrite_ore", 0.54)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("001_coppercore_slow")
		
	event.recipes.modern_industrialization.drill1(2, 6000)
        .itemIn("drilly:copper_drill", 0.10)
		.itemIn("drilly:drill_group1", 0.00)
		//.itemIn("geggy:selector_1", 0.00)
        .itemOut("gegology:cassiterite_ore", 0.32)
        .itemOut("gegology:sphalerite_ore", 0.81)
		.itemOut("gegology:galena_ore", 0.81)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("003_tincore_slow")

	event.recipes.modern_industrialization.drill1(2, 6000)
        .itemIn("drilly:copper_drill", 0.1)
		.itemIn("drilly:drill_group1", 0.00)
		//.itemIn("geggy:selector_1", 0.00)
        .itemOut("3x minecraft:coal", 0.65) // 5,39 = 23.4
		.itemOut("3x modern_industrialization:lignite_coal", 0.54) // 5,33 = 19.8
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("005_coalcore_slow")

	event.recipes.modern_industrialization.drill1(2, 6000)
        .itemIn("drilly:copper_drill", 0.09)
		.itemIn("drilly:drill_group2", 0.00)
		//.itemIn("geggy:selector_1", 0.00)
		.itemOut("2x minecraft:quartz", 0.52)
		.itemOut("1x gegology:glowstone_ore", 0.09)
		.itemOut("2x geghilarity:precious_nugget", 0.25)
		.itemOut("gegology:granitic_sand_ore", 0.39)
		.itemOut("1x minecraft:basalt", 0.15)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("the_nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("qea_quartzcore_slow")	

	// tier 2-1	
		
	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:copper_drill", 0.14)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("5x gegology:tetrahedrite_ore", 0.68)
        .itemOut("5x gegology:malachite_ore", 0.63) 
        .itemOut("3x gegology:azurite_ore", 0.55)
		.itemOut("5x gegology:chalcopyrite_ore", 0.61)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("009_coppercore_slow")	

	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:copper_drill", 0.34)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("5x gegology:tetrahedrite_ore", 0.68)
        .itemOut("5x gegology:malachite_ore", 0.62) 
        .itemOut("3x gegology:azurite_ore", 0.53)
		.itemOut("5x gegology:chalcopyrite_ore", 0.59)
		.itemOut("drilly:tiny_tier1_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("010_coppercore_fast")	
		
	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:copper_drill", 0.15)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("gegology:cassiterite_ore", 0.45)
        .itemOut("2x gegology:sphalerite_ore", 0.47)
		.itemOut("2x gegology:galena_ore", 0.47)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("011_tincore_slow")	

	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:copper_drill", 0.36)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("gegology:cassiterite_ore", 0.32)
        .itemOut("2x gegology:sphalerite_ore", 0.37)
		.itemOut("2x gegology:galena_ore", 0.37)
		.itemOut("drilly:tiny_tier1_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("012_tincore_fast")	
		
	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:copper_drill", 0.15)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("3x minecraft:coal", 0.75) // 5,45 27
		.itemOut("3x modern_industrialization:lignite_coal", 0.62) // 5,39 23.4
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("013_coalcore_slow")	

	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:copper_drill", 0.33)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("3x minecraft:coal", 0.62) // 5,41 41 37
		.itemOut("3x modern_industrialization:lignite_coal", 0.55) // 6,36 - 33
		.itemOut("drilly:tiny_tier1_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("014_coalcore_fast")

	// tier 2-2	
		
	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.09)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("7x gegology:tetrahedrite_ore", 0.54)
        .itemOut("7x gegology:malachite_ore", 0.54) 
        .itemOut("3x gegology:azurite_ore", 0.68)
		.itemOut("7x gegology:chalcopyrite_ore", 0.54)
		.itemOut("2x gegology:cobaltite_ore", 0.5)
		.itemOut("drilly:tiny_tier2_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("017_coppercore_slow")
		
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.24)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("7x gegology:tetrahedrite_ore", 0.57)
        .itemOut("7x gegology:malachite_ore", 0.57) 
        .itemOut("3x gegology:azurite_ore", 0.73)
		.itemOut("7x gegology:chalcopyrite_ore", 0.57)
		.itemOut("2x gegology:cobaltite_ore", 0.3)
		.itemOut("drilly:tiny_tier2_experience", 0.16)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("018_coppercore_fast")

	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.10)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("2x gegology:cassiterite_ore", 0.34)
        .itemOut("2x gegology:sphalerite_ore", 0.82)
		.itemOut("2x gegology:galena_ore", 0.82)
		.itemOut("drilly:tiny_tier2_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("019_tincore_slow")
		
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.26)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("2x gegology:cassiterite_ore", 0.24)
        .itemOut("2x gegology:sphalerite_ore", 0.56)
		.itemOut("2x gegology:galena_ore", 0.56)
		.itemOut("drilly:tiny_tier2_experience", 0.16)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("020_tincore_fast")

	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.11)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("5x minecraft:coal", 0.70) // 9,41 44.28 42
		.itemOut("3x modern_industrialization:lignite_coal", 0.79) // 7,35 29.4 28
		.itemOut("drilly:tiny_tier2_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("021_coalcore_slow")
		
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.24)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("5x minecraft:coal", 0.58) // 9,38 68.4 58
		.itemOut("3x modern_industrialization:lignite_coal", 0.65) // 39
		.itemOut("drilly:tiny_tier2_experience", 0.16)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("022_coalcore_fast")
		
	event.recipes.modern_industrialization.drill2(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.09)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("4x minecraft:quartz", 0.52)
		.itemOut("1x gegology:glowstone_ore", 0.16)
		.itemOut("2x geghilarity:precious_nugget", 0.35)
		.itemOut("gegology:granitic_sand_ore", 0.49)
		.itemOut("1x minecraft:basalt", 0.28)
		.itemOut("drilly:tiny_tier2_experience", 0.28)
        .dimension("the_nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("024xa_quartzcore_slow")

	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.24)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("4x minecraft:quartz", 0.42)
		.itemOut("1x gegology:glowstone_ore", 0.12)
		.itemOut("2x geghilarity:precious_nugget", 0.25)
		.itemOut("gegology:granitic_sand_ore", 0.39)
		.itemOut("1x minecraft:basalt", 0.18)
		.itemOut("drilly:tiny_tier2_experience", 0.16)
        .dimension("the_nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("024xb_quartzcore_fast")	
		
	// tier 3-2	
	
	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.15) // +6
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("7x gegology:tetrahedrite_ore", 0.68)
        .itemOut("7x gegology:malachite_ore", 0.78) 
        .itemOut("3x gegology:azurite_ore", 0.85)
		.itemOut("7x gegology:chalcopyrite_ore", 0.68)
		.itemOut("2x gegology:cobaltite_ore", 0.6)
		.itemOut("drilly:tiny_tier2_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("025_coppercore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.36)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("7x gegology:tetrahedrite_ore", 0.70)
        .itemOut("7x gegology:malachite_ore", 0.69) 
        .itemOut("3x gegology:azurite_ore", 0.87)
		.itemOut("7x gegology:chalcopyrite_ore", 0.69)
		.itemOut("2x gegology:cobaltite_ore", 0.4)
		.itemOut("drilly:tiny_tier2_experience", 0.16)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("026_coppercore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.16)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("2x gegology:cassiterite_ore", 0.46)
        .itemOut("2x gegology:sphalerite_ore", 0.98)
		.itemOut("2x gegology:galena_ore", 0.98)
		.itemOut("drilly:tiny_tier2_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("027_tincore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.38)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("2x gegology:cassiterite_ore", 0.3)
        .itemOut("2x gegology:sphalerite_ore",  0.69)
		.itemOut("2x gegology:galena_ore", 0.69)
		.itemOut("drilly:tiny_tier2_experience", 0.16)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("028_tincore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_base_drill", 0.18)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
        .itemOut("5x minecraft:coal", 0.81) // 9,45 48.6
		.itemOut("3x modern_industrialization:lignite_coal", 0.89) // 7,39 32
		.itemOut("drilly:tiny_tier2_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("029_coalcore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.37)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("5x minecraft:coal", 0.65)
		.itemOut("3x modern_industrialization:lignite_coal", 0.79)
		.itemOut("drilly:tiny_tier2_experience", 0.16)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("030_coalcore_fast")		
		
	// T3-3

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill") // +6
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.93)
        .itemOut("9x gegology:tetrahedrite_ore", 0.56)
        .itemOut("9x gegology:malachite_ore", 0.56) 
        .itemOut("5x gegology:azurite_ore", 0.62)
		.itemOut("9x gegology:chalcopyrite_ore", 0.56)
		.itemOut("2x gegology:cobaltite_ore", 0.75)
		.itemOut("drilly:tiny_tier3_experience", 0.25)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("033_coppercore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.80)
		.itemOut("9x gegology:tetrahedrite_ore", 0.54)
        .itemOut("9x gegology:malachite_ore", 0.54) 
        .itemOut("5x gegology:azurite_ore", 0.62)
		.itemOut("9x gegology:chalcopyrite_ore", 0.54)
		.itemOut("2x gegology:cobaltite_ore", 0.52)
		.itemOut("drilly:tiny_tier3_experience", 0.14)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("034_coppercore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.92)
        .itemOut("2x gegology:cassiterite_ore", 0.54)
        .itemOut("3x gegology:sphalerite_ore", 0.79)
		.itemOut("3x gegology:galena_ore", 0.79)
		.itemOut("drilly:tiny_tier3_experience", 0.25)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("035_tincore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.78)
		.itemOut("2x gegology:cassiterite_ore", 0.36)
        .itemOut("3x gegology:sphalerite_ore", 0.54)
		.itemOut("3x gegology:galena_ore", 0.54)
		.itemOut("drilly:tiny_tier3_experience", 0.14)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("036_tincore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.91)
        .itemOut("7x minecraft:coal", 0.68) // 15,32 57.6
		.itemOut("5x modern_industrialization:lignite_coal", 0.61) // 12,26 37.44 36.6
		.itemOut("drilly:tiny_tier3_experience", 0.25)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("037_coalcore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.79)
		.itemOut("7x minecraft:coal", 0.51) // 15,29 72
		.itemOut("5x modern_industrialization:lignite_coal", 0.5) // 12,23
		.itemOut("drilly:tiny_tier3_experience", 0.14)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("038_coalcore_fast")
		
	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.93)
		.itemOut("6x minecraft:quartz", 0.43)
		.itemOut("1x gegology:glowstone_ore", 0.2)
		.itemOut("2x geghilarity:precious_nugget", 0.45)
		.itemOut("gegology:granitic_sand_ore", 0.65)
		.itemOut("1x minecraft:basalt", 0.4)
		.itemOut("drilly:tiny_tier3_experience", 0.25)
        .dimension("the_nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("040xa_quartzcore_slow")

	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.8)
		.itemOut("6x minecraft:quartz", 0.39)
		.itemOut("1x gegology:glowstone_ore", 0.16)
		.itemOut("2x geghilarity:precious_nugget", 0.35)
		.itemOut("gegology:granitic_sand_ore", 0.55)
		.itemOut("1x minecraft:basalt", 0.3)
		.itemOut("drilly:tiny_tier3_experience", 0.14)
        .dimension("the_nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("040xb_quartzcore_fast")	

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.85)
		.itemOut("gegology:brown_limonite_ore", 0.7)
		.itemOut("gegology:yellow_limonite_ore", 0.7)
		.itemOut("gegology:hematite_ore", 0.25)
		.itemOut("drilly:tiny_tier3_experience", 0.25)
        .dimension("overworld")
        .adjacentBlock("geggy:iron_corenode", "below")	
		.id("040c_ironcore_slow")

	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.72)
		.itemOut("gegology:brown_limonite_ore", 0.53)
		.itemOut("gegology:yellow_limonite_ore", 0.53)
		.itemOut("gegology:hematite_ore", 0.15)
		.itemOut("drilly:tiny_tier3_experience", 0.14)
        .dimension("overworld")
        .adjacentBlock("geggy:iron_corenode", "below")	
		.id("040d_ironcore_fast")	
		
	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.89)
		.itemOut("gegology:redstone_ore", 0.35)
		.itemOut("gegology:cinnabar_ore", 0.6)
		.itemOut("5x geghilarity:precious_nugget", 0.85)
		.itemOut("minecraft:emerald", 0.02)
		.itemOut("minecraft:diamond", 0.01)
		.itemOut("drilly:tiny_tier3_experience", 0.25)
        .dimension("overworld")
        .adjacentBlock("geggy:redstone_corenode", "below")	
		.id("ea1_redcore_slow")	
		
	// T4-3	
	
	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:bronze_refined_drill") // +6
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.8)
        .itemOut("9x gegology:tetrahedrite_ore", 0.68)
        .itemOut("9x gegology:malachite_ore", 0.68) 
        .itemOut("5x gegology:azurite_ore", 0.85)
		.itemOut("9x gegology:chalcopyrite_ore", 0.68)
		.itemOut("2x gegology:cobaltite_ore", 0.8)
		.itemOut("drilly:tiny_tier3_experience", 0.25)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("041_coppercore_slow")
		
	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.66)
		.itemOut("9x gegology:tetrahedrite_ore", 0.6)
        .itemOut("9x gegology:malachite_ore", 0.6) 
        .itemOut("5x gegology:azurite_ore", 0.79)
		.itemOut("9x gegology:chalcopyrite_ore", 0.6)
		.itemOut("2x gegology:cobaltite_ore", 0.58)
		.itemOut("drilly:tiny_tier3_experience", 0.14)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("042_coppercore_fast")

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.79)
        .itemOut("3x gegology:cassiterite_ore", 0.42)
        .itemOut("3x gegology:sphalerite_ore", 0.93)
		.itemOut("3x gegology:galena_ore", 0.93)
		.itemOut("drilly:tiny_tier3_experience", 0.25)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("043_tincore_slow")
		
	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.64)
		.itemOut("3x gegology:cassiterite_ore", 0.27)
        .itemOut("3x gegology:sphalerite_ore", 0.61)
		.itemOut("3x gegology:galena_ore", 0.61)
		.itemOut("drilly:tiny_tier3_experience", 0.14)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("044_tincore_fast")

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.85)
        .itemOut("7x minecraft:coal", 0.81) // 15,38 68.4
		.itemOut("5x modern_industrialization:lignite_coal", 0.65) // 12,3 43.2 39
		.itemOut("drilly:tiny_tier3_experience", 0.25)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("045_coalcore_slow")
		
	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.65)
		.itemOut("7x minecraft:coal", 0.6) // 15,35
		.itemOut("5x modern_industrialization:lignite_coal", 0.5) // 12,27 50
		.itemOut("drilly:tiny_tier3_experience", 0.14)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("046_coalcore_fast")
		
	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.81)
		.itemOut("6x minecraft:quartz", 0.49)
		.itemOut("1x gegology:glowstone_ore", 0.27)
		.itemOut("2x geghilarity:precious_nugget", 0.55)
		.itemOut("gegology:granitic_sand_ore", 0.89)
		.itemOut("1x minecraft:basalt", 0.5)
		.itemOut("drilly:tiny_tier3_experience", 0.25)
        .dimension("the_nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("048xa_quartzcore_slow")

	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.66)
		.itemOut("6x minecraft:quartz", 0.45)
		.itemOut("1x gegology:glowstone_ore", 0.21)
		.itemOut("2x geghilarity:precious_nugget", 0.45)
		.itemOut("gegology:granitic_sand_ore", 0.8)
		.itemOut("1x minecraft:basalt", 0.4)
		.itemOut("drilly:tiny_tier3_experience", 0.14)
        .dimension("the_nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("048xb_quartzcore_fast")	

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.75)
		.itemOut("2x gegology:brown_limonite_ore", 0.48)
		.itemOut("2x gegology:yellow_limonite_ore", 0.48)
		.itemOut("gegology:hematite_ore", 0.42)
		.itemOut("drilly:tiny_tier3_experience", 0.25)
        .dimension("overworld")
        .adjacentBlock("geggy:iron_corenode", "below")	
		.id("048c_ironcore_slow")

	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:bronze_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_bronze_refined_drill", 0.56)
		.itemOut("2x gegology:brown_limonite_ore", 0.32)
		.itemOut("2x gegology:yellow_limonite_ore", 0.32)
		.itemOut("gegology:hematite_ore", 0.32)
		.itemOut("drilly:tiny_tier3_experience", 0.14)
        .dimension("overworld")
        .adjacentBlock("geggy:iron_corenode", "below")	
		.id("048d_ironcore_fast")	
		
	// T4-4

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:iron_refined_drill") // +6
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.89)
        .itemOut("9x gegology:tetrahedrite_ore", 0.75)
        .itemOut("9x gegology:malachite_ore", 0.75) 
        .itemOut("5x gegology:azurite_ore", 0.81)
		.itemOut("9x gegology:chalcopyrite_ore", 0.75)
		.itemOut("3x gegology:cobaltite_ore", 0.8)
		.itemOut("drilly:tiny_tier4_experience", 0.24)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("049_coppercore_slow")
		
	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.75)
        .itemOut("9x gegology:tetrahedrite_ore", 0.62)
        .itemOut("9x gegology:malachite_ore", 0.62) 
        .itemOut("5x gegology:azurite_ore", 0.8)
		.itemOut("9x gegology:chalcopyrite_ore", 0.62)
		.itemOut("3x gegology:cobaltite_ore", 0.58)
		.itemOut("drilly:tiny_tier4_experience", 0.14)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("050_coppercore_fast")

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.88)
        .itemOut("3x gegology:cassiterite_ore", 0.47)
        .itemOut("4x gegology:sphalerite_ore", 0.85)
		.itemOut("4x gegology:galena_ore", 0.85)
		.itemOut("drilly:tiny_tier4_experience", 0.24)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("051_tincore_slow")
		
	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.73)
		.itemOut("3x gegology:cassiterite_ore", 0.3)
        .itemOut("4x gegology:sphalerite_ore", 0.55)
		.itemOut("4x gegology:galena_ore", 0.55)
		.itemOut("drilly:tiny_tier4_experience", 0.14)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("052_tincore_fast")

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.89)
        .itemOut("9x minecraft:coal", 0.67) // 20,31 74.4 72
		.itemOut("7x modern_industrialization:lignite_coal", 0.49) // 15.23 41
		.itemOut("drilly:tiny_tier4_experience", 0.24)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("053_coalcore_slow")
		
	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.75)
		.itemOut("9x minecraft:coal", 0.48) // 20.28 
		.itemOut("7x modern_industrialization:lignite_coal", 0.37) // 15,20 52
		.itemOut("drilly:tiny_tier4_experience", 0.14)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("054_coalcore_fast")

	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.9)
		.itemOut("6x minecraft:quartz", 0.52) // 8,39 37.44 38
		.itemOut("1x gegology:glowstone_ore", 0.45) // 
		.itemOut("2x geghilarity:precious_nugget", 0.75) // 18
		.itemOut("2x gegology:granitic_sand_ore", 0.75) // 89 10.68 18
		.itemOut("1x minecraft:basalt", 0.65)
		.itemOut("drilly:tiny_tier4_experience", 0.24)
        .dimension("the_nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("056xa_quartzcore_slow")

	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.76)
		.itemOut("6x minecraft:quartz", 0.42) // 8,36 57
		.itemOut("1x gegology:glowstone_ore", 0.38)
		.itemOut("2x geghilarity:precious_nugget", 0.6)
		.itemOut("2x gegology:granitic_sand_ore", 0.6)
		.itemOut("1x minecraft:basalt", 0.55)
		.itemOut("drilly:tiny_tier4_experience", 0.14)
        .dimension("the_nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("056xb_quartzcore_fast")		
		
	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.85)
		.itemOut("2x gegology:brown_limonite_ore", 0.88)
		.itemOut("2x gegology:yellow_limonite_ore", 0.88)
		.itemOut("gegology:hematite_ore", 0.8)
		.itemOut("2x gegology:pentlandite_ore", 0.79)
		.itemOut("gegology:garnierite_ore", 0.41)
		.itemOut("4x gegology:stibnite_ore", 0.72)
		.itemOut("drilly:tiny_tier4_experience", 0.24)
        .dimension("overworld")
        .adjacentBlock("geggy:iron_corenode", "below")	
		.id("056c_ironcore_slow")

	event.recipes.modern_industrialization.drill4(4, 3600)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.65)
		.itemOut("2x gegology:brown_limonite_ore", 0.59)
		.itemOut("2x gegology:yellow_limonite_ore", 0.59)
		.itemOut("gegology:hematite_ore", 0.68)
		.itemOut("2x gegology:pentlandite_ore", 0.5)
		.itemOut("gegology:garnierite_ore", 0.31)
		.itemOut("3x gegology:stibnite_ore", 0.68)
		.itemOut("drilly:tiny_tier4_experience", 0.14)
        .dimension("overworld")
        .adjacentBlock("geggy:iron_corenode", "below")	
		.id("056d_ironcore_fast")	
		
	event.recipes.modern_industrialization.drill4(4, 6000)
        .itemIn("drilly:iron_refined_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemOut("drilly:dirty_iron_refined_drill", 0.88)
		.itemOut("gegology:redstone_ore", 0.5)
		.itemOut("gegology:cinnabar_ore", 0.8)
		.itemOut("7x geghilarity:precious_nugget", 0.85)
		.itemOut("minecraft:emerald", 0.04)
		.itemOut("minecraft:diamond", 0.02)
		.itemOut("drilly:tiny_tier4_experience", 0.24)
        .dimension("overworld")
        .adjacentBlock("geggy:redstone_corenode", "below")	
		.id("ea2_redcore_slow")	
		
	//////////////////////////////////////////////////////
	// LV //
	//////////////////////////////////////////////////////

	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill") // +6
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.92)
        .itemOut("7x gegology:tetrahedrite_ore", 0.52) // 9,74 81
        .itemOut("7x gegology:malachite_ore", 0.52) 
        .itemOut("5x gegology:azurite_ore", 0.72)
		.itemOut("7x gegology:chalcopyrite_ore", 0.52)
		.itemOut("gegology:kesterite_ore", 0.7)
		.itemOut("gegology:stannite_ore", 0.7)
		.itemOut("3x gegology:cobaltite_ore", 0.5)
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
		.itemOut("7x gegology:tetrahedrite_ore", 0.47)
        .itemOut("7x gegology:malachite_ore", 0.47) 
        .itemOut("5x gegology:azurite_ore", 0.68)
		.itemOut("7x gegology:chalcopyrite_ore", 0.47)
		.itemOut("gegology:kesterite_ore", 0.55)
		.itemOut("gegology:stannite_ore", 0.55)
		.itemOut("3x gegology:cobaltite_ore", 0.4)
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
        .itemOut("3x gegology:cassiterite_ore", 0.47)
        .itemOut("4x gegology:sphalerite_ore", 0.85)
		.itemOut("4x gegology:galena_ore", 0.85)
		.itemOut("2x geghilarity:acanthite_dust", 0.5) // 30
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
		.itemOut("3x gegology:cassiterite_ore", 0.47)
        .itemOut("4x gegology:sphalerite_ore", 0.85)
		.itemOut("4x gegology:galena_ore", 0.85)
		.itemOut("2x geghilarity:acanthite_dust", 0.38)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("061b_tincore_fast")

	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.95)
        .itemOut("2x minecraft:coal_ore", 0.7) // 5,30 45 42
		.itemOut("modern_industrialization:lignite_coal_ore", 0.55) // 3,22 19.8 16.5
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("062a_coalcore_slow")
		
	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.85)
		.itemOut("2x minecraft:coal_ore", 0.6) // 5,25 56
		.itemOut("modern_industrialization:lignite_coal_ore", 0.4) // 3,17 22.9
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("062b_coalcore_fast")	

	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.88)
		.itemOut("modern_industrialization:quartz_ore",  0.55) // 2,28 16.8
		.itemOut("1x gegology:glowstone_ore", 0.95) // 
		.itemOut("geggy:precious_ore", 0.4) // 17
		.itemOut("2x gegology:granitic_sand_ore", 0.95) // 89 10.68 18
		.itemOut("1x modern_industrialization:salt_ore", 0.35)
		.itemOut("1x minecraft:basalt", 0.85)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("the_nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("065a_quartzcore_slow")

	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.78)
		.itemOut("modern_industrialization:quartz_ore",  0.42) // 2,23
		.itemOut("1x gegology:glowstone_ore", 0.8) // 
		.itemOut("geggy:precious_ore", 0.3)
		.itemOut("2x gegology:granitic_sand_ore", 0.8) // 89 10.68 18
		.itemOut("1x modern_industrialization:salt_ore", 0.28)
		.itemOut("1x minecraft:basalt", 0.7)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("the_nether")
        .adjacentBlock("geggy:quartz_corenode", "below")	
		.id("065b_quartzcore_fast")		
		
	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.86)
		.itemOut("2x gegology:brown_limonite_ore", 0.8)
		.itemOut("2x gegology:yellow_limonite_ore", 0.8)
		.itemOut("gegology:arsenopyrite_ore", 0.85)
		.itemOut("gegology:pyrite_ore", 0.85)
		.itemOut("2x gegology:pentlandite_ore", 0.59)
		.itemOut("gegology:garnierite_ore", 0.32)
		.itemOut("4x gegology:stibnite_ore", 0.58)
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
		.itemOut("2x gegology:brown_limonite_ore", 0.65)
		.itemOut("2x gegology:yellow_limonite_ore", 0.65)
		.itemOut("gegology:arsenopyrite_ore", 0.8)
		.itemOut("gegology:pyrite_ore", 0.8)
		.itemOut("2x gegology:pentlandite_ore", 0.52)
		.itemOut("gegology:garnierite_ore", 0.24)
		.itemOut("4x gegology:stibnite_ore", 0.49)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:iron_corenode", "below")	
		.id("066b_ironcore_fast")	

	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.85)
		.itemOut("gegology:redstone_ore", 0.32)
		.itemOut("gegology:cinnabar_ore", 0.7)
		.itemOut("2x geggy:precious_ore", 0.29)
		.itemOut("gegology:pyrolusite_ore", 0.3)
		.itemOut("minecraft:emerald", 0.06)
		.itemOut("minecraft:diamond", 0.03)
		.itemOut("minecraft:lapis_ore", 0.12)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("overworld")
        .adjacentBlock("geggy:redstone_corenode", "below")	
		.id("070a_redstonecore_slow")

	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.75)
		.itemOut("gegology:redstone_ore", 0.24)
		.itemOut("gegology:cinnabar_ore", 0.6)
		.itemOut("2x geggy:precious_ore", 0.22)
		.itemOut("gegology:pyrolusite_ore", 0.2)
		.itemOut("minecraft:emerald", 0.06)
		.itemOut("minecraft:diamond", 0.03)
		.itemOut("minecraft:lapis_ore", 0.09)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:redstone_corenode", "below")	
		.id("070b_redstonecore_fast")
		
	event.recipes.modern_industrialization.lv_miner(12, 2400)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_1", 0.00)
		.fluidIn("modern_industrialization:lubricant", 100)
		.itemOut("drilly:dirty_hsla_base_drill", 0.85)
		.itemOut("2x gegology:bauxite_ore", 0.6)
		.itemOut("drilly:tiny_tier5_experience", 0.1)
        .dimension("overworld")
        .adjacentBlock("geggy:bauxite_corenode", "below")	
		.id("073a_bauxitecore_slow")

	event.recipes.modern_industrialization.lv_miner(16, 1600)
        .itemIn("drilly:hsla_base_drill")
		.itemIn("drilly:drill_group3", 0.00)
		.itemIn("geggy:selector_2", 0.00)
		.fluidIn("modern_industrialization:lubricant", 250)
		.itemOut("drilly:dirty_hsla_base_drill", 0.75)
		.itemOut("2x gegology:bauxite_ore", 0.45)
		.itemOut("drilly:tiny_tier5_experience", 0.07)
        .dimension("overworld")
        .adjacentBlock("geggy:bauxite_corenode", "below")	
		.id("073b_bauxitecore_fast")	

	
		
	////////////////////////////////////////	bucket = 1000mb = 1/20tick = 16.6 min autonomy 1 bucket/ 2000 max tank
	// 25 sec, 1000 steam bucket max recipe, 500 ticks
	// 60 x 60 = 3600 seconds, % 25 second/run = 144 runs/hour
	// other formula > 100 / chance > runs * result 
	// 2.8571 > 144 / 2.8571 = 50.4 > 100.8 > 11.2
	event.recipes.modern_industrialization.proto(2, 498)
        .itemIn("2x #boiler_fuel", 0.35)
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
		'kubejs:zinc',
		'modern_industrialization:antimony'
	]
	
	const tier3 = [
		'modern_industrialization:coal',
		'modern_industrialization:lignite_coal',
		'modern_industrialization:copper',
		'modern_industrialization:tin',
		'modern_industrialization:lead',
		'modern_industrialization:quartz',
		'kubejs:zinc',
		'modern_industrialization:iron',
		'modern_industrialization:antimony'
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
		'modern_industrialization:nickel',
		'modern_industrialization:antimony'
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
			"results": [{"item": mat+"_dust", "count": 10}]
		})
	})		
	
	tier2.forEach(mat =>{
		event.custom({
			"type": "create:mixing",
			"processingTime":2400,
			"ingredients": [{"item": "drilly:whole_tier2_experience"},{"item": mat+"_dust"}],
			"results": [{"item": mat+"_dust", "count": 20}]
		})
	})	
	
	tier3.forEach(mat =>{
		event.custom({
			"type": "create:mixing",
			"processingTime":2400,
			"ingredients": [{"item": "drilly:whole_tier3_experience"},{"item": mat+"_dust"}],
			"results": [{"item": mat+"_dust", "count": 30}]
		})
	})	
	
	tier4.forEach(mat =>{
		event.custom({
			"type": "create:mixing",
			"processingTime":2400,
			"ingredients": [{"item": "drilly:whole_tier4_experience"},{"item": mat+"_dust"}],
			"results": [{"item": mat+"_dust", "count": 40}]
		})
	})	
	
	tier5.forEach(mat =>{
		event.custom({
			"type": "create:mixing",
			"processingTime":2400,
			"ingredients": [{"item": "drilly:whole_tier5_experience"},{"item": mat+"_dust"}],
			"results": [{"item": mat+"_dust", "count": 50}]
		})
	})
	
	event.custom({
		"type": "create:mixing",
		"processingTime":2400,
		"ingredients": [{"item": "drilly:whole_tier5_experience"},{"item": "minecraft:redstone"}],
		"results": [{"item": "minecraft:redstone", "count": 50}]
	})
	event.custom({
		"type": "create:mixing",
		"processingTime":2400,
		"ingredients": [{"item": "drilly:whole_tier5_experience"},{"item": "geggy:precious_ore"}],
		"results": [{"item": "geggy:precious_ore", "count": 50}]
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
  event.add('minecraft:needs_iron_tool', 'geggy:oilsands_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:oilsands_corenode')
  event.add('minecraft:needs_iron_tool', 'geggy:gaseous_corenode')	
  event.add('minecraft:mineable/pickaxe', 'geggy:gaseous_corenode')
  
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
      pool.addItem('geghilarity:precious_nugget', 1, [2, 6]) 
    })
  })

  event.addBlock('minecraft:gilded_blackstone', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('geghilarity:precious_nugget', 1, [4, 9]) 
    })
  })	
  
  event.addBlock('geggy:oilsands_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('geghilarity:oilsands_dust', 1, [8, 16]) 
    })
  })
  event.addBlock('geggy:gaseous_corenode', table => { 
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('geggy:gaseous_rocks', 1, [6, 10]) 
    })
  })
  
}); 
  
