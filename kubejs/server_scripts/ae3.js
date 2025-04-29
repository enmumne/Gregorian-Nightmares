ServerEvents.recipes(event => {
	
	// charger copper iron,
	
	event.remove([
		"create:compat/ae2/mixing/fluix_crystal",
		"create:compat/ae2/milling/fluix_crystal",
		"create:compat/ae2/milling/sky_stone_block",
		"powah:crafting/energizing_orb",
		"powah:energizing/compat/certus_quartz_to_charged_certus_quartz",
		"modern_industrialization:compat/ae2/electrolyzer/ae2_certus_quartz_crystal_to_ae2_charged_certus_quartz_crystal",
		"modern_industrialization:compat/ae2/mixer/fluix",
		"modern_industrialization:compat/ae2/macerator/ae2_fluix_crystal_to_ae2_fluix_dust",
		"modern_industrialization:compat/ae2/macerator/ae2_sky_stone_block_to_ae2_sky_dust",
		"modern_industrialization:compat/ae2/printed_calculation_processor",
		"modern_industrialization:compat/ae2/printed_engineering_processor",
		"modern_industrialization:compat/ae2/printed_logic_processor",
		"modern_industrialization:compat/ae2/printed_silicon_from_ingot",
		"modern_industrialization:compat/ae2/printed_silicon",
		"modern_industrialization:compat/ae2/logic_processor",
		"modern_industrialization:compat/ae2/calculation_processor",
		"modern_industrialization:compat/ae2/engineering_processor",
		"ae2:charger/charged_certus_quartz_crystal", 
		"ae2:network/blocks/crystal_processing_charger", 
		"ae2:network/blocks/security_station", 
		"ae2:network/blocks/quantum_ring",
		"ae2:network/blocks/quantum_link",
		"ae2:network/blocks/spatial_io_pylon",
		"ae2:network/blocks/spatial_io_port",
		"ae2:network/blocks/controller",
		"ae2:network/blocks/storage_drive",
		"ae2:network/blocks/storage_chest",
		"ae2:network/blocks/interfaces_interface",
		"ae2:network/blocks/cell_workbench",
		"ae2:network/blocks/io_port",
		"ae2:network/blocks/io_condenser",
		"ae2:network/blocks/energy_energy_acceptor",
		"ae2:network/blocks/energy_vibration_chamber",
		"ae2:network/blocks/crystal_processing_quartz_growth_accelerator",
		"ae2:network/blocks/energy_energy_cell",
		"ae2:network/blocks/pattern_providers_interface",
		"ae2:network/blocks/spatial_anchor",
		"ae2:network/blocks/inscribers",
		"ae2:network/cables/glass_fluix",
		"ae2:network/cables/covered_fluix",
		"ae2:network/cables/smart_fluix",
		"ae2:network/parts/quartz_fiber_part",
		"ae2:network/parts/panels_semi_dark_monitor",
		"ae2:network/parts/terminals",
		"ae2:network/parts/terminals_pattern_encoding",
		"ae2:network/parts/export_bus",
		"ae2:network/parts/import_bus",
		"ae2:network/parts/toggle_bus",
		"ae2:network/parts/annihilation_plane_alt",
		"ae2:network/parts/annihilation_plane_alt2",
		"ae2:network/parts/formation_plane",
		"ae2:network/parts/formation_plane_alt",
		"ae2:network/parts/tunnels_me",
		"ae2:network/parts/terminals_crafting",
		"ae2:network/crafting/molecular_assembler",
		"ae2:network/crafting/cpu_crafting_unit",
		"ae2:network/crafting/patterns_blank",
		"ae2:network/cells/spatial_components",
		"ae2:network/cells/spatial_components_0",
		"ae2:network/cells/spatial_components_1",
		"ae2:network/cells/fluid_cell_housing",
		"ae2:network/cells/fluid_storage_cell_1k_storage",
		"ae2:network/cells/fluid_storage_cell_1k",
		"ae2:network/cells/fluid_storage_cell_4k_storage",
		"ae2:network/cells/fluid_storage_cell_4k",
		"ae2:network/cells/fluid_storage_cell_16k_storage",
		"ae2:network/cells/fluid_storage_cell_16k",
		"ae2:network/cells/fluid_storage_cell_64k_storage",
		"ae2:network/cells/fluid_storage_cell_64k",
		"ae2:network/cells/fluid_storage_cell_256k_storage",
		"ae2:network/cells/fluid_storage_cell_256k",
		"ae2:network/cells/item_storage_components_cell_1k_part",
		"ae2:network/cells/item_storage_components_cell_4k_part",
		"ae2:network/cells/item_storage_components_cell_16k_part",
		"ae2:network/cells/item_storage_components_cell_64k_part",
		"ae2:network/cells/item_storage_components_cell_256k_part",
		"ae2:network/cells/item_storage_cell_1k",
		"ae2:network/cells/item_storage_cell_1k_storage",
		"ae2:network/cells/item_storage_cell_4k",
		"ae2:network/cells/item_storage_cell_4k_storage",
		"ae2:network/cells/item_storage_cell_16k",
		"ae2:network/cells/item_storage_cell_16k_storage",
		"ae2:network/cells/item_storage_cell_64k",
		"ae2:network/cells/item_storage_cell_64k_storage",
		"ae2:network/cells/item_storage_cell_256k",
		"ae2:network/cells/item_storage_cell_256k_storage",
		"ae2:network/cells/item_cell_housing",
		"ae2:network/tools/network_memory_card",
		"ae2:network/wireless_part",
		"ae2:network/wireless_booster",
		"ae2:network/wireless_access_point",
		"ae2:network/upgrade_wireless_crafting_terminal",
		"ae2:transform/certus_quartz_crystals",
		"ae2:transform/fluix_crystals",
		"ae2:transform/fluix_crystal",
		"ae2:decorative/fluix_block",
		"ae2:decorative/quartz_glass",
		"ae2:materials/formationcore",
		"ae2:materials/annihilationcore",
		"ae2:materials/basiccard",
		"ae2:materials/cardredstone",
		"ae2:materials/cardcapacity",
		"ae2:materials/cardvoid",
		"ae2:materials/advancedcard",
		"ae2:materials/cardfuzzy",
		"ae2:materials/cardspeed",
		"ae2:materials/cardinverter",
		"ae2:materials/cardcrafting",
		"ae2:materials/carddistribution",
		"ae2:materials/cardenergy",
		"ae2:inscriber/fluix_dust",
		"ae2:inscriber/certus_quartz_dust",
		"ae2:inscriber/sky_stone_dust",
		"ae2:inscriber/ender_dust",
		"ae2:inscriber/calculation_processor_press",
		"ae2:inscriber/engineering_processor_press",
		"ae2:inscriber/logic_processor_press",
		"ae2:inscriber/calculation_processor_print",
		"ae2:inscriber/engineering_processor_print",
		"ae2:inscriber/logic_processor_print",
		"ae2:inscriber/calculation_processor",
		"ae2:inscriber/engineering_processor",
		"ae2:inscriber/logic_processor",
		"ae2:inscriber/silicon_print",
		"ae2:inscriber/silicon_press",
		"ae2:blasting/sky_stone_block",
		"ae2:tools/portable_item_cell_1k",
		"ae2:tools/portable_item_cell_4k",
		"ae2:tools/portable_item_cell_16k",
		"ae2:tools/portable_item_cell_64k",
		"ae2:tools/portable_item_cell_256k",
		"ae2:misc/fluixpearl",
		"ae2additions:components/super/1k",
		"ae2additions:components/super/4k",
		"ae2additions:components/super/16k",
		"ae2additions:components/super/64k",
		"ae2additions:components/super/256k",
		"ae2additions:super_cell_housing"
	])
	
	// 3000, 30.000/1000t = 1 certus dust
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:quartz_sand", amount: 2}
		],
		item_outputs: [
			{item: "geggy:quartzite_dust", amount: 1},
			{item: "ae2:certus_quartz_dust", amount: 1, probability: 0.1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:autoclave",
		eu: 30,
		duration: 600,
		item_inputs: [
			{item: "ae2:certus_quartz_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000}
		],
		item_outputs: [
			{item: "ae2:certus_quartz_crystal", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:autoclave",
		eu: 30,
		duration: 200,
		item_inputs: [
			{item: "ae2:certus_quartz_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:distilled_water", amount: 50}
		],
		item_outputs: [
			{item: "ae2:certus_quartz_crystal", amount: 1}
		]
	})
	
	// 3200 eu
	event.custom({ 
		type: "modern_industrialization:autoclave",
		eu: 16,
		duration: 200,
		item_inputs: [
			{item: "geggy:quartzite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 500}
		],
		item_outputs: [
			{item: "geggy:quartzite", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:autoclave",
		eu: 16,
		duration: 80,
		item_inputs: [
			{item: "geggy:quartzite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:distilled_water", amount: 50}
		],
		item_outputs: [
			{item: "geggy:quartzite", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 16,
		duration: 200,
		item_inputs: [
			{item: "geggy:quartzite", amount: 1}
		],
		item_outputs: [
			{item: "ae2:certus_quartz_dust", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:polarizer",
		eu: 16,
		duration: 200,
		item_inputs: [
			{item: "ae2:certus_quartz_crystal", amount: 1}
		],
		item_outputs: [
			{item: "ae2:charged_certus_quartz_crystal", amount: 1}
		]
	})
	
	
	// fiber A
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 200,
		item_inputs: [ 
			{item: "ae2:certus_quartz_crystal", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "geggy:certus_quartz_rod", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "ae2:certus_quartz_crystal", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "geggy:certus_quartz_rod", amount: 2}
		]
	})
	
	// fiber B
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 30,
		duration: 160,
		item_inputs: [
			{item: "geggy:certus_quartz_rod", amount: 1}
		],
		item_outputs: [
			{item: "ae2:quartz_fiber", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 32,
		duration: 200,
		item_inputs: [
			{item: "ae2:quartz_fiber", amount: 3},
			{item: "ae2:fluix_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:synthetic_rubber", amount: 500}
		],
		item_outputs: [
			{item: "ae2:fluix_covered_cable", amount: 3}
		]
	})
	
	// fluix 1a
	event.custom({ 
		type: "modern_industrialization:autoclave",
		eu: 32,
		duration: 300,
		item_inputs: [
			{item: "ae2:certus_quartz_crystal", amount: 1},
			{item: "minecraft:amethyst_shard", amount: 2}
		],
		fluid_inputs: [
			{fluid: "geggy:molten_red_alloy", amount: 432}
		],
		item_outputs: [
			{item: "geggy:slick_bloody_crystal", amount: 1}
		]
	}).id('1-fluix-bootstrap')
	
	// fluix 1b
	event.custom({ 
		type: "modern_industrialization:autoclave",
		eu: 16,
		duration: 150,
		item_inputs: [
			{item: "ae2:certus_quartz_crystal", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geggy:molten_red_alloy", amount: 144},
			{fluid: "geggy:fluix_slurry", amount: 500}
		],
		item_outputs: [
			{item: "geggy:slick_bloody_crystal", amount: 1}
		]
	}).id('2-fluix-default')
	
	// fluix 1c
	event.custom({ 
		type: "modern_industrialization:autoclave",
		eu: 32,
		duration: 150,
		item_inputs: [
			{item: "ae2:certus_quartz_crystal", amount: 1},
			{item: "minecraft:amethyst_shard", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geggy:molten_red_alloy", amount: 144},
			{fluid: "geggy:fluix_slurry", amount: 240}
		],
		item_outputs: [
			{item: "geggy:slick_bloody_crystal", amount: 1}
		]
	}).id('3-fluix-recharge')
	
	// fluix 2
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 16,
		duration: 150,
		item_inputs: [
			{item: "geggy:slick_bloody_crystal", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		],
		item_outputs: [
			{item: "geggy:flummox_crystal", amount: 1},
			{item: "minecraft:redstone", amount: 3}
		]
	})
	
	// fluix 3
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 16,
		duration: 200,
		item_inputs: [
			{item: "geggy:flummox_crystal", amount: 1},
			{item: "minecraft:glowstone_dust", amount: 1},
			{item: "modern_industrialization:quartz_dust", amount: 1},
			{item: "modern_industrialization:sodium_dust", amount: 1, probability: 0.25}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 2000}
		],
		item_outputs: [
			{item: "ae2:fluix_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:fluix_slurry", amount: 440},
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 16,
		duration: 200,
		item_inputs: [
			{item: "ae2:charged_certus_quartz_crystal", amount: 1},
			{item: "ae2:fluix_dust", amount: 1}
		],
		item_outputs: [
			{item: "ae2:fluix_crystal", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 32,
		duration: 200,
		item_inputs: [
			{item: "ae2:quartz_glass", amount: 1},
			{item: "ae2:fluix_crystal", amount: 4}
		],
		item_outputs: [
			{item: "ae2:fluix_block", amount: 1}
		]
	})
	
	// x10%
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 4,
		duration: 200,
		item_inputs: [
			{item: "ae2:fluix_crystal", amount: 1}
		],
		item_outputs: [
			{item: "ae2:fluix_dust", amount: 1}
		]
	})
	
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "modern_industrialization:steel_plate"},
		"B": {"item": "modern_industrialization:electrolyzer"},
		"C": {"item": "ae2:fluix_crystal"},
		"D": {"item": "ae2:fluix_covered_cable"}
		},
		pattern: [
			"ACA",
			"DBD",
			"ACA"
		],
		result: {
			"item": "ae2:charger"
		}
	})
	
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "minecraft:red_dye"},
		"B": {"item": "minecraft:green_dye"},
		"C": {"item": "minecraft:blue_dye"},
		"D": {"item": "geggy:reinforced_glass_pane"},
		"E": {"item": "minecraft:glowstone_dust"},
		"F": {"item": "modern_industrialization:copper_fine_wire"}
		},
		pattern: [
			"DED",
			"ABC",
			" F "
		],
		result: {
			"item": "geggy:computer_monitor_cover"
		}
	})
	
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "modern_industrialization:iron_plate"},
		"B": {"item": "geggy:computer_monitor_cover"},
		"C": {"item": "modern_industrialization:electrum_plate"},
		"D": {"item": "geggy:red_alloy_plate"},
		"E": {"item": "geggy:iron_screw"},
		"F": {"item": "modern_industrialization:copper_fine_wire"}
		},
		pattern: [
			"EAE",
			"FBF",
			"CDC"
		],
		result: {
			"item": "ae2:semi_dark_monitor"
		}
	})
	
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "modern_industrialization:iron_plate"},
		"B": {"item": "ae2:calculation_processor"},
		"C": {"item": "ae2:quartz_fiber"},
		"D": {"item": "geggy:galvanized_steel_bolt"},
		"E": {"item": "ae2:fluix_pearl"}
		},
		pattern: [
			" E ",
			"DCD",
			"ABA"
		],
		result: {
			"item": "ae2:wireless_receiver"
		}
	})
	
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "ae2:semi_dark_monitor"},
		"B": {"item": "ae2:logic_processor"},
		"C": {"item": "modern_industrialization:steel_plate"},
		"E": {"item": "ae2:annihilation_core"},
		"F": {"item": "ae2:formation_core"},
		},
		pattern: [
			"   ",
			"FAE",
			"CBC"
		],
		result: {
			"item": "ae2:terminal"
		}
	})
	
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "ae2:wireless_receiver"},
		"B": {"item": "ae2:logic_processor"},
		"C": {"item": "modern_industrialization:steel_bolt"},
		"D": {"item": "ae2:fluix_covered_cable"}
		},
		pattern: [
			" A ",
			" B ",
			"CDC"
		],
		result: {
			"item": "ae2:wireless_access_point"
		}
	})
	
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "modern_industrialization:capacitor"},
		"B": {"item": "modern_industrialization:iron_plate"},
		"C": {"item": "minecraft:ender_pearl"},
		"D": {"item": "ae2:charged_certus_quartz_crystal"}
		},
		pattern: [
			" B ",
			"DAC",
			" B "
		],
		result: {
			"item": "ae2:formation_core"
		}
	})
	
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "modern_industrialization:capacitor"},
		"B": {"item": "modern_industrialization:iron_plate"},
		"C": {"item": "ae2:fluix_pearl"},
		"D": {"item": "ae2:fluix_crystal"}
		},
		pattern: [
			" B ",
			"DAC",
			" B "
		],
		result: {
			"item": "ae2:annihilation_core"
		}
	})
	
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "modern_industrialization:piston"},
		"B": {"item": "modern_industrialization:steel_plate"},
		"C": {"item": "ae2:fluix_covered_cable"},
		"D": {"item": "modern_industrialization:steel_bolt"}
		},
		pattern: [
			"DCD",
			"BAB",
			"   "
		],
		result: {
			"item": "ae2:import_bus"
		}
	})
	
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "ae2:fluix_block"},
		"B": {"item": "powah:energy_cable_basic"},
		"C": {"item": "ae2:charged_certus_quartz_crystal"},
		"D": {"item": "modern_industrialization:steel_plate"},
		"E": {"item": "modern_industrialization:analog_circuit"}
		},
		pattern: [
			"DED",
			"CAC",
			"DBD"
		],
		result: {
			"item": "ae2:energy_cell"
		}
	})
	
	event.shaped('ae2:crafting_terminal', [
		'ABC',
		'   ',
		'   '
	], {
		A: 'ae2:terminal',
		B: 'ae2:engineering_processor',
		C: 'modern_industrialization:steel_plate'
	})
	
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 16,
		duration: 600,
		item_inputs: [
			{item: "minecraft:ender_pearl", amount: 1},
			{item: "ae2:fluix_crystal", amount: 2}
		],
		item_outputs: [
			{item: "ae2:fluix_pearl", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 16,
		duration: 400,
		item_inputs: [
			{item: "minecraft:ender_pearl", amount: 1},
			{item: "ae2:fluix_dust", amount: 4}
		],
		item_outputs: [
			{item: "ae2:fluix_pearl", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 4,
		duration: 200,
		item_inputs: [
			{item: "ae2:sky_stone_block", amount: 1}
		],
		item_outputs: [
			{item: "ae2:sky_dust", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 32,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:silicon_dioxide_dust", amount: 3},
			{item: "geggy:flint_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geggy:silicon_slurry", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:crystallizer",
		eu: 16,
		duration: 200,
		fluid_inputs: [
			{fluid: "geggy:silicon_slurry", amount: 250}
		],
		item_outputs: [
			{item: "ae2:silicon", amount: 1}
		]
	})
	
	event.shapeless('ae2:fluix_glass_cable', [ 'ae2:fluix_covered_cable', 'ae2:quartz_glass'])
	
	event.shapeless('ae2:wireless_crafting_terminal', [ 'ae2:wireless_terminal', 'ae2:engineering_processor'])
	
	event.shaped('ae2:controller', [
		'ABA',
		'BCB',
		'ADA'
	], {
		A: 'ae2:sky_stone_block',
		B: 'modern_industrialization:steel_plate',
		C: 'ae2:fluix_block',
		D: 'ae2:engineering_processor',
	})
	
	event.shaped('ae2:energy_acceptor', [
		'BAB',
		'ACA',
		'BAB'
	], {
		A: 'ae2:fluix_crystal',
		B: 'modern_industrialization:steel_plate',
		C: 'modern_industrialization:lv_energy_input_hatch'
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 300,
		item_inputs: [ 
			{item: "modern_industrialization:silver_plate", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 20}
		],
		item_outputs: [
			{item: "ae2:printed_calculation_processor", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 300,
		item_inputs: [ 
			{item: "modern_industrialization:diamond_plate", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 20}
		],
		item_outputs: [
			{item: "ae2:printed_engineering_processor", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 300,
		item_inputs: [ 
			{item: "modern_industrialization:electrum_plate", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 20}
		],
		item_outputs: [
			{item: "ae2:printed_logic_processor", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 300,
		item_inputs: [ 
			{item: "ae2:silicon", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 20}
		],
		item_outputs: [
			{item: "ae2:printed_silicon", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [
			{item: "ae2:printed_logic_processor", amount: 1},
			{item: "ae2:printed_silicon", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:molten_redstone", amount: 100}
		],
		item_outputs: [
			{item: "ae2:logic_processor", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [
			{item: "ae2:printed_calculation_processor", amount: 1},
			{item: "ae2:printed_silicon", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:molten_redstone", amount: 100}
		],
		item_outputs: [
			{item: "ae2:calculation_processor", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [
			{item: "ae2:printed_engineering_processor", amount: 1},
			{item: "ae2:printed_silicon", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:molten_redstone", amount: 100}
		],
		item_outputs: [
			{item: "ae2:engineering_processor", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:steel_plate", amount: 1},
			{item: "ae2:charged_certus_quartz_crystal", amount: 4},
			{item: "ae2:logic_processor", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 10}
		],
		item_outputs: [
			{item: "ae2:cell_component_1k", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 32,
		duration: 400,
		item_inputs: [
			{item: "ae2:cell_component_1k", amount: 4},
			{item: "ae2:fluix_crystal", amount: 2},
			{item: "ae2:quartz_glass", amount: 1},
			{item: "ae2:calculation_processor", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 20}
		],
		item_outputs: [
			{item: "ae2:cell_component_4k", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 64,
		duration: 400,
		item_inputs: [
			{item: "ae2:cell_component_4k", amount: 4},
			{item: "ae2:quartz_vibrant_glass", amount: 1},
			{item: "ae2:engineering_processor", amount: 1},
			{item: "modern_industrialization:electronic_circuit", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:polyethylene", amount: 288}
		],
		item_outputs: [
			{item: "ae2:cell_component_16k", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [
			{item: "geggy:galvanized_steel_plate", amount: 4},
			{item: "geggy:galvanized_steel_bolt", amount: 2},
			{item: "geggy:reinforced_glass_pane", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 10}
		],
		item_outputs: [
			{item: "ae2:item_cell_housing", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:vacuum_chamber",
		eu: 4,
		duration: 200,
		item_inputs: [
			{item: "ae2:item_cell_housing", amount: 1},
			{item: "ae2:cell_component_1k", amount: 1},
			{item: "geggy:iron_screw", amount: 2},
			{item: "modern_industrialization:rubber_sheet", amount: 1}
		],
		item_outputs: [
			{item: "ae2:item_storage_cell_1k", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:vacuum_chamber",
		eu: 16,
		duration: 200,
		item_inputs: [
			{item: "ae2:item_cell_housing", amount: 1},
			{item: "ae2:cell_component_4k", amount: 1},
			{item: "geggy:iron_screw", amount: 2},
			{item: "modern_industrialization:rubber_sheet", amount: 1}
		],
		item_outputs: [
			{item: "ae2:item_storage_cell_4k", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:vacuum_chamber",
		eu: 32,
		duration: 200,
		item_inputs: [
			{item: "ae2:item_cell_housing", amount: 1},
			{item: "ae2:cell_component_16k", amount: 1},
			{item: "geggy:iron_screw", amount: 2},
			{item: "modern_industrialization:rubber_sheet", amount: 1}
		],
		item_outputs: [
			{item: "ae2:item_storage_cell_16k", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [
			{item: "wiredredstone:ender_redstone_mixture", amount: 2},
			{item: "ae2:fluix_dust", amount: 1},
			{item: "ae2:charged_certus_quartz_crystal", amount: 2},
			{item: "modern_industrialization:iron_plate", amount: 3}
		],
		item_outputs: [
			{item: "ae2:wireless_booster", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 800,
		item_inputs: [
			{item: "geggy:galvanized_steel_plate", amount: 4},
			{item: "ae2:chest", amount: 1},
			{item: "ae2:engineering_processor", amount: 1},
			{item: "ae2:fluix_covered_cable", amount: 2},
			{item: "ae2:cell_component_4k", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 10}
		],
		item_outputs: [
			{item: "ae2:security_station", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "ironchests:iron_chest", amount: 1},
			{item: "geggy:ccf", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 10}
		],
		item_outputs: [
			{item: "ae2:chest", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 24,
		duration: 400,
		item_inputs: [
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "geghilarity:lv_emitter", amount: 1},
			{item: "ae2:engineering_processor", amount: 1},
			{item: "ae2:fluix_covered_cable", amount: 2},
			{item: "modern_industrialization:analog_circuit", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 10}
		],
		item_outputs: [
			{item: "ae2:drive", amount: 1}
		]
	})
	
	
	
})	