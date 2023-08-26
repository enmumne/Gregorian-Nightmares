ServerEvents.recipes(event => {
	
	// MI standard: LV 256 (copper, tin, MV 1024, HV 8192, EV 65536, super 1024G
	// FE 20, 80, 200, 800, 2k, 8k, 40k
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
	
	// 
	// bender 24/0.5> polyvinyl chloride (PVC) sheet > 4 thin polyvinyl chloride (PVC) sheet
	
	// GT6
	// tin LV 32, lead LV 64
	// constantan MV 128, efrine MV 256, copper MV 256, annealed copper MV 384
	// kanthal HV 512, gold HV 512, electrum HV 1.024, electrotine alloy HV 1.024, silver HV 1.536, blue alloy HV 1.536
	// nichrome EV 2.048, steel EV 2.048, aluminium EV 2.048, tungstensteel EV 4.096, tungsten EV 6.144
	// carborundum IV 8.192, osmium IV 16.384, platinum IV 24.576, osmiridium IV 24.576, iridium IV 24.576
	// niobium titanium LuV 32.768, vanadium-gallium LuV 65.536, naquadah LuV 98.304
	
	// current MI tweak
	// crafting> 3 copper wire + 6 rubber sheet > 3 copper cable
	// assembler 2/5> 3 copper wire + 6 s-b rubber (30 synth) > 3 copper cable
	// packer 2/5> 3 copper wire + 6 rubber sheet > 3 copper cable
	// compacting> 3 copper wire + 3 rubber sheet > 1 copper cable
	
	// md cables recipe removal
	event.remove(["moderndynamics:cable/lv_from_mi", "moderndynamics:cable/mv_from_mi", "moderndynamics:cable/hv_from_mi",
		"moderndynamics:cable/ev_from_mi", "moderndynamics:cable/superconductor_from_mi", "moderndynamics:cable/lv_to_mi",
		"moderndynamics:cable/mv_to_mi", "moderndynamics:cable/hv_to_mi", "moderndynamics:cable/ev_to_mi",
		"moderndynamics:cable/superconductor_to_mi"])
	
	// cables recipe removal
	event.remove(["modern_industrialization:materials/copper/craft/cable", "modern_industrialization:materials/tin/craft/cable",
		"modern_industrialization:materials/silver/craft/cable", "modern_industrialization:materials/cupronickel/craft/cable",
		"modern_industrialization:materials/electrum/craft/cable", "modern_industrialization:materials/aluminum/craft/cable",
		"modern_industrialization:materials/kanthal/craft/cable", "modern_industrialization:materials/annealed_copper/craft/cable",
		"modern_industrialization:materials/platinum/craft/cable"])
		
	event.remove(["modern_industrialization:materials/copper/assembler/cable_styrene_rubber", "modern_industrialization:materials/tin/assembler/cable_styrene_rubber",
		"modern_industrialization:materials/silver/assembler/cable_styrene_rubber", "modern_industrialization:materials/cupronickel/assembler/cable_styrene_rubber",
		"modern_industrialization:materials/electrum/assembler/cable_styrene_rubber", "modern_industrialization:materials/aluminum/assembler/cable_styrene_rubber",
		"modern_industrialization:materials/kanthal/assembler/cable_styrene_rubber", "modern_industrialization:materials/annealed_copper/assembler/cable_styrene_rubber",
		"modern_industrialization:materials/platinum/assembler/cable_styrene_rubber"])	
		
	event.remove(["modern_industrialization:materials/copper/assembler/cable_synthetic_rubber", "modern_industrialization:materials/tin/assembler/cable_synthetic_rubber",
		"modern_industrialization:materials/silver/assembler/cable_synthetic_rubber", "modern_industrialization:materials/cupronickel/assembler/cable_synthetic_rubber",
		"modern_industrialization:materials/electrum/assembler/cable_synthetic_rubber", "modern_industrialization:materials/aluminum/assembler/cable_synthetic_rubber",
		"modern_industrialization:materials/kanthal/assembler/cable_synthetic_rubber", "modern_industrialization:materials/annealed_copper/assembler/cable_synthetic_rubber",
		"modern_industrialization:materials/platinum/assembler/cable_synthetic_rubber"])	
		
	event.remove(["modern_industrialization:materials/copper/packer/cable", "modern_industrialization:materials/tin/packer/cable",
		"modern_industrialization:materials/silver/packer/cable", "modern_industrialization:materials/cupronickel/packer/cable",
		"modern_industrialization:materials/electrum/packer/cable", "modern_industrialization:materials/aluminum/packer/cable",
		"modern_industrialization:materials/kanthal/packer/cable", "modern_industrialization:materials/annealed_copper/packer/cable",
		"modern_industrialization:materials/platinum/packer/cable"])	
		
	event.remove(["modern_industrialization:hatches/basic/unpacker/energy_input_hatch",
		"modern_industrialization:hatches/basic/unpacker/energy_output_hatch",
		"modern_industrialization:hatches/advanced/unpacker/energy_input_hatch",
		"modern_industrialization:hatches/advanced/unpacker/energy_output_hatch",
		"modern_industrialization:hatches/turbo/unpacker/energy_input_hatch",
		"modern_industrialization:hatches/turbo/unpacker/energy_output_hatch",
		"modern_industrialization:hatches/highly_advanced/unpacker/energy_input_hatch",
		"modern_industrialization:hatches/highly_advanced/unpacker/energy_output_hatch"])	

	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:electrum_wire", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 6}
		],
		item_outputs: [
			{item: "modern_industrialization:electrum_cable", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:electrum_wire", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:synthetic_rubber", amount: 30}
		],
		item_outputs: [
			{item: "modern_industrialization:electrum_cable", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:aluminum_wire", amount: 3},
			{item: "geghilarity:polyethylene_foil", amount: 4}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 6}
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
			{item: "modern_industrialization:aluminum_wire", amount: 3},
			{item: "geghilarity:polyethylene_foil", amount: 4}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:synthetic_rubber", amount: 30}
		],
		item_outputs: [
			{item: "modern_industrialization:aluminum_cable", amount: 1}
		]
	})	

	
	
	
})	