ServerEvents.recipes(event => {
	
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
		A: 'modern_industrialization:copper_plate',
		B: 'geggy:cogwheel',
		C: 'minecraft:stick'
	})
	
	event.remove({id: 'create:crafting/kinetics/depot'})
	event.shaped('create:depot', [
		'AB ',
		'   ',
		'   '
	], {
		A: 'modern_industrialization:lead_plate',
		B: 'create:andesite_casing'
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
		B: 'create:andesite_alloy'
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
	event.shaped('geggy:tempered_rod', [
		'AB ',
		'   ',
		'   '
	], {
		A: 'modern_industrialization:tin_rod',
		B: 'minecraft:blaze_rod'

	})
	event.shaped('geggy:tempered_plate', [
		'AB ',
		'   ',
		'   '
	], {
		A: 'modern_industrialization:tin_plate',
		B: 'minecraft:blaze_rod'

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
		A: 'geggy:tempered_rod',
		B: 'geggy:compressed_netherrack',
		C: 'geggy:tempered_plate'
	})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "geggy:compressed_netherrack"},
		transitionalItem: {"item": "geggy:incomplete_empty_blaze_burner"},
		sequence: [
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
					{"amount": 17982, "fluid": "modern_industrialization:synthetic_oil"}
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
					{"item": "geggy:j_planks"}
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
					{"item": "minecraft:leather"}
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
		B: 'geggy:j_planks',
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
					{"item": "geggy:j_planks"}
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
					{"item": "geggy:j_planks"}
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
					{"item": "geggy:j_planks"}
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
					{"item": "geggy:j_planks"}
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
	
	

})	