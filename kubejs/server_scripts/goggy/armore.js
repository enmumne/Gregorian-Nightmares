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
		'AAA',
		'A A',
		'   '
	], {
		A: 'minecraft:iron_ingot'
	})
	event.shaped('geggy:unfinished_iron_chestplate', [
		'A A',
		'AAA',
		'AAA'
	], {
		A: 'minecraft:iron_ingot'
	})
	event.shaped('geggy:unfinished_iron_leggings', [
		'AAA',
		'A A',
		'A A'
	], {
		A: 'minecraft:iron_ingot'
	})
	event.shaped('geggy:unfinished_iron_boots', [
		'A A',
		'A A',
		'   '
	], {
		A: 'minecraft:iron_ingot'
	})
	event.shaped('geggy:unfinished_gold_helmet', [
		'AAA',
		'A A',
		'   '
	], {
		A: 'minecraft:gold_ingot'
	})
	event.shaped('geggy:unfinished_gold_chestplate', [
		'A A',
		'AAA',
		'AAA'
	], {
		A: 'minecraft:gold_ingot'
	})
	event.shaped('geggy:unfinished_gold_leggings', [
		'AAA',
		'A A',
		'A A'
	], {
		A: 'minecraft:gold_ingot'
	})
	event.shaped('geggy:unfinished_gold_boots', [
		'A A',
		'A A',
		'   '
	], {
		A: 'minecraft:gold_ingot'
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
			{item: "geggy:selector_1", amount: 1}
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
			{item: "geggy:selector_2", amount: 1}
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
			{item: "geggy:selector_3", amount: 1}
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
			{item: "geggy:selector_4", amount: 1}
		],
		item_outputs: [
			{item: "geggy:unfinished_diamond_boots", amount: 1}
		]
	})
	
	// diamond tools
	event.custom({ 
		type: "modern_industrialization:salloy",
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
		type: "modern_industrialization:salloy",
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
		type: "modern_industrialization:salloy",
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
		type: "modern_industrialization:salloy",
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
		type: "modern_industrialization:salloy",
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
	
	event.remove({id: 'minecraft:diamond_sword'})
	event.remove({id: 'minecraft:diamond_pickaxe'})
	event.remove({id: 'minecraft:diamond_axe'})
	event.remove({id: 'minecraft:diamond_hoe'})
	event.remove({id: 'minecraft:diamond_shovel'})
	event.shapeless('minecraft:diamond_pickaxe', ['geggy:diamond_pickaxe_head', 'geggy:j_tool_rod'])
	event.shapeless('minecraft:diamond_axe', ['geggy:diamond_axe_head', 'geggy:j_tool_rod'])
	event.shapeless('minecraft:diamond_hoe', ['geggy:diamond_hoe_head', 'geggy:j_tool_rod'])
	event.shapeless('minecraft:diamond_sword', ['geggy:diamond_sword_head', 'geggy:j_tool_rod'])
	event.shapeless('minecraft:diamond_shovel', ['geggy:diamond_shovel_head', 'geggy:j_tool_rod'])
	

})	
	