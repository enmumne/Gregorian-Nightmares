//onEvent('player.logged_in', (event) => {


//onEvent('recipes', event => {
ServerEvents.recipes(event => {
	
	event.remove({id: 'minecraft:respawn_anchor'})
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
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 4,
		duration: 40,
		item_inputs: [ 
			{item: "geggy:primitive_brick", amount: 4},
			{tag: "minecraft:stone_crafting_materials", amount: 4},
			{item: "minecraft:coal", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:furnace", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 4,
		duration: 40,
		item_inputs: [ 
			{item: "geggy:j_planks", amount: 4},
			{item: "minecraft:stick", amount: 4},
			{item: "minecraft:flint", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:chest", amount: 2}
		]
	})
	
	// fast path to furnace brick
	event.blasting('geggy:primitive_brick', 'geggy:craut').cookingTime(1000)
	event.remove({id: 'minecraft:bucket'})
	event.shaped('minecraft:bucket', [
		'S S',
		' S ',
		'   '
	], {
		S: 'geggy:iron_curved_plate'
	})
	event.blasting('minecraft:bucket', 'geggy:unfinished_bucket').cookingTime(1600)
	
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
	
	event.remove({id: 'minecraft:paper'})
	
	event.shaped('2x geggy:fiber_pressed', [
		' A ',
		'SSS',
		' A '
	], {
		A: '#minecraft:slabs',
		S: 'geggy:filtered_pulp'
	}).keepIngredient(1).keepIngredient(7)
	
	// paper & string new
	
	event.remove({id: 'supplementaries:strings'})
	event.remove({id: 'create:compat/supplementaries/milling/flax'})
	event.remove({id: 'supplementaries:doormat_2'})
	event.remove({id: 'immersive_weathering:paper_from_birch_bark'})
	event.remove({id: 'farmersdelight:paper_from_tree_bark'})
	event.shaped('supplementaries:doormat', [
		'AA ',
		'   ',
		'   '
	], {
		A: 'geggy:linen'
	})
	event.shapeless('supplementaries:flax_seeds', ['supplementaries:wild_flax', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')
	event.shapeless('geggy:fiber', ['supplementaries:flax'])
	
	event.custom({
		"type": "minecraft:campfire_cooking",
		"ingredient": 
			{"item": "geggy:fiber"},
		"result": "geggy:dried_fiber",
		"cookingtime": 100
	})
	
	event.shaped('geggy:twine', [
		'AA ',
		'AA ',
		'   '
	], {
		A: 'geggy:dried_fiber'
	})
	
	// sails
	event.shaped('geggy:linen', [
		'AA ',
		'AA ',
		'   '
	], {
		A: 'geggy:twine'
	})
	
	// pulp for paper	
	event.shaped('geggy:fiber_pulp', [
		' A ',
		'BSB',
		' A '
	], {
		A: 'geggy:dried_fiber',
		B: 'geggy:chad',
		S: 'minecraft:water_bucket'
	}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
	event.shaped('geggy:fiber_pulp', [
		' A ',
		'BSB',
		' A '
	], {
		A: 'geggy:dried_fiber',
		B: 'geggy:chad',
		S: 'kibe:water_wooden_bucket'
	}).replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
	
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "geggy:fiber_pulp"}
		],
		"tool": 
			{"type": "farmersdelight:tool",
			"item": "create:filter"},
		"result": [
			{ "item": "geggy:filtered_pulp", "count": 1}
		]//,
		//"sound": "minecraft:item.axe.strip"
	})
	
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "geggy:linen"}
		],
		"tool": 
			{"type": "farmersdelight:tool",
			"item": "minecraft:shears"},
		"result": [
			{ "item": "minecraft:string", "count": 4}
		]//,
		//"sound": "minecraft:item.axe.strip"
	})
	
	// wheat > fiber
	
	event.shapeless('farmersdelight:straw', ['minecraft:wheat', 'minecraft:shears']).damageIngredient('minecraft:shears')
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "farmersdelight:straw"}
		],
		"tool": 
			{"type": "farmersdelight:tool",
			"item": "create:filter"},
		"result": [
			{ "item": "geggy:dried_fiber", "count": 1, "chance": 0.08}
		]//,
		//"sound": "minecraft:item.axe.strip"
	})
	
	
	
	

	
	event.custom({
	"type": "minecraft:campfire_cooking",
  "ingredient": {
    "item": "geggy:fiber_pressed"
  },
  "result": "minecraft:paper",
  "cookingtime": 600
	})
	

	
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
	
	// slag
	event.shaped('minecraft:clay_ball', [
		'AA ',
		'CB ',
		'   '
	], {
		A: 'geggy:slag',
		B: 'minecraft:water_bucket',
		C: 'minecraft:dirt',
	}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
	
	event.shaped('minecraft:clay_ball', [
		'AA ',
		'CB ',
		'   '
	], {
		A: 'geggy:slag',
		B: 'kibe:water_wooden_bucket',
		C: 'minecraft:dirt',
	}).replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
	event.blasting('geggy:slag', 'minecraft:gravel').cookingTime(800)
	
	event.custom({
		"type": "create:compacting",
		"ingredients": [
			{"item": "geggy:slag"},
			{"item": "geggy:slag"},
			{"item": "minecraft:dirt"},
			{"amount": 81000, "fluid": "minecraft:water"}
		],
		"results": [
			{"count": 2, "item": "minecraft:clay_ball"}
		]
	})
	
	event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": "geggy:slag"}
		],
		"processingTime": 300,
		"results": [
			{"count": 2, "item": "geggy:gravel_dust"},
			{"chance": 0.75, "count": 2, "item": "geggy:gravel_dust"}
		]
	})
	
	// uncooked furnace recipe
	event.smelting('geggy:primitive_brick', 'geggy:uncooked_primitive_brick').cookingTime(800)
	
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
	event.smelting('geggy:unfired_tempered_brick', 'geggy:unfired_tempered_dust').cookingTime(1000)
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
	
	event.smelting('minecraft:brick', 'geggy:unfired_coke_oven_brick').cookingTime(600)
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
	event.blasting('modern_industrialization:fire_clay_brick', 'geggy:compressed_fireclay').cookingTime(800)
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
	// rubber?
	event.shaped('create:fluid_pipe', [
		'AAA',
		'BBB',
		'   '
	], {
		A: 'modern_industrialization:copper_curved_plate',
		B: 'minecraft:dried_kelp'
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
	
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 1200,
		item_inputs: [ 
			{item: "geggy:glass_dust", amount: 2},
			{item: "modern_industrialization:quartz_dust", amount: 1}
		],
		item_outputs: [
			{item: "geggy:reinforced_glass_mixture", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 1000,
		item_inputs: [ 
			{item: "geggy:reinforced_glass_mixture", amount: 1},
			{item: "geggy:mold_plate", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:reinforced_glass_pane", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:reinforced_glass_mixture", amount: 1},
			{item: "geggy:mold_plate", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:reinforced_glass_pane", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 4,
		duration: 1000,
		item_inputs: [ 
			{item: "geggy:reinforced_glass_mixture", amount: 2},
			{item: "geggy:mold_block", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:reinforced_glass", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 32,
		duration: 1000,
		item_inputs: [ 
			{item: "geggy:reinforced_glass", amount: 1},
			{item: "ae2:certus_quartz_dust", amount: 1}
		],
		item_outputs: [
			{item: "ae2:quartz_glass", amount: 1}
		]
	})
	event.remove({id: 'ae2:decorative/quartz_vibrant_glass'})
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 64,
		duration: 1000,
		item_inputs: [ 
			{item: "ae2:quartz_glass", amount: 1},
			{item: "minecraft:glowstone_dust", amount: 2}
		],
		item_outputs: [
			{item: "ae2:quartz_vibrant_glass", amount: 1}
		]
	})
	
	
	event.remove({id: 'minecraft:glass_pane'})
	event.remove({id: 'modern_industrialization:vanilla_recipes/cutting_machine/glass_panes'})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 400,
		item_inputs: [ 
			{item: "geggy:glass_dust", amount: 1},
			{item: "geggy:mold_plate", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "minecraft:glass_pane", amount: 3}
		]
	})
	
	/*
	event.shaped('3x moderndynamics:item_pipe', [
		'ABA',
		'C C',
		'ABA'
	], {
		A: 'geggy:invar_curved_plate',
		B: 'geggy:reinforced_glass_pane',
		C: 'modern_industrialization:steel_gear'
	})
	
	event.shaped('3x moderndynamics:fluid_pipe', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: 'geggy:potin_curved_plate',
		B: 'geggy:reinforced_glass_pane',
		C: 'modern_industrialization:bronze_rotor',
		D: 'modern_industrialization:rubber_sheet'
	})
	*/
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:invar_curved_plate", amount: 4},
			{item: "geggy:reinforced_glass_pane", amount: 2},
			{item: "modern_industrialization:steel_gear", amount: 2},
			{item: "modern_industrialization:motor", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 50}
		],
		item_outputs: [
			{item: "moderndynamics:item_pipe", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:potin_curved_plate", amount: 4},
			{item: "geggy:reinforced_glass_pane", amount: 2},
			{item: "modern_industrialization:bronze_rotor", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:synthetic_rubber", amount: 50}
		],
		item_outputs: [
			{item: "moderndynamics:fluid_pipe", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 400,
		item_inputs: [ 
			{item: "modern_industrialization:steel_curved_plate", amount: 4},
			{item: "modern_industrialization:aluminum_rotor", amount: 2},
			{item: "geggy:reinforced_glass_pane", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:synthetic_rubber", amount: 200}
		],
		item_outputs: [
			{item: "modern_industrialization:fluid_pipe", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 400,
		item_inputs: [ 
			{item: "geggy:invar_curved_plate", amount: 4},
			{item: "modern_industrialization:rubber_sheet", amount: 3},
			{item: "modern_industrialization:invar_gear", amount: 2},
			{item: "modern_industrialization:motor", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 200}
		],
		item_outputs: [
			{item: "modern_industrialization:item_pipe", amount: 2}
		]
	})
	
	event.custom({
			"type": "create:pressing",
			"ingredients": [{"item": "modern_industrialization:invar_plate"}],
			"results": [{"item": "geggy:invar_curved_plate"}]
		})
	//event.recipes.createPressing(Item.of("geggy:invar_curved_plate", 1), ["modern_industrialization:invar_plate"])
	event.custom({ 
		type: "modern_industrialization:compressor",
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
	
	/*
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
	*/
	
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
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
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'modern_industrialization:cupronickel_wire_magnetic',
		D: 'modern_industrialization:pump',
		E: 'modern_industrialization:piston'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 3},
			{item: "modern_industrialization:cupronickel_wire_magnetic", amount: 2},
			{item: "modern_industrialization:pump", amount: 1},
			{item: "modern_industrialization:piston", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:pyro", amount: 1}
		]
	})
	
	//basic machine hull + brass
	event.remove({id: 'modern_industrialization:electric_age/hull/lv_machine_hull_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/electric_age/hull/lv_machine_hull'})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "modern_industrialization:steel_machine_casing"},
		transitionalItem: {"item": "geggy:incomplete_basic_hull"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_basic_hull"},
					{"item": "modern_industrialization:analog_circuit"}
				],
				results: [{
					"item": "geggy:incomplete_basic_hull"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_basic_hull"}
				],
				results: [{
					"item": "geggy:incomplete_basic_hull"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_basic_hull"},
					{"item": "modern_industrialization:tin_cable"}
				],
				results: [{
					"item": "geggy:incomplete_basic_hull"
				}]
			}			
		],
		results: [{
			"item": "geggy:basic_hull"
		}],
		loops: 1
	  }
	)
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "geggy:basic_hull"},
		transitionalItem: {"item": "geggy:incomplete_basic_machine_hull"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_basic_machine_hull"},
					{"item": "modern_industrialization:redstone_battery"}
				],
				results: [{
					"item": "geggy:incomplete_basic_machine_hull"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_basic_hull"},
					{"item": "modern_industrialization:tin_cable"}
				],
				results: [{
					"item": "geggy:incomplete_basic_hull"
				}]
			},	
			{
				type: "create:filling",
				ingredients: [
					{"item": "geggy:incomplete_basic_hull"},
					{"amount": 8748, "fluid": "modern_industrialization:soldering_alloy"}
				],
				results: [{
					"item": "geggy:incomplete_basic_hull"
				}]
			},	
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_basic_hull"},
					{"item": "create:brass_sheet"}
				],
				results: [{
					"item": "geggy:incomplete_basic_hull"
				}]
			}
		],
		results: [{
			"item": "modern_industrialization:basic_machine_hull"
		}],
		loops: 2
	  }
	)
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "modern_industrialization:tin_cable", amount: 3},
			{item: "modern_industrialization:redstone_battery", amount: 2},
			{item: "modern_industrialization:steel_machine_casing", amount: 1},
			{item: "create:brass_sheet", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 111}
		],
		item_outputs: [
			{item: "modern_industrialization:basic_machine_hull", amount: 1}
		]
	})
	
	
	// basic upgrades
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": "modern_industrialization:copper_dust"},{"item": "modern_industrialization:copper_dust"}],
		"results": [{"amount": 5832, "fluid": "geghilarity:mcopper"}]
	})
	event.remove({id: 'modern_industrialization:electric_age/upgrades/basic'})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:conveyor", amount: 2},
			{item: "modern_industrialization:motor", amount: 4},
			{item: "modern_industrialization:robot_arm", amount: 2},
			{item: "modern_industrialization:analog_circuit_board", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:mcopper", amount: 500}
		],
		item_outputs: [
			{item: "modern_industrialization:basic_upgrade", amount: 4}
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 60,
		item_inputs: [ 
			{item: "geghilarity:polytetrafluoroethylene_sheet", amount: 6}
		],
		item_outputs: [
			{item: "geghilarity:ptfe_pipe", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	//event.blasting('modern_industrialization:bronze_ingot', 'modern_industrialization:bronze_dust').cookingTime(400)
	
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
		'BAB',
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
	
	// funny cobblestone generators
	
	event.remove({id: 'kibe:cobblestone_generator_mk1'})
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
	event.remove({id: 'kibe:cobblestone_generator_mk2'})
	event.shaped('kibe:cobblestone_generator_mk2', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'kibe:cobblestone_generator_mk1',
		B: 'minecraft:nether_star'
	})
	event.remove({id: 'kibe:cobblestone_generator_mk3'})
	event.shaped('kibe:cobblestone_generator_mk3', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'kibe:cobblestone_generator_mk2',
		B: 'minecraft:nether_star'
	})
	event.remove({id: 'kibe:cobblestone_generator_mk4'})
	event.shaped('kibe:cobblestone_generator_mk4', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'kibe:cobblestone_generator_mk3',
		B: 'minecraft:nether_star'
	})
	event.remove({id: 'kibe:cobblestone_generator_mk5'})
	event.shaped('kibe:cobblestone_generator_mk5', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'kibe:cobblestone_generator_mk4',
		B: 'minecraft:nether_star'
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
		B: 'modern_industrialization:coal_dust',
		C: 'minecraft:stick'
	})
	event.remove({id: 'modern_industrialization:vanilla_recipes/lignite_torch'})
	event.shaped('minecraft:torch', [
		'A  ',
		'B  ',
		'   '
	], {
		A: 'modern_industrialization:lignite_coal',
		B: 'minecraft:stick'
	})
	
	event.custom({ 
		type: "modern_industrialization:packer",eu: 1, duration: 100,item_inputs: [{item: "modern_industrialization:coal_dust", amount: 9}],
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
		B: 'modern_industrialization:copper_rod',
		C: 'minecraft:barrel'
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	event.custom({ 
		type: "modern_industrialization:assembler",
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
	
	event.remove({id: 'modern_industrialization:assembler_generated/electric_age/component/craft/conveyor'})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:motor", amount: 2},
			{item: "create:belt_connector", amount: 3},
			{item: "modern_industrialization:tin_cable", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:conveyor", amount: 1}
		]
	})
	
	event.remove({id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})
	event.remove({type: 'minecraft:crafting_shapeless', output: 'minecraft:iron_ingot'})
	event.remove({type: 'minecraft:crafting_shaped', output: 'minecraft:iron_ingot'})
	event.remove({type: 'minecraft:smelting', output: 'minecraft:iron_ingot'})
	event.remove({type: 'minecraft:blasting', output: 'minecraft:iron_ingot'})
	//event.smelting('minecraft:iron_nugget', 'minecraft:raw_iron').cookingTime(1800) // 90 sec
	//event.smelting('minecraft:iron_nugget', 'create:crushed_iron_ore').cookingTime(1200) // 60 sec
	event.remove({type: 'minecraft:blasting', output: 'minecraft:iron_ingot'})
	
	// nerf back 1.6.6 ffs
	event.remove({id: 'modern_industrialization:materials/blast_furnace/steel_with_carbon'})
	/*
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 16,
		duration: 400,
		item_inputs : [
			{item: "modern_industrialization:carbon_dust", amount: 1},
			{item: "modern_industrialization:iron_dust", amount: 4}
		],
		item_outputs :
		[
			{item: "modern_industrialization:steel_ingot", amount: 4}
		]
	})
	*/
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 8,
		duration: 200,
		item_inputs : [
			{item: "modern_industrialization:iron_dust", amount: 3},
			{item: "modern_industrialization:carbon_dust", amount: 1}
			
		],
		item_outputs :
		[
			{item: "geggy:pig_iron_ingot", amount: 3},
			{item: "geghilarity:tiny_dark_ashes", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 8,
		duration: 300,
		item_inputs : [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 1}
		],
		item_outputs :
		[
			{item: "geggy:hot_steel_ingot", amount: 1}
		]
	})
	event.remove({id: 'modern_industrialization:materials/centrifuge/carbon'})
	/*
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 16,
		duration: 600,
		item_inputs : [
			{tag: "c:coal_dusts", amount: 1}
		],
		item_outputs :
		[
			{item: "modern_industrialization:carbon_dust", amount: 1}
		]
	})
	*/
	event.remove({id: 'modern_industrialization:vanilla_recipes/compressor/diamond_from_coal'})
	
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "minecraft:iron_ingot", amount: 1},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "minecraft:iron_nugget", amount: 9}
		]
	})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 1000,
		item_inputs: [
			{item: "minecraft:iron_nugget", amount: 9},
			{item: "geggy:mold_ingot", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "minecraft:iron_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "geggy:wrought_ingot", amount: 1},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:wrought_nugget", amount: 9}
		]
	})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
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
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "geggy:wrought_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geggy:wrought_dust", amount: 1}
		]
	})

	event.remove({id: 'modern_industrialization:materials/mixer/uncooked_steel_dust'})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 400,
		item_inputs: [
			{item: "geggy:wrought_dust", amount: 7},
			{item: "modern_industrialization:coke_dust", amount: 4},
			{item: "geggy:limestone_dust", amount: 3}
		],
		item_outputs: [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 7}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 8,
		duration: 100,
		item_inputs: [
			{item: "geggy:wrought_dust", amount: 3},
			{item: "modern_industrialization:carbon_dust", amount: 1},
			{item: "geggy:limestone_dust", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 4}
		]
	})
	
	event.blasting('geggy:wrought_nugget', 'minecraft:iron_nugget').cookingTime(200)
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "modern_industrialization:bronze_dust", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:bronze_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 4,
		duration: 400,
		item_inputs: [
			{item: "minecraft:copper_ingot", amount: 3},
			{item: "modern_industrialization:tin_ingot", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:bronze_ingot", amount: 4}
		]
	})
	
	event.smelting('geggy:tempered_brick', 'geggy:unfired_tempered_brick').cookingTime(1200)
	event.remove({id: 'minecraft:blast_furnace'})
	event.remove({id: 'modern_industrialization:vanilla_recipes/blast_furnace_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/vanilla_recipes/blast_furnace'})
	event.shaped('minecraft:blast_furnace', [
		'AAA',
		'ACA',
		'BBB'
	], {
		A: 'geggy:tempered_brick',
		C: 'minecraft:coal_block',
		B: 'minecraft:smooth_stone'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:tempered_brick", amount: 5},
			{item: "minecraft:coal_block", amount: 1},
			{item: "minecraft:smooth_stone", amount: 3}
		],
		item_outputs: [
			{item: "minecraft:blast_furnace", amount: 1}
		]
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
		' A ',
		'ABA',
		' A '
	], {
		A: 'create:andesite_alloy',
		B: 'modern_industrialization:tin_plate'
	})
	
	event.shaped('create:mechanical_saw', [
		' B ',
		'BDB',
		'ECE'
	], {
		B: 'geggy:sharp_plate',
		C: 'create:andesite_casing',
		D: 'modern_industrialization:lead_ingot',
		E: 'geggy:cogwheel'
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
		'AAA',
		'ABA',
		'AAA'
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
		' C ',
		'AAA'
	], {
		A: 'geggy:sharp_plate',
		B: 'create:shaft',
		C: 'create:andesite_alloy'
	})
	
	event.shaped('create:mechanical_press', [
		' B ',
		' C ',
		'AAA'
	], {
		A: 'minecraft:polished_blackstone_slab',
		B: 'create:andesite_casing',
		C: 'create:piston_extension_pole'
	})
	
	event.remove({type: "minecraft:crafting_shaped", output: "create:mechanical_piston"})
	event.shaped('create:mechanical_piston', [
		'FAF',
		'FCF',
		'DBE'
	], {
		A: '#minecraft:wooden_slabs',
		B: 'create:andesite_casing',
		C: 'create:piston_extension_pole',
		D: 'create:cogwheel',
		E: 'geggy:cogwheel',
		F: 'minecraft:iron_nugget'
	})
	
	event.remove({type: "minecraft:crafting_shaped", output: "create:shaft"})
	event.shaped('create:shaft', [
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
			"results": [{"item": "create:shaft", "count": 2}]
	})
	
	event.remove({type: "minecraft:crafting_shaped", output: "create:hand_crank"})
	event.shaped('create:hand_crank', [
		'A  ',
		'BBB',
		'  C'
	], {
		A: 'geggy:cogwheel',
		B: '#minecraft:planks',
		C: 'create:andesite_alloy'
	})
	
	event.remove({id: "create:crafting/logistics/andesite_funnel"})
	event.shaped('create:andesite_funnel', [
		'AAA',
		'ABA',
		'   '
	], {
		A: 'create:andesite_alloy',
		B: 'modern_industrialization:rubber_sheet'
	})
	
	event.remove({id: "create:crafting/logistics/andesite_tunnel"})
	event.shaped('create:andesite_tunnel', [
		'ACA',
		'B B',
		'   '
	], {
		A: 'create:andesite_alloy',
		B: 'modern_industrialization:rubber_sheet',
		C: 'create:andesite_casing'
	})
	
	event.remove({id: "create:crafting/logistics/brass_funnel"})
	event.shaped('create:brass_funnel', [
		'AAA',
		'ABA',
		'D E'
	], {
		A: 'create:brass_ingot',
		B: 'modern_industrialization:rubber_sheet',
		D: 'modern_industrialization:capacitor',
		E: 'create:electron_tube'
	})
	
	event.remove({id: "create:crafting/logistics/brass_tunnel"})
	event.shaped('create:brass_tunnel', [
		'ACA',
		'B B',
		'D E'
	], {
		A: 'create:brass_ingot',
		B: 'modern_industrialization:rubber_sheet',
		C: 'create:brass_casing',
		D: 'modern_industrialization:capacitor',
		E: 'create:electron_tube'
	})
	
	// MI barrels nerf
	event.remove({id: "modern_industrialization:materials/bronze/craft/barrel"})
	event.remove({id: "modern_industrialization:materials/steel/craft/barrel"})
	event.remove({id: "modern_industrialization:materials/aluminum/craft/barrel"})
	event.remove({id: "modern_industrialization:materials/stainless_steel/craft/barrel"})
	event.remove({id: "modern_industrialization:materials/titanium/craft/barrel"})
	
	// CREATE END
	
	event.custom({ 
		type: "modern_industrialization:macerator",
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
	event.custom({ 
		type: "modern_industrialization:macerator",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
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
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 600,
		item_inputs: [
			{item: "geggy:glass_dust", amount: 1},
			{item: "geggy:mold_block", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "minecraft:glass", amount: 1}
		]
	})
	event.remove({id: 'minecraft:glass_bottle'})
	event.remove({id: 'modern_industrialization:vanilla_recipes/compressor/glass_bottle'})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 600,
		item_inputs: [
			{item: "geggy:glass_dust", amount: 1},
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
	
	
	//***
	event.replaceInput({type: 'minecraft:crafting_shaped', output: 'create:steam_engine'}, 'modern_industrialization:gold_plate', 'modern_industrialization:copper_plate')
	event.replaceInput({type: 'minecraft:crafting_shaped', output: 'create:steam_whistle'}, 'modern_industrialization:gold_plate', 'modern_industrialization:copper_plate')
	event.remove({id: 'modern_industrialization:electric_age/component/craft/capacitor'})
	event.shaped('modern_industrialization:capacitor', [
		'ADA',
		'CBC',
		'ADA'
	], {
		A: 'minecraft:gold_nugget',
		B: 'modern_industrialization:rubber_sheet',
		C: 'modern_industrialization:copper_wire',
		D: 'modern_industrialization:copper_plate'
	})
	
	event.remove({type: "modern_industrialization:mixer", output: "modern_industrialization:rubber_sheet"})
	
	event.remove({id: "modern_industrialization", type: "modern_industrialization:cutting_machine", output: "#minecraft.planks"})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "minecraft:clay_ball", amount: 8}
		],
		item_outputs: [
			{item: "geggy:unfired_clay_brick", amount: 8}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:packer",
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
	
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 80,
		item_inputs: [
			{item: "geggy:primitive_brick", amount: 1}
		],
		item_outputs: [
			{item: "geggy:primitive_brick_dust", amount: 4}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
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
			{item: "geggy:craut", amount: 8}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:packer",
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
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 160,
		item_inputs: [
			{item: "minecraft:paper", amount: 6}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:synthetic_rubber", amount: 120}
		],
		item_outputs: [
			{item: "modern_industrialization:rubber_sheet", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 150,
		item_inputs: [
			{item: "geggy:heated_rubber", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:synthetic_oil", amount: 111}
		],
		item_outputs: [
			{item: "modern_industrialization:rubber_sheet", amount: 6}
		]
	})
		
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "geggy:kelp_dust", amount: 6},
			{item: "minecraft:dandelion", amount: 1},
			{item: "modern_industrialization:sulfur_tiny_dust", amount: 1}
			
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 250}
		],
		item_outputs: [
			{item: "geggy:rubber_pulp", amount: 6}
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
		F: 'modern_industrialization:silicon_battery',
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
	
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:iron_plate", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:iron_wire", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:iron_wire", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:iron_fine_wire", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:zinc_plate", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:zinc_wire", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:zinc_wire", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:zinc_fine_wire", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "create:zinc_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:zinc_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 12,
		duration: 100,
		item_inputs: [
			{item: "modern_industrialization:steel_plate", amount: 1}
		],
		item_outputs: [
			{item: "geggy:steel_wire", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 12,
		duration: 100,
		item_inputs: [
			{item: "geggy:steel_wire", amount: 1}
		],
		item_outputs: [
			{item: "geggy:fine_steel_wire", amount: 4}
		]
	})
	
	event.remove({id: 'create:pressing/sugar_cane'})
	event.remove({id: 'modern_industrialization:vanilla_recipes/mixer/paper'})
	event.remove({id: 'modern_industrialization:vanilla_recipes/compressor/paper_with_sugarcane'})
	event.custom({
			"type": "create:pressing",
			"ingredients": [{"item": "minecraft:sugar_cane"}],
			"results": [{"item": "geggy:chad"}]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "modern_industrialization:wood_pulp", amount: 1}
		],
		item_outputs: [
			{item: "geggy:chad", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 38,
		duration: 100,
		item_inputs: [
			{item: "geggy:chad", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:paper", amount: 1}
		]
	})
	
	
	event.remove({id: 'modern_industrialization:materials/blast_furnace/steel'})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 2,
		duration: 600,
		item_inputs : [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 1},
			{item: "geggy:limestone_dust", amount: 1}
		],
		item_outputs :
		[
			{item: "geggy:hot_steel_ingot", amount: 1}
		]
	})
	//credit Prunoideae
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "geggy:hot_steel_ingot"},
		transitionalItem: {"item": "geggy:incomplete_steel_ingot"},
		sequence: [
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_steel_ingot"}
				],
				results: [{
					"item": "geggy:incomplete_steel_ingot"
				}]
		  	},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_steel_ingot"}
				],
				results: [{
					"item": "geggy:incomplete_steel_ingot"
				}]
		  	},
			{
				type: "create:filling",
				ingredients: [
					{"item": "geggy:incomplete_steel_ingot"},
				// 500
					{"amount": 40500, "fluid": "minecraft:water", "nbt": {}}
				],
				results: [{
					"item": "geggy:incomplete_steel_ingot"
				}]
			}		
		],
		results: [{
			"item": "modern_industrialization:steel_ingot"
		}],
		loops: 2
	  }
	)  
	
	// brass pbf
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 2,
		duration: 100,
		item_inputs : [
			{item: "kubejs:brass_dust", amount: 1}//,
			//{item: "geggy:selector_1", probability: 0.0}
		],
		item_outputs :
		[
			{item: "create:brass_ingot", amount: 1}
		]
	})
	
	// for recipe selection
	event.shaped('geggy:selector_1', [
		'A  ',
		'   ',
		'   '
	], {
		A: '#selector'
	}).noShrink()
	event.shaped('geggy:selector_2', [
		' A ',
		'   ',
		'   '
	], {
		A: '#selector'
	}).noShrink()
	event.shaped('geggy:selector_3', [
		'  A',
		'   ',
		'   '
	], {
		A: '#selector'
	}).noShrink()
	event.shaped('geggy:selector_4', [
		'   ',
		'A  ',
		'   '
	], {
		A: '#selector'
	}).noShrink()
	event.shaped('geggy:selector_5', [
		'   ',
		' A ',
		'   '
	], {
		A: '#selector'
	}).noShrink()
	
	event.remove({id: 'create:sequenced_assembly/precision_mechanism'})
	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
		"item": "create:brass_sheet"
	},
		"loops": 4,
  "results": [
    {
      "chance": 120.0,
      "item": "create:precision_mechanism"
    },
    {
      "chance": 8.0,
      "item": "create:brass_sheet"
    },
    {
      "chance": 8.0,
      "item": "create:andesite_alloy"
    },
    {
      "chance": 5.0,
      "item": "create:cogwheel"
    },
    {
      "chance": 3.0,
      "item": "minecraft:gold_nugget"
    },
    {
      "chance": 2.0,
      "item": "create:shaft"
    },
    {
      "chance": 2.0,
      "item": "create:crushed_iron_ore"
    },
    {
      "item": "minecraft:iron_nugget"
    },
    {
      "item": "minecraft:clock"
    }
  ],
  "sequence": [
	{
      "type": "create:cutting",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ],
      "results": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": "create:cogwheel"
        }
      ],
      "results": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "tag": "c:gold_nuggets"
        }
      ],
      "results": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "tag": "c:iron_nuggets"
        }
      ],
      "results": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ]
    },
	{
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": "modern_industrialization:rubber_sheet"
        }
      ],
      "results": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ]
    },
  ],
  "transitionalItem": {
    "item": "create:incomplete_precision_mechanism"
  }
})
event.remove({id: 'create:crafting/materials/electron_tube'})	
event.shaped('create:electron_tube', [
		'A  ',
		'B  ',
		'   '
	], {
		A: 'create:polished_rose_quartz',
		B: 'modern_industrialization:tin_plate'
})
event.remove({id: 'create:crafting/kinetics/deployer'})	
event.shaped('create:deployer', [
		'AD ',
		'BL ',
		'C  '
	], {
		A: 'create:electron_tube',
		B: 'create:andesite_casing',
		C: 'create:brass_hand',
		D: 'geggy:cogwheel',
		L: 'create:piston_extension_pole'
	})

event.remove({id: 'modern_industrialization:other/packer_double_ingot_template'})		
event.shaped('modern_industrialization:packer_double_ingot_template', [
		'A  ',
		'A  ',
		'B  '
	], {
		A: 'minecraft:iron_ingot',
		B: 'modern_industrialization:steel_ingot'
	})	
	
event.remove({id: "modern_industrialization:vanilla_recipes/centrifuge/lava"})

event.remove({id: "moderndynamics:machine_extender"})
event.shaped('moderndynamics:machine_extender', [
		'BDB',
		'CAC',
		'BDB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:steel_plate',
		C: 'modern_industrialization:cupronickel_cable',
		D: 'modern_industrialization:inductor'
	})

	event.remove({id: "modern_industrialization:electric_age/component/craft/resistor"})
	event.remove({id: "modern_industrialization:electric_age/component/assembler/resistor"})
	event.shaped('modern_industrialization:resistor', [
		' B ',
		'ACA',
		' B '
	], {
		A: 'modern_industrialization:copper_fine_wire',
		B: 'minecraft:paper',
		C: 'modern_industrialization:coal_dust'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:copper_fine_wire", amount: 2},
			{item: "minecraft:paper", amount: 1},
			{item: "modern_industrialization:coal_dust", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:resistor", amount: 2}
		]
	})
	
	event.remove({id: 'magick:dust_to_diamond'})
	
	// NEW IRON/STEEL
	event.remove({id: 'yttr:crafting/iron_nugget'})
	event.remove({id: 'yttr:shattering/yttr/crafting/iron_nugget'})
	event.remove({id: 'modern_industrialization:materials/iron/smelting/tiny_dust_to_nugget_smelting'})
	event.remove({id: 'modern_industrialization:materials/iron/smelting/tiny_dust_to_nugget_blasting'})
	// 3 to 2 to match ingot pbf
	event.shaped('2x geggy:tiny_iron_blend_dust', [
		'SSS',
		'BB ',
		'   '
	], {
		S: 'modern_industrialization:iron_tiny_dust',
		B: 'modern_industrialization:coal_tiny_dust'
	})
	event.blasting('minecraft:iron_nugget', 'geggy:tiny_iron_blend_dust').cookingTime(400)
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 2,
		duration: 360,
		item_inputs: [
			{item: "modern_industrialization:iron_dust", amount: 3},
			{item: "modern_industrialization:coke_dust", amount: 2}
		],
		item_outputs: [
			{item: "geggy:pig_iron_ingot", amount: 2},
			{item: "geghilarity:tiny_dark_ashes", amount: 2}
		]
	})	
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 2,
		duration: 400,
		item_inputs: [
			{item: "modern_industrialization:iron_dust", amount: 3},
			{item: "modern_industrialization:coke", amount: 2}
		],
		item_outputs: [
			{item: "geggy:pig_iron_ingot", amount: 2},
			{item: "geghilarity:tiny_dark_ashes", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 2,
		duration: 900,
		item_inputs: [
			{item: "modern_industrialization:iron_dust", amount: 3},
			{item: "minecraft:coal", amount: 3}
		],
		item_outputs: [
			{item: "geggy:pig_iron_ingot", amount: 2},
			{item: "geghilarity:tiny_dark_ashes", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 2,
		duration: 900,
		item_inputs: [
			{item: "modern_industrialization:iron_dust", amount: 3},
			{item: "minecraft:charcoal", amount: 3}
		],
		item_outputs: [
			{item: "geggy:pig_iron_ingot", amount: 2},
			{item: "geghilarity:tiny_dark_ashes", amount: 3}
		]
	})
	event.blasting('minecraft:iron_ingot', 'geggy:pig_iron_ingot').cookingTime(200)
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 300,
		item_inputs: [
			{item: "geggy:pig_iron_ingot", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 400}
		],
		item_outputs: [
			{item: "modern_industrialization:steel_ingot", amount: 1}
		]
	})
	
	// coke oven
	
	event.remove({id: 'modern_industrialization:materials/coke_oven/coke'})
	event.remove({id: 'modern_industrialization:materials/coke_oven/coke_dust'})
	
	event.custom({
		"type" : "modern_industrialization:coke_oven",
		"eu" : 2,
		"duration" : 200,
		"item_inputs" : {"tag" : "minecraft:logs", "amount" : 1},
		"fluid_outputs" : {
			"fluid" : "modern_industrialization:creosote", "amount" : 500, "probability" : 0.35
		},
		"item_outputs" : {
			"item" : "minecraft:charcoal", "amount" : 1
		}
	})
	
	event.custom({ 
		type: "modern_industrialization:coke_oven",
		eu: 2,
		duration: 600,
		item_inputs: [
			{item: "minecraft:charcoal", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:coke", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:creosote", amount: 500, probability: 0.5}
		]
	})
	event.custom({ 
		type: "modern_industrialization:coke_oven",
		eu: 2,
		duration: 400,
		item_inputs: [
			{item: "minecraft:coal", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:coke", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:creosote", amount: 500, probability: 0.5}
		]
	})
	event.custom({ 
		type: "modern_industrialization:coke_oven",
		eu: 2,
		duration: 400,
		item_inputs: [
			{item: "modern_industrialization:coal_dust", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:coke_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:creosote", amount: 500, probability: 0.65}
		]
	})
	
	// potin
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:bronze_dust", amount: 8},
			{item: "modern_industrialization:lead_dust", amount: 1}
		],
		item_outputs: [
			{item: "geggy:potin_dust", amount: 8}
		]
	})
	event.smelting('geggy:potin_ingot', 'geggy:potin_dust').cookingTime(200)
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "geggy:potin_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geggy:potin_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "geggy:potin_plate", amount: 1}
		],
		item_outputs: [
			{item: "geggy:potin_curved_plate", amount: 1}
		]
	})
	
	// nickel rod
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:nickel_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:nickel_rod", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:nickel_double_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:nickel_rod", amount: 4}
		]
	})
	
	// removed silver from lead
	event.remove({id: 'modern_industrialization:materials/macerator/lead_crushed_to_dust'})
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "modern_industrialization:raw_lead", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:lead_dust", amount: 1},
			{item: "modern_industrialization:lead_dust", amount: 1, probability: 0.5}
		]
	})
	
	event.remove({id: 'modern_industrialization:materials/blast_furnace/bauxite_to_aluminum_ingot'})
	
	// default alu from emerald
	event.remove({id: 'modern_industrialization:materials/electrolyzer/beryllium_dust'})
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 32,
		duration: 400,
		item_inputs: [
			{item: "modern_industrialization:emerald_dust", amount: 23}
		],
		item_outputs: [
			{item: "modern_industrialization:beryllium_dust", amount: 3},
			{item: "geghilarity:alumina", amount: 2},
			{item: "modern_industrialization:silicon_dust", amount: 6}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:oxygen", amount: 3000}
		]
	})
	
	// more create crushing ores removals
	event.remove({id: 'create:smelting/uranium_ingot_compat_modern_industrialization'})
	event.remove({id: 'create:blasting/uranium_ingot_compat_modern_industrialization'})
	
	// arc furnace
	
	event.shaped('geghilarity_fatmachines:steel_frame_box', [
		'AAA',
		'A A',
		'AAA'
	], {
		A: 'modern_industrialization:steel_rod'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 64,
		item_inputs: [ 
			{item: "modern_industrialization:steel_rod", amount: 6}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:steel_frame_box", amount: 1}
		]
	})
	event.shaped('geghilarity_fatmachines:machine_casing_firebox_steel', [
		'BAB',
		'ACA',
		'BAB'
	], {
		A: 'modern_industrialization:steel_rod',
		B: 'modern_industrialization:steel_plate',
		C: 'geghilarity_fatmachines:steel_frame_box'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:steel_rod", amount: 4},
			{item: "modern_industrialization:steel_plate", amount: 4},
			{item: "geghilarity_fatmachines:steel_frame_box", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:machine_casing_firebox_steel", amount: 1}
		]
	})
	event.shaped('geghilarity_fatmachines:casing_solid_steel', [
		'B B',
		'BCB',
		'B B'
	], {
		B: 'modern_industrialization:steel_plate',
		C: 'geghilarity_fatmachines:steel_frame_box'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:steel_plate", amount: 6},
			{item: "geghilarity_fatmachines:steel_frame_box", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:casing_solid_steel", amount: 1}
		]
	})
	event.shaped('geghilarity_fatmachines:casing_pipe_steel', [
		'CAC',
		'ABA',
		'CAC'
	], {
		A: 'modern_industrialization:steel_rod',
		B: 'modern_industrialization:steel_machine_casing_pipe',
		C: 'modern_industrialization:steel_plate'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:steel_rod", amount: 4},
			{item: "modern_industrialization:steel_plate", amount: 4},
			{item: "modern_industrialization:steel_machine_casing_pipe", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:casing_pipe_steel", amount: 1}
		]
	})
	event.shaped('geghilarity_fatmachines:carbon_electrode_assembly', [
		'CDC',
		'ABA',
		'CDC'
	], {
		A: 'geghilarity:graphite_electrode',
		B: 'geghilarity_fatmachines:steel_frame_box',
		C: 'modern_industrialization:steel_plate',
		D: 'modern_industrialization:annealed_copper_wire'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:graphite_electrode", amount: 2},
			{item: "modern_industrialization:annealed_copper_wire", amount: 2},
			{item: "modern_industrialization:steel_plate", amount: 4},
			{item: "geghilarity_fatmachines:steel_frame_box", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:carbon_electrode_assembly", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:arc_furnace', [
		'EDE',
		'BAB',
		'CCC'
	], {
		A: 'modern_industrialization:advanced_machine_hull',
		B: 'modern_industrialization:electronic_circuit',
		C: 'modern_industrialization:steel_large_plate',
		D: 'geghilarity_fatmachines:carbon_electrode_assembly',
		E: 'modern_industrialization:large_pump'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:advanced_machine_hull", amount: 1},
			{item: "modern_industrialization:steel_large_plate", amount: 3},
			{item: "modern_industrialization:electronic_circuit", amount: 2},
			{item: "modern_industrialization:large_pump", amount: 2},
			{item: "geghilarity_fatmachines:carbon_electrode_assembly", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:arc_furnace", amount: 1}
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
		D: 'modern_industrialization:tin_cable',
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
			{item: "modern_industrialization:tin_cable", amount: 2}
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
		C: 'modern_industrialization:steel_plate',
		D: 'modern_industrialization:tin_cable',
		E: 'modern_industrialization:electrum_fine_wire'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 3},
			{item: "modern_industrialization:steel_plate", amount: 2},
			{item: "modern_industrialization:tin_cable", amount: 1},
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
		C: 'modern_industrialization:steel_plate',
		D: 'modern_industrialization:pump',
		E: 'ae2:quartz_vibrant_glass'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "modern_industrialization:steel_plate", amount: 2},
			{item: "modern_industrialization:pump", amount: 1},
			{item: "ae2:quartz_vibrant_glass", amount: 3}
		],
		item_outputs: [
			{item: "modern_industrialization:crystallizer", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:roaster', [
		'BDB',
		'EAE',
		'CEC'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'modern_industrialization:tin_cable',
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
			{item: "modern_industrialization:tin_cable", amount: 2},
			{item: "modern_industrialization:tin_rotor", amount: 1},
			{item: "modern_industrialization:cupronickel_wire_magnetic", amount: 3}
		],
		item_outputs: [
			{item: "modern_industrialization:roaster", amount: 1}
		]
	})
	
	// misc sy util
	event.smelting('geghilarity:graphite_ingot', 'geghilarity:graphite_dust').cookingTime(200)
	
	event.remove({id: 'minecraft:iron_block'})
	event.remove({id: 'modern_industrialization:materials/steel/craft/ingot_from_block'})
	
	event.remove({id: 'modern_industrialization:steam_age/bronze/cutting_machine_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/steam_age/bronze/cutting_machine'})
	event.shaped('modern_industrialization:bronze_cutting_machine', [
		'CDC',
		'BAB',
		'EEE'
	], {
		A: 'modern_industrialization:bronze_machine_casing',
		B: 'modern_industrialization:copper_gear',
		C: 'geggy:reinforced_glass_pane',
		D: 'minecraft:diamond',
		E: 'moderndynamics:fluid_pipe'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:bronze_machine_casing", amount: 1},
			{item: "modern_industrialization:copper_gear", amount: 2},
			{item: "geggy:reinforced_glass_pane", amount: 2},
			{item: "minecraft:diamond", amount: 1},
			{item: "moderndynamics:fluid_pipe", amount: 3}
		],
		item_outputs: [
			{item: "modern_industrialization:bronze_cutting_machine", amount: 1}
		]
	})
	
	event.remove({id: 'extended_drawers:lock'})
	event.shaped('extended_drawers:lock', [
		'AAA',
		'A A',
		'BBB'
	], {
		A: 'minecraft:gold_nugget',
		B: 'create:brass_sheet'
	})
	
	const ctblades = [
		'aluminum',
		'bronze',
		'copper',
		'stainless_steel',
		'tin',
		'titanium'
	]
	ctblades.forEach(mat =>{
		event.remove({id: "modern_industrialization:materials/"+mat+"/craft/blade"})
		event.remove({id: "modern_industrialization:materials/"+mat+"/packer/blade"})
		event.shaped("modern_industrialization:"+mat+"_blade", [
		'A  ',
		'A  ',
		'B  '
	], {
		A: "modern_industrialization:"+mat+"_curved_plate",
		B: "modern_industrialization:"+mat+"_rod"
	})
	event.custom({ 
		type: "modern_industrialization:packer",
		eu: 4,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:"+mat+"_curved_plate", amount: 4},
			{item: "modern_industrialization:"+mat+"_rod", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:"+mat+"_blade", amount: 1}
		]
	})
	})
	
	const earlytank = [
		'bronze',
		'steel',
	]
	earlytank.forEach(mat =>{
		event.remove({id: "modern_industrialization:materials/"+mat+"/craft/tank"})
		event.remove({id: "modern_industrialization:materials/"+mat+"/assembler/tank"})
		event.shaped("modern_industrialization:"+mat+"_tank", [
			'ADA',
			'CBC',
			'AEA'
		], {
			A: "modern_industrialization:"+mat+"_large_plate",
			B: "geggy:reinforced_glass",
			C: "geggy:reinforced_glass_pane",
			D: "create:precision_mechanism",
			E: "moderndynamics:fluid_pipe"
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
			eu: 8,
			duration: 200,
			item_inputs: [ 
				{item: "modern_industrialization:"+mat+"_large_plate", amount: 4},
				{item: "geggy:reinforced_glass", amount: 1},
				{item: "geggy:reinforced_glass_pane", amount: 2},
				{item: "modern_industrialization:analog_circuit", amount: 1},
				{item: "modern_industrialization:fluid_pipe", amount: 1}
			],
			item_outputs: [
				{item: "modern_industrialization:"+mat+"_tank", amount: 1}
			]
	})
	})
	
	const latetank = [
		'aluminum',
		'stainless_steel',
		'titanium'
	]
	latetank.forEach(mat =>{
		event.remove({id: "modern_industrialization:materials/"+mat+"/craft/tank"})
		event.remove({id: "modern_industrialization:materials/"+mat+"/assembler/tank"})
		event.custom({ 
		type: "modern_industrialization:assembler",
			eu: 32,
			duration: 300,
			item_inputs: [ 
				{item: "modern_industrialization:"+mat+"_large_plate", amount: 4},
				{item: "ae2:quartz_vibrant_glass", amount: 1},
				{item: "geggy:reinforced_glass_pane", amount: 2},
				{item: "modern_industrialization:electronic_circuit", amount: 1},
				{item: "modern_industrialization:fluid_pipe", amount: 1}
			],
			item_outputs: [
				{item: "modern_industrialization:"+mat+"_tank", amount: 1}
			]
	})
	})
	
	event.remove({id: 'modern_industrialization:electric_age/machine/mixer_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/electric_age/machine/mixer'})
	event.shaped('modern_industrialization:electric_mixer', [
		'DFD',
		'BAB',
		'CEC'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:tin_rotor',
		C: 'modern_industrialization:analog_circuit',
		D: 'geggy:reinforced_glass',
		E: 'moderndynamics:fluid_pipe',
		F: 'modern_industrialization:motor'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:tin_rotor", amount: 2},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "geggy:reinforced_glass", amount: 2},
			{item: "moderndynamics:fluid_pipe", amount: 1},
			{item: "modern_industrialization:motor", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_mixer", amount: 1}
		]
	})
	
	event.remove({id: 'modern_industrialization:electric_age/machine/distillery_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/electric_age/machine/distillery'})
	event.shaped('modern_industrialization:distillery', [
		'DFD',
		'BAB',
		'CEC'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:large_pump',
		C: 'modern_industrialization:electronic_circuit',
		D: 'ae2:quartz_vibrant_glass',
		E: 'modern_industrialization:electrum_cable',
		F: 'modern_industrialization:fluid_pipe'
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
			{item: "modern_industrialization:electrum_cable", amount: 1},
			{item: "modern_industrialization:fluid_pipe", amount: 1}
			
		],
		item_outputs: [
			{item: "modern_industrialization:distillery", amount: 1}
		]
	})
	
	event.remove({id: 'modern_industrialization:electric_age/machine/cutting_machine_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/electric_age/machine/cutting_machine'})
	event.shaped('modern_industrialization:electric_cutting_machine', [
		'DFD',
		'BAB',
		'CEC'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:motor',
		C: 'modern_industrialization:analog_circuit',
		D: 'ae2:quartz_glass',
		E: 'modern_industrialization:conveyor',
		F: 'modern_industrialization:invar_rotary_blade'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:motor", amount: 2},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "ae2:quartz_glass", amount: 2},
			{item: "modern_industrialization:conveyor", amount: 1},
			{item: "modern_industrialization:invar_rotary_blade", amount: 1}
			
		],
		item_outputs: [
			{item: "modern_industrialization:electric_cutting_machine", amount: 1}
		]
	})
	
	event.remove({id: 'modern_industrialization:materials/blast_furnace/silicium_from_quartz'})
	event.remove({id: 'ae2:smelting/silicon_from_certus_quartz_dust'})
	event.remove({id: 'ae2:blasting/silicon_from_certus_quartz_dust'})
	event.remove({id: 'ae2:smelting/silicon_from_certus_quartz_dust_exported_mi_furnace'})
	
	event.remove({id: 'modern_industrialization:electric_age/component/craft/diode_doped_asbl'})
	event.remove({id: 'modern_industrialization:electric_age/component/craft/diode_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/electric_age/component/craft/diode'})
	event.remove({id: 'modern_industrialization:assembler_generated/electric_age/component/craft/diode_doped'})
	event.shaped('modern_industrialization:diode', [
		'ACB',
		'ADE',
		'ACB'
	], {
		A: 'modern_industrialization:electrum_fine_wire',
		B: 'ae2:quartz_glass',
		C: 'modern_industrialization:steel_curved_plate',
		D: 'modern_industrialization:silicon_plate',
		E: 'geghilarity:gallium_dust'
	})
	event.shaped('modern_industrialization:diode', [
		'EC ',
		'ADB',
		'EC '
	], {
		A: 'modern_industrialization:electrum_fine_wire',
		B: 'ae2:quartz_glass',
		C: 'modern_industrialization:steel_curved_plate',
		D: 'modern_industrialization:silicon_n_doped_plate',
		E: 'geghilarity:tiny_gallium_dust'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:silicon_n_doped_plate", amount: 1},
			{item: "ae2:quartz_glass", amount: 1},
			{item: "modern_industrialization:electrum_fine_wire", amount: 1},
			{item: "modern_industrialization:steel_curved_plate", amount: 2},
			{item: "geghilarity:tiny_gallium_dust", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:diode", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:silicon_plate", amount: 1},
			{item: "ae2:quartz_glass", amount: 3},
			{item: "modern_industrialization:electrum_fine_wire", amount: 3},
			{item: "modern_industrialization:steel_curved_plate", amount: 2},
			{item: "geghilarity:gallium_dust", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:diode", amount: 1}
		]
	})
	
	event.remove({id: 'modern_industrialization:electric_age/component/craft/transistor_doped_asbl'})
	event.remove({id: 'modern_industrialization:electric_age/component/craft/transistor_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/electric_age/component/craft/transistor'})
	event.remove({id: 'modern_industrialization:assembler_generated/electric_age/component/craft/transistor_doped'})
	event.shaped('modern_industrialization:transistor', [
		'CAC',
		'DAD',
		'DDD'
	], {
		A: 'modern_industrialization:electrum_fine_wire',
		C: 'modern_industrialization:steel_plate',
		D: 'modern_industrialization:silicon_plate'
	})
	event.shaped('modern_industrialization:transistor', [
		'CAC',
		' C ',
		'EDE'
	], {
		A: 'modern_industrialization:electrum_fine_wire',
		C: 'modern_industrialization:steel_plate',
		D: 'modern_industrialization:silicon_n_doped_plate',
		E: 'modern_industrialization:silicon_p_doped_plate',
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:silicon_p_doped_plate", amount: 2},
			{item: "modern_industrialization:silicon_n_doped_plate", amount: 1},
			{item: "modern_industrialization:electrum_fine_wire", amount: 1},
			{item: "modern_industrialization:steel_plate", amount: 3}
			
		],
		item_outputs: [
			{item: "modern_industrialization:transistor", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:silicon_plate", amount: 5},
			{item: "modern_industrialization:electrum_fine_wire", amount: 2},
			{item: "modern_industrialization:steel_plate", amount: 2}
			
		],
		item_outputs: [
			{item: "modern_industrialization:transistor", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:stirred_tank', [
		'ECE',
		'DAD',
		'BFB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'modern_industrialization:tin_rotor',
		D: 'modern_industrialization:tin_cable',
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
			{item: "modern_industrialization:tin_cable", amount: 2}
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
		D: 'modern_industrialization:tin_cable',
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
			{item: "modern_industrialization:tin_cable", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:bubble_reactor", amount: 1}
		]
	})
	
	event.shaped('geggy:fluid_filter', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'geghilarity:zinc_fine_wire',
		B: 'create:brass_sheet'
	})
	event.shaped('modern_industrialization:gas_collector', [
		'CEC',
		'DAD',
		'CBC'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'createdeco:cast_iron_mesh_fence',
		D: 'modern_industrialization:pump',
		E: 'geggy:fluid_filter'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "createdeco:cast_iron_mesh_fence", amount: 4},
			{item: "modern_industrialization:pump", amount: 2},
			{item: "geggy:fluid_filter", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:gas_collector", amount: 1}
		]
	})
	
	event.remove({id: 'modern_industrialization:alloy/mixer/kanthal/dust'})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 16,
		duration: 400,
		item_inputs: [ 
			{item: "modern_industrialization:iron_dust", amount: 1},
			{item: "modern_industrialization:aluminum_dust", amount: 1},
			{item: "modern_industrialization:chromium_dust", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:kanthal_dust", amount: 3}
		]
	})
	
	// elytra
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 240,
		duration: 10,
		item_inputs: [ 
			{item: "geghilarity:polytetrafluoroethylene_sheet", amount: 4},
			{item: "modern_industrialization:stainless_steel_plate", amount: 2},
			{item: "modern_industrialization:stainless_steel_ring", amount: 2}
		],
		fluid_inputs: [
			{fluid: "geghilarity:tin", amount: 144}
		],
		item_outputs: [
			{item: "minecraft:elytra", amount: 1}
		]
	})
	
	// sinter oven
	event.shaped('geghilarity_fatmachines:ulv_casing', [
		'AAA',
		'A A',
		'AAA'
	], {
		A: 'createdeco:cast_iron_sheet'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 64,
		item_inputs: [ 
			{item: "createdeco:cast_iron_sheet", amount: 6}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:ulv_casing", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:sintering_oven', [
		'DEB',
		'CAF',
		'DFB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'modern_industrialization:motor',
		D: 'modern_industrialization:pump',
		E: 'modern_industrialization:tin_rotor',
		F: 'modern_industrialization:cupronickel_wire_magnetic'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "modern_industrialization:motor", amount: 1},
			{item: "modern_industrialization:pump", amount: 2},
			{item: "modern_industrialization:tin_rotor", amount: 1},
			{item: "modern_industrialization:cupronickel_wire_magnetic", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:sintering_oven", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 2},
			{item: "modern_industrialization:steel_rod", probability: 0.0}
		],
		item_outputs :
		[
			{item: "geggy:mold_rod", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 30,
		duration: 200,
		item_inputs: [
			{item: "geggy:pitch_binder", amount: 1},
			{item: "geggy:mold_rod", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geghilarity:raw_electrode", amount: 1}
		]
	})
	
	event.remove({id: 'modern_industrialization:materials/invar/smelting/dust_to_ingot_smelting'})
	event.remove({id: 'modern_industrialization:materials/invar/smelting/dust_to_ingot_blasting'})
	event.remove({id: 'modern_industrialization:alloy/mixer/invar/dust'})
	event.remove({id: 'modern_industrialization:alloy/mixer/invar/tiny_dust'})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 4,
		duration: 200,
		item_inputs: [
			{item: "minecraft:iron_ingot", amount: 2},
			{item: "modern_industrialization:nickel_ingot", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:invar_ingot", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "modern_industrialization:iron_tiny_dust", amount: 2},
			{item: "modern_industrialization:nickel_tiny_dust", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:invar_nugget", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 8,
		duration: 100,
		item_inputs: [
			{item: "minecraft:iron_ingot", amount: 2},
			{item: "modern_industrialization:nickel_ingot", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:invar_ingot", amount: 3}
		]
	})
	
	event.shaped('modern_industrialization:steam_alloy', [
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
	
	//electric alloy
	event.shaped('modern_industrialization:salloy', [
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
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "modern_industrialization:cupronickel_wire_magnetic", amount: 4},
			{item: "modern_industrialization:electric_furnace", amount: 2},
			{item: "modern_industrialization:tin_cable", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:salloy", amount: 1}
		]
	})
	
	event.remove({id: 'modern_industrialization:steam_age/bronze/casing_pipe_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/steam_age/bronze/casing_pipe'})
	event.shaped('modern_industrialization:bronze_machine_casing_pipe', [
		'B B',
		'BAB',
		'B B'
	], {
		A: 'modern_industrialization:bronze_machine_casing',
		B: 'modern_industrialization:bronze_curved_plate'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:bronze_machine_casing", amount: 1},
			{item: "modern_industrialization:bronze_curved_plate", amount: 6}
		],
		item_outputs: [
			{item: "modern_industrialization:bronze_machine_casing_pipe", amount: 1}
		]
	})
	
	event.remove({id: 'sootychimneys:brick_chimney'})
	event.shaped('sootychimneys:brick_chimney', [
		'A A',
		'B B',
		'BBB'
	], {
		A: 'minecraft:brick',
		B: 'minecraft:bricks'
	})
	event.shaped('sootychimneys:dirty_brick_chimney', [
		'A A',
		'BCB',
		'BBB'
	], {
		A: 'minecraft:brick',
		B: 'minecraft:bricks',
		C: 'modern_industrialization:coal_dust'
	})
	event.remove({id: 'sootychimneys:terracotta_chimney'})
	event.shaped('sootychimneys:terracotta_chimney', [
		'A A',
		'A A',
		' B '
	], {
		A: 'minecraft:terracotta',
		B: 'modern_industrialization:tin_ring'
	})
	event.shaped('sootychimneys:dirty_terracotta_chimney', [
		'A A',
		'ACA',
		' B '
	], {
		A: 'minecraft:terracotta',
		B: 'modern_industrialization:tin_ring',
		C: 'modern_industrialization:coal_dust'
	})
	
	// hatch/alloy smelter block
	event.remove({id: 'modern_industrialization:materials/blast_furnace/soldering_alloy_tiny_dust'})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 2,
		duration: 180,
		item_inputs: [ 
			{item: "modern_industrialization:soldering_alloy_tiny_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 12}
		]
	})
	
	// sandstone
	event.remove({id: 'minecraft:sandstone'})
	event.remove({id: 'modern_industrialization:vanilla_recipes/packer/sandstone'})
	event.custom({
		type: "create:compacting",
		"heatRequirement": "heated",
		ingredients: [
			{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"}
		],
		results: [
			{"count": 1, "item": "minecraft:sandstone"}
		],
		processingTime: 100
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 12,
		duration: 150,
		item_inputs: [ 
			{item: "minecraft:sand", amount: 4}
		],
		item_outputs: [
			{item: "minecraft:sandstone", amount: 1}
		]
	})
	event.remove({id: 'modern_industrialization:vanilla_recipes/macerator/sandstone_to_sand'})
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "minecraft:sandstone", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:sand", amount: 3},{item: "minecraft:sand", amount: 1, probability: 0.5},
			{item: "geggy:saltpeter", amount: 1, probability: 0.3},
		]
	})
	
	// gunpowder
	event.remove({id: 'modern_industrialization:materials/mixer/gunpowder'})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 150,
		item_inputs: [ 
			{item: "modern_industrialization:coke_dust", amount: 1},
			{item: "modern_industrialization:sulfur_dust", amount: 1},
			{item: "geggy:saltpeter", amount: 2}
		],
		item_outputs: [
			{item: "minecraft:gunpowder", amount: 1}
		]
	})
	
	// HSLA
	event.shaped('modern_industrialization:hsla_blast', [
		"ATA",
		"LCL",
		"ABA"
	], {
		C: "modern_industrialization:steel_boiler",
		B: 'modern_industrialization:analog_circuit',
		A: 'modern_industrialization:invar_large_plate',
		L: 'moderndynamics:fluid_pipe',
		T: 'modern_industrialization:steel_gear'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 150,
		item_inputs: [ 
			{item: "modern_industrialization:steel_boiler", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "modern_industrialization:invar_large_plate", amount: 4},
			{item: "moderndynamics:fluid_pipe", amount: 2},
			{item: "modern_industrialization:steel_gear", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:hsla_blast", amount: 1}
		]
	})
	
	// HSLA 1 / 9 1-1 / 27 1-1.25 / 81 1-1.5 > 121.5 ingots out > 7.4 sec each ingot out
	//20, 135
	// 18000 = 15m, 9000 = 7.5m, 3600 = 3m
	event.custom({ 
		type: "modern_industrialization:hsla_blast",
		eu: 2,
		duration: 400, // 20s
		item_inputs: [ 
			{item: "minecraft:gunpowder", amount: 1, probability: 0.1},
			{item: "modern_industrialization:coke", amount: 1},
			{item: "minecraft:sand", amount: 1, probability: 0.15},
			{item: "minecraft:iron_ingot", amount: 1},
			{item: "geggy:selector_4", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:hsla_ingot", amount: 1, probability: 0.5},
			{item: "geggy:brittle_iron", amount: 1, probability: 0.5}
		]
	}).id('hsla-1')
	event.custom({ 
		type: "modern_industrialization:hsla_blast",
		eu: 4,
		duration: 3600, // 57
		item_inputs: [ 
			{item: "minecraft:gunpowder", amount: 1, probability: 0.2},
			{item: "modern_industrialization:coke", amount: 6},
			{item: "minecraft:sand", amount: 1, probability: 0.35},
			{item: "minecraft:iron_ingot", amount: 9},
			{item: "geggy:selector_3", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:hsla_ingot", amount: 6},
			{item: "geggy:hsla_ingot", amount: 6, probability: 0.5},
			{item: "geggy:brittle_iron", amount: 6, probability: 0.5}
		]
	}).id('hsla-2')
	event.custom({ 
		type: "modern_industrialization:hsla_blast",
		eu: 4,
		duration: 9000,
		item_inputs: [ 
			{item: "minecraft:gunpowder", amount: 1, probability: 0.4},
			{item: "modern_industrialization:coke", amount: 15, probability: 0.9},
			{item: "minecraft:sand", amount: 1, probability: 0.75},
			{item: "minecraft:iron_ingot", amount: 27},
			{item: "geggy:selector_2", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:hsla_ingot", amount: 27}, // 32.5 > 5.5
			{item: "geggy:hsla_ingot", amount: 8, probability: 0.7},
			{item: "geggy:brittle_iron", amount: 8, probability: 0.3}
		]
	}).id('hsla-3')
	event.custom({ 
		type: "modern_industrialization:hsla_blast",
		eu: 4,
		duration: 18000,
		item_inputs: [ 
			{item: "minecraft:gunpowder", amount: 1, probability: 0.85},
			{item: "modern_industrialization:coke", amount: 36, probability: 0.85}, //30.6
			{item: "minecraft:sand", amount: 2, probability: 0.7},
			{item: "minecraft:iron_ingot", amount: 81},
			{item: "geggy:selector_1", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:hsla_ingot", amount: 97}, // 121.5 > 24.5
			{item: "geggy:hsla_ingot", amount: 16, probability: 0.8}, // 12.8 > 11.7
			{item: "geggy:hsla_ingot", amount: 16, probability: 0.75}, // 12
			{item: "geggy:brittle_iron", amount: 16, probability: 0.2}, // 3.2
			{item: "geggy:brittle_iron", amount: 16, probability: 0.25} // 4
		]
	}).id('hsla-4')
	event.custom({ 
		type: "modern_industrialization:hsla_blast",
		eu: 4,
		duration: 4200,
		item_inputs: [ 
			{item: "minecraft:redstone", amount: 7, probability: 0.8},
			{item: "modern_industrialization:lignite_coal", amount: 14, probability: 0.75}, 
			{item: "minecraft:iron_ingot", amount: 14}
		],
		item_outputs: [
			{item: "drilly:spring_ingot", amount: 14},
		]
	}).id('hsla-spring')
	
	// brittle iron
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 4,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:brittle_iron", amount: 1},
		],
		item_outputs: [
			{item: "modern_industrialization:iron_dust", amount: 1, probability: 0.7},
			{item: "geghilarity:dark_ashes", amount: 1, probability: 0.4}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 4,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:hsla_ingot", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 2},
		],
		item_outputs: [
			{item: "geggy:hsla_shaft_unit", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 4,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:hsla_shaft_unit", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 2},
		],
		item_outputs: [
			{item: "geggy:hsla_bolt", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 4,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:hsla_shaft_unit", amount: 1},
		],
		item_outputs: [
			{item: "geggy:hsla_ring", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 4,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:hsla_ingot", amount: 1},
		],
		item_outputs: [
			{item: "geggy:hsla_plate", amount: 1}
		]
	})
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {"item": "geggy:hsla_ring"},
		transitionalItem: {"item": "geggy:incomplete_hsla_gear"},
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_hsla_gear"},
					{"item": "geggy:hsla_bolt"}
				],
				results: [{
					"item": "geggy:incomplete_hsla_gear"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_hsla_gear"},
					{"item": "geggy:hsla_bolt"}
				],
				results: [{
					"item": "geggy:incomplete_hsla_gear"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_hsla_gear"}
				],
				results: [{
					"item": "geggy:incomplete_hsla_gear"
				}]
		  	},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_hsla_gear"},
					{"item": "geggy:hsla_plate"}
				],
				results: [{
					"item": "geggy:incomplete_hsla_gear"
				}]
			},
			{
				type: "create:deploying",
				ingredients: [
					{"item": "geggy:incomplete_hsla_gear"},
					{"item": "geggy:hsla_plate"}
				],
				results: [{
					"item": "geggy:incomplete_hsla_gear"
				}]
			},
			{
				type: "create:pressing",
				ingredients: [
					{"item": "geggy:incomplete_hsla_gear"}
				],
				results: [{
					"item": "geggy:incomplete_hsla_gear"
				}]
		  	}
		],
		results: [{
			"item": "geggy:hsla_gear"
		}],
		loops: 2
	  }
	) 
	
	// .id('spaz2')
		
	// drilly
	event.shaped('drilly:hsla_2x_gear_unit', [
		' AB',
		'BA ',
		'   '
	], {
		A: 'geggy:hsla_gear',
		B: 'geggy:hsla_shaft_unit'
	})
	event.shaped('drilly:impeller', [
		' B ',
		'BAB',
		' B '
	], {
		A: 'geggy:hsla_gear',
		B: 'geggy:hsla_plate'
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 4,
		duration: 300,
		item_inputs: [ 
			{item: "geggy:hsla_plate", amount: 2}
		],
		item_outputs: [
			{item: "drilly:base_panel", amount: 1}
		]
	})
	event.shaped('drilly:propeller_blade', [
		' B ',
		' A ',
		' C '
	], {
		A: 'geggy:hsla_ingot',
		B: 'geggy:hsla_shaft_unit',
		C: 'drilly:base_panel'
	})
	event.shaped('drilly:turbine', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: 'drilly:steam_turbine_core',
		B: 'drilly:propeller_blade'
	})
	event.shaped('drilly:steam_turbine_core', [
		' B ',
		'BAB',
		' B '
	], {
		A: 'drilly:hub',
		B: 'modern_industrialization:invar_plate'
	})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 4,
		duration: 400,
		item_inputs: [ 
			{item: "geggy:hsla_ingot", amount: 4},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "drilly:ball_bearing", amount: 16}
		]
	})
	event.shaped('drilly:steel_shaft_bearing', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: 'geggy:hsla_ring',
		B: 'drilly:ball_bearing'
	})
	event.shaped('drilly:steel_shaft_core', [
		'  B',
		' A ',
		'B  '
	], {
		A: 'geggy:hsla_ingot',
		B: 'geggy:hsla_shaft_unit'
	})
	event.shaped('drilly:hub', [
		'  C',
		' A ',
		'B  '
	], {
		A: 'drilly:steel_shaft_core',
		B: 'geggy:hsla_gear',
		C: 'drilly:steel_shaft_bearing'
	})
	event.shaped('drilly:mount', [
		'   ',
		'A A',
		'ABA'
	], {
		A: 'geggy:hsla_ingot',
		B: 'drilly:base_panel'
	})
	event.shaped('drilly:ignition_unit', [
		'BEB',
		'ADA',
		'ACA'
	], {
		A: 'geggy:hsla_ingot',
		B: 'minecraft:gold_nugget',
		C: 'geggy:hsla_shaft_unit',
		D: 'minecraft:redstone',
		E: 'minecraft:glowstone_dust'
	})
	event.shaped('drilly:combustor', [
		'AEA',
		'ADA',
		'ACA'
	], {
		A: 'geggy:hsla_ingot',
		C: 'drilly:ignition_unit',
		D: 'minecraft:redstone',
		E: 'minecraft:blaze_powder'
	})
	event.shaped('drilly:radiator', [
		'BBB',
		'CCC',
		'AAA'
	], {
		A: 'geggy:hsla_ingot',
		B: 'minecraft:gold_nugget',
		C: 'geggy:reinforced_glass_pane'
	})
	event.shaped('drilly:cylinder', [
		'AAA',
		'ABA',
		'ABA'
	], {
		A: 'drilly:spring_ingot',
		B: 'modern_industrialization:battery_alloy_dust'
	})
	// drill blocks
	event.shaped('drilly:steam_turbine', [
		'ECE',
		'BAB',
		'DCD'
	], {
		A: 'drilly:turbine',
		B: 'modern_industrialization:invar_large_plate',
		C: 'drilly:hsla_2x_gear_unit',
		D: 'drilly:base_panel',
		E: 'drilly:cylinder'
	})
	event.shaped('drilly:basic_engine', [
		'ECE',
		'FAB',
		'DGD'
	], {
		A: 'drilly:mount',
		B: 'modern_industrialization:analog_circuit',
		C: 'drilly:impeller',
		D: 'drilly:base_panel',
		E: 'drilly:radiator',
		F: 'drilly:combustor',
		G: 'drilly:steel_shaft_core'
	})
	event.shaped('drilly:shaft_power_bus', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'drilly:hsla_ingot',
		B: 'drilly:steel_shaft_bearing',
		C: 'drilly:hub'
	})
	event.shaped('modern_industrialization:lv_miner', [
		'EBE',
		'FAF',
		'GDC'
	], {
		A: 'modern_industrialization:heatproof_machine_casing',
		B: 'modern_industrialization:analog_circuit',
		C: 'drilly:base_panel',
		D: 'drilly:mount',
		E: 'drilly:hsla_2x_gear_unit',
		F: 'modern_industrialization:steel_tank',
		G: 'drilly:whole_tier4_experience'
	})
	event.shaped('create:white_valve_handle', [
		'BBB',
		' A ',
		'   '
	], {
		A: 'geggy:hsla_ingot',
		B: 'geggy:hsla_plate'
	})
	event.shaped('drilly:hsla_frame_box', [
		'BBB',
		'B B',
		'BBB'
	], {
		B: 'geggy:hsla_shaft_unit'
	})
	event.shaped('drilly:hsla_casing', [
		'BBB',
		'B B',
		'BBB'
	], {
		B: 'geggy:hsla_plate'
	})
	
	// eww
	event.shaped('geggy:tin_conduct', [
		'AAA',
		'   ',
		'   '
	], {
		A: 'modern_industrialization:tin_curved_plate'
	})
	
	// bronze micro
	event.shaped('geggy:bronze_piston', [
		'BBA',
		'BDA',
		' C '
	], {
		A: 'modern_industrialization:bronze_rod',
		B: 'modern_industrialization:bronze_plate',
		C: 'geggy:small_bronze_gear',
		D: 'geggy:tin_conduct'
	})
	event.shaped('geggy:bronze_motor', [
		'BAA',
		'BCA',
		'DCD'
	], {
		A: 'modern_industrialization:bronze_rod',
		B: 'modern_industrialization:bronze_plate',
		C: 'geggy:small_bronze_gear',
		D: 'geggy:bronze_piston'
	})
	event.shaped('geggy:bronze_pump', [
		'ABA',
		'CDC',
		' E '
	], {
		A: 'modern_industrialization:bronze_bolt',
		B: 'modern_industrialization:bronze_rotor',
		C: 'modern_industrialization:tin_ring',
		D: 'geggy:bronze_motor',
		E: 'create:fluid_pipe'
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:red_alloy_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geggy:red_alloy_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:red_alloy_plate", amount: 1}
		],
		item_outputs: [
			{item: "geggy:red_alloy_wire", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:red_alloy_wire", amount: 1}
		],
		item_outputs: [
			{item: "geggy:fine_red_alloy_wire", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 4,
		duration: 200,
		item_inputs: [ 
			{item: "minecraft:copper_ingot", amount: 1},
			{item: "minecraft:redstone", amount: 4}
		],
		item_outputs: [
			{item: "geggy:red_alloy_ingot", amount: 1}
		]
	})
	
	//inductor
	event.remove({id: 'modern_industrialization:electric_age/component/craft/inductor'})
	event.remove({id: 'modern_industrialization:electric_age/component/assembler/inductor'})
	event.shaped('modern_industrialization:inductor', [
		'CBC',
		'BAB',
		'CBC'
	], {
		A: 'modern_industrialization:steel_rod',
		B: 'modern_industrialization:copper_wire',
		C: 'geggy:red_alloy_wire'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:steel_rod", amount: 1},
			{item: "modern_industrialization:copper_wire", amount: 4},
			{item: "geggy:red_alloy_wire", amount: 4}
		],
		item_outputs: [
			{item: "modern_industrialization:inductor", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:steel_ring", amount: 1},
			{item: "modern_industrialization:cupronickel_wire", amount: 2},
			{item: "geggy:fine_red_alloy_wire", amount: 1},
			{item: "modern_industrialization:steel_bolt", amount: 1}
		],
		item_outputs: [
			{item: "geggy:vacuum_tube_components", amount: 6}
		]
	})
	
	// vacuum chamber
	event.shaped('modern_industrialization:steel_vacuum_chamber', [
		'AFA',
		'CDC',
		'BEB'
	], {
		A: 'modern_industrialization:steel_plate',
		B: 'modern_industrialization:tin_plate',
		C: 'geggy:reinforced_glass_pane',
		D: 'modern_industrialization:steel_machine_casing',
		E: 'geggy:bronze_pump',
		F: 'moderndynamics:fluid_pipe'
	})
	
	// vacuum tube
	event.shaped('4x geggy:vacuum_tube_components', [
		' C ',
		'DAD',
		' B '
	], {
		A: 'modern_industrialization:steel_ring',
		B: 'modern_industrialization:steel_bolt',
		C: 'geggy:fine_red_alloy_wire',
		D: 'modern_industrialization:copper_wire'
	})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 4,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:glass_dust", amount: 1},
			{item: "geggy:mold_ball", amount: 1}
		],
		item_outputs: [
			{item: "geggy:glass_tube", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:vacuum_chamber",
		eu: 4,
		duration: 300,
		item_inputs: [ 
			{item: "geggy:glass_tube", amount: 1},
			{item: "geggy:vacuum_tube_components", amount: 1},
			{item: "modern_industrialization:steel_ring", amount: 1}
		],
		item_outputs: [
			{item: "geggy:vacuum_tube", amount: 1}
		]
	})
	
	event.remove({id: 'modern_industrialization:alloy/mixer/battery_alloy/dust'})
	event.remove({id: 'modern_industrialization:alloy/mixer/battery_alloy/tiny_dust'})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 4,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:lead_dust", amount: 4},
			{item: "modern_industrialization:antimony_dust", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:battery_alloy_dust", amount: 5}
		]
	})
	event.remove({id: 'modern_industrialization:alloy/mixer/soldering_alloy/dust'})
	event.remove({id: 'modern_industrialization:alloy/mixer/soldering_alloy/tiny_dust'})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 4,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:tin_dust", amount: 6},
			{item: "modern_industrialization:lead_dust", amount: 3},
			{item: "modern_industrialization:antimony_dust", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:soldering_alloy_dust", amount: 10}
		]
	})
	
	// book
	event.remove({id: 'minecraft:book'})
	event.remove({id: 'farmersdelight:book_from_canvas'})
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{tag: "minecraft:logs", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:resin", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 30,
		duration: 150,
		fluid_inputs: [ 
			{fluid: "geggy:resin", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geggy:glue", amount: 75}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 150,
		item_inputs: [ 
			{item: "geggy:cured_leather", amount: 1},
			{item: "minecraft:paper", amount: 5}
		],
		fluid_inputs: [
			{fluid: "geggy:glue", amount: 50}
		],
		item_outputs: [
			{item: "minecraft:book", amount: 1}
		]
	})
	event.shaped('geggy:book_binding', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'geggy:cured_leather_sheet',
		B: 'geggy:cured_leather_strap'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 32,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:analog_circuit_board", amount: 1},
			{item: "geggy:vacuum_tube", amount: 2},
			{item: "modern_industrialization:capacitor", amount: 2},
			{item: "modern_industrialization:resistor", amount: 2},
			{item: "modern_industrialization:inductor", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 100}
		],
		item_outputs: [
			{item: "modern_industrialization:analog_circuit", amount: 1}
		]
	})
	
	// more susy machines
	event.shaped('modern_industrialization:fluid_compressor', [
		'GCF',
		'EAE',
		'BDB'
	], {
		A: 'modern_industrialization:advanced_machine_hull',
		B: 'modern_industrialization:electronic_circuit',
		C: 'modern_industrialization:fluid_pipe',
		D: 'modern_industrialization:electrum_cable',
		E: 'ae2:quartz_vibrant_glass',
		F: 'modern_industrialization:large_pump',
		G: 'modern_industrialization:large_motor'
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
			{item: "modern_industrialization:electrum_cable", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:fluid_compressor", amount: 1}
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
		D: 'modern_industrialization:tin_cable',
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
			{item: "modern_industrialization:tin_cable", amount: 2}
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
		D: 'modern_industrialization:tin_cable',
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
			{item: "modern_industrialization:tin_cable", amount: 3},
			{item: "ae2:quartz_glass", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:batch_reactor", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 128,
		duration: 400,
		item_inputs: [ 
			{item: "modern_industrialization:turbo_machine_hull", amount: 1},
			{item: "modern_industrialization:digital_circuit", amount: 2},
			{item: "modern_industrialization:advanced_pump", amount: 1},
			{item: "modern_industrialization:advanced_motor", amount: 1},
			{item: "modern_industrialization:platinum_cable", amount: 2},
			{item: "geghilarity:ptfe_pipe", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:fluidized_bed_reactor", amount: 1}
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
			{item: "modern_industrialization:electrum_cable", amount: 2},
		],
		item_outputs: [
			{item: "modern_industrialization:advanced_centrifuge", amount: 1}
		]
	})
	
	// crafting SUSY catalysts - also geghilarity
	
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:silica_gel_dust", amount: 3},
			{item: "geghilarity:alumina", amount: 5}
		],
		item_outputs: [
			{item: "geghilarity:impregnated_alumina_catalyst_dust", amount: 8}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 160,
		item_inputs: [ 
			{item: "modern_industrialization:iron_rod", amount: 4},
			{item: "modern_industrialization:steel_ring", amount: 4}
		],
		item_outputs: [
			{item: "geghilarity:catalyst_bed_support_grid", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "geghilarity:cobalt_dust", amount: 1},
			{item: "geggy:mold_nugget", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:cobalt_catalyst_pellet", amount: 1}
		]
	})
	event.shaped('geghilarity:cobalt_catalyst_bed', [
		'B B',
		' A ',
		'B B'
	], {
		A: 'geghilarity:catalyst_bed_support_grid',
		B: 'geghilarity:cobalt_catalyst_pellet'
	})
	
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "geghilarity:palladium_dust", amount: 1},
			{item: "geggy:mold_nugget", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:palladium_catalyst_pellet", amount: 1}
		]
	})
	event.shaped('geghilarity:palladium_catalyst_bed', [
		'B B',
		' A ',
		'B B'
	], {
		A: 'geghilarity:catalyst_bed_support_grid',
		B: 'geghilarity:palladium_catalyst_pellet'
	})
	
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "modern_industrialization:platinum_dust", amount: 1},
			{item: "geggy:mold_nugget", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:platinum_catalyst_pellet", amount: 1}
		]
	})
	event.shaped('geghilarity:platinum_catalyst_bed', [
		'B B',
		' A ',
		'B B'
	], {
		A: 'geghilarity:catalyst_bed_support_grid',
		B: 'geghilarity:platinum_catalyst_pellet'
	})
	
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "modern_industrialization:nickel_dust", amount: 1},
			{item: "geggy:mold_nugget", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:nickel_catalyst_pellet", amount: 1}
		]
	})
	event.shaped('geghilarity:nickel_catalyst_bed', [
		'B B',
		' A ',
		'B B'
	], {
		A: 'geghilarity:catalyst_bed_support_grid',
		B: 'geghilarity:nickel_catalyst_pellet'
	})
	
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "geghilarity:iron_iii_oxide_dust", amount: 1},
			{item: "geggy:mold_nugget", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:iron_iii_oxide_catalyst_pellet", amount: 1}
		]
	})
	event.shaped('geghilarity:iron_iii_oxide_catalyst_bed', [
		'B B',
		' A ',
		'B B'
	], {
		A: 'geghilarity:catalyst_bed_support_grid',
		B: 'geghilarity:iron_iii_oxide_catalyst_pellet'
	})
	
	event.shaped('geghilarity_fatmachines:invar_frame_box', [
		'AAA',
		'A A',
		'AAA'
	], {
		A: 'modern_industrialization:invar_rod'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 64,
		item_inputs: [ 
			{item: "modern_industrialization:invar_rod", amount: 6}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:invar_frame_box", amount: 1}
		]
	})
	event.shaped('geghilarity_fatmachines:muffler_hatch', [
		'D D',
		'BAC',
		'D D'
	], {
		A: 'modern_industrialization:advanced_machine_hull',
		B: 'modern_industrialization:aluminum_rotor',
		C: 'modern_industrialization:large_motor',
		D: 'modern_industrialization:fluid_pipe'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 12,
		duration: 90,
		item_inputs: [ 
			{item: "modern_industrialization:advanced_machine_hull", amount: 1},
			{item: "modern_industrialization:large_motor", amount: 1},
			{item: "modern_industrialization:aluminum_rotor", amount: 1},
			{item: "modern_industrialization:fluid_pipe", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:muffler_hatch", amount: 1}
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
			{item: "modern_industrialization:aluminum_cable", amount: 2},
			{item: "modern_industrialization:cupronickel_wire_magnetic", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:reaction_furnace", amount: 1}
		]
	})
	
	// sifter - gravel
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu: 16,
		duration: 600,
		item_inputs: [ 
			{item: "minecraft:gravel", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:flint", amount: 1},
			{item: "minecraft:flint", amount: 1, probability: 0.9},
			{item: "minecraft:flint", amount: 1, probability: 0.8},
			{item: "minecraft:flint", amount: 1, probability: 0.6},
			{item: "minecraft:flint", amount: 1, probability: 0.33},
			{item: "minecraft:flint", amount: 1, probability: 0.25},
		]
	})
	
	// item fliter, sifter
	// FOIL1
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "c:copper_ingots", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:copper_foil", amount: 4}
		]
	})

	// FOIL2
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "c:electrum_ingots", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:electrum_foil", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "create:zinc_ingot", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:zinc_foil", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 1600,
		item_inputs: [ 
			{item: "geggy:fine_steel_wire", amount: 64},
			{item: "geggy:zinc_foil", amount: 16}
		],
		item_outputs: [
			{item: "geggy:item_filter", amount: 1}
		]
	})
	
	event.shaped('modern_industrialization:sifter', [
		'ECE',
		'DAD',
		'BCB'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:analog_circuit',
		C: 'geggy:item_filter',
		D: 'modern_industrialization:tin_cable',
		E: 'modern_industrialization:piston'
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
			{item: "modern_industrialization:tin_cable", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:sifter", amount: 1}
		]
	})
	
	event.shaped('geghilarity_fatmachines:stainless_frame_box', [
		'AAA',
		'A A',
		'AAA'
	], {
		A: 'modern_industrialization:stainless_steel_rod'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 64,
		item_inputs: [ 
			{item: "modern_industrialization:stainless_steel_rod", amount: 6}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:stainless_frame_box", amount: 1}
		]
	})
	
	// diss tank misc
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 62,
		duration: 24,
		item_inputs: [ 
			{item: "modern_industrialization:titanium_ingot", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:molten_titanium", amount: 144}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 6,
		duration: 224,
		item_inputs: [ 
			{item: "modern_industrialization:salt_crushed_dust", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:salt_dust", amount: 1},
			{item: "geghilarity:borax_dust", amount: 1, probability: 0.1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 90,
		duration: 230,
		item_inputs: [ 
			{item: "geghilarity:borax_dust", amount: 23}
		],
		item_outputs: [
			{item: "modern_industrialization:sodium_dust", amount: 2},
			{item: "geghilarity:boron_dust", amount: 4}
		],
		fluid_outputs: [
			{fluid: "minecraft:water", amount: 10000},
			{fluid: "modern_industrialization:oxygen", amount: 7000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 7,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:boron_dust", amount: 1},
			{item: "geggy:glass_dust", amount: 7}
		],
		item_outputs: [
			{item: "geghilarity:borosilicate_glass_dust", amount: 8}
		]
	})
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 32,
		duration: 5,
		item_inputs: [ 
			{item: "geghilarity:borosilicate_glass_dust", amount: 1},
			{item: "geggy:mold_block", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:borosilicate_glass", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blaster_furnace3",
		eu: 480,
		duration: 800,
		item_inputs: [ 
			{item: "geggy:borosilicate_glass", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:molten_titanium", amount: 1152}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:titanium_reinforced_borosilicate_glass_block", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 48,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:enderpearl_dust", amount: 1},
			{item: "minecraft:blaze_powder", amount: 1}
		],
		item_outputs: [
			{item: "geggy:endereye_dust", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 7,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:endergetic_alloy_dust", amount: 1},
			{item: "geggy:endereye_dust", amount: 1},
			{item: "modern_industrialization:chromium_dust", amount: 1}
		],
		item_outputs: [
			{item: "geggy:vibrant_alloy_dust", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 7,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:conductive_iron_dust", amount: 1},
			{item: "modern_industrialization:gold_dust", amount: 1},
			{item: "geggy:black_steel_dust", amount: 1}
		],
		item_outputs: [
			{item: "geggy:endergetic_alloy_dust", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:red_alloy_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geggy:red_alloy_dust", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 7,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:red_alloy_dust", amount: 1},
			{item: "modern_industrialization:iron_dust", amount: 1},
			{item: "modern_industrialization:silver_dust", amount: 1}
		],
		item_outputs: [
			{item: "geggy:conductive_iron_dust", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 7,
		duration: 500,
		item_inputs: [ 
			{item: "geggy:black_bronze_dust", amount: 1},
			{item: "modern_industrialization:nickel_dust", amount: 1},
			{item: "modern_industrialization:steel_dust", amount: 3}
		],
		item_outputs: [
			{item: "geggy:black_steel_dust", amount: 5}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 7,
		duration: 500,
		item_inputs: [ 
			{item: "modern_industrialization:copper_dust", amount: 3},
			{item: "modern_industrialization:electrum_dust", amount: 2}
		],
		item_outputs: [
			{item: "geggy:black_bronze_dust", amount: 5}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blaster_furnace2",
		eu: 120,
		duration: 3000,
		item_inputs: [ 
			{item: "geggy:vibrant_alloy_dust", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:hydrogen", amount: 1000}
		],
		item_outputs: [
			{item: "geggy:hot_vibrant_alloy_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 480,
		duration: 321,
		item_inputs: [ 
			{item: "geggy:hot_vibrant_alloy_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geggy:vibrant_alloy_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 24,
		duration: 107,
		item_inputs: [ 
			{item: "geggy:vibrant_alloy_plate", amount: 4},
			{item: "geggy:vibrant_alloy_ring", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 16}
		],
		item_outputs: [
			{item: "geggy:vibrant_alloy_rotor", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 24,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:vibrant_alloy_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geggy:vibrant_alloy_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:vibrant_alloy_plate", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [
			{item: "geggy:vibrant_alloy_ring", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 960,
		duration: 400,
		item_inputs: [ 
			{item: "modern_industrialization:highly_advanced_machine_hull", amount: 1},
			{item: "modern_industrialization:titanium_tank", amount: 2},
			{item: "modern_industrialization:large_advanced_motor", amount: 4},
			{item: "modern_industrialization:large_advanced_pump", amount: 2},
			{item: "geggy:vibrant_alloy_rotor", amount: 4},
			{item: "modern_industrialization:processing_unit", amount: 4}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:polytetrafluoroethylene", amount: 720}
		],
		item_outputs: [
			{item: "modern_industrialization:dissolution_tank", amount: 1}
		]
	})
	
	// iodine
	event.smelting('geghilarity:small_seaweed_ash_dust', 'minecraft:seagrass').cookingTime(200)
	
	// sticky resin gtnh
	
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 24,
		duration: 1,
		fluid_inputs: [ 
			{fluid: "geggy:glue", amount: 8}
		],
		fluid_outputs: [
			{fluid: "geggy:refined_glue", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 5,
		duration: 300,
		item_inputs: [ 
			{item: "minecraft:slime_ball", amount: 1}
		],
		item_outputs: [
			{item: "geggy:raw_rubber_dust", amount: 3}
		],
		fluid_outputs: [
			{fluid: "geggy:refined_glue", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "minecraft:slime_ball", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:glue", amount: 144}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 12,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "create:honey", amount: 500}
		],
		item_outputs: [
			{item: "geggy:propolis", amount: 1, probability: 0.05}
		],
		fluid_outputs: [
			{fluid: "create:honey", amount: 400}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 5,
		duration: 128,
		item_inputs: [ 
			{item: "geggy:propolis", amount: 1}
		],
		item_outputs: [
			{item: "geggy:sticky_resin", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 2,
		duration: 300,
		item_inputs: [ 
			{item: "geggy:sticky_resin", amount: 1}
		],
		item_outputs: [
			{item: "geggy:raw_rubber_dust", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 5,
		duration: 300,
		item_inputs: [ 
			{item: "geggy:sticky_resin", amount: 1}
		],
		item_outputs: [
			{item: "geggy:raw_rubber_dust", amount: 3},
			{item: "geggy:plant_ball", amount: 1, probability: 0.1}
		],
		fluid_outputs: [
			{fluid: "geggy:refined_glue", amount: 100}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 4,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:sticky_resin", amount: 1},
			{item: "minecraft:piston", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:sticky_piston", amount: 1}
		]
	})
	event.shaped('2x minecraft:torch', [
		'AB ',
		'C  ',
		'   '
	], {
		A: 'geggy:sticky_resin',
		B: 'minecraft:string',
		C: 'minecraft:stick'
	})
	
	
})



//onEvent('tags.fluids', event => {  
ServerEvents.tags('fluid', event => {
  
  //TINKERS 1.19
  //event.add('c:molten_andalloy', 'tconstruct:molten_andalloy')
  //event.add('c:molten_andesite', 'tconstruct:molten_andesite')
  event.add('c:epoxy_resin', 'geghilarity:epoxy_resin')
  
});

