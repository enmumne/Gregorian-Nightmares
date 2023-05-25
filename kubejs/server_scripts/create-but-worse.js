ServerEvents.recipes(event => {
	
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
	
	event.remove({id: 'create:crafting/kinetics/water_wheel'})
	event.shaped('create:water_wheel', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'geggy:hardened_plank',
		B: 'create:large_cogwheel'
	})
	
	event.remove({id: 'create:crafting/kinetics/weighted_ejector'})
	event.shaped('create:weighted_ejector', [
		'AD ',
		'BD ',
		'CD '
	], {
		A: 'modern_industrialization:steel_plate',
		B: 'create:depot',
		C: 'modern_industrialization:steel_gear',
		D: 'modern_industrialization:steel_ring'
	})
	
	event.remove({id: 'create:crafting/kinetics/item_drain'})
	event.shaped('create:item_drain', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: 'create:copper_casing',
		B: 'modern_industrialization:tin_rod'
	})
	
	event.remove({id: 'create:crafting/kinetics/analog_lever'})
	event.shaped('create:analog_lever', [
		'C  ',
		'B  ',
		'A  '
	], {
		A: 'create:andesite_casing',
		B: 'minecraft:stick',
		C: 'create:andesite_alloy'
	})
	event.remove({id: 'create:crafting/kinetics/encased_fan'})
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
	event.remove({id: 'create:crafting/kinetics/millstone'})
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
	event.remove({id: 'create:crafting/kinetics/metal_bracket'})
	event.shaped('2x create:metal_bracket', [
		'AAA',
		'BCB',
		'   '
	], {
		A: 'modern_industrialization:steel_nugget',
		B: 'modern_industrialization:steel_ingot',
		C: 'create:andesite_alloy'
	})
	event.remove({id: 'create:crafting/kinetics/metal_girder'})
	event.shaped('4x create:metal_girder', [
		'AA ',
		'BB ',
		'CC '
	], {
		A: 'modern_industrialization:steel_plate',
		B: 'modern_industrialization:steel_ingot',
		C: 'create:andesite_alloy'
	})
	event.remove({id: 'create:crafting/kinetics/goggles'})
	event.shaped('create:goggles', [
		'AAA',
		'BCB',
		'   '
	], {
		A: 'minecraft:string',
		B: 'geggy:reinforced_glass_pane',
		C: 'create:brass_sheet'
	})
	
	event.remove({id: 'create:crafting/kinetics/wrench'})
	event.shaped('create:wrench', [
		'AA ',
		'AB ',
		' C '
	], {
		A: 'create:brass_sheet',
		B: 'geggy:cogwheel',
		C: 'minecraft:stick'
	})
	
	event.remove({id: 'create:crafting/kinetics/depot'})
	event.shaped('create:depot', [
		'A  ',
		'C  ',
		'B  '
	], {
		A: 'modern_industrialization:lead_plate',
		B: 'create:andesite_casing',
		C: 'modern_industrialization:tin_ring'
	})
	
	event.remove({id: 'create:crafting/kinetics/mechanical_mixer'})
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
	
	event.remove({id: 'create:crafting/kinetics/hose_pulley'})
	event.remove({id: 'minecraft:dried_kelp_block'})
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
	event.remove({id: 'create:crafting/kinetics/piston_extension_pole'})
	event.shaped('create:piston_extension_pole', [
		'A  ',
		'B  ',
		'A  '
	], {
		A: '#minecraft:planks',
		B: 'create:shaft'
	})
	event.remove({id: 'create:crafting/kinetics/cogwheel'})
	event.remove({id: 'create:deploying/cogwheel'})
	event.remove({id: 'create:deploying/large_cogwheel'})
	event.remove({id: 'create:crafting/kinetics/large_cogwheel'})
	event.remove({id: 'create:crafting/kinetics/large_cogwheelfrom_little'})
	event.custom({
			"type": "create:pressing",
			"ingredients": [{"item": "minecraft:copper_ingot"}],
			"results": [{"item": "modern_industrialization:copper_plate"}]
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
					{"item": "modern_industrialization:copper_nugget"}
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
					{"item": "modern_industrialization:copper_nugget"}
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
	
	event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
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
	
	event.remove({id: 'create:item_application/andesite_casing_from_log'})
	event.remove({id: 'create:item_application/andesite_casing_from_wood'})
	event.remove({id: 'create:item_application/copper_casing_from_log'})
	event.remove({id: 'create:item_application/copper_casing_from_wood'})
	event.remove({id: 'create:item_application/brass_casing_from_log'})
	event.remove({id: 'create:item_application/brass_casing_from_wood'})
	
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
					{"item": "minecraft:dried_kelp"}
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
			"results": [{"amount": 40500, "fluid": "geghilarity:molten_bronze"}]
	})
	event.smelting('geggy:pickaxe_mold', 'geggy:unfired_pickaxe_mold').cookingTime(400)
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
		"type": "create:splashing",
		"ingredients": [
			{"item": "geggy:filled_pickaxe_mold"}
		],
		"results": [
			{"count": 1, "item": "geggy:bronze_pickaxe_head"},
			{"chance": 0.9, "count": 1, "item": "geggy:pickaxe_mold"}
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
	event.remove({id: 'minecraft:barrel'})	
	event.shaped('minecraft:barrel', [
		'AAA',
		'BCB',
		'AAA'
	], {
		A: '#minecraft:wooden_slabs',
		B: 'geggy:treated_plank',
		C: 'minecraft:chest'
	})
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
					{"item": "minecraft:chest"}
				],
				results: [{
					"item": "geggy:incomplete_extdw"
				}]
			},
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
			{"amount": 40500, "fluid": "modern_industrialization:creosote",
			"nbt": {}}
		],
		results: [{
			"item": "geggy:hardened_plank"
		}]
	})
	
	event.remove({id: 'minecraft:andesite'})
	event.remove({id: 'create:crushing/diorite'})
	event.remove({id: 'create:crushing/diorite_recycling'})
	event.remove({id: 'create:crushing/prismarine_crystals'})
	event.remove({id: 'create:splashing/soul_sand'})
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
		"processingTime": 150,
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
		"type": "create:pressing",
		"ingredients": [
			{"item": "geggy:clay_dust"}
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
		"type": "create:compacting",
		"ingredients": [
			{"item": "modern_industrialization:bronze_nugget"},{"item": "modern_industrialization:bronze_nugget"},
			{"item": "modern_industrialization:bronze_nugget"},{"item": "modern_industrialization:bronze_nugget"},
			{"item": "modern_industrialization:bronze_nugget"},{"item": "modern_industrialization:bronze_nugget"},
			{"item": "modern_industrialization:bronze_nugget"},{"item": "modern_industrialization:bronze_nugget"},
			{"item": "modern_industrialization:bronze_nugget"}
		],
		"results": [
			{"item": "modern_industrialization:bronze_ingot"}
		]
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
			{ "item": "modern_industrialization:copper_nugget", "count": 6},
			{"chance": 0.5, "count": 3, "item": "modern_industrialization:copper_nugget"}
		],
		"sound": "minecraft:entity.item.break"
	})
	event.custom({
		"type": "create:compacting",
		"ingredients": [
			{"item": "modern_industrialization:copper_nugget"},{"item": "modern_industrialization:copper_nugget"},
			{"item": "modern_industrialization:copper_nugget"},{"item": "modern_industrialization:copper_nugget"},
			{"item": "modern_industrialization:copper_nugget"},{"item": "modern_industrialization:copper_nugget"},
			{"item": "modern_industrialization:copper_nugget"},{"item": "modern_industrialization:copper_nugget"},
			{"item": "modern_industrialization:copper_nugget"}
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
	event.shaped('create:white_sail', [
		'AB ',
		'BC ',
		'   '
	], {
		A: 'geggy:linen',
		B: 'minecraft:stick',
		C: 'create:andesite_alloy'
	})
	event.remove({id: 'create:crafting/kinetics/windmill_bearing'})
	event.shaped('create:windmill_bearing', [
		'A  ',
		'BD ',
		'C  '
	], {
		A: '#minecraft:wooden_slabs',
		B: 'create:andesite_casing',
		C: 'create:piston_extension_pole',
		D: 'create:cogwheel'
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
			{ "item": "create:crushed_iron_ore", "count": 1},
			{"chance": 0.8, "count": 1, "item": "create:crushed_iron_ore"}
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
			{"chance": 0.75, "count": 2, "item": "geggy:limestone_dust"}
		]
	})
	
	event.remove({id: 'modern_industrialization:materials/tin/craft/ring'})
	event.remove({id: 'modern_industrialization:materials/bronze/craft/gear'})
	event.remove({id: 'modern_industrialization:materials/bronze/craft/ring'})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "modern_industrialization:bronze_ring"},
		transitionalItem: {"item": "geggy:incomplete_bronze_gear"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_bronze_gear"},
					{"item": "modern_industrialization:bronze_bolt"}
				],
				results: [{
					"item": "geggy:incomplete_bronze_gear"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_bronze_gear"},
					{"item": "modern_industrialization:bronze_bolt"}
				],
				results: [{
					"item": "geggy:incomplete_bronze_gear"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_bronze_gear"}
				],
				results: [{
					"item": "geggy:incomplete_bronze_gear"
				}]
		  	},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_bronze_gear"},
					{"item": "modern_industrialization:bronze_plate"}
				],
				results: [{
					"item": "geggy:incomplete_bronze_gear"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_bronze_gear"},
					{"item": "modern_industrialization:bronze_plate"}
				],
				results: [{
					"item": "geggy:incomplete_bronze_gear"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_bronze_gear"}
				],
				results: [{
					"item": "geggy:incomplete_bronze_gear"
				}]
		  	}
		],
		results: [{
			"item": "modern_industrialization:bronze_gear"
		}],
		loops: 2
	  }
	)
	
	event.remove({id: 'modern_industrialization:materials/iron/craft/ring'})
	event.remove({id: 'modern_industrialization:materials/iron/craft/gear'})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "modern_industrialization:iron_ring"},
		transitionalItem: {"item": "geggy:incomplete_iron_gear"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_iron_gear"},
					{"item": "modern_industrialization:iron_bolt"}
				],
				results: [{
					"item": "geggy:incomplete_iron_gear"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_iron_gear"},
					{"item": "modern_industrialization:iron_bolt"}
				],
				results: [{
					"item": "geggy:incomplete_iron_gear"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_iron_gear"}
				],
				results: [{
					"item": "geggy:incomplete_iron_gear"
				}]
		  	},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_iron_gear"},
					{"item": "modern_industrialization:iron_plate"}
				],
				results: [{
					"item": "geggy:incomplete_iron_gear"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_iron_gear"},
					{"item": "modern_industrialization:iron_plate"}
				],
				results: [{
					"item": "geggy:incomplete_iron_gear"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_iron_gear"}
				],
				results: [{
					"item": "geggy:incomplete_iron_gear"
				}]
		  	}
		],
		results: [{
			"item": "modern_industrialization:iron_gear"
		}],
		loops: 2
	  }
	)
	
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
	
})	