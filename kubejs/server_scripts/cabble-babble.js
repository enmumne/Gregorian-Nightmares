ServerEvents.recipes(event => {
	
	// MI standard: LV 256 (copper, tin, silver), MV 1024 (cupro, electrum), HV 8192 (alu, kanthal), EV 65536, super 1024G
	// FE 20, 80, 200, 800, 2k, 8k, 40k
	// 16, 32, 128, 512, 2048, (MI), 32.768, 131.072
	// LV starter red alloy 16, LV basic tin 32, MV hardened alum 128, HV blazing electrum 512, EV niotic black steel 2048
	//
	// GT  
	// ULV	8, lead, red alloy
	// LV 	32, cobalt, nickel, tin, 
	// MV 	128, copper, iron, annealed copper, cupronickel, 
	// HV 	512, gold, silver, electrum, kanthal, blue alloy
	// EV 	2.048, alu, nichrome, steel, black steel,
	// IV 	8.192, platinum, tungsten, graphene, tungstensteel,  
	// LuV 	32.768, osmium, niobium nitride, niobium-titanium, HSS-G
	// ZPM 	131.072, naquadah, trinium, vanadium-gallium, 
	// UV 	524.288, tritanium, yttrium barium cuprate, naquadah alloy,
	// UHV 	2.097.152, europium
	
	// black steel
	// mixer 7/25> 3 copper + 2 electrum > 5 black bronze dust
	// mixer 7/25> 1 black bronze dust + 1 nickel dust + 3 steel dust > 5 black steel dust >> ebf 120/76.8 // ebf 120/51.45 + 1000 nitrogen
	// mixer 120/25 1 copper dust + 4 gold dust > 5 rose gold dust
	// mixer 7/40> 1 rose gold dust + 1 brass dust (3 copper + 1 zinc) + 4 black steel dust + 2 steel dust > 8 blue steel dust >> ebf 480/50/33.5
	
	// bender 24/0.5> polyvinyl chloride (PVC) sheet > 4 thin polyvinyl chloride (PVC) sheet
	
	// GT6
	// tin LV 32, lead LV 64
	// constantan MV 128, efrine MV 256, copper MV 256, annealed copper MV 384
	// kanthal HV 512, gold HV 512, electrum HV 1.024, electrotine alloy HV 1.024, silver HV 1.536, blue alloy HV 1.536
	// nichrome EV 2.048, steel EV 2.048, aluminium EV 2.048, tungstensteel EV 4.096, tungsten EV 6.144
	// carborundum IV 8.192, osmium IV 16.384, platinum IV 24.576, osmiridium IV 24.576, iridium IV 24.576
	// niobium titanium LuV 32.768, vanadium-gallium LuV 65.536, naquadah LuV 98.304
	
	// annealed copper > needs freezer, copper + oxygen
	// cupronickel > copper + nickel, simple
	
	// current MI tweak
	// crafting> 3 copper wire + 6 rubber sheet > 3 copper cable
	// assembler 2/5> 3 copper wire + 6 s-b rubber (30 synth) > 3 copper cable
	// packer 2/5> 3 copper wire + 6 rubber sheet > 3 copper cable
	// compacting> 3 copper wire + 3 rubber sheet > 1 copper cable
	
	// hulls increase eu storage 
	// LV stores 3.200 > 32 x 5s
	// MV stores 12.800 > 128 x 5s
	// HV stores 102.400 > 1024 x 5s
	// EV stores 819.200 > 8192 x 5s
	
	// diesel generator > 64 256 1024 16384
	
	// machine upgrades cap recipe running eu
	
	// md cables recipe removal
	event.remove([
		"moderndynamics:cable/lv_from_mi", "moderndynamics:cable/mv_from_mi", "moderndynamics:cable/hv_from_mi",
		"moderndynamics:cable/ev_from_mi", "moderndynamics:cable/superconductor_from_mi", "moderndynamics:cable/lv_to_mi",
		"moderndynamics:cable/mv_to_mi", "moderndynamics:cable/hv_to_mi", "moderndynamics:cable/ev_to_mi",
		"moderndynamics:cable/superconductor_to_mi"
	])
	
	// cables recipe removal
	event.remove([
		"modern_industrialization:materials/copper/craft/cable", "modern_industrialization:materials/tin/craft/cable",
		"modern_industrialization:materials/silver/craft/cable", "modern_industrialization:materials/cupronickel/craft/cable",
		"modern_industrialization:materials/electrum/craft/cable", "modern_industrialization:materials/aluminum/craft/cable",
		"modern_industrialization:materials/kanthal/craft/cable", "modern_industrialization:materials/annealed_copper/craft/cable",
		"modern_industrialization:materials/platinum/craft/cable"
	])
		
	event.remove([
		"modern_industrialization:materials/copper/assembler/cable_styrene_rubber", "modern_industrialization:materials/tin/assembler/cable_styrene_rubber",
		"modern_industrialization:materials/silver/assembler/cable_styrene_rubber", "modern_industrialization:materials/cupronickel/assembler/cable_styrene_rubber",
		"modern_industrialization:materials/electrum/assembler/cable_styrene_rubber", "modern_industrialization:materials/aluminum/assembler/cable_styrene_rubber",
		"modern_industrialization:materials/kanthal/assembler/cable_styrene_rubber", "modern_industrialization:materials/annealed_copper/assembler/cable_styrene_rubber",
		"modern_industrialization:materials/platinum/assembler/cable_styrene_rubber"
	])	
		
	event.remove([
		"modern_industrialization:materials/copper/assembler/cable_synthetic_rubber", "modern_industrialization:materials/tin/assembler/cable_synthetic_rubber",
		"modern_industrialization:materials/silver/assembler/cable_synthetic_rubber", "modern_industrialization:materials/cupronickel/assembler/cable_synthetic_rubber",
		"modern_industrialization:materials/electrum/assembler/cable_synthetic_rubber", "modern_industrialization:materials/aluminum/assembler/cable_synthetic_rubber",
		"modern_industrialization:materials/kanthal/assembler/cable_synthetic_rubber", "modern_industrialization:materials/annealed_copper/assembler/cable_synthetic_rubber",
		"modern_industrialization:materials/platinum/assembler/cable_synthetic_rubber"
	])	
		
	event.remove([
		"modern_industrialization:materials/copper/packer/cable", "modern_industrialization:materials/tin/packer/cable",
		"modern_industrialization:materials/silver/packer/cable", "modern_industrialization:materials/cupronickel/packer/cable",
		"modern_industrialization:materials/electrum/packer/cable", "modern_industrialization:materials/aluminum/packer/cable",
		"modern_industrialization:materials/kanthal/packer/cable", "modern_industrialization:materials/annealed_copper/packer/cable",
		"modern_industrialization:materials/platinum/packer/cable"
	])

	event.remove([
		"modern_industrialization:hatches/basic/energy_input_hatch", "modern_industrialization:hatches/basic/assembler/energy_input_hatch",
		"modern_industrialization:hatches/basic/energy_output_hatch", "modern_industrialization:hatches/basic/assembler/energy_output_hatch",
		"modern_industrialization:hatches/advanced/energy_input_hatch", "modern_industrialization:hatches/advanced/assembler/energy_input_hatch",
		"modern_industrialization:hatches/advanced/energy_output_hatch", "modern_industrialization:hatches/advanced/assembler/energy_output_hatch",
		"modern_industrialization:hatches/turbo/energy_input_hatch", "modern_industrialization:hatches/turbo/assembler/energy_input_hatch",
		"modern_industrialization:hatches/turbo/energy_output_hatch", "modern_industrialization:hatches/turbo/assembler/energy_output_hatch",
		"modern_industrialization:hatches/highly_advanced/energy_input_hatch", "modern_industrialization:hatches/highly_advanced/assembler/energy_input_hatch",
		"modern_industrialization:hatches/highly_advanced/energy_output_hatch", "modern_industrialization:hatches/highly_advanced/assembler/energy_output_hatch"
	])	
		
	event.remove([
		"modern_industrialization:hatches/basic/unpacker/energy_input_hatch",
		"modern_industrialization:hatches/basic/unpacker/energy_output_hatch",
		"modern_industrialization:hatches/advanced/unpacker/energy_input_hatch",
		"modern_industrialization:hatches/advanced/unpacker/energy_output_hatch",
		"modern_industrialization:hatches/turbo/unpacker/energy_input_hatch",
		"modern_industrialization:hatches/turbo/unpacker/energy_output_hatch",
		"modern_industrialization:hatches/highly_advanced/unpacker/energy_input_hatch",
		"modern_industrialization:hatches/highly_advanced/unpacker/energy_output_hatch"
	])

	// starter > crafting > 12 > 6 dialectic rod + 2 iron nugget + basic capacitor tiny
	// basic > crafting > 12 > "" + 2 iron ingot + basic capacitor
	// hardened > crafting > 12 > "" + 2 energized steel + hardened capacitor (gold + iron)
	// blazing > crafting > 12 > "" + 2 blazing crystal + blazing capacitor (blaze rod)
	// niotic > crafting > 12 > "" + 2 niotic crystal + niotic capacitor (diamond)
	// spirited > crafting > 12 > "" + 2 spirited crystal + spirited capacitor (enerald)
	// nitro > crafting > 12 > "" + 2 nitro crystal + nitro capacitor (nether star + 2 redstone block + 1 blazing crystal block > 16)
		
	event.remove(["powah:crafting/cable_starter",
		"powah:crafting/cable_basic", "powah:crafting/cable_basic_2",
		"powah:crafting/cable_hardened", "powah:crafting/cable_hardened_2",
		"powah:crafting/cable_blazing", "powah:crafting/cable_blazing_2",
		"powah:crafting/cable_niotic", "powah:crafting/cable_niotic_2",
		"powah:crafting/cable_spirited", "powah:crafting/cable_spirited_2",
		"powah:crafting/cable_nitro", "powah:crafting/cable_nitro_2"
	])	
	
	// red alloy > 4 redstone to 2 wire
	
	// isoprene needs pretochem, needs alu for driller and oil
	
	event.shaped('geggy:low_voltage_coil', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: 'geggy:magnetic_iron_rod',
		B: 'geggy:steel_wire'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:magnetic_iron_rod", amount: 1},
			{item: "geggy:steel_fine_wire", amount: 16}
		],
		item_outputs: [
			{item: "geggy:low_voltage_coil", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:steel_rod_magnetic", amount: 1},
			{item: "geggy:aluminium_fine_wire", amount: 16}
		],
		item_outputs: [
			{item: "geggy:medium_voltage_coil", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 480,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:steel_rod_magnetic", amount: 1},
			{item: "geggy:black_steel_fine_wire", amount: 16}
		],
		item_outputs: [
			{item: "geggy:high_voltage_coil", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 1920,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:magnetic_neodymium_rod", amount: 1},
			{item: "geggy:tungstensteel_fine_wire", amount: 16}
		],
		item_outputs: [
			{item: "geggy:extreme_voltage_coil", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:lv_energy_input_hatch', [
		'BEB',
		'CAC',
		'BDB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'geggy:low_voltage_coil',
		C: 'powah:energy_cable_starter',
		D: 'modern_industrialization:pump',
		E: 'modern_industrialization:analog_circuit'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "geggy:low_voltage_coil", amount: 2},
			{item: "powah:energy_cable_basic", amount: 2},
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "modern_industrialization:pump", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:lv_energy_input_hatch", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:advanced_machine_hull", amount: 1},
			{item: "geggy:medium_voltage_coil", amount: 2},
			{item: "powah:energy_cable_hardened", amount: 2},
			{item: "modern_industrialization:electronic_circuit", amount: 1},
			{item: "modern_industrialization:pump", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 2000}
		],
		item_outputs: [
			{item: "modern_industrialization:mv_energy_input_hatch", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 480,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:turbo_machine_hull", amount: 1},
			{item: "geggy:high_voltage_coil", amount: 2},
			{item: "powah:energy_cable_blazing", amount: 2},
			{item: "modern_industrialization:digital_circuit", amount: 1},
			{item: "modern_industrialization:advanced_pump", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:sodium_potassium", amount: 1000}
		],
		item_outputs: [
			{item: "modern_industrialization:hv_energy_input_hatch", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 1920,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:highly_advanced_machine_hull", amount: 1},
			{item: "geggy:extreme_voltage_coil", amount: 2},
			{item: "powah:energy_cable_niotic", amount: 2},
			{item: "modern_industrialization:processing_unit", amount: 1},
			{item: "modern_industrialization:advanced_pump", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:sodium_potassium", amount: 2000}
		],
		item_outputs: [
			{item: "modern_industrialization:ev_energy_input_hatch", amount: 1}
		]
	})
	
	// cable starter ULV red alloy 16
	event.custom({
		"type": "create:compacting",
		"ingredients": [
			{"item": "geggy:fine_red_alloy_wire"},{"item": "geggy:fine_red_alloy_wire"},{"item": "geggy:fine_red_alloy_wire"},
			{"item": "geggy:fine_red_alloy_wire"},{"item": "geggy:fine_red_alloy_wire"},{"item": "geggy:fine_red_alloy_wire"},
			{"amount": 34992, "fluid": "geggy:rubber"}
		],
		"results": [
			{"count": 2, "item": "powah:energy_cable_starter"}
		]
	})
	event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{item: "modern_industrialization:rubber_sheet"}],
			"results": [{"amount": 11664, "fluid": "geggy:rubber"}]
	})
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 12,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:rubber_sheet", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:rubber", amount: 144}
		]
	})
	event.custom({ 
		type: "modern_industrialization:packer",
		eu: 4,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:rubber_sheet", amount: 3},
			{item: "geggy:fine_red_alloy_wire", amount: 6}
		],
		item_outputs: [
			{item: "powah:energy_cable_starter", amount: 2}
		]
	})
	
	// cable basic LV tin 32
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:tin_wire", amount: 3}
		],
		fluid_inputs: [ 
			{fluid: "geggy:rubber", amount: 432}
		],
		item_outputs: [
			{item: "powah:energy_cable_basic", amount: 1}
		]
	})
	
	// cable hardened MV alum 128
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:aluminum_wire", amount: 3},
			{item: "geghilarity:mica_insulator_foil", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geggy:rubber", amount: 432}
		],
		item_outputs: [
			{item: "powah:energy_cable_hardened", amount: 1}
		]
	})
	
	// cable blazing HV electrum 512
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:electrum_wire", amount: 3},
			{item: "geghilarity:mica_insulator_foil", amount: 3}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:purified_isoprene", amount: 288}
		],
		item_outputs: [
			{item: "powah:energy_cable_blazing", amount: 1}
		]
	})
	
	// cable niotic EV black steel 2048
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:black_steel_wire", amount: 3}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:purified_isoprene", amount: 288},
			{fluid: "modern_industrialization:polyvinyl_chloride", amount: 288}
		],
		item_outputs: [
			{item: "powah:energy_cable_niotic", amount: 1}
		]
	})
	
	event.remove([
		"modern_industrialization:oil/chemical_reactor/ethylbenzene_to_styrene",	
		"modern_industrialization:oil/chemical_reactor/styrene_butadiene",
		"modern_industrialization:petrochem/polymerization/styrene_butadiene_chromium",
		"modern_industrialization:petrochem/polymerization/styrene_butadiene_lead"
	])
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 5,
		item_inputs: [ 
			{item: "geghilarity:styrene_butadiene_rubber_bar", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 144}
		]
	})
	
	// supercond susy LV
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 24,
		duration: 400,
		item_inputs: [
			{item: "modern_industrialization:manganese_dust", amount: 1},
			{item: "geghilarity:phosphorus_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:manganese_phosphide_dust", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 1008,
		item_inputs: [
			{item: "geghilarity:manganese_phosphide_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:manganese_phosphide_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 675,
		item_inputs: [
			{item: "geghilarity:manganese_phosphide_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:nitrogen", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:manganese_phosphide_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 7,
		duration: 126,
		item_inputs: [
			{item: "geghilarity:manganese_phosphide_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:manganese_phosphide_fine_wire", amount: 8}
		]
	})
	
	// LV MI CABLES
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:copper_wire", amount: 3},
			{item: "geghilarity:manganese_phosphide_fine_wire", amount: 1},
			{item: "geghilarity:polyethylene_foil", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 36}
		],
		item_outputs: [
			{item: "modern_industrialization:copper_cable", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:tin_wire", amount: 3},
			{item: "geghilarity:manganese_phosphide_fine_wire", amount: 1},
			{item: "geghilarity:polyethylene_foil", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 36}
		],
		item_outputs: [
			{item: "modern_industrialization:tin_cable", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:silver_wire", amount: 3},
			{item: "geghilarity:manganese_phosphide_fine_wire", amount: 1},
			{item: "geghilarity:polyethylene_foil", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 36}
		],
		item_outputs: [
			{item: "modern_industrialization:silver_cable", amount: 1}
		]
	})
	
	// supercond susy MV
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 600,
		item_inputs: [
			{item: "geghilarity:magnesium_dust", amount: 1},
			{item: "geghilarity:boron_dust", amount: 2}
		],
		item_outputs: [	
			{item: "geghilarity:magnesium_diboride_dust", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 30,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:silver_plate", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:small_silver_pipe", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 120,
		duration: 800,
		item_inputs: [
			{item: "geggy:small_silver_pipe", amount: 16},
			{item: "geghilarity:magnesium_diboride_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:canned_magnesium_diboride", amount: 16}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 1006,
		item_inputs: [
			{item: "geggy:canned_magnesium_diboride", amount: 8}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:nitrogen", amount: 2000}
		],
		item_outputs: [	
			{item: "geggy:magnesium_diboride_tube", amount: 8}
		]
	})
	
	// MV MI CABLES
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:cupronickel_wire", amount: 3},
			{item: "geghilarity:polyethylene_foil", amount: 2},
			{item: "geggy:magnesium_diboride_tube", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 72},
			{fluid: "modern_industrialization:polyvinyl_chloride", amount: 144}
		],
		item_outputs: [
			{item: "modern_industrialization:cupronickel_cable", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:electrum_wire", amount: 3},
			{item: "geghilarity:polyethylene_foil", amount: 2},
			{item: "geggy:magnesium_diboride_tube", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 72},
			{fluid: "modern_industrialization:polyvinyl_chloride", amount: 144}
		],
		item_outputs: [
			{item: "modern_industrialization:electrum_cable", amount: 1}
		]
	})
	
	// supercond susy HV
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:mercury", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:mercury_oxide_dust", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 20,
		item_inputs: [
			{item: "modern_industrialization:salt_crushed_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "geghilarity:distilled_water", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:halite_leach", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 160,
		item_inputs: [
			{item: "geghilarity:soda_ash_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:halite_leach", amount: 8000}
		],
		item_outputs: [	
			{item: "geggy:clay_dust", amount: 1},
			{item: "geghilarity:barite_dust", amount: 5, probability: 0.1667}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:salt_water", amount: 8000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:arc_furnace",
		eu: 30,
		duration: 80,
		item_inputs: [
			{item: "geghilarity:barite_dust", amount: 1},
			{item: "modern_industrialization:carbon_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 50},
			{fluid: "modern_industrialization:methane", amount: 25}
		],
		item_outputs: [	
			{item: "geghilarity:impure_barium_sulfide_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:carbon_dioxide", amount: 2025}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 60,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:impure_barium_sulfide_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:barium_residue_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:impure_barium_sulfide_solution", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:barium_residue_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hydrogen_sulfide", amount: 1000},
			{fluid: "minecraft:water", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:silicon_dioxide_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:impure_barium_sulfide_solution", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:crystallizer",
		eu: 30,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:impure_barium_sulfide_solution", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:barium_sulfide_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:wastewater", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:barium_sulfide_dust", amount: 2},
			{item: "geghilarity:soda_ash_dust", amount: 6}
		],
		fluid_inputs: [
			{fluid: "geghilarity:distilled_water", amount: 4000}
		],
		item_outputs: [	
			{item: "geghilarity:barium_carbonate_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:hydrogen_sulfide", amount: 1000},
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:barium_sulfide_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "geghilarity:distilled_water", amount: 2000},
			{fluid: "geghilarity:carbon_dioxide", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:barium_carbonate_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:hydrogen_sulfide", amount: 1000},
			{fluid: "geghilarity:wastewater", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 480,
		duration: 20,
		item_inputs: [
			{item: "geghilarity:barium_carbonate_dust", amount: 5}
		],
		item_outputs: [	
			{item: "geghilarity:barium_oxide_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:carbon_dioxide", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 240,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:mercury_oxide_dust", amount: 2},
			{item: "geghilarity:quicklime_dust", amount: 4},
			{item: "geghilarity:barium_oxide_dust", amount: 4},
			{item: "geghilarity:cupric_oxide_dust", amount: 6}
		],
		item_outputs: [	
			{item: "geghilarity:mercury_barium_calcium_cuprate_dust", amount: 16}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 120,
		duration: 800,
		item_inputs: [
			{item: "geggy:small_silver_pipe", amount: 8},
			{item: "geghilarity:mercury_barium_calcium_cuprate_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:canned_mercury_barium_calcium_cuprate", amount: 8}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 480,
		duration: 1506,
		item_inputs: [
			{item: "geggy:canned_mercury_barium_calcium_cuprate", amount: 8}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:nitrogen", amount: 2000}
		],
		item_outputs: [	
			{item: "geggy:mercury_barium_calcium_cuprate_tube", amount: 8}
		]
	})
	
	// HV MI CABLES
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:aluminum_wire", amount: 3},
			{item: "geghilarity:polyethylene_foil", amount: 4},
			{item: "geggy:mercury_barium_calcium_cuprate_tube", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 72},
			{fluid: "modern_industrialization:polyvinyl_chloride", amount: 288}
		],
		item_outputs: [
			{item: "modern_industrialization:aluminum_cable", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:kanthal_wire", amount: 3},
			{item: "geghilarity:polyethylene_foil", amount: 4},
			{item: "geggy:mercury_barium_calcium_cuprate_tube", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 72},
			{fluid: "modern_industrialization:polyvinyl_chloride", amount: 288}
		],
		item_outputs: [
			{item: "modern_industrialization:kanthal_cable", amount: 1}
		]
	})
	
	// supercond susy EV
	
	event.custom({ 
		type: "modern_industrialization:alloy_blast_smelter",
		eu: 1920,
		duration: 2010,
		item_inputs: [
			{item: "modern_industrialization:uranium_238_dust", amount: 1},
			{item: "modern_industrialization:platinum_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:helium", amount: 400}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:molten_uranium_triplatinum", amount: 576}
		]
	})
	event.custom({ 
		type: "modern_industrialization:alloy_blast_smelter",
		eu: 1920,
		duration: 3000,
		item_inputs: [
			{item: "modern_industrialization:uranium_238_dust", amount: 1},
			{item: "modern_industrialization:platinum_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:molten_uranium_triplatinum", amount: 576}
		]
	})
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 120,
		duration: 200,
		item_inputs: [
			{item: "geggy:mold_ingot", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:molten_uranium_triplatinum", amount: 144}
		],
		item_outputs: [	
			{item: "geggy:uranium_triplatinum_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 7,
		duration: 615,
		item_inputs: [
			{item: "geggy:uranium_triplatinum_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:uranium_triplatinum_fine_wire", amount: 8}
		]
	})
	
	// ver.2
	
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 30,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:samarium_dust", amount: 1},
			{item: "geghilarity:arsenic_dust", amount: 1},
			{item: "modern_industrialization:iron_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:samarium_iron_arsenic_oxide_dust", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 480,
		duration: 800,
		item_inputs: [
			{item: "geggy:small_silver_pipe", amount: 4},
			{item: "geghilarity:samarium_iron_arsenic_oxide_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:canned_samarium_iron_arsenic_oxide", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 1920,
		duration: 2000,
		item_inputs: [
			{item: "geggy:canned_mercury_barium_calcium_cuprate", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:nitrogen", amount: 2000}
		],
		item_outputs: [	
			{item: "geggy:samarium_iron_arsenic_oxide_tube", amount: 4}
		]
	})
	
	// EV MI CABLES
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:annealed_copper_wire", amount: 3},
			{item: "geghilarity:polytetrafluoroethylene_foil", amount: 4},
			{item: "geggy:uranium_triplatinum_fine_wire", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 144},
			{fluid: "modern_industrialization:polyvinyl_chloride", amount: 288}
		],
		item_outputs: [
			{item: "modern_industrialization:annealed_copper_cable", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:platinum_wire", amount: 3},
			{item: "geghilarity:polytetrafluoroethylene_foil", amount: 4},
			{item: "geggy:samarium_iron_arsenic_oxide_tube", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 144},
			{fluid: "modern_industrialization:polyvinyl_chloride", amount: 288}
		],
		item_outputs: [
			{item: "modern_industrialization:platinum_cable", amount: 1}
		]
	})
	
	// machine recipes
	
	event.remove([
		"modern_industrialization:quarry/drill/steel_drill_asbl", "modern_industrialization:assembler_generated/quarry/drill/steel_drill",
		"modern_industrialization:quarry/drill/gold_drill_asbl", "modern_industrialization:assembler_generated/quarry/drill/gold_drill",
		"modern_industrialization:quarry/drill/aluminum_drill_asbl", "modern_industrialization:assembler_generated/quarry/drill/aluminum_drill",
		"modern_industrialization:quarry/drill/stainless_steel_drill_asbl", "modern_industrialization:assembler_generated/quarry/drill/stainless_steel_drill",
		"modern_industrialization:electric_age/transformer/lv_mv/up_asbl", "modern_industrialization:assembler_generated/electric_age/transformer/lv_mv/up",
		"modern_industrialization:electric_age/transformer/lv_mv/down_asbl", "modern_industrialization:assembler_generated/electric_age/transformer/lv_mv/down",
		"modern_industrialization:electric_age/transformer/mv_hv/up_asbl", "modern_industrialization:assembler_generated/electric_age/transformer/mv_hv/up",
		"modern_industrialization:electric_age/transformer/mv_hv/down_asbl", "modern_industrialization:assembler_generated/electric_age/transformer/mv_hv/down",
		"modern_industrialization:electric_age/transformer/hv_ev/up_asbl", "modern_industrialization:assembler_generated/electric_age/transformer/hv_ev/up",
		"modern_industrialization:electric_age/transformer/hv_ev/down_asbl", "modern_industrialization:assembler_generated/electric_age/transformer/hv_ev/down",
		"modern_industrialization:materials/cupronickel/craft/coil", "modern_industrialization:materials/cupronickel/assembler/coil",
		"modern_industrialization:materials/cupronickel/unpacker/coil",
		"modern_industrialization:materials/kanthal/craft/coil", "modern_industrialization:materials/kanthal/assembler/coil",
		"modern_industrialization:materials/kanthal/unpacker/coil",
		"modern_industrialization:electric_age/machine/wiremill_asbl", "modern_industrialization:assembler_generated/electric_age/machine/wiremill",
		"modern_industrialization:electric_age/machine/water_pump_asbl", "modern_industrialization:assembler_generated/electric_age/machine/water_pump",
		"modern_industrialization:electric_age/machine/unpacker_asbl", "modern_industrialization:assembler_generated/electric_age/machine/unpacker",
		"modern_industrialization:electric_age/machine/steam_turbine_asbl", "modern_industrialization:assembler_generated/electric_age/machine/steam_turbine",
		"modern_industrialization:electric_age/machine/starter_diesel_generator_asbl", "modern_industrialization:assembler_generated/electric_age/machine/starter_diesel_generator",
		"modern_industrialization:electric_age/machine/polarizer_asbl", "modern_industrialization:assembler_generated/electric_age/machine/polarizer",
		"modern_industrialization:electric_age/machine/packer_asbl", "modern_industrialization:assembler_generated/electric_age/machine/packer",
		"modern_industrialization:electric_age/machine/macerator_asbl", "modern_industrialization:assembler_generated/electric_age/machine/macerator",
		"modern_industrialization:electric_age/machine/furnace_asbl", "modern_industrialization:assembler_generated/electric_age/machine/furnace",
		"modern_industrialization:electric_age/machine/compressor_asbl", "modern_industrialization:assembler_generated/electric_age/machine/compressor",
		"modern_industrialization:electric_age/machine/centrifuge_asbl", "modern_industrialization:assembler_generated/electric_age/machine/centrifuge",
		"modern_industrialization:electric_age/machine/chemical_reactor_asbl", "modern_industrialization:assembler_generated/electric_age/machine/chemical_reactor",
		"modern_industrialization:electric_age/machine/mv_steam_turbine_asbl", "modern_industrialization:assembler_generated/electric_age/machine/mv_steam_turbine",
		"modern_industrialization:electric_age/machine/diesel_generator_asbl", "modern_industrialization:assembler_generated/electric_age/machine/diesel_generator",
		"modern_industrialization:electric_age/machine/distillery_asbl", "modern_industrialization:assembler_generated/electric_age/machine/distillery",
		"modern_industrialization:electric_age/machine/turbo_diesel_generator_asbl", "modern_industrialization:assembler_generated/electric_age/machine/turbo_diesel_generator",
		"modern_industrialization:electric_age/machine/pressurizer_asbl", "modern_industrialization:assembler_generated/electric_age/machine/pressurizer",
		"modern_industrialization:electric_age/machine/hv_steam_turbine_asbl", "modern_industrialization:assembler_generated/electric_age/machine/hv_steam_turbine",
		"modern_industrialization:electric_age/hull/advanced_machine_hull_asbl", "modern_industrialization:assembler_generated/electric_age/hull/advanced_machine_hull",
		"modern_industrialization:electric_age/hull/turbo_machine_hull_asbl", "modern_industrialization:assembler_generated/electric_age/hull/turbo_machine_hull",
		"modern_industrialization:electric_age/circuit/craft/electronic_circuit_board_asbl", "modern_industrialization:assembler_generated/electric_age/circuit/craft/electronic_circuit_board",
		"modern_industrialization:electric_age/circuit/assembler/digital_circuit_board",
		"modern_industrialization:electric_age/circuit/assembler/processing_unit_board",
		"modern_industrialization:electric_age/component/craft/robot_arm_asbl", "modern_industrialization:assembler_generated/electric_age/component/craft/robot_arm",
		"modern_industrialization:electric_age/component/craft/piston_asbl", "modern_industrialization:assembler_generated/electric_age/component/craft/piston",
		"modern_industrialization:electric_age/component/craft/motor_asbl", "modern_industrialization:assembler_generated/electric_age/component/craft/motor",
		"modern_industrialization:electric_age/component/craft/conveyor_asbl", "modern_industrialization:assembler_generated/electric_age/component/craft/conveyor",
		"modern_industrialization:electric_age/component/craft/advanced_motor_asbl", "modern_industrialization:assembler_generated/electric_age/component/craft/advanced_motor",
		"modern_industrialization:electric_age/battery/portable_storage_unit_asbl", "modern_industrialization:assembler_generated/electric_age/battery/portable_storage_unit",
		"modern_industrialization:electric_age/battery/lv_battery_asbl", "modern_industrialization:assembler_generated/electric_age/battery/lv_battery",
		"modern_industrialization:electric_age/battery/silicon_battery_asbl", "modern_industrialization:assembler_generated/electric_age/battery/silicon_battery",
		"modern_industrialization:electric_age/battery/sodium_battery_asbl", "modern_industrialization:assembler_generated/electric_age/battery/sodium_battery",
		"modern_industrialization:electric_age/storage_unit/mv_storage_unit_asbl", "modern_industrialization:assembler_generated/electric_age/storage_unit/mv_storage_unit",
		"modern_industrialization:electric_age/storage_unit/hv_storage_unit_asbl", "modern_industrialization:assembler_generated/electric_age/storage_unit/hv_storage_unit",
		"moderndynamics:machine_extender",
		"modern_industrialization:electric_age/transformer/ev_supra/up_asbl", "modern_industrialization:electric_age/transformer/ev_supra/down_asbl",
		"modern_industrialization:electric_age/component/craft/op_amp_asbl",
		"modern_industrialization:electric_age/component/craft/arithmetic_logic_unit_asbl",
		"modern_industrialization:electric_age/component/craft/not_gate_asbl",
		"modern_industrialization:electric_age/component/craft/or_gate_asbl",
		"modern_industrialization:electric_age/component/craft/and_gate_asbl",
		"modern_industrialization:electric_age/component/chemical_reactor/random_acces_memory",
		"modern_industrialization:assembler_generated/electric_age/battery/cadmium_battery",
		"modern_industrialization:assembler_generated/electric_age/battery/plutonium_battery"
	])
	
	event.shaped('4x modern_industrialization:steel_drill', [
		'CBA',
		'EDB',
		'FEC'
	], {
		A: 'modern_industrialization:steel_drill_head',
		B: 'moderndynamics:item_pipe',
		C: 'modern_industrialization:iron_gear',
		D: 'modern_industrialization:analog_circuit',
		E: 'modern_industrialization:motor',
		F: 'powah:energy_cable_basic'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:steel_drill_head", amount: 1},
			{item: "moderndynamics:item_pipe", amount: 2},
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "modern_industrialization:iron_gear", amount: 2},
			{item: "modern_industrialization:motor", amount: 2},
			{item: "powah:energy_cable_basic", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:steel_drill", amount: 4}
		]
	})
	
	event.shaped('4x modern_industrialization:gold_drill', [
		'CBA',
		'EDB',
		'FEC'
	], {
		A: 'modern_industrialization:gold_drill_head',
		B: 'moderndynamics:item_pipe',
		C: 'modern_industrialization:iron_gear',
		D: 'modern_industrialization:analog_circuit',
		E: 'modern_industrialization:motor',
		F: 'powah:energy_cable_hardened'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:gold_drill_head", amount: 1},
			{item: "moderndynamics:item_pipe", amount: 2},
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "modern_industrialization:iron_gear", amount: 2},
			{item: "modern_industrialization:motor", amount: 2},
			{item: "powah:energy_cable_hardened", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:gold_drill", amount: 4}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:aluminum_drill_head", amount: 1},
			{item: "moderndynamics:fluid_pipe", amount: 2},
			{item: "modern_industrialization:electronic_circuit", amount: 1},
			{item: "modern_industrialization:iron_gear", amount: 2},
			{item: "modern_industrialization:pump", amount: 2},
			{item: "powah:energy_cable_hardened", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:aluminum_drill", amount: 4}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 64,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:stainless_steel_drill_head", amount: 1},
			{item: "moderndynamics:fluid_pipe", amount: 1},
			{item: "moderndynamics:item_pipe", amount: 1},
			{item: "modern_industrialization:digital_circuit", amount: 1},
			{item: "modern_industrialization:iron_gear", amount: 2},
			{item: "modern_industrialization:advanced_pump", amount: 1},
			{item: "modern_industrialization:advanced_motor", amount: 1},
			{item: "powah:energy_cable_blazing", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:stainless_steel_drill", amount: 4}
		]
	})
	
	event.shaped('modern_industrialization:lv_mv_transformer', [
		' C ',
		'BAB',
		'B B'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'powah:energy_cable_basic',
		C: 'powah:energy_cable_hardened'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "powah:energy_cable_basic", amount: 4},
			{item: "powah:energy_cable_hardened", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:lv_mv_transformer", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:mv_lv_transformer', [
		'B B',
		'BAB',
		' C '
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'powah:energy_cable_basic',
		C: 'powah:energy_cable_hardened'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "powah:energy_cable_hardened", amount: 1},
			{item: "powah:energy_cable_basic", amount: 4}
		],
		item_outputs: [
			{item: "modern_industrialization:mv_lv_transformer", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:mv_hv_transformer', [
		' C ',
		'BAB',
		'B B'
	], {
		A: 'modern_industrialization:advanced_machine_hull',
		B: 'powah:energy_cable_hardened',
		C: 'powah:energy_cable_blazing'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:advanced_machine_hull", amount: 1},
			{item: "powah:energy_cable_hardened", amount: 4},
			{item: "powah:energy_cable_blazing", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:mv_hv_transformer", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:hv_mv_transformer', [
		'B B',
		'BAB',
		' C '
	], {
		A: 'modern_industrialization:advanced_machine_hull',
		B: 'powah:energy_cable_hardened',
		C: 'powah:energy_cable_blazing'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:advanced_machine_hull", amount: 1},
			{item: "powah:energy_cable_blazing", amount: 1},
			{item: "powah:energy_cable_hardened", amount: 4}
		],
		item_outputs: [
			{item: "modern_industrialization:hv_mv_transformer", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:hv_ev_transformer', [
		' C ',
		'BAB',
		'B B'
	], {
		A: 'modern_industrialization:turbo_machine_hull',
		B: 'powah:energy_cable_blazing',
		C: 'powah:energy_cable_niotic'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:turbo_machine_hull", amount: 1},
			{item: "powah:energy_cable_blazing", amount: 4},
			{item: "powah:energy_cable_niotic", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:hv_ev_transformer", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:ev_hv_transformer', [
		'B B',
		'BAB',
		' C '
	], {
		A: 'modern_industrialization:turbo_machine_hull',
		B: 'powah:energy_cable_blazing',
		C: 'powah:energy_cable_niotic'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:turbo_machine_hull", amount: 1},
			{item: "powah:energy_cable_niotic", amount: 1},
			{item: "powah:energy_cable_blazing", amount: 4}
		],
		item_outputs: [
			{item: "modern_industrialization:ev_hv_transformer", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:ev_superconductor_transformer', [
		' C ',
		'BAB',
		'B B'
	], {
		A: 'modern_industrialization:highly_advanced_machine_hull',
		B: 'modern_industrialization:annealed_copper_cable',
		C: 'modern_industrialization:superconductor_cable'
	})	
	event.shaped('modern_industrialization:superconductor_ev_transformer', [
		'B B',
		'BAB',
		' C '
	], {
		A: 'modern_industrialization:highly_advanced_machine_hull',
		B: 'modern_industrialization:annealed_copper_cable',
		C: 'modern_industrialization:superconductor_cable'
	})
	
	event.shaped('modern_industrialization:electric_wiremill', [
		'DCD',
		'BAB',
		'DCD'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'powah:energy_cable_starter',
		D: 'modern_industrialization:motor'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "powah:energy_cable_basic", amount: 2},
			{item: "modern_industrialization:motor", amount: 4}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_wiremill", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:electric_water_pump', [
		'EFE',
		'DAD',
		'CBC'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'powah:energy_cable_starter',
		D: 'modern_industrialization:pump',
		E: 'moderndynamics:fluid_pipe',
		F: 'modern_industrialization:tin_rotor'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "powah:energy_cable_basic", amount: 2},
			{item: "modern_industrialization:pump", amount: 2},
			{item: "moderndynamics:fluid_pipe", amount: 2},
			{item: "modern_industrialization:tin_rotor", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_water_pump", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:electric_unpacker', [
		'EBE',
		'DAD',
		'CBC'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'powah:energy_cable_starter',
		D: 'modern_industrialization:conveyor',
		E: 'modern_industrialization:motor'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "powah:energy_cable_basic", amount: 2},
			{item: "modern_industrialization:conveyor", amount: 2},
			{item: "modern_industrialization:motor", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_unpacker", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:lv_steam_turbine', [
		'FBF',
		'EAE',
		'DCD'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'powah:energy_cable_starter',
		D: 'modern_industrialization:motor',
		E: 'modern_industrialization:tin_rotor',
		F: 'moderndynamics:fluid_pipe'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "powah:energy_cable_basic", amount: 1},
			{item: "modern_industrialization:motor", amount: 2},
			{item: "modern_industrialization:tin_rotor", amount: 2},
			{item: "moderndynamics:fluid_pipe", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:lv_steam_turbine", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:starter_diesel_generator', [
		'DBD',
		'EAE',
		'CCC'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'powah:energy_cable_starter',
		D: 'modern_industrialization:pump',
		E: 'modern_industrialization:tin_gear'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "powah:energy_cable_basic", amount: 3},
			{item: "modern_industrialization:pump", amount: 2},
			{item: "modern_industrialization:tin_gear", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:starter_diesel_generator", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:polarizer', [
		'DFD',
		'CAC',
		'DED'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		C: 'powah:energy_cable_starter',
		D: 'modern_industrialization:tin_wire',
		E: 'modern_industrialization:inductor',
		F: 'geggy:magnetic_iron_rod'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "powah:energy_cable_basic", amount: 2},
			{item: "modern_industrialization:tin_wire", amount: 4},
			{item: "modern_industrialization:inductor", amount: 1},
			{item: "geggy:magnetic_iron_rod", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:polarizer", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:electric_packer', [
		'EBE',
		'DAD',
		'CBC'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'powah:energy_cable_starter',
		D: 'modern_industrialization:conveyor',
		E: 'modern_industrialization:robot_arm'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "powah:energy_cable_basic", amount: 2},
			{item: "modern_industrialization:conveyor", amount: 2},
			{item: "modern_industrialization:robot_arm", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_packer", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:electric_macerator', [
		'EFE',
		'DAD',
		'BCB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'powah:energy_cable_starter',
		D: 'modern_industrialization:motor',
		E: 'modern_industrialization:piston',
		F: 'modern_industrialization:invar_rotary_blade'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "powah:energy_cable_basic", amount: 1},
			{item: "modern_industrialization:motor", amount: 2},
			{item: "modern_industrialization:piston", amount: 2},
			{item: "modern_industrialization:invar_rotary_blade", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_macerator", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:electric_furnace', [
		'DBD',
		'DAD',
		'CCC'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'powah:energy_cable_starter',
		D: 'modern_industrialization:cupronickel_wire_magnetic'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "powah:energy_cable_basic", amount: 3},
			{item: "modern_industrialization:cupronickel_wire_magnetic", amount: 4}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_furnace", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:electric_compressor', [
		'DBD',
		'CAC',
		'DBD'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'powah:energy_cable_starter',
		D: 'modern_industrialization:piston'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "powah:energy_cable_basic", amount: 2},
			{item: "modern_industrialization:piston", amount: 4}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_compressor", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "powah:energy_cable_basic", amount: 2},
			{item: "modern_industrialization:motor", amount: 4},
			{item: "modern_industrialization:piston", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:centrifuge", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:electronic_circuit", amount: 2},
			{item: "powah:energy_cable_hardened", amount: 1},
			{item: "modern_industrialization:aluminum_rotor", amount: 2},
			{item: "ae2:quartz_vibrant_glass", amount: 2},
			{item: "modern_industrialization:large_motor", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:chemical_reactor", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:advanced_machine_hull", amount: 1},
			{item: "modern_industrialization:electronic_circuit", amount: 1},
			{item: "powah:energy_cable_hardened", amount: 1},
			{item: "modern_industrialization:aluminum_rotor", amount: 2},
			{item: "modern_industrialization:large_motor", amount: 2},
			{item: "moderndynamics:fluid_pipe", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:mv_steam_turbine", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:advanced_machine_hull", amount: 1},
			{item: "modern_industrialization:electronic_circuit", amount: 1},
			{item: "powah:energy_cable_hardened", amount: 3},
			{item: "modern_industrialization:aluminum_gear", amount: 2},
			{item: "modern_industrialization:large_pump", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:diesel_generator", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:advanced_machine_casing", amount: 1},
			{item: "modern_industrialization:electronic_circuit", amount: 1},
			{item: "powah:energy_cable_hardened", amount: 3},
			{item: "modern_industrialization:silicon_battery", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 100}
		],
		item_outputs: [
			{item: "modern_industrialization:advanced_machine_hull", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:sodium_battery", amount: 2},
			{item: "modern_industrialization:digital_circuit", amount: 1},
			{item: "modern_industrialization:turbo_machine_casing", amount: 1},
			{item: "powah:energy_cable_blazing", amount: 3}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:polyethylene", amount: 288}
		],
		item_outputs: [
			{item: "modern_industrialization:turbo_machine_hull", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:large_pump", amount: 2},
			{item: "modern_industrialization:electronic_circuit", amount: 2},
			{item: "ae2:quartz_vibrant_glass", amount: 2},
			{item: "powah:energy_cable_hardened", amount: 1},
			{item: "modern_industrialization:fluid_pipe", amount: 1}	
		],
		item_outputs: [
			{item: "modern_industrialization:distillery", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 64,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:advanced_machine_hull", amount: 1},
			{item: "modern_industrialization:electronic_circuit", amount: 4},
			{item: "modern_industrialization:large_motor", amount: 2},
			{item: "powah:energy_cable_hardened", amount: 2},
		],
		item_outputs: [
			{item: "modern_industrialization:advanced_centrifuge", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:turbo_machine_hull", amount: 1},
			{item: "modern_industrialization:digital_circuit", amount: 1},
			{item: "powah:energy_cable_blazing", amount: 3},
			{item: "modern_industrialization:stainless_steel_gear", amount: 2},
			{item: "modern_industrialization:advanced_pump", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:turbo_diesel_generator", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:turbo_machine_hull", amount: 1},
			{item: "modern_industrialization:digital_circuit", amount: 1},
			{item: "powah:energy_cable_niotic", amount: 1},
			{item: "modern_industrialization:titanium_machine_casing_pipe", amount: 2},
			{item: "modern_industrialization:advanced_pump", amount: 4}
		],
		item_outputs: [
			{item: "modern_industrialization:pressurizer", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:turbo_machine_hull", amount: 1},
			{item: "modern_industrialization:digital_circuit", amount: 1},
			{item: "powah:energy_cable_blazing", amount: 1},
			{item: "modern_industrialization:stainless_steel_rotor", amount: 2},
			{item: "modern_industrialization:advanced_motor", amount: 2},
			{item: "modern_industrialization:fluid_pipe", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:hv_steam_turbine", amount: 1}
		]
	})
	
	// components
	
	event.shaped('modern_industrialization:robot_arm', [
		'CCH',
		'DED',
		'FGE'
	], {
		C: 'powah:energy_cable_starter',
		D: 'modern_industrialization:motor',
		E: 'modern_industrialization:steel_rod',
		F: 'modern_industrialization:piston',
		G: 'create:mechanical_arm',
		H: 'modern_industrialization:steel_curved_plate'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "powah:energy_cable_basic", amount: 2},
			{item: "modern_industrialization:steel_curved_plate", amount: 1},
			{item: "modern_industrialization:motor", amount: 2},
			{item: "modern_industrialization:steel_rod", amount: 2},
			{item: "modern_industrialization:piston", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:robot_arm", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "powah:energy_cable_basic", amount: 2},
			{item: "geggy:galvanized_steel_plate", amount: 3},
			{item: "geggy:galvanized_steel_rod", amount: 2},
			{item: "modern_industrialization:motor", amount: 1},
			{item: "geggy:galvanized_steel_gear", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:piston", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "powah:energy_cable_basic", amount: 1},
			{item: "modern_industrialization:steel_rod_magnetic", amount: 1},
			{item: "geggy:galvanized_steel_rod", amount: 2},
			{item: "modern_industrialization:copper_wire", amount: 4},
			{item: "geggy:cobalt_ring", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:motor", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:conveyor', [
		'DDD',
		'ECE',
		'   '
	], {
		C: 'powah:energy_cable_starter',
		D: 'create:belt_connector',
		E: 'modern_industrialization:motor'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "powah:energy_cable_basic", amount: 1},
			{item: "modern_industrialization:motor", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "geggy:rubber", amount: 864}
		],
		item_outputs: [
			{item: "modern_industrialization:conveyor", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:electronic_circuit", amount: 1},
			{item: "powah:energy_cable_hardened", amount: 2},
			{item: "modern_industrialization:battery_alloy_plate", amount: 4},
			{item: "modern_industrialization:battery_alloy_curved_plate", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:portable_storage_unit", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:redstone_battery', [
		'CFC',
		'EDE',
		'EDE'
	], {
		C: 'powah:energy_cable_starter',
		D: 'minecraft:redstone',
		E: 'modern_industrialization:battery_alloy_curved_plate',
		F: 'modern_industrialization:battery_alloy_plate'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "powah:energy_cable_basic", amount: 2},
			{item: "minecraft:redstone", amount: 2},
			{item: "modern_industrialization:battery_alloy_curved_plate", amount: 4},
			{item: "modern_industrialization:battery_alloy_plate", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:redstone_battery", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:analog_circuit_board", amount: 1},
			{item: "modern_industrialization:aluminum_plate", amount: 2},
			{item: "powah:energy_cable_hardened", amount: 4},
			{item: "modern_industrialization:redstone_battery", amount: 1},
			{item: "geghilarity:good_circuit_board", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:electronic_circuit_board", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "powah:energy_cable_blazing", amount: 6},
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
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 32,
		duration: 1200,
		item_inputs: [ 
			{item: "modern_industrialization:annealed_copper_cable", amount: 8},
			{item: "modern_industrialization:cadmium_battery", amount: 2},
			{item: "modern_industrialization:digital_circuit_board", amount: 1},
			{item: "modern_industrialization:platinum_plate", amount: 4},
			{item: "geghilarity:insane_circuit_board", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:polyvinyl_chloride", amount: 1500}
		],
		item_outputs: [
			{item: "modern_industrialization:processing_unit_board", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:stainless_steel_rod_magnetic", amount: 1},
			{item: "modern_industrialization:stainless_steel_rod", amount: 2},
			{item: "powah:energy_cable_blazing", amount: 1},
			{item: "modern_industrialization:annealed_copper_wire", amount: 4},
			{item: "geggy:cobalt_ring", amount: 1}
			
		],
		item_outputs: [
			{item: "modern_industrialization:advanced_motor", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "powah:energy_cable_hardened", amount: 2},
			{item: "modern_industrialization:silicon_dust", amount: 2},
			{item: "geghilarity:nickel_oxide_hydroxide_dust", amount: 2},
			{item: "modern_industrialization:battery_alloy_curved_plate", amount: 4},
			{item: "modern_industrialization:battery_alloy_plate", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:potassium_hydroxide_solution", amount: 200}
		],
		item_outputs: [
			{item: "modern_industrialization:silicon_battery", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:battery_alloy_curved_plate", amount: 4},
			{item: "modern_industrialization:battery_alloy_plate", amount: 1},
			{item: "powah:energy_cable_blazing", amount: 2},
			{item: "modern_industrialization:carbon_dust", amount: 2},
			{item: "geghilarity:sodium_battery_cathode_alloy_dust", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:dimethyl_carbonate", amount: 200},
			{fluid: "modern_industrialization:soldering_alloy", amount: 100}
		],
		item_outputs: [
			{item: "modern_industrialization:sodium_battery", amount: 1}
		]
	})
	
	//////////////////
	// custom
	//////////////////
	
	event.shaped('modern_industrialization:stirred_tank', [
		'ECE',
		'DAD',
		'BFB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'modern_industrialization:tin_rotor',
		D: 'powah:energy_cable_starter',
		E: 'ae2:quartz_glass',
		F: 'modern_industrialization:motor'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "modern_industrialization:motor", amount: 1},
			{item: "modern_industrialization:tin_rotor", amount: 1},
			{item: "ae2:quartz_glass", amount: 2},
			{item: "powah:energy_cable_basic", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:stirred_tank", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:bubble_reactor', [
		'ECE',
		'DFD',
		'BAB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'moderndynamics:fluid_pipe',
		D: 'powah:energy_cable_starter',
		E: 'ae2:quartz_glass',
		F: 'modern_industrialization:pump'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "modern_industrialization:pump", amount: 1},
			{item: "modern_industrialization:fluid_pipe", amount: 1},
			{item: "ae2:quartz_glass", amount: 2},
			{item: "powah:energy_cable_basic", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:bubble_reactor", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "modern_industrialization:piston", amount: 2},
			{item: "geggy:item_filter", amount: 2},
			{item: "powah:energy_cable_basic", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:sifter", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:electric_alloy_smelter', [
		"ABA",
		"LCL",
		"ATA"
	], {
		C: "modern_industrialization:basic_machine_hull",
		B: 'modern_industrialization:analog_circuit',
		A: 'modern_industrialization:cupronickel_wire_magnetic',
		L: 'modern_industrialization:electric_furnace',
		T: 'powah:energy_cable_starter'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "modern_industrialization:cupronickel_wire_magnetic", amount: 4},
			{item: "modern_industrialization:electric_furnace", amount: 2},
			{item: "powah:energy_cable_basic", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_alloy_smelter", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:roaster', [
		'BDB',
		'EAE',
		'CEC'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'powah:energy_cable_starter',
		D: 'modern_industrialization:tin_rotor',
		E: 'modern_industrialization:cupronickel_wire_magnetic'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "powah:energy_cable_basic", amount: 2},
			{item: "modern_industrialization:tin_rotor", amount: 1},
			{item: "modern_industrialization:cupronickel_wire_magnetic", amount: 3}
		],
		item_outputs: [
			{item: "modern_industrialization:roaster", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:poly_tank', [
		'DFD',
		'CEC',
		'BAB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'modern_industrialization:pump',
		D: 'powah:energy_cable_starter',
		E: 'modern_industrialization:tin_rotor',
		F: 'modern_industrialization:motor'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "modern_industrialization:pump", amount: 2},
			{item: "modern_industrialization:tin_rotor", amount: 1},
			{item: "modern_industrialization:motor", amount: 1},
			{item: "powah:energy_cable_basic", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:poly_tank", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:elecell', [
		'CBC',
		'EAE',
		'BDB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'geggy:galvanized_steel_plate',
		D: 'powah:energy_cable_starter',
		E: 'modern_industrialization:electrum_fine_wire'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 3},
			{item: "geggy:galvanized_steel_plate", amount: 2},
			{item: "powah:energy_cable_basic", amount: 1},
			{item: "modern_industrialization:electrum_fine_wire", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:elecell", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:crystallizer', [
		'CEC',
		'EAE',
		'BDB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'geggy:galvanized_steel_plate',
		D: 'modern_industrialization:pump',
		E: 'ae2:quartz_glass'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "geggy:galvanized_steel_plate", amount: 2},
			{item: "modern_industrialization:pump", amount: 1},
			{item: "ae2:quartz_glass", amount: 3}
		],
		item_outputs: [
			{item: "modern_industrialization:crystallizer", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:chemical_bath', [
		'EFE',
		'CDC',
		'BAB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'modern_industrialization:conveyor',
		D: 'modern_industrialization:pump',
		E: 'ae2:quartz_vibrant_glass',
		F: 'powah:energy_cable_starter'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "modern_industrialization:conveyor", amount: 2},
			{item: "modern_industrialization:pump", amount: 1},
			{item: "ae2:quartz_vibrant_glass", amount: 2},
			{item: "powah:energy_cable_basic", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:chemical_bath", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:bed_reactor', [
		'FDF',
		'CAC',
		'BDB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'moderndynamics:fluid_pipe',
		D: 'powah:energy_cable_starter',
		F: 'modern_industrialization:pump',
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "modern_industrialization:pump", amount: 2},
			{item: "modern_industrialization:fluid_pipe", amount: 2},
			{item: "powah:energy_cable_basic", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:bed_reactor", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:batch_reactor', [
		'EFE',
		'DAD',
		'BDB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		D: 'powah:energy_cable_starter',
		E: 'ae2:quartz_glass',
		F: 'modern_industrialization:pump',
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "modern_industrialization:pump", amount: 1},
			{item: "powah:energy_cable_basic", amount: 3},
			{item: "ae2:quartz_glass", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:batch_reactor", amount: 1}
		]
	})
		
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:steel_machine_casing", amount: 1},
			{item: "powah:energy_cable_basic", amount: 4},
			{item: "modern_industrialization:steel_large_plate", amount: 4}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:pyro_casing", amount: 4}
		]
	})

	event.shaped('moderndynamics:machine_extender', [
		'BDB',
		'CAC',
		'BDB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'geggy:galvanized_steel_plate',
		C: 'powah:energy_cable_starter',
		D: 'modern_industrialization:inductor'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "geggy:galvanized_steel_plate", amount: 4},
			{item: "powah:energy_cable_starter", amount: 2},
			{item: "modern_industrialization:inductor", amount: 2}
		],
		item_outputs: [
			{item: "moderndynamics:machine_extender", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:aluminum_rotor", amount: 4},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "powah:energy_cable_hardened", amount: 1},
			{item: "modern_industrialization:robot_arm", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_dehy", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:fextract', [
		'DFD',
		'CAC',
		'BEB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'powah:energy_cable_starter',
		C: 'ae2:quartz_glass',
		D: 'modern_industrialization:analog_circuit',
		E: 'modern_industrialization:pump',
		F: 'modern_industrialization:piston'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "ae2:quartz_glass", amount: 2},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "powah:energy_cable_basic", amount: 2},
			{item: "modern_industrialization:pump", amount: 1},
			{item: "modern_industrialization:piston", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:fextract", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:advanced_machine_hull", amount: 1},
			{item: "modern_industrialization:electronic_circuit", amount: 2},
			{item: "modern_industrialization:large_pump", amount: 1},
			{item: "modern_industrialization:large_motor", amount: 1},
			{item: "modern_industrialization:fluid_pipe", amount: 1},
			{item: "ae2:quartz_vibrant_glass", amount: 2},
			{item: "powah:energy_cable_hardened", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:fluid_compressor", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 128,
		duration: 400,
		item_inputs: [ 
			{item: "modern_industrialization:advanced_machine_hull", amount: 1},
			{item: "modern_industrialization:electronic_circuit", amount: 2},
			{item: "modern_industrialization:aluminum_plate", amount: 3},
			{item: "powah:energy_cable_hardened", amount: 2},
			{item: "modern_industrialization:cupronickel_wire_magnetic", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:reaction_furnace", amount: 1}
		]
	})
	
	// COIL
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:alumino_silicate_wool", amount: 12},
			{item: "modern_industrialization:cupronickel_wire", amount: 16},
			{item: "geggy:bronze_foil", amount: 8}
		],
		fluid_inputs: [ 
			{fluid: "geggy:tin_alloy", amount: 288},
			{fluid: "geggy:rubber", amount: 2304}
		],
		item_outputs: [
			{item: "modern_industrialization:cupronickel_coil", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 120,
		duration: 300,
		item_inputs: [ 
			{item: "geghilarity:mica_insulator_foil", amount: 8},
			{item: "modern_industrialization:kanthal_wire", amount: 16},
			{item: "geggy:aluminium_foil", amount: 8}
		],
		fluid_inputs: [ 
			{fluid: "geggy:molten_red_alloy", amount: 288},
			{fluid: "geghilarity:purified_isoprene", amount: 1152}
		],
		item_outputs: [
			{item: "modern_industrialization:kanthal_coil", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 480,
		duration: 400,
		item_inputs: [ 
			{item: "geghilarity:mica_insulator_foil", amount: 8},
			{item: "geggy:nichrome_wire", amount: 16},
			{item: "geggy:stainless_steel_foil", amount: 8}
		],
		fluid_inputs: [ 
			{fluid: "geggy:molten_energetic_alloy", amount: 288},
			{fluid: "geghilarity:purified_isoprene", amount: 1152}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:nichrome_coil", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 1920,
		duration: 500,
		item_inputs: [ 
			{item: "geghilarity:mica_insulator_foil", amount: 8},
			{item: "geggy:rtm_alloy_wire", amount: 16},
			{item: "geggy:vanadiumsteel_foil", amount: 8}
		],
		fluid_inputs: [ 
			{fluid: "geggy:molten_vibrant_alloy", amount: 576},
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 1152}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:rtm_alloy_coil", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 7680,
		duration: 600,
		item_inputs: [ 
			{item: "geghilarity:mica_insulator_foil", amount: 8},
			{item: "geggy:hss-s_wire", amount: 16},
			{item: "geggy:tungstencarbide_foil", amount: 8}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:tungsten", amount: 288},
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 1152}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:hss-s_coil", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30720,
		duration: 700,
		item_inputs: [ 
			{item: "geghilarity:mica_insulator_foil", amount: 8},
			{item: "geggy:naquadah_wire", amount: 16},
			{item: "geggy:osmiridium_foil", amount: 8}
		],
		fluid_inputs: [ 
			{fluid: "geggy:molten_tungstensteel", amount: 288},
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 1152}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:naquadah_coil", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 122880,
		duration: 800,
		item_inputs: [ 
			{item: "geghilarity:mica_insulator_foil", amount: 8},
			{item: "geggy:trinium_wire", amount: 16},
			{item: "geggy:enriched_naquadah_foil", amount: 8}
		],
		fluid_inputs: [ 
			{fluid: "geggy:molten_naquadah", amount: 288},
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 1152}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:trinium_coil", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 491520,
		duration: 900,
		item_inputs: [ 
			{item: "geghilarity:mica_insulator_foil", amount: 8},
			{item: "geggy:tritanium_wire", amount: 16},
			{item: "geggy:naquadria_foil", amount: 8}
		],
		fluid_inputs: [ 
			{fluid: "geggy:liquid_naquadah_alloy", amount: 288},
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 1152}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:tritanium_coil", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 1920,
		duration: 300,
		item_inputs: [ 
			{item: "geghilarity:ruthenium_dust", amount: 4},
			{item: "modern_industrialization:tungsten_dust", amount: 2},
			{item: "geghilarity:molybdenum_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:rtm_alloy_dust", amount: 7}
		]
	})
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 480,
		duration: 250,
		item_inputs: [ 
			{item: "geggy:rtm_alloy_hot_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geggy:rtm_alloy_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 480,
		duration: 1400,
		item_inputs: [ 
			{item: "geghilarity:rtm_alloy_dust", amount: 1}
		],
		item_outputs: [
			{item: "geggy:rtm_alloy_hot_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 24,
		duration: 98,
		item_inputs: [ 
			{item: "geggy:rtm_alloy_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geggy:rtm_alloy_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 30,
		duration: 123,
		item_inputs: [ 
			{item: "geggy:rtm_alloy_plate", amount: 1}
		],
		item_outputs: [
			{item: "geggy:rtm_alloy_wire", amount: 2}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 30,
		duration: 240,
		item_inputs: [ 
			{item: "geggy:hss-s_plate", amount: 1}
		],
		item_outputs: [
			{item: "geggy:hss-s_wire", amount: 2}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 1920,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:osmiridium_hot_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geggy:osmiridium_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 7680,
		duration: 900,
		item_inputs: [ 
			{item: "geghilarity:osmiridium_dust", amount: 1}
		],
		item_outputs: [
			{item: "geggy:osmiridium_hot_ingot", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 16,
		duration: 30,
		item_inputs: [ 
			{item: "geggy:mold_plate", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "geggy:liquid_tritanium", amount: 144}
		],
		item_outputs: [
			{item: "geggy:tritanium_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fusion_reactor",
		eu: 30720,
		duration: 64,
		fluid_inputs: [ 
			{fluid: "geghilarity:molten_titanium", amount: 32},
			{fluid: "geggy:liquid_duranium", amount: 32}
		],
		fluid_outputs: [
			{fluid: "geggy:liquid_tritanium", amount: 16}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 70,
		item_inputs: [ 
			{item: "geghilarity:gallium_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:liquid_gallium", amount: 144}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fusion_reactor",
		eu: 16384,
		duration: 64,
		fluid_inputs: [ 
			{fluid: "geggy:liquid_gallium", amount: 16},
			{fluid: "geghilarity:radon", amount: 125}
		],
		fluid_outputs: [
			{fluid: "geggy:liquid_duranium", amount: 16}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 30,
		duration: 526,
		item_inputs: [ 
			{item: "geghilarity:naquadah_plate", amount: 1}
		],
		item_outputs: [
			{item: "geggy:naquadah_wire", amount: 2}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 30,
		duration: 330,
		item_inputs: [ 
			{item: "geggy:trinium_plate", amount: 1}
		],
		item_outputs: [
			{item: "geggy:trinium_wire", amount: 2}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 30,
		duration: 297,
		item_inputs: [ 
			{item: "geggy:tritanium_plate", amount: 1}
		],
		item_outputs: [
			{item: "geggy:tritanium_wire", amount: 2}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 38,
		duration: 80,
		item_inputs: [ 
			{item: "geggy:red_alloy_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:molten_red_alloy", amount: 144}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 256,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:energetic_alloy_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:molten_energetic_alloy", amount: 144}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 512,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:vibrant_alloy_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:molten_vibrant_alloy", amount: 144}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 480,
		duration: 119,
		item_inputs: [ 
			{item: "geghilarity:tungstensteel_ingot", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:molten_tungstensteel", amount: 144}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 480,
		duration: 526,
		item_inputs: [ 
			{item: "geghilarity:naquadah_ingot", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:molten_naquadah", amount: 144}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 480,
		duration: 391,
		item_inputs: [ 
			{item: "geggy:naquadah_alloy_ingot", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:liquid_naquadah_alloy", amount: 144}
		]
	})
	
	// battery inversion leftover
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:silicon_battery", amount: 6},
			{item: "modern_industrialization:advanced_machine_hull", amount: 1},
			{item: "modern_industrialization:battery_alloy_plate", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:polyethylene", amount: 288}
		],
		item_outputs: [
			{item: "modern_industrialization:mv_storage_unit", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:sodium_battery", amount: 6},
			{item: "modern_industrialization:turbo_machine_hull", amount: 1},
			{item: "modern_industrialization:battery_alloy_plate", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:polyethylene", amount: 288}
		],
		item_outputs: [
			{item: "modern_industrialization:hv_storage_unit", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 30,
		duration: 20,
		item_inputs: [ 
			{item: "modern_industrialization:silicon_wafer", amount: 1},
			{item: "geghilarity:high_purity_antimony_dust", amount: 1},
			{item: "modern_industrialization:aluminum_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:argon", amount: 250},
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 500}
		],
		item_outputs: [
			{item: "modern_industrialization:random_access_memory", amount: 2}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:enhanced_battery_alloy_curved_plate", amount: 4},
			{item: "geggy:enhanced_battery_alloy_plate", amount: 1},
			{item: "modern_industrialization:annealed_copper_cable", amount: 2},
			{item: "modern_industrialization:cadmium_dust", amount: 2},
			{item: "geghilarity:lithium_cobalt_oxide_dust", amount: 2},
			{item: "geghilarity:graphite_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "geghilarity:lithium_hexafluorophosphate_electrolyte", amount: 200},
			{fluid: "modern_industrialization:polyethylene", amount: 432}
		],
		item_outputs: [
			{item: "modern_industrialization:cadmium_battery", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 32,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:enhanced_battery_alloy_curved_plate", amount: 4},
			{item: "geggy:enhanced_battery_alloy_plate", amount: 1},
			{item: "modern_industrialization:superconductor_cable", amount: 2},
			{item: "modern_industrialization:plutonium_dust", amount: 4},
			{item: "geghilarity:zircaloy_2_ring", amount: 1},
			{item: "geghilarity:dense_hafnium_curved_plate", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 500},
			{fluid: "modern_industrialization:polyethylene", amount: 500}
		],
		item_outputs: [
			{item: "modern_industrialization:plutonium_battery", amount: 1}
		]
	})
	
	// ore proc
	event.shaped('modern_industrialization:smoke_stack', [
		'C C',
		'BAB',
		'CDC'
	], {
		A: 'modern_industrialization:steel_machine_casing',
		B: 'modern_industrialization:bronze_rotor',
		C: 'modern_industrialization:steel_rod',
		D: 'modern_industrialization:steel_gear'
	})
	
	event.shaped('modern_industrialization:bronze_shredder', [
		'CBC',
		'BAB',
		'CDC'
	], {
		A: 'modern_industrialization:bronze_machine_casing',
		B: 'modern_industrialization:bronze_gear',
		C: 'modern_industrialization:bronze_plate',
		D: 'geggy:crystalline_diamond_plate'
	})
	event.shaped('modern_industrialization:steel_shredder', [
		'CBC',
		'BAB',
		'CDC'
	], {
		A: 'modern_industrialization:steel_machine_casing',
		B: 'modern_industrialization:steel_gear',
		C: 'modern_industrialization:steel_plate',
		D: 'geggy:crystalline_diamond_plate'
	})
	event.shaped('modern_industrialization:electric_shredder', [
		'CBC',
		'BAB',
		'CDC'
	], {
		A: 'geghilarity:galvanized_steel_machine_casing',
		B: 'modern_industrialization:steel_gear',
		C: 'geggy:galvanized_steel_plate',
		D: 'modern_industrialization:diamond_plate'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:steel_gear", amount: 3},
			{item: "geggy:galvanized_steel_plate", amount: 4},
			{item: "modern_industrialization:diamond_plate", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_shredder", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "modern_industrialization:large_motor", amount: 2},
			{item: "modern_industrialization:piston", amount: 2},
			{item: "powah:energy_cable_basic", amount: 3}
		],
		item_outputs: [
			{item: "modern_industrialization:ore_centrifuge", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "modern_industrialization:electrum_fine_wire", amount: 4},
			{item: "powah:energy_cable_hardened", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:ore_electrolyzer", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:electronic_circuit", amount: 1},
			{item: "modern_industrialization:pump", amount: 1},
			{item: "modern_industrialization:invar_large_plate", amount: 4},
			{item: "powah:energy_cable_hardened", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:steam_cracking", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:bronze_sluice', [
		'CEC',
		'BAB',
		'CDC'
	], {
		A: 'modern_industrialization:bronze_machine_casing',
		B: 'modern_industrialization:bronze_rotor',
		C: 'modern_industrialization:bronze_large_plate',
		D: 'create:basin',
		E: 'modern_industrialization:bronze_gear'
	})
	event.shaped('modern_industrialization:steel_sluice', [
		'CEC',
		'BAB',
		'CDC'
	], {
		A: 'modern_industrialization:steel_machine_casing',
		B: 'modern_industrialization:bronze_rotor',
		C: 'modern_industrialization:steel_large_plate',
		D: 'minecraft:cauldron',
		E: 'modern_industrialization:steel_gear'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "modern_industrialization:aluminum_rotor", amount: 2},
			{item: "geggy:galvanized_steel_plate", amount: 2},
			{item: "minecraft:cauldron", amount: 1},
			{item: "powah:energy_cable_basic", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_sluice", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:melter', [
		'CEC',
		'CAC',
		'BDB'
	], {
		A: 'minecraft:blast_furnace',
		B: 'modern_industrialization:fire_clay_bricks',
		C: 'modern_industrialization:bronze_large_plate',
		D: 'create:basin',
		E: 'modern_industrialization:bronze_rotor'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:bronze_rotor", amount: 2},
			{item: "modern_industrialization:steel_large_plate", amount: 2},
			{item: "minecraft:cauldron", amount: 1},
			{item: "powah:energy_cable_starter", amount: 3}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_melter", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:caster', [
		'CEC',
		'CAC',
		'BDB'
	], {
		A: 'modern_industrialization:bronze_machine_casing',
		B: 'modern_industrialization:fire_clay_bricks',
		C: 'modern_industrialization:bronze_large_plate',
		D: 'geggy:bronze_piston',
		E: 'modern_industrialization:bronze_gear'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:steel_gear", amount: 2},
			{item: "modern_industrialization:steel_large_plate", amount: 2},
			{item: "modern_industrialization:piston", amount: 2},
			{item: "powah:energy_cable_starter", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_caster", amount: 1}
		]
	})
	
})	