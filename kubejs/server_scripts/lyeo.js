ServerEvents.recipes(event => {
	
	//FERRIC REE CHLORIDES (ad astra)
	event.recipes.modern_industrialization.electrolyzer({
		eu: 60,
		duration: 576,
		fluid_inputs: [ 
			{fluid: "geghilarity:ferric_ree_chloride", amount: 2000}
		],
		item_outputs: [
				{item: "ad_astra:raw_desh", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		]
	})	
	
	
	//FUSION CASING
	event.remove({type: 'minecraft:crafting_shaped', output: 'modern_industrialization:plasma_handling_iridium_machine_casing'})
	
	event.remove({type: "modern_industrialization:assembler", output: `modern_industrialization:plasma_handling_iridium_machine_casing`})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: 'modern_industrialization:iridium_plate', amount: 6},
			{item: 'modern_industrialization:superconductor_coil', amount: 1},
			{item: 'ad_astra:calorite_plate', amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:plasma_handling_iridium_machine_casing", amount: 1}
		]
	})
	
		//SUPER CONDUCTOR BLOCK 
	event.remove({type: 'minecraft:crafting_shaped', output: 'modern_industrialization:superconductor_coil'})	
	event.remove({type: "modern_industrialization:assembler", output: `modern_industrialization:superconductor_coil`})
	event.recipes.modern_industrialization.assembler({
		eu: 3840,
		duration: 600,
		item_inputs: [ 
			{item: 'modern_industrialization:superconductor_cable', amount: 8},
			{item: 'geghilarity:mica_insulator_foil', amount: 8}
		],
		fluid_inputs: [ 
			{fluid: 'geghilarity:liquid_osmium', amount: 144}
		],
		item_outputs: [
			{item: "modern_industrialization:superconductor_coil", amount: 1}
		]
	})
	
	//carbon monoxide electrolysis 
	event.recipes.modern_industrialization.electrolyzer({
		eu: 30,
		duration: 120,
		fluid_inputs: [ 
			{fluid: 'geghilarity:carbon_monoxide', amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1000},	
		],
		item_outputs: [
			{item: 'modern_industrialization:carbon_dust', amount: 1}
		]
	})
	
	event.recipes.modern_industrialization.blast_furnace({
		eu: 1,
		duration: 400,
		item_inputs: [
			{item: "geggy:nether_precious_ore", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:precious_ingot", amount: 1}
		]
	})	
	event.recipes.modern_industrialization.blast_furnace({
		eu: 1,
		duration: 400,
		item_inputs: [
			{item: "geggy:deepslate_precious_ore", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:precious_ingot", amount: 1}
		]
	})
	
	//oxygen -> ad astra
		event.recipes.modern_industrialization.centrifuge(
		{
			eu: 16,
			duration: 100,
			fluid_inputs: [ 
				{fluid: 'modern_industrialization:oxygen', amount: 1000}
			],
			fluid_outputs: [
				{fluid: 'ad_astra:oxygen', amount: 1000}
			]
		})
		
	//leached copper dehydration
		event.recipes.modern_industrialization.dehy({
		eu: 30,
		duration: 80,
		item_inputs: [ 
			{item: 'geghilarity:leached_copper_dust', amount: 1}
		],
		item_outputs: [
			{item: 'modern_industrialization:copper_dust', amount: 3, probability: 0.95},
			{item: 'modern_industrialization:lead_dust', amount: 1, probability: 0.25},
			{item: 'modern_industrialization:nickel_dust', amount: 1, probability: 0.16},
			{item: 'modern_industrialization:silver_dust', amount: 1, probability: 0.12},
			{item: 'modern_industrialization:iron_dust', amount: 1, probability: 0.20}
		]
	})

/*
	// lyeo indium ? check later
	event.recipes.modern_industrialization.chemical_reactor({
		eu: 120,
		duration: 60,
		item_inputs: [ 
			{item: 'modern_industrialization:raw_lead', amount: 3},
			{item: 'create:raw_zinc', amount: 1}
		],
		fluid_inputs: [
			{fluid: 'modern_industrialization:sulfuric_acid', amount: 4000}
		],
		fluid_outputs: [	
			{fluid: 'geghilarity:indium_concentrate', amount: 8000}
		]	
	})
*/

	//electric alloy
	event.shaped('modern_industrialization:electric_salloy', [
		"ABA",
		"LCL",
		"ATA"
	], {
		C: "modern_industrialization:basic_machine_hull",
		B: 'modern_industrialization:analog_circuit',
		A: 'modern_industrialization:cupronickel_wire_magnetic',
		L: 'modern_industrialization:electric_furnace',
		T: 'modern_industrialization:tin_cable'
	})

// ???
/*
event.recipes.modern_industrialization.heat_exchanger(8, 10)
        .fluidIn('modern_industrialization:cryofluid', 100)
		.itemIn('geghilarity:hot_hss-g_ingot', 1)
        .fluidOut("modern_industrialization:argon", 65)
		.fluidOut("modern_industrialization:helium", 25)
		.itemOut('geghilarity:hss-g_ingot', 1)
*/		

	// mercury stone dust
	event.recipes.modern_industrialization.macerator({
		eu: 8,
		duration: 150,
		item_inputs: [ 
			{item: 'ad_astra:mercury_stone', amount: 1}
		],
		item_outputs: [
			{item: "geggy:endstone_dust", amount: 1},
			{item: 'geghilarity:tiny_platinum_metallic_powder_dust', amount: 1, probability: 0.1}
		]
	})
	event.recipes.modern_industrialization.macerator({
		eu: 8,
		duration: 150,
		item_inputs: [ 
			{item: 'ad_astra:mercury_cobblestone', amount: 1}
		],
		item_outputs: [
			{item: "geggy:endstone_dust", amount: 1},
			{item: 'geghilarity:tiny_platinum_metallic_powder_dust', amount: 1, probability: 0.1}
		]
	})
	
	event.recipes.modern_industrialization.centrifuge({
		eu: 20,
		duration: 320,
		item_inputs: [ 
			{item: "ad_astra:moon_sand"}
		],
		item_outputs: [	
			{item: "minecraft:sand", amount: 1, probability: 0.90}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:helium", amount: 100}
		]
	})
	
	// OVERHAUL, TO VERIFY !!!
	
	
	
	
	//liquid rhodium
event.custom({
		type: "create:mixing",
		heatRequirement: "superheated",
		ingredients: [
		{"item": 'geghilarity:rhodium_dust'}
		],
		results: [
			Fluid.of('geghilarity:liquid_rhodium', fluid_volume_to_fabric(300)).toJson()
		],
		processingTime:50
	})
	
	//palladium
	event.recipes.modern_industrialization.blast_furnace({
			eu: 30,
			duration: 2600,
			item_inputs: [ 
				{item: "geghilarity:palladium_dust", amount: 1}
			],
			item_outputs: [
				{item: 'geghilarity:palladium_ingot', amount: 1},
			]
	})
	
	//hot rhodium plated palladium
	event.custom({
		type: "create:filling",
		ingredients: [
			{"item": 'geghilarity:palladium_ingot'},
			{amount:11664,"fluid":'geghilarity:liquid_rhodium'}
		],
		results: [{
			"item": 'geghilarity:hot_rhodium_plated_palladium_ingot'
		}]
	})
	
	//normal rhodium plated palladium
	event.recipes.modern_industrialization.vacuum_freezer({
		eu: 120,
		duration: 320,
		item_inputs: [ 
			{item: "geghilarity:hot_rhodium_plated_palladium_ingot"}
		],
		item_outputs: [	
			{item: "geghilarity:rhodium_plated_palladium_ingot", amount: 1}
		]
	})	

	//plate rhodium plated palladium
		event.recipes.modern_industrialization.compressor({
		eu: 2,
		duration: 200,
		item_inputs : [
			{item: "geghilarity:rhodium_plated_palladium_ingot", amount: 1}
		],
		item_outputs :[
			{item: "geghilarity:rhodium_plated_palladium_plate", amount: 1}
		]
	})
	
	//Processing Unit Rework
	//remove processing unnit recipe
	event.remove({id: "modern_industrialization:assembler_generated/electric_age/circuit/craft/processing_unit"})
	
	event.custom({
			"type": "create:sequenced_assembly",
			"ingredient": [{"item": `modern_industrialization:processing_unit_board`}],
			"loops": 2,
			"results": [{"item": `modern_industrialization:processing_unit`, "chance": 100.0}],
			
			"sequence":[
			{"type": "create:deploying",
			"ingredients": [{"item": `kubejs:unfinished_processing_unit`}, {"item": 'modern_industrialization:digital_circuit'}],
			"results": [{"item": `kubejs:unfinished_processing_unit`}]},
			{"type": "create:filling",
			"ingredients": [{"item": `kubejs:unfinished_processing_unit`}, {"amount":8100,"fluid":"modern_industrialization:soldering_alloy","nbt":{}}],
			"results": [{"item": `kubejs:unfinished_processing_unit`}]},	
			{"type": "create:deploying",
			"ingredients": [{"item": `kubejs:unfinished_processing_unit`}, {"item": 'modern_industrialization:random_access_memory'}],
			"results": [{"item": `kubejs:unfinished_processing_unit`}]},
			{"type": "create:deploying",
			"ingredients": [{"item": `kubejs:unfinished_processing_unit`}, {"item": 'modern_industrialization:arithmetic_logic_unit'}],
			"results": [{"item": `kubejs:unfinished_processing_unit`}]},
			{"type": "create:deploying",
			"ingredients": [{"item": `kubejs:unfinished_processing_unit`}, {"item": 'modern_industrialization:memory_management_unit'}],
			"results": [{"item": `kubejs:unfinished_processing_unit`}]}

			],						
			"transitionalItem":{"item":`kubejs:unfinished_processing_unit`}
	})
	
	//quantum circt
		event.custom({
			"type": "create:sequenced_assembly",
			"ingredient": [{"item": `modern_industrialization:quantum_circuit_board`}],
			"loops": 2,
			"results": [{"item": `modern_industrialization:quantum_circuit`, "chance": 100.0}],
			
			"sequence":[
			{"type": "create:deploying",
			"ingredients": [{"item": `kubejs:incomplete_quantum_circuit`}, {"item": 'modern_industrialization:processing_unit'}],
			"results": [{"item": `kubejs:incomplete_quantum_circuit`}]},
			{"type": "create:filling",
			"ingredients": [{"item": `kubejs:incomplete_quantum_circuit`}, {"amount":11664,"fluid":'geghilarity:liquid_ruthenium',"nbt":{}}],
			"results": [{"item": `kubejs:incomplete_quantum_circuit`}]},	
			{"type": "create:deploying",
			"ingredients": [{"item": `kubejs:incomplete_quantum_circuit`}, {"item": 'modern_industrialization:cooling_cell'}],
			"results": [{"item": `kubejs:incomplete_quantum_circuit`}]},
			{"type": "create:deploying",
			"ingredients": [{"item": `kubejs:incomplete_quantum_circuit`}, {"item": 'modern_industrialization:qbit'}],
			"results": [{"item": `kubejs:incomplete_quantum_circuit`}]}
			
			],						
			"transitionalItem":{"item":`kubejs:incomplete_quantum_circuit`}
	})
	

	
	
	event.remove({id: "modern_industrialization:electric_age/circuit/craft/processing_unit_asbl"})
	event.remove({id: "modern_industrialization:electric_age/circuit/craft/quantum_circuit_asbl"})
	event.remove({id: "modern_industrialization:assembler_generated/electric_age/circuit/craft/quantum_circuit"})	
	
	//combined mix metal
	event.remove({id: 'modern_industrialization:materials/packer/mixed_ingot_iridium'})	
		event.recipes.modern_industrialization.packer({
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: 'modern_industrialization:blastproof_alloy_ingot'},
			{item: 'modern_industrialization:iridium_ingot'},
			{item: 'geghilarity:osmium_ingot'}
		],
		item_outputs: [
			{item: 'modern_industrialization:mixed_ingot_iridium'}
		]
	})
	
	//iridium plate

	//highly advanced hull
	event.remove({id: "modern_industrialization:electric_age/hull/highly_advanced_machine_hull_asbl"})
	
	//quantum hull
	event.remove({id: "modern_industrialization:electric_age/hull/quantum_machine_hull_asbl"})
	event.remove({type: 'modern_industrialization:assembler', output: 'modern_industrialization:quantum_machine_hull'})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: 'modern_industrialization:plutonium_battery', amount: 2},
			{item: 'modern_industrialization:quantum_circuit', amount: 1},
			{item: "modern_industrialization:quantum_machine_casing", amount: 1},
			{item: 'modern_industrialization:superconductor_cable', amount: 2},
			{item: 'ad_astra:calorite_plate', amount: 2}
		],
		fluid_inputs: [
			{fluid: 'geghilarity:polytetrafluoroethylene', amount: 576}
		],
		item_outputs: [
			{item: "modern_industrialization:quantum_machine_hull", amount: 1}
		]
	})
	
	//ender chest
		event.remove({id: "kibe:entangled_chest"})
	
	
	//hot naquadah ingot
		event.recipes.modern_industrialization.blaster_furnace4({
		eu: 3840,
		duration: 1000,
		item_inputs: [ 
			{item: 'geghilarity:naquadah_dust', amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:argon", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:hot_naquadah_ingot", amount: 1}
		]
	})
	
	//normal  naquadah ingot
		event.recipes.modern_industrialization.vacuum_freezer({
		eu: 480,
		duration: 600,
		item_inputs: [ 
			{item: "geghilarity:hot_naquadah_ingot"}
		],
		item_outputs: [	
			{item: "geghilarity:naquadah_ingot", amount: 1}
		]
	})	
	
		event.recipes.modern_industrialization.heat_exchanger(40, 40)
        .fluidIn('modern_industrialization:cryofluid', 500)
		.itemIn('geghilarity:hot_naquadah_ingot', 1)
        .fluidOut("modern_industrialization:argon", 325)
		.fluidOut("modern_industrialization:helium", 125)
		.itemOut('geghilarity:naquadah_ingot', 1)
	
	
		//normal  naquadah plate
		event.recipes.modern_industrialization.compressor({
		eu: 4,
		duration: 200,
		item_inputs : [
			{item: "geghilarity:naquadah_ingot", amount: 1}
		],
		item_outputs :[
			{item: "geghilarity:naquadah_plate", amount: 1}
		]
	})
		
		
	//TRITANIUM PLASMA 	
		event.recipes.modern_industrialization.fusion_reactor(64000, 600)
        .fluidIn('geghilarity:tin', 1000)
		.fluidIn('geghilarity:liquid_osmium', 1000)
        .fluidOut("geghilarity:liquid_tritanium", 1000)

	//TRITANIUM LIQUID
		event.recipes.modern_industrialization.heat_exchanger(80, 100)
        .fluidIn('modern_industrialization:cryofluid', 1000)
		.fluidIn('geghilarity:liquid_tritanium', 1000)
        .fluidOut("modern_industrialization:argon", 650)
		.fluidOut("modern_industrialization:helium", 250)
		.itemOut('geghilarity:hot_tritanium_ingot', 1)
		
		event.recipes.modern_industrialization.heat_exchanger(8, 10)
        .fluidIn('modern_industrialization:cryofluid', 100)
		.itemIn('geghilarity:hot_tritanium_ingot', 1)
        .fluidOut("modern_industrialization:argon", 65)
		.fluidOut("modern_industrialization:helium", 25)
		.itemOut('geghilarity:tritanium_ingot', 1)
		
		event.recipes.modern_industrialization.vacuum_freezer(1024, 600)
		.itemIn('geghilarity:hot_tritanium_ingot', 1)
		.itemOut('geghilarity:tritanium_ingot', 1)
		
	//normal  tritanium plate
		event.recipes.modern_industrialization.compressor({
		eu: 4,
		duration: 200,
		item_inputs : [
			{item: "geghilarity:tritanium_ingot", amount: 1}
		],
		item_outputs :[
			{item: "geghilarity:tritanium_plate", amount: 1}
		]
	})
		
	//quantum eye
		event.remove({id: "minecraft:ender_eye"})
		  event.smithing("minecraft:ender_eye", 'minecraft:ender_pearl', 'modern_industrialization:quantum_upgrade')
		  
		event.remove({id: "modern_industrialization:tools/smithing/quantum_sword"})
		event.remove({id: "modern_industrialization:armor/smithing/quantum_helmet"})
		event.remove({id: "modern_industrialization:armor/smithing/quantum_chestplate"})
		event.remove({id: "modern_industrialization:armor/smithing/quantum_boots"})
		
	//AE gold processors
	event.remove({id: "modern_industrialization:compat/ae2/printed_logic_processor"})
	event.recipes.modern_industrialization.packer({eu: 8, duration: 200,item_inputs: [{item: 'ad_astra:desh_ingot'}],
			item_outputs: [{item: 'ae2:printed_logic_processor', amount: 1}]})	

	//superdense metal
	event.remove({id: "modern_industrialization:electric_age/component/craft/ultradense_metal_ball_asbl"})
	event.remove({id: "modern_industrialization:assembler_generated/electric_age/component/craft/ultradense_metal_ball"})
	
	event.recipes.modern_industrialization.packer({eu: 128, duration: 200,item_inputs: [{item: 'geghilarity:naquadah_plate', amount: 9},{item: 'modern_industrialization:tungsten_large_plate', amount: 4},{item: 'modern_industrialization:lead_plate', amount: 4}],
		item_outputs: [{item: 'modern_industrialization:ultradense_metal_ball', amount: 1}]})	
	
	//quantum upgrade
	event.remove({id: "modern_industrialization:electric_age/upgrades/quantum"})
	
		event.recipes.modern_industrialization.assembler({
		eu: 32,
		duration: 1000,
		item_inputs: [ 
			{item: 'geghilarity:tritanium_plate', amount: 8},
			{item: 'modern_industrialization:quantum_circuit', amount: 4},
			{item: 'modern_industrialization:highly_advanced_upgrade', amount: 32},
			{item: 'modern_industrialization:singularity', amount: 1}
		],
		fluid_inputs: [ 
			{fluid: 'modern_industrialization:uu_matter', amount: 50}
		],
		item_outputs: [
			{item: 'modern_industrialization:quantum_upgrade', amount: 1}
		]
	})
	
	//quantum upgrade
	event.remove({id: "modern_industrialization:electric_age/upgrades/quantum"})
	
		event.recipes.modern_industrialization.assembler({
		eu: 32,
		duration: 1000,
		item_inputs: [ 
			{item: 'geghilarity:tritanium_plate', amount: 8},
			{item: 'modern_industrialization:quantum_circuit', amount: 8},
			{item: 'modern_industrialization:highly_advanced_upgrade', amount: 32},
			{item: 'modern_industrialization:singularity', amount: 1}
		],
		fluid_inputs: [ 
			{fluid: 'modern_industrialization:uu_matter', amount: 50}
		],
		item_outputs: [
			{item: 'modern_industrialization:quantum_upgrade', amount: 1}
		]
	})

	//end portal recipe
	
		event.recipes.modern_industrialization.assembler({
		eu: 32,
		duration: 1000,
		item_inputs: [ 
			{item: 'geghilarity:tritanium_plate', amount: 8},
			{item: 'modern_industrialization:quantum_circuit', amount: 4},
			{item: 'modern_industrialization:highly_advanced_upgrade', amount: 16},
			{item: 'geghilarity:naquadah_plate', amount: 5},
			{item: 'modern_industrialization:superconductor_cable', amount: 4}
		],
		fluid_inputs: [ 
			{fluid: 'modern_industrialization:cryofluid', amount: 1000}
		],
		item_outputs: [
			{item: 'minecraft:end_portal_frame', amount: 1}
		]
	})
	
		event.remove({type: 'minecraft:crafting_shaped', output: 'minecraft:end_portal_frame'})
	
	//blast furnace recipes
	event.shapeless('modern_industrialization:blaster_furnace', ['modern_industrialization:electric_blast_furnace'])
	event.shapeless('modern_industrialization:blaster_furnace2', ['modern_industrialization:blaster_furnace'])
	event.shapeless('modern_industrialization:blaster_furnace3', ['modern_industrialization:blaster_furnace2'])
	event.shapeless('modern_industrialization:blaster_furnace4', ['modern_industrialization:blaster_furnace3'])
	event.shapeless('modern_industrialization:blaster_furnace5', ['modern_industrialization:blaster_furnace4'])
	event.shapeless('modern_industrialization:electric_blast_furnace', ['modern_industrialization:blaster_furnace5'])
	
	
	//quantum 
     event.recipes.modern_industrialization.assembler(16000, 200)
        .itemIn('minecraft:command_block', 0)
		
		.itemIn('minecraft:netherite_helmet', 1)
		
		.itemIn('64x geghilarity:naquadah_plate', 1)
		.itemIn('64x geghilarity:tritanium_plate', 1)
		.itemIn('modern_industrialization:quantum_upgrade', 1)
		.itemIn('8x modern_industrialization:quantum_circuit', 1)
		.itemIn('32x modern_industrialization:superconductor_cable', 1)
		
		.itemOut('modern_industrialization:quantum_helmet', 1)
		
		.fluidIn('modern_industrialization:uu_matter', 1000)
		.fluidIn("modern_industrialization:cryofluid", 10000)

	 event.recipes.modern_industrialization.assembler(16000, 200)
        .itemIn('minecraft:command_block', 0)
		
		.itemIn('minecraft:netherite_chestplate', 1)
		
		.itemIn('64x geghilarity:naquadah_plate', 1)
		.itemIn('64x geghilarity:tritanium_plate', 1)
		.itemIn('modern_industrialization:quantum_upgrade', 1)
		.itemIn('8x modern_industrialization:quantum_circuit', 1)
		.itemIn('32x modern_industrialization:superconductor_cable', 1)
		
		.itemOut('modern_industrialization:quantum_chestplate', 1)
		
		.fluidIn('modern_industrialization:uu_matter', 1000)
		.fluidIn("modern_industrialization:cryofluid", 10000)
		
	event.recipes.modern_industrialization.assembler(16000, 200)
        .itemIn('minecraft:command_block', 0)
		
		.itemIn('minecraft:netherite_leggings', 1)
		
		.itemIn('64x geghilarity:naquadah_plate', 1)
		.itemIn('64x geghilarity:tritanium_plate', 1)
		.itemIn('modern_industrialization:quantum_upgrade', 1)
		.itemIn('8x modern_industrialization:quantum_circuit', 1)
		.itemIn('32x modern_industrialization:superconductor_cable', 1)
		
		.itemOut('modern_industrialization:quantum_leggings', 1)
		
		.fluidIn('modern_industrialization:uu_matter', 1000)
		.fluidIn("modern_industrialization:cryofluid", 10000)

	event.recipes.modern_industrialization.assembler(16000, 200)
        .itemIn('minecraft:command_block', 0)
		
		.itemIn('minecraft:netherite_boots', 1)
		
		.itemIn('64x geghilarity:naquadah_plate', 1)
		.itemIn('64x geghilarity:tritanium_plate', 1)
		.itemIn('modern_industrialization:quantum_upgrade', 1)
		.itemIn('8x modern_industrialization:quantum_circuit', 1)
		.itemIn('32x modern_industrialization:superconductor_cable', 1)
		
		.itemOut('modern_industrialization:quantum_boots', 1)
		
		.fluidIn('modern_industrialization:uu_matter', 1000)
		.fluidIn("modern_industrialization:cryofluid", 10000)

	event.recipes.modern_industrialization.assembler(16000, 200)
        .itemIn('minecraft:command_block', 0)
		
		.itemIn('minecraft:netherite_sword', 1)
		
		.itemIn('64x geghilarity:naquadah_plate', 1)
		.itemIn('64x geghilarity:tritanium_plate', 1)
		.itemIn('modern_industrialization:quantum_upgrade', 1)
		.itemIn('8x modern_industrialization:quantum_circuit', 1)
		.itemIn('32x modern_industrialization:superconductor_cable', 1)
		
		.itemOut('modern_industrialization:quantum_sword', 1)
		
		.fluidIn('modern_industrialization:uu_matter', 1000)
		.fluidIn("modern_industrialization:cryofluid", 10000)
		
	//compresosr steam	
	

		event.remove({id: 'modern_industrialization:assembler_generated/steam_age/bronze/compressor'})
		event.recipes.modern_industrialization.assembler(8, 200)
		.itemIn('modern_industrialization:bronze_machine_casing', 1)
		.itemIn('2x modern_industrialization:copper_gear', 1)
		.itemIn('2x modern_industrialization:copper_rod', 1)
		.itemIn('3x #modern_industrialization:fluid_pipes', 1)
		.itemIn('minecraft:smooth_stone', 1)
		
		.itemOut('modern_industrialization:bronze_compressor', 1)

		
	// lyeo
	//event.shapeless('geggy:wooden_form', ['minecraft:flint','#minecraft:planks'])	
	
	
	
	//eletrolyzer reowrk
		event.remove({id: 'modern_industrialization:electric_age/machine/electrolyzer_asbl'})
		event.shaped('modern_industrialization:electrolyzer', [
		"ANA",
		"CSC",
		"ANA"
	], {
		A: 'modern_industrialization:cupronickel_wire_magnetic',
		S: 'modern_industrialization:basic_machine_hull',
		C: 'modern_industrialization:gold_rod',
		N: 'modern_industrialization:analog_circuit'
	})
	
	
		event.remove({id: 'modern_industrialization:assembler_generated/electric_age/machine/electrolyzer'})
		event.recipes.modern_industrialization.assembler(8, 200)
		.itemIn('modern_industrialization:basic_machine_hull', 1)
		.itemIn('2x modern_industrialization:gold_rod', 1)
		.itemIn('2x modern_industrialization:analog_circuit', 1)
		.itemIn('4x modern_industrialization:cupronickel_wire_magnetic', 1)
		
		.itemOut('modern_industrialization:electrolyzer', 1)

	


	//centrifuge reowrk
		event.remove({id: 'modern_industrialization:electric_age/machine/centrifuge_asbl'})
		event.shaped('modern_industrialization:centrifuge', [
		"APA",
		"CSC",
		"ANA"
	], {
		A: 'modern_industrialization:motor',
		S: 'modern_industrialization:basic_machine_hull',
		C: 'modern_industrialization:tin_cable',
		N: 'modern_industrialization:analog_circuit',
		P: 'modern_industrialization:pump'
	})
	
	
		event.remove({id: 'modern_industrialization:assembler_generated/electric_age/machine/centrifuge'})
		event.recipes.modern_industrialization.assembler(8, 200)
		.itemIn('modern_industrialization:basic_machine_hull', 1)
		.itemIn('2x modern_industrialization:tin_cable', 1)
		.itemIn('1x modern_industrialization:pump', 1)
		.itemIn('1x modern_industrialization:analog_circuit', 1)
		.itemIn('4x modern_industrialization:motor', 1)
		
		.itemOut('modern_industrialization:centrifuge', 1)
	
	
})	