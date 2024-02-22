ServerEvents.recipes(event => {
	
	event.remove([
		"create:crafting/kinetics/large_cogwheel_from_little",
		"create:crafting/kinetics/mechanical_press",
		"create:crafting/kinetics/smart_chute",
	    "create:crafting/kinetics/mechanical_crafter",
		"create:crafting/kinetics/weighted_ejector",
		"create:crafting/kinetics/item_drain",
		"create:crafting/kinetics/analog_lever",
		"create:crafting/kinetics/encased_fan",
		"create:crafting/kinetics/millstone",
		"create:crafting/kinetics/metal_bracket",
		"create:crafting/kinetics/metal_girder",
		"create:crafting/kinetics/goggles",
		"create:crafting/kinetics/wrench",
		"create:crafting/kinetics/depot",
		"create:crafting/kinetics/mechanical_mixer",
		"create:crafting/kinetics/hose_pulley",
		"minecraft:dried_kelp_block",
		"create:crafting/kinetics/piston_extension_pole",
		"create:crafting/kinetics/cogwheel",
		"create:deploying/cogwheel",
		"create:deploying/large_cogwheel",
		"create:crafting/kinetics/large_cogwheel",
		"create:crafting/kinetics/empty_blaze_burner",
		"create:item_application/andesite_casing_from_log",
		"create:item_application/andesite_casing_from_wood",
		"create:item_application/copper_casing_from_log",
		"create:item_application/copper_casing_from_wood",
		"create:item_application/brass_casing_from_log",
		"create:item_application/brass_casing_from_wood",
		"minecraft:andesite",
		"create:crushing/diorite",
		"create:crushing/diorite_recycling",
		"create:crushing/prismarine_crystals",
		"create:splashing/soul_sand"
		
	])
	
	event.shaped('create:mechanical_press', [
		'A  ',
		'B  ',
		'C  '
	], {
		A: 'create:andesite_casing',
		B: 'create:piston_extension_pole',
		C: 'createdeco:cast_iron_sheet_slab'
	})
	
	event.shaped('create:smart_chute', [
		' D ',
		'BAB',
		'BCB'
	], {
		A: 'create:chute',
		B: 'create:brass_sheet',
		C: 'modern_industrialization:capacitor',
		D: 'create:electron_tube'
	})
	
	event.shaped('create:mechanical_crafter', [
		'ABA',
		'FCF',
		'DED'
	], {
		A: 'create:electron_tube',
		B: 'modern_industrialization:capacitor',
		C: 'create:brass_casing',
		D: 'geggy:hardened_plank',
		E: 'create:precision_mechanism',
		F: 'create:cogwheel'
	})
	
	event.shaped('create:mechanical_plough', [
		'CCC',
		'BBB',
		' A '
	], {
		A: 'create:andesite_casing',
		C: 'geggy:sharp_plate',
		B: 'create:andesite_alloy'
	})
	event.shaped('create:mechanical_harvester', [
		'DCD',
		'BCB',
		' A '
	], {
		A: 'create:andesite_casing',
		B: 'geggy:cogwheel',
		C: 'geggy:sharp_plate',
		D: 'create:andesite_alloy'
	})
	event.shaped('create:mechanical_drill', [
		' C ',
		'CBC',
		' A '
	], {
		A: 'create:andesite_casing',
		B: 'create:shaft',
		C: 'geggy:sharp_plate'
	})
	
	event.shaped('create:weighted_ejector', [
		'AE ',
		'BE ',
		'CD '
	], {
		A: 'geggy:galvanized_steel_plate',
		B: 'create:depot',
		C: 'modern_industrialization:steel_gear',
		D: 'modern_industrialization:steel_ring',
		E: 'geggy:galvanized_steel_ring'
	})
	
	event.shaped('create:item_drain', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: 'create:copper_casing',
		B: 'modern_industrialization:tin_rod'
	})
	
	event.shaped('create:analog_lever', [
		'C  ',
		'B  ',
		'A  '
	], {
		A: 'create:andesite_casing',
		B: 'minecraft:stick',
		C: 'create:andesite_alloy'
	})
	event.shaped('create:encased_fan', [
		'DC ',
		'AB ',
		'DC '
	], {
		A: 'create:andesite_casing',
		B: 'create:propeller',
		C: 'geggy:cogwheel',
		D: 'create:shaft'
	})
	event.shaped('create:millstone', [
		'DAD',
		'DBD',
		'CCC'
	], {
		A: 'geggy:cogwheel',
		B: 'create:andesite_casing',
		C: 'minecraft:smooth_stone_slab',
		D: 'minecraft:stone_button'
	})
	event.shaped('2x create:metal_bracket', [
		'AAA',
		'BCB',
		'   '
	], {
		A: 'modern_industrialization:steel_nugget',
		B: 'modern_industrialization:steel_ingot',
		C: 'create:andesite_alloy'
	})
	event.shaped('4x create:metal_girder', [
		'AA ',
		'BB ',
		'CC '
	], {
		A: 'modern_industrialization:steel_plate',
		B: 'modern_industrialization:steel_ingot',
		C: 'create:andesite_alloy'
	})
	event.shaped('create:goggles', [
		'AAA',
		'BCB',
		'   '
	], {
		A: 'minecraft:string',
		B: 'geggy:reinforced_glass_pane',
		C: 'create:brass_sheet'
	})
	
	event.shaped('create:wrench', [
		'AA ',
		'AB ',
		' C '
	], {
		A: 'create:brass_sheet',
		B: 'geggy:cogwheel',
		C: 'minecraft:stick'
	})
	
	event.shaped('create:depot', [
		'A  ',
		'C  ',
		'B  '
	], {
		A: 'modern_industrialization:lead_plate',
		B: 'create:andesite_casing',
		C: 'modern_industrialization:tin_ring'
	})
	
	event.shaped('create:mechanical_mixer', [
		' D ',
		'CBC',
		' A '
	], {
		A: 'create:whisk',
		B: 'create:andesite_casing',
		C: 'geggy:cogwheel',
		D: 'create:piston_extension_pole'
	})
	
	event.custom({
		type: "create:compacting",
		ingredients: [
			{"item": "minecraft:dried_kelp"},{"item": "minecraft:dried_kelp"},{"item": "minecraft:dried_kelp"},{"item": "minecraft:dried_kelp"},{"item": "minecraft:dried_kelp"},{"item": "minecraft:dried_kelp"},{"item": "minecraft:dried_kelp"},{"item": "minecraft:dried_kelp"},{"item": "minecraft:dried_kelp"}
		],
		results: [
			{count: 1, "item": "minecraft:dried_kelp_block"}
		],
		processingTime: 100
	})
	event.shaped('create:hose_pulley', [
		'CAC',
		'DBD',
		'CBC'
	], {
		A: 'create:copper_casing',
		B: 'minecraft:dried_kelp_block',
		C: 'modern_industrialization:copper_plate',
		D: 'create:brass_sheet'
	})
	
	// check?
	event.shaped('create:piston_extension_pole', [
		'A  ',
		'B  ',
		'A  '
	], {
		A: '#minecraft:planks',
		B: 'create:shaft'
	})
	
	// geggy cog
	
	event.custom({
		type: "create:item_application",
		ingredients: [
			{"tag": "minecraft:wooden_slabs"},
			{"item": "create:shaft"}
		],
		results: [{
			"item": "geggy:cogwheel"
		}]
	})
	
	// create cogwheel
	
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "modern_industrialization:copper_plate"},
		transitionalItem: {"item": "geggy:incomplete_copper_frame"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_copper_frame"},
					{"item": "modern_industrialization:copper_plate"}
				],
				results: [{
					"item": "geggy:incomplete_copper_frame"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_copper_frame"},
					{"item": "minecraft:iron_nugget"}
				],
				results: [{
					"item": "geggy:incomplete_copper_frame"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_copper_frame"},
					{"item": "minecraft:iron_nugget"}
				],
				results: [{
					"item": "geggy:incomplete_copper_frame"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_copper_frame"}
				],
				results: [{
					"item": "geggy:incomplete_copper_frame"
				}]
		  	}			
		],
		results: [{
			"item": "geggy:small_copper_frame"
		}],
		loops: 1
	  }
	)
	
	event.custom({
		type: "create:filling",
		ingredients: [
			{"item": "geggy:small_copper_frame"},
			{"amount": 972, "fluid": "minecraft:lava",
			"nbt": {}}
		],
		results: [{
			"item": "geggy:ready_small_copper_frame"
		}]
	})
	// temporary, waiting for technical problem
	event.custom({
	"type": "farmersdelight:cutting",
	"ingredients": [
		{	
		"item": "geggy:small_copper_frame"
		}
	],
	"tool": {
		"type": "farmersdelight:tool",
		"tag": "c:tools/pickaxes"
	},
	"result": [
		{  
		"item": "geggy:ready_small_copper_frame",
		"count": 1
		}
	],
	"sound": "minecraft:entity.item.break"
	})
	
	event.custom({
		type: "create:cutting",
		ingredients: [
			{"item": "geggy:ready_small_copper_frame"}
		],
		processingTime: 100,
		results: [{
			"item": "geggy:round_small_copper_frame"
		}]
	})
	
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "geggy:round_small_copper_frame"},
		transitionalItem: {"item": "geggy:incomplete_cogwheel"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_cogwheel"},
					{"item": "create:copper_nugget"}
				],
				results: [{
					"item": "geggy:incomplete_cogwheel"
				}]
			}			
		],
		results: [{
			"item": "geggy:dented_small_copper_frame"
		}],
		loops: 8
	  }
	)
	
	event.custom({
		type: "create:deploying",
		ingredients: [
			{"item": "geggy:dented_small_copper_frame"},
			{"item": "create:shaft"}
		],
		results: [{
			"item": "create:cogwheel"
		}]
	})
	
	// large cogwheel
	
	event.custom({
		type: "create:cutting",
		ingredients: [
			{"item": "modern_industrialization:copper_plate"}
		],
		processingTime: 100,
		results: [{
			"item": "geggy:copper_quadrant"
		}]
	})
	
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "geggy:copper_quadrant"},
		transitionalItem: {"item": "geggy:incomplete_quadrant"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_quadrant"},
					{"item": "create:copper_nugget"}
				],
				results: [{
					"item": "geggy:incomplete_quadrant"
				}]
			}			
		],
		results: [{
			"item": "geggy:dented_quadrant"
		}],
		loops: 4
	  }
	)
	
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "geggy:dented_quadrant"},
		transitionalItem: {"item": "geggy:incomplete_large_copper_dented"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_large_copper_dented"},
					{"item": "geggy:dented_quadrant"}
				],
				results: [{
					"item": "geggy:incomplete_large_copper_dented"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_large_copper_dented"},
					{"item": "minecraft:iron_nugget"}
				],
				results: [{
					"item": "geggy:incomplete_large_copper_dented"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_large_copper_dented"}
				],
				results: [{
					"item": "geggy:incomplete_large_copper_dented"
				}]
		  	}		
		],
		results: [{
			"item": "geggy:large_copper_dented"
		}],
		loops: 3
	  }
	)
	
	event.custom({
		type: "create:filling",
		ingredients: [
			{"item": "geggy:large_copper_dented"},
			// 16
			{"amount": 1320, "fluid": "minecraft:lava",
			"nbt": {}}
		],
		results: [{
			"item": "geggy:holed_large_copper_dented"
		}]
	})
	// temporary, waiting for technical problem
	event.custom({
	"type": "farmersdelight:cutting",
	"ingredients": [
		{	
		"item": "geggy:large_copper_dented"
		}
	],
	"tool": {
		"type": "farmersdelight:tool",
		"tag": "c:tools/pickaxes"
	},
	"result": [
		{  
		"item": "geggy:holed_large_copper_dented",
		"count": 1
		}
	],
	"sound": "minecraft:entity.item.break"
	})
	
	event.custom({
		type: "create:deploying",
		ingredients: [
			{"item": "geggy:holed_large_copper_dented"},
			{"item": "create:shaft"}
		],
		results: [{
			"item": "create:large_cogwheel"
		}]
	})
	
	// blaze mixer section, sequence with steel, crafting table tin + blaze rod
	
	event.shaped('geggy:blackened_rod', [
		'AB ',
		'   ',
		'   '
	], {
		A: 'modern_industrialization:tin_rod',
		B: 'minecraft:blaze_rod'

	})
	event.shaped('geggy:blackened_plate', [
		'B B',
		' A ',
		'B B'
	], {
		A: 'modern_industrialization:tin_plate',
		B: 'minecraft:blaze_powder'

	})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "geggy:netherrack_dust"},
		transitionalItem: {"item": "geggy:incomplete_compressed_netherrack"},
		sequence: [
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_compressed_netherrack"}
				],
				results: [{
					"item": "geggy:incomplete_compressed_netherrack"
				}]
		  	},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_compressed_netherrack"}
				],
				results: [{
					"item": "geggy:incomplete_compressed_netherrack"
				}]
		  	}		
		],
		results: [{
			"item": "geggy:compressed_netherrack"
		}],
		loops: 2
	  }
	)
	event.shaped('create:empty_blaze_burner', [
		'ACA',
		'ABA',
		'CCC'
	], {
		A: 'geggy:blackened_rod',
		B: 'geggy:compressed_netherrack',
		C: 'geggy:blackened_plate'
	})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "geggy:compressed_netherrack"},
		transitionalItem: {"item": "geggy:incomplete_empty_blaze_burner"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_empty_blaze_burner"},
					{"item": "modern_industrialization:steel_plate"}
				],
				results: [{
					"item": "geggy:incomplete_empty_blaze_burner"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_empty_blaze_burner"},
					{"item": "modern_industrialization:steel_plate"}
				],
				results: [{
					"item": "geggy:incomplete_empty_blaze_burner"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_empty_blaze_burner"}
				],
				results: [{
					"item": "geggy:incomplete_empty_blaze_burner"
				}]
		  	},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_empty_blaze_burner"},
					{"item": "modern_industrialization:steel_rod"}
				],
				results: [{
					"item": "geggy:incomplete_empty_blaze_burner"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_empty_blaze_burner"},
					{"item": "modern_industrialization:steel_rod"}
				],
				results: [{
					"item": "geggy:incomplete_empty_blaze_burner"
				}]
			}		
		],
		results: [{
			"item": "create:empty_blaze_burner"
		}],
		loops: 2
	  }
	)
	
	// craft mechanical pump, geggy cog
	
	event.remove({id: 'create:crafting/kinetics/mechanical_pump'})
	event.shaped('create:mechanical_pump', [
		'ABC',
		'   ',
		'   '
	], {
		A: 'geggy:cogwheel',
		B: 'create:andesite_alloy',
		C: 'create:fluid_pipe'
	})
	
	// craft spout
	
	event.remove({id: 'create:crafting/kinetics/spout'})
	event.custom({
		type: "create:item_application",
		ingredients: [
			{"item": "create:fluid_tank"},
			{"item": "create:copper_casing"}
		],
		results: [{
			"item": "create:spout"
		}]
	})
	
	// copper casing
	
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "create:andesite_casing"},
		transitionalItem: {"item": "geggy:incomplete_copper_casing"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_copper_casing"},
					{"item": "modern_industrialization:copper_plate"}
				],
				results: [{
					"item": "geggy:incomplete_copper_casing"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_copper_casing"}
				],
				results: [{
					"item": "geggy:incomplete_copper_casing"
				}]
		  	},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_copper_casing"},
					{"item": "modern_industrialization:rubber_sheet"}
				],
				results: [{
					"item": "geggy:incomplete_copper_casing"
				}]
			},	
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_copper_casing"}
				],
				results: [{
					"item": "geggy:incomplete_copper_casing"
				}]
		  	}			
		],
		results: [{
			"item": "create:copper_casing"
		}],
		loops: 6
	  }
	)
	
	// brass casing
	
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "create:copper_casing"},
		transitionalItem: {"item": "geggy:incomplete_brass_casing"},
		sequence: [
			{
				type: "create:filling",
				ingredients: [
					{"item": "geggy:incomplete_brass_casing"},
					// 81 = 1
					{"amount": 12150, "fluid": "modern_industrialization:synthetic_oil"}
				],
				results: [{
					"item": "geggy:incomplete_brass_casing"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_brass_casing"}
				],
				results: [{
					"item": "geggy:incomplete_brass_casing"
				}]
		  	},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_brass_casing"},
					{"item": "create:brass_sheet"}
				],
				results: [{
					"item": "geggy:incomplete_brass_casing"
				}]
			},	
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_brass_casing"}
				],
				results: [{
					"item": "geggy:incomplete_brass_casing"
				}]
		  	}			
		],
		results: [{
			"item": "create:brass_casing"
		}],
		loops: 6
	  }
	)
	
	// andesite casing
	
	event.shaped('geggy:andesite_block', [
		'AA ',
		'AA ',
		'   '
	], {
		A: 'create:andesite_alloy'
	})
	
	event.custom({
		type: "create:item_application",
		ingredients: [
			{"item": "geggy:andesite_block"},
			{"item": "geggy:j_planks"}
		],
		results: [{
			"item": "geggy:andesite_casing_1"
		}]
	})
	event.custom({
		type: "create:item_application",
		ingredients: [
			{"item": "geggy:andesite_casing_1"},
			{"item": "geggy:j_planks"}
		],
		results: [{
			"item": "geggy:andesite_casing_2"
		}]
	})
	event.custom({
		type: "create:item_application",
		ingredients: [
			{"item": "geggy:andesite_casing_2"},
			{"item": "geggy:j_planks"}
		],
		results: [{
			"item": "geggy:andesite_casing_3"
		}]
	})
	event.custom({
		type: "create:item_application",
		ingredients: [
			{"item": "geggy:andesite_casing_3"},
			{"item": "geggy:j_planks"}
		],
		results: [{
			"item": "geggy:andesite_casing_4"
		}]
	})
	event.custom({
		type: "create:item_application",
		ingredients: [
			{"item": "geggy:andesite_casing_4"},
			{"item": "geggy:j_planks"}
		],
		results: [{
			"item": "geggy:andesite_casing_5"
		}]
	})
	event.custom({
		type: "create:item_application",
		ingredients: [
			{"item": "geggy:andesite_casing_5"},
			{"item": "geggy:j_planks"}
		],
		results: [{
			"item": "create:andesite_casing"
		}]
	})
	
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "geggy:andesite_block"},
		transitionalItem: {"item": "geggy:andesite_casing_3"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:andesite_casing_3"},
					{"item": "geggy:j_planks"}
				],
				results: [{
					"item": "geggy:andesite_casing_3"
				}]
			}			
		],
		results: [{
			"item": "create:andesite_casing"
		}],
		loops: 6
	  }
	)
	
	// gearbox
	event.remove({id: 'create:crafting/kinetics/gearbox'})
	event.custom({
			"type": "create:mixing",
			"ingredients": [{"item": "minecraft:redstone"},{"tag": "minecraft:flowers"},{"tag": "minecraft:flowers"},{"tag": "minecraft:flowers"},{"tag": "minecraft:flowers"},{"tag": "minecraft:flowers"}],
			"results": [{"amount": 810, "fluid": "modern_industrialization:lubricant"}]
	})
	event.custom({
			"type": "create:mixing",
			"ingredients": [{"item": "minecraft:redstone"},{"item": "minecraft:sugar_cane"},{"item": "minecraft:sugar_cane"},{"item": "minecraft:sugar_cane"},{"item": "minecraft:sugar_cane"},{"item": "minecraft:sugar_cane"}],
			"results": [{"amount": 810, "fluid": "modern_industrialization:lubricant"}]
	})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "create:andesite_casing"},
		transitionalItem: {"item": "geggy:incomplete_gearbox"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_gearbox"},
					{"item": "geggy:treated_plank"}
				],
				results: [{
					"item": "geggy:incomplete_gearbox"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_gearbox"},
					{"item": "create:brass_sheet"}
				],
				results: [{
					"item": "geggy:incomplete_gearbox"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_gearbox"}
				],
				results: [{
					"item": "geggy:incomplete_gearbox"
				}]
		  	},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_gearbox"},
					{"item": "create:large_cogwheel"}
				],
				results: [{
					"item": "geggy:incomplete_gearbox"
				}]
			},
			{
				type: "create:filling",
				ingredients: [
					{"item": "geggy:incomplete_gearbox"},
					// 81 = 1
					{"amount": 810, "fluid": "modern_industrialization:lubricant"}
				],
				results: [{
					"item": "geggy:incomplete_gearbox"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_gearbox"},
					{"item": "create:shaft"}
				],
				results: [{
					"item": "geggy:incomplete_gearbox"
				}]
			}		
		],
		results: [{
			"item": "create:gearbox"
		}],
		loops: 2
	  }
	)
	
	// bronze pickaxe
	event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": "modern_industrialization:bronze_dust"},{"item": "modern_industrialization:bronze_dust"},{"item": "modern_industrialization:bronze_dust"},{"item": "modern_industrialization:bronze_dust"},{"item": "modern_industrialization:bronze_dust"}],
			"results": [{"amount": 47385, "fluid": "geghilarity:molten_bronze"}]
	})
	event.smelting('geggy:pickaxe_mold', 'geggy:unfired_pickaxe_mold').cookingTime(400)
	event.smelting('geggy:axe_mold', 'geggy:unfired_axe_mold').cookingTime(400)
	event.smelting('geggy:shovel_mold', 'geggy:unfired_shovel_mold').cookingTime(400)
	event.smelting('geggy:hoe_mold', 'geggy:unfired_hoe_mold').cookingTime(400)
	event.smelting('geggy:sword_mold', 'geggy:unfired_sword_mold').cookingTime(400)
	event.custom({
		type: "create:filling",
		ingredients: [
			{"item": "geggy:pickaxe_mold"},
			{"amount": 40500, "fluid": "geghilarity:molten_bronze",
			"nbt": {}}
		],
		results: [{
			"item": "geggy:filled_pickaxe_mold"
		}]
	})
	event.custom({
		type: "create:filling",
		ingredients: [
			{"item": "geggy:axe_mold"},
			{"amount": 40500, "fluid": "geghilarity:molten_bronze",
			"nbt": {}}
		],
		results: [{
			"item": "geggy:filled_axe_mold"
		}]
	})
	event.custom({
		type: "create:filling",
		ingredients: [
			{"item": "geggy:shovel_mold"},
			{"amount": 20250, "fluid": "geghilarity:molten_bronze",
			"nbt": {}}
		],
		results: [{
			"item": "geggy:filled_shovel_mold"
		}]
	})
	event.custom({
		type: "create:filling",
		ingredients: [
			{"item": "geggy:hoe_mold"},
			{"amount": 24300, "fluid": "geghilarity:molten_bronze",
			"nbt": {}}
		],
		results: [{
			"item": "geggy:filled_hoe_mold"
		}]
	})
	event.custom({
		type: "create:filling",
		ingredients: [
			{"item": "geggy:sword_mold"},
			{"amount": 28350, "fluid": "geghilarity:molten_bronze",
			"nbt": {}}
		],
		results: [{
			"item": "geggy:filled_sword_mold"
		}]
	})
	
	
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "geggy:filled_pickaxe_mold"}
		],
		"results": [
			{"count": 1, "item": "geggy:bronze_pickaxe_head"},
			{"chance": 0.9, "count": 1, "item": "geggy:pickaxe_mold"}
		]	
	})
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "geggy:filled_axe_mold"}
		],
		"results": [
			{"count": 1, "item": "geggy:bronze_axe_head"},
			{"chance": 0.9, "count": 1, "item": "geggy:axe_mold"}
		]	
	})
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "geggy:filled_shovel_mold"}
		],
		"results": [
			{"count": 1, "item": "geggy:bronze_shovel_head"},
			{"chance": 0.9, "count": 1, "item": "geggy:shovel_mold"}
		]	
	})
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "geggy:filled_hoe_mold"}
		],
		"results": [
			{"count": 1, "item": "geggy:bronze_hoe_head"},
			{"chance": 0.9, "count": 1, "item": "geggy:hoe_mold"}
		]	
	})
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "geggy:filled_sword_mold"}
		],
		"results": [
			{"count": 1, "item": "geggy:bronze_sword_head"},
			{"chance": 0.9, "count": 1, "item": "geggy:sword_mold"}
		]	
	})
	
	event.remove({id: 'create:crafting/materials/zinc_nugget_from_decompacting'})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "create:zinc_ingot"}
		],
		"tool": 
			{"type": "farmersdelight:tool",
			"tag": "c:tools/pickaxes"},
		"result": [
			{ "item": "create:zinc_nugget", "count": 6},
			{"chance": 0.3, "count": 2, "item": "create:zinc_nugget"}
		],
		"sound": "minecraft:entity.item.break"
	})
	event.custom({
		"type": "create:cutting",
		"ingredients": [
			{"item": "create:zinc_ingot"}
		],
		"processingTime": 200,
		"results": [
			{"count": 9, "item": "create:zinc_nugget"}
		]
	})
	
	// toolbox
	event.remove({id: 'create:crafting/curiosities/brown_toolbox'})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "create:brass_casing"},
		transitionalItem: {"item": "geggy:incomplete_toolbox"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_toolbox"},
					{"item": "minecraft:chest"}
				],
				results: [{
					"item": "geggy:incomplete_toolbox"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_toolbox"},
					{"item": "create:cogwheel"}
				],
				results: [{
					"item": "geggy:incomplete_toolbox"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_toolbox"},
					{"item": "create:brass_nugget"}
				],
				results: [{
					"item": "geggy:incomplete_toolbox"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_toolbox"},
					{"item": "create:brass_nugget"}
				],
				results: [{
					"item": "geggy:incomplete_toolbox"
				}]
			},/*
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_toolbox"},
					{"item": "create:wrench", "probability": 0}
				],
				results: [{
					"item": "geggy:incomplete_toolbox"
				}]
			},*/
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_toolbox"},
					{"item": "geggy:cured_leather_sheet"}
				],
				results: [{
					"item": "geggy:incomplete_toolbox"
				}]
			}		
		],
		results: [{
			"item": "create:brown_toolbox"
		}],
		loops: 1
	  }
	)

	// barrels
	event.remove({id: 'extended_drawers:single_drawer'})	
	event.remove({id: 'extended_drawers:double_drawer'})
	event.remove({id: 'extended_drawers:quad_drawer'})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"tag": "c:stripped_logs"},
		transitionalItem: {"item": "geggy:incomplete_chest"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_chest"},
					{"item": "geggy:j_planks"}
				],
				results: [{
					"item": "geggy:incomplete_chest"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_chest"},
					{"item": "minecraft:stick"}
				],
				results: [{
					"item": "geggy:incomplete_chest"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_chest"},
					{"item": "minecraft:flint"}
				],
				results: [{
					"item": "geggy:incomplete_chest"
				}]
			}			
		],
		results: [{
			"item": "minecraft:chest"
		}],
		loops: 2
	  }
	)
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "minecraft:chest"},
		transitionalItem: {"item": "geggy:incomplete_barrel"},
		sequence: [
			{
				type: "create:cutting",
				ingredients: [
					{"item": "geggy:incomplete_barrel"}
				],
				results: [{
					"item": "geggy:incomplete_barrel"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_barrel"},
					{"tag": "minecraft:wooden_slabs"}
				],
				results: [{
					"item": "geggy:incomplete_barrel"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_barrel"},
					{"item": "geggy:treated_plank"}
				],
				results: [{
					"item": "geggy:incomplete_barrel"
				}]
			}
			//spout		
		],
		results: [{
			"item": "minecraft:barrel"
		}],
		loops: 2
	  }
	)
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "minecraft:barrel"},
		transitionalItem: {"item": "geggy:incomplete_extdw"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_extdw"},
					{"item": "geggy:hardened_plank"}
				],
				results: [{
					"item": "geggy:incomplete_extdw"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_extdw"},
					{"item": "minecraft:flint"}
				],
				results: [{
					"item": "geggy:incomplete_extdw"
				}]
			}
			//spout		
		],
		results: [{
			"item": "extended_drawers:single_drawer"
		}],
		loops: 1
	  }
	)
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "extended_drawers:single_drawer"},
		transitionalItem: {"item": "geggy:incomplete_extdw_d"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_extdw_d"},
					{"item": "minecraft:chest"}
				],
				results: [{
					"item": "geggy:incomplete_extdw_d"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_extdw_d"},
					{"item": "geggy:hardened_plank"}
				],
				results: [{
					"item": "geggy:incomplete_extdw_d"
				}]
			},
			{
				type: "create:cutting",
				ingredients: [
					{"item": "geggy:incomplete_extdw_d"}
				],
				results: [{
					"item": "geggy:incomplete_extdw_d"
				}]
			}	
		],
		results: [{
			"item": "extended_drawers:double_drawer"
		}],
		loops: 1
	  }
	)
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "extended_drawers:double_drawer"},
		transitionalItem: {"item": "geggy:incomplete_extdw_q"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_extdw_q"},
					{"item": "minecraft:chest"}
				],
				results: [{
					"item": "geggy:incomplete_extdw_q"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_extdw_q"},
					{"item": "geggy:hardened_plank"}
				],
				results: [{
					"item": "geggy:incomplete_extdw_q"
				}]
			},
			{
				type: "create:cutting",
				ingredients: [
					{"item": "geggy:incomplete_extdw_q"}
				],
				results: [{
					"item": "geggy:incomplete_extdw_q"
				}]
			},	
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_extdw_q"},
					{"item": "modern_industrialization:tin_ring"}
				],
				results: [{
					"item": "geggy:incomplete_extdw_q"
				}]
			}
		],
		results: [{
			"item": "extended_drawers:quad_drawer"
		}],
		loops: 2
	  }
	)
	
	event.shaped('geggy:treated_plank', [
		'AS ',
		'   ',
		'   '
	], {
		A: 'geggy:j_planks',
		S: 'geggy:mulch_copper_can'
	}).replaceIngredient('geggy:mulch_copper_can', 'geggy:copper_can')
	
	event.custom({
		type: "create:filling",
		ingredients: [
			{"item": "geggy:j_planks"},
			{"amount": 20250, "fluid": "geggy:tannin",
			"nbt": {}}
		],
		results: [{
			"item": "geggy:treated_plank"
		}]
	})
	event.custom({
		type: "create:filling",
		ingredients: [
			{"item": "geggy:treated_plank"},
			{"amount": 20250, "fluid": "modern_industrialization:creosote",
			"nbt": {}}
		],
		results: [{
			"item": "geggy:hardened_plank"
		}]
	})
	
	event.custom({
		"type": "create:cutting",
		"ingredients": [
			{"item": "geggy:hardened_plank"}
		],
		"processingTime": 50,
		"results": [
			{"count": 4, "item": "geggy:hardened_stick"}
		]
	})
	
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "minecraft:soul_sand"}
		],
		"results": [
			{"chance": 0.3, "count": 4, "item": "geghilarity:precious_nugget"}
		]	
	})
	
	// ANDESITE
	// clay
	event.custom({
		"type": "create:emptying",
		"ingredients": [
			{"item": "geggy:clay_copper_can"}
		],
		"results": [
			{"item": "geggy:copper_can"},
			{"amount": 20250, "fluid": "geggy:liquid_clay"}
		]
	})
	event.custom({
		"type": "create:compacting",
		"ingredients": [
			{"amount": 40500, "fluid": "geggy:liquid_clay"}
		],
		"results": [
			{"item": "geggy:unrefined_clay"}
		]
	})
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "geggy:unrefined_clay"}
		],
		"processingTime": 100,
		"results": [
			{"item": "geggy:clay_dust", "chance": 0.08},
			{"item": "geggy:gravel_dust"}
		]
	})
	event.shaped('minecraft:gravel', [
		'AA ',
		'AA ',
		'   '
	], {
		A: 'geggy:gravel_dust'
	})
	event.custom({
		"type": "create:compacting",
		"ingredients": [
			{"item": "geggy:gravel_dust"},{"item": "geggy:gravel_dust"},
			{"item": "geggy:gravel_dust"},{"item": "geggy:gravel_dust"}
		],
		"results": [
			{"item": "minecraft:gravel"}
		]
	})
	event.custom({
		"type": "create:compacting",
		"ingredients": [
			{"item": "geggy:clay_dust"},{"item": "geggy:clay_dust"},
			{"amount": 20250, "fluid": "minecraft:water"}
		],
		"results": [
			{"item": "minecraft:clay_ball"}
		]
	})
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "minecraft:andesite"}
		],
		"processingTime": 200,
		"results": [
			{"item": "geggy:andesite_dust"},
			{"item": "geggy:andesite_dust", "chance": 0.5},
			{"count": 8, "item": "geggy:gravel_dust", "chance": 0.8}
		]
	})
	event.shapeless('geggy:andesite_dust', ['minecraft:andesite', 'minecraft:andesite', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')
	event.remove({id: 'minecraft:polished_andesite_slab'})
	event.shaped('3x minecraft:polished_andesite_slab', [
		'AAA',
		'   ',
		'   '
	], {
		A: 'minecraft:polished_andesite'
	})
	event.remove({id: 'minecraft:smooth_stone_slab'})
	event.shaped('3x minecraft:smooth_stone_slab', [
		'AAA',
		'   ',
		'   '
	], {
		A: 'minecraft:smooth_stone'
	})
	event.remove({id: 'minecraft:polished_blackstone_slab'})
	event.shaped('3x minecraft:polished_blackstone_slab', [
		'AAA',
		'   ',
		'   '
	], {
		A: 'minecraft:polished_blackstone'
	})
	
	// ALLOY
	event.remove({id: 'modern_industrialization:vanilla_recipes/mixer/andesite'})
	event.remove({id: 'create:crafting/materials/andesite_alloy'})
	event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
	event.remove({id: 'create:mixing/andesite_alloy'})
	event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
	event.custom({
		"type": "create:mixing",
		"ingredients": [{"item": "geggy:andesite_dust"},{"item": "geggy:andesite_dust"},{"item": "geggy:clay_dust"},{"item": "modern_industrialization:quartz_dust"},{"item": "create:zinc_nugget"}],
		"results": [{"item": "geggy:andesite_mix"}]
	})
	event.shaped('geggy:andesite_mix', [
		'AAA',
		'CBC',
		'DDE'
	], {
		A: 'geggy:andesite_dust',
		B: 'geggy:stone_mortar',
		C: 'geggy:clay_dust',
		D: 'modern_industrialization:quartz_dust',
		E: 'create:zinc_nugget',
	}).damageIngredient('geggy:stone_mortar')
	event.blasting('create:andesite_alloy', 'geggy:andesite_mix').cookingTime(600)
	
	// remove gravel gen (recycle)
	event.remove({id: 'create:milling/cobblestone'})
	
	// iron nugget crafting table
	event.remove({id: 'minecraft:iron_nugget'})
	
	// cursed bronze
	event.remove({id: 'modern_industrialization:materials/bronze/craft/ingot_from_nugget'})
	event.remove({id: 'modern_industrialization:materials/bronze/craft/nugget_from_ingot'})
	event.custom({
		"type": "create:compacting",
		"ingredients": [
			{"amount": 11664, "fluid": "geghilarity:molten_bronze"}
		],
		"results": [
			{"item": "modern_industrialization:bronze_ingot"}
		]
	})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "modern_industrialization:bronze_ingot"}
		],
		"tool": 
			{"type": "farmersdelight:tool",
			"tag": "c:tools/pickaxes"},
		"result": [
			{ "item": "modern_industrialization:bronze_nugget", "count": 6},
			{"chance": 0.5, "count": 3, "item": "modern_industrialization:bronze_nugget"}
		],
		"sound": "minecraft:entity.item.break"
	})
	event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": "modern_industrialization:bronze_nugget"}],
			"results": [{"amount": 1134, "fluid": "geghilarity:molten_bronze"}]
	})
	event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": "modern_industrialization:bronze_tiny_dust"}],
			"results": [{"amount": 972, "fluid": "geghilarity:molten_bronze"}]
	})
	event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": "modern_industrialization:bronze_ingot"}],
			"results": [{"amount": 11340, "fluid": "geghilarity:molten_bronze"}]
	})
	
	event.remove({id: 'modern_industrialization:materials/copper/craft/ingot_from_nugget'})
	event.remove({id: 'modern_industrialization:materials/copper/craft/nugget_from_ingot'})
	event.remove({id: 'create:crafting/materials/copper_ingot'})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "minecraft:copper_ingot"}
		],
		"tool": 
			{"type": "farmersdelight:tool",
			"tag": "c:tools/pickaxes"},
		"result": [
			{ "item": "create:copper_nugget", "count": 6},
			{"chance": 0.5, "count": 3, "item": "create:copper_nugget"}
		],
		"sound": "minecraft:entity.item.break"
	})
	event.custom({
		"type": "create:compacting",
		"ingredients": [
			{"item": "create:copper_nugget"},{"item": "create:copper_nugget"},
			{"item": "create:copper_nugget"},{"item": "create:copper_nugget"},
			{"item": "create:copper_nugget"},{"item": "create:copper_nugget"},
			{"item": "create:copper_nugget"},{"item": "create:copper_nugget"},
			{"item": "create:copper_nugget"}
		],
		"results": [
			{"item": "minecraft:copper_ingot"}
		]
	})
	
	event.remove({id: 'modern_industrialization:materials/tin/craft/ingot_from_nugget'})
	event.remove({id: 'modern_industrialization:materials/tin/craft/nugget_from_ingot'})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "modern_industrialization:tin_ingot"}
		],
		"tool": 
			{"type": "farmersdelight:tool",
			"tag": "c:tools/pickaxes"},
		"result": [
			{ "item": "modern_industrialization:tin_nugget", "count": 6},
			{"chance": 0.5, "count": 3, "item": "modern_industrialization:tin_nugget"}
		],
		"sound": "minecraft:entity.item.break"
	})
	event.custom({
		"type": "create:compacting",
		"ingredients": [
			{"item": "modern_industrialization:tin_nugget"},{"item": "modern_industrialization:tin_nugget"},
			{"item": "modern_industrialization:tin_nugget"},{"item": "modern_industrialization:tin_nugget"},
			{"item": "modern_industrialization:tin_nugget"},{"item": "modern_industrialization:tin_nugget"},
			{"item": "modern_industrialization:tin_nugget"},{"item": "modern_industrialization:tin_nugget"},
			{"item": "modern_industrialization:tin_nugget"}
		],
		"results": [
			{"item": "modern_industrialization:tin_ingot"}
		]
	})
	
	// paper
	event.custom({
		"type": "minecraft:smoking",
		"cookingtime": 150,
		"experience": 0.0,
		"ingredient": 
			{"item": "geggy:fiber"},
		"result": 
		{"item": "geggy:dried_fiber"}
	})
	event.custom({
		"type": "create:mixing",
		"ingredients": [{"item": "geggy:chad"},{"item": "geggy:chad"},{"item": "geggy:dried_fiber"},{"item": "geggy:dried_fiber"},{"item": "geggy:copper_can"},{"fluid": "minecraft:water", amount: 20250}],
		"results": [{"item": "geggy:chadded_copper_can"}]
	})
	event.custom({
		"type": "create:emptying",
		"ingredients": [
			{"item": "geggy:chadded_copper_can"}
		],
		"results": [
			{"item": "geggy:copper_can"},
			{"amount": 40500, "fluid": "geggy:fiber_pulpy"}
		]
	})
	event.custom({
		"type": "create:compacting",
		"ingredients": [
			{"amount": 20250, "fluid": "geggy:fiber_pulpy"}
		],
		"results": [
			{"item": "geggy:fiber_pressed"}
		]
	})
	event.custom({
		"type": "minecraft:smoking",
		"cookingtime": 300,
		"experience": 0.0,
		"ingredient": 
			{"item": "geggy:fiber_pressed"},
		"result": 
		{"item": "minecraft:paper"}
	})
	
	// sails
	event.remove({id: 'create:crafting/kinetics/white_sail'})
	event.remove({id: 'create:crafting/kinetics/white_sailfrom_conversion'})
	event.remove({id: 'create:crafting/kinetics/sail_framefrom_conversion'})
	event.shaped('create:white_sail', [
		'AB ',
		'A  ',
		'   '
	], {
		A: 'geggy:linen',
		B: 'create:sail_frame'
	})
	event.shaped('create:white_sail', [
		'BAB',
		'BAB',
		' C '
	], {
		A: 'geggy:linen',
		B: 'minecraft:stick',
		C: 'create:shaft'
	})
	
	// iron apocalypse
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "minecraft:raw_iron"}
		],
		"tool": 
			{"type": "farmersdelight:tool",
			"tag": "c:tools/pickaxes"},
		"result": [
			{ "item": "create:crushed_raw_iron", "count": 1},
			{"chance": 0.8, "count": 1, "item": "create:crushed_raw_iron"}
		],
		"sound": "minecraft:entity.item.break"
	})
	
	// cursed brass
	event.custom({
		"type": "create:compacting",
		"ingredients": [
			{"item": "modern_industrialization:copper_dust"},
			{"item": "kubejs:zinc_dust"},
			{"item": "minecraft:blaze_powder"}
		],
		"results": [
			{"count": 2, "item": "create:brass_ingot"}
		]
	})
	
	event.remove({id: 'create:crafting/materials/copper_nugget'})
	
	// coal
	event.remove({id: 'create:milling/coal'})
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "minecraft:coal"}
		],
		"processingTime": 300,
		"results": [
			{"item": "modern_industrialization:coal_dust"}
		]
	})
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "modern_industrialization:coal_dust"}
		],
		"processingTime": 200,
		"results": [
			{"count": 2, "item": "minecraft:black_dye"},
			{"chance": 0.1, "item": "minecraft:gray_dye"}
		]
	})
	
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "geggy:primitive_brick"}
		],
		"processingTime": 500,
		"results": [
			{"count": 2, "item": "geggy:primitive_brick_dust"}
		]
	})
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "minecraft:dried_kelp"}
		],
		"processingTime": 100,
		"results": [
			{"count": 1, "item": "geggy:kelp_dust"},
			{"chance": 0.5, "item": "geggy:kelp_dust"}
		]
	})
	
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"tag": "c:sand"}
		],
		"processingTime": 80,
		"results": [
			{"count": 1, "item": "geggy:quartz_sand"},
			{"chance": 0.75, "item": "geggy:quartz_sand"}
		]
	})
	
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "create:limestone"}
		],
		"processingTime": 300,
		"results": [
			{"count": 4, "item": "geggy:limestone_dust"},
			{"chance": 0.75, "count": 2, "item": "geggy:gravel_dust"}
		]
	})
	
	// gears & rings
	
	const ctgears = [
		'copper',
		'tin',
		'bronze',
		'iron',
		'gold',
		'steel',
		'invar'
	]
	const allgears = [
		'copper',
		'tin',
		'bronze',
		'iron',
		'gold',
		'steel',
		'invar',
		'aluminum',
		'stainless_steel',
		'titanium'
	]
	allgears.forEach(mat =>{
		event.remove({id: "modern_industrialization:materials/"+mat+"/craft/gear"})
		event.remove({id: "modern_industrialization:materials/"+mat+"/craft/ring"})
	})	
	ctgears.forEach(mat =>{
		event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "modern_industrialization:"+mat+"_ring"},
		transitionalItem: {"item": "geggy:incomplete_"+mat+"_gear"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_"+mat+"_gear"},
					{"item": "modern_industrialization:"+mat+"_bolt"}
				],
				results: [{
					"item": "geggy:incomplete_"+mat+"_gear"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_"+mat+"_gear"},
					{"item": "modern_industrialization:"+mat+"_bolt"}
				],
				results: [{
					"item": "geggy:incomplete_"+mat+"_gear"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_"+mat+"_gear"}
				],
				results: [{
					"item": "geggy:incomplete_"+mat+"_gear"
				}]
		  	},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_"+mat+"_gear"},
					{"item": "modern_industrialization:"+mat+"_plate"}
				],
				results: [{
					"item": "geggy:incomplete_bronze_gear"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_"+mat+"_gear"},
					{"item": "modern_industrialization:"+mat+"_plate"}
				],
				results: [{
					"item": "geggy:incomplete_"+mat+"_gear"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_"+mat+"_gear"}
				],
				results: [{
					"item": "geggy:incomplete_"+mat+"_gear"
				}]
		  	}
		],
		results: [{
			"item": "modern_industrialization:"+mat+"_gear"
		}],
		loops: 2
	  }
	)
	})
	
	// rubber
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "modern_industrialization:lignite_coal"}
		],
		"processingTime": 200,
		"results": [
			{"count": 1, "item": "modern_industrialization:lignite_coal_crushed_dust"}
		]
	})
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "modern_industrialization:lignite_coal_crushed_dust"}
		],
		"results": [
			{"item": "modern_industrialization:lignite_coal_dust"},
			{"chance": 0.75, "count": 3, "item": "modern_industrialization:sulfur_tiny_dust"}
		]	
	})
	event.custom({
		type: "create:mixing",
		ingredients: [
			{"item": "geggy:kelp_dust"},{"item": "geggy:kelp_dust"},{"item": "geggy:kelp_dust"},{"item": "geggy:kelp_dust"},{"item": "geggy:kelp_dust"},{"item": "geggy:kelp_dust"},{"item": "minecraft:dandelion"},{"item": "modern_industrialization:sulfur_tiny_dust"},
			{amount: 20250, "fluid":"minecraft:water"}
		],
		results: [{
			"count": 6, "item":"geggy:rubber_pulp"
		}],
		processingTime: 400
	})
	event.smelting('geggy:heated_rubber', 'geggy:rubber_pulp').cookingTime(100)
	
	// sticks from jplank
	event.custom({
		"type": "create:cutting",
		"ingredients": [
			{"item": "geggy:j_planks"}
		],
		"processingTime": 50,
		"results": [
			{"count": 4, "item": "minecraft:stick"}
		]
	})
	
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "modern_industrialization:coke"}
		],
		"processingTime": 100,
		"results": [
			{"count": 1, "item": "modern_industrialization:coke_dust"}
		]
	})
	
	// coke oven bricks
	// crafting table > 4 clay ball to clay needed for mortar clay dust
	event.remove({id: 'create:milling/clay'})
	event.remove({id: 'minecraft:clay'})
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "minecraft:clay"}
		],
		"processingTime": 100,
		"results": [
			{"count": 3, "item": "geggy:clay_dust"},
			{"count": 1, "item": "geggy:clay_dust","chance": 0.5},
			{"count": 1, "item": "geggy:gravel_dust", "chance": 0.5}
		]
	})
	event.custom({
		type: "create:compacting",
		ingredients: [
			{"item": "minecraft:clay_ball"},{"item": "minecraft:clay_ball"},{"item": "minecraft:clay_ball"},{"item": "minecraft:clay_ball"},{"item": "minecraft:clay_ball"}
		],
		results: [
			{"count": 1, "item": "minecraft:clay"}
		],
		processingTime: 100
	})
	event.custom({
		"type": "create:mixing",
		"ingredients": [{"item": "minecraft:clay_ball"},{"item": "minecraft:clay_ball"},{"item": "minecraft:clay_ball"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"tag": "c:sand"},{"tag": "c:sand"},{"tag": "c:sand"},{"fluid": "minecraft:water", amount: 20250}],
		"results": [{"count": 3, "item": "geggy:muddy_coke_oven_blend"}]
	})
	event.custom({
		type: "create:compacting",
		ingredients: [
			{"item": "geggy:muddy_coke_oven_blend"}
		],
		results: [
			{"count": 1, "item": "geggy:unfired_coke_oven_brick"}
		],
		processingTime: 100
	})
	
	
	// more iron
	event.custom({
		type: "create:compacting",
		ingredients: [
			{"item": "modern_industrialization:iron_tiny_dust"},{"item": "modern_industrialization:iron_tiny_dust"},{"item": "modern_industrialization:iron_tiny_dust"},{"item": "modern_industrialization:iron_tiny_dust"},{"item": "modern_industrialization:iron_tiny_dust"},{"item": "modern_industrialization:iron_tiny_dust"},{"item": "modern_industrialization:iron_tiny_dust"},{"item": "modern_industrialization:iron_tiny_dust"},{"item": "modern_industrialization:iron_tiny_dust"}
		],
		results: [
			{"count": 1, "item": "modern_industrialization:iron_dust"}
		],
		processingTime: 100
	})
	
	// brass encased large cogwheel for arm
	event.shapeless('create:brass_encased_large_cogwheel', ['create:large_cogwheel','create:brass_casing'])
	
	// MD pipes
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "modern_industrialization:rubber_sheet"},
		transitionalItem: {"item": "geggy:incomplete_fluid_pipe"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_fluid_pipe"},
					{"item": "geggy:potin_curved_plate"}
				],
				results: [{
					"item": "geggy:incomplete_fluid_pipe"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_fluid_pipe"},
					{"item": "geggy:reinforced_glass_pane"}
				],
				results: [{
					"item": "geggy:incomplete_fluid_pipe"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_fluid_pipe"},
					{"item": "modern_industrialization:bronze_rotor"}
				],
				results: [{
					"item": "geggy:incomplete_fluid_pipe"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_fluid_pipe"},
					{"item": "geggy:potin_curved_plate"}
				],
				results: [{
					"item": "geggy:incomplete_fluid_pipe"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_fluid_pipe"}
				],
				results: [{
					"item": "geggy:incomplete_fluid_pipe"
				}]
		  	}
		],
		results: [{
			"item": "moderndynamics:fluid_pipe"
		}],
		loops: 2
	  }
	)
	
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "modern_industrialization:motor"},
		transitionalItem: {"item": "geggy:incomplete_item_pipe"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_item_pipe"},
					{"item": "geggy:invar_curved_plate"}
				],
				results: [{
					"item": "geggy:incomplete_item_pipe"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_item_pipe"},
					{"item": "geggy:reinforced_glass_pane"}
				],
				results: [{
					"item": "geggy:incomplete_item_pipe"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_item_pipe"},
					{"item": "modern_industrialization:steel_gear"}
				],
				results: [{
					"item": "geggy:incomplete_item_pipe"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_item_pipe"},
					{"item": "geggy:invar_curved_plate"}
				],
				results: [{
					"item": "geggy:incomplete_item_pipe"
				}]
			},
			{
				type: "create:filling",
				ingredients: [
					{"item": "geggy:incomplete_item_pipe"},
					// 81 = 1
					{"amount": 1620, "fluid": "modern_industrialization:soldering_alloy"}
				],
				results: [{
					"item": "geggy:incomplete_item_pipe"
				}]
			}
		],
		results: [{
			"item": "moderndynamics:item_pipe"
		}],
		loops: 2
	  }
	)
	
	// small bronze gear
	event.custom({
		type: "create:cutting",
		ingredients: [
			{"item": "modern_industrialization:bronze_gear"}
		],
		results: [{
			"count": 2, "item": "geggy:small_bronze_gear"
		}]
	})
	
	event.custom({
		type: "create:pressing",
		ingredients: [
			{"item": "geggy:red_alloy_ingot"}
		],
		results: [{
			"count": 1, "item": "geggy:red_alloy_plate"
		}]
	})
	
	// glue
	event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": "minecraft:slime_ball"},{"item": "minecraft:slime_ball"},
			{"item": "minecraft:slime_ball"},{"item": "minecraft:slime_ball"},
			{"item": "minecraft:slime_ball"}],
			"results": [{"amount": 8100, "fluid": "geggy:glue"}]
	})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "geggy:book_binding"},
		transitionalItem: {"item": "geggy:incomplete_book"},
		sequence: [
			{
				type: "create:filling",
				ingredients: [
					{"item": "geggy:incomplete_book"},
					// 81 = 1
					{"amount": 1620, "fluid": "geggy:glue"}
				],
				results: [{
					"item": "geggy:incomplete_book"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_book"},
					{"item": "minecraft:paper"}
				],
				results: [{
					"item": "geggy:incomplete_book"
				}]
			}
		],
		results: [{
			"item": "minecraft:book"
		}],
		loops: 5
	  }
	)
	
	// analog circuit gegg
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "modern_industrialization:analog_circuit_board"},
		transitionalItem: {"item": "kubejs:incomplete_analog_circuit"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "kubejs:incomplete_analog_circuit"},
					{"item": "geggy:vacuum_tube"}
				],
				results: [{
					"item": "kubejs:incomplete_analog_circuit"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "kubejs:incomplete_analog_circuit"},
					{"item": "modern_industrialization:capacitor"}
				],
				results: [{
					"item": "kubejs:incomplete_analog_circuit"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "kubejs:incomplete_analog_circuit"},
					{"item": "modern_industrialization:resistor"}
				],
				results: [{
					"item": "kubejs:incomplete_analog_circuit"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "kubejs:incomplete_analog_circuit"},
					{"item": "modern_industrialization:inductor"}
				],
				results: [{
					"item": "kubejs:incomplete_analog_circuit"
				}]
			}
		],
		results: [{
			"item": "modern_industrialization:analog_circuit"
		}],
		loops: 2
	  }
	)
	
	// custom electron tube
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": "modern_industrialization:quartz_dust"},{"item": "modern_industrialization:quartz_dust"},{"item": "minecraft:amethyst_shard"},
		{"amount": 35964, "fluid": "modern_industrialization:molten_redstone"}],
		"results": [{"amount": 35964, "fluid": "geggy:molten_rose_quartz"}]
	})
	event.custom({
		type: "create:filling",
		ingredients: [
			{"item": "geggy:glass_tube"},
			{"amount": 35964, "fluid": "geggy:molten_rose_quartz"}
		],
		results: [{
			"item": "geggy:rose_quartz_tube"
		}]
	})
	event.shaped('create:electron_tube', [
		'A  ',
		'B  ',
		'   '
	], {
		A: 'geggy:rose_quartz_tube',
		B: 'modern_industrialization:tin_plate'
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 4,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:quartz_dust", amount: 2},
			{item: "minecraft:amethyst_shard", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:molten_redstone", amount: 444}
		],
		fluid_outputs: [
			{fluid: "geggy:molten_rose_quartz", amount: 444}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:glass_tube", amount: 1},
			{item: "modern_industrialization:tin_plate", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geggy:molten_rose_quartz", amount: 222},
			{fluid: "modern_industrialization:soldering_alloy", amount: 12}
		],
		item_outputs: [
			{item: "create:electron_tube", amount: 1}
		]
	})
	
	// reinforced flint tools
	event.custom({
		type: "create:filling",
		ingredients: [
			{"item": "geggy:j_tool_rod"},
			{"amount": 20250, "fluid": "geggy:tannin",
			"nbt": {}}
		],
		results: [{
			"item": "geggy:reinforced_tool_rod"
		}]
	})
	event.shaped('geggy:reinforced_tool_rod', [
		'AS ',
		'   ',
		'   '
	], {
		A: 'geggy:j_tool_rod',
		S: 'geggy:mulch_copper_can'
	}).replaceIngredient('geggy:mulch_copper_can', 'geggy:copper_can')
	event.custom({
		"type": "create:mixing",
		"ingredients": [{"item": "modern_industrialization:coal_dust"},{"item": "minecraft:seagrass"},
		{"item": "minecraft:honeycomb"},{"item": "modern_industrialization:sulfur_tiny_dust"},
		{"amount": 40500, "fluid": "geggy:tannin"}],
		"results": [{"count": 2, "item": "geggy:low_grade_resin_raw"}]
	})
	event.custom({
		"type": "farmersdelight:cooking",
		"cookingtime": 600,
		"experience": 0.0,
		"ingredients": [
			{"item": "geggy:low_grade_resin_raw"},
			{"item": "geggy:low_grade_resin_raw"}
		],
		"recipe_book_tab": "meals",
		"result": {"item": "geggy:low_grade_resin"}
	})
	
	// misc recycle
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "minecraft:netherrack"}
		],
		"processingTime": 200,
		"results": [
			{"item": "geggy:netherrack_dust"},
			{"item": "geggy:netherrack_dust", "chance": 0.25}
		]
	})
	// harder soulsand
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [
			{"item": "minecraft:red_sand"},
			{"amount": 20250, "fluid": "geggy:molten_rose_quartz"},
			{"amount": 20250, "fluid": "modern_industrialization:creosote"}
		],
		"results": [{"item": "geggy:oleous_sand"}]
	})
	
	event.custom({
		"type": "create:mixing",
		"ingredients": [{"item": "modern_industrialization:iron_dust"},{"item": "modern_industrialization:iron_dust"},
		{"item": "geggy:primitive_brick_dust"},{"item": "geggy:primitive_brick_dust"},{"item": "geggy:kelp_dust"}],
		"results": [{"count": 2, "item": "geggy:unfired_tempered_dust"}]
	})
	
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"tag": "cork"},{"tag": "cork"},{"tag": "cork"},
			{"tag": "cork"},{"tag": "cork"}
		],
		"processingTime": 100,
		"results": [
			{"item": "geggy:ground_tree_bark"}
		]
	})
	event.custom({
		"type": "create:mixing",
		"ingredients": [
			{"item": "geggy:ground_tree_bark"},
			{"amount": 23328, "fluid": "geggy:rubber"}
		],
		"results": [{"item": "geggy:mixed_cork"}]
	})
	event.custom({
		type: "create:pressing",
		ingredients: [
			{"item": "geggy:mixed_cork"}
		],
		results: [{
			"count": 1, "item": "geggy:pressed_cork"
		}]
	})
	event.custom({
		type: "create:cutting",
		ingredients: [
			{"item": "geggy:pressed_cork"}
		],
		results: [{
			"count": 5, "item": "geggy:bottle_cork"
		}]
	})

	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "minecraft:gilded_blackstone"}
		],
		"processingTime": 150,
		"results": [
			{"item": "geggy:crushed_precious_ore"}
		]
	})
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "geggy:precious_ore"}
		],
		"processingTime": 250,
		"results": [
			{"item": "geggy:crushed_precious_ore"}
		]
	})
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "geggy:nether_precious_ore"}
		],
		"processingTime": 150,
		"results": [
			{"item": "geggy:crushed_precious_ore"}
		]
	})
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "geggy:deepslate_precious_ore"}
		],
		"processingTime": 300,
		"results": [
			{"item": "geggy:crushed_precious_ore"}
		]
	})
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "geggy:crushed_precious_ore"}
		],
		"results": [
			{"item": "geggy:purified_precious_ore", "chance": 0.9}
		]	
	})
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [
			{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},
			{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},
			{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},
			{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},
			{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},
			{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},
			{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"},{"item": "geghilarity:precious_nugget"}
		],
		"results": [{"item": "minecraft:gold_nugget"}]
	})
	
	// reinforced
	event.custom({
		type: "create:cutting",
		ingredients: [
			{"item": "minecraft:flint"}
		],
		results: [{
			"count": 1, "item": "geggy:flint_pickaxe_left_arm"
		}]
	})
	event.custom({
		type: "create:cutting",
		ingredients: [
			{"item": "minecraft:flint"}
		],
		results: [{
			"count": 1, "item": "geggy:flint_pickaxe_right_arm"
		}]
	})
	event.custom({
		type: "create:cutting",
		ingredients: [
			{"item": "minecraft:flint"}
		],
		results: [{
			"count": 1, "item": "geggy:flint_pickaxe_head_main"
		}]
	})
	event.custom({
		type: "create:compacting",
		ingredients: [
			{"item": "geggy:flint_pickaxe_left_arm"},{"item": "geggy:flint_pickaxe_head_main"},{"item": "geggy:flint_pickaxe_right_arm"}
		],
		results: [
			{"count": 1, "item": "geggy:dull_flint_pickaxe_head"}
		],
		processingTime: 100
	})
	event.custom({
		type: "create:sandpaper_polishing",
		ingredients: [
			{"item": "geggy:dull_flint_pickaxe_head"}
		],
		results: [
			{"item": "geggy:sharpened_flint_pickaxe_head"}
		]
	})
	
	event.custom({
		type: "create:filling",
		ingredients: [
			{"item": "minecraft:stick"},
			{"amount": 2025, "fluid": "modern_industrialization:creosote",
			"nbt": {}}
		],
		results: [
			{"item": "minecraft:torch"}
		]
	})
	
	// galvanized
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": "create:crushed_raw_zinc"}],
		"results": [{"amount": 10368, "fluid": "geggy:liquid_zinc"}]
	})
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": "create:raw_zinc"}],
		"results": [{"amount": 10368, "fluid": "geggy:liquid_zinc"}]
	})
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": "create:zinc_ingot"}],
		"results": [{"amount": 11016, "fluid": "geggy:liquid_zinc"}]
	})
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": "create:zinc_nugget"}],
		"results": [{"amount": 1215, "fluid": "geggy:liquid_zinc"}]
	})
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": "createdeco:zinc_sheet"}],
		"results": [{"amount": 11016, "fluid": "geggy:liquid_zinc"}]
	})
	
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "modern_industrialization:steel_plate"},
		transitionalItem: {"item": "geggy:incomplete_galvanized_plate"},
		sequence: [
			{
				type: "create:filling",
				ingredients: [
					{"item": "geggy:incomplete_galvanized_plate"},
					{"amount": 729, "fluid": "geggy:liquid_zinc"}
				],
				results: [{
					"item": "geggy:incomplete_galvanized_plate"
				}]
			}
		],
		results: [{
			"item": "geggy:galvanized_steel_plate"
		}],
		loops: 2
	})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "modern_industrialization:steel_curved_plate"},
		transitionalItem: {"item": "geggy:incomplete_galvanized_curved_plate"},
		sequence: [
			{
				type: "create:filling",
				ingredients: [
					{"item": "geggy:incomplete_galvanized_curved_plate"},
					{"amount": 729, "fluid": "geggy:liquid_zinc"}
				],
				results: [{
					"item": "geggy:incomplete_galvanized_curved_plate"
				}]
			}
		],
		results: [{
			"item": "geggy:galvanized_steel_curved_plate"
		}],
		loops: 2
	})
	event.custom({
		type: "create:filling",
		ingredients: [
			{"item": "modern_industrialization:steel_rod"},
			{"amount": 729, "fluid": "geggy:liquid_zinc",
			"nbt": {}}
		],
		results: [{
			"item": "geggy:galvanized_steel_rod"
		}]
	})
	event.custom({
		type: "create:cutting",
		ingredients: [
			{"item": "geggy:galvanized_steel_rod"}
		],
		results: [{
			"count": 2, "item": "geggy:galvanized_steel_bolt"
		}]
	})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "modern_industrialization:steel_gear"},
		transitionalItem: {"item": "geggy:incomplete_galvanized_gear"},
		sequence: [
			{
				type: "create:filling",
				ingredients: [
					{"item": "geggy:incomplete_galvanized_gear"},
					{"amount": 2754, "fluid": "geggy:liquid_zinc"}
				],
				results: [{
					"item": "geggy:incomplete_galvanized_gear"
				}]
			}
		],
		results: [{
			"item": "geggy:galvanized_steel_gear"
		}],
		loops: 2
	})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "modern_industrialization:steel_ring"},
		transitionalItem: {"item": "geggy:incomplete_galvanized_ring"},
		sequence: [
			{
				type: "create:filling",
				ingredients: [
					{"item": "geggy:incomplete_galvanized_ring"},
					{"amount": 243, "fluid": "geggy:liquid_zinc"}
				],
				results: [{
					"item": "geggy:incomplete_galvanized_ring"
				}]
			}
		],
		results: [{
			"item": "geggy:galvanized_steel_ring"
		}],
		loops: 2
	})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "modern_industrialization:steel_rod"},
		transitionalItem: {"item": "geggy:incomplete_long_galvanized_rod"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_long_galvanized_rod"},
					{"item": "modern_industrialization:steel_rod"}
				],
				results: [{
					"item": "geggy:incomplete_long_galvanized_rod"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_long_galvanized_rod"}
				],
				results: [{
					"item": "geggy:incomplete_long_galvanized_rod"
				}]
		  	},
			{
				type: "create:filling",
				ingredients: [
					{"item": "geggy:incomplete_long_galvanized_rod"},
					{"amount": 1296, "fluid": "geggy:liquid_zinc"}
				],
				results: [{
					"item": "geggy:incomplete_long_galvanized_rod"
				}]
			}
		],
		results: [{
			"item": "geggy:long_galvanized_steel_rod"
		}],
		loops: 1
	})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "geggy:galvanized_steel_gear"},
		transitionalItem: {"item": "geggy:incomplete_galvanized_machine_casing"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_galvanized_machine_casing"},
					{"item": "geggy:galvanized_steel_plate"}
				],
				results: [{
					"item": "geggy:incomplete_galvanized_machine_casing"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_galvanized_machine_casing"},
					{"item": "geggy:galvanized_steel_plate"}
				],
				results: [{
					"item": "geggy:incomplete_galvanized_machine_casing"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_galvanized_machine_casing"},
					{"item": "geggy:galvanized_steel_plate"}
				],
				results: [{
					"item": "geggy:incomplete_galvanized_machine_casing"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_galvanized_machine_casing"},
					{"item": "geggy:long_galvanized_steel_rod"}
				],
				results: [{
					"item": "geggy:incomplete_galvanized_machine_casing"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_galvanized_machine_casing"}
				],
				results: [{
					"item": "geggy:incomplete_galvanized_machine_casing"
				}]
		  	},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_galvanized_machine_casing"},
					{"item": "geggy:galvanized_steel_bolt"}
				],
				results: [{
					"item": "geggy:incomplete_galvanized_machine_casing"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_galvanized_machine_casing"},
					{"item": "geggy:galvanized_steel_bolt"}
				],
				results: [{
					"item": "geggy:incomplete_galvanized_machine_casing"
				}]
			}
		],
		results: [{
			"item": "geghilarity:galvanized_steel_machine_casing"
		}],
		loops: 2
	})
	
})	