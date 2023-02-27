
StartupEvents.registry('block', event => {

event.create('geghilarity_fatmachines:ptfe_casing').material('wood').displayName('Chemically Inert PTFE Casing').hardness(3).tagBlock('minecraft:mineable/axe')
event.create('geghilarity_fatmachines:ptfe_pipe_casing').material('wood').displayName('PTFE Pipe Casing').hardness(3).tagBlock('minecraft:mineable/axe')
event.create('geghilarity_fatmachines:pyro_casing').material('wood').displayName('Pyro Casing').hardness(3).tagBlock('minecraft:mineable/axe')

event.create('geghilarity_fatmachines:nichrome_coil').material('wood').hardness(3).tagBlock('minecraft:mineable/axe')
event.create('geghilarity_fatmachines:tungstensteel_coil').material('wood').hardness(3).tagBlock('minecraft:mineable/axe')
event.create('geghilarity_fatmachines:hss-g_coil').material('wood').displayName('HSS-G Coil').hardness(3).tagBlock('minecraft:mineable/axe')

})

let PYRO;
let LCR;
let BF;
let BF2;
let BF3;
let BF4;

MIMachineEvents.registerRecipeTypes(event => {
	PYRO = event.register("pyro")
        .withItemInputs() // enable item inputs
        .withItemOutputs() // enable item outputs
        .withFluidInputs() // enable fluid inputs
        .withFluidOutputs(); // enable fluid outputs
		
	LCR = event.register("lcr")
        .withItemInputs() // enable item inputs
        .withItemOutputs() // enable item outputs
        .withFluidInputs() // enable fluid inputs
        .withFluidOutputs(); // enable fluid outputs
		
	BF = event.register("blaster_furnace")
        .withItemInputs() // enable item inputs
        .withItemOutputs() // enable item outputs
        .withFluidInputs() // enable fluid inputs
        .withFluidOutputs(); // enable fluid outputs
		
	BF2 = event.register("blaster_furnace2")
        .withItemInputs() // enable item inputs
        .withItemOutputs() // enable item outputs
        .withFluidInputs() // enable fluid inputs
        .withFluidOutputs(); // enable fluid outputs

	BF3 = event.register("blaster_furnace3")
        .withItemInputs() // enable item inputs
        .withItemOutputs() // enable item outputs
        .withFluidInputs() // enable fluid inputs
        .withFluidOutputs(); // enable fluid outputs

	BF4 = event.register("blaster_furnace4")
        .withItemInputs() // enable item inputs
        .withItemOutputs() // enable item outputs
        .withFluidInputs() // enable fluid inputs
        .withFluidOutputs(); // enable fluid outputs	
		

});

MIMachineEvents.registerCasings(event => event.register("pyro_casing"));
MIMachineEvents.registerCasings(event => event.register("lcr_casing"));

MIMachineEvents.registerMachines(event => {
    const pyroHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output");
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
	
	


