
StartupEvents.registry('block', event => {

event.create('geghilarity_fatmachines:ptfe_casing').material('iron').displayName('Chemically Inert PTFE Casing').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:ptfe_pipe_casing').material('iron').displayName('PTFE Pipe Casing').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:pyro_casing').material('iron').displayName('Pyro Casing').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)

event.create('geghilarity_fatmachines:nichrome_coil').material('iron').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:tungstensteel_coil').material('iron').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:hss-g_coil').material('iron').displayName('HSS-G Coil').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
event.create('geghilarity_fatmachines:naquadah_coil').material('iron').displayName('Naquadah Coil').hardness(3).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)

})

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
        .withItemOutputs()

    MINECLAY = event.register('mine_clay')
		.withItemInputs()
        .withFluidInputs()
        .withItemOutputs()		
		

});

MIMachineEvents.registerCasings(event => {
	event.register("pyro_casing")
	event.register("lcr_casing")
	event.register("mudbricks")
});

MIMachineEvents.registerMachines(event => {
	console.log('Registering machines')
    
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
        event.progressBar(77, 33, "circuit"),
        itemInputs => itemInputs.addSlots(36, 35, 1, 3), itemOutputs => itemOutputs.addSlots(102, 35, 1, 3),
        fluidInputs => fluidInputs.addSlots(56, 35, 1, 5), fluidOutputs => fluidOutputs.addSlots(122, 35, 1, 4),
        // casing, overlay folder, front overlay?, top overlay?, side overlay?
        "lcr_casing", "lcr", true, false, false,
    );
	
	
})

MIMachineEvents.addMultiblockSlots("distillation_tower", event => {
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