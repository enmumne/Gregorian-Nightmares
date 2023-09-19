
StartupEvents.registry('block', event => {

event.create('geghilarity_fatmachines:ptfe_casing').material('iron').displayName('Chemically Inert PTFE Casing').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:ptfe_pipe_casing').material('iron').displayName('PTFE Pipe Casing').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:pyro_casing').material('iron').displayName('Pyro Casing').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)

event.create('geghilarity_fatmachines:nichrome_coil').material('iron').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:tungstensteel_coil').material('iron').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:hss-g_coil').material('iron').displayName('HSS-G Coil').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:naquadah_coil').material('iron').displayName('Naquadah Coil').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)

event.create('geghilarity_fatmachines:casing_solid_steel').material('iron').displayName('Solid Steel Machine Casing').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:casing_pipe_steel').material('iron').displayName('Steel Pipe Casing').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:steel_frame_box').material('iron').displayName('Steel Frame Box').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).defaultTranslucent()
event.create('geghilarity_fatmachines:invar_frame_box').material('iron').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).defaultTranslucent()
event.create('geghilarity_fatmachines:stainless_frame_box').material('iron').displayName('Stainless Steel Frame Box').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).defaultTranslucent()
event.create('geghilarity_fatmachines:machine_casing_firebox_steel').material('iron').displayName('Steel Firebox Casing').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:carbon_electrode_assembly').material('iron').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:ulv_casing').material('iron').displayName('ULV Machine Casing').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:muffler_hatch').material('iron').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:titanium_reinforced_borosilicate_glass_block').material('glass').hardness(3).tagBlock('minecraft:mineable/pickaxe').defaultTranslucent()

event.create('drilly:steam_turbine').material('iron').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('drilly:basic_engine').material('iron').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('drilly:shaft_power_bus').material('iron').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('drilly:hsla_frame_box').material('iron').displayName('HSLA Steel Frame Box').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).defaultTranslucent()
event.create('drilly:hsla_casing').material('iron').displayName('HSLA Steel Casing').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)

})

MIRegistrationEvents.registerFluidFuels(event => {
    // id of the fluid, amount of EU per mb of the fluid
    event.register("geghilarity:rocket_fuel", 16000);
});



/*
const $MachineRegistrationHelper = Java.loadClass('aztech.modern_industrialization.machines.init.MachineRegistrationHelper')
const $ReiMachineRecipes = Java.loadClass('aztech.modern_industrialization.compat.rei.machines.ReiMachineRecipes')
const $SteamCraftingMultiblockBlockEntity = Java.loadClass('aztech.modern_industrialization.machines.blockentities.multiblocks.SteamCraftingMultiblockBlockEntity')
const $MachineCasings = Java.loadClass('aztech.modern_industrialization.machines.models.MachineCasings')
*/

let PYRO;
let LCR;
let BF;
let BF2;
let BF3;
let BF4;
let BF5;

let evaporation;
let MINECLAY;

let ELECELL;
let ARCFURNACE;
let POLYTANK;
let SINTER;
let FBEDREACTOR;

let REACTIONFURNACE;

let DISSOLUTIONTANK;
let CRACKINGUNIT;

let STEAMALLOY;
let HSLA_BLAST;

let LVMINER;

MIMachineEvents.addMultiblockSlots("steam_blast_furnace", event => {
    event.itemOutputs.addSlot(102, 53);
})

MIMachineEvents.registerRecipeTypes(event => {
	PYRO = event.register("pyro")
        .withItemInputs() // enable item inputs
        .withItemOutputs() // enable item outputs
        .withFluidInputs() // enable fluid inputs
        .withFluidOutputs(); // enable fluid outputs
		
	LCR = event.register("lcr")
        .withItemInputs() 
        .withItemOutputs() 
        .withFluidInputs() 
        .withFluidOutputs(); 
		
	BF = event.register("blaster_furnace")
        .withItemInputs() 
        .withItemOutputs()
        .withFluidInputs() 
        .withFluidOutputs(); 
		
	BF2 = event.register("blaster_furnace2")
        .withItemInputs() 
        .withItemOutputs()
        .withFluidInputs() 
        .withFluidOutputs(); 

	BF3 = event.register("blaster_furnace3")
        .withItemInputs() 
        .withItemOutputs() 
        .withFluidInputs() 
        .withFluidOutputs(); 

	BF4 = event.register("blaster_furnace4")
        .withItemInputs() 
        .withItemOutputs() 
        .withFluidInputs() 
        .withFluidOutputs(); 	
		
	BF5 = event.register("blaster_furnace5")
        .withItemInputs() 
        .withItemOutputs()
        .withFluidInputs() 
        .withFluidOutputs();

    evaporation = event.register('evaporation')
        .withFluidInputs()
        .withItemInputs()
        .withItemOutputs();

    MINECLAY = event.register('mine_clay')
		.withItemInputs()
        .withFluidInputs()
        .withItemOutputs();	

	ELECELL = event.register('elecell')
		.withItemInputs()
        .withFluidInputs()
        .withItemOutputs()		
		.withFluidOutputs();
		
	ARCFURNACE = event.register('arc_furnace')
		.withItemInputs()
        .withFluidInputs()
        .withItemOutputs()		
		.withFluidOutputs();	
		
	REACTIONFURNACE = event.register('reaction_furnace')
		.withItemInputs()
        .withFluidInputs()
        .withItemOutputs()		
		.withFluidOutputs();	
		
	DISSOLUTIONTANK = event.register('dissolution_tank')
		.withItemInputs()
        .withFluidInputs()
        .withItemOutputs()		
		.withFluidOutputs();

	CRACKINGUNIT = event.register('cracking_unit')
		.withItemInputs()
        .withFluidInputs()
        .withItemOutputs()		
		.withFluidOutputs();	
	
	POLYTANK = event.register('poly_tank')
		.withItemInputs()
        .withFluidInputs()
        .withItemOutputs()		
		.withFluidOutputs();
	
	SINTER = event.register('sintering_oven')
		.withItemInputs()
        .withFluidInputs()
        .withItemOutputs()		
		.withFluidOutputs();
		
	FBEDREACTOR = event.register('fluidized_bed_reactor')
		.withItemInputs()
        .withFluidInputs()
        .withItemOutputs()		
		.withFluidOutputs();	
		
	STEAMALLOY = event.register('alloy_smelter')
		.withItemInputs()
        .withFluidInputs()
        .withItemOutputs();		
		
	HSLA_BLAST = event.register('hsla_blast')
		.withItemInputs()
        .withItemOutputs();	
		
	LVMINER = event.register('lv_miner')
		.withItemInputs()
		.withFluidInputs()
        .withItemOutputs();		

});

MIMachineEvents.registerCasings(event => {
	event.register("pyro_casing")
	event.register("lcr_casing")
	event.register("mudbricks")
	event.register("solid_steel")
	event.register("ulv_casing")
	event.register("bronze_casing")
	event.register("hsla_casing")
});

MIMachineEvents.registerMachines(event => {
	console.log('Registering machines')
	
	const elecellHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
    const solidsteelMember = event.memberOfBlock("geghilarity_fatmachines:casing_solid_steel");
    const fluidpipeMember = event.memberOfBlock("geghilarity_fatmachines:casing_pipe_steel");
    const elecellShape = event.layeredShape("solid_steel", [
        [ " HHH ", "     ", " HHH ", "     " ],
		[ "HHHHH", " DDD ", "HDDDH", " DDD " ],
        [ "HHHHH", " DDD ", "HDDDH", " DDD " ],
        [ " HHH ", "  #  ", " HHH ", "     " ],
    ])
        .key("H", solidsteelMember, elecellHatch)
        .key("D", fluidpipeMember, event.noHatch())
        .build();
		
	event.simpleElectricCraftingMultiBlock(
        // English name, internal name, recipe type, multiblock shape
        "Electrolytic Cell", "elecell", ELECELL, elecellShape,
        // REI progress bar
        event.progressBar(94, 33, "furnace"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlots(34, 35, 3, 1), itemOutputs => itemOutputs.addSlots(120, 35, 3, 1),
        fluidInputs => fluidInputs.addSlots(34, 55, 2, 1), fluidOutputs => fluidOutputs.addSlots(120, 55, 3, 2),
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "solid_steel", "elecell", true, false, false,
    );	
	
	const arcfurnaceHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
    //const solidsteelMember = event.memberOfBlock("geghilarity_fatmachines:casing_solid_steel");
    const fireboxMember = event.memberOfBlock("geghilarity_fatmachines:machine_casing_firebox_steel");
	const carbonMember = event.memberOfBlock("geghilarity_fatmachines:carbon_electrode_assembly");
    const arcfurnaceShape = event.layeredShape("solid_steel", [
        [ " HHH ", " HHH ", " DDD ", "     " ],
		[ "HHHHH", "H E H", "D E D", " HEH " ],
        [ "EHHHE", "E   E", "E   E", "EHHHE" ],
        [ "HHHHH", "H   H", "D   D", " HHH " ],
		[ " HHH ", " H#H ", " DDD ", "     " ],
    ])
        .key("H", solidsteelMember, arcfurnaceHatch)
        .key("D", fireboxMember, event.noHatch())
		.key("E", carbonMember, event.noHatch())
        .build();
		
	event.simpleElectricCraftingMultiBlock(
        // English name, internal name, recipe type, multiblock shape
        "Arc Furnace", "arc_furnace", ARCFURNACE, arcfurnaceShape,
        // REI progress bar
        event.progressBar(84, 33, "furnace"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlots(34, 35, 2, 2), itemOutputs => itemOutputs.addSlots(120, 35, 3, 1),
        fluidInputs => fluidInputs.addSlots(34, 75, 2, 1), fluidOutputs => fluidOutputs.addSlots(120, 55, 3, 2),
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "solid_steel", "arc_furnace", true, false, false,
    );
	
	const polytankHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
    //const solidsteelMember = event.memberOfBlock("geghilarity_fatmachines:casing_solid_steel");
    const frameMember = event.memberOfBlock("geghilarity_fatmachines:steel_frame_box");
    const polytankShape = event.layeredShape("solid_steel", [
        [ "E E", "HHH", "HHH", "HHH", "HHH"],
		[ "   ", "HDH", "HDH", "HDH", "HDH"],
        [ "E E", "H#H", "HHH", "HHH", "HHH"],
    ])
        .key("H", solidsteelMember, polytankHatch)
        .key("D", fluidpipeMember, event.noHatch())
		.key("E", frameMember, event.noHatch())
        .build();
		
	event.simpleElectricCraftingMultiBlock(
        // English name, internal name, recipe type, multiblock shape
        "Polymerization Tank", "poly_tank", POLYTANK, polytankShape,
        // REI progress bar
        event.progressBar(84, 33, "furnace"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlots(34, 35, 2, 1), itemOutputs => itemOutputs.addSlot(120, 35),
        fluidInputs => fluidInputs.addSlots(34, 55, 2, 1), fluidOutputs => fluidOutputs.addSlot(120, 55),
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "solid_steel", "poly_tank", true, false, false,
    );
	
	
	
	////
    
    event.craftingSingleBlock(
        'Evaporation Tank', 'evaporation_tank', evaporation, ['bronze'],
        //GUI
        -1, event.progressBar(98,33, 'extract'), event.efficiencyBar(48, 86), event.energyBar(14, 44),
        // Slots (item i/o, fluid i/o)
        1, 1, 1, 0,
        8,
        items => items.addSlots(70,35, 1, 1).addSlots(130, 35, 1, 1),
        fluids => fluids.addSlots(50,35, 1, 1),
        // Overlay
        false, false, false
    )

    const clayQuarryCasing = 'mudbricks'
    const clayQuarryHatches = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output");
    const clayQuarryMud = event.memberOfBlock('minecraft:packed_mud')
    const clayQuarryMudBricks = event.memberOfBlock('minecraft:mud_bricks')
    const clayQuarryWall = event.memberOfBlock("minecraft:mud_brick_wall")
    const clayQuarryBuilder = event.startShape(clayQuarryCasing)
        .add(0, 1, 0, clayQuarryMudBricks, clayQuarryHatches)
        .add(-1, 0, 1, clayQuarryMudBricks, clayQuarryHatches)
        .add(-1, 0, 2, clayQuarryMudBricks, clayQuarryHatches)
        .add(0, 0, 1, clayQuarryMudBricks, event.noHatch())
        .add(0, 0, 2, clayQuarryMudBricks, clayQuarryHatches)
        .add(1, 0, 1, clayQuarryMudBricks, clayQuarryHatches)
        .add(1, 0, 2, clayQuarryMudBricks, clayQuarryHatches)
        // walls
        .add(-1, 0, 0, clayQuarryWall, event.noHatch())
        .add(-1, 1, 0, clayQuarryWall, event.noHatch())
        .add(1, 0, 0, clayQuarryWall, event.noHatch())
        .add(1, 1, 0, clayQuarryWall, event.noHatch())
        .add(-1, 1, 1, clayQuarryWall, event.noHatch())
        .add(-1, 1, 2, clayQuarryWall, event.noHatch())
        .add(0, 1, 2, clayQuarryWall, event.noHatch())
        .add(1, 1, 1, clayQuarryWall, event.noHatch())
        .add(1, 1, 2, clayQuarryWall, event.noHatch())
    addAround(clayQuarryBuilder, 2, -1, clayQuarryMud, event.noHatch())
	
	const clayShape = clayQuarryBuilder.build();
	
	event.simpleSteamCraftingMultiBlock(
        // English name, internal name, recipe type, multiblock shape
        "Clay Quarry", "clay_quarry", MINECLAY, clayShape,
        /* REI DISPLAY CONFIGURATION */
        // REI progress bar
        event.progressBar(94, 33, "extract"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlots(34, 35, 3, 1), itemOutputs => itemOutputs.addSlots(120, 35, 2, 1),
        fluidInputs => fluidInputs.addSlot(34, 55), fluidOutputs => fluidOutputs.addSlot(120, 55),
        /* MODEL CONFIGUATION */
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "mudbricks", "clay_quarry", true, false, false,
    );
	

    //registerSteamMultiblock('clay_quarry', 'Clay Quarry', clayQuarryBuilder.build(), mineClay, clayQuarryCasing)
	
	//////////////////
	
    const pyroHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
    const pyrocasing = event.memberOfBlock("geghilarity_fatmachines:pyro_casing");
    const cupronickelCoilMember = event.memberOfBlock("modern_industrialization:cupronickel_coil");
    const pyroShapeBuilder = event.startShape("pyro_casing");
    for (let x = -1; x <= 1; x++) {
        for (let y= -1; y <= 1; y++) {
            for (let z = 0; z <= 3; z++) {
                if (z === 1 || z === 2) {
                    if (x !== 0 || y !== 0) {
                        pyroShapeBuilder.add(x, y, z, cupronickelCoilMember, event.noHatch());
                    }
                } else {
                    pyroShapeBuilder.add(x, y, z, pyrocasing, pyroHatch);
                }
            }
        }
    }
    const pyroShape = pyroShapeBuilder.build();

    event.simpleElectricCraftingMultiBlock(
        /* GENERAL PARAMETERS */
        // English name, internal name, recipe type, multiblock shape
		
        "Pyrolyse Oven", "pyro", PYRO, pyroShape,
		
        /* REI DISPLAY CONFIGURATION */
        // REI progress bar
		
        event.progressBar(77, 33, "furnace"),
		
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		
        itemInputs => itemInputs.addSlots(56, 35, 1, 2), itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(36, 35), fluidOutputs => fluidOutputs.addSlot(122, 35),
		
        /* MODEL CONFIGUATION */
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
		
        "pyro_casing", "pyro", true, false, false,
    );
	
	const sinterHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
    //const solidsteelMember = event.memberOfBlock("geghilarity_fatmachines:casing_solid_steel");
    //const frameMember = event.memberOfBlock("geghilarity_fatmachines:steel_frame_box");
	const firecasing = event.memberOfBlock("modern_industrialization:fire_clay_bricks");
	const ulvcasing = event.memberOfBlock("geghilarity_fatmachines:ulv_casing");
    const sinterShape = event.layeredShape("ulv_casing", [
		[ "HHHHH", "HHHHH", "HHHHH", " HHH ",],
		[ "     ", " BBB ", " BBB ", " BBB ",],
		[ "EEEEE", "EBBBE", "EBBBE", " BBB ",],
        [ "     ", " BBB ", " BBB ", " BBB ",],	
        [ "EEEEE", "EBBBE", "EBBBE", " BBB ",],
		[ "     ", " BBB ", " BBB ", " BBB ",],
        [ "HHHHH", "HH#HH", "HHHHH", " HHH ",],
    ])
        .key("H", ulvcasing, sinterHatch)
		.key("E", frameMember, event.noHatch())
		.key("B", firecasing, event.noHatch())
        .build();
		
	event.simpleElectricCraftingMultiBlock(
        // English name, internal name, recipe type, multiblock shape
        "Sintering Oven", "sintering_oven", SINTER, sinterShape,
        // REI progress bar
        event.progressBar(90, 33, "furnace"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlots(54, 35, 2, 2), itemOutputs => itemOutputs.addSlots(115, 35, 2, 2),
        fluidInputs => fluidInputs.addSlots(34, 35, 1, 2), fluidOutputs => fluidOutputs.addSlots(154, 35, 1, 2),
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "ulv_casing", "sintering_oven", true, false, false,
    );
	
	const stalloyHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
    //const solidsteelMember = event.memberOfBlock("geghilarity_fatmachines:casing_solid_steel");
    //const frameMember = event.memberOfBlock("geghilarity_fatmachines:steel_frame_box");
	const bronzeplatedbricks = event.memberOfBlock("modern_industrialization:bronze_plated_bricks");
	const bronze_casing = event.memberOfBlock("modern_industrialization:bronze_machine_casing");
	const bronzepipe = event.memberOfBlock("modern_industrialization:bronze_machine_casing_pipe");
	const chimney = event.memberOfBlock("sootychimneys:dirty_brick_chimney");
	const normobrick = event.memberOfBlock("minecraft:bricks");
    const stalloyShape = event.layeredShape("bronze_casing", [
		[ "EEE", "BBB", "BBB", "   ",],
		[ "EHE", "BCB", "BCB", " D ",],
		[ "EHE", "CCC", "BBB", "   ",],
        [ "EHE", " # ", "   ", "   ",],	
    ])
        .key("H", bronzeplatedbricks, event.noHatch())
		.key("E", bronze_casing, stalloyHatch)
		.key("B", normobrick, event.noHatch())
		.key("C", bronzepipe, event.noHatch())
		.key("D", chimney, event.noHatch())
        .build();
		
	event.simpleSteamCraftingMultiBlock(
        // English name, internal name, recipe type, multiblock shape
        "Steam Alloy Smelter", "steam_alloy", STEAMALLOY, stalloyShape,
        // REI progress bar
        event.progressBar(91, 33, "furnace"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlots(54, 35, 2, 1), itemOutputs => itemOutputs.addSlot(115, 35),
        fluidInputs => fluidInputs.addSlot(54, 55), fluidOutputs => {},
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "bronze_plated_bricks", "steam_alloy", true, false, false,
    );
	
    	
	const heatproofMem = event.memberOfBlock("geghilarity_fatmachines:ptfe_casing");
	const heatproofMember = event.memberOfBlock("modern_industrialization:heatproof_machine_casing");
	
	
	// new EBF
	const ebfHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
	const kanthalCoilMember = event.memberOfBlock("modern_industrialization:kanthal_coil");
	const bfShapeBuilder = event.startShape("heatproof_machine_casing");
	
	
	//top
	bfShapeBuilder.add(+1, 3, 2, heatproofMember, ebfHatch);
	bfShapeBuilder.add(-1, 3, 2, heatproofMember, ebfHatch);
	bfShapeBuilder.add(0, 3, 2, heatproofMember, ebfHatch);
	
	bfShapeBuilder.add(+1, 3, 1, heatproofMember, ebfHatch);
	bfShapeBuilder.add(-1, 3, 1, heatproofMember, ebfHatch);
	bfShapeBuilder.add(0, 3, 1, heatproofMember, ebfHatch);
	
	bfShapeBuilder.add(+1, 3, 0, heatproofMember, ebfHatch);
	bfShapeBuilder.add(-1, 3, 0, heatproofMember, ebfHatch);
	bfShapeBuilder.add(0, 3, 0, heatproofMember, ebfHatch);
	
	//center
	bfShapeBuilder.add(+1, 2, 2, kanthalCoilMember, event.noHatch());
	bfShapeBuilder.add(-1, 2, 2, kanthalCoilMember, event.noHatch());
	bfShapeBuilder.add(0, 2, 2, kanthalCoilMember, event.noHatch());
	
	bfShapeBuilder.add(+1, 2, 1, kanthalCoilMember, event.noHatch());
	bfShapeBuilder.add(-1, 2, 1, kanthalCoilMember, event.noHatch());
	
	bfShapeBuilder.add(+1, 2, 0, kanthalCoilMember, event.noHatch());
	bfShapeBuilder.add(-1, 2, 0, kanthalCoilMember, event.noHatch());
	bfShapeBuilder.add(0, 2, 0, kanthalCoilMember, event.noHatch());
	
	bfShapeBuilder.add(+1, 1, 2, kanthalCoilMember, event.noHatch());
	bfShapeBuilder.add(-1, 1, 2, kanthalCoilMember, event.noHatch());
	bfShapeBuilder.add(0, 1, 2, kanthalCoilMember, event.noHatch());
	
	bfShapeBuilder.add(+1, 1, 1, kanthalCoilMember, event.noHatch());
	bfShapeBuilder.add(-1, 1, 1, kanthalCoilMember, event.noHatch());
	
	bfShapeBuilder.add(+1, 1, 0, kanthalCoilMember, event.noHatch());
	bfShapeBuilder.add(-1, 1, 0, kanthalCoilMember, event.noHatch());
	bfShapeBuilder.add(0, 1, 0, kanthalCoilMember, event.noHatch());
	
	//base
	bfShapeBuilder.add(+1, 0, 2, heatproofMember, ebfHatch);
	bfShapeBuilder.add(-1, 0, 2, heatproofMember, ebfHatch);
	bfShapeBuilder.add(0, 0, 2, heatproofMember, ebfHatch);
	
	bfShapeBuilder.add(+1, 0, 1, heatproofMember, ebfHatch);
	bfShapeBuilder.add(-1, 0, 1, heatproofMember, ebfHatch);
	bfShapeBuilder.add(0, 0, 1, heatproofMember, ebfHatch);
	
	bfShapeBuilder.add(+1, 0, 0, heatproofMember, ebfHatch);
	bfShapeBuilder.add(-1, 0, 0, heatproofMember, ebfHatch);
	
	bfShapeBuilder.add(0, 0, 0, heatproofMember);

    const bfShape = bfShapeBuilder.build();
	
	event.simpleElectricCraftingMultiBlock(
        /* GENERAL PARAMETERS */
        // English name, internal name, recipe type, multiblock shape
        "Blaster Furnace", "blaster_furnace", BF, bfShape,
        /* REI DISPLAY CONFIGURATION */
        // REI progress bar
        event.progressBar(94, 33, "furnace"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlots(34, 35, 3, 1), itemOutputs => itemOutputs.addSlots(120, 35, 2, 1),
        fluidInputs => fluidInputs.addSlot(34, 55), fluidOutputs => fluidOutputs.addSlot(120, 55),
        /* MODEL CONFIGUATION */
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "heatproof_machine_casing", "bf", true, false, false,
    );
	
	const nichromeCoilMember = event.memberOfBlock("geghilarity_fatmachines:nichrome_coil");
	const bf2ShapeBuilder = event.startShape("heatproof_machine_casing");
	
	
	//top
	bf2ShapeBuilder.add(+1, 3, 2, heatproofMember, ebfHatch);
	bf2ShapeBuilder.add(-1, 3, 2, heatproofMember, ebfHatch);
	bf2ShapeBuilder.add(0, 3, 2, heatproofMember, ebfHatch);
	
	bf2ShapeBuilder.add(+1, 3, 1, heatproofMember, ebfHatch);
	bf2ShapeBuilder.add(-1, 3, 1, heatproofMember, ebfHatch);
	bf2ShapeBuilder.add(0, 3, 1, heatproofMember, ebfHatch);
	
	bf2ShapeBuilder.add(+1, 3, 0, heatproofMember, ebfHatch);
	bf2ShapeBuilder.add(-1, 3, 0, heatproofMember, ebfHatch);
	bf2ShapeBuilder.add(0, 3, 0, heatproofMember, ebfHatch);
	
	//center
	bf2ShapeBuilder.add(+1, 2, 2, nichromeCoilMember, event.noHatch());
	bf2ShapeBuilder.add(-1, 2, 2, nichromeCoilMember, event.noHatch());
	bf2ShapeBuilder.add(0, 2, 2, nichromeCoilMember, event.noHatch());
	
	bf2ShapeBuilder.add(+1, 2, 1, nichromeCoilMember, event.noHatch());
	bf2ShapeBuilder.add(-1, 2, 1, nichromeCoilMember, event.noHatch());
	
	bf2ShapeBuilder.add(+1, 2, 0, nichromeCoilMember, event.noHatch());
	bf2ShapeBuilder.add(-1, 2, 0, nichromeCoilMember, event.noHatch());
	bf2ShapeBuilder.add(0, 2, 0, nichromeCoilMember, event.noHatch());
	
	bf2ShapeBuilder.add(+1, 1, 2, nichromeCoilMember, event.noHatch());
	bf2ShapeBuilder.add(-1, 1, 2, nichromeCoilMember, event.noHatch());
	bf2ShapeBuilder.add(0, 1, 2, nichromeCoilMember, event.noHatch());
	
	bf2ShapeBuilder.add(+1, 1, 1, nichromeCoilMember, event.noHatch());
	bf2ShapeBuilder.add(-1, 1, 1, nichromeCoilMember, event.noHatch());
	
	bf2ShapeBuilder.add(+1, 1, 0, nichromeCoilMember, event.noHatch());
	bf2ShapeBuilder.add(-1, 1, 0, nichromeCoilMember, event.noHatch());
	bf2ShapeBuilder.add(0, 1, 0, nichromeCoilMember, event.noHatch());
	
	//base
	bf2ShapeBuilder.add(+1, 0, 2, heatproofMember, ebfHatch);
	bf2ShapeBuilder.add(-1, 0, 2, heatproofMember, ebfHatch);
	bf2ShapeBuilder.add(0, 0, 2, heatproofMember, ebfHatch);
	
	bf2ShapeBuilder.add(+1, 0, 1, heatproofMember, ebfHatch);
	bf2ShapeBuilder.add(-1, 0, 1, heatproofMember, ebfHatch);
	bf2ShapeBuilder.add(0, 0, 1, heatproofMember, ebfHatch);
	
	bf2ShapeBuilder.add(+1, 0, 0, heatproofMember, ebfHatch);
	bf2ShapeBuilder.add(-1, 0, 0, heatproofMember, ebfHatch);
	
	bf2ShapeBuilder.add(0, 0, 0, heatproofMember);

    const bf2Shape = bf2ShapeBuilder.build();
	
	event.simpleElectricCraftingMultiBlock(
        /* GENERAL PARAMETERS */
        // English name, internal name, recipe type, multiblock shape
        "Blaster Furnace (nichrome)", "blaster_furnace2", BF2, bf2Shape,
        /* REI DISPLAY CONFIGURATION */
        // REI progress bar
        event.progressBar(94, 33, "furnace"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlots(34, 35, 3, 1), itemOutputs => itemOutputs.addSlots(120, 35, 2, 1),
        fluidInputs => fluidInputs.addSlot(34, 55), fluidOutputs => fluidOutputs.addSlot(120, 55),
        /* MODEL CONFIGUATION */
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "heatproof_machine_casing", "bf2", true, false, false,
    );
	
	const tungstensteelCoilMember = event.memberOfBlock("geghilarity_fatmachines:tungstensteel_coil");
	const bf3ShapeBuilder = event.startShape("heatproof_machine_casing");
	
	
	//top
	bf3ShapeBuilder.add(+1, 3, 2, heatproofMember, ebfHatch);
	bf3ShapeBuilder.add(-1, 3, 2, heatproofMember, ebfHatch);
	bf3ShapeBuilder.add(0, 3, 2, heatproofMember, ebfHatch);
	
	bf3ShapeBuilder.add(+1, 3, 1, heatproofMember, ebfHatch);
	bf3ShapeBuilder.add(-1, 3, 1, heatproofMember, ebfHatch);
	bf3ShapeBuilder.add(0, 3, 1, heatproofMember, ebfHatch);
	
	bf3ShapeBuilder.add(+1, 3, 0, heatproofMember, ebfHatch);
	bf3ShapeBuilder.add(-1, 3, 0, heatproofMember, ebfHatch);
	bf3ShapeBuilder.add(0, 3, 0, heatproofMember, ebfHatch);
	
	//center
	bf3ShapeBuilder.add(+1, 2, 2, tungstensteelCoilMember, event.noHatch());
	bf3ShapeBuilder.add(-1, 2, 2, tungstensteelCoilMember, event.noHatch());
	bf3ShapeBuilder.add(0, 2, 2, tungstensteelCoilMember, event.noHatch());
	
	bf3ShapeBuilder.add(+1, 2, 1, tungstensteelCoilMember, event.noHatch());
	bf3ShapeBuilder.add(-1, 2, 1, tungstensteelCoilMember, event.noHatch());
	
	bf3ShapeBuilder.add(+1, 2, 0, tungstensteelCoilMember, event.noHatch());
	bf3ShapeBuilder.add(-1, 2, 0, tungstensteelCoilMember, event.noHatch());
	bf3ShapeBuilder.add(0, 2, 0, tungstensteelCoilMember, event.noHatch());
	
	bf3ShapeBuilder.add(+1, 1, 2, tungstensteelCoilMember, event.noHatch());
	bf3ShapeBuilder.add(-1, 1, 2, tungstensteelCoilMember, event.noHatch());
	bf3ShapeBuilder.add(0, 1, 2, tungstensteelCoilMember, event.noHatch());
	
	bf3ShapeBuilder.add(+1, 1, 1, tungstensteelCoilMember, event.noHatch());
	bf3ShapeBuilder.add(-1, 1, 1, tungstensteelCoilMember, event.noHatch());
	
	bf3ShapeBuilder.add(+1, 1, 0, tungstensteelCoilMember, event.noHatch());
	bf3ShapeBuilder.add(-1, 1, 0, tungstensteelCoilMember, event.noHatch());
	bf3ShapeBuilder.add(0, 1, 0, tungstensteelCoilMember, event.noHatch());
	
	//base
	bf3ShapeBuilder.add(+1, 0, 2, heatproofMember, ebfHatch);
	bf3ShapeBuilder.add(-1, 0, 2, heatproofMember, ebfHatch);
	bf3ShapeBuilder.add(0, 0, 2, heatproofMember, ebfHatch);
	
	bf3ShapeBuilder.add(+1, 0, 1, heatproofMember, ebfHatch);
	bf3ShapeBuilder.add(-1, 0, 1, heatproofMember, ebfHatch);
	bf3ShapeBuilder.add(0, 0, 1, heatproofMember, ebfHatch);
	
	bf3ShapeBuilder.add(+1, 0, 0, heatproofMember, ebfHatch);
	bf3ShapeBuilder.add(-1, 0, 0, heatproofMember, ebfHatch);
	
	bf3ShapeBuilder.add(0, 0, 0, heatproofMember);

    const bf3Shape = bf3ShapeBuilder.build();
	
	event.simpleElectricCraftingMultiBlock(
        /* GENERAL PARAMETERS */
        // English name, internal name, recipe type, multiblock shape
        "Blaster Furnace (tungstensteel)", "blaster_furnace3", BF3, bf3Shape,
        /* REI DISPLAY CONFIGURATION */
        // REI progress bar
        event.progressBar(94, 33, "furnace"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlots(34, 35, 3, 1), itemOutputs => itemOutputs.addSlots(120, 35, 2, 1),
        fluidInputs => fluidInputs.addSlots(34, 55, 2, 1), fluidOutputs => fluidOutputs.addSlots(120, 55, 2, 1),
        /* MODEL CONFIGUATION */
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "heatproof_machine_casing", "bf3", true, false, false,
    );
	
	const hssgCoilMember = event.memberOfBlock("geghilarity_fatmachines:hss-g_coil");
	const bf4ShapeBuilder = event.startShape("heatproof_machine_casing");
	
	
	//top
	bf4ShapeBuilder.add(+1, 3, 2, heatproofMember, ebfHatch);
	bf4ShapeBuilder.add(-1, 3, 2, heatproofMember, ebfHatch);
	bf4ShapeBuilder.add(0, 3, 2, heatproofMember, ebfHatch);
	
	bf4ShapeBuilder.add(+1, 3, 1, heatproofMember, ebfHatch);
	bf4ShapeBuilder.add(-1, 3, 1, heatproofMember, ebfHatch);
	bf4ShapeBuilder.add(0, 3, 1, heatproofMember, ebfHatch);
	
	bf4ShapeBuilder.add(+1, 3, 0, heatproofMember, ebfHatch);
	bf4ShapeBuilder.add(-1, 3, 0, heatproofMember, ebfHatch);
	bf4ShapeBuilder.add(0, 3, 0, heatproofMember, ebfHatch);
	
	//center
	bf4ShapeBuilder.add(+1, 2, 2, hssgCoilMember, event.noHatch());
	bf4ShapeBuilder.add(-1, 2, 2, hssgCoilMember, event.noHatch());
	bf4ShapeBuilder.add(0, 2, 2, hssgCoilMember, event.noHatch());
	
	bf4ShapeBuilder.add(+1, 2, 1, hssgCoilMember, event.noHatch());
	bf4ShapeBuilder.add(-1, 2, 1, hssgCoilMember, event.noHatch());
	
	bf4ShapeBuilder.add(+1, 2, 0, hssgCoilMember, event.noHatch());
	bf4ShapeBuilder.add(-1, 2, 0, hssgCoilMember, event.noHatch());
	bf4ShapeBuilder.add(0, 2, 0, hssgCoilMember, event.noHatch());
	
	bf4ShapeBuilder.add(+1, 1, 2, hssgCoilMember, event.noHatch());
	bf4ShapeBuilder.add(-1, 1, 2, hssgCoilMember, event.noHatch());
	bf4ShapeBuilder.add(0, 1, 2, hssgCoilMember, event.noHatch());
	
	bf4ShapeBuilder.add(+1, 1, 1, hssgCoilMember, event.noHatch());
	bf4ShapeBuilder.add(-1, 1, 1, hssgCoilMember, event.noHatch());
	
	bf4ShapeBuilder.add(+1, 1, 0, hssgCoilMember, event.noHatch());
	bf4ShapeBuilder.add(-1, 1, 0, hssgCoilMember, event.noHatch());
	bf4ShapeBuilder.add(0, 1, 0, hssgCoilMember, event.noHatch());
	
	//base
	bf4ShapeBuilder.add(+1, 0, 2, heatproofMember, ebfHatch);
	bf4ShapeBuilder.add(-1, 0, 2, heatproofMember, ebfHatch);
	bf4ShapeBuilder.add(0, 0, 2, heatproofMember, ebfHatch);
	
	bf4ShapeBuilder.add(+1, 0, 1, heatproofMember, ebfHatch);
	bf4ShapeBuilder.add(-1, 0, 1, heatproofMember, ebfHatch);
	bf4ShapeBuilder.add(0, 0, 1, heatproofMember, ebfHatch);
	
	bf4ShapeBuilder.add(+1, 0, 0, heatproofMember, ebfHatch);
	bf4ShapeBuilder.add(-1, 0, 0, heatproofMember, ebfHatch);
	
	bf4ShapeBuilder.add(0, 0, 0, heatproofMember);

    const bf4Shape = bf4ShapeBuilder.build();
	
	event.simpleElectricCraftingMultiBlock(
        /* GENERAL PARAMETERS */
        // English name, internal name, recipe type, multiblock shape
        "Blaster Furnace (HSS-G)", "blaster_furnace4", BF4, bf4Shape,
        /* REI DISPLAY CONFIGURATION */
        // REI progress bar
        event.progressBar(94, 33, "furnace"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlots(34, 35, 3, 1), itemOutputs => itemOutputs.addSlots(120, 35, 2, 1),
        fluidInputs => fluidInputs.addSlots(34, 55, 2, 1), fluidOutputs => fluidOutputs.addSlots(120, 55, 2, 1),
        /* MODEL CONFIGUATION */
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "heatproof_machine_casing", "bf4", true, false, false,
    );
	
	const naqCoilMember = event.memberOfBlock("geghilarity_fatmachines:naquadah_coil");
	const bf5ShapeBuilder = event.startShape("heatproof_machine_casing");
	
	
	//top
	bf5ShapeBuilder.add(+1, 3, 2, heatproofMember, ebfHatch);
	bf5ShapeBuilder.add(-1, 3, 2, heatproofMember, ebfHatch);
	bf5ShapeBuilder.add(0, 3, 2, heatproofMember, ebfHatch);
	
	bf5ShapeBuilder.add(+1, 3, 1, heatproofMember, ebfHatch);
	bf5ShapeBuilder.add(-1, 3, 1, heatproofMember, ebfHatch);
	bf5ShapeBuilder.add(0, 3, 1, heatproofMember, ebfHatch);
	
	bf5ShapeBuilder.add(+1, 3, 0, heatproofMember, ebfHatch);
	bf5ShapeBuilder.add(-1, 3, 0, heatproofMember, ebfHatch);
	bf5ShapeBuilder.add(0, 3, 0, heatproofMember, ebfHatch);
	
	//center
	bf5ShapeBuilder.add(+1, 2, 2, naqCoilMember, event.noHatch());
	bf5ShapeBuilder.add(-1, 2, 2, naqCoilMember, event.noHatch());
	bf5ShapeBuilder.add(0, 2, 2, naqCoilMember, event.noHatch());
	
	bf5ShapeBuilder.add(+1, 2, 1, naqCoilMember, event.noHatch());
	bf5ShapeBuilder.add(-1, 2, 1, naqCoilMember, event.noHatch());
	
	bf5ShapeBuilder.add(+1, 2, 0, naqCoilMember, event.noHatch());
	bf5ShapeBuilder.add(-1, 2, 0, naqCoilMember, event.noHatch());
	bf5ShapeBuilder.add(0, 2, 0, naqCoilMember, event.noHatch());
	
	bf5ShapeBuilder.add(+1, 1, 2, naqCoilMember, event.noHatch());
	bf5ShapeBuilder.add(-1, 1, 2, naqCoilMember, event.noHatch());
	bf5ShapeBuilder.add(0, 1, 2, naqCoilMember, event.noHatch());
	
	bf5ShapeBuilder.add(+1, 1, 1, naqCoilMember, event.noHatch());
	bf5ShapeBuilder.add(-1, 1, 1, naqCoilMember, event.noHatch());
	
	bf5ShapeBuilder.add(+1, 1, 0, naqCoilMember, event.noHatch());
	bf5ShapeBuilder.add(-1, 1, 0, naqCoilMember, event.noHatch());
	bf5ShapeBuilder.add(0, 1, 0, naqCoilMember, event.noHatch());
	
	//base
	bf5ShapeBuilder.add(+1, 0, 2, heatproofMember, ebfHatch);
	bf5ShapeBuilder.add(-1, 0, 2, heatproofMember, ebfHatch);
	bf5ShapeBuilder.add(0, 0, 2, heatproofMember, ebfHatch);
	
	bf5ShapeBuilder.add(+1, 0, 1, heatproofMember, ebfHatch);
	bf5ShapeBuilder.add(-1, 0, 1, heatproofMember, ebfHatch);
	bf5ShapeBuilder.add(0, 0, 1, heatproofMember, ebfHatch);
	
	bf5ShapeBuilder.add(+1, 0, 0, heatproofMember, ebfHatch);
	bf5ShapeBuilder.add(-1, 0, 0, heatproofMember, ebfHatch);
	
	bf5ShapeBuilder.add(0, 0, 0, heatproofMember);

    const bf5Shape = bf5ShapeBuilder.build();
	
	event.simpleElectricCraftingMultiBlock(
        /* GENERAL PARAMETERS */
        // English name, internal name, recipe type, multiblock shape
        "Blaster Furnace (Naquadah)", "blaster_furnace5", BF5, bf5Shape,
        /* REI DISPLAY CONFIGURATION */
        // REI progress bar
        event.progressBar(94, 33, "furnace"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlots(34, 35, 3, 1), itemOutputs => itemOutputs.addSlots(120, 35, 2, 1),
        fluidInputs => fluidInputs.addSlots(34, 55, 2, 1), fluidOutputs => fluidOutputs.addSlots(120, 55, 2, 1),
        /* MODEL CONFIGUATION */
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "heatproof_machine_casing", "bf5", true, false, false,
    );
	
	
	//LCR
	const lcrHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
	const lcrpipe = event.memberOfBlock("geghilarity_fatmachines:ptfe_pipe_casing");
	const lcrcasing = event.memberOfBlock("geghilarity_fatmachines:ptfe_casing");
	const lcrShapeBuilder = event.startShape("lcr_casing");
	
	//top
	lcrShapeBuilder.add(0, +1, 1, cupronickelCoilMember, event.noHatch());
	
	lcrShapeBuilder.add(+1, +1, 0, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, +1, 0, lcrcasing, lcrHatch);
	
	lcrShapeBuilder.add(+1, +1, 1, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, +1, 1, lcrcasing, lcrHatch);
	
	lcrShapeBuilder.add(+1, +1, 2, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, +1, 2, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(0, +1, 2, lcrcasing, lcrHatch);
	
	//center
	lcrShapeBuilder.add(0, 0, 1, lcrpipe, event.noHatch());
	
	lcrShapeBuilder.add(+1, 0, 0, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, 0, 0, lcrcasing, lcrHatch);
	
	lcrShapeBuilder.add(+1, 0, 1, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, 0, 1, lcrcasing, lcrHatch);
	
	lcrShapeBuilder.add(+1, 0, 2, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, 0, 2, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(0, 0, 2, lcrcasing, lcrHatch);
	
	//base
	lcrShapeBuilder.add(+1, -1, 2, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, -1, 2, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(0, -1, 2, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(+1, -1, 1, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, -1, 1, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(0, -1, 1, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(+1, -1, 0, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(-1, -1, 0, lcrcasing, lcrHatch);
	lcrShapeBuilder.add(0, -1, 0, lcrcasing, lcrHatch);
	
	lcrShapeBuilder.add(0, 0, 0, lcrcasing);
	
	const lcrShape = lcrShapeBuilder.build();
	
	event.simpleElectricCraftingMultiBlock(
        "Large Chemical Reactor", "lcr", LCR, lcrShape,
        event.progressBar(77, 52, "circuit"),
        itemInputs => itemInputs.addSlots(25, 35, 1, 3), itemOutputs => itemOutputs.addSlots(101, 35, 1, 3),
        fluidInputs => fluidInputs.addSlots(45, 35, 1, 5), fluidOutputs => fluidOutputs.addSlots(121, 35, 1, 4),
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "lcr_casing", "lcr", true, false, false,
    );
	
	const fbrHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");

    const fbrShape = event.layeredShape("lcr_casing", [

		[ "EE EE", "HHHHH", "HHHHH", " HHH "],
		[ "     ", "HHDHH", "HHDHH", " HDH "],
        [ "EE EE", "HH#HH", "HHHHH", "     "],
    ])
        .key("H", lcrcasing, fbrHatch)
        .key("D", lcrpipe, event.noHatch())
		.key("E", frameMember, event.noHatch())
        .build();
		
	event.simpleElectricCraftingMultiBlock(
        // English name, internal name, recipe type, multiblock shape
        "Fluidized Bed Reactor", "fluidized_bed_reactor", FBEDREACTOR, fbrShape,
        // REI progress bar
        event.progressBar(90, 33, "extract"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlots(56, 35, 2, 1), itemOutputs => itemOutputs.addSlots(126, 35, 2, 1),
		fluidInputs => fluidInputs.addSlots(36, 55, 3, 1), fluidOutputs => fluidOutputs.addSlots(126, 55, 2, 1),
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "lcr_casing", "fbr", true, false, false,
    );
	
	
	const hslaHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
	const tchimney = event.memberOfBlock("sootychimneys:dirty_terracotta_chimney");
	const basaltb = event.memberOfBlock("minecraft:smooth_basalt");
	const rglass = event.memberOfBlock("ae2:quartz_glass");
	const llava = event.memberOfBlock("minecraft:lava");
	const steelpipe = event.memberOfBlock("modern_industrialization:steel_machine_casing_pipe");
    const hslaShape = event.layeredShape("heatproof_machine_casing", [
		[ "FFFFF", " BCB ", " XXX ", " HHH ", "     ", "     ",],
		[ "FFFFF", "BEEEB", "X   X", "HGGGH", " GGG ", " D D ",],
		[ "FFFFF", "BEEEB", "X   X", "HGGGH", " GGG ", "     ",],
        [ "FFFFF", " BCB ", " X#X ", " HHH ", "     ", "     ",],	
    ])
        .key("H", ulvcasing, event.noHatch())
		.key("B", frameMember, event.noHatch())
		.key("C", rglass, event.noHatch())
		.key("D", tchimney, event.noHatch())
		.key("E", llava, event.noHatch())
		.key("F", basaltb, event.noHatch())
		.key("G", steelpipe, event.noHatch())
		.key("X", heatproofMember, hslaHatch)
        .build();
		
	event.simpleSteamCraftingMultiBlock(
        // English name, internal name, recipe type, multiblock shape
        "HSLA Blast Furnace", "hsla_blast", HSLA_BLAST, hslaShape,
        // REI progress bar
        event.progressBar(90, 33, "furnace"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlots(54, 35, 3, 4), itemOutputs => itemOutputs.addSlots(135, 35, 3, 2),
        fluidInputs => {}, fluidOutputs => {},
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "heatproof_machine_casing", "hsla_blast", true, false, false,
    );
	
	const reactHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
	const muffler = event.memberOfBlock("geghilarity_fatmachines:muffler_hatch");
	const frameinvMember = event.memberOfBlock("geghilarity_fatmachines:invar_frame_box");

    const reactShape = event.layeredShape("heatproof_machine_casing", [
		[ "     ", "     ", " D D ", " D D ", " D D ",],
		[ "B   B", "BCCCB", "XDXDX", "XXXXX", " D D ",],
		[ "     ", "XCCCX", "XD DX", "XDEDX", " DFD ",],
        [ "B   B", "BCCCB", "XX#XX", "XXXXX", "     ",],	
    ])
		.key("B", frameinvMember, event.noHatch())
		.key("C", fireboxMember, event.noHatch())
		.key("D", fluidpipeMember, event.noHatch())
		.key("E", muffler, event.noHatch())
		.key("F", tchimney, event.noHatch())
		.key("X", heatproofMember, reactHatch)
        .build();
		
	event.simpleElectricCraftingMultiBlock(
        // English name, internal name, recipe type, multiblock shape
        "Reaction Furnace", "reaction_furnace", REACTIONFURNACE, reactShape,
        // REI progress bar
        event.progressBar(90, 33, "furnace"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlots(54, 35, 3, 1), itemOutputs => itemOutputs.addSlots(135, 35, 3, 1),
        fluidInputs => fluidInputs.addSlots(54, 55, 3, 1), fluidOutputs => fluidOutputs.addSlots(135, 55, 2, 1),
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "heatproof_machine_casing", "reaction_furnace", true, false, false,
    );
	
	const disstankHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");

	const framessMember = event.memberOfBlock("geghilarity_fatmachines:stainless_frame_box");
	const boroglass = event.memberOfBlock("geghilarity_fatmachines:titanium_reinforced_borosilicate_glass_block");
	const stainlessMember = event.memberOfBlock("modern_industrialization:clean_stainless_steel_machine_casing");

    const disstankShape = event.layeredShape("clean_stainless_steel_machine_casing", [
		[ "B   B", "XXXXX", "XEEEX", "XEEEX", " XXX ",],
		[ "     ", "XDDDX", "E   E", "E   E", "XXXXX",],
		[ "     ", "XDDDX", "E   E", "E   E", "XXXXX",],
		[ "     ", "XDDDX", "E   E", "E   E", "XXXXX",],
        [ "B   B", "XX#XX", "XEEEX", "XEEEX", " XXX ",],	
    ])
		.key("B", framessMember, event.noHatch())
		.key("E", boroglass, event.noHatch())
		.key("D", heatproofMember, event.noHatch())
		.key("X", stainlessMember, disstankHatch)
        .build();
		
	event.simpleElectricCraftingMultiBlock(
        // English name, internal name, recipe type, multiblock shape
        "Dissolution Tank", "dissolution_tank", DISSOLUTIONTANK, disstankShape,
        // REI progress bar
        event.progressBar(95, 33, "extract"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlot(54, 35), itemOutputs => itemOutputs.addSlots(135, 35, 3, 1),
        fluidInputs => fluidInputs.addSlots(54, 55, 2, 1), fluidOutputs => fluidOutputs.addSlot(135, 55),
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "clean_stainless_steel_machine_casing", "dissolution_tank", true, false, false,
    );
	
	const crackingHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
	
	const crackingShape = event.layeredShape("clean_stainless_steel_machine_casing", [
		[ "XBXBX", "XBXBX", "XBXBX",],
		[ "XBXBX", "X   X", "XBXBX",],
		[ "XBXBX", "XB#BX", "XBXBX",],
    ])
		.key("B", kanthalCoilMember, event.noHatch())
		.key("X", stainlessMember, crackingHatch)
        .build();
		
	event.simpleElectricCraftingMultiBlock(
        // English name, internal name, recipe type, multiblock shape
        "Oil Cracking Unit", "cracking_unit", CRACKINGUNIT, crackingShape,
        // REI progress bar
        event.progressBar(115, 33, "extract"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlot(93, 35), itemOutputs => {},
        fluidInputs => fluidInputs.addSlots(54, 35, 2, 1), fluidOutputs => fluidOutputs.addSlots(142, 35, 2, 1),
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "clean_stainless_steel_machine_casing", "cracking_unit", true, false, false,
    );	
	
	const lvminerHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
	
	const hslacasing = event.memberOfBlock("drilly:hsla_casing");
	const hslaframeMember = event.memberOfBlock("drilly:hsla_frame_box");
	
	const ladder = event.memberOfBlock("create:brass_ladder");
	const valve = event.memberOfBlock("create:white_valve_handle");
	
	const steamt = event.memberOfBlock("drilly:steam_turbine");
	const bengine = event.memberOfBlock("drilly:basic_engine");
	const shaftpb = event.memberOfBlock("drilly:shaft_power_bus");

    const lvminerShape = event.layeredShape("hsla_casing", [
		[ " X   ", " X   ", " X   ", " X   ", " X   ", "     ", "     ", "     ", "     ",],
		[ " E E ", " HHH ", " EHE ", " E E ", " HHH ", "  Y  ", "     ", "     ", "     ",],
		[ "E H E", "HH HH", " H#H ", "  C  ", " HBH ", " EAE ", "  H  ", "  E  ", "  E  ",],
        [ " E E ", " HHH ", " E E ", " E E ", " HHH ", "     ", "     ", "     ", "     ",],	
        [ "     ", " YXY ", "     ", "     ", "     ", "     ", "     ", "     ", "     ",],

    ])
        .key("H", hslacasing, lvminerHatch)
		.key("E", hslaframeMember, event.noHatch())
		.key("X", ladder, event.noHatch())
		.key("Y", valve, event.noHatch())
		.key("A", steamt, event.noHatch())
		.key("B", bengine, event.noHatch())
		.key("C", shaftpb, event.noHatch())
        .build();
		
	event.simpleElectricCraftingMultiBlock(
        // English name, internal name, recipe type, multiblock shape
        "LV Miner", "lv_miner", LVMINER, lvminerShape,
        // REI progress bar
        event.progressBar(90, 33, "arrow"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
		// rows, column
        itemInputs => itemInputs.addSlots(54, 35, 2, 2), itemOutputs => itemOutputs.addSlots(115, 35, 3, 2),
        fluidInputs => fluidInputs.addSlots(34, 35, 1, 2), fluidOutputs => {},
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "hsla_casing", "lv_miner", true, false, false,
    );
	
	
})

MIMachineEvents.addMultiblockSlots("distillation_tower", event => {
	// not possible, recipe type no items
	//	event.itemOutputs.addSlot(50, 35);
		event.fluidOutputs.addSlot(246, 35);
		event.fluidOutputs.addSlot(264, 35);
	})
	
/////////////////////////////	


function registerSteamMultiblock(id, name, shape, recipeType, machineCasing) {
    $MachineRegistrationHelper.registerMachine(name, id, bet => new $SteamCraftingMultiblockBlockEntity(bet, id, shape, recipeType))
    $MachineRegistrationHelper.addMachineModel(id, machineCasing, $MachineCasings.get(machineCasing), false, false, false, false)
    $ReiMachineRecipes.registerMultiblockShape(id, shape)
}

function addAround(builder, radius, height, block, hatches) {
    for (let x = -radius; x <= radius; x++) {
        for (let z = -radius; z <= radius; z++) {
            //if (x == 0 && z == 0) continue;
            builder.add(x, height, z, block, hatches)
        }
    }
}