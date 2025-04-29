StartupEvents.registry('item', event => {
	
	event.create('drilly:drill_group1').displayName('Group A token').fireResistant(true);
	event.create('drilly:drill_group2').displayName('Group B token').fireResistant(true);
	event.create('drilly:drill_group3').displayName('Group C token').fireResistant(true);
	event.create('drilly:drill_group4').displayName('Group D token').fireResistant(true);
	event.create('drilly:drill_group5').displayName('Group E token').fireResistant(true);
	event.create('drilly:drill_groupx').displayName('Group X token').fireResistant(true);
	event.create('drilly:drill_oil').displayName('Group Oil token').fireResistant(true);
	event.create('drilly:drill_gas').displayName('Group Gas token').fireResistant(true);
	
	event.create('drilly:tiny_tier1_experience').displayName('Tiny Pile of Tier 1 Experience');
	event.create('drilly:whole_tier1_experience').displayName('Tier 1 Experience');
	event.create('drilly:tiny_tier2_experience').displayName('Tiny Pile of Tier 2 Experience');
	event.create('drilly:whole_tier2_experience').displayName('Tier 2 Experience');
	event.create('drilly:tiny_tier3_experience').displayName('Tiny Pile of Tier 3 Experience');
	event.create('drilly:whole_tier3_experience').displayName('Tier 3 Experience');
	event.create('drilly:tiny_tier4_experience').displayName('Tiny Pile of Tier 4 Experience');
	event.create('drilly:whole_tier4_experience').displayName('Tier 4 Experience');
	event.create('drilly:tiny_tier5_experience').displayName('Tiny Pile of Tier 5 Experience');
	event.create('drilly:whole_tier5_experience').displayName('Tier 5 Experience');	
	
	event.create('drilly:copper_drill').displayName('Basic Copper Drill');
	event.create('drilly:bronze_base_drill').displayName('Basic Bronze Drill');
	event.create('drilly:incomplete_bronze_refined_drill').displayName('Incomplete Refined Bronze Drill');
	event.create('drilly:bronze_refined_drill').displayName('Refined Bronze Drill');
	event.create('drilly:incomplete_iron_refined_drill').displayName('Incomplete Refined Iron Drill');
	event.create('drilly:iron_refined_drill').displayName('Refined Iron Drill');
	event.create('drilly:hsla_base_drill').displayName('Basic HSLA Steel Drill');
	
	event.create('drilly:dirty_bronze_refined_drill').displayName('Dirty Refined Bronze Drill');
	event.create('drilly:dirty_iron_refined_drill').displayName('Dirty Refined Iron Drill');
	event.create('drilly:dirty_hsla_base_drill').displayName('Dirty Basic HSLA Steel Drill');
	
})	

let DEHY;
let FEXTRACT;

let ROASTER;
let CRYSTALLIZER;
let STIRR;
let BUBBLE;
let BATCH;
let BED;
let FCOMPRESS;
let SIFTER;
let AUTOCLAVE;
let EMSEPARATOR;
let ESSEPARATOR;
let FLUIDHEATER;
let CHEMBATH;

let ADVCENTRIFUGE;

let GASCOLLECT;
let VACUUM;

let DRILL1;
let DRILL2;
let DRILL3;
let DRILL4;

let PROTO;

MIMachineEvents.registerRecipeTypes(event => {
    
	DEHY = event.register("dehy")
        .withItemInputs()
        .withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();
		
	FEXTRACT = event.register("fextract")
		.withItemInputs()
        .withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();
		
	ROASTER = event.register("roaster")
		.withItemInputs()
        .withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();

	CRYSTALLIZER = event.register("crystallizer")
		.withItemInputs()
        .withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();

	STIRR = event.register("stirred_tank")
		.withFluidInputs() 
        .withFluidOutputs();
		
	BUBBLE = event.register("bubble_reactor")
		.withItemInputs()
		.withFluidInputs() 
        .withFluidOutputs();

	BATCH = event.register("batch_reactor")
		.withItemInputs()
		.withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();

	BED = event.register("bed_reactor")
		.withItemInputs()
		.withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();

	ADVCENTRIFUGE = event.register("advanced_centrifuge")
		.withItemInputs()
		.withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();	

	SIFTER = event.register("sifter")
		.withItemInputs()
		.withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();

	AUTOCLAVE = event.register("autoclave")
		.withItemInputs()
		.withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();	

	EMSEPARATOR = event.register("em_separator")
		.withItemInputs()
		.withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();	

	ESSEPARATOR = event.register("es_separator")
		.withItemInputs()
		.withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();

	FLUIDHEATER = event.register("fluid_heater")
		.withFluidInputs() 
        .withFluidOutputs();	

	CHEMBATH = event.register("chemical_bath")
		.withItemInputs()
		.withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();		
	
	FCOMPRESS = event.register("fluid_compressor")
		.withFluidInputs() 
        .withFluidOutputs();
		
	GASCOLLECT = event.register("gas_collector")
		.withItemInputs()
        .withFluidOutputs();

	VACUUM = event.register("vacuum_chamber")
		.withItemInputs()
        .withItemOutputs();	
		
	DRILL1 = event.register("drill1")
        .withItemInputs()
        .withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();

	DRILL2 = event.register("drill2")
        .withItemInputs()
        .withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();	

	DRILL3 = event.register("drill3")
        .withItemInputs()
        .withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();	

	DRILL4 = event.register("drill4")
        .withItemInputs()
        .withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();	

	PROTO = event.register("proto")
        .withItemInputs()
        .withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();	

});


MIMachineEvents.registerMachines(event => {
	
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Chemical Dehydrator", "dehy", DEHY, ["steel", "electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		220, event.progressBar(78, 45, "extract"), event.efficiencyBar(38, 112), event.energyBar(14, 46),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		2, 9, 2, 2,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 37, 2, 1).addSlots(106, 29, 3, 3), //fluids => {},
		fluids => fluids.addSlots(36, 57, 2, 1).addSlots(106, 87, 2, 1),
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Fluid Extractor", "fextract", FEXTRACT, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		170, event.progressBar(73, 34, "extract"), event.efficiencyBar(38, 60), event.energyBar(14, 34),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		1, 1, 0, 1,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlot(41, 35).addSlot(106, 35),
		fluids => fluids.addSlot(126, 35),
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Roaster", "roaster", ROASTER, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		185, event.progressBar(78, 43, "extract"), event.efficiencyBar(38, 80), event.energyBar(14, 43),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		2, 2, 2, 3,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 35, 2, 1).addSlots(106, 35, 2, 1),
		fluids => fluids.addSlots(36, 55, 2, 1).addSlots(106, 55, 3, 1),
		// front overlay?, top overlay?, side overlay?
		true, true, false,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Crystallizer", "crystallizer", CRYSTALLIZER, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		185, event.progressBar(89, 42, "extract"), event.efficiencyBar(38, 80), event.energyBar(9, 43),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		3, 2, 3, 3,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(29, 35, 3, 1).addSlots(117, 35, 2, 1),
		fluids => fluids.addSlots(29, 55, 3 , 1).addSlots(117, 55, 3, 1),
		// front overlay?, top overlay?, side overlay?
		true, true, false,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Batch Reactor", "batch_reactor", BATCH, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		185, event.progressBar(88, 43, "centrifuge"), event.efficiencyBar(38, 80), event.energyBar(9, 43),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		3, 3, 3, 3,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(29, 35, 3, 1).addSlots(116, 35, 3, 1),
		fluids => fluids.addSlots(29, 55, 3 , 1).addSlots(116, 55, 3, 1),
		// front overlay?, top overlay?, side overlay?
		true, false, false,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Bed Reactor", "bed_reactor", BED, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		185, event.progressBar(98, 43, "extract"), event.efficiencyBar(38, 80), event.energyBar(14, 43),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		2, 1, 3, 2,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 35, 2, 1).addSlot(126, 35),
		fluids => fluids.addSlots(36, 55, 3 , 1).addSlots(126, 55, 2, 1),
		// front overlay?, top overlay?, side overlay?
		true, false, false,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Fluid Heater", "fluid_heater", FLUIDHEATER, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		175, event.progressBar(83, 40, "compress"), event.efficiencyBar(32, 70), event.energyBar(24, 41),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		0, 0, 1, 1,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => {},
		fluids => fluids.addSlot(56, 42).addSlot(110, 42),
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Chemical Bath", "chemical_bath", CHEMBATH, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		200, event.progressBar(75, 41, "centrifuge"), event.efficiencyBar(38, 97), event.energyBar(14, 45),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		1, 6, 1, 1,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlot(41, 35).addSlots(113, 35, 3, 2),
		fluids => fluids.addSlot(41, 54).addSlot(113, 72),
		// front overlay?, top overlay?, side overlay?
		true, false, true,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Fluid Compressor", "fluid_compressor", FCOMPRESS, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		175, event.progressBar(83, 40, "compress"), event.efficiencyBar(32, 70), event.energyBar(24, 41),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		0, 0, 1, 1,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => {},
		fluids => fluids.addSlot(56, 42).addSlot(110, 42),
		// front overlay?, top overlay?, side overlay?
		true, false, false,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Advanced Centrifuge", "advanced_centrifuge", ADVCENTRIFUGE, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		225, event.progressBar(78, 43, "centrifuge"), event.efficiencyBar(38, 118), event.energyBar(14, 43),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		1, 6, 2, 6,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlot(36, 35).addSlots(106, 35, 3, 2),
		fluids => fluids.addSlots(36, 55, 2 , 1).addSlots(106, 73, 3, 2),
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Epileptic Stirred Tank Reactor", "stirred_tank", STIRR, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		185, event.progressBar(98, 43, "extract"), event.efficiencyBar(38, 80), event.energyBar(14, 43),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		0, 0, 3, 2,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => {},
		fluids => fluids.addSlots(36, 45, 3 , 1).addSlots(126, 45, 2, 1),
		// front overlay?, top overlay?, side overlay?
		true, true, false,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Bubble Column Reactor", "bubble_reactor", BUBBLE, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		185, event.progressBar(98, 33, "arrow"), event.efficiencyBar(38, 80), event.energyBar(14, 43),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		1, 0, 3, 2,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlot(36, 35),
		fluids => fluids.addSlots(36, 55, 3 , 1).addSlots(126, 35, 2, 1),
		// front overlay?, top overlay?, side overlay?
		true, true, false,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Gas Collector", "gas_collector", GASCOLLECT, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		175, event.progressBar(64, 33, "extract"), event.efficiencyBar(28, 65), event.energyBar(15, 33),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		1, 0, 0, 1,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlot(36, 35),
		fluids => fluids.addSlot(96, 35),
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Vacuum Chamber", "vacuum_chamber", VACUUM, ["steel", "electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		175, event.progressBar(79, 43, "extract"), event.efficiencyBar(28, 65), event.energyBar(15, 33),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		4, 4, 0, 0,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 35, 2, 2).addSlots(106, 35, 2, 2), 
		fluids => {},
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Sifter", "sifter", SIFTER, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		220, event.progressBar(78, 35, "macerate"), event.efficiencyBar(38, 112), event.energyBar(14, 36),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		1, 9, 1, 1,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlot(56, 37).addSlots(106, 29, 3, 3), //fluids => {},
		fluids => fluids.addSlot(36, 37).addSlot(106, 85),
		// front overlay?, top overlay?, side overlay?
		true, true, false,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Autoclave", "autoclave", AUTOCLAVE, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		185, event.progressBar(78, 43, "extract"), event.efficiencyBar(38, 80), event.energyBar(9, 43),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		2, 2, 2, 2,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(39, 35, 2, 1).addSlots(107, 35, 2, 1),
		fluids => fluids.addSlots(39, 55, 2 , 1).addSlots(107, 55, 2, 1),
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Electrostatic Separator", "es_separator", ESSEPARATOR, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		185, event.progressBar(88, 43, "magnet"), event.efficiencyBar(38, 80), event.energyBar(9, 43),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		3, 3, 3, 3,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(29, 35, 3, 1).addSlots(115, 35, 3, 1),
		fluids => fluids.addSlots(29, 55, 3 , 1).addSlots(115, 55, 3, 1),
		// front overlay?, top overlay?, side overlay?
		true, true, false,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Electromagnetic Separator", "em_separator", EMSEPARATOR, ["electric"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		185, event.progressBar(89, 34, "magnet"), event.efficiencyBar(38, 80), event.energyBar(9, 43),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		1, 3, 1, 2,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlot(67, 35).addSlots(115, 35, 3, 1),
		fluids => fluids.addSlot(49, 35).addSlots(115, 55, 2, 1),
		// front overlay?, top overlay?, side overlay?
		true, true, false,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Primitive Driller", "drill1", DRILL1, ["bronze"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		170, event.progressBar(78, 32, "arrow"), event.efficiencyBar(38, 106), event.energyBar(14, 34),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		4, 6, 0, 0,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 35, 2, 2).addSlots(106, 35, 3, 2), fluids => {},
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Rudimentary Driller", "drill2", DRILL2, ["bronze"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		170, event.progressBar(78, 32, "arrow"), event.efficiencyBar(38, 106), event.energyBar(14, 34),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		4, 6, 0, 0,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 35, 2, 2).addSlots(106, 35, 3, 2), fluids => {},
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Calibrated Driller", "drill3", DRILL3, ["bronze"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		190, event.progressBar(78, 32, "arrow"), event.efficiencyBar(38, 106), event.energyBar(14, 34),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		4, 9, 0, 0,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 35, 2, 2).addSlots(106, 35, 3, 3), fluids => {},
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Driller", "drill4", DRILL4, ["steel"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		190, event.progressBar(78, 32, "arrow"), event.efficiencyBar(38, 106), event.energyBar(14, 34),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		4, 9, 0, 0,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 35, 2, 2).addSlots(106, 35, 3, 3), fluids => {},
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Steam Boiler Prototype", "proto", PROTO, ["bronze"],
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		170, event.progressBar(78, 32, "arrow"), event.efficiencyBar(38, 106), event.energyBar(14, 34),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		2, 0, 1, 1,
		// Capacity for fluid slots (unused)
		4,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 35, 2, 1), 
		fluids => fluids.addSlots(26, 55, 1, 1).addSlots(106, 35, 1, 1),
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	
	// arrow centrifuge circuit compress extract furnace long_arrow macerate magnet slice triple_arrow wiremill

	
})

	
	


