ServerEvents.recipes(event => {
	
	event.remove([
		"minecraft:iron_helmet",
	    "minecraft:iron_chestplate",
		"minecraft:iron_leggings",
		"minecraft:iron_boots",
		"minecraft:golden_helmet",
		"minecraft:golden_chestplate",
		"minecraft:golden_leggings",
	    "minecraft:golden_boots",
		"minecraft:diamond_helmet",
		"minecraft:diamond_chestplate",
		"minecraft:diamond_leggings",
		"minecraft:diamond_boots"
	])
	
	event.shaped('geggy:unfinished_iron_helmet', [
		'BAB',
		'A A',
		'   '
	], {
		A: 'minecraft:iron_ingot',
		B: 'expert_armor:iron_plate'
	})
	event.shaped('geggy:unfinished_iron_chestplate', [
		'A A',
		'BAB',
		'AAA'
	], {
		A: 'minecraft:iron_ingot',
		B: 'expert_armor:iron_plate'
	})
	event.shaped('geggy:unfinished_iron_leggings', [
		'BAB',
		'A A',
		'A A'
	], {
		A: 'minecraft:iron_ingot',
		B: 'expert_armor:iron_plate'
	})
	event.shaped('geggy:unfinished_iron_boots', [
		'B B',
		'A A',
		'   '
	], {
		A: 'minecraft:iron_ingot',
		B: 'expert_armor:iron_plate'
	})
	event.shaped('geggy:unfinished_iron_helmet', [
		'BAB',
		'A A',
		'   '
	], {
		A: 'minecraft:iron_ingot',
		B: 'expert_armor:iron_plate'
	})
	event.shaped('geggy:unfinished_iron_chestplate', [
		'A A',
		'BAB',
		'AAA'
	], {
		A: 'minecraft:iron_ingot',
		B: 'expert_armor:iron_plate'
	})
	event.shaped('geggy:unfinished_iron_leggings', [
		'BAB',
		'A A',
		'A A'
	], {
		A: 'minecraft:iron_ingot',
		B: 'expert_armor:iron_plate'
	})
	event.shaped('geggy:unfinished_iron_boots', [
		'B B',
		'A A',
		'   '
	], {
		A: 'minecraft:iron_ingot',
		B: 'expert_armor:iron_plate'
	})
	event.shaped('geggy:unfinished_gold_helmet', [
		'BAB',
		'A A',
		'   '
	], {
		A: 'minecraft:gold_ingot',
		B: 'expert_armor:gold_plate'
	})
	event.shaped('geggy:unfinished_gold_chestplate', [
		'A A',
		'BAB',
		'AAA'
	], {
		A: 'minecraft:gold_ingot',
		B: 'expert_armor:gold_plate'
	})
	event.shaped('geggy:unfinished_gold_leggings', [
		'BAB',
		'A A',
		'A A'
	], {
		A: 'minecraft:gold_ingot',
		B: 'expert_armor:gold_plate'
	})
	event.shaped('geggy:unfinished_gold_boots', [
		'B B',
		'A A',
		'   '
	], {
		A: 'minecraft:gold_ingot',
		B: 'expert_armor:gold_plate'
	})
	/*
	event.shaped('geggy:unfinished_diamond_helmet', [
		'BAB',
		'A A',
		'   '
	], {
		A: 'minecraft:diamond',
		B: 'expert_armor:diamond_plate'
	})
	event.shaped('geggy:unfinished_diamond_chestplate', [
		'A A',
		'BAB',
		'AAA'
	], {
		A: 'minecraft:diamond',
		B: 'expert_armor:diamond_plate'
	})
	event.shaped('geggy:unfinished_diamond_leggings', [
		'BAB',
		'A A',
		'A A'
	], {
		A: 'minecraft:diamond',
		B: 'expert_armor:diamond_plate'
	})
	event.shaped('geggy:unfinished_diamond_boots', [
		'B B',
		'A A',
		'   '
	], {
		A: 'minecraft:diamond',
		B: 'expert_armor:diamond_plate'
	})
	*/
	// 5 > 11
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 10,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:diamond_plate", amount: 11},
			{item: "geggy:selector_1", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:unfinished_diamond_helmet", amount: 1}
		]
	})
	// 8 > 14
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 16,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:diamond_plate", amount: 14},
			{item: "geggy:selector_2", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:unfinished_diamond_chestplate", amount: 1}
		]
	})
	// 7 > 13
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 14,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:diamond_plate", amount: 13},
			{item: "geggy:selector_3", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:unfinished_diamond_leggings", amount: 1}
		]
	})
	// 4 > 10
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:diamond_plate", amount: 10},
			{item: "geggy:selector_4", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "geggy:unfinished_diamond_boots", amount: 1}
		]
	})
	
	// expert_weapons:dull_diamond_axe_head 5 hoe 3 pickaxe 4 shovel 1 sword 2
	event.remove([
		"expert_weapons:crafting_table/diamond/dull_diamond_blade",
	    "expert_weapons:crafting_table/diamond/dull_diamond_shovel_head",
		"expert_weapons:crafting_table/diamond/dull_diamond_axe_head",
		"expert_weapons:crafting_table/diamond/dull_diamond_pickaxe_head",
		"expert_weapons:crafting_table/diamond/dull_diamond_hoe_head",
		"expert_weapons:crafting_table/diamond/diamond_guard",
		"minecraft:golden_sword",
	    "minecraft:golden_pickaxe",
		"minecraft:golden_axe",
		"minecraft:golden_hoe",
		"minecraft:golden_shovel",
		"expert_weapons:crafting_table/golden/dull_golden_blade",
	    "expert_weapons:crafting_table/golden/dull_golden_shovel_head",
		"expert_weapons:crafting_table/golden/dull_golden_axe_head",
		"expert_weapons:crafting_table/golden/dull_golden_pickaxe_head",
		"expert_weapons:crafting_table/golden/dull_golden_hoe_head",
		"expert_weapons:crafting_table/golden/golden_guard"
	])
	
	event.shaped('expert_weapons:diamond_guard', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'minecraft:iron_ingot',
		B: 'minecraft:diamond'
	})
	event.remove({id: 'expert_weapons:crafting_table/netherite/netherite_guard'})
	event.shaped('expert_weapons:netherite_guard', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'modern_industrialization:steel_ingot',
		B: 'minecraft:netherite_ingot'
	})
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
			{item: "expert_weapons:dull_diamond_blade", amount: 1}
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
			{item: "expert_weapons:dull_diamond_shovel_head", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 32,
		duration: 600,
		fluid_inputs: [
			{fluid: "geggy:molten_diamond", amount: 576},
		],
		item_inputs: [ 
			{item: "geggy:mold_pickaxe", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "expert_weapons:dull_diamond_pickaxe_head", amount: 1}
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
			{item: "geggy:mold_hoe", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "expert_weapons:dull_diamond_hoe_head", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 32,
		duration: 600,
		fluid_inputs: [
			{fluid: "geggy:molten_diamond", amount: 720},
		],
		item_inputs: [ 
			{item: "geggy:mold_axe", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "expert_weapons:dull_diamond_axe_head", amount: 1}
		]
	})
	
	// gold tools
	
	event.shaped(Item.of('minecraft:golden_sword').enchant('minecraft:silk_touch', 1), [
		'  A',
		' B ',
		'C  '
	], {
		A: 'expert_weapons:sharpened_golden_blade',
		B: 'expert_weapons:golden_guard',
		C: 'expert_weapons:sword_hilt'
	})
	event.shaped(Item.of('minecraft:golden_shovel').enchant('minecraft:silk_touch', 1), [
		'  A',
		' B ',
		'C  '
	], {
		A: 'expert_weapons:sharpened_golden_shovel_head',
		B: 'expert_weapons:tool_fastener',
		C: 'expert_weapons:tool_handle'
	})
	event.shaped(Item.of('minecraft:golden_pickaxe').enchant('minecraft:silk_touch', 1), [
		'  A',
		' B ',
		'C  '
	], {
		A: 'expert_weapons:sharpened_golden_pickaxe_head',
		B: 'expert_weapons:tool_fastener',
		C: 'expert_weapons:tool_handle'
	})
	event.shaped(Item.of('minecraft:golden_axe').enchant('minecraft:silk_touch', 1), [
		'  A',
		' B ',
		'C  '
	], {
		A: 'expert_weapons:sharpened_golden_axe_head',
		B: 'expert_weapons:tool_fastener',
		C: 'expert_weapons:tool_handle'
	})
	event.shaped(Item.of('minecraft:golden_hoe').enchant('minecraft:silk_touch', 1), [
		'  A',
		' B ',
		'C  '
	], {
		A: 'expert_weapons:sharpened_golden_hoe_head',
		B: 'expert_weapons:tool_fastener',
		C: 'expert_weapons:tool_handle'
	})
	
	event.shaped('expert_weapons:golden_guard', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'minecraft:iron_ingot',
		B: 'minecraft:gold_ingot'
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 32,
		duration: 600,
		fluid_inputs: [
			{fluid: "geggy:molten_gold", amount: 288},
		],
		item_inputs: [ 
			{item: "geggy:mold_sword", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "expert_weapons:dull_golden_blade", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 32,
		duration: 600,
		fluid_inputs: [
			{fluid: "geggy:molten_gold", amount: 144},
		],
		item_inputs: [ 
			{item: "geggy:mold_shovel", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "expert_weapons:dull_golden_shovel_head", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 32,
		duration: 600,
		fluid_inputs: [
			{fluid: "geggy:molten_gold", amount: 576},
		],
		item_inputs: [ 
			{item: "geggy:mold_pickaxe", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "expert_weapons:dull_golden_pickaxe_head", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 32,
		duration: 600,
		fluid_inputs: [
			{fluid: "geggy:molten_gold", amount: 432},
		],
		item_inputs: [ 
			{item: "geggy:mold_hoe", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "expert_weapons:dull_golden_hoe_head", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 32,
		duration: 600,
		fluid_inputs: [
			{fluid: "geggy:molten_gold", amount: 720},
		],
		item_inputs: [ 
			{item: "geggy:mold_axe", amount: 1, probability: 0.0}
		],
		item_outputs: [
			{item: "expert_weapons:dull_golden_axe_head", amount: 1}
		]
	})

})