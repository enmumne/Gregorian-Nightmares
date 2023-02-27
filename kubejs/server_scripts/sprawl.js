//onEvent('player.logged_in', (event) => {


//onEvent('recipes', event => {
ServerEvents.recipes(event => {
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'minecraft:grindstone'})
	
	event.shaped('minecraft:grindstone', [
		'ADA',
		'SDS',
		'S S'
	], {
		D: 'minecraft:stone_slab',
		A: '#minecraft:planks',
		S: 'minecraft:stick'
	})
	
	//event.shapeless('geggy:wooden_form', ['farmersdelight', 'greggy:flint_dust_tiny'])
	
	// 1.19
	//event.remove({type: 'minecraft:crafting_shaped', output: 'tconstruct:pattern'})
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'minecraft:furnace'})
	event.remove({type: "modern_industrialization:packer", output: "minecraft:furnace"})
	
	event.shaped('minecraft:furnace', [
		'DAD',
		'SGS',
		'DAD'
	], {
		D: 'geggy:primitive_brick',
		A: '#stone_tool_materials',
		S: 'minecraft:flint',
		G: 'minecraft:coal'
	})
	event.recipes.modern_industrialization.assembler({
		eu: 4,
		duration: 40,
		item_inputs: [ 
			{item: "geggy:primitive_brick", amount: 4},
			{tag: "minecraft:stone_crafting_materials", amount: 4},
			{item: "minecraft:coal", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:furnace", amount: 2}
		]
	})
	
	event.recipes.modern_industrialization.assembler({
		eu: 4,
		duration: 40,
		item_inputs: [ 
			{item: "geggy:j_planks", amount: 4},
			{tag: "c:stripped_logs", amount: 4},
			{item: "minecraft:flint", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:chest", amount: 2}
		]
	})
	
	// fast path to furnace brick
	event.blasting('geggy:primitive_brick', 'geggy:craut').cookingTime(1600)
	
	// 1.19 removed > shortcut in furnace directly
	/*
	event.shaped('minecraft:furnace', [
		'DAD',
		'SGS',
		'DAD'
	], {
		D: '#stone_tool_materials',
		A: '#stone_tool_materials',
		S: 'minecraft:flint',
		G: 'minecraft:coal'
	})
	*/
	// kibe bucket 
	event.remove({id: 'kibe:wooden_bucket'})
	event.shaped('kibe:wooden_bucket', [
		'S S',
		' S ',
		'   '
	], {
		S: 'geggy:j_planks'
	})
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'minecraft:paper'})
	event.remove({type: 'minecraft:crafting_shapeless', output: 'minecraft:paper'})
	
	event.shaped('2x minecraft:paper', [
		' A ',
		'SSS',
		' A '
	], {
		A: '#minecraft:slabs',
		S: 'geggy:chad'
	}).keepIngredient(1).keepIngredient(7)
	
	event.shaped('2x minecraft:paper', [
		'AAA',
		'ASA',
		'AAA'
	], {
		A: 'geggy:wood_pulp',
		S: 'kibe:water_wooden_bucket'
	}).replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
	
	event.shaped('2x minecraft:paper', [
		'AAA',
		'ASA',
		'AAA'
	], {
		A: 'geggy:wood_pulp',
		S: 'minecraft:water_bucket'
	}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
	
	// GROUT START
	// GROUT START
	
	//event.remove({type: 'minecraft:crafting_shaped', output: 'tconstruct:grout'})
	//event.remove({type: 'minecraft:crafting_shapeless', output: 'tconstruct:grout'})
	
	// GROUT 1.19 > craut
	event.shaped('4x geggy:craut', [
		'AAA',
		'CSC',
		'GGG'
	], {
		A: 'minecraft:gravel',
		S: 'minecraft:water_bucket',
		G: '#c:sand',
		C: 'geggy:clay_dust'
	}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
	
	event.shaped('4x geggy:craut', [
		'GGG',
		'CSC',
		'AAA'
	], {
		A: 'minecraft:gravel',
		S: 'minecraft:water_bucket',
		G: '#c:sand',
		C: 'geggy:clay_dust'
	}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
	
	event.shaped('4x geggy:craut', [
		'ACG',
		'ASG',
		'ACG'
	], {
		A: 'minecraft:gravel',
		S: 'minecraft:water_bucket',
		G: '#c:sand',
		C: 'geggy:clay_dust'
	}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
	
	event.shaped('4x geggy:craut', [
		'GCA',
		'GSA',
		'GCA'
	], {
		A: 'minecraft:gravel',
		S: 'minecraft:water_bucket',
		G: '#c:sand',
		C: 'geggy:clay_dust'
	}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
	
	event.shaped('4x geggy:craut', [
		'AAA',
		'CSC',
		'GGG'
	], {
		A: 'minecraft:gravel',
		S: 'kibe:water_wooden_bucket',
		G: '#c:sand',
		C: 'geggy:clay_dust'
	}).replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
	
	event.shaped('4x geggy:craut', [
		'GGG',
		'CSC',
		'AAA'
	], {
		A: 'minecraft:gravel',
		S: 'kibe:water_wooden_bucket',
		G: '#c:sand',
		C: 'geggy:clay_dust'
	}).replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
	
	event.shaped('4x geggy:craut', [
		'ACG',
		'ASG',
		'ACG'
	], {
		A: 'minecraft:gravel',
		S: 'kibe:water_wooden_bucket',
		G: '#c:sand',
		C: 'geggy:clay_dust'
	}).replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
	
	event.shaped('4x geggy:craut', [
		'GCA',
		'GSA',
		'GCA'
	], {
		A: 'minecraft:gravel',
		S: 'kibe:water_wooden_bucket',
		G: '#c:sand',
		C: 'geggy:clay_dust'
	}).replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
	
	// uncooked furnace recipe
	event.smelting('geggy:primitive_brick', 'geggy:uncooked_primitive_brick').cookingTime(1000)
	
	//*** white orange magenta light_blue yellow lime pink gray light_gray cyan purple blue brown green red black
	event.remove({type: 'minecraft:crafting_shaped', output: '#minecraft:beds'})	
	event.shaped('minecraft:white_bed', [
		'AAA',
		'BBB',
		'C C'
	], {
		A: '#minecraft:wool_carpets',
		B: 'geggy:j_planks',
		C: '#c:stripped_logs'
	})
	
	event.shaped('geggy:stone_mortar', [
		' C ',
		'GCG',
		'GGG'
	], {
		C: 'minecraft:flint',
		G: '#stone_tool_materials'
	})
	
	// PBF && COKE OVEN bricks
	// due to fixed coke oven:
	// 8 clay > 8 unfired clay brick > smelt to clay brick > craft 8 clay bricks with water to 2 bricks (block), to be used on single machines as default
	// 3 clay + 3 sand + 2 gravel > 3 unfired coke oven brick (1:1 clay ratio) > smelt to minecraft brick > 4 to 1 minecraft bricks (block)
	// 2 clay + 1 brick (minecraft brick) + 1 calcite, to 1 fireclay dust [mixer] > [compressor] 3 fireclay dust to 2 compressed fireclay > smelt to fireclay brick > 4 bricks + 1 kelp = 1 fireclay bricks (block)
	
	// bricks only made in compressor, no manual recipe
	event.remove({type: 'minecraft:smelting', output: 'minecraft:brick'})
	event.remove({type: 'modern_industrialization:furnace', output: 'minecraft:brick'})
	event.remove({id: 'minecraft:bricks'})
	event.smelting('geggy:unfired_tempered_brick', 'geggy:unfired_tempered_dust').cookingTime(1200)
	event.smelting('geggy:clay_brick', 'geggy:unfired_clay_brick').cookingTime(1000)
	event.shaped('2x geggy:clay_bricks', [
		'AAA',
		'ASA',
		'AAA'
	], {
		A: 'geggy:clay_brick',
		S: 'minecraft:water_bucket'
	}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
	
	event.shaped('2x geggy:clay_bricks', [
		'AAA',
		'ASA',
		'AAA'
	], {
		A: 'geggy:clay_brick',
		S: 'kibe:water_wooden_bucket'
	}).replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
	
	event.smelting('minecraft:brick', 'geggy:unfired_coke_oven_brick').cookingTime(1000)
	/*
	event.shaped('minecraft:bricks', [
		'AA ',
		'AA ',
		'   '
	], {
		A: 'minecraft:brick'
	})
	*/
	
	// fire clay bricks made also in packer, not compressor to force manual at first
	event.remove({type: 'minecraft:smelting', output: 'modern_industrialization:fire_clay_brick'})
	event.remove({type: 'minecraft:blasting', output: 'modern_industrialization:fire_clay_brick'})
	event.blasting('modern_industrialization:fire_clay_brick', 'geggy:compressed_fireclay').cookingTime(1000)
	event.remove({type: 'minecraft:crafting_shaped', output: 'modern_industrialization:fire_clay_bricks'})
	event.shaped('modern_industrialization:fire_clay_bricks', [
		'ABA',
		'ACA',
		'   '
	], {
		A: 'modern_industrialization:fire_clay_brick',
		C: 'minecraft:water_bucket',
		B: 'geggy:kelp_dust'
	}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
	
	event.shaped('modern_industrialization:fire_clay_bricks', [
		'ABA',
		'ACA',
		'   '
	], {
		A: 'modern_industrialization:fire_clay_brick',
		C: 'kibe:water_wooden_bucket',
		B: 'geggy:kelp_dust'
	}).replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
	
	event.replaceInput({type: "minecraft:crafting_shaped"}, "modern_industrialization:fire_clay_bricks", "geggy:clay_bricks")
	event.replaceInput({type: "modern_industrialization:assembler"}, "modern_industrialization:fire_clay_bricks", "geggy:clay_bricks")
	event.remove({type: 'minecraft:crafting_shaped', output: 'modern_industrialization:steam_blast_furnace'})
	event.shaped('modern_industrialization:steam_blast_furnace', [
		'ABC',
		'DFB',
		'DBC'
	], {
		A: 'modern_industrialization:bronze_plate',
		B: 'modern_industrialization:bronze_rod',
		C: 'modern_industrialization:bronze_bolt',
		D: 'modern_industrialization:fire_clay_bricks',
		F: 'minecraft:blast_furnace'
	})
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'modern_industrialization:coke_oven'})
	event.shaped('modern_industrialization:coke_oven', [
		'CBC',
		'BDB',
		'CFC'
	], {
		B: 'modern_industrialization:bronze_plate',
		C: 'modern_industrialization:bronze_rod',
		D: 'minecraft:bricks',
		F: 'minecraft:furnace'
	})
		
	
	event.remove({id: 'magick:dust_to_quartz'})
	
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'create:fluid_pipe'})
	event.shaped('2x create:fluid_pipe', [
		'AAA',
		'   ',
		'AAA'
	], {
		A: 'modern_industrialization:copper_curved_plate'
	})
	
	event.remove({type: 'minecraft:crafting_shaped', output: '#modern_industrialization:item_pipes'})
	event.remove({type: 'minecraft:crafting_shaped', output: '#modern_industrialization:fluid_pipes'})
	///***
	//event.replaceInput({type: "minecraft:crafting_shaped", output: "#modern_industrialization:item_pipes"}, "modern_industrialization:bronze_curved_plate", "geggy:invar_curved_plate")
	///***
	//event.replaceInput({type: "modern_industrialization:assembler", output: "#modern_industrialization:item_pipes"}, "modern_industrialization:bronze_curved_plate", "geggy:invar_curved_plate")
	event.remove({id: 'moderndynamics:item_pipe'})
	event.remove({id: 'moderndynamics:fluid_pipe'})
	event.remove({id: 'modern_industrialization:steam_age/item_pipe_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/steam_age/item_pipe'})
	event.remove({id: 'modern_industrialization:steam_age/fluid_pipe_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/steam_age/fluid_pipe'})
	//event.replaceOutput({type: "minecraft:crafting_shaped", output: "#modern_industrialization:fluid_pipes"}, "modern_industrialization:fluid_pipe", "moderndynamics:fluid_pipe")
	//event.replaceOutput({type: "modern_industrialization:assembler", output: "#modern_industrialization:fluid_pipes"}, "modern_industrialization:fluid_pipe", "moderndynamics:fluid_pipe")
	//event.replaceOutput({type: "minecraft:crafting_shaped", output: "#modern_industrialization:item_pipes"}, "modern_industrialization:item_pipe", "moderndynamics:item_pipe")
	//event.replaceOutput({type: "modern_industrialization:assembler", output: "#modern_industrialization:item_pipes"}, "modern_industrialization:item_pipe", "moderndynamics:item_pipe")
	event.replaceInput({type: "minecraft:crafting_shaped", input: "#modern_industrialization:fluid_pipes"}, "modern_industrialization:fluid_pipe", "moderndynamics:fluid_pipe")
	event.replaceInput({type: "modern_industrialization:assembler", input: "#modern_industrialization:fluid_pipes"}, "modern_industrialization:fluid_pipe", "moderndynamics:fluid_pipe")
	event.replaceInput({type: "minecraft:crafting_shaped", input: "#modern_industrialization:item_pipes"}, "modern_industrialization:item_pipe", "moderndynamics:item_pipe")
	event.replaceInput({type: "modern_industrialization:assembler", input: "#modern_industrialization:item_pipes"}, "modern_industrialization:item_pipe", "moderndynamics:item_pipe")
	
	event.shaped('8x moderndynamics:item_pipe', [
		'ABA',
		'C C',
		'ABA'
	], {
		A: 'geggy:invar_curved_plate',
		B: 'minecraft:glass_pane',
		C: 'modern_industrialization:steel_gear'
	})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:invar_curved_plate", amount: 4},
			{item: "minecraft:glass_pane", amount: 2},
			{item: "modern_industrialization:steel_gear", amount: 2}
		],
		item_outputs: [
			{item: "moderndynamics:item_pipe", amount: 14}
		]
	})
	event.shaped('6x moderndynamics:fluid_pipe', [
		'ABA',
		'C C',
		'ABA'
	], {
		A: 'modern_industrialization:bronze_curved_plate',
		B: 'minecraft:glass_pane',
		C: 'modern_industrialization:copper_rotor'
	})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:bronze_curved_plate", amount: 4},
			{item: "minecraft:glass_pane", amount: 2},
			{item: "modern_industrialization:copper_rotor", amount: 2}
		],
		item_outputs: [
			{item: "moderndynamics:fluid_pipe", amount: 10}
		]
	})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 400,
		item_inputs: [ 
			{item: "modern_industrialization:steel_curved_plate", amount: 4},
			{item: "modern_industrialization:rubber_sheet", amount: 3},
			{item: "modern_industrialization:aluminum_rotor", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:fluid_pipe", amount: 6}
		]
	})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 400,
		item_inputs: [ 
			{item: "modern_industrialization:steel_curved_plate", amount: 4},
			{item: "modern_industrialization:rubber_sheet", amount: 3},
			{item: "modern_industrialization:invar_gear", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:item_pipe", amount: 6}
		]
	})
	
	event.custom({
			"type": "create:pressing",
			"ingredients": [{"item": "modern_industrialization:invar_plate"}],
			"results": [{"item": "geggy:invar_curved_plate"}]
		})
	//event.recipes.createPressing(Item.of("geggy:invar_curved_plate", 1), ["modern_industrialization:invar_plate"])
	event.recipes.modern_industrialization.compressor({
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "modern_industrialization:invar_plate", amount: 1}
		],
		item_outputs: [
			{item: "geggy:invar_curved_plate", amount: 1}
		]
	})
	/*
	event.shaped('modern_industrialization:item_pipe', [
		'AAA',
		'B B',
		'AAA'
	], {
		A: 'geggy:invar_curved_plate',
		B: 'modern_industrialization:steel_gear'
	})
	*/
	
	event.smithing('modern_industrialization:steel_salloy', 'modern_industrialization:bronze_salloy', 'modern_industrialization:steel_upgrade')
	event.shaped('modern_industrialization:bronze_salloy', [
		'FCF',
		'BAB',
		'DDD'
	], {
		A: 'modern_industrialization:bronze_machine_casing',
		B: 'minecraft:furnace',
		C: 'modern_industrialization:bronze_plate',
		D: 'geggy:clay_bricks',
		F: 'create:fluid_pipe'
	})
	
	event.shaped('modern_industrialization:electric_dehy', [
		'BEB',
		'CAC',
		'BDB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:aluminum_rotor',
		C: 'modern_industrialization:analog_circuit',
		D: 'modern_industrialization:cupronickel_cable',
		E: 'modern_industrialization:robot_arm'
	})
	event.recipes.modern_industrialization.assembler({
		eu: 4,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:aluminum_rotor", amount: 4},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "modern_industrialization:cupronickel_cable", amount: 1},
			{item: "modern_industrialization:robot_arm", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_dehy", amount: 1}
		]
	})
	
	event.recipes.modern_industrialization.assembler({
		eu: 4,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "ae2:quartz_glass", amount: 2},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "modern_industrialization:cupronickel_cable", amount: 2},
			{item: "modern_industrialization:pump", amount: 1},
			{item: "modern_industrialization:piston", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_fextract", amount: 1}
		]
	})
	
	event.shaped('4x geghilarity_fatmachines:pyro_casing', [
		'CBC',
		'BAB',
		'CBC'
	], {
		A: 'modern_industrialization:steel_machine_casing',
		B: 'modern_industrialization:tin_cable',
		C: 'modern_industrialization:steel_large_plate'
	})	
	event.recipes.modern_industrialization.assembler({
		eu: 4,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:steel_machine_casing", amount: 1},
			{item: "modern_industrialization:tin_cable", amount: 4},
			{item: "modern_industrialization:steel_large_plate", amount: 4}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:pyro_casing", amount: 4}
		]
	})
	
	event.shaped('modern_industrialization:pyro', [
		'EBC',
		'DAB',
		'EBC'
	], {
		A: 'modern_industrialization:advanced_machine_hull',
		B: 'modern_industrialization:electronic_circuit',
		C: 'modern_industrialization:cupronickel_wire',
		D: 'modern_industrialization:large_pump',
		E: 'modern_industrialization:large_motor'
	})
	event.recipes.modern_industrialization.assembler({
		eu: 4,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:advanced_machine_hull", amount: 1},
			{item: "modern_industrialization:electronic_circuit", amount: 3},
			{item: "modern_industrialization:cupronickel_wire", amount: 2},
			{item: "modern_industrialization:large_pump", amount: 1},
			{item: "modern_industrialization:large_motor", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:pyro", amount: 1}
		]
	})
	
	event.replaceInput({type: "minecraft:crafting_shaped"}, "modern_industrialization:aluminum_cable", "minecraft:flint")
	event.replaceInput({type: "minecraft:crafting_shaped"}, "modern_industrialization:electrum_cable", "modern_industrialization:aluminum_cable")
	event.replaceInput({type: "minecraft:crafting_shaped"}, "minecraft:flint", "modern_industrialization:electrum_cable")
	event.replaceInput({type: "modern_industrialization:assembler"}, "modern_industrialization:aluminum_cable", "minecraft:flint")
	event.replaceInput({type: "modern_industrialization:assembler"}, "modern_industrialization:electrum_cable", "modern_industrialization:aluminum_cable")
	event.replaceInput({type: "modern_industrialization:assembler"}, "minecraft:flint", "modern_industrialization:electrum_cable")
	
	event.remove({id: 'modern_industrialization:materials/electrum/packer/cable'})
	event.remove({type: 'minecraft:crafting_shaped', output: 'modern_industrialization:electrum_cable'})
	event.remove({type: 'modern_industrialization:assembler', output: 'modern_industrialization:electrum_cable'})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:electrum_wire", amount: 3},
			{item: "geghilarity:polyethylene_foil", amount: 4}
		],
		item_outputs: [
			{item: "modern_industrialization:electrum_cable", amount: 1}
		]
	})
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'modern_industrialization:turbo_machine_hull'})
	event.shaped('modern_industrialization:turbo_machine_hull', [
		'ABA',
		'CDC',
		'EEE'
	], {
		A: 'geghilarity:polyethylene_sheet',
		B: 'modern_industrialization:digital_circuit',
		C: 'modern_industrialization:sodium_battery',
		D: 'modern_industrialization:turbo_machine_casing',
		E: 'modern_industrialization:electrum_cable'
	})
	event.remove({type: 'modern_industrialization:assembler', output: 'modern_industrialization:turbo_machine_hull'})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:sodium_battery", amount: 2},
			{item: "modern_industrialization:digital_circuit", amount: 1},
			{item: "modern_industrialization:turbo_machine_casing", amount: 1},
			{item: "modern_industrialization:electrum_cable", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:polyethylene", amount: 288}
		],
		item_outputs: [
			{item: "modern_industrialization:turbo_machine_hull", amount: 1}
		]
	})
	
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 60,
		item_inputs: [ 
			{item: "geghilarity:polytetrafluoroethylene_sheet", amount: 6}
		],
		item_outputs: [
			{item: "geghilarity:ptfe_pipe", amount: 1}
		]
	})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:turbo_machine_hull", amount: 1},
			{item: "modern_industrialization:digital_circuit", amount: 4},
			{item: "modern_industrialization:stainless_steel_rotor", amount: 1},
			{item: "modern_industrialization:advanced_pump", amount: 1},
			{item: "geghilarity:ptfe_pipe", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:lcr", amount: 1}
		]
	})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:polytetrafluoroethylene_sheet", amount: 4}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:ptfe_pipe_casing", amount: 1}
		]
	})
	
	//***
	event.remove({id: "modern_industrialization:electric_age/casing/highly_advanced_machine_casing_asbl"})
	event.remove({id: "modern_industrialization:assembler_generated/electric_age/casing/highly_advanced_machine_casing"})
	event.shaped('modern_industrialization:highly_advanced_machine_casing', [
		'CBC',
		'DAD',
		'CBC'
	], {
		A: 'modern_industrialization:turbo_machine_hull',
		B: 'geghilarity:tungstensteel_plate',
		C: 'modern_industrialization:titanium_plate',
		D: 'modern_industrialization:chromium_plate'
	})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:turbo_machine_hull", amount: 1},
			{item: "modern_industrialization:titanium_plate", amount: 4},
			{item: "geghilarity:tungstensteel_plate", amount: 2},
			{item: "modern_industrialization:chromium_plate", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:highly_advanced_machine_casing", amount: 1}
		]
	})
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'modern_industrialization:highly_advanced_machine_hull'})
	event.shaped('modern_industrialization:highly_advanced_machine_hull', [
		'ABA',
		'CDC',
		'EEE'
	], {
		A: 'geghilarity:polytetrafluoroethylene_sheet',
		B: 'modern_industrialization:processing_unit',
		C: 'modern_industrialization:cadmium_battery',
		D: 'modern_industrialization:highly_advanced_machine_casing',
		E: 'modern_industrialization:annealed_copper_cable'
	})
	event.remove({type: 'modern_industrialization:assembler', output: 'modern_industrialization:highly_advanced_machine_hull'})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:cadmium_battery", amount: 2},
			{item: "modern_industrialization:processing_unit", amount: 1},
			{item: "modern_industrialization:highly_advanced_machine_casing", amount: 1},
			{item: "modern_industrialization:annealed_copper_cable", amount: 2}
		],
		fluid_inputs: [
			{fluid: "geghilarity:polytetrafluoroethylene", amount: 288}
		],
		item_outputs: [
			{item: "modern_industrialization:highly_advanced_machine_hull", amount: 1}
		]
	})

	// bronze nerf
	event.remove({id: 'modern_industrialization:materials/bronze/smelting/dust_to_ingot_smelting'})
	event.remove({id: 'modern_industrialization:materials/bronze/smelting/dust_to_ingot_blasting'})
	event.blasting('modern_industrialization:bronze_ingot', 'modern_industrialization:bronze_dust').cookingTime(400)
	
	// temporary andesite
	event.remove({id: 'modern_industrialization:vanilla_recipes/mixer/andesite'})
	event.remove({type: 'minecraft:crafting_shapeless', output: 'create:andesite_alloy'})
	event.remove({type: 'minecraft:crafting_shaped', output: 'create:andesite_alloy'})	
	event.remove({type: "modern_industrialization:mixer", output: "create:andesite_alloy"})
	event.remove({type: "create:mixing", output: "create:andesite_alloy"})
	event.shaped('2x create:andesite_alloy', [
		'AB ',
		'BA ',
		'   '
	], {
		A: 'minecraft:andesite',
		B: 'modern_industrialization:quartz_dust'
	})
	event.recipes.modern_industrialization.salloy({
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "minecraft:andesite", amount: 2},
			{item: "modern_industrialization:quartz_dust", amount: 2}
		],
		item_outputs: [
			{item: "create:andesite_alloy", amount: 4}
		]
	})
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'modern_industrialization:bronze_mixer'})
	event.shaped('modern_industrialization:bronze_mixer', [
		'FCF',
		'BAB',
		'DDD'
	], {
		A: 'modern_industrialization:bronze_machine_casing',
		B: 'modern_industrialization:copper_rotor',
		C: 'modern_industrialization:copper_gear',
		D: 'create:fluid_pipe',
		F: 'create:fluid_tank'
	})
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'modern_industrialization:bronze_compressor'})
	event.shaped('modern_industrialization:bronze_compressor', [
		'FCF',
		'BAB',
		'DDD'
	], {
		A: 'modern_industrialization:bronze_machine_casing',
		B: 'modern_industrialization:copper_gear',
		D: 'create:fluid_pipe',
		C: 'create:fluid_tank',
		F: 'create:mechanical_piston'
	})
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'modern_industrialization:bronze_furnace'})
	event.shaped('modern_industrialization:bronze_furnace', [
		'CBC',
		'CAC',
		'DDD'
	], {
		A: 'minecraft:furnace',
		B: 'modern_industrialization:bronze_plate',
		C: 'create:fluid_pipe',
		D: 'geggy:clay_bricks'
	})
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'modern_industrialization:bronze_boiler'})
	event.shaped('modern_industrialization:bronze_boiler', [
		'CCC',
		'CBC',
		'DAD'
	], {
		A: 'minecraft:furnace',
		B: 'modern_industrialization:bronze_machine_casing_pipe',
		C: 'create:fluid_pipe',
		D: 'geggy:clay_bricks'
	})
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'kibe:cobblestone_generator_mk1'})
	event.shaped('kibe:cobblestone_generator_mk1', [
		'AAA',
		'DCE',
		'ABA'
	], {
		A: 'minecraft:cobblestone',
		B: 'minecraft:chest',
		C: 'minecraft:nether_star',
		D: 'minecraft:water_bucket',
		E: 'minecraft:lava_bucket'
	})
	
	event.replaceInput({type: "minecraft:crafting_shaped", output: "modern_industrialization:steam_mining_drill"}, "minecraft:diamond", "minecraft:diamond_block")
	event.replaceInput({type: "minecraft:crafting_shaped"}, "minecraft:bucket", "create:copper_backtank")
	
	event.replaceInput({type: "minecraft:crafting_shaped"}, "minecraft:coal", "modern_industrialization:coal_dust")
	event.shaped('minecraft:campfire', [
		' C ',
		'CBC',
		'AAA'
	], {
		A: '#minecraft:logs',
		B: 'minecraft:coal',
		C: 'minecraft:stick'
	})
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'minecraft:coal_block'})
	event.recipes.modern_industrialization.packer({eu: 1, duration: 100,item_inputs: [{item: "modern_industrialization:coal_dust", amount: 9}],
			item_outputs: [{item: "minecraft:coal_block", amount: 1}]})	
			
	event.replaceInput({type: "minecraft:crafting_shaped", output: "modern_industrialization:bronze_item_input_hatch"}, "minecraft:hopper", "create:brass_hand")
	event.replaceInput({type: "minecraft:crafting_shaped", output: "modern_industrialization:bronze_item_output_hatch"}, "minecraft:hopper", "create:brass_hand")	
	
	event.replaceInput({type: "minecraft:crafting_shaped", output: "modern_industrialization:bronze_fluid_input_hatch"}, "modern_industrialization:bronze_tank", "create:fluid_tank")
	event.replaceInput({type: "minecraft:crafting_shaped", output: "modern_industrialization:bronze_fluid_output_hatch"}, "modern_industrialization:bronze_tank", "create:fluid_tank")
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'create:fluid_tank'})
	event.shaped('create:fluid_tank', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'modern_industrialization:copper_plate',
		B: 'modern_industrialization:bronze_rod',
		C: '#c:barrel'
	})
	
	
	
	
	
	event.recipes.modern_industrialization.coke_oven({
		eu: 2,
		duration: 600,
		item_inputs: [
			{item: "minecraft:charcoal", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:coke", amount: 1}
		],
		fluid_outputs: [
				{fluid: "modern_industrialization:creosote", amount: 500, probability: 0.35}
			]
	})
	
	///// IRON CATASTROPHY /////
	event.remove({id: 'modern_industrialization:materials/uncooked_steel_dust'})
	event.remove({id: 'modern_industrialization:steam_age/steel/steel_upgrade_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/steam_age/steel/steel_upgrade'})
	event.shaped('modern_industrialization:steel_upgrade', [
		'ADA',
		'BEB',
		'CFC'
	], {
		A: 'modern_industrialization:bronze_rod',
		B: 'modern_industrialization:bronze_gear',
		C: 'moderndynamics:fluid_pipe',
		D: 'modern_industrialization:bronze_rotor',
		E: 'modern_industrialization:steel_machine_casing',
		F: 'geggy:clay_bricks'
	})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:bronze_rod", amount: 2},
			{item: "modern_industrialization:bronze_gear", amount: 2},
			{item: "moderndynamics:fluid_pipe", amount: 2},
			{item: "modern_industrialization:bronze_rotor", amount: 1},
			{item: "modern_industrialization:steel_machine_casing", amount: 1},
			{item: "geggy:clay_bricks", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:steel_upgrade", amount: 1}
		]
	})
	
	event.remove({id: 'modern_industrialization:steam_age/steel/wiremill_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/steam_age/steel/wiremill'})
	event.shaped('modern_industrialization:steel_wiremill', [
		'ACA',
		'BDB',
		'ACA'
	], {
		A: 'modern_industrialization:bronze_gear',
		B: 'modern_industrialization:bronze_rotor',
		C: 'moderndynamics:fluid_pipe',
		D: 'modern_industrialization:steel_machine_casing'
	})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:bronze_gear", amount: 4},
			{item: "modern_industrialization:steel_machine_casing", amount: 1},
			{item: "moderndynamics:fluid_pipe", amount: 2},
			{item: "modern_industrialization:bronze_rotor", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:steel_wiremill", amount: 1}
		]
	})
	
	event.remove({id: 'modern_industrialization:steam_age/steel/unpacker_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/steam_age/steel/unpacker'})
	event.remove({id: 'modern_industrialization:steam_age/steel/packer_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/steam_age/steel/packer'})
	event.remove({id: 'modern_industrialization:steam_age/steel/quarry_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/steam_age/steel/quarry'})
	event.remove({id: 'modern_industrialization:steam_age/steel/assembler/steam_quarry'})
	event.shaped('modern_industrialization:steel_unpacker', [
		'EAE',
		'BDB',
		'CCC'
	], {
		A: 'modern_industrialization:bronze_gear',
		B: 'modern_industrialization:bronze_rod',
		C: 'moderndynamics:fluid_pipe',
		D: 'modern_industrialization:steel_machine_casing',
		E: 'moderndynamics:item_pipe'
	})
	event.shaped('modern_industrialization:steel_packer', [
		'EAE',
		'ADA',
		'CCC'
	], {
		A: 'modern_industrialization:bronze_gear',
		C: 'moderndynamics:fluid_pipe',
		D: 'modern_industrialization:steel_machine_casing',
		E: 'moderndynamics:item_pipe'
	})
	event.shaped('modern_industrialization:steam_quarry', [
		'CEC',
		'ADA',
		'CBC'
	], {
		A: 'modern_industrialization:steel_gear',
		B: 'modern_industrialization:invar_rotary_blade',
		C: 'modern_industrialization:steel_large_plate',
		D: 'modern_industrialization:steel_machine_casing',
		E: 'moderndynamics:item_pipe'
	})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:bronze_gear", amount: 1},
			{item: "modern_industrialization:steel_machine_casing", amount: 1},
			{item: "moderndynamics:fluid_pipe", amount: 3},
			{item: "moderndynamics:item_pipe", amount: 2},
			{item: "modern_industrialization:bronze_rod", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:steel_unpacker", amount: 1}
		]
	})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:bronze_gear", amount: 3},
			{item: "modern_industrialization:steel_machine_casing", amount: 1},
			{item: "moderndynamics:fluid_pipe", amount: 3},
			{item: "moderndynamics:item_pipe", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:steel_packer", amount: 1}
		]
	})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:steel_large_plate", amount: 4},
			{item: "moderndynamics:item_pipe", amount: 1},
			{item: "modern_industrialization:steel_gear", amount: 2},
			{item: "modern_industrialization:invar_rotary_blade", amount: 1},
			{item: "modern_industrialization:steel_machine_casing", amount: 1}
			
		],
		item_outputs: [
			{item: "modern_industrialization:steam_quarry", amount: 1}
		]
	})
	
	event.remove({id: 'modern_industrialization:steam_age/bronze/macerator_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/steam_age/bronze/macerator'})
	event.shaped('modern_industrialization:bronze_macerator', [
		'ADA',
		'BEB',
		'CAC'
	], {
		A: 'minecraft:diamond',
		B: 'modern_industrialization:steel_gear',
		C: 'moderndynamics:fluid_pipe',
		D: 'modern_industrialization:bronze_gear',
		E: 'modern_industrialization:bronze_machine_casing'
	})
	event.recipes.modern_industrialization.assembler({
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "minecraft:diamond", amount: 3},
			{item: "modern_industrialization:bronze_gear", amount: 2},
			{item: "moderndynamics:fluid_pipe", amount: 2},
			{item: "modern_industrialization:steel_gear", amount: 1},
			{item: "modern_industrialization:bronze_machine_casing", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:bronze_macerator", amount: 1}
		]
	})
	
	
	
	event.remove({id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})
	event.remove({type: 'minecraft:crafting_shapeless', output: 'minecraft:iron_ingot'})
	event.remove({type: 'minecraft:crafting_shaped', output: 'minecraft:iron_ingot'})
	event.remove({type: 'minecraft:smelting', output: 'minecraft:iron_ingot'})
	event.remove({type: 'minecraft:blasting', output: 'minecraft:iron_ingot'})
	event.smelting('minecraft:iron_nugget', 'minecraft:raw_iron').cookingTime(900)
	event.remove({type: 'minecraft:blasting', output: 'minecraft:iron_ingot'})
	
	event.recipes.modern_industrialization.salloy({
		eu: 1,
		duration: 100,
		item_inputs: [
			{item: "minecraft:iron_ingot", amount: 1},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "minecraft:iron_nugget", amount: 9}
		]
	})
	event.recipes.modern_industrialization.salloy({
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "minecraft:iron_nugget", amount: 9},
			{item: "geggy:mold_ingot", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "minecraft:iron_ingot", amount: 1}
		]
	})
	event.recipes.modern_industrialization.salloy({
		eu: 1,
		duration: 100,
		item_inputs: [
			{item: "geggy:wrought_ingot", amount: 1},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:wrought_nugget", amount: 9}
		]
	})
	event.recipes.modern_industrialization.salloy({
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "geggy:wrought_nugget", amount: 9},
			{item: "geggy:mold_ingot", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:wrought_ingot", amount: 1}
		]
	})
	// why 9 wrought ingots going in? can't remember...
	event.recipes.modern_industrialization.macerator({
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "geggy:wrought_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geggy:wrought_dust", amount: 1}
		]
	})
	event.replaceInput({type: "modern_industrialization:mixer"}, "modern_industrialization:iron_dust", "geggy:wrought_dust")
	event.blasting('geggy:wrought_nugget', 'minecraft:iron_nugget').cookingTime(200)
	event.recipes.modern_industrialization.blast_furnace({
		eu: 1,
		duration: 400,
		item_inputs: [
			{item: "minecraft:iron_nugget", amount: 9}
		],
		item_outputs: [
			{item: "minecraft:iron_ingot", amount: 1}
		]
	})
	event.recipes.modern_industrialization.blast_furnace({
		eu: 1,
		duration: 400,
		item_inputs: [
			{item: "modern_industrialization:iron_dust", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:iron_ingot", amount: 1}
		]
	})
	
	event.smelting('geggy:tempered_brick', 'geggy:unfired_tempered_brick').cookingTime(1800)
	event.remove({id: 'minecraft:blast_furnace'})
	event.shaped('minecraft:blast_furnace', [
		'AAA',
		'ACA',
		'BBB'
	], {
		A: 'geggy:tempered_brick',
		C: 'minecraft:furnace',
		B: 'minecraft:smooth_stone'
	})
	
	event.shaped('geggy:wrought_dust', [
		'AA ',
		'AA ',
		'   '
	], {
		A: 'geggy:wrought_small_dust'
	})
	
	// fucking create designed like shit and not respecting recipe fucking time
	//event.blasting('minecraft:iron_ingot', 'modern_industrialization:iron_dust').cookingTime(36000)
	
	event.remove({type: "minecraft:crafting_shaped", output: "minecraft:chain"})
	event.shaped('minecraft:chain', [
		'AAA',
		' A ',
		'AAA'
	], {
		A: 'minecraft:iron_nugget'
	})
	
	///// IRON CATASTROPHY END /////
	
	event.remove({type: 'minecraft:smelting', output: 'modern_industrialization:steel_ingot'})
	event.remove({type: 'minecraft:blasting', output: 'modern_industrialization:steel_ingot'})
	
	///CREATE///
	
	event.remove({type: "minecraft:crafting_shaped", output: "create:chute"})
	event.shaped('create:chute', [
		'AAA',
		'A A',
		'AAA'
	], {
		A: 'create:andesite_alloy'
	})
	
	event.shaped('create:mechanical_saw', [
		'   ',
		' B ',
		' C '
	], {
		B: 'geggy:sharp_plate',
		C: 'create:andesite_casing'
	})
	
	event.shaped('minecraft:stonecutter', [
		'   ',
		' A ',
		'BBB'
	], {
		A: 'geggy:sharp_plate',
		B: 'minecraft:stone'
	})
	
	event.shaped('geggy:sharp_plate', [
		' AA',
		'ABA',
		'AA '
	], {
		A: 'minecraft:iron_nugget',
		B: 'modern_industrialization:lead_plate'
	})
	event.shaped('create:propeller', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'geggy:sharp_plate',
		B: 'create:andesite_alloy'
	})
	event.shaped('create:whisk', [
		' B ',
		' B ',
		'AAA'
	], {
		A: 'geggy:sharp_plate',
		B: 'create:shaft'
	})
	
	event.shaped('create:mechanical_press', [
		' B ',
		' C ',
		'AAA'
	], {
		A: 'minecraft:polished_blackstone_slab',
		B: 'create:andesite_casing',
		C: 'create:shaft'
	})
	
	event.remove({type: "minecraft:crafting_shaped", output: "create:mechanical_piston"})
	event.shaped('create:mechanical_piston', [
		' A ',
		'DBD',
		' C '
	], {
		A: '#minecraft:wooden_slabs',
		B: 'create:andesite_casing',
		C: 'create:piston_extension_pole',
		D: 'create:cogwheel'
	})
	
	event.remove({type: "minecraft:crafting_shaped", output: "create:shaft"})
	event.shaped('8x create:shaft', [
		' A ',
		' A ',
		' A '
	], {
		A: 'create:andesite_alloy'
	})
	event.remove({type: "create:cutting", output: "create:shaft"})
	event.custom({
			"type": "create:cutting",
			"ingredients": [{"item": "create:andesite_alloy"}],
			"results": [{"item": "create:shaft", "count": 4}]
	})
	
	event.remove({type: "minecraft:crafting_shaped", output: "create:hand_crank"})
	event.shaped('create:hand_crank', [
		'A  ',
		'BBB',
		'  C'
	], {
		A: 'create:cogwheel',
		B: '#minecraft:planks',
		C: 'create:andesite_alloy'
	})
	
	event.remove({type: "minecraft:crafting_shaped", output: "create:gearbox"})
	event.shaped('create:gearbox', [
		'DAD',
		'CBC',
		'DBD'
	], {
		A: 'create:piston_extension_pole',
		B: 'create:andesite_casing',
		C: 'create:large_cogwheel',
		D: '#minecraft:slabs'
	})
	
	event.remove({id: "create:crafting/logistics/andesite_funnel"})
	event.shaped('2x create:andesite_funnel', [
		'AAA',
		'ABA',
		'   '
	], {
		A: 'create:andesite_alloy',
		B: 'minecraft:dried_kelp'
	})
	
	// CREATE END
	
	event.recipes.modern_industrialization.macerator({
		eu: 2,
		duration: 100,
		item_inputs : [
			{item: "minecraft:flint", amount: 1}
		],
		item_outputs :
		[
			{item: "geggy:flint_dust", amount: 1}
		]
	})
	event.recipes.modern_industrialization.macerator({
		eu: 2,
		duration: 100,
		item_inputs : [
			{tag: "c:sand", amount: 1}
		],
		item_outputs :
		[
			{item: "geggy:quartz_sand", amount: 2}
		]
	})
	event.recipes.modern_industrialization.mixer({
		eu: 2,
		duration: 50,
		item_inputs : [
			{item: "geggy:quartz_sand", amount: 8},
			{item: "geggy:flint_dust", amount: 1}
		],
		item_outputs :
		[
			{item: "geggy:glass_dust", amount: 8}
		]
	})
	
	// GLASS
	event.remove({type: "oxidized:kiln_smelting", input: "minecraft:sand"})
	event.remove({type: "charm:firing", input: "#c:sand"})
	event.remove({type: "modern_industrialization:furnace", input: "#c:sand"})
	event.remove({type: "modern_industrialization:furnace", input: "immersive_weathering:vitrified_sand"})
	event.remove({type: "modern_industrialization:furnace", input: "betterend:endstone_dust"})
	event.remove({type: "minecraft:smelting", input: "#c:sand"})
	event.remove({type: "minecraft:smelting", input: "immersive_weathering:vitrified_sand"})
	event.remove({type: "minecraft:smelting", input: "betterend:endstone_dust"})
	
	event.remove({id: "minecraft:glass"})
	event.remove({id: "betterend:end_glass_smelting"})
	event.remove({id: "charm:kilns/glass"})
	event.recipes.modern_industrialization.salloy({
		eu: 2,
		duration: 300,
		item_inputs: [
			{item: "geggy:glass_dust", amount: 1},
			{item: "geggy:mold_block", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "minecraft:glass", amount: 1}
		]
	})
	event.recipes.modern_industrialization.salloy({
		eu: 2,
		duration: 300,
		item_inputs: [
			{item: "geggy:glass_dust", amount: 3},
			{item: "geggy:mold_bottle", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "minecraft:glass_bottle", amount: 1}
		]
	})
	
	event.shaped('minecraft:shears', [
		'AA ',
		'B  ',
		'   '
	], {
		A: 'farmersdelight:flint_knife',
		B: 'minecraft:string'
	})
	
	// iron catastrophy workaround
	event.shaped('minecraft:flint_and_steel', [
		'BA ',
		'   ',
		'   '
	], {
		A: 'minecraft:flint',
		B: 'geggy:tempered_brick'
	})
	
	event.remove({type: 'modern_industrialization:compressor', output: 'minecraft:paper'})
	event.recipes.modern_industrialization.compressor(2, 100)
        .itemIn("minecraft:sugar_cane")
		.itemOut("minecraft:paper")
	
	event.remove({type: 'minecraft:crafting_shapeless', output: 'minecraft:bread'})
	event.remove({type: 'minecraft:crafting_shaped', output: 'minecraft:bread'})
	event.remove({type: 'minecraft:crafting_shaped', output: 'farmersdelight:wheat_dough'})
	event.remove({type: 'minecraft:crafting_shapeless', output: 'farmersdelight:wheat_dough'})
	
	//event.remove({id: 'minecraft:torch'})
	
	// needs nbt removed from output
	event.shapeless('farmersdelight:wheat_dough', [ '3x minecraft:wheat', 'kibe:water_wooden_bucket', 'minecraft:egg']).replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
	
	// glass shapeless, 3, quarts + tiny pile of flint, mortar + glass (clear?), 8 quartz + 1 flint dust(8) x8
	// mortar: 1 flint > 1 tiny pile
	// tinkers > glass dust 800c 1000mb
	// casting table > 250 clear glass pane, 144 + mold glass bottle
	// casting basing > clear glass 1000
	// mold for bronze alloy smelter, 576 molten steel, casting table + casting form
	
	event.shapeless('geggy:flint_dust', ['geggy:flint_dust_tiny', 'geggy:flint_dust_tiny', 'geggy:flint_dust_tiny', 'geggy:flint_dust_tiny', 'geggy:flint_dust_tiny', 'geggy:flint_dust_tiny', 'geggy:flint_dust_tiny', 'geggy:flint_dust_tiny', 'geggy:flint_dust_tiny'])
	event.shapeless('geggy:glass_dust', ['geggy:flint_dust_tiny', 'geggy:quartz_sand'])
	event.shapeless('8x geggy:glass_dust', ['geggy:quartz_sand', 'geggy:quartz_sand', 'geggy:quartz_sand', 'geggy:quartz_sand', 'geggy:quartz_sand', 'geggy:quartz_sand', 'geggy:quartz_sand', 'geggy:quartz_sand', 'geggy:flint_dust'])
	

	//event.remove({type: "modern_industrialization:steel_packer", output: "minecraft:furnace"})
	//event.remove({type: "modern_industrialization:electric_packer", output: "minecraft:furnace"})
	
	// TO FIX 1.18
	/*
	event.remove({type: "tconstruct:melting", input: "#c:sand"})
	event.remove({type: "tconstruct:melting", input: "#tconstruct:casts/single_use/blank"})
	event.remove({type: "tconstruct:foundry", input: "#c:sand"})
	event.remove({type: "tconstruct:foundry", input: "#tconstruct:casts/single_use/blank"})
	
	event.remove({type: 'minecraft:crafting_shapeless', output: 'tconstruct:blank_sand_cast'})
	event.remove({type: 'minecraft:crafting_shaped', output: 'tconstruct:blank_sand_cast'})
	event.shapeless('8x tconstruct:blank_sand_cast', ['#c:sand'])
	
		
	event.shapeless('minecraft:glass', [ 'tconstruct:clear_glass'])
	*/
	
	//***
	event.replaceInput({type: 'minecraft:crafting_shaped', output: 'create:brown_toolbox'}, 'modern_industrialization:gold_plate', 'modern_industrialization:copper_plate')
	event.replaceInput({type: 'minecraft:crafting_shaped', output: 'create:goggles'}, '#c:gold_plates', 'modern_industrialization:copper_plate')
	event.replaceInput({type: 'minecraft:crafting_shaped', output: 'create:steam_engine'}, 'modern_industrialization:gold_plate', 'modern_industrialization:copper_plate')
	event.replaceInput({type: 'minecraft:crafting_shaped', output: 'create:steam_whistle'}, 'modern_industrialization:gold_plate', 'modern_industrialization:copper_plate')
	event.replaceInput({type: 'minecraft:crafting_shaped', output: 'create:weighted_ejector'}, 'modern_industrialization:gold_plate', 'modern_industrialization:copper_plate')
	event.replaceInput({type: 'minecraft:crafting_shaped', output: 'create:wrench'}, 'modern_industrialization:gold_plate', 'modern_industrialization:copper_plate')
	event.replaceInput({type: 'minecraft:crafting_shaped', output: 'modern_industrialization:capacitor'}, 'modern_industrialization:gold_plate', 'modern_industrialization:copper_plate')
	
	event.remove({type: "modern_industrialization:mixer", output: "modern_industrialization:rubber_sheet"})
	
	event.remove({id: "modern_industrialization", type: "modern_industrialization:cutting_machine", output: "#minecraft.planks"})
	
	event.recipes.modern_industrialization.compressor({
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "minecraft:clay_ball", amount: 8}
		],
		item_outputs: [
			{item: "geggy:unfired_clay_brick", amount: 8}
		]
	})
	
	event.recipes.modern_industrialization.packer({
		eu: 2,
		duration: 140,
		item_inputs: [
			{item: "modern_industrialization:iron_dust", amount: 2},
			{item: "geggy:primitive_brick_dust", amount: 2},
			{item: "geggy:kelp_dust", amount: 1}
		],
		item_outputs: [
			{item: "geggy:unfired_tempered_dust", amount: 1}
		]
	})
	
	event.recipes.modern_industrialization.macerator({
		eu: 2,
		duration: 80,
		item_inputs: [
			{item: "geggy:primitive_brick", amount: 1}
		],
		item_outputs: [
			{item: "geggy:primitive_brick_dust", amount: 4}
		]
	})
	
	event.recipes.modern_industrialization.mixer({
		eu: 2,
		duration: 120,
		item_inputs: [
			{tag: "c:gravel", amount: 3},
			{tag: "c:sand", amount: 3},
			{item: "geggy:clay_dust", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "minecraft:water", amount: 500}
		],
		item_outputs: [
			{item: "geggy:craut", amount: 12}
		]
	})
	
	event.recipes.modern_industrialization.packer({
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "minecraft:clay_ball", amount: 3},
			{tag: "c:sand", amount: 3},
			{tag: "c:gravel", amount: 2}
		],
		item_outputs: [
			{item: "geggy:unfired_coke_oven_brick", amount: 3}
		]
	})
	
	// replaced paper with kelp for belts
	event.recipes.modern_industrialization.mixer({
		eu: 2,
		duration: 160,
		item_inputs: [
			{item: "minecraft:dried_kelp", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:synthetic_rubber", amount: 111.11}
		],
		item_outputs: [
			{item: "modern_industrialization:rubber_sheet", amount: 12}
		]
	})
		
	event.recipes.modern_industrialization.mixer({
		eu: 2,
		duration: 300,
		item_inputs: [
			{item: "geggy:kelp_dust", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:rubber_sheet", amount: 2}
		]
	})	
	
	// createaddition yeeted
	event.shaped('geghilarity:ccf', [
		'EAE',
		'FDG'
	], {
		D: 'create:turntable',
		A: 'create:cogwheel',
		E: '#minecraft:planks',
		F: 'modern_industrialization:sodium_battery',
		G: 'create:electron_tube'
	})
		
	// GROUT END
	// GROUT END
	
	
	// MOVED TO CRAFTTWEAKER DUE TO KUBEJS BUGS!!
	
	/*
	event.shaped('2x geggy:uncooked_primitive_brick', [
		'DA ',
		'SG ',
		'   '
	], {
		D: Item.of('geggy:wooden_form').ignoreNBT(),
		A: 'minecraft:dried_kelp',
		S: 'tconstruct:grout',
		G: 'geggy:clay_dust'
	}).damageIngredient(0, 1)
	*/
	
	/*
	event.shaped('geggy:quartz_sand', [
		'D  ',
		'S  ',
		'   '
	], {
		D: '#c:sand',
		S: Item.of('geggy:stone_mortar').ignoreNBT()
	}).damageIngredient(3, 1)
	
	
	event.shaped('geggy:clay_dust', [
		'D  ',
		'S  ',
		'   '
	], {
		D: 'minecraft:clay_ball',
		S: Item.of('geggy:stone_mortar').ignoreNBT()
	}).damageIngredient(3, 1)
	*/
	
	//event.shapeless('2x geggy:uncooked_primitive_brick', [Item.of('geggy:wooden_form').ignoreNBT(), 'tconstruct:grout', 'minecraft:dried_kelp', 'geggy:clay_dust']).keepIngredient('geggy:wooden_form').damageIngredient(Item.of('geggy:wooden_form').ignoreNBT(), 1)
	
	//event.shapeless('geggy:clay_', ['geggy:quartz_dust', 'greggy:flint_dust_tiny'])
	
	event.recipes.modern_industrialization.wiremill({
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:iron_plate", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:iron_wire", amount: 2}
		]
	})
	event.recipes.modern_industrialization.wiremill({
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:iron_wire", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:iron_fine_wire", amount: 4}
		]
	})
	event.recipes.modern_industrialization.wiremill({
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:zinc_plate", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:zinc_wire", amount: 2}
		]
	})
	event.recipes.modern_industrialization.wiremill({
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:zinc_wire", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:zinc_fine_wire", amount: 4}
		]
	})
	event.recipes.modern_industrialization.compressor({
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "create:zinc_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:zinc_plate", amount: 1}
		]
	})
	
	
	
	
	
	
	
	
	
	
})


//onEvent('tags.fluids', event => {  
ServerEvents.tags('fluid', event => {
  
  //TINKERS 1.19
  //event.add('c:molten_andalloy', 'tconstruct:molten_andalloy')
  //event.add('c:molten_andesite', 'tconstruct:molten_andesite')
  event.add('c:epoxy_resin', 'geghilarity:epoxy_resin')
  
});

