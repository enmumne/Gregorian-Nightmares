StartupEvents.registry('item', event => {
	
	event.create('drilly:drill_group1').displayName('Group A token');
	event.create('drilly:drill_group2').displayName('Group B token');
	event.create('drilly:drill_group3').displayName('Group C token');
	event.create('drilly:drill_group4').displayName('Group D token');
	event.create('drilly:drill_group5').displayName('Group E token');
	
	event.create('drilly:tiny_tier1_experience').displayName('Tiny Pile of Tier 1 Experience');
	event.create('drilly:whole_tier1_experience').displayName('Tier 1 Experience');
	event.create('drilly:tiny_tier2_experience').displayName('Tiny Pile of Tier 2 Experience');
	event.create('drilly:whole_tier2_experience').displayName('Tier 2 Experience');
	event.create('drilly:tiny_tier3_experience').displayName('Tiny Pile of Tier 3 Experience');
	event.create('drilly:whole_tier3_experience').displayName('Tier 3 Experience');
	event.create('drilly:tiny_tier4_experience').displayName('Tiny Pile of Tier 4 Experience');
	event.create('drilly:whole_tier4_experience').displayName('Tier 4 Experience');
	
	event.create('drilly:copper_drill').displayName('Basic Copper Drill');
	event.create('drilly:copper_refined_drill').displayName('Refined Copper Drill');
	event.create('drilly:copper_bulky_drill').displayName('Bulky Copper Drill');
	event.create('drilly:bronze_base_drill').displayName('Basic Bronze Drill');
	event.create('drilly:bronze_refined_drill').displayName('Refined Bronze Drill');
	event.create('drilly:bronze_bulky_drill').displayName('Bulky Bronze Drill');
	event.create('drilly:iron_base_drill').displayName('Basic Iron Drill');
	event.create('drilly:iron_refined_drill').displayName('Refined Iron Drill');
	event.create('drilly:iron_bulky_drill').displayName('Bulky Iron Drill');
	event.create('drilly:steel_base_drill').displayName('Basic Steel Drill');
	event.create('drilly:steel_refined_drill').displayName('Refined Steel Drill');
	event.create('drilly:steel_bulky_drill').displayName('Bulky Steel Drill');
	
	event.create('drilly:dirty_copper_bulky_drill').displayName('Dirty Bulky Copper Drill');
	event.create('drilly:dirty_bronze_base_drill').displayName('Dirty Basic Bronze Drill');
	event.create('drilly:dirty_bronze_refined_drill').displayName('Dirty Refined Bronze Drill');
	event.create('drilly:dirty_bronze_bulky_drill').displayName('Dirty Bulky Bronze Drill');
	event.create('drilly:dirty_iron_base_drill').displayName('Dirty Basic Iron Drill');
	event.create('drilly:dirty_iron_refined_drill').displayName('Dirty Refined Iron Drill');
	event.create('drilly:dirty_iron_bulky_drill').displayName('Dirty Bulky Iron Drill');
	event.create('drilly:dirty_steel_base_drill').displayName('Dirty Basic Steel Drill');
	event.create('drilly:dirty_steel_refined_drill').displayName('Dirty Refined Steel Drill');
	event.create('drilly:dirty_steel_bulky_drill').displayName('Dirty Bulky Steel Drill');
	
})	

let DEHY;
let SALLOY;
let FEXTRACT;

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
		
	SALLOY = event.register("salloy")
        .withItemInputs()
        .withItemOutputs();
		
	FEXTRACT = event.register("fextract")
		.withItemInputs()
        .withItemOutputs()
		.withFluidInputs() 
        .withFluidOutputs();
		
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
		/* GENERAL PARAMETERS FIRST */
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Chemical Dehydrator", "dehy", DEHY, ["steel", "electric"],
		/* GUI CONFIGURATION */
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		200, event.progressBar(78, 45, "extract"), event.efficiencyBar(48, 106), event.energyBar(14, 44),
		/* SLOT CONFIGURATION */
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		2, 9, 2, 2,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 35, 2, 1).addSlots(106, 27, 3, 3), //fluids => {},
		fluids => fluids.addSlots(36, 55, 2, 1).addSlots(106, 85, 2, 1),
		/* MODEL CONFIGURATION */
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		/* GENERAL PARAMETERS FIRST */
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Alloy Smelter", "salloy", SALLOY, ["bronze", "steel", "electric"],
		/* GUI CONFIGURATION */
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		160, event.progressBar(78, 32, "furnace"), event.efficiencyBar(48, 106), event.energyBar(14, 34),
		/* SLOT CONFIGURATION */
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		2, 1, 0, 0,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 35, 2, 1).addSlots(106, 35, 1, 1), fluids => {},
		/* MODEL CONFIGURATION */
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		/* GENERAL PARAMETERS FIRST */
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Fluid Extractor", "fextract", FEXTRACT, ["steel", "electric"],
		/* GUI CONFIGURATION */
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		160, event.progressBar(78, 32, "extract"), event.efficiencyBar(48, 106), event.energyBar(14, 34),
		/* SLOT CONFIGURATION */
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		1, 1, 0, 1,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlot(36, 35).addSlot(106, 35),
		fluids => fluids.addSlot(126, 35),
		/* MODEL CONFIGURATION */
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		/* GENERAL PARAMETERS FIRST */
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Primitive Driller", "drill1", DRILL1, ["bronze"],
		/* GUI CONFIGURATION */
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		170, event.progressBar(78, 32, "arrow"), event.efficiencyBar(48, 106), event.energyBar(14, 34),
		/* SLOT CONFIGURATION */
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		4, 6, 0, 0,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 35, 2, 2).addSlots(106, 35, 3, 2), fluids => {},
		/* MODEL CONFIGURATION */
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		/* GENERAL PARAMETERS FIRST */
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Rudimentary Driller", "drill2", DRILL2, ["bronze"],
		/* GUI CONFIGURATION */
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		170, event.progressBar(78, 32, "arrow"), event.efficiencyBar(48, 106), event.energyBar(14, 34),
		/* SLOT CONFIGURATION */
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		4, 6, 0, 0,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 35, 2, 2).addSlots(106, 35, 3, 2), fluids => {},
		/* MODEL CONFIGURATION */
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		/* GENERAL PARAMETERS FIRST */
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Calibrated Driller", "drill3", DRILL3, ["bronze"],
		/* GUI CONFIGURATION */
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		170, event.progressBar(78, 32, "arrow"), event.efficiencyBar(48, 106), event.energyBar(14, 34),
		/* SLOT CONFIGURATION */
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		4, 6, 0, 0,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 35, 2, 2).addSlots(106, 35, 3, 2), fluids => {},
		/* MODEL CONFIGURATION */
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		/* GENERAL PARAMETERS FIRST */
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Driller", "drill4", DRILL4, ["steel"],
		/* GUI CONFIGURATION */
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		170, event.progressBar(78, 32, "arrow"), event.efficiencyBar(48, 106), event.energyBar(14, 34),
		/* SLOT CONFIGURATION */
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		4, 6, 0, 0,
		// Capacity for fluid slots
		16,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 35, 2, 2).addSlots(106, 35, 3, 2), fluids => {},
		/* MODEL CONFIGURATION */
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	event.craftingSingleBlock(
		/* GENERAL PARAMETERS FIRST */
		// English name, internal name, recipe type (see above), list of tiers (can be bronze/steel/electric)
		"Steam Boiler Prototype", "proto", PROTO, ["bronze"],
		/* GUI CONFIGURATION */
		// Background height (or -1 for default value), progress bar, efficiency bar, energy bar
		170, event.progressBar(78, 32, "arrow"), event.efficiencyBar(48, 106), event.energyBar(14, 34),
		/* SLOT CONFIGURATION */
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		2, 0, 1, 1,
		// Capacity for fluid slots (unused)
		4,
		// Slot positions: items and fluids.
		items => items.addSlots(36, 35, 2, 1), 
		fluids => fluids.addSlots(26, 55, 1, 1).addSlots(106, 35, 1, 1),
		/* MODEL CONFIGURATION */
		// front overlay?, top overlay?, side overlay?
		true, true, true,
	);
	
	
	// arrow centrifuge circuit compress extract furnace long_arrow macerate magnet slice triple_arrow wiremill

	
})

	
	


