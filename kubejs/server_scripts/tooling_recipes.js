

//onEvent('tags.items', event => { 
ServerEvents.tags('item', event => { 
  
  event.add('c:stripped_logs', 'geggy:j_stripped_log')
  
  event.add('forever', 'drilly:drill_group1')
  event.add('forever', 'drilly:drill_group2')
  event.add('forever', 'drilly:drill_group3')
  event.add('forever', 'drilly:drill_group4')
  event.add('forever', 'drilly:drill_group5')
  
});

ServerEvents.tags('block', event => { 

  //event.add('minecraft:needs_stone_tool', 'modern_industrialization:bronze_proto')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:pyro')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:blaster_furnace')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:blaster_furnace2')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:blaster_furnace3')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:blaster_furnace4')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:lcr')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:steel_dehy')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:electric_dehy')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:bronze_salloy')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:steel_salloy')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:electric_salloy')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:steel_fextract')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:electric_fextract')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:bronze_drill1')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:bronze_drill2')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:bronze_drill3')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:steel_drill4')
  event.add('minecraft:mineable/pickaxe', 'modern_industrialization:bronze_proto')
  
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
	
	event.remove({type: 'minecraft:crafting_shapeless', output: '#minecraft:planks'})
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
	event.shapeless('2x minecraft:oak_planks', ['#minecraft:logs'])
	
	
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
	U: '#c:stripped_logs'
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
  event.shaped('geggy:j_stone_pickaxe_head', [
    'SSS',
    '   ',
    '   '
  ], {
    S: '#minecraft:stone_tool_materials'
  })
  
  
  
  

	event.shapeless('minecraft:wooden_pickaxe', ['geggy:j_wooden_pickaxe_head', 'geggy:j_tool_rod'])
	event.shapeless('minecraft:stone_pickaxe', ['geggy:j_stone_pickaxe_head', 'geggy:j_tool_rod'])
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

