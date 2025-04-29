ServerEvents.recipes(event => {
	
	event.remove({id: 'minecraft:iron_helmet'})
	event.remove({id: 'minecraft:iron_chestplate'})
	event.remove({id: 'minecraft:iron_leggings'})
	event.remove({id: 'minecraft:iron_boots'})
	event.remove({id: 'minecraft:golden_helmet'})
	event.remove({id: 'minecraft:golden_chestplate'})
	event.remove({id: 'minecraft:golden_leggings'})
	event.remove({id: 'minecraft:golden_boots'})
	event.remove({id: 'minecraft:diamond_helmet'})
	event.remove({id: 'minecraft:diamond_chestplate'})
	event.remove({id: 'minecraft:diamond_leggings'})
	event.remove({id: 'minecraft:diamond_boots'})
	
	event.shaped('geggy:unfinished_iron_helmet', [
		'BAB',
		'B B',
		'   '
	], {
		A: 'modern_industrialization:iron_plate',
		B: 'geggy:iron_curved_plate'
	})
	event.shaped('geggy:unfinished_iron_chestplate', [
		'B B',
		'BAB',
		'BAB'
	], {
		A: 'modern_industrialization:iron_plate',
		B: 'geggy:iron_curved_plate'
	})
	event.shaped('geggy:unfinished_iron_leggings', [
		'BAB',
		'B B',
		'B B'
	], {
		A: 'modern_industrialization:iron_plate',
		B: 'geggy:iron_curved_plate'
	})
	event.shaped('geggy:unfinished_iron_boots', [
		'A A',
		'A A',
		'   '
	], {
		A: 'geggy:iron_curved_plate'
	})
	event.shaped('geggy:unfinished_gold_helmet', [
		'BAB',
		'B B',
		'   '
	], {
		A: 'modern_industrialization:gold_plate',
		B: 'modern_industrialization:gold_curved_plate'
	})
	event.shaped('geggy:unfinished_gold_chestplate', [
		'B B',
		'BAB',
		'BAB'
	], {
		A: 'modern_industrialization:gold_plate',
		B: 'modern_industrialization:gold_curved_plate'
	})
	event.shaped('geggy:unfinished_gold_leggings', [
		'BAB',
		'B B',
		'B B'
	], {
		A: 'modern_industrialization:gold_plate',
		B: 'modern_industrialization:gold_curved_plate'
	})
	event.shaped('geggy:unfinished_gold_boots', [
		'A A',
		'A A',
		'   '
	], {
		A: 'modern_industrialization:gold_curved_plate'
	})
	/*
	event.shaped('geggy:unfinished_diamond_helmet', [
		'AAA',
		'A A',
		'   '
	], {
		A: 'minecraft:diamond'
	})
	event.shaped('geggy:unfinished_diamond_chestplate', [
		'A A',
		'AAA',
		'AAA'
	], {
		A: 'minecraft:diamond'
	})
	event.shaped('geggy:unfinished_diamond_leggings', [
		'AAA',
		'A A',
		'A A'
	], {
		A: 'minecraft:diamond'
	})
	event.shaped('geggy:unfinished_diamond_boots', [
		'A A',
		'A A',
		'   '
	], {
		A: 'minecraft:diamond'
	})
	*/
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 10,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:diamond_plate", amount: 5},
			{item: "geggy:selector_1", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:unfinished_diamond_helmet", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:diamond_plate", amount: 8},
			{item: "geggy:selector_2", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:unfinished_diamond_chestplate", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 14,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:diamond_plate", amount: 7},
			{item: "geggy:selector_3", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:unfinished_diamond_leggings", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:diamond_plate", amount: 4},
			{item: "geggy:selector_4", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:unfinished_diamond_boots", amount: 1}
		]
	})
	
	// diamond tools
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 32,
		duration: 600,
		fluid_inputs: [
			{fluid: "geggy:molten_diamond", amount: 288},
		],
		item_inputs: [ 
			{item: "geggy:mold_sword", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:diamond_sword_head", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 32,
		duration: 600,
		fluid_inputs: [
			{fluid: "geggy:molten_diamond", amount: 144},
		],
		item_inputs: [ 
			{item: "geggy:mold_shovel", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:diamond_shovel_head", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 32,
		duration: 600,
		fluid_inputs: [
			{fluid: "geggy:molten_diamond", amount: 432},
		],
		item_inputs: [ 
			{item: "geggy:mold_pickaxe", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:diamond_pickaxe_head", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 32,
		duration: 600,
		fluid_inputs: [
			{fluid: "geggy:molten_diamond", amount: 288},
		],
		item_inputs: [ 
			{item: "geggy:mold_hoe", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:diamond_hoe_head", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 32,
		duration: 600,
		fluid_inputs: [
			{fluid: "geggy:molten_diamond", amount: 432},
		],
		item_inputs: [ 
			{item: "geggy:mold_axe", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:diamond_axe_head", amount: 1}
		]
	})
	
	event.remove([
		"minecraft:diamond_sword",
	    "minecraft:diamond_pickaxe",
		"minecraft:diamond_axe",
		"minecraft:diamond_hoe",
		"minecraft:diamond_shovel",
		"minecraft:golden_sword",
	    "minecraft:golden_pickaxe",
		"minecraft:golden_axe",
		"minecraft:golden_hoe",
		"minecraft:golden_shovel"
	])
	
	event.shapeless('minecraft:diamond_pickaxe', ['geggy:diamond_pickaxe_head', 'geggy:j_tool_rod'])
	event.shapeless('minecraft:diamond_axe', ['geggy:diamond_axe_head', 'geggy:j_tool_rod'])
	event.shapeless('minecraft:diamond_hoe', ['geggy:diamond_hoe_head', 'geggy:j_tool_rod'])
	event.shapeless('minecraft:diamond_sword', ['geggy:diamond_sword_head', 'geggy:j_tool_rod'])
	event.shapeless('minecraft:diamond_shovel', ['geggy:diamond_shovel_head', 'geggy:j_tool_rod'])
	
	// gold tool rework
	
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 8,
		duration: 400,
		fluid_inputs: [
			{fluid: "geggy:molten_gold", amount: 288},
		],
		item_inputs: [ 
			{item: "geggy:mold_sword", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:gold_sword_head", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 8,
		duration: 400,
		fluid_inputs: [
			{fluid: "geggy:molten_gold", amount: 144},
		],
		item_inputs: [ 
			{item: "geggy:mold_shovel", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:gold_shovel_head", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 8,
		duration: 400,
		fluid_inputs: [
			{fluid: "geggy:molten_gold", amount: 432},
		],
		item_inputs: [ 
			{item: "geggy:mold_pickaxe", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:gold_pickaxe_head", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 8,
		duration: 400,
		fluid_inputs: [
			{fluid: "geggy:molten_gold", amount: 288},
		],
		item_inputs: [ 
			{item: "geggy:mold_hoe", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:gold_hoe_head", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 8,
		duration: 400,
		fluid_inputs: [
			{fluid: "geggy:molten_gold", amount: 432},
		],
		item_inputs: [ 
			{item: "geggy:mold_axe", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:gold_axe_head", amount: 1}
		]
	})
	
	event.shapeless(Item.of('minecraft:golden_pickaxe').enchant('minecraft:silk_touch', 1), ['geggy:gold_pickaxe_head', 'geggy:j_tool_rod'])
	event.shapeless(Item.of('minecraft:golden_axe').enchant('minecraft:silk_touch', 1), ['geggy:gold_axe_head', 'geggy:j_tool_rod'])
	event.shapeless(Item.of('minecraft:golden_sword').enchant('minecraft:silk_touch', 1), ['geggy:gold_sword_head', 'geggy:j_tool_rod'])
	event.shapeless(Item.of('minecraft:golden_hoe').enchant('minecraft:silk_touch', 1), ['geggy:gold_hoe_head', 'geggy:j_tool_rod'])
	event.shapeless(Item.of('minecraft:golden_shovel').enchant('minecraft:silk_touch', 1), ['geggy:gold_shovel_head', 'geggy:j_tool_rod'])
	
	
	

})	
	