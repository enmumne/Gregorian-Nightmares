ServerEvents.recipes(event => {

	event.remove([
		"betternether:shield",
		"betternether:nether_reed_chest",
		"betternether:stalagnate_chest",
		"betternether:willow_chest",
		"betternether:wart_chest",
		"betternether:crimson_chest",
		"betternether:warped_chest",
		"betternether:rubeus_chest",
		"betternether:mushroom_fir_chest",
		"betternether:nether_mushroom_chest",
		"betternether:anchor_tree_chest",
		"betternether:nether_sakura_chest",
		"betternether:nether_reed_barrel",
		"betternether:stalagnate_barrel",
		"betternether:willow_barrel",
		"betternether:wart_barrel",
		"betternether:crimson_barrel",
		"betternether:warped_barrel",
		"betternether:rubeus_barrel",
		"betternether:mushroom_fir_barrel",
		"betternether:nether_mushroom_barrel",
		"betternether:anchor_tree_barrel",
		"betternether:nether_sakura_barrel",
		"nethervinery:crimson_barrel",
		"nethervinery:warped_barrel",
		"vinery:barrel",
	    "bclib:tag_shield",
		"byg:byg_chest",
		"byg:rainbow_eucalpytus_door",
		"oxidized:coppper_ingot_from_nuggets",
		"vinery:cooking_pot",
		"twilightforest:equipment/knightmetal_shield"
	])
	
	event.shaped('vinery:barrel', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'vinery:cherry_slab',
		B: 'minecraft:barrel'
	})
	event.shaped('nethervinery:warped_barrel', [
		'A  ',
		'B  ',
		'A  '
	], {
		A: 'minecraft:warped_slab',
		B: 'minecraft:barrel'
	})
	event.shaped('nethervinery:crimson_barrel', [
		'A  ',
		'B  ',
		'A  '
	], {
		A: 'minecraft:crimson_slab',
		B: 'minecraft:barrel'
	})
	
	event.shaped('betternether:nether_sakura_chest', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:nether_sakura_slab',
		B: 'minecraft:chest'
	})
	event.shaped('betternether:nether_sakura_barrel', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:nether_sakura_slab',
		B: 'minecraft:barrel'
	})
	event.shaped('betternether:anchor_tree_chest', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:anchor_tree_slab',
		B: 'minecraft:chest'
	})
	event.shaped('betternether:anchor_tree_barrel', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:anchor_tree_slab',
		B: 'minecraft:barrel'
	})
	event.shaped('betternether:nether_mushroom_chest', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:nether_mushroom_slab',
		B: 'minecraft:chest'
	})
	event.shaped('betternether:nether_mushroom_barrel', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:nether_mushroom_slab',
		B: 'minecraft:barrel'
	})
	event.shaped('betternether:mushroom_fir_chest', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:mushroom_fir_slab',
		B: 'minecraft:chest'
	})
	event.shaped('betternether:mushroom_fir_barrel', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:mushroom_fir_slab',
		B: 'minecraft:barrel'
	})
	event.shaped('betternether:rubeus_chest', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:rubeus_slab',
		B: 'minecraft:chest'
	})
	event.shaped('betternether:rubeus_barrel', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:rubeus_slab',
		B: 'minecraft:barrel'
	})
	event.shaped('betternether:warped_chest', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'minecraft:warped_slab',
		B: 'minecraft:chest'
	})
	event.shaped('betternether:warped_barrel', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'minecraft:warped_slab',
		B: 'minecraft:barrel'
	})
	event.shaped('betternether:crimson_chest', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'minecraft:crimson_slab',
		B: 'minecraft:chest'
	})
	event.shaped('betternether:crimson_barrel', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'minecraft:crimson_slab',
		B: 'minecraft:barrel'
	})
	event.shaped('betternether:wart_chest', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:wart_slab',
		B: 'minecraft:chest'
	})
	event.shaped('betternether:wart_barrel', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:wart_slab',
		B: 'minecraft:barrel'
	})
	event.shaped('betternether:willow_chest', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:willow_slab',
		B: 'minecraft:chest'
	})
	event.shaped('betternether:willow_barrel', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:willow_slab',
		B: 'minecraft:barrel'
	})
	event.shaped('betternether:stalagnate_chest', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:stalagnate_slab',
		B: 'minecraft:chest'
	})
	event.shaped('betternether:stalagnate_barrel', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:stalagnate_slab',
		B: 'minecraft:barrel'
	})
	event.shaped('betternether:nether_reed_chest', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:nether_reed_slab',
		B: 'minecraft:chest'
	})
	event.shaped('betternether:nether_reed_barrel', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'betternether:nether_reed_slab',
		B: 'minecraft:barrel'
	})
	
	event.shaped('twilightforest:knightmetal_shield', [
		'AAA',
		'BCB',
		' C '
	], {
		A: 'twilightforest:knightmetal_ingot',
		B: 'twilightforest:towerwood',
		C: 'modern_industrialization:titanium_ring'
	})
	
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:aspen_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:aspen_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:baobab_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:baobab_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:blue_enchanted_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:blue_enchanted_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:bulbis_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:bulbis_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:cherry_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:cherry_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:cika_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:cika_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:cypress_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:cypress_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:ebony_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:ebony_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:ether_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:ether_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:fir_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:fir_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:green_enchanted_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:green_enchanted_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:holly_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:holly_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:imparius_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:imparius_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:lament_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:lament_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:jacaranda_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:jacaranda_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:mahogany_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:mahogany_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:white_mangrove_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:white_mangrove_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:maple_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:maple_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:nightshade_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:nightshade_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:palm_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:palm_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:pine_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:pine_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:rainbow_eucalyptus_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:rainbow_eucalyptus_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:redwood_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:redwood_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:skyris_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:skyris_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:willow_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:willow_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:witch_hazel_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:witch_hazel_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:zelkova_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:zelkova_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:sythian_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:sythian_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "byg:embur_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "byg:embur_planks", amount: 6}
		]
	})
	
	// colorfulazaleas
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "colorfulazaleas:azule_azalea_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "colorfulazaleas:azule_azalea_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "colorfulazaleas:bright_azalea_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "colorfulazaleas:bright_azalea_planks", amount: 6}
		]
	})	

	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "colorfulazaleas:fiss_azalea_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "colorfulazaleas:fiss_azalea_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "colorfulazaleas:roze_azalea_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "colorfulazaleas:roze_azalea_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "colorfulazaleas:tecal_azalea_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "colorfulazaleas:tecal_azalea_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "colorfulazaleas:titanium_azalea_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "colorfulazaleas:titanium_azalea_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "colorfulazaleas:walnut_azalea_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "colorfulazaleas:walnut_azalea_planks", amount: 6}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "vinery:cherry_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "vinery:cherry_planks", amount: 6}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "ecologics:coconut_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "ecologics:coconut_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "ecologics:walnut_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "ecologics:walnut_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "ecologics:azalea_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "ecologics:azalea_planks", amount: 6}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cutting_machine",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{tag: "ecologics:flowering_azalea_logs", amount: 1},
		],
		fluid_inputs: [ 
			{fluid: "modern_industrialization:lubricant", amount: 1},
		],
		item_outputs: [
			{item: "ecologics:flowering_azalea_planks", amount: 6}
		]
	})
	
})

ServerEvents.tags('item', event => { 
  
  event.add('c:ingots/fiery', 'twilightforest:fiery_ingot')
  event.add('c:ingots/ironwood', 'twilightforest:ironwood_ingot')
  event.add('c:ingots/knightmetal', 'twilightforest:knightmetal_ingot')
  event.add('c:ingots/steeleaf', 'twilightforest:steeleaf_ingot')
  
  event.add('c:hidden_from_recipe_viewers', 'vinery:cooking_pot')
  event.add('c:hidden_from_recipe_viewers', 'oxidized:copper_nugget')
  
});