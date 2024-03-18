

//onEvent('tags.items', event => { 
ServerEvents.tags('item', event => { 
  
  event.add('c:stripped_logs', 'geggy:j_stripped_log')
  
  event.add('c:stripped_logs', 'ad_astra:stripped_glacian_log')
  
  event.add('forever', 'drilly:drill_group1')
  event.add('forever', 'drilly:drill_group2')
  event.add('forever', 'drilly:drill_group3')
  event.add('forever', 'drilly:drill_group4')
  event.add('forever', 'drilly:drill_group5')
  event.add('forever', 'drilly:drill_groupx')
  event.add('forever', 'geggy:rose_quartz_blend')
  event.add('forever', 'create:rose_quartz')
  event.add('forever', 'minecraft:amethyst_shard')
  
  event.add('selector', 'create:precision_mechanism')
  event.add('selector', 'geggy:selector_1')
  event.add('selector', 'geggy:selector_2')
  event.add('selector', 'geggy:selector_3')
  
  event.add('c:tools/pickaxes', 'geggy:flint_pickaxe')
  event.add('c:tools/pickaxes', 'geggy:reinforced_flint_pickaxe')
  event.add('c:tools/pickaxes', 'geggy:bronze_pickaxe')
  event.add('c:tools', 'geggy:flint_pickaxe')
  event.add('c:tools', 'geggy:reinforced_flint_pickaxe')
  event.add('c:tools', 'geggy:bronze_pickaxe')
  event.add('c:pickaxes', 'geggy:flint_pickaxe')
  event.add('c:pickaxes', 'geggy:reinforced_flint_pickaxe')
  event.add('c:pickaxes', 'geggy:bronze_pickaxe')
  
  event.add('c:tools', 'geggy:flint_sword')
  event.add('c:tools', 'geggy:reinforced_flint_sword')
  event.add('c:tools', 'geggy:bronze_sword')
  event.add('c:swords', 'geggy:flint_sword')
  event.add('c:swords', 'geggy:reinforced_flint_sword')
  event.add('c:swords', 'geggy:bronze_sword')
  
  event.add('c:tools', 'geggy:flint_shovel')
  event.add('c:tools', 'geggy:reinforced_flint_shovel')
  event.add('c:tools', 'geggy:bronze_shovel')
  event.add('c:shovels', 'geggy:flint_shovel')
  event.add('c:shovels', 'geggy:reinforced_flint_shovel')
  event.add('c:shovels', 'geggy:bronze_shovel')
  event.add('c:tools/shovels', 'geggy:flint_shovel')
  event.add('c:tools/shovels', 'geggy:reinforced_flint_shovel')
  event.add('c:tools/shovels', 'geggy:bronze_shovel')
  
  event.add('c:tools/axes', 'geggy:flint_axe')
  event.add('c:tools/axes', 'geggy:reinforced_flint_axe')
  event.add('c:tools/axes', 'geggy:bronze_axe')
  event.add('c:tools', 'geggy:flint_axe')
  event.add('c:tools', 'geggy:reinforced_flint_axe')
  event.add('c:tools', 'geggy:bronze_axe')
  event.add('c:axes', 'geggy:flint_axe')
  event.add('c:axes', 'geggy:reinforced_flint_axe')
  event.add('c:axes', 'geggy:bronze_axe')
  
  event.add('c:tools', 'geggy:flint_hoe')
  event.add('c:tools', 'geggy:reinforced_flint_hoe')
  event.add('c:tools', 'geggy:bronze_hoe')
  event.add('c:hoes', 'geggy:flint_hoe')
  event.add('c:hoes', 'geggy:reinforced_flint_hoe')
  event.add('c:hoes', 'geggy:bronze_hoe')
  
  event.add('boiler_fuel', 'modern_industrialization:coal_tiny_dust')
  event.add('boiler_fuel', 'modern_industrialization:lignite_coal_tiny_dust')
  
  event.add('geggy:lv_cable', 'powah:energy_cable_starter')
  event.add('geggy:lv_cable', 'powah:energy_cable_basic')
  
  event.add('cork', 'geggy:oak_bark')
  event.add('cork', 'geggy:dark_oak_bark')
  event.add('cork', 'immersive_weathering:oak_bark')
  event.add('cork', 'immersive_weathering:dark_oak_bark')
  
  event.add('c:hidden_from_recipe_viewers', 'minecraft:wooden_pickaxe')
  event.add('c:hidden_from_recipe_viewers', 'minecraft:stone_pickaxe')
  event.add('c:hidden_from_recipe_viewers', 'create:copper_sheet')
  event.add('c:hidden_from_recipe_viewers', 'create:iron_sheet')
  event.add('c:hidden_from_recipe_viewers', 'create:golden_sheet')
  event.add('c:hidden_from_recipe_viewers', 'kibe:trash_can')
  event.add('c:hidden_from_recipe_viewers', 'kibe:pocket_trash_can')
  event.add('c:hidden_from_recipe_viewers', 'kibe:pocket_crafting_table')
  event.add('c:hidden_from_recipe_viewers', 'kibe:entangled_bag')
  event.add('c:hidden_from_recipe_viewers', 'kibe:entangled_tank')
  event.add('c:hidden_from_recipe_viewers', 'kibe:entangled_bucket')
  event.add('c:hidden_from_recipe_viewers', 'kibe:void_bucket')
  event.add('c:hidden_from_recipe_viewers', 'kibe:big_torch')
  event.add('c:hidden_from_recipe_viewers', 'modern_industrialization:copper_nugget')
  event.add('c:hidden_from_recipe_viewers', 'ad_astra:steel_plate')
  event.add('c:hidden_from_recipe_viewers', 'ad_astra:steel_ingot')
  event.add('c:hidden_from_recipe_viewers', 'ad_astra:iron_plate')
  event.add('c:hidden_from_recipe_viewers', 'ad_astra:iron_rod')
  event.add('c:hidden_from_recipe_viewers', 'ad_astra:steel_nugget')
  event.add('c:hidden_from_recipe_viewers', 'extended_drawers:connector')
  event.add('c:hidden_from_recipe_viewers', 'extended_drawers:access_point')
  
  event.remove('c:steel_ingots', 'ad_astra:steel_ingot')
  event.remove('c:ingots', 'ad_astra:steel_ingot')
  event.remove('c:steel_plates', 'ad_astra:steel_plate')
  event.remove('c:plates', 'ad_astra:steel_plate')
  event.remove('c:iron_plates', 'ad_astra:iron_plate')
  event.remove('c:plates', 'ad_astra:iron_plate')
  event.remove('c:iron_rods', 'ad_astra:iron_rod')
  event.remove('c:steel_nuggets', 'ad_astra:steel_nugget')
  event.remove('c:nuggets', 'ad_astra:steel_nugget')
  
  event.add('c:iron_rods', 'modern_industrialization:iron_rod')
  
});

ServerEvents.tags('block', event => { 

  //event.add('minecraft:mineable/pickaxe', 'modern_industrialization:pyro')
  event.remove('needs_iron_tool', 'minecraft:redstone_ore')
  event.remove('needs_iron_tool', 'minecraft:deepslate_redstone_ore')
  event.add('needs_stone_tool', 'minecraft:redstone_ore')
  event.add('needs_stone_tool', 'minecraft:deepslate_redstone_ore')
  
  event.remove('needs_iron_tool', 'create:zinc_ore')
  event.remove('needs_iron_tool', 'create:deepslate_zinc_ore')
  event.add('needs_stone_tool', 'create:zinc_ore')
  event.add('needs_stone_tool', 'create:deepslate_zinc_ore')
  
  event.add('needs_stone_tool', 'minecraft:deepslate_coal_ore')
  event.add('needs_stone_tool', 'geggy:deepslate_precious_ore')
  
  event.remove('needs_stone_tool', 'minecraft:iron_ore')
  event.remove('needs_stone_tool', 'minecraft:copper_ore')
  event.remove('needs_stone_tool', 'minecraft:redstone_ore')
  event.remove('needs_stone_tool', 'create:zinc_ore')
  event.remove('needs_stone_tool', 'modern_industrialization:lead_ore')
  event.remove('needs_stone_tool', 'modern_industrialization:lignite_coal_ore')
  event.remove('needs_stone_tool', 'modern_industrialization:tin_ore')
  event.remove('needs_stone_tool', 'modern_industrialization:salt_ore')
  
  event.remove('needs_stone_tool', 'modern_industrialization:tungsten_ore')
  event.add('needs_diamond_tool', 'modern_industrialization:tungsten_ore')
  event.remove('needs_stone_tool', 'modern_industrialization:deepslate_tungsten_ore')
  event.add('needs_diamond_tool', 'modern_industrialization:deepslate_tungsten_ore')
  event.remove('needs_stone_tool', 'modern_industrialization:uranium_ore')
  event.add('needs_iron_tool', 'modern_industrialization:uranium_ore')
  event.remove('needs_stone_tool', 'modern_industrialization:deepslate_uranium_ore')
  event.add('needs_iron_tool', 'modern_industrialization:deepslate_uranium_ore')
  
  event.add('needs_stone_tool', 'minecraft:deepslate')
  event.add('needs_stone_tool', 'minecraft:cobbled_deepslate')
  event.add('needs_stone_tool', 'minecraft:polished_deepslate')
  event.add('needs_stone_tool', 'minecraft:infested_deepslate')
  event.add('needs_stone_tool', 'minecraft:deepslate_bricks')
  event.add('needs_stone_tool', 'minecraft:deepslate_tiles')
  event.add('needs_stone_tool', 'minecraft:layered_deepslate')
  event.add('needs_stone_tool', 'minecraft:tuff')
  event.add('needs_stone_tool', 'minecraft:cut_tuff')
  event.add('needs_stone_tool', 'minecraft:polished_cut_tuff')
  event.add('needs_stone_tool', 'minecraft:cut_tuff_bricks')
  event.add('needs_stone_tool', 'minecraft:small_tuff_bricks')
  event.add('needs_stone_tool', 'minecraft:layered_tuff')
  event.add('needs_stone_tool', 'minecraft:tuff_pillar')
  event.add('needs_stone_tool', 'minecraft:gilded_blackstone')
  event.add('needs_stone_tool', 'minecraft:polished_blackstone_bricks')
  event.add('needs_stone_tool', 'minecraft:blackstone_tile')
  
  event.remove('brazier:brazier_base_blocks', 'minecraft:gilded_blackstone')
  event.remove('brazier:brazier_stripe_blocks', 'minecraft:gilded_blackstone')
  event.remove('brazier:brazier_base_blocks', 'minecraft:crying_obsidian')
  event.remove('brazier:brazier_stripe_blocks', 'minecraft:crying_obsidian')
  event.remove('brazier:brazier_base_blocks', 'minecraft:ancient_debris')
  event.remove('brazier:brazier_stripe_blocks', 'minecraft:ancient_debris')
  event.remove('brazier:brazier_base_blocks', 'minecraft:netherite_block')
  event.remove('brazier:brazier_stripe_blocks', 'minecraft:netherite_block')
  
  event.add('brazier:brazier_base_blocks', 'geggy:gloom_block')
  event.add('brazier:brazier_stripe_blocks', 'geggy:gloom_block')
  event.add('needs_stone_tool', 'geggy:gloom_block')

  
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
	event.remove({id: "modern_industrialization:vanilla_recipes/easy_chest"})
	event.remove({id: "minecraft:chest"})

	
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
  /*
  event.shaped('geggy:j_wooden_pickaxe_head', [
    'SS ',
    ' S ',
    '   '
  ], {
    S: '#minecraft:planks'
  })  
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
    'SB ',
    'AS ',
    '   '
  ], {
    S: 'minecraft:flint',
	A: 'geggy:j_tool_rod',
	B: '#c:cobblestone'
  }).noMirror()
  event.shaped('geggy:flint_pickaxe', [
    'SS ',
    'AS ',
    '   '
  ], {
    S: 'minecraft:flint',
	A: 'geggy:j_tool_rod'
  }).noMirror()
  event.shaped('geggy:flint_sword', [
    '  S',
    ' S ',
    'A  '
  ], {
    S: 'minecraft:flint',
	A: 'geggy:j_tool_rod'
  })
  event.shaped('geggy:flint_hoe', [
    'SS ',
    ' A ',
    '   '
  ], {
    S: 'minecraft:flint',
	A: 'geggy:j_tool_rod'
  })
  event.shaped('geggy:flint_shovel', [
    'S  ',
    'A  ',
    '   '
  ], {
    S: 'minecraft:flint',
	A: 'geggy:j_tool_rod'
  })
  event.shaped('geggy:flint_axe', [
    'SS ',
    'SA ',
    '   '
  ], {
    S: 'minecraft:flint',
	A: 'geggy:j_tool_rod'
  }).noMirror()
  event.shaped('geggy:flint_axe', [
    'SB ',
    'SA ',
    '   '
  ], {
    S: 'minecraft:flint',
	A: 'geggy:j_tool_rod',
	B: '#c:cobblestone'
  }).noMirror()
  
  event.shaped('geggy:reinforced_flint_pickaxe', [
    'ZS ',
    'AX ',
    '   '
  ], {
    S: 'geggy:sharpened_flint_pickaxe_head',
	A: 'geggy:reinforced_tool_rod',
	X: 'geggy:low_grade_resin',
	Z: 'minecraft:string'
  }).noMirror()
  event.shaped('geggy:reinforced_flint_sword', [
    ' XS',
    ' SZ',
    'A  '
  ], {
    S: 'minecraft:flint',
	A: 'geggy:reinforced_tool_rod',
	X: 'geggy:low_grade_resin',
	Z: 'minecraft:string'
  })
  event.shaped('geggy:reinforced_flint_axe', [
    'SSZ',
    'SAX',
    '   '
  ], {
    S: 'minecraft:flint',
	A: 'geggy:reinforced_tool_rod',
	X: 'geggy:low_grade_resin',
	Z: 'minecraft:string'
  }).noMirror()
  event.shaped('geggy:reinforced_flint_hoe', [
    'SSZ',
    'XA ',
    '   '
  ], {
    S: 'minecraft:flint',
	A: 'geggy:reinforced_tool_rod',
	X: 'geggy:low_grade_resin',
	Z: 'minecraft:string'
  })
  event.shaped('geggy:reinforced_flint_shovel', [
    'XS ',
    'ZA ',
    '   '
  ], {
    S: 'minecraft:flint',
	A: 'geggy:reinforced_tool_rod',
	X: 'geggy:low_grade_resin',
	Z: 'minecraft:string'
  })
  
  // bronze tools 
  
  event.shaped('geggy:unfired_pickaxe_mold', [
    ' A ',
    'ABA',
    'CA '
  ], {
    A: 'geggy:clay_dust',
	C: 'kibe:water_wooden_bucket',
	B: 'geggy:flint_pickaxe'
  }).damageIngredient('geggy:flint_pickaxe').replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
  event.shaped('geggy:unfired_pickaxe_mold', [
    ' A ',
    'ABA',
    'CA '
  ], {
    A: 'geggy:clay_dust',
	C: 'minecraft:water_bucket',
	B: 'geggy:flint_pickaxe'
  }).damageIngredient('geggy:flint_pickaxe').replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
  event.shaped('geggy:bronze_pickaxe', [
    '  S',
    ' A ',
    'B  '
  ], {
    S: 'geggy:bronze_pickaxe_head',
	A: 'geggy:reinforced_tool_rod',
	B: 'modern_industrialization:rubber_sheet'
  })
  
  event.shaped('geggy:unfired_axe_mold', [
    ' A ',
    'ABA',
    'CA '
  ], {
    A: 'geggy:clay_dust',
	C: 'kibe:water_wooden_bucket',
	B: 'geggy:flint_axe'
  }).damageIngredient('geggy:flint_axe').replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
  event.shaped('geggy:unfired_axe_mold', [
    ' A ',
    'ABA',
    'CA '
  ], {
    A: 'geggy:clay_dust',
	C: 'minecraft:water_bucket',
	B: 'geggy:flint_axe'
  }).damageIngredient('geggy:flint_axe').replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
  event.shaped('geggy:bronze_axe', [
    '  S',
    ' A ',
    'B  '
  ], {
    S: 'geggy:bronze_axe_head',
	A: 'geggy:reinforced_tool_rod',
	B: 'modern_industrialization:rubber_sheet'
  })
  
  event.shaped('geggy:unfired_sword_mold', [
    ' A ',
    'ABA',
    'CA '
  ], {
    A: 'geggy:clay_dust',
	C: 'kibe:water_wooden_bucket',
	B: 'geggy:flint_sword'
  }).damageIngredient('geggy:flint_sword').replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
  event.shaped('geggy:unfired_sword_mold', [
    ' A ',
    'ABA',
    'CA '
  ], {
    A: 'geggy:clay_dust',
	C: 'minecraft:water_bucket',
	B: 'geggy:flint_sword'
  }).damageIngredient('geggy:flint_sword').replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
  event.shaped('geggy:bronze_sword', [
    '  S',
    ' A ',
    'B  '
  ], {
    S: 'geggy:bronze_sword_head',
	A: 'geggy:reinforced_tool_rod',
	B: 'modern_industrialization:rubber_sheet'
  })
  
  event.shaped('geggy:unfired_hoe_mold', [
    ' A ',
    'ABA',
    'CA '
  ], {
    A: 'geggy:clay_dust',
	C: 'kibe:water_wooden_bucket',
	B: 'geggy:flint_hoe'
  }).damageIngredient('geggy:flint_hoe').replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
  event.shaped('geggy:unfired_hoe_mold', [
    ' A ',
    'ABA',
    'CA '
  ], {
    A: 'geggy:clay_dust',
	C: 'minecraft:water_bucket',
	B: 'geggy:flint_hoe'
  }).damageIngredient('geggy:flint_hoe').replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
  event.shaped('geggy:bronze_hoe', [
    '  S',
    ' A ',
    'B  '
  ], {
    S: 'geggy:bronze_hoe_head',
	A: 'geggy:reinforced_tool_rod',
	B: 'modern_industrialization:rubber_sheet'
  })
  
  event.shaped('geggy:unfired_shovel_mold', [
    ' A ',
    'ABA',
    'CA '
  ], {
    A: 'geggy:clay_dust',
	C: 'kibe:water_wooden_bucket',
	B: 'geggy:flint_shovel'
  }).damageIngredient('geggy:flint_shovel').replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
  event.shaped('geggy:unfired_shovel_mold', [
    ' A ',
    'ABA',
    'CA '
  ], {
    A: 'geggy:clay_dust',
	C: 'minecraft:water_bucket',
	B: 'geggy:flint_shovel'
  }).damageIngredient('geggy:flint_shovel').replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
  event.shaped('geggy:bronze_shovel', [
    '  S',
    ' A ',
    'B  '
  ], {
    S: 'geggy:bronze_shovel_head',
	A: 'geggy:reinforced_tool_rod',
	B: 'modern_industrialization:rubber_sheet'
  })
  
  

	//event.shapeless('minecraft:wooden_pickaxe', ['geggy:j_wooden_pickaxe_head', 'geggy:j_tool_rod'])
	//event.shapeless('minecraft:stone_pickaxe', ['geggy:j_stone_pickaxe_head', 'geggy:j_tool_rod'])
	event.shapeless('minecraft:wooden_axe', ['geggy:j_wooden_axe_head', 'geggy:j_tool_rod'])
	event.shapeless('minecraft:stone_axe', ['geggy:j_stone_axe_head', 'geggy:j_tool_rod'])	

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
		"experience": 0.0,
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
			{"item": "geggy:mulch_copper_can"}
		],
		"results": [
			{"item": "geggy:copper_can"},
			{"amount": 40500, "fluid": "geggy:tannin"}
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
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "geggy:cured_leather"}
		],
		"tool": 
			{"type": "farmersdelight:tool",
			"tag": "c:tools/knives"},
		"result": [
			{ "item": "geggy:cured_leather_sheet", "count": 1}
		],
		"sound": "minecraft:item.axe.strip"
	})
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
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "geggy:cured_leather_sheet"}
		],
		"tool": 
			{"type": "farmersdelight:tool",
			"tag": "c:tools/knives"},
		"result": [
			{ "item": "geggy:cured_leather_strap", "count": 2}
		],
		"sound": "minecraft:item.axe.strip"
	})
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
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "geggy:cured_leather_strap"}
		],
		"tool": 
			{"type": "farmersdelight:tool",
			"tag": "c:tools/knives"},
		"result": [
			{ "item": "geggy:cured_leather_cord", "count": 2}
		],
		"sound": "minecraft:item.axe.strip"
	})
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
	event.remove([
		"minecraft:leather_helmet",
	    "minecraft:leather_chestplate",
		"minecraft:leather_leggings",
		"minecraft:leather_boots",
		"create:crafting/materials/rose_quartz"
	])
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
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
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
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "modern_industrialization:uncooked_steel_dust", amount: 2},
			{tag: "c:tools/pickaxes", probability: 0.0}
		],
		item_outputs :
		[
			{item: "geggy:mold_pickaxe", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
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
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
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
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
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

	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 38,
		duration: 400,
		item_inputs: [ 
			{item: "modern_industrialization:diamond_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:molten_diamond", amount: 144}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 30,
		duration: 100,
		item_inputs: [ 
			{item: "modern_industrialization:gold_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geggy:molten_gold", amount: 144}
		]
	})
	//shards
	/*
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 42,
		duration: 600,
		item_inputs: [ 
			{item: "geggy:diamond_shards", amount: 5}
		],
		fluid_outputs: [
			{fluid: "geggy:molten_diamond", amount: 144}
		]
	})
	*/
	event.custom({ 
		type: "modern_industrialization:electric_alloy_smelter",
		eu: 38,
		duration: 400,
		item_inputs: [ 
			{item: "geggy:mold_plate", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "geggy:molten_diamond", amount: 144}
		],
		item_outputs: [
			{item: "modern_industrialization:diamond_plate", amount: 1}
		]
	})
	
	event.remove({id: "modern_industrialization:materials/diamond/macerator/ore_to_crushed"})
event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 800,
		item_inputs : [
			{tag: "c:diamond_ores", amount: 1}
		],
		item_outputs :
		[
			{item: "modern_industrialization:diamond_crushed_dust", amount: 1},
			{item: "modern_industrialization:diamond_crushed_dust", amount: 1, probability: 0.5}
		]
	})
event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "geggy:diamond_shards", amount: 1}
		],
		item_outputs :
		[
			{item: "modern_industrialization:diamond_tiny_dust", amount: 2}
		]
	})
	
	event.remove({id: 'minecraft:shield'})
	event.shaped('minecraft:shield', [
		'AAA',
		'ABA',
		' A '
	], {
		A: 'geggy:hardened_plank',
		B: 'createdeco:netherite_sheet'
	})
	
	event.remove({id: 'inmis:frayed_backpack'})
	event.shaped('inmis:frayed_backpack', [
		'C C',
		'BAB',
		'BBB'
	], {
		A: 'minecraft:chest',
		B: 'geggy:cured_leather_sheet',
		C: 'geggy:cured_leather_strap'
	})
	
	event.custom({
  "type": "farmersdelight:cooking",
  //"container": {"item": "geggy:copper_can"},
  "cookingtime": 1100,
  "experience": 0.0,
  "ingredients": [
    {"item": "minecraft:seagrass"},
    {"item": "minecraft:seagrass"},
    {"item": "minecraft:seagrass"},
	{"item": "minecraft:seagrass"},
	{"item": "minecraft:seagrass"},
    {"item": "minecraft:seagrass"}
  ],
  "recipe_book_tab": "meals",
  "result": {"item": "minecraft:dried_kelp"}
	})
	
	event.custom({
	"type": "farmersdelight:cutting",
	"ingredients": [
		{	
		"item": "minecraft:polished_blackstone"
		}
	],
	"tool": {
		"type": "farmersdelight:tool",
		"tag": "c:tools/pickaxes"
	},
	"result": [
		{  
		"item": "minecraft:blackstone",
		"count": 1
		}
	],
	"sound": "minecraft:entity.item.break"
	})
	
	// credit to mikerooni CEu netherite
	event.remove([
		"minecraft:netherite_scrap",
	    "minecraft:netherite_scrap_from_blasting",
		"minecraft:netherite_ingot",
		"modern_industrialization:vanilla_recipes/mixer/netherite",
		"modern_industrialization:vanilla_recipes/macerator/netherite_scrap",
		"ae2:tools/certus_quartz_axe",
		"ae2:tools/certus_quartz_pickaxe",
		"ae2:tools/certus_quartz_sword",
		"ae2:tools/certus_quartz_hoe",
		"ae2:tools/certus_quartz_spade",
		"ae2:tools/nether_quartz_axe",
		"ae2:tools/nether_quartz_pickaxe",
		"ae2:tools/nether_quartz_sword",
		"ae2:tools/nether_quartz_hoe",
		"ae2:tools/nether_quartz_spade"
	])
	
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 32,
		duration: 400,
		item_inputs : [
			{item: "minecraft:ancient_debris", amount: 1}
		],
		item_outputs : [
			{item: "minecraft:netherite_scrap", amount: 1},
			{item: "minecraft:netherite_scrap", amount: 1, probability: 0.35}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 256,
		duration: 300,
		item_inputs : [
			{item: "minecraft:netherite_scrap", amount: 2}
		],
		fluid_inputs : [
			{fluid: "geghilarity:aqua_regia", amount: 3000}
		],
		fluid_outputs : [
			{fluid: "geggy:ancient_debris_slurry", amount: 3000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 500,
		duration: 400,
		fluid_inputs : [
			{fluid: "geggy:ancient_debris_slurry", amount: 3000}
		],
		item_outputs : [
			{item: "geggy:netherium_dust", amount: 2},
			{item: "geghilarity:tungstate_dust", amount: 1},
			{item: "geghilarity:platinum_metallic_powder_dust", amount: 1},
			{item: "geghilarity:platinum_metallic_powder_dust", amount: 1, probability: 0.5}
		],
		fluid_outputs : [
			{fluid: "geghilarity:diluted_hydrochloric_acid", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 256,
		duration: 200,
		item_inputs : [
			{item: "geggy:netherium_dust", amount: 10},
			{item: "modern_industrialization:gold_dust", amount: 6}
		],
		item_outputs : [
			{item: "geggy:netherite_dust", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 1900,
		duration: 300,
		item_inputs : [
			{item: "geggy:netherite_dust", amount: 1}
		],
		fluid_inputs : [
			{fluid: "modern_industrialization:nitrogen", amount: 2000}
		],
		item_outputs : [
			{item: "geggy:netherite_hot_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:vacuum_freezer",
		eu: 600,
		duration: 250,
		item_inputs : [
			{item: "geggy:netherite_hot_ingot", amount: 1}
		],
		fluid_inputs : [
			{fluid: "geghilarity:liquid_helium", amount: 500}
		],
		item_outputs : [
			{item: "minecraft:netherite_ingot", amount: 1}
		],
		fluid_outputs : [
			{fluid: "modern_industrialization:helium", amount: 250}
		],
	})
	
	event.shaped('geggy:rose_quartz_blend', [
		'CC ',
		'AA ',
		'AA '
	], {
		A: 'minecraft:redstone',
		C: 'modern_industrialization:quartz_dust'
	})
	event.custom({
		"type": "ae2:transform",
		"circumstance": {
			"type": "fluid",
			"tag": "minecraft:lava"
		},
		"ingredients": [
			{
				"item": "geggy:rose_quartz_blend"
			},
			{	
				"item": "minecraft:amethyst_shard"
			}
		],
		"result": 
			{
				"count": 1, "item": "create:rose_quartz"
			}
	})
	
	event.shaped('geggy:gloom_block', [
		'CAC',
		'ABA',
		'CAC'
	], {
		A: 'modern_industrialization:steel_large_plate',
		B: 'modern_industrialization:aluminum_gear',
		C: 'modern_industrialization:aluminum_plate'
	})

})

// AQM2 thankyouverymuch
EntityEvents.checkSpawn(e => {
    let nbt = e.entity.nbt
    if (e.type == 'SPAWNER' && nbt.cardinal_components && nbt.cardinal_components['eldritch_mobs:eldritch_modifiers']?.numMaxAbilities > 0) {
      e.cancel()
    }
})



