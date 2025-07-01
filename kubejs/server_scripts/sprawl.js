ServerEvents.recipes(event => {

	event.remove([
		"farmersdelight:lead_from_rope",
		"minecraft:respawn_anchor",
		"minecraft:campfire",
		"minecraft:torch",
		"minecraft:hopper",
		"minecraft:minecart",
		"minecraft:rail",
		"minecraft:powered_rail",
		"minecraft:activator_rail",
		"minecraft:detector_rail",
		"minecraft:barrel",
		"minecraft:bucket",
		"minecraft:black_concrete_powder",
		"minecraft:lightning_rod",
		"minecraft:packed_mud",
		"minecraft:mud_bricks",
		"minecraft:cauldron",
		"minecraft:golden_apple",
		"minecraft:golden_carrot",
		"minecraft:diorite",
		"minecraft:granite",
		"minecraft:iron_bars",
		"minecraft:smithing_table",
		"charm:variant_chests/hopper",
		"charm:kilns/brick",
		"create:crafting/kinetics/controller_rail",
		"create:crafting/kinetics/hand_crank",
		"create:fluid_tank",
	    "modern_industrialization:trash_can",
		"modern_industrialization:trash_can_assembler",
		"minecraft:ender_chest",
		"minecraft:compass",
		"create:crafting/appliances/slime_ball",
		"create:crafting/logistics/andesite_funnel",
		"create:crafting/logistics/andesite_tunnel",
		"create:crafting/logistics/brass_funnel",
		"create:crafting/logistics/brass_tunnel",
		"kibe:wooden_bucket",
		"kibe:trash_can",
		"kibe:pocket_trash_can",
		"kibe:pocket_crafting_table",
		"kibe:entangled_tank",
		"kibe:entangled_bag",
		"kibe:void_bucket",
		"kibe:big_torch",
		"kibe:cobblestone_generator_mk1",
		"kibe:cobblestone_generator_mk2",
		"kibe:cobblestone_generator_mk3",
		"kibe:cobblestone_generator_mk4",
		"kibe:cobblestone_generator_mk5",
		"magick:blaze_powder",
		"supplementaries:wrench",
		"extended_drawers:connector",
		"extended_drawers:access_point",
		"additionaladditions:powered_rails",
		"farmersdelight:packed_mud_from_straw",
		"modern_industrialization:vanilla_recipes/steel_hopper_asbl",
		"modern_industrialization:vanilla_recipes/mixer/calcite",
		"modern_industrialization:vanilla_recipes/lignite_torch",
		"modern_industrialization:vanilla_recipes/packer/mud_bricks",
		"modern_industrialization:assembler_generated/vanilla_recipes/steel_hopper",
		"modern_industrialization:vanilla_recipes/assembler/hopper",
		"modern_industrialization:oil/oil_drilling_rig_asbl",
		"modern_industrialization:assembler_generated/oil/oil_drilling_rig",
		"modern_industrialization:materials/blast_furnace/silicium_from_quartz_with_carbon",
		"modern_industrialization:materials/chemical_reactor/sulfuric_acid",
		"modern_industrialization:vanilla_recipes/mixer/granite",
		"modern_industrialization:vanilla_recipes/mixer/endstone",
		"modern_industrialization:vanilla_recipes/mixer/cobbled_deepslate",
		"modern_industrialization:vanilla_recipes/mixer/cobblestone",
		"modern_industrialization:vanilla_recipes/mixer/diorite",
		"modern_industrialization:vanilla_recipes/mixer/dripstone",
		"modern_industrialization:vanilla_recipes/mixer/concrete/black_concrete_powder",
		"modern_industrialization:materials/kanthal/wiremill/wire",
		"modern_industrialization:materials/kanthal/vacuum_freezer/hot_ingot",
		"modern_industrialization:materials/gold/packer/ingot",
		"modern_industrialization:materials/gold/packer/bucket",
		"modern_industrialization:materials/aluminum/assembler/barrel",
		"modern_industrialization:materials/bronze/assembler/barrel",
		"modern_industrialization:materials/stainless_steel/assembler/barrel",
		"modern_industrialization:materials/steel/assembler/barrel",
		"modern_industrialization:materials/titanium/assembler/barrel",
		"modern_industrialization:materials/coal/craft/tiny_dust_from_dust",
		"modern_industrialization:materials/lignite_coal/compressor/lignite_coal",
		"modern_industrialization:materials/macerator/lignite_coal_crushed_to_dust",
		"modern_industrialization:materials/iron/craft/hammer",
		"modern_industrialization:materials/steel/craft/hammer",
		"modern_industrialization:materials/diamond/craft/hammer",
		"modern_industrialization:materials/mixer/itnt",
		"modern_industrialization:tools/smithing/netherite_hammer",
		"modern_industrialization:vanilla_recipes/assembler/chest",
		"modern_industrialization:vanilla_recipes/assembler/rail",
		"modern_industrialization:vanilla_recipes/assembler/powered_rail",
		"modern_industrialization:vanilla_recipes/assembler/barrel",
		"modern_industrialization:vanilla_recipes/packer/activator_rail",
		"modern_industrialization:vanilla_recipes/packer/detector_rail",
		"modern_industrialization:vanilla_recipes/macerator/gilded_blackstone",
		"modern_industrialization:vanilla_recipes/mixer/clay",
		"modern_industrialization:vanilla_recipes/torch",
		"modern_industrialization:vanilla_recipes/packer/minecart",
		"modern_industrialization:vanilla_recipes/packer/bucket",
		"modern_industrialization:steam_age/fireclay/packer/packer_steam_blast_furnace",
		"modern_industrialization:electric_age/component/craft/steel_rod_magnetic",
		"modern_industrialization:electric_age/component/craft/memory_management_unit_asbl",
		"modern_industrialization:electric_age/battery/cadmium_battery_asbl",
		"modern_industrialization:electric_age/battery/plutonium_battery_asbl",
		"modern_industrialization:materials/macerator/wood_pulp",
		"modern_industrialization:materials/implosion_compressor/nuclear_alloy_plate",
		"modern_industrialization:materials/uranium/assembler/fuel_rod",
		"modern_industrialization:materials/le_uranium/assembler/fuel_rod",
		"modern_industrialization:materials/he_uranium/assembler/fuel_rod",
		"modern_industrialization:materials/le_mox/assembler/fuel_rod",
		"modern_industrialization:materials/he_mox/assembler/fuel_rod",
		"modern_industrialization:materials/cadmium/assembler/fuel_rod",
		"modern_industrialization:tools/wrench",
		"modern_industrialization:tools/steam_mining_drill",
		"modern_industrialization:electric_age/circuit/craft/lv_circuit_board_asbl",
		"modern_industrialization:assembler_generated/electric_age/circuit/craft/electronic_circuit",
		"modern_industrialization:electric_age/circuit/craft/electronic_circuit_asbl",
		"modern_industrialization:assembler_generated/electric_age/circuit/craft/processing_unit"
	])
	
	event.shaped('4x geggy:small_coal_dust', [
		' A'
	], {
		A: 'modern_industrialization:coal_dust'
	}).noMirror().noShrink()
	event.shaped('9x modern_industrialization:coal_tiny_dust', [
		'A '
	], {
		A: 'modern_industrialization:coal_dust'
	}).noMirror().noShrink()
	event.shaped('modern_industrialization:coal_dust', [
		'AA ',
		'AA ',
		'   '
	], {
		A: 'geggy:small_coal_dust'
	})
	event.shaped('6x geggy:unlit_torch', [
		'A  ',
		'B  ',
		'   '
	], {
		A: 'geghilarity:phosphorus_dust',
		B: 'minecraft:stick'
	})
	event.shaped('6x geggy:unlit_torch', [
		'A  ',
		'B  ',
		'   '
	], {
		A: 'gegology:phosphor_dust',
		B: 'minecraft:stick'
	})
	event.shaped('6x geggy:unlit_torch', [
		'A  ',
		'B  ',
		'   '
	], {
		A: 'modern_industrialization:coke_dust',
		B: 'minecraft:stick'
	})
	event.shaped('geggy:unlit_torch', [
		'A  ',
		'B  ',
		'   '
	], {
		A: 'minecraft:charcoal',
		B: 'minecraft:stick'
	})
	event.shaped('2x geggy:unlit_torch', [
		'A  ',
		'B  ',
		'   '
	], {
		A: 'modern_industrialization:lignite_coal',
		B: 'minecraft:stick'
	})
	event.shaped('geggy:unlit_torch', [
		'A  ',
		'B  ',
		'   '
	], {
		A: 'geggy:small_coal_dust',
		B: 'minecraft:stick'
	})
	event.smelting('minecraft:torch', 'geggy:unlit_torch').cookingTime(30)
	event.custom({
		"type": "minecraft:campfire_cooking",
		"ingredient": {"item": "geggy:unlit_torch"},
		"result": "minecraft:torch",
		"cookingtime": 50
	})
	event.shapeless('minecraft:torch', [ 'geggy:unlit_torch', 'minecraft:torch']).replaceIngredient('minecraft:torch', 'minecraft:torch')
	
	event.shaped('modern_industrialization:wrench', [
		'C C',
		'BDB',
		' A '
	], {
		A: 'modern_industrialization:bronze_rod',
		B: 'modern_industrialization:bronze_bolt',
		C: 'modern_industrialization:bronze_curved_plate',
		D: 'modern_industrialization:bronze_ring'
	})
	event.shaped('supplementaries:wrench', [
		'C C',
		'BBB',
		' A '
	], {
		A: 'modern_industrialization:copper_rod',
		B: 'modern_industrialization:copper_bolt',
		C: 'modern_industrialization:copper_curved_plate'
	})
	
	event.shaped('minecraft:ender_chest', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:obsidian',
		B: 'modern_industrialization:quantum_upgrade'
	})
	
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
	event.shaped('minecraft:bucket', [
		'S S',
		' A ',
		'   '
	], {
		A: 'modern_industrialization:iron_plate',
		S: 'geggy:iron_curved_plate'
	})
	
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
	event.shapeless('2x supplementaries:flax_seeds', ['supplementaries:wild_flax', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')
	event.shapeless('2x supplementaries:flax_seeds', ['supplementaries:flax', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')
	event.shapeless('2x geggy:fiber', ['supplementaries:flax'])
	
	event.custom({
		"type": "minecraft:campfire_cooking",
		"ingredient": 
			{"item": "geggy:fiber"},
		"result": "geggy:dried_fiber",
		"cookingtime": 200
	})
	event.custom({
		"type": "minecraft:smoking",
		"cookingtime": 100,
		"experience": 0.0,
		"ingredient": 
			{"item": "geggy:fiber"},
		"result": 
		{"item": "geggy:dried_fiber"}
	})
	
	event.shaped('2x geggy:twine', [
		'AAB',
		'AA ',
		'   '
	], {
		A: 'geggy:dried_fiber',
		B: 'minecraft:stick'
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
		'AAA',
		' S ',
		'BBB'
	], {
		A: 'geggy:dried_fiber',
		B: 'geggy:chad',
		S: 'minecraft:water_bucket'
	}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
	event.shaped('geggy:fiber_pulp', [
		'AAA',
		' S ',
		'BBB'
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
			{ "item": "geggy:dried_fiber", "count": 1, "chance": 0.16}
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
			{"count": 2, "item": "geggy:stone_dust"},
			{"chance": 0.75, "count": 2, "item": "geggy:stone_dust"}
		]
	})
	
	// uncooked furnace recipe
	event.smelting('geggy:primitive_brick', 'geggy:uncooked_primitive_brick').cookingTime(800)
	
	event.smelting('3x minecraft:iron_nugget', 'geghilarity:magnetite_dust').cookingTime(200)
	
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
	event.blasting('modern_industrialization:fire_clay_brick', 'geggy:compressed_fireclay').cookingTime(600)
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
	event.shaped('3x create:fluid_pipe', [
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
		type: "modern_industrialization:electric_alloy_smelter",
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
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:reinforced_glass_mixture", amount: 2},
			{item: "geggy:mold_block", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:reinforced_glass", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 32,
		duration: 1000,
		item_inputs: [ 
			{item: "geggy:reinforced_glass", amount: 1},
			{item: "minecraft:glowstone_dust", amount: 1}
		],
		item_outputs: [
			{item: "ae2:quartz_glass", amount: 1}
		]
	})
	event.remove({id: 'ae2:decorative/quartz_vibrant_glass'})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 64,
		duration: 1000,
		item_inputs: [ 
			{item: "ae2:quartz_glass", amount: 1},
			{item: "ae2:certus_quartz_dust", amount: 2}
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
			{item: "modern_industrialization:steel_gear", amount: 1},
			{item: "geggy:simple_pipe_motor", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 50}
		],
		item_outputs: [
			{item: "moderndynamics:item_pipe", amount: 12}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:potin_curved_plate", amount: 4},
			{item: "geggy:reinforced_glass_pane", amount: 2},
			{item: "modern_industrialization:bronze_rotor", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:synthetic_rubber", amount: 50}
		],
		item_outputs: [
			{item: "moderndynamics:fluid_pipe", amount: 12}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 400,
		item_inputs: [ 
			{item: "geggy:galvanized_steel_curved_plate", amount: 4},
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
		ingredient: {"item": "geghilarity:galvanized_steel_machine_casing"},
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
					{"item": "powah:energy_cable_starter"}
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
					{"item": "powah:energy_cable_starter"}
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
			{item: "powah:energy_cable_basic", amount: 3},
			{item: "modern_industrialization:redstone_battery", amount: 2},
			{item: "geghilarity:galvanized_steel_machine_casing", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 100}
		],
		item_outputs: [
			{item: "modern_industrialization:basic_machine_hull", amount: 1}
		]
	})
	
	
	// basic upgrades
	event.remove({id: 'modern_industrialization:electric_age/upgrades/basic'})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:conveyor", amount: 2},
			{item: "modern_industrialization:motor", amount: 4},
			{item: "modern_industrialization:robot_arm", amount: 1},
			{item: "modern_industrialization:analog_circuit_board", amount: 1},
			{item: "create:electron_tube", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:mcopper", amount: 500}
		],
		item_outputs: [
			{item: "modern_industrialization:basic_upgrade", amount: 4}
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
	event.remove({type: 'modern_industrialization:assembler', output: 'modern_industrialization:highly_advanced_machine_hull'})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 120,
		duration: 200,
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
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:bronze_machine_casing", amount: 1},
			{item: "modern_industrialization:copper_gear", amount: 2},
			{item: "create:fluid_pipe", amount: 3},
			{item: "create:fluid_tank", amount: 1},
			{item: "create:mechanical_piston", amount: 2}
		],
		item_outputs: [
			{item: "modern_industrialization:bronze_compressor", amount: 1}
		]
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
	event.shaped('kibe:cobblestone_generator_mk2', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'kibe:cobblestone_generator_mk1',
		B: 'minecraft:nether_star'
	})
	event.shaped('kibe:cobblestone_generator_mk3', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'kibe:cobblestone_generator_mk2',
		B: 'minecraft:nether_star'
	})
	event.shaped('kibe:cobblestone_generator_mk4', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'kibe:cobblestone_generator_mk3',
		B: 'minecraft:nether_star'
	})
	event.shaped('kibe:cobblestone_generator_mk5', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'kibe:cobblestone_generator_mk4',
		B: 'minecraft:nether_star'
	})
	
	event.shaped('modern_industrialization:steam_mining_drill', [
		'CXX',
		'ABX',
		'DAC'
	], {
		A: 'modern_industrialization:iron_large_plate',
		B: 'modern_industrialization:bronze_drill_head',
		C: 'minecraft:furnace',
		D: 'create:copper_backtank',
		X: 'minecraft:diamond_block'
	})
	
	event.shaped('minecraft:campfire', [
		' C ',
		'CBC',
		'AAA'
	], {
		A: '#minecraft:logs',
		B: 'modern_industrialization:coal_dust',
		C: 'minecraft:stick'
	})
		
			
	event.replaceInput({type: "minecraft:crafting_shaped", output: "modern_industrialization:bronze_item_input_hatch"}, "minecraft:hopper", "create:brass_hand")
	event.replaceInput({type: "minecraft:crafting_shaped", output: "modern_industrialization:bronze_item_output_hatch"}, "minecraft:hopper", "create:brass_hand")	
	
	event.replaceInput({type: "minecraft:crafting_shaped", output: "modern_industrialization:bronze_fluid_input_hatch"}, "modern_industrialization:bronze_tank", "create:fluid_tank")
	event.replaceInput({type: "minecraft:crafting_shaped", output: "modern_industrialization:bronze_fluid_output_hatch"}, "modern_industrialization:bronze_tank", "create:fluid_tank")
	
	event.shaped('create:fluid_tank', [
		'ABA',
		'BCB',
		'ABA'
	], {
		B: 'modern_industrialization:copper_plate',
		A: 'modern_industrialization:copper_rod',
		C: 'minecraft:barrel'
	})
	
	///// IRON CATASTROPHY /////
	event.remove({id: 'modern_industrialization:materials/uncooked_steel_dust'})
	event.remove({id: 'modern_industrialization:steam_age/steel/steel_upgrade_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/steam_age/steel/steel_upgrade'})
	event.shaped('modern_industrialization:steel_upgrade', [
		'ADA',
		'BEB',
		'AFA'
	], {
		A: 'modern_industrialization:bronze_rod',
		B: 'modern_industrialization:bronze_gear',
		D: 'modern_industrialization:bronze_rotor',
		E: 'modern_industrialization:steel_machine_casing',
		F: 'geggy:clay_bricks'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:bronze_rod", amount: 4},
			{item: "modern_industrialization:bronze_gear", amount: 2},
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
		'ECE',
		'BDB',
		'ACA'
	], {
		A: 'modern_industrialization:bronze_gear',
		B: 'modern_industrialization:bronze_rotor',
		C: 'moderndynamics:fluid_pipe',
		D: 'modern_industrialization:steel_machine_casing',
		E: 'modern_industrialization:copper_wire'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:bronze_gear", amount: 2},
			{item: "modern_industrialization:steel_machine_casing", amount: 1},
			{item: "moderndynamics:fluid_pipe", amount: 2},
			{item: "modern_industrialization:copper_wire", amount: 2},
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
		duration: 500,
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
		eu: 4,
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
		duration: 600,
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
		duration: 1200,
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
	
	event.blasting('geggy:wrought_nugget', 'minecraft:iron_nugget').cookingTime(60)
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
		type: "modern_industrialization:electric_alloy_smelter",
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
	event.blasting('geggy:tempered_brick', 'geggy:unfired_tempered_dust').cookingTime(1200)
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
		A: 'geggy:hardened_andesite_alloy',
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
		'EBE'
	], {
		A: '#minecraft:wooden_slabs',
		B: 'create:andesite_casing',
		C: 'create:piston_extension_pole',
		E: 'geggy:cogwheel',
		F: 'minecraft:iron_nugget'
	})
	
	event.remove({type: "minecraft:crafting_shaped", output: "create:shaft"})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "create:andesite_alloy"}
		],
		"tool": {
			"type": "farmersdelight:tool",
			"tag": "c:tools/axes"
		},
		"result": [
			{"count": 2, "item": "geggy:andesite_alloy_slice"}
		],
		"sound": "minecraft:entity.item.break"
	})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "geggy:hardened_andesite_alloy"}
		],
		"tool": {
			"type": "farmersdelight:tool",
			"tag": "c:tools/axes"
		},
		"result": [
			{"chance": 0.9, "count": 1, "item": "create:shaft"},
			{"chance": 0.8, "count": 1, "item": "create:shaft"},
			{"chance": 0.6, "count": 1, "item": "create:shaft"}
		],
		"sound": "minecraft:entity.item.break"
	})
	
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "minecraft:dripstone_block"}
		],
		"tool": {
			"type": "farmersdelight:tool",
			"tag": "c:tools/pickaxes"
		},
		"result": [
			{"count": 2, "item": "magick:calcite_dust"}
		],
		"sound": "minecraft:entity.item.break"
	})
	
	event.shaped('create:hand_crank', [
		'A  ',
		'BBB',
		'  C'
	], {
		A: 'geggy:cogwheel',
		B: '#minecraft:planks',
		C: 'create:andesite_alloy'
	})
	
	event.shaped('create:andesite_funnel', [
		' A ',
		'ABA',
		'   '
	], {
		A: 'create:andesite_alloy',
		B: 'modern_industrialization:rubber_sheet'
	})
	
	event.shaped('create:andesite_tunnel', [
		'ACA',
		'B B',
		'   '
	], {
		A: 'create:andesite_alloy',
		B: 'modern_industrialization:rubber_sheet',
		C: 'create:andesite_casing'
	})
	
	event.shaped('create:brass_funnel', [
		'DAE',
		'FBF'
	], {
		A: 'create:brass_ingot',
		B: 'modern_industrialization:rubber_sheet',
		D: 'modern_industrialization:capacitor',
		E: 'create:electron_tube',
		F: 'create:brass_sheet'
	})
	
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
			{item: "geggy:quartz_sand", amount: 2},
			{item: "modern_industrialization:salt_tiny_dust", amount: 1, probability: 0.05}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 600,
		item_inputs : [
			{item: "geggy:quartz_sand", amount: 8},
			{item: "geggy:flint_dust", amount: 1}
		],
		item_outputs :
		[
			{item: "geggy:glass_dust", amount: 8}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 200,
		item_inputs : [
			{item: "geggy:quartzite_dust", amount: 4},
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
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 100,
		item_inputs: [
			{tag: "cork", amount: 5}
		],
		item_outputs: [
			{item: "geggy:ground_tree_bark", amount: 1},
			{item: "geggy:ground_tree_bark", amount: 1, probability: 0.5}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 4,
		duration: 100,
		item_inputs: [
			{item: "geggy:ground_tree_bark", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geggy:rubber", amount: 144}
		],
		item_outputs: [
			{item: "geggy:mixed_cork", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "geggy:mixed_cork", amount: 1}
		],
		item_outputs: [
			{item: "geggy:pressed_cork", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "geggy:pressed_cork", amount: 1}
		],
		item_outputs: [
			{item: "geggy:bottle_cork", amount: 5}
		]
	})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 600,
		item_inputs: [
			{item: "geggy:glass_dust", amount: 1},
			{item: "geggy:mold_bottle", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:uncorked_glass_bottle", amount: 1}
		]
	})
	event.shapeless('minecraft:glass_bottle', ['geggy:uncorked_glass_bottle', 'geggy:bottle_cork'])
	
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
		D: 'geggy:polished_copper_plate'
	})
	
	event.remove({type: "modern_industrialization:mixer", output: "modern_industrialization:rubber_sheet"})
	
	event.remove({id: "modern_industrialization", type: "modern_industrialization:cutting_machine", output: "#minecraft.planks"})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "geggy:clay_dust", amount: 8}
		],
		item_outputs: [
			{item: "geggy:unfired_clay_brick", amount: 4}
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
			{item: "minecraft:gravel", amount: 3},
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
			{item: "minecraft:gravel", amount: 2}
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
			{fluid: "modern_industrialization:synthetic_rubber", amount: 500}
		],
		item_outputs: [
			{item: "modern_industrialization:rubber_sheet", amount: 18}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 150,
		item_inputs: [
			{item: "geggy:heated_rubber", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:synthetic_oil", amount: 200}
		],
		item_outputs: [
			{item: "modern_industrialization:rubber_sheet", amount: 6}
		]
	})
		
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "geggy:kelp_dust", amount: 3},
			{item: "minecraft:dandelion", amount: 1},
			{item: "modern_industrialization:sulfur_dust", amount: 1}
			
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 250}
		],
		item_outputs: [
			{item: "geggy:rubber_pulp", amount: 6}
		]
	})	
	
	// createaddition yeeted
	event.shaped('geggy:ccf', [
		'EAE',
		'FDG'
	], {
		D: 'create:turntable',
		A: 'create:cogwheel',
		E: '#minecraft:planks',
		F: 'modern_industrialization:redstone_battery',
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
		type: "modern_industrialization:blast_furnace",
		eu: 4,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:iron_rod", amount: 1},
			{item: "minecraft:redstone", amount: 6}
		],
		item_outputs: [
			{item: "geggy:magnetic_iron_rod", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:polarizer",
		eu: 8,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:iron_rod", amount: 1}
		],
		item_outputs: [
			{item: "geggy:magnetic_iron_rod", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 3735,
		item_inputs: [
			{item: "modern_industrialization:neodymium_dust", amount: 1}
		],
		item_outputs: [
			{item: "geggy:neodymium_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 16,
		duration: 288,
		item_inputs: [
			{item: "geggy:neodymium_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geggy:neodymium_rod", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:polarizer",
		eu: 240,
		duration: 72,
		item_inputs: [
			{item: "geggy:neodymium_rod", amount: 1}
		],
		item_outputs: [
			{item: "geggy:magnetic_neodymium_rod", amount: 1}
		]
	})
	
	// susy values
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 7,
		duration: 56,
		item_inputs: [
			{item: "modern_industrialization:iron_plate", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:iron_wire", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 7,
		duration: 84,
		item_inputs: [
			{item: "geghilarity:iron_wire", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:iron_fine_wire", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 7,
		duration: 56,
		item_inputs: [
			{item: "modern_industrialization:steel_plate", amount: 1}
		],
		item_outputs: [
			{item: "geggy:steel_wire", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 7,
		duration: 84,
		item_inputs: [
			{item: "geggy:steel_wire", amount: 1}
		],
		item_outputs: [
			{item: "geggy:steel_fine_wire", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 7,
		duration: 39,
		item_inputs: [
			{item: "modern_industrialization:aluminum_wire", amount: 1}
		],
		item_outputs: [
			{item: "geggy:aluminium_fine_wire", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 7,
		duration: 64,
		item_inputs: [
			{item: "geggy:black_steel_plate", amount: 1}
		],
		item_outputs: [
			{item: "geggy:black_steel_wire", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 7,
		duration: 96,
		item_inputs: [
			{item: "geggy:black_steel_wire", amount: 1}
		],
		item_outputs: [
			{item: "geggy:black_steel_fine_wire", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 24,
		duration: 119,
		item_inputs: [ 
			{item: "geghilarity:tungstensteel_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:tungstensteel_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 30,
		duration: 119,
		item_inputs: [
			{item: "geghilarity:tungstensteel_plate", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:tungstensteel_wire", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 7,
		duration: 178,
		item_inputs: [
			{item: "geghilarity:tungstensteel_wire", amount: 1}
		],
		item_outputs: [
			{item: "geggy:tungstensteel_fine_wire", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "createdeco:zinc_sheet", amount: 1}
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
			{item: "createdeco:zinc_sheet", amount: 1}
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
		type: "modern_industrialization:autoclave",
		eu: 8,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:wood_pulp", amount: 1}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 100}
		],
		item_outputs: [
			{item: "geggy:chad", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 4,
		duration: 200,
		item_inputs: [
			{item: "geggy:chad", amount: 2}
		],
		item_outputs: [
			{item: "minecraft:paper", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 8,
		duration: 200,
		item_inputs: [
			{item: "geggy:chad", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:paper", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "geggy:dried_fiber", amount: 2},
			{item: "geggy:chad", amount: 2}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 250}
		],
		item_outputs: [
			{item: "geggy:filtered_pulp", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 400,
		item_inputs: [
			{item: "geggy:filtered_pulp", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:paper", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:autoclave",
		eu: 4,
		duration: 100,
		item_inputs: [
			{item: "geggy:clay_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:distilled_water", amount: 25}
		],
		item_outputs: [
			{item: "minecraft:clay_ball", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "minecraft:clay_ball", amount: 4}
		],
		item_outputs: [
			{item: "minecraft:clay", amount: 1}
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
				// 250
					{"amount": 20250, "fluid": "minecraft:water", "nbt": {}}
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

	event.remove({id: "modern_industrialization:electric_age/component/craft/resistor"})
	event.remove({id: "modern_industrialization:electric_age/component/assembler/resistor"})
	event.shaped('modern_industrialization:resistor', [
		' B ',
		'ACA',
		'DB '
	], {
		A: 'modern_industrialization:copper_fine_wire',
		B: 'minecraft:paper',
		C: 'modern_industrialization:coal_dust',
		D: 'minecraft:slime_ball'
	})
	event.shaped('modern_industrialization:resistor', [
		' B ',
		'ACA',
		'DB '
	], {
		A: 'modern_industrialization:copper_fine_wire',
		B: 'minecraft:paper',
		C: 'modern_industrialization:coal_dust',
		D: 'minecraft:honey_bottle'
	}).replaceIngredient('minecraft:honey_bottle', 'minecraft:glass_bottle')
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:copper_fine_wire", amount: 2},
			{item: "minecraft:paper", amount: 1},
			{item: "modern_industrialization:coal_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geggy:glue", amount: 100}
		],
		item_outputs: [
			{item: "modern_industrialization:resistor", amount: 2}
		]
	})
	
	event.remove({id: 'magick:dust_to_diamond'})
	
	// NEW IRON/STEEL
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
	event.shaped('geggy:tiny_iron_blend_dust', [
		'SSS',
		'B  ',
		'   '
	], {
		S: 'gegology:tiny_granitic_sand_dust',
		B: 'modern_industrialization:coal_tiny_dust'
	})
	event.blasting('minecraft:iron_nugget', 'geggy:tiny_iron_blend_dust').cookingTime(200)
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
	event.blasting('minecraft:iron_ingot', 'geggy:pig_iron_ingot').cookingTime(400)
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
	
	event.shaped('modern_industrialization:super_boiler', [
		'CDC',
		'BAB',
		'CEC'
	], {
		A: 'create:copper_casing',
		B: 'modern_industrialization:copper_wire',
		C: 'modern_industrialization:bronze_machine_casing',
		D: 'modern_industrialization:capacitor',
		E: 'create:copper_valve_handle'
	})
	
	// create pump 0.5mb/t rpm // for 33.3 steam output t needs 68 rpm
	event.custom({ 
		type: "modern_industrialization:super_boiler",
		eu: 2,
		duration: 120,
		fluid_inputs: [
			{fluid: "modern_industrialization:creosote", amount: 15},
			{fluid: "minecraft:water", amount: 333}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:steam", amount: 4000}
		]
	})
	
	event.custom({
		"type" : "modern_industrialization:coke_oven",
		"eu" : 2,
		"duration" : 600,
		"item_inputs" : {"tag" : "minecraft:logs", "amount" : 1},
		"fluid_outputs" : {
			"fluid" : "modern_industrialization:creosote", "amount" : 10
		},
		"item_outputs" : {
			"item" : "minecraft:charcoal", "amount" : 2
		}
	})
	
	event.custom({ 
		type: "modern_industrialization:coke_oven",
		eu: 2,
		duration: 800,
		item_inputs: [
			{item: "minecraft:coal", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:coke", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:creosote", amount: 250}
		]
	})
	event.custom({ 
		type: "modern_industrialization:coke_oven",
		eu: 2,
		duration: 800,
		item_inputs: [
			{item: "modern_industrialization:coal_dust", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:coke_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:creosote", amount: 250}
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
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:nickel_ingot", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "geghilarity:nickel_rod", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:nickel_double_ingot", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
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
		B: 'geggy:galvanized_steel_plate',
		C: 'geghilarity_fatmachines:steel_frame_box'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:galvanized_steel_plate", amount: 6},
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
		A: 'geggy:galvanized_steel_rod',
		B: 'modern_industrialization:steel_machine_casing_pipe',
		C: 'geggy:galvanized_steel_plate'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:galvanized_steel_rod", amount: 4},
			{item: "geggy:galvanized_steel_plate", amount: 4},
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
		C: 'geggy:galvanized_steel_plate',
		D: 'modern_industrialization:electrum_wire'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:graphite_electrode", amount: 2},
			{item: "modern_industrialization:electrum_wire", amount: 2},
			{item: "geggy:galvanized_steel_plate", amount: 4},
			{item: "geghilarity_fatmachines:steel_frame_box", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:carbon_electrode_assembly", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "modern_industrialization:steel_large_plate", amount: 3},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "modern_industrialization:pump", amount: 2},
			{item: "geghilarity_fatmachines:carbon_electrode_assembly", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:arc_furnace", amount: 1}
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
		event.shaped("modern_industrialization:"+mat+"_blade", [
		'A  ',
		'B  '
	], {
		A: "geggy:"+mat+"_blade_part",
		B: "modern_industrialization:"+mat+"_rod"
	})
	event.custom({ 
		type: "modern_industrialization:packer",
		eu: 4,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:"+mat+"_blade_part", amount: 4},
			{item: "modern_industrialization:"+mat+"_rod", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:"+mat+"_blade", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 600,
		item_inputs: [ 
			{item: "modern_industrialization:"+mat+"_curved_plate", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:"+mat+"_blade_part", amount: 1}
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

	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:silicon_n_doped_plate", amount: 1},
			{item: "modern_industrialization:electrum_fine_wire", amount: 1},
			{item: "modern_industrialization:steel_curved_plate", amount: 2},
			{item: "geghilarity:small_gallium_arsenide_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geggy:liquid_quartz_glass", amount: 144}
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
			{item: "modern_industrialization:silicon_plate", amount: 2},
			{item: "modern_industrialization:electrum_fine_wire", amount: 3},
			{item: "modern_industrialization:steel_curved_plate", amount: 2},
			{item: "geghilarity:gallium_arsenide_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geggy:liquid_quartz_glass", amount: 144}
		],
		item_outputs: [
			{item: "modern_industrialization:diode", amount: 1}
		]
	})
	
	event.remove({id: 'modern_industrialization:electric_age/component/craft/transistor_doped_asbl'})
	event.remove({id: 'modern_industrialization:electric_age/component/craft/transistor_asbl'})
	event.remove({id: 'modern_industrialization:assembler_generated/electric_age/component/craft/transistor'})
	event.remove({id: 'modern_industrialization:assembler_generated/electric_age/component/craft/transistor_doped'})

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
		eu: 120,
		duration: 300,
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
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:polytetrafluoroethylene_sheet", amount: 4},
			{item: "modern_industrialization:stainless_steel_plate", amount: 2},
			{item: "modern_industrialization:stainless_steel_ring", amount: 2},
			{item: "minecraft:feather", amount: 6}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 250},
			{fluid: "modern_industrialization:styrene_butadiene_rubber", amount: 144}
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
		type: "modern_industrialization:electric_alloy_smelter",
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
		type: "modern_industrialization:electric_alloy_smelter",
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
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:soldering_alloy_tiny_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 10}
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
		eu: 8,
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
		T: 'geggy:galvanized_steel_gear'
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
			{item: "geggy:galvanized_steel_gear", amount: 1}
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
		duration: 400,
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
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:steel_plate", amount: 2},
			{item: "geggy:reinforced_glass_pane", amount: 2},
			{item: "modern_industrialization:tin_plate", amount: 2},
			{item: "modern_industrialization:fluid_pipe", amount: 1},
			{item: "modern_industrialization:pump", amount: 1},
			{item: "modern_industrialization:basic_machine_hull", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:electric_vacuum_chamber", amount: 1}
		]
	})
	
	// autoclave
	event.shaped('modern_industrialization:autoclave', [
		'AFA',
		'CDC',
		'AEA'
	], {
		A: 'geggy:galvanized_steel_plate',
		C: 'modern_industrialization:analog_circuit',
		D: 'modern_industrialization:basic_machine_hull',
		E: 'modern_industrialization:pump',
		F: 'ae2:quartz_glass'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:galvanized_steel_plate", amount: 4},
			{item: "modern_industrialization:analog_circuit", amount: 2},
			{item: "ae2:quartz_glass", amount: 1},
			{item: "modern_industrialization:pump", amount: 1},
			{item: "modern_industrialization:basic_machine_hull", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:autoclave", amount: 1}
		]
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
			{item: "geggy:mold_ball", amount: 1, probability: 0.0}
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
			{item: "geggy:kovar_ring", amount: 1}
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
			{fluid: "modern_industrialization:soldering_alloy", amount: 50}
		],
		item_outputs: [
			{item: "modern_industrialization:analog_circuit", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 32,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:electronic_circuit_board", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 3},
			{item: "modern_industrialization:diode", amount: 2},
			{item: "modern_industrialization:transistor", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 100}
		],
		item_outputs: [
			{item: "modern_industrialization:electronic_circuit", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 32,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:digital_circuit_board", amount: 1},
			{item: "modern_industrialization:electronic_circuit", amount: 4},
			{item: "modern_industrialization:not_gate", amount: 2},
			{item: "modern_industrialization:op_amp", amount: 1},
			{item: "modern_industrialization:or_gate", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 100}
		],
		item_outputs: [
			{item: "modern_industrialization:digital_circuit", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 32,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:processing_unit_board", amount: 1},
			{item: "modern_industrialization:digital_circuit", amount: 4},
			{item: "modern_industrialization:random_access_memory", amount: 2},
			{item: "modern_industrialization:memory_management_unit", amount: 1},
			{item: "modern_industrialization:arithmetic_logic_unit", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 100}
		],
		item_outputs: [
			{item: "modern_industrialization:processing_unit", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 32,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:quantum_circuit_board", amount: 1},
			{item: "modern_industrialization:processing_unit", amount: 4},
			{item: "modern_industrialization:cooling_cell", amount: 2},
			{item: "modern_industrialization:qbit", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 100},
			{fluid: "geghilarity:liquid_ruridit", amount: 720}
		],
		item_outputs: [
			{item: "modern_industrialization:quantum_circuit", amount: 1}
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
	
	// crafting SUSY catalysts - also geghilarity
	
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
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
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "geghilarity:cobalt_dust", amount: 1},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geghilarity:cobalt_catalyst_pellet", amount: 4}
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
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "geghilarity:palladium_dust", amount: 1},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geghilarity:palladium_catalyst_pellet", amount: 4}
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
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "modern_industrialization:platinum_dust", amount: 1},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geghilarity:platinum_catalyst_pellet", amount: 4}
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
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "modern_industrialization:nickel_dust", amount: 1},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geghilarity:nickel_catalyst_pellet", amount: 4}
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
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "modern_industrialization:copper_dust", amount: 1},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geghilarity:copper_catalyst_pellet", amount: 4}
		]
	})
	event.shaped('geghilarity:copper_catalyst_bed', [
		'B B',
		' A ',
		'B B'
	], {
		A: 'geghilarity:catalyst_bed_support_grid',
		B: 'geghilarity:copper_catalyst_pellet'
	})
	
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "geghilarity:iron_iii_oxide_dust", amount: 1},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geghilarity:iron_iii_oxide_catalyst_pellet", amount: 4}
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
	
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "geghilarity:copper_ii_chloride_dust", amount: 1},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geghilarity:copper_ii_chloride_catalyst_pellet", amount: 4}
		]
	})
	event.shaped('geghilarity:copper_ii_chloride_catalyst_bed', [
		'B B',
		' A ',
		'B B'
	], {
		A: 'geghilarity:catalyst_bed_support_grid',
		B: 'geghilarity:copper_ii_chloride_catalyst_pellet'
	})
	
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "geghilarity:tantalum_dust", amount: 1},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geghilarity:tantalum_catalyst_pellet", amount: 4}
		]
	})
	event.shaped('geghilarity:tantalum_catalyst_bed', [
		'B B',
		' A ',
		'B B'
	], {
		A: 'geghilarity:catalyst_bed_support_grid',
		B: 'geghilarity:tantalum_catalyst_pellet'
	})
	
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "geghilarity:alumina", amount: 1},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geghilarity:alumina_catalyst_pellet", amount: 4}
		]
	})
	event.shaped('geghilarity:alumina_catalyst_bed', [
		'B B',
		' A ',
		'B B'
	], {
		A: 'geghilarity:catalyst_bed_support_grid',
		B: 'geghilarity:alumina_catalyst_pellet'
	})
	
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "modern_industrialization:silver_dust", amount: 1},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geghilarity:silver_catalyst_pellet", amount: 4}
		]
	})
	event.shaped('geghilarity:silver_catalyst_bed', [
		'B B',
		' A ',
		'B B'
	], {
		A: 'geghilarity:catalyst_bed_support_grid',
		B: 'geghilarity:silver_catalyst_pellet'
	})
	
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 7,
		duration: 64,
		item_inputs: [ 
			{item: "geghilarity:zsm5_dust", amount: 1},
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geghilarity:zsm5_catalyst_pellet", amount: 4}
		]
	})
	event.shaped('geghilarity:zsm5_catalyst_bed', [
		'B B',
		' A ',
		'B B'
	], {
		A: 'geghilarity:catalyst_bed_support_grid',
		B: 'geghilarity:zsm5_catalyst_pellet'
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
	
	event.shaped('geghilarity_fatmachines:cast_iron_muffler_hatch', [
		'EDE',
		'BAC',
		'EDE'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'modern_industrialization:tin_rotor',
		C: 'modern_industrialization:motor',
		D: 'create:fluid_pipe',
		E: 'createdeco:cast_iron_sheet'
	})
	event.shaped('modern_industrialization:fermentation_vat', [
		'DBD',
		'EAE',
		'DCD'
	], {
		A: 'modern_industrialization:basic_machine_hull',
		B: 'geggy:bronze_pump',
		C: 'modern_industrialization:analog_circuit',
		D: 'powah:energy_cable_starter',
		E: 'geggy:reinforced_glass'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:basic_machine_hull", amount: 1},
			{item: "powah:energy_cable_basic", amount: 4},
			{item: "geggy:reinforced_glass", amount: 2},
			{item: "geggy:bronze_pump", amount: 1},
			{item: "modern_industrialization:analog_circuit", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:fermentation_vat", amount: 1}
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
			{item: "minecraft:copper_ingot", amount: 1}
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
			{item: "modern_industrialization:electrum_ingot", amount: 1}
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
			{item: "geggy:steel_fine_wire", amount: 64},
			{item: "geggy:zinc_foil", amount: 16}
		],
		item_outputs: [
			{item: "geggy:item_filter", amount: 1}
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
		type: "modern_industrialization:electric_alloy_smelter",
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
		type: "modern_industrialization:blast_furnace",
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
			{item: "geggy:energetic_alloy_dust", amount: 1},
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
			{item: "geggy:energetic_alloy_dust", amount: 3}
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
		type: "modern_industrialization:blast_furnace",
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
			{fluid: "modern_industrialization:soldering_alloy", amount: 100}
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
	event.shaped('4x geggy:unlit_torch', [
		'AB ',
		'C  ',
		'   '
	], {
		A: 'geggy:sticky_resin',
		B: 'minecraft:string',
		C: 'minecraft:stick'
	})
	
	// black steel
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 4,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:black_steel_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geggy:black_steel_plate", amount: 1}
		]
	})
	// from 120 eu, problem for HV hatches
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 1029,
		item_inputs: [ 
			{item: "geggy:black_steel_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:nitrogen", amount: 1000}
		],
		item_outputs: [
			{item: "geggy:black_steel_ingot", amount: 1}
		]
	})
	
	event.shaped('geghilarity:lv_emitter', [
		'DBC',
		'BAB',
		'CBD'
	], {
		B: 'geggy:brass_rod',
		A: 'geggy:quartzite',
		C: 'modern_industrialization:analog_circuit',
		D: 'powah:energy_cable_basic'
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "create:brass_ingot", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [
			{item: "geggy:brass_rod", amount: 2}
		]
	})
	
	event.remove([
		"minecraft:book",
	    "farmersdelight:book_from_canvas",
		"modern_industrialization:materials/centrifuge/manganese_crushed_dust"
	])

	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 8,
		duration: 1200,
		item_inputs: [ 
			{item: "minecraft:raw_iron", amount: 6}
		],
		item_outputs: [
			{item: "modern_industrialization:iron_dust", amount: 8},
			{item: "geghilarity:pyrolusite_dust", amount: 1}
		]
	})
	event.smelting('geggy:manganese_ingot', 'modern_industrialization:manganese_dust').cookingTime(200)
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:manganese_ingot", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [
			{item: "geggy:manganese_rod", amount: 2}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 7,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:crosslinked_polystyrene-divinylbenzene_nugget", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:crosslinked_polystyrene-divinylbenzene_round", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 7,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:palladium-doped_crosslinked_polystyrene-divinylbenzene_nugget", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:palladium-doped_crosslinked_polystyrene-divinylbenzene_round", amount: 1}
		]
	})
	
	// ruby alumina and chrome stuff
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 20,
		item_inputs: [ 
			{item: "geghilarity:alumina", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:molten_alumina", amount: 504}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 120,
		duration: 400,
		item_inputs: [ 
			{item: "geggy:mold_ball", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:molten_alumina", amount: 36}
		],
		item_outputs: [
			{item: "geggy:alumina_seed_crystal", amount: 1, probability: 0.1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:crystallizer",
		eu: 120,
		duration: 400,
		item_inputs: [
			{item: "geggy:alumina_seed_crystal", amount: 1},
			{item: "geghilarity:chromium_iii_oxide_dust", amount: 9}
		],
		fluid_inputs: [
			{fluid: "geghilarity:molten_alumina", amount: 4608}
		],
		item_outputs: [	
			{item: "geggy:ruby_boule", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 120,
		duration: 400,
		item_inputs: [ 
			{item: "geggy:ruby_boule", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 37}
		],
		item_outputs: [
			{item: "geggy:exquisite_ruby", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "geggy:exquisite_ruby", amount: 1}
		],
		item_outputs: [
			{item: "geggy:alumina_seed_crystal", amount: 1, probability: 0.25},
			{item: "modern_industrialization:ruby_dust", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 16,
		duration: 20,
		item_inputs: [ 
			{item: "geggy:exquisite_ruby", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [
			{item: "geggy:flawless_ruby", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 50,
		item_inputs: [
			{item: "geggy:flawless_ruby", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:ruby_dust", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 16,
		duration: 20,
		item_inputs: [ 
			{item: "geggy:flawless_ruby", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [
			{item: "geggy:ruby", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 25,
		item_inputs: [
			{item: "geggy:ruby", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:ruby_dust", amount: 1}
		]
	})
	
	// for coils
	
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:tin_dust", amount: 1},
			{item: "modern_industrialization:iron_dust", amount: 1}
		],
		item_outputs: [
			{item: "geggy:tin_alloy_ingot", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 87,
		item_inputs: [ 
			{item: "geggy:tin_alloy_ingot", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:tin_alloy", amount: 144}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 24,
		duration: 76,
		item_inputs: [ 
			{item: "modern_industrialization:bronze_plate", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:bronze_foil", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 24,
		duration: 26,
		item_inputs: [ 
			{item: "modern_industrialization:aluminum_plate", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:aluminium_foil", amount: 4}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:nichrome_ingot", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [
			{item: "geggy:nichrome_rod", amount: 2}
		]
	})
	
	// tungstate temp fix
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:tungstate_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:wolframite_dust", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 4,
		duration: 200,
		item_inputs: [ 
			{item: "createdeco:cast_iron_ingot", amount: 1}
		],
		item_outputs: [
			{item: "createdeco:cast_iron_sheet", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 400,
		item_inputs: [ 
			{item: "modern_industrialization:steel_large_plate", amount: 4},
			{item: "modern_industrialization:electronic_circuit", amount: 1},
			{item: "modern_industrialization:large_pump", amount: 2},
			{item: "modern_industrialization:fluid_pipe", amount: 1},
			{item: "modern_industrialization:advanced_machine_hull", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:oil_driller", amount: 1}
		]
	})
	event.shapeless('modern_industrialization:gas_driller', ['modern_industrialization:oil_driller'])
	event.shapeless('modern_industrialization:oil_driller', ['modern_industrialization:gas_driller'])
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:cupronickel_coil", amount: 4},
			{item: "modern_industrialization:electronic_circuit", amount: 2},
			{item: "modern_industrialization:large_pump", amount: 2},
			{item: "modern_industrialization:turbo_machine_hull", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:cracking_unit", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{tag: "minecraft:planks", amount: 8},
			{item: "geghilarity:paraffin_wax", amount: 1}
		],
		item_outputs: [
			{item: "geggy:hardened_plank", amount: 8}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:sodium_bicarbonate_dust", amount: 6}
		],
		fluid_inputs: [
			{fluid: "geghilarity:salt_water", amount: 1000},
			{fluid: "geggy:glue", amount: 576}
		],
		item_outputs: [	
			{item: "minecraft:slime_ball", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:sodium_bicarbonate_dust", amount: 6}
		],
		fluid_inputs: [
			{fluid: "geghilarity:salt_water", amount: 1000},
			{fluid: "geghilarity:polyvinyl_acetate", amount: 576}
		],
		item_outputs: [	
			{item: "minecraft:slime_ball", amount: 9}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:inductor", amount: 4},
			{item: "geggy:steel_fine_wire", amount: 2},
			{item: "powah:energy_cable_hardened", amount: 2},
			{item: "modern_industrialization:advanced_machine_hull", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:es_separator", amount: 1}
		]
	})
	
	// kibe belt ??
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:inductor", amount: 2},
			{item: "powah:energy_cable_hardened", amount: 3},
			{item: "geggy:magnetic_iron_rod", amount: 1},
			{item: "modern_industrialization:conveyor", amount: 1},
			{item: "modern_industrialization:electronic_circuit", amount: 1},
			{item: "modern_industrialization:advanced_machine_hull", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:em_separator", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:inductor", amount: 2},
			{item: "powah:energy_cable_basic", amount: 2},
			{item: "geghilarity_fatmachines:tempered_glass", amount: 1},
			{item: "modern_industrialization:pump", amount: 2},
			{item: "modern_industrialization:analog_circuit", amount: 1},
			{item: "modern_industrialization:basic_machine_hull", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:fluid_heater", amount: 1}
		]
	})
	
	// concrete
	event.custom({ 
		type: "modern_industrialization:sintering_oven",
		eu: 7,
		duration: 80,
		item_inputs: [
			{item: "geggy:clay_dust", amount: 1},
			{item: "geggy:limestone_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:methane", amount: 10},
			{fluid: "modern_industrialization:oxygen", amount: 8}
		],
		item_outputs: [	
			{item: "geggy:hot_cement_clinker", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:carbon_dioxide", amount: 5}
		]
	})
	event.custom({ 
		type: "modern_industrialization:sintering_oven",
		eu: 7,
		duration: 80,
		item_inputs: [
			{item: "geggy:clay_dust", amount: 1},
			{item: "geggy:limestone_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:natural_gas", amount: 10},
			{fluid: "modern_industrialization:oxygen", amount: 8}
		],
		item_outputs: [	
			{item: "geggy:hot_cement_clinker", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:carbon_dioxide", amount: 5}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 7,
		duration: 40,
		item_inputs: [ 
			{item: "geggy:hot_cement_clinker", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:air", amount: 100}
		],
		item_outputs: [
			{item: "geggy:cement_clinker", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 7,
		duration: 20,
		item_inputs: [ 
			{item: "geggy:cement_clinker", amount: 1}
		],
		item_outputs: [
			{item: "geggy:cement_dust", amount: 16}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 7,
		duration: 20,
		item_inputs: [ 
			{item: "minecraft:gravel", amount: 1},
			{item: "geggy:cement_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geggy:concrete", amount: 576}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 7,
		duration: 20,
		item_inputs: [ 
			{tag: "c:sand", amount: 1},
			{item: "geggy:cement_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geggy:concrete", amount: 576}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:mold_block", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geggy:concrete", amount: 144}
		],
		item_outputs: [
			{item: "geggy:concrete_light", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 102,
		item_inputs: [ 
			{tag: "minecraft:fishes", amount: 3}
		],
		item_outputs: [
			{item: "geggy:mince_meat", amount: 2},
			{item: "minecraft:bone_meal", amount: 1}
		]
	})
	
	// alloy blast smelter
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 1920,
		duration: 150,
		item_inputs: [
			{item: "geghilarity:tantalum_dust", amount: 1},
			{item: "modern_industrialization:carbon_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:tantalum_carbide_dust", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 1920,
		duration: 1200,
		item_inputs: [
			{item: "geghilarity:tantalum_carbide_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:hot_tantalum_carbide_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 120,
		duration: 205,
		item_inputs: [
			{item: "geggy:hot_tantalum_carbide_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:tantalum_carbide_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 24,
		duration: 96,
		item_inputs: [
			{item: "geggy:tantalum_carbide_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:tantalum_carbide_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 1920,
		duration: 160,
		item_inputs: [
			{item: "modern_industrialization:titanium_dust", amount: 1},
			{item: "modern_industrialization:carbon_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:titanium_carbide_dust", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 1920,
		duration: 1000,
		item_inputs: [
			{item: "geghilarity:titanium_carbide_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:hot_titanium_carbide_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 120,
		duration: 171,
		item_inputs: [
			{item: "geggy:hot_titanium_carbide_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:titanium_carbide_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 24,
		duration: 30,
		item_inputs: [
			{item: "geggy:titanium_carbide_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:titanium_carbide_plate", amount: 1}
		]
	})
	// removed tungstencarbide mixer, for more complexity
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 480,
		duration: 1500,
		item_inputs: [
			{item: "geghilarity:tungstencarbide_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:hot_tungstencarbide_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 120,
		duration: 153,
		item_inputs: [
			{item: "geggy:hot_tungstencarbide_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:tungstencarbide_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 16,
		duration: 194,
		item_inputs: [ 
			{item: "geggy:tungstencarbide_ingot", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [
			{item: "geggy:tungstencarbide_rod", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 50,
		item_inputs: [ 
			{item: "geggy:hsla_plate", amount: 4},
			{item: "geggy:titanium_carbide_plate", amount: 2},
			{item: "geghilarity_fatmachines:tungstencarbide_frame_box", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:blast_casing", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 1920,
		duration: 180,
		item_inputs: [
			{item: "geghilarity:molybdenum_dust", amount: 1},
			{item: "modern_industrialization:silicon_dust", amount: 2}
		],
		item_outputs: [	
			{item: "geghilarity:molybdenum_disilicide_dust", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 1920,
		duration: 800,
		item_inputs: [
			{item: "geghilarity:molybdenum_disilicide_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:hot_molybdenum_disilicide_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 120,
		duration: 114,
		item_inputs: [
			{item: "geggy:hot_molybdenum_disilicide_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:molybdenum_disilicide_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:packer",
		eu: 16,
		duration: 100,
		item_inputs: [
			{item: "geggy:molybdenum_disilicide_ingot", amount: 2}
		],
		item_outputs: [	
			{item: "geggy:molybdenum_disilicide_double_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:molybdenum_disilicide_double_ingot", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 2}
		],
		item_outputs: [
			{item: "geggy:molybdenum_disilicide_long_rod", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 58,
		duration: 100,
		item_inputs: [
			{item: "geggy:molybdenum_disilicide_double_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:molybdenum_disilicide_double_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 50,
		item_inputs: [ 
			{item: "geggy:tantalum_carbide_plate", amount: 4},
			{item: "modern_industrialization:titanium_rotor", amount: 2},
			{item: "geggy:molybdenum_disilicide_double_plate", amount: 2},
			{item: "geggy:molybdenum_disilicide_long_rod", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:heat_vent", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 64,
		item_inputs: [ 
			{item: "geggy:tungstencarbide_rod", amount: 6}
		],
		item_outputs: [
			{item: "geghilarity_fatmachines:tungstencarbide_frame_box", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:tantalum_carbide_plate", amount: 4},
			{item: "modern_industrialization:processing_unit", amount: 2},
			{item: "modern_industrialization:aluminum_cable", amount: 2},
			{item: "modern_industrialization:highly_advanced_machine_hull", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:alloy_blast_smelter", amount: 1}
		]
	})
	
	// sly stone temp
	
	event.custom({ 
		type: "modern_industrialization:hsla_blast",
		eu: 4,
		duration: 600,
		item_inputs: [
			{item: "ae2:ender_dust", amount: 4},
			{item: "minecraft:redstone", amount: 8},
			{item: "modern_industrialization:coke", amount: 2, probability: 0.2},
			{item: "minecraft:gunpowder", amount: 1, probability: 0.5}
		],
		item_outputs: [	
			{item: "wiredredstone:ender_redstone_mixture", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 32,
		duration: 400,
		item_inputs: [
			{item: "minecraft:blackstone", amount: 2},
			{item: "wiredredstone:ender_redstone_mixture", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 2000}
		],
		item_outputs: [	
			{item: "ae2:sky_stone_block", amount: 2}
		]
	})
	
	// block nerfs
	event.remove([
		"minecraft:copper_ingot",
	    "minecraft:copper_ingot_from_waxed_copper_block",
		"minecraft:gold_ingot_from_gold_block",
		"modern_industrialization:materials/gold/unpacker/ingot",
		"minecraft:diamond",
		"modern_industrialization:materials/diamond/unpacker/gem",
		"minecraft:raw_gold",
		"modern_industrialization:materials/gold/unpacker/raw_metal",
		"modern_industrialization:materials/copper/unpacker/ingot"
	])
	event.shapeless('64x geghilarity:precious_nugget', ['minecraft:raw_gold_block'])
	
	
	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 7,
		duration: 44,
		item_inputs: [
			{item: "modern_industrialization:kanthal_plate", amount: 1}
		],
		item_outputs: [	
			{item: "modern_industrialization:kanthal_wire", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 480,
		duration: 900,
		item_inputs: [
			{item: "modern_industrialization:kanthal_hot_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "modern_industrialization:kanthal_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 24,
		duration: 55,
		item_inputs: [ 
			{item: "modern_industrialization:stainless_steel_plate", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:stainless_steel_foil", amount: 4}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 400,
		item_inputs: [ 
			{item: "modern_industrialization:steel_dust", amount: 7},
			{item: "geghilarity:vanadium_dust", amount: 1},
			{item: "modern_industrialization:chromium_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:vanadiumsteel_dust", amount: 9}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 1598,
		item_inputs: [ 
			{item: "geggy:vanadiumsteel_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:vanadiumsteel_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 24,
		duration: 55,
		item_inputs: [ 
			{item: "geggy:vanadiumsteel_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:vanadiumsteel_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 24,
		duration: 55,
		item_inputs: [ 
			{item: "geggy:vanadiumsteel_plate", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:vanadiumsteel_foil", amount: 4}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 24,
		duration: 129,
		item_inputs: [ 
			{item: "geghilarity:hss-s_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:hss-s_plate", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 24,
		duration: 97,
		item_inputs: [ 
			{item: "geggy:tungstencarbide_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:tungstencarbide_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 24,
		duration: 97,
		item_inputs: [ 
			{item: "geggy:tungstencarbide_plate", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:tungstencarbide_foil", amount: 4}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 24,
		duration: 191,
		item_inputs: [ 
			{item: "geggy:osmiridium_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:osmiridium_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 24,
		duration: 191,
		item_inputs: [ 
			{item: "geggy:osmiridium_plate", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:osmiridium_foil", amount: 4}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 24,
		duration: 323,
		item_inputs: [ 
			{item: "geghilarity:trinium_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:trinium_plate", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 7680,
		duration: 500,
		item_inputs: [ 
			{item: "geghilarity:enriched_naquadah_dust", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:hydrogen", amount: 2000}
		],
		item_outputs: [	
			{item: "geggy:enriched_naquadah_hot_ingot", amount: 1}
		],
		fluid_outputs: [ 
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 1920,
		duration: 150,
		item_inputs: [ 
			{item: "geggy:enriched_naquadah_hot_ingot", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:liquid_helium", amount: 500}
		],
		item_outputs: [	
			{item: "geggy:enriched_naquadah_ingot", amount: 1}
		],
		fluid_outputs: [ 
			{fluid: "modern_industrialization:helium", amount: 250}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 24,
		duration: 528,
		item_inputs: [ 
			{item: "geggy:enriched_naquadah_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:enriched_naquadah_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 24,
		duration: 528,
		item_inputs: [ 
			{item: "geggy:enriched_naquadah_plate", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:enriched_naquadah_foil", amount: 4}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 30720,
		duration: 670,
		item_inputs: [ 
			{item: "geghilarity:naquadah_alloy_dust", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:argon", amount: 50}
		],
		item_outputs: [	
			{item: "geggy:naquadah_alloy_hot_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 7680,
		duration: 300,
		item_inputs: [ 
			{item: "geggy:naquadah_alloy_hot_ingot", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:liquid_helium", amount: 500}
		],
		item_outputs: [	
			{item: "geggy:naquadah_alloy_ingot", amount: 1}
		],
		fluid_outputs: [ 
			{fluid: "modern_industrialization:helium", amount: 250}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 122880,
		duration: 600,
		item_inputs: [ 
			{item: "geghilarity:naquadria_dust", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:hydrogen", amount: 2000}
		],
		item_outputs: [	
			{item: "geggy:naquadria_hot_ingot", amount: 1}
		],
		fluid_outputs: [ 
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 30720,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:naquadria_hot_ingot", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:liquid_helium", amount: 500}
		],
		item_outputs: [	
			{item: "geggy:naquadria_ingot", amount: 1}
		],
		fluid_outputs: [ 
			{fluid: "modern_industrialization:helium", amount: 250}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 24,
		duration: 522,
		item_inputs: [ 
			{item: "geggy:naquadria_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:naquadria_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 24,
		duration: 528,
		item_inputs: [ 
			{item: "geggy:naquadria_plate", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:naquadria_foil", amount: 4}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 4,
		duration: 100,
		item_inputs: [ 
			{item: "minecraft:gilded_blackstone", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:crushed_precious_ore", amount: 1},
			{item: "geggy:crushed_precious_ore", amount: 1, probability: 0.8}
		]
	})
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 4,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:precious_ore", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:crushed_precious_ore", amount: 1},
			{item: "geggy:crushed_precious_ore", amount: 1, probability: 0.5}
		]
	})
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 4,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:nether_precious_ore", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:crushed_precious_ore", amount: 1},
			{item: "geggy:crushed_precious_ore", amount: 1, probability: 0.5}
		]
	})
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 4,
		duration: 250,
		item_inputs: [ 
			{item: "geggy:deepslate_precious_ore", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:crushed_precious_ore", amount: 1},
			{item: "geggy:crushed_precious_ore", amount: 1, probability: 0.5}
		]
	})
	event.custom({ 
		type: "modern_industrialization:autoclave",
		eu: 16,
		duration: 150,
		item_inputs: [ 
			{item: "geggy:crushed_precious_ore", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "minecraft:water", amount: 500}
		],
		item_outputs: [	
			{item: "geggy:purified_precious_ore", amount: 1},
			{item: "geggy:purified_precious_ore", amount: 1, probability: 0.2}
		]
	})
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "geggy:purified_precious_ore"}
		],
		"tool": 
			{"type": "farmersdelight:tool",
			"item": "create:filter"},
		"result": [
			{ "item": "geghilarity:precious_nugget", "count": 3},
			{ "item": "geghilarity:precious_nugget", "count": 3, "chance": 0.7},
			{ "item": "geghilarity:precious_nugget", "count": 2, "chance": 0.5}
		]//,
		//"sound": "minecraft:item.axe.strip"
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 4,
		duration: 100,
		item_inputs: [ 
			{item: "geghilarity:precious_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "minecraft:gold_nugget", amount: 3}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 150,
		item_inputs: [ 
			{tag: "minecraft:logs", amount: 1}
		],
		item_outputs: [	
			{item: "modern_industrialization:wood_pulp", amount: 6},
			{item: "modern_industrialization:wood_pulp", amount: 1, probability: 0.8}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "charm:azalea_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "charm:azalea_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "charm:ebony_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "charm:ebony_planks", amount: 6}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:magnetic_iron_rod", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "geggy:magnetic_iron_bolt", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:red_alloy_ingot", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "geggy:red_alloy_rod", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:red_alloy_rod", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "geggy:red_alloy_bolt", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 200,
		item_inputs: [ 
			{item: "minecraft:glass_pane", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "geggy:round_glass_pane", amount: 2}
		]
	})
	event.shaped('geggy:iron_screw', [
		' A ',
		'A  ',
		'   '
	], {
		A: 'modern_industrialization:iron_bolt'
	})
	event.shaped('minecraft:compass', [
		'CBE',
		'DAD',
		'FDC'
	], {
		A: 'modern_industrialization:iron_plate',
		B: 'geggy:round_glass_pane',
		C: 'geggy:iron_screw',
		D: 'geggy:zinc_ring',
		E: 'geggy:magnetic_iron_bolt',
		F: 'geggy:red_alloy_bolt'
	})
	
	// galvanized
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "create:crushed_raw_zinc", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geggy:liquid_zinc", amount: 144}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "create:raw_zinc", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geggy:liquid_zinc", amount: 144}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 16,
		duration: 150,
		item_inputs: [ 
			{item: "create:zinc_ingot", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geggy:liquid_zinc", amount: 144}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 8,
		duration: 50,
		item_inputs: [ 
			{item: "create:zinc_nugget", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geggy:liquid_zinc", amount: 16}
		]
	})
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 16,
		duration: 150,
		item_inputs: [ 
			{item: "createdeco:zinc_sheet", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geggy:liquid_zinc", amount: 144}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 16,
		duration: 250,
		item_inputs: [ 
			{item: "modern_industrialization:steel_plate", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geggy:liquid_zinc", amount: 16}
		],
		item_outputs: [	
			{item: "geggy:galvanized_steel_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 16,
		duration: 250,
		item_inputs: [ 
			{item: "modern_industrialization:steel_curved_plate", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geggy:liquid_zinc", amount: 16}
		],
		item_outputs: [	
			{item: "geggy:galvanized_steel_curved_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 16,
		duration: 150,
		item_inputs: [ 
			{item: "modern_industrialization:steel_rod", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geggy:liquid_zinc", amount: 8}
		],
		item_outputs: [	
			{item: "geggy:galvanized_steel_rod", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 16,
		duration: 75,
		item_inputs: [ 
			{item: "modern_industrialization:steel_bolt", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geggy:liquid_zinc", amount: 2}
		],
		item_outputs: [	
			{item: "geggy:galvanized_steel_bolt", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 16,
		duration: 300,
		item_inputs: [ 
			{item: "modern_industrialization:steel_gear", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geggy:liquid_zinc", amount: 64}
		],
		item_outputs: [	
			{item: "geggy:galvanized_steel_gear", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:steel_ring", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geggy:liquid_zinc", amount: 4}
		],
		item_outputs: [	
			{item: "geggy:galvanized_steel_ring", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:galvanized_steel_plate", amount: 6},
			{item: "geggy:galvanized_steel_rod", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:soldering_alloy", amount: 100}
		],
		item_outputs: [
			{item: "geghilarity:galvanized_steel_machine_casing", amount: 1}
		]
	})
	
	event.shaped('minecraft:hopper', [
		'B B',
		'CAC',
		' C '
	], {
		A: 'minecraft:chest',
		B: 'modern_industrialization:iron_plate',
		C: 'geggy:iron_curved_plate'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "geggy:galvanized_steel_curved_plate", amount: 3},
			{item: "modern_industrialization:motor", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:hopper", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:iron_curved_plate", amount: 2}
		],
		item_outputs: [
			{item: "minecraft:bucket", amount: 1}
		]
	})
	
	event.shaped('geggy:steel_minecart_wheels', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'modern_industrialization:steel_ring',
		B: 'modern_industrialization:steel_rod'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 20,
		duration: 60,
		item_inputs: [ 
			{item: "modern_industrialization:steel_ring", amount: 2},
			{item: "modern_industrialization:steel_rod", amount: 1}
		],
		item_outputs: [
			{item: "geggy:steel_minecart_wheels", amount: 1}
		]
	})
	event.shaped('minecraft:minecart', [
		'CCC',
		'ACA',
		'   '
	], {
		A: 'geggy:steel_minecart_wheels',
		C: 'modern_industrialization:steel_plate'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 20,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:steel_plate", amount: 4},
			{item: "geggy:steel_minecart_wheels", amount: 2}
		],
		item_outputs: [
			{item: "minecraft:minecart", amount: 1}
		]
	})
	
	event.shaped('3x minecraft:rail', [
		'ABA',
		'ABA',
		'ABA'
	], {
		A: 'modern_industrialization:steel_rod',
		B: 'geggy:hardened_stick'
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:steel_rod", amount: 18},
			{item: "minecraft:stick", amount: 9}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:creosote", amount: 250}
		],
		item_outputs: [
			{item: "minecraft:rail", amount: 9}
		]
	})
	event.shaped('minecraft:powered_rail', [
		'ABA',
		' C ',
		'   '
	], {
		A: 'modern_industrialization:gold_rod',
		B: 'minecraft:rail',
		C: 'modern_industrialization:redstone_tiny_dust'
	})
	event.custom({ 
		type: "modern_industrialization:packer",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:gold_rod", amount: 18},
			{item: "minecraft:rail", amount: 9},
			{item: "minecraft:redstone", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:powered_rail", amount: 9}
		]
	})
	event.shapeless('minecraft:activator_rail', ['minecraft:rail', 'minecraft:redstone_torch'])
	event.custom({ 
		type: "modern_industrialization:packer",
		eu: 2,
		duration: 50,
		item_inputs: [ 
			{item: "minecraft:rail", amount: 6},
			{item: "minecraft:redstone_torch", amount: 6}
		],
		item_outputs: [
			{item: "minecraft:activator_rail", amount: 6}
		]
	})
	event.shapeless('minecraft:detector_rail', ['minecraft:rail', 'minecraft:stone_pressure_plate', 'minecraft:redstone'])
	event.custom({ 
		type: "modern_industrialization:packer",
		eu: 2,
		duration: 50,
		item_inputs: [ 
			{item: "minecraft:rail", amount: 3},
			{item: "minecraft:stone_pressure_plate", amount: 3},
			{item: "minecraft:redstone", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:detector_rail", amount: 3}
		]
	})
	event.shapeless('create:controller_rail', ['minecraft:powered_rail', 'modern_industrialization:capacitor'])
	event.custom({ 
		type: "modern_industrialization:packer",
		eu: 2,
		duration: 50,
		item_inputs: [ 
			{item: "minecraft:powered_rail", amount: 3},
			{item: "modern_industrialization:capacitor", amount: 1}
		],
		item_outputs: [
			{item: "create:controller_rail", amount: 3}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "extended_drawers:single_drawer", amount: 1},
			{item: "modern_industrialization:bronze_large_plate", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 100}
		],
		item_outputs: [
			{item: "modern_industrialization:bronze_barrel", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "extended_drawers:single_drawer", amount: 1},
			{item: "modern_industrialization:aluminum_large_plate", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 100}
		],
		item_outputs: [
			{item: "modern_industrialization:aluminum_barrel", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "extended_drawers:single_drawer", amount: 1},
			{item: "modern_industrialization:steel_large_plate", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 100}
		],
		item_outputs: [
			{item: "modern_industrialization:steel_barrel", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "extended_drawers:single_drawer", amount: 1},
			{item: "modern_industrialization:stainless_steel_large_plate", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 100}
		],
		item_outputs: [
			{item: "modern_industrialization:stainless_steel_barrel", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 200,
		item_inputs: [ 
			{item: "extended_drawers:single_drawer", amount: 1},
			{item: "modern_industrialization:titanium_large_plate", amount: 2}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 100}
		],
		item_outputs: [
			{item: "modern_industrialization:titanium_barrel", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 16,
		duration: 150,
		item_inputs: [ 
			{item: "minecraft:black_dye", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geggy:concrete", amount: 144}
		],
		item_outputs: [
			{item: "minecraft:black_concrete_powder", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:lignite_coal_dust", amount: 3}
		],
		item_outputs: [
			{item: "modern_industrialization:lignite_coal", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:lignite_coal_crushed_dust", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:lignite_coal_dust", amount: 1},
			{item: "modern_industrialization:lignite_coal_dust", amount: 1, probability: 0.5},
			{item: "modern_industrialization:sulfur_dust", amount: 1, probability: 0.33}
		]
	})
	
	event.shaped('minecraft:lightning_rod', [
		'A  ',
		'B  ',
		'B  '
	], {
		A: 'minecraft:copper_ingot',
		B: 'modern_industrialization:copper_rod'
	})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "geggy:heated_rubber", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:rubber_sheet", amount: 1}
		]
	})
	
	event.blasting('modern_industrialization:antimony_ingot', 'geggy:refined_stibnite_dust').cookingTime(100)
	
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 4,
		duration: 300,
		item_inputs: [
			{item: "modern_industrialization:lead_dust", amount: 4},
			{item: "modern_industrialization:antimony_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "modern_industrialization:battery_alloy_ingot", amount: 5}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 16,
		duration: 100,
		item_inputs: [
			{item: "modern_industrialization:lead_dust", amount: 4},
			{item: "modern_industrialization:antimony_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "modern_industrialization:battery_alloy_ingot", amount: 5}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:implosion_compressor",
		eu: 1024,
		duration: 1,
		item_inputs: [
			{item: "modern_industrialization:battery_alloy_plate", amount: 1},
			{item: "geghilarity:high_purity_antimony_dust", amount: 1},
			{item: "geghilarity:high_purity_gallium_dust", amount: 1},
			{item: "modern_industrialization:industrial_tnt", amount: 1},
		],
		item_outputs: [
			{item: "geggy:enhanced_battery_alloy_plate", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 4,
		duration: 300,
		item_inputs: [
			{item: "geggy:enhanced_battery_alloy_plate", amount: 1}
		],
		item_outputs: [
			{item: "geggy:enhanced_battery_alloy_curved_plate", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "minecraft:paper", amount: 2},
			{item: "geghilarity:trinitrotoluene_dust", amount: 2},
			{item: "geghilarity:silicon_dioxide_dust", amount: 2},
			{item: "geggy:fine_red_alloy_wire", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:glyceryl_trinitrate", amount: 200},
			{fluid: "modern_industrialization:synthetic_rubber", amount: 100}
		],
		item_outputs: [
			{item: "modern_industrialization:industrial_tnt", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 120,
		duration: 356,
		item_inputs: [
			{item: "geghilarity:hafnium_ingot", amount: 9}
		],
		item_outputs: [
			{item: "geghilarity:dense_hafnium_plate", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 120,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:dense_hafnium_plate", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:dense_hafnium_curved_plate", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 120,
		duration: 91,
		item_inputs: [
			{item: "geghilarity:zirconium_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:zirconium_plate", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 20,
		duration: 3,
		item_inputs: [
			{item: "geghilarity:zirconium_dust", amount: 34},
			{item: "modern_industrialization:tin_dust", amount: 4},
			{item: "modern_industrialization:nickel_dust", amount: 2},
			{item: "modern_industrialization:chromium_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:zircaloy_2_dust", amount: 41}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 20,
		duration: 4,
		item_inputs: [
			{item: "geghilarity:zirconium_dust", amount: 34},
			{item: "modern_industrialization:tin_dust", amount: 5},
			{item: "modern_industrialization:iron_dust", amount: 2},
			{item: "modern_industrialization:chromium_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:zircaloy_4_dust", amount: 42}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 480,
		duration: 222,
		item_inputs: [ 
			{item: "geghilarity:zircaloy_2_dust", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:xenon", amount: 250}
		],
		item_outputs: [
			{item: "geghilarity:zircaloy_2_hot_ingot", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 120,
		duration: 45,
		item_inputs: [
			{item: "geghilarity:zircaloy_2_hot_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:zircaloy_2_ingot", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 480,
		duration: 250,
		item_inputs: [ 
			{item: "geghilarity:zircaloy_4_dust", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:xenon", amount: 250}
		],
		item_outputs: [
			{item: "geghilarity:zircaloy_4_hot_ingot", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 120,
		duration: 51,
		item_inputs: [
			{item: "geghilarity:zircaloy_4_hot_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:zircaloy_4_ingot", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 120,
		duration: 150,
		item_inputs: [
			{item: "geghilarity:zircaloy_4_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:zircaloy_4_plate", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 47,
		duration: 30,
		item_inputs: [ 
			{item: "geghilarity:zircaloy_2_ingot", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 10}
		],
		item_outputs: [
			{item: "geghilarity:zircaloy_2_rod", amount: 2}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 360,
		duration: 50,
		item_inputs: [
			{item: "geghilarity:zircaloy_2_rod", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:zircaloy_2_ring", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:blastproof_alloy_curved_plate", amount: 2},
			{item: "modern_industrialization:large_motor", amount: 1},
			{item: "modern_industrialization:robot_arm", amount: 2},
			{item: "modern_industrialization:uranium_rod", amount: 18},
			{item: "geghilarity:zircaloy_2_ring", amount: 2},
			{item: "geghilarity:dense_hafnium_plate", amount: 4}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 500},
			{fluid: "modern_industrialization:helium", amount: 150}
		],
		item_outputs: [
			{item: "modern_industrialization:uranium_fuel_rod", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:blastproof_alloy_curved_plate", amount: 2},
			{item: "modern_industrialization:large_motor", amount: 1},
			{item: "modern_industrialization:robot_arm", amount: 2},
			{item: "modern_industrialization:le_uranium_rod", amount: 18},
			{item: "geghilarity:zircaloy_2_ring", amount: 2},
			{item: "geghilarity:dense_hafnium_plate", amount: 4}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 500},
			{fluid: "modern_industrialization:helium", amount: 150}
		],
		item_outputs: [
			{item: "modern_industrialization:le_uranium_fuel_rod", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:blastproof_alloy_curved_plate", amount: 2},
			{item: "modern_industrialization:large_motor", amount: 1},
			{item: "modern_industrialization:robot_arm", amount: 2},
			{item: "modern_industrialization:he_uranium_rod", amount: 18},
			{item: "geghilarity:zircaloy_2_ring", amount: 2},
			{item: "geghilarity:dense_hafnium_plate", amount: 4}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 500},
			{fluid: "modern_industrialization:helium", amount: 150}
		],
		item_outputs: [
			{item: "modern_industrialization:he_uranium_fuel_rod", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:blastproof_alloy_curved_plate", amount: 2},
			{item: "modern_industrialization:large_motor", amount: 1},
			{item: "modern_industrialization:robot_arm", amount: 2},
			{item: "modern_industrialization:le_mox_rod", amount: 18},
			{item: "geghilarity:zircaloy_2_ring", amount: 2},
			{item: "geghilarity:dense_hafnium_plate", amount: 4}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 500},
			{fluid: "modern_industrialization:helium", amount: 150}
		],
		item_outputs: [
			{item: "modern_industrialization:le_mox_fuel_rod", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:blastproof_alloy_curved_plate", amount: 2},
			{item: "modern_industrialization:large_motor", amount: 1},
			{item: "modern_industrialization:robot_arm", amount: 2},
			{item: "modern_industrialization:he_mox_rod", amount: 18},
			{item: "geghilarity:zircaloy_2_ring", amount: 2},
			{item: "geghilarity:dense_hafnium_plate", amount: 4}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 500},
			{fluid: "modern_industrialization:helium", amount: 150}
		],
		item_outputs: [
			{item: "modern_industrialization:he_mox_fuel_rod", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 120,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:blastproof_alloy_curved_plate", amount: 2},
			{item: "modern_industrialization:large_motor", amount: 1},
			{item: "modern_industrialization:robot_arm", amount: 2},
			{item: "modern_industrialization:cadmium_rod", amount: 18},
			{item: "geghilarity:zircaloy_2_ring", amount: 2},
			{item: "geghilarity:dense_hafnium_plate", amount: 4}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 500},
			{fluid: "modern_industrialization:helium", amount: 150}
		],
		item_outputs: [
			{item: "modern_industrialization:cadmium_control_rod", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:implosion_compressor",
		eu: 2056,
		duration: 1,
		item_inputs: [
			{item: "modern_industrialization:mixed_plate_nuclear", amount: 1},
			{item: "geghilarity:zircaloy_4_plate", amount: 2},
			{item: "modern_industrialization:industrial_tnt", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:nuclear_alloy_plate", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:packer",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "minecraft:packed_mud", amount: 4}
		],
		item_outputs: [
			{item: "minecraft:mud_bricks", amount: 2}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:evaporation",
		eu: 2,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "geggy:silty_clay", amount: 500}
		],
		item_outputs: [
			{item: "geggy:unrefined_clay", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:evaporation",
		eu: 2,
		duration: 400,
		fluid_inputs: [ 
			{fluid: "gegology:sluice_juice", amount: 450}
		],
		item_outputs: [
			{item: "geggy:stone_dust", amount: 1, probability: 0.4},
			{item: "geggy:sand_dust", amount: 1, probability: 0.1}
		]
	})
	
	event.shaped('minecraft:cauldron', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'modern_industrialization:steel_plate',
		B: 'modern_industrialization:steel_ingot'
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "geggy:diamond_shards", amount: 8},
			{item: "create:filter", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "minecraft:water", amount: 500}
		],
		item_outputs: [
			{item: "minecraft:diamond", amount: 1, probability: 0.15},
			{item: "geggy:diamond_shards", amount: 4},
			{item: "modern_industrialization:diamond_tiny_dust", amount: 1, probability: 0.9},
			{item: "modern_industrialization:diamond_tiny_dust", amount: 1, probability: 0.9},
			{item: "modern_industrialization:diamond_tiny_dust", amount: 1, probability: 0.9},
			{item: "modern_industrialization:diamond_tiny_dust", amount: 1, probability: 0.9},
			{item: "modern_industrialization:diamond_tiny_dust", amount: 1, probability: 0.9}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 220,
		item_inputs: [
			{item: "geghilarity:vanadium_dust", amount: 3},
			{item: "geghilarity:gallium_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:vanadium-gallium_dust", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 4950,
		item_inputs: [
			{item: "geghilarity:vanadium-gallium_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:vanadium-gallium_hot_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 120,
		duration: 166,
		item_inputs: [
			{item: "geghilarity:vanadium-gallium_hot_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:vanadium-gallium_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 24,
		duration: 56,
		item_inputs: [
			{item: "geghilarity:vanadium-gallium_ingot", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:vanadium-gallium_plate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 24,
		duration: 56,
		item_inputs: [ 
			{item: "geghilarity:vanadium-gallium_plate", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 5}
		],
		item_outputs: [	
			{item: "geghilarity:vanadium-gallium_foil", amount: 4}
		]
	})
	
	event.shaped('2x geggy:simple_pipe_motor', [
		'CBD',
		'BAB',
		'DBC'
	], {
		A: 'geggy:magnetic_iron_rod',
		B: 'modern_industrialization:copper_wire',
		C: 'modern_industrialization:tin_curved_plate',
		D: 'geggy:cobalt_ring'
	})
	
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 32,
		duration: 600,
		fluid_inputs: [
			{fluid: "geggy:molten_gold", amount: 1152},
		],
		item_inputs: [ 
			{item: "minecraft:apple", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:golden_apple", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 16,
		duration: 600,
		fluid_inputs: [
			{fluid: "geggy:molten_gold", amount: 144},
		],
		item_inputs: [ 
			{item: "minecraft:carrot", amount: 1}
		],
		item_outputs: [
			{item: "minecraft:golden_carrot", amount: 1}
		]
	})
	
	event.shaped('3x minecraft:iron_bars', [
		'AAA',
		'AAA',
		'   '
	], {
		A: 'modern_industrialization:iron_rod'
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_reactor",
		eu: 30,
		duration: 500,
		item_inputs: [
			{item: "brazier:living_flame", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:methane", amount: 500}
		],
		item_outputs: [	
			{item: "brazier:living_flame", amount: 1}
		]
	})
	
	event.shaped('minecraft:smithing_table', [
		'BAB',
		'ADA',
		'CAC'
	], {
		A: 'geggy:hardened_plank',
		B: 'modern_industrialization:steel_plate',
		C: 'modern_industrialization:steel_rod',
		D: '#c:stripped_logs',
	})
	
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:bronze_gear", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:small_bronze_gear", amount: 2}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:tin_curved_plate", amount: 3}
		],
		item_outputs: [
			{item: "geggy:tin_conduct", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:bronze_plate", amount: 3},
			{item: "modern_industrialization:bronze_rod", amount: 2},
			{item: "geggy:small_bronze_gear", amount: 1},
			{item: "geggy:tin_conduct", amount: 1}
		],
		item_outputs: [
			{item: "geggy:bronze_piston", amount: 1}
		]
	})
	
	// kovar, need circuit
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 2,
		duration: 160,
		item_inputs: [ 
			{item: "gegology:cobaltite_dust", amount: 1},
			{item: "minecraft:coal", amount: 2}
		],
		item_outputs: [	
			{item: "geggy:cobalt_matte_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:cobalt_matte_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:cobalt_matte_dust", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 200,
		item_inputs: [ 
			{item: "modern_industrialization:iron_dust", amount: 8},
			{item: "modern_industrialization:nickel_dust", amount: 4},
			{item: "geggy:cobalt_matte_dust", amount: 4}
		],
		item_outputs: [	
			{item: "geggy:kovar_mix", amount: 8}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 4,
		duration: 400,
		item_inputs: [ 
			{item: "geggy:kovar_mix", amount: 8},
			{item: "modern_industrialization:coke", amount: 16}
		],
		item_outputs: [	
			{item: "geggy:kovar_ingot", amount: 8}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 4,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:kovar_ingot", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 2}
		],
		item_outputs: [	
			{item: "geggy:kovar_rod", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 4,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:kovar_rod", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:kovar_ring", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 16,
		duration: 220,
		item_inputs: [ 
			{item: "modern_industrialization:invar_dust", amount: 15},
			{item: "geghilarity:cobalt_dust", amount: 3}
		],
		item_outputs: [	
			{item: "geggy:kovar_dust", amount: 18}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 16,
		duration: 800,
		item_inputs: [ 
			{item: "modern_industrialization:iron_dust", amount: 10},
			{item: "modern_industrialization:nickel_dust", amount: 5},
			{item: "geghilarity:cobalt_dust", amount: 3}
		],
		item_outputs: [	
			{item: "geggy:kovar_dust", amount: 18}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:kovar_dust", amount: 1},
			{item: "geggy:selector_1", amount: 1, probability: 0.0}
		],
		item_outputs: [	
			{item: "geggy:kovar_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 120,
		duration: 60,
		item_inputs: [ 
			{item: "geggy:kovar_dust", amount: 1},
			{item: "geggy:selector_2", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 1000}
		],
		item_outputs: [	
			{item: "geggy:kovar_ingot", amount: 1}
		]
	})
	
	// cobalt
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:cobalt_ingot", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:cobalt_rod", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:cobalt_rod", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:cobalt_ring", amount: 1}
		]
	})
	
	// molds
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 400,
		item_inputs: [ 
			{item: "geggy:clay_mold", amount: 1},
			{tag: "c:ingots", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:ceramic_ingot_mold", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 400,
		item_inputs: [ 
			{item: "geggy:clay_mold", amount: 1},
			{tag: "c:plates", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:ceramic_plate_mold", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 400,
		item_inputs: [ 
			{item: "geggy:clay_mold", amount: 1},
			{item: "modern_industrialization:bronze_rod", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:ceramic_rod_mold", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 400,
		item_inputs: [ 
			{item: "geggy:clay_mold", amount: 1},
			{item: "modern_industrialization:bronze_ring", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:ceramic_ring_mold", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:alloy_smelter",
		eu: 2,
		duration: 400,
		item_inputs: [ 
			{item: "geggy:clay_mold", amount: 1},
			{tag: "c:gears", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:ceramic_gear_mold", amount: 1}
		]
	})
	event.blasting('geggy:ceramic_ingot_mold', 'geggy:clay_ingot_mold').cookingTime(600)
	event.blasting('geggy:ceramic_plate_mold', 'geggy:clay_plate_mold').cookingTime(600)
	event.blasting('geggy:ceramic_rod_mold', 'geggy:clay_rod_mold').cookingTime(600)
	event.blasting('geggy:ceramic_ring_mold', 'geggy:clay_ring_mold').cookingTime(600)
	event.blasting('geggy:ceramic_gear_mold', 'geggy:clay_gear_mold').cookingTime(600)
	
	// large cog extra
	event.custom({ 
			type: "modern_industrialization:caster",
			eu: 2,
			duration: 300,
			item_inputs: [ 
				{item: 'geggy:mold_quadrant', amount: 1, probability: 0.0}
			],
			fluid_inputs: [ 
				{fluid: 'geghilarity:mcopper', amount: 288}
			],
			item_outputs: [
				{item: 'geggy:dented_quadrant', amount: 1}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_caster",
			eu: 2,
			duration: 300,
			item_inputs: [ 
				{item: 'geggy:mold_quadrant', amount: 1, probability: 0.0}
			],
			fluid_inputs: [ 
				{fluid: 'geghilarity:mcopper', amount: 288}
			],
			item_outputs: [
				{item: 'geggy:dented_quadrant', amount: 1}
			]
		})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 150,
		item_inputs: [ 
			{item: "geggy:dented_quadrant", amount: 4},
			{item: "create:shaft", amount: 1}
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:soldering_alloy", amount: 50}
		],
		item_outputs: [
			{item: "create:large_cogwheel", amount: 1}
		]
	})
	
	// misc MV fix
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "ae2:quartz_glass", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:liquid_quartz_glass", amount: 144}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 7,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:gallium_dust", amount: 1},
			{item: "geghilarity:arsenic_dust", amount: 1}
		],
		item_outputs: [
			{item: "geghilarity:gallium_arsenide_dust", amount: 2}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 400,
		item_inputs: [ 
			{item: "minecraft:diamond", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 10}
		],
		item_outputs: [	
			{item: "geggy:crystalline_diamond_plate", amount: 1}
		]
	})
	
	event.custom({ 
			type: "modern_industrialization:shredder",
			eu: 4,
			duration: 200,
			item_inputs: [ 
				{item: 'minecraft:cobblestone', amount: 1}
			],
			item_outputs: [
				{item: 'geggy:stone_dust', amount: 9}
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

