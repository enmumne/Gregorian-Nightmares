

//onEvent('tags.items', event => { 
ServerEvents.tags('item', event => { 
  
  event.add('c:stripped_logs', 'geggy:j_stripped_log')
  
  event.add('forever', 'drilly:drill_group1')
  event.add('forever', 'drilly:drill_group2')
  event.add('forever', 'drilly:drill_group3')
  event.add('forever', 'drilly:drill_group4')
  event.add('forever', 'drilly:drill_group5')
  event.add('forever', 'drilly:drill_groupx')
  
  event.add('selector', 'create:precision_mechanism')
  event.add('selector', 'geggy:selector_1')
  event.add('selector', 'geggy:selector_2')
  event.add('selector', 'geggy:selector_3')
  
  event.add('c:tools/pickaxes', 'geggy:flint_pickaxe')
  event.add('c:tools/pickaxes', 'geggy:bronze_pickaxe')
  
});

ServerEvents.tags('block', event => { 

  //event.add('minecraft:mineable/pickaxe', 'modern_industrialization:pyro')
  event.remove('needs_iron_tool', 'minecraft:redstone_ore')
  event.remove('needs_iron_tool', 'minecraft:deepslate_redstone_ore')
  event.add('needs_stone_tool', 'minecraft:redstone_ore')
  event.add('needs_stone_tool', 'minecraft:deepslate_redstone_ore')
  
 
  
});  
  
//onEvent('recipes', e => {
/*
ServerEvents.recipes(e => {	
	e.forEachRecipe({ type: 'minecraft:crafting_shapeless', output: '#minecraft:planks' }, r => {
		e.remove({ type: 'minecraft:crafting_shapeless', output: r.outputItems[0].id })
		e.shapeless(`2x ${r.outputItems[0].id}`, r.inputItems[0])
	})
})	
*/

//onEvent('recipes', event => {
ServerEvents.recipes(event => {
	
	//attempt
	///////////event.remove({type: 'minecraft:crafting_shapeless', output: '#minecraft:planks'})
	event.remove({type: 'minecraft:crafting_shaped', output: 'minecraft:stick'})
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'farmersdelight:flint_knife'})
	event.shaped('farmersdelight:flint_knife', [
    '  U',
    ' U ',
    'S  '
	], {
		U: 'minecraft:flint',
		S: 'minecraft:stick'
	}) 
	
	/*
	onEvent('recipes', e => {
		e.forEachRecipe({ type: 'minecraft:crafting_shapeless', output: '#minecraft:planks' }, r => {
			e.remove({ type: 'minecraft:crafting_shapeless', output: r.outputItems[0].id })
			e.shapeless(`2x ${r.outputItems[0].id}`, r.inputItems[0])
		})
	})
	*/
	//event.forEachRecipe({ type: 'minecraft:crafting_shapeless', output: '#minecraft:planks' }, r => {
	//	event.remove({ type: 'minecraft:crafting_shapeless', output: r.outputItems[0].id })
	//	event.shapeless(`2x ${r.outputItems[0].id}`, r.inputItems[0])
	//})
	
	//let allwood = Ingredient.of('#minecraft:logs').itemIds
	


	
	event.remove({type: 'farmersdelight:cutting', output: '#minecraft:logs'})
	
	// bad wood nerf 1.19
	////////////event.shapeless('2x minecraft:oak_planks', ['#minecraft:logs'])
	
	
	//Ingredient.of('#minecraft:logs').itemIds.forEach(item => {
	//Ingredient.of('#minecraft:logs').filter(item => !item.hasTag('c:stripped_logs')).forEach(item => {
	//Ingredient.of('#minecraft:logs').itemIds.filter(item => !Item.of(item).hasTag('c:stripped_logs')).forEach(item => {
	//Ingredient.of('#minecraft:logs').itemIds.filter(item => !Item.of(item).hasTag('c:stripped_logs') && !Item.of(item).hasTag('c:stripped_wood')).forEach(item => {
	
	
	let denyListOne = Ingredient.of('#c:stripped_logs').itemIds
	let denyListTwo = Ingredient.of('#c:stripped_wood').itemIds
	
	Ingredient.of('#minecraft:logs').itemIds.filter(item => !denyListOne.contains(item) && !denyListTwo.contains(item)).forEach(item => {
		
	
	let namespace = item.namespace
	let path = 'stripped_' + item.path
	let id = namespace + ':' + path
	//console.log('path1: ' + namespace)
	//console.log('path2: ' + path)
	//console.log('path3: ' + id)
	
		
	event.custom(	
	
	{
	"type": "farmersdelight:cutting",
	"ingredients": [
		{
		"item": item
		}
	],
    "tool": {
		"type": "farmersdelight:tool",
		"tag": "c:tools/axes"
    },
    "result": [
		{
		"item": id
		},
		{
		"item": "farmersdelight:tree_bark"
		}
    ],
	"sound": "minecraft:item.axe.strip"
	}
	
)
})

//).id('farmersdelight:cutting')

Ingredient.of('#c:stripped_logs').itemIds.forEach(item => {
	//Ingredient.of('#minecraft:logs').filter(item => !item.hasTag('c:stripped_logs')).forEach(item => {
	//Ingredient.of('#minecraft:logs').itemIds.filter(item => !Item.of(item).hasTag('c:stripped_logs')).forEach(item => {
		
	//let namespace = item.namespace
	//let path = 'stripped_' + item.path
	//let id = namespace + ':' + path
	//console.log('path1: ' + namespace)
	//console.log('path2: ' + path)
	//console.log('path3: ' + id)
		
	event.custom(
  
	
	{
	"type": "farmersdelight:cutting",
	"ingredients": [
		{	
		"item": item
		}
	],
	"tool": {
		"type": "farmersdelight:tool",
		"tag": "c:tools/axes"
	},
	"result": [
		{  
		"item": "geggy:j_planks",
		"count": 2
		}
	],
	"sound": "minecraft:item.axe.strip"
	}
	
//).id('farmersdelight:cutting')	
)
})

Ingredient.of('#c:stripped_wood').itemIds.forEach(item => {
	//Ingredient.of('#minecraft:logs').filter(item => !item.hasTag('c:stripped_logs')).forEach(item => {
	//Ingredient.of('#minecraft:logs').itemIds.filter(item => !Item.of(item).hasTag('c:stripped_logs')).forEach(item => {
	
/*	
	let namespace = item.namespace
	let path = 'stripped_' + item.path
	let id = namespace + ':' + path
	console.log('path1: ' + namespace)
	console.log('path2: ' + path)
	console.log('path3: ' + id)
	*/
		
	event.custom(
  
	
	{
	"type": "farmersdelight:cutting",
	"ingredients": [
		{	
		"item": item
		}
	],
	"tool": {
		"type": "farmersdelight:tool",
		"tag": "c:tools/axes"
	},
	"result": [
		{  
		"item": "geggy:j_planks",
		"count": 2
		}
	],
	"sound": "minecraft:item.axe.strip"
	}
	
//).id('farmersdelight:cutting')	
)
})
	
/*	
event.custom(
	
	{
	"type": "farmersdelight:cutting",
	"ingredients": [
		{
		"tag": "minecraft:logs"
		}
	],
    "tool": {
		"type": "farmersdelight:tool",
		"tag": "c:tools/axes"
    },
    "result": [
		{
		"item": "geggy:j_stripped_log"
		},
    {
      "item": "farmersdelight:tree_bark"
    }
    ],
    "sound": "minecraft:item.axe.strip"
	}
).id('farmersdelight:cutting')	
*/

/*
event.custom (

	{
	"type": "farmersdelight:cutting",
	"ingredients": [
		{	
		"item": "geggy:j_stripped_log"
		}
	],
	"tool": {
		"type": "farmersdelight:tool",
		"tag": "c:tools/axes"
	},
	"result": [
		{  
		"item": "geggy:j_planks",
		"count": 2
		}
	],
	"sound": "minecraft:item.axe.strip"
	}
)
*/	
			
	event.shaped('2x minecraft:stick', [
    'S  ',
    'S  ',
    '   '
  ], {
    S: '#minecraft:planks'
  })
  
	event.remove({type: 'minecraft:crafting_shaped', output: 'farmersdelight:cutting_board'})
	
	event.remove({type: 'minecraft:crafting_shaped', output: 'minecraft:crafting_table'})
	event.remove({type: 'minecraft:crafting_shaped', output: '#byg:crafting_table'})
	event.remove({type: 'minecraft:crafting_shaped', output: '4x #c:wooden_chests'})
	event.remove({type: 'minecraft:crafting_shaped', output: '#c:wooden_chests'})
	
	event.remove({type: 'minecraft:crafting_shaped', output: '#c:wooden_chests'})
	
	event.remove({type: 'minecraft:smelting', output: 'minecraft:charcoal'})
	event.remove({type: 'minecraft:smoking', output: 'architects_palette:charcoal_block'})
	
	event.remove({type: 'minecraft:crafting_shaped', output: Item.of('minecraft:wooden_axe')})
	event.remove({type: 'minecraft:crafting_shaped', output: Item.of('minecraft:stone_axe')})
	event.remove({type: 'minecraft:crafting_shaped', output: Item.of('minecraft:wooden_pickaxe')})
	event.remove({type: 'minecraft:crafting_shaped', output: Item.of('minecraft:stone_pickaxe')})
	
	
	event.shaped('farmersdelight:cutting_board', [
    'SS ',
    'DD ',
    '   '
  ], {
	S: '#minecraft:planks',  
    D: 'minecraft:stick'
  })

  event.shaped('geggy:j_tool_rod', [
    ' S ',
    ' S ',
    '   '
  ], {
    S: 'minecraft:stick'
  })

  event.shaped('geggy:j_crafting_top', [
    'UU ',
    'SS ',
    '   '
  ], {
    U: 'minecraft:flint',
	S: 'geggy:j_planks'
  }) 
  /*
  event.shaped('geggy:j_crafting_base_flint', [
    'UU ',
    'UU ',
    '   '
  ], {
    U: 'minecraft:flint'
  }) 
  */
  event.shaped('minecraft:crafting_table', [
    'UU ',
    'SS ',
    '   '
  ], {
    U: 'geggy:j_crafting_top',
	S: '#c:stripped_logs',
	//D: Item.of('minecraft:wooden_axe').ignoreNBT()
  })
  
  event.shaped('minecraft:chest', [
    'UDU',
    'DSD',
    'UDU'
  ], {
    D: 'geggy:j_planks',
	S: 'minecraft:flint',
	U: 'minecraft:stick'
  })

  event.shaped('geggy:j_wooden_axe_head', [
    'SS ',
    'S  ',
    '   '
  ], {
    S: '#minecraft:planks'
  })
  event.shaped('geggy:j_stone_axe_head', [
    'SS ',
    'S  ',
    '   '
  ], {
    S: '#minecraft:stone_tool_materials'
  })
  event.shaped('geggy:j_wooden_pickaxe_head', [
    'SSS',
    '   ',
    '   '
  ], {
    S: '#minecraft:planks'
  })
  /*
  event.shaped('geggy:j_stone_pickaxe_head', [
    'SSS',
    '   ',
    '   '
  ], {
    S: '#minecraft:stone_tool_materials'
  })
  */

  // both expert & not
  event.shapeless('minecraft:iron_helmet', [ 'minecraft:leather_helmet', 'geggy:unfinished_iron_helmet'])
  event.shapeless('minecraft:iron_chestplate', [ 'minecraft:leather_chestplate', 'geggy:unfinished_iron_chestplate'])
  event.shapeless('minecraft:iron_leggings', [ 'minecraft:leather_leggings', 'geggy:unfinished_iron_leggings'])
  event.shapeless('minecraft:iron_boots', [ 'minecraft:leather_boots', 'geggy:unfinished_iron_boots'])
  event.shapeless('minecraft:golden_helmet', [ 'minecraft:leather_helmet', 'geggy:unfinished_gold_helmet'])
  event.shapeless('minecraft:golden_chestplate', [ 'minecraft:leather_chestplate', 'geggy:unfinished_gold_chestplate'])
  event.shapeless('minecraft:golden_leggings', [ 'minecraft:leather_leggings', 'geggy:unfinished_gold_leggings'])
  event.shapeless('minecraft:golden_boots', [ 'minecraft:leather_boots', 'geggy:unfinished_gold_boots'])
  event.shapeless('minecraft:diamond_helmet', [ 'minecraft:leather_helmet', 'geggy:unfinished_diamond_helmet'])
  event.shapeless('minecraft:diamond_chestplate', [ 'minecraft:leather_chestplate', 'geggy:unfinished_diamond_chestplate'])
  event.shapeless('minecraft:diamond_leggings', [ 'minecraft:leather_leggings', 'geggy:unfinished_diamond_leggings'])
  event.shapeless('minecraft:diamond_boots', [ 'minecraft:leather_boots', 'geggy:unfinished_diamond_boots'])
  
  event.shaped('geggy:flint_pickaxe', [
    'SS ',
    'AS ',
    '   '
  ], {
    S: 'minecraft:flint',
	A: 'geggy:j_tool_rod'
  })
  event.shaped('geggy:unfired_pickaxe_mold', [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:clay_ball',
	B: 'geggy:flint_pickaxe'
  }).damageIngredient('geggy:flint_pickaxe')
  event.shaped('geggy:bronze_pickaxe', [
    ' S ',
    ' A ',
    ' B '
  ], {
    S: 'geggy:bronze_pickaxe_head',
	A: 'geggy:j_tool_rod',
	B: 'modern_industrialization:rubber_sheet'
  })
  
  
  

	//event.shapeless('minecraft:wooden_pickaxe', ['geggy:j_wooden_pickaxe_head', 'geggy:j_tool_rod'])
	//event.shapeless('minecraft:stone_pickaxe', ['geggy:j_stone_pickaxe_head', 'geggy:j_tool_rod'])
	event.shapeless('minecraft:wooden_axe', ['geggy:j_wooden_axe_head', 'geggy:j_tool_rod'])
	event.shapeless('minecraft:stone_axe', ['geggy:j_stone_axe_head', 'geggy:j_tool_rod'])

event.custom({
  "type" : "modern_industrialization:coke_oven",
  "eu" : 2,
  "duration" : 200,
  "item_inputs" : {
    "tag" : "minecraft:logs",
    "amount" : 1
  },
  "fluid_outputs" : {
      "fluid" : "modern_industrialization:creosote",
      "amount" : 500,
      "probability" : 0.5
  },
  "item_outputs" : {
    "item" : "minecraft:charcoal",
    "amount" : 1
  }
})	

// LEATHER // leaves > dye > tannin > drain> wash > dry > leather > strips > labels

	event.remove({id: 'farmersdelight:cooking_pot'})
	event.shaped('farmersdelight:cooking_pot', [
		'BBB',
		'ASA',
		'AAA'
	], {
		A: 'geggy:tempered_brick',
		B: 'geggy:primitive_brick',
		S: 'kibe:water_wooden_bucket'
	}).replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
	
	event.shaped('farmersdelight:cooking_pot', [
		'BBB',
		'ASA',
		'AAA'
	], {
		A: 'geggy:tempered_brick',
		B: 'geggy:primitive_brick',
		S: 'minecraft:water_bucket'
	}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')

	event.custom({
  "type": "farmersdelight:cooking",
  "container": {"item": "geggy:copper_can"},
  "cookingtime": 900,
  "experience": 0.1,
  "ingredients": [
    {"item": "minecraft:green_dye"},
    {"item": "minecraft:green_dye"},
    {"item": "minecraft:green_dye"},
    {"item": "minecraft:green_dye"}
  ],
  "recipe_book_tab": "meals",
  "result": {"item": "geggy:mulch_copper_can"}
	})
	event.custom({
  "type": "create:emptying",
  "ingredients": [
    {
      "item": "geggy:mulch_copper_can"
    }
  ],
  "results": [
    {
      "item": "geggy:copper_can"
    },
    {
      "amount": 40500,
      "fluid": "geggy:tannin"
    }
  ]
	})

	event.shaped('geggy:copper_can', [
		'A A',
		' A ',
		'   '
	], {
		A: 'minecraft:copper_ingot'
	})

	event.remove({id: 'labels:label'})
	event.shaped('4x labels:label', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: 'geggy:mulch_copper_can',
		B: 'minecraft:paper'
	}).replaceIngredient('geggy:mulch_copper_can', 'geggy:copper_can')

	event.custom({
		"type": "create:mixing",
		"ingredients": [{"item": "minecraft:leather"},{"fluid": "geggy:tannin", "amount": 20250}],
		"results": [{"item": "geggy:soaked_cured_leather"}]
	})

	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "geggy:soaked_cured_leather"}
		],
		"results": [
			{"item": "geggy:damp_cured_leather"}
		]	
	})
	event.custom({
		"type": "minecraft:smoking",
		"cookingtime": 500,
		"experience": 0.0,
		"ingredient": 
			{"item": "geggy:damp_cured_leather"},
		"result": 
		{"item": "geggy:cured_leather"}
	})
	event.shapeless('geggy:cured_leather_sheet', ['geggy:cured_leather', 'farmersdelight:flint_knife']).damageIngredient('farmersdelight:flint_knife')
	event.custom({
		type: "create:cutting",
		ingredients: [
			{"item": "geggy:cured_leather"}
		],
		processingTime: 80,
		results: [{
			"item": "geggy:cured_leather_sheet"
		}]
	})
	event.shapeless('2x geggy:cured_leather_strap', ['geggy:cured_leather_sheet', 'farmersdelight:flint_knife']).damageIngredient('farmersdelight:flint_knife')
	event.custom({
		type: "create:cutting",
		ingredients: [
			{"item": "geggy:cured_leather_sheet"}
		],
		processingTime: 80,
		results: [{
			"count": 2, "item": "geggy:cured_leather_strap"
		}]
	})
	event.shapeless('2x geggy:cured_leather_cord', ['geggy:cured_leather_strap', 'farmersdelight:flint_knife']).damageIngredient('farmersdelight:flint_knife')
	event.custom({
		type: "create:cutting",
		ingredients: [
			{"item": "geggy:cured_leather_strap"}
		],
		processingTime: 80,
		results: [{
			"count": 2, "item": "geggy:cured_leather_cord"
		}]
	})
	event.remove({id: 'minecraft:leather_helmet'})
	event.remove({id: 'minecraft:leather_chestplate'})
	event.remove({id: 'minecraft:leather_leggings'})
	event.remove({id: 'minecraft:leather_boots'})
	event.shaped('minecraft:leather_helmet', [
		'AAA',
		'B B',
		'   '
	], {
		A: 'geggy:cured_leather_sheet',
		B: 'geggy:cured_leather_strap'
	})
	event.shaped('minecraft:leather_chestplate', [
		'B B',
		'AAA',
		'AAA'
	], {
		A: 'geggy:cured_leather_sheet',
		B: 'geggy:cured_leather_strap'
	})
	event.shaped('minecraft:leather_leggings', [
		'ACA',
		'A A',
		'B B'
	], {
		A: 'geggy:cured_leather_sheet',
		B: 'geggy:cured_leather_strap',
		C: 'geggy:cured_leather_cord'
	})
	event.shaped('minecraft:leather_boots', [
		'C C',
		'A A',
		'   '
	], {
		A: 'geggy:cured_leather_sheet',
		C: 'geggy:cured_leather_cord'
	})
	
	// diamond nerf
	event.remove({id: 'modern_industrialization:materials/diamond/compressor/main'})
	event.remove({id: 'magick:diamond_dust_4'})
	event.remove({id: 'magick:diamond_dust_4_exported_mi_cutting_machine'})
	event.recipes.modern_industrialization.cutting_machine({
		eu: 38,
		duration: 800,
		item_inputs: [ 
			{item: "minecraft:diamond", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:lubricant", amount: 1}
		],
		item_outputs: [	
			{item: "modern_industrialization:diamond_plate", amount: 1}
		]
	})
	event.recipes.modern_industrialization.blast_furnace({
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 2},
			{item: "minecraft:iron_sword", probability: 0.0}
		],
		item_outputs :
		[
			{item: "geggy:mold_sword", amount: 1}
		]
	})
	event.recipes.modern_industrialization.blast_furnace({
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 2},
			{item: "minecraft:iron_pickaxe", probability: 0.0}
		],
		item_outputs :
		[
			{item: "geggy:mold_pickaxe", amount: 1}
		]
	})
	event.recipes.modern_industrialization.blast_furnace({
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 2},
			{item: "minecraft:iron_axe", probability: 0.0}
		],
		item_outputs :
		[
			{item: "geggy:mold_axe", amount: 1}
		]
	})
	event.recipes.modern_industrialization.blast_furnace({
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 2},
			{item: "minecraft:iron_shovel", probability: 0.0}
		],
		item_outputs :
		[
			{item: "geggy:mold_shovel", amount: 1}
		]
	})
	event.recipes.modern_industrialization.blast_furnace({
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 2},
			{item: "minecraft:iron_hoe", probability: 0.0}
		],
		item_outputs :
		[
			{item: "geggy:mold_hoe", amount: 1}
		]
	})
	event.recipes.modern_industrialization.fextract({
		eu: 38,
		duration: 500,
		item_inputs: [ 
			{item: "minecraft:diamond", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:molten_diamond", amount: 144}
		]
	})
	
	event.remove({id: 'minecraft:shield'})
	event.shaped('minecraft:shield', [
		'AAA',
		'ABA',
		' A '
	], {
		A: 'geggy:treated_plank',
		B: 'createdeco:netherite_sheet'
	})

})

// AQM2 thankyouverymuch
EntityEvents.checkSpawn(e => {
    let nbt = e.entity.fullNBT
    if (e.type == 'SPAWNER' && nbt.cardinal_components && nbt.cardinal_components['eldritch_mobs:eldritch_modifiers']?.numMaxAbilities > 0) {
      e.cancel()
    }
})


	

/* testing shit

// server/recipes_and_fixes

onEvent('recipes', event => {

  // Glow Berries to Baked Glow Berries
  event.smelting(Item.of('gn:baked_glow_berries', 1), 'minecraft:glow_berries').xp(0.10).id('gn:baked_glow_berries_smelt')
  event.smoking(Item.of('gn:baked_glow_berries', 1), 'minecraft:glow_berries').xp(0.10).id('gn:baked_glow_berries_smoked')
  event.campfireCooking('gn:baked_glow_berries', 'minecraft:glow_berries').id('gn:baked_glow_berries_campfire')
  
});
  
// server/tags_normal.js  
  
onEvent('tags.items', event => {  
  
  event.add('c:foods', 'gn:baked_glow_berries')
  event.add('c:glow_berries', 'gn:baked_glow_berries')
  event.add('minecraft:fox_food', 'gn:baked_glow_berries')
  //event.add('gn:berries', 'gn:baked_glow_berries')
  
});

*/

