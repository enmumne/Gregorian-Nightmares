ServerEvents.recipes(event => {	
	
	/*
	event.shaped('geggy:pattern', [
		'AC ',
		'BA ',
		'   '
	], {
		A: 'minecraft:stick',
		B: 'geggy:j_planks',
		C: 'minecraft:paper'
	})
	*/
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"item": "geggy:j_planks"}
		],
		"tool": 
			{"type": "farmersdelight:tool",
			"tag": "c:tools/knives"},
		"result": [
			{ "item": "geggy:wooden_form", "count": 1}
		],
		"sound": "minecraft:item.axe.strip"
	})
	
	//event.shapeless('geggy:wooden_form', ['geggy:j_planks', 'farmersdelight:flint_knife']).damageIngredient('farmersdelight:flint_knife')
	
	event.shapeless('2x geggy:chad', ['minecraft:sugar_cane', 'minecraft:sugar_cane', 'minecraft:sugar_cane', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')
	
	event.shapeless('geggy:wood_pulp', ['#minecraft:logs', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')
	
	//event.shapeless('minecraft:flint', ['minecraft:gravel', 'minecraft:gravel', 'minecraft:gravel'])

	event.shapeless('minecraft:flint', ['minecraft:gravel', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')

	event.shapeless('geggy:quartz_sand', ['#c:sand', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')

	event.shapeless('2x geggy:clay_dust', ['minecraft:clay', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')

	event.shapeless('geggy:flint_dust_tiny', ['minecraft:flint', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')
	
	event.shapeless('geggy:netherrack_dust', ['minecraft:netherrack', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')

	event.shapeless('geggy:kelp_dust', ['minecraft:dried_kelp', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')

	event.shapeless('modern_industrialization:brick_dust', ['minecraft:bricks', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')

	event.shapeless('geggy:small_brick_dust', ['minecraft:brick', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')
	
	event.shapeless('modern_industrialization:coke_dust', ['modern_industrialization:coke', 'modern_industrialization:coke', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')
	
	event.shapeless('modern_industrialization:coal_dust', ['minecraft:coal', 'minecraft:coal', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')
	
	//event.shapeless('modern_industrialization:copper_dust', ['minecraft:raw_copper', 'minecraft:raw_copper', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')
	event.shapeless('kubejs:zinc_dust', ['create:raw_zinc', 'create:raw_zinc', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')

	event.shapeless('2x modern_industrialization:quartz_dust', ['minecraft:quartz_block', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')
	
	event.remove({id: 'minecraft:bone_meal'})
	event.shapeless('minecraft:bone_meal', ['minecraft:bone', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')

	event.shapeless('modern_industrialization:iron_tiny_dust', ['create:crushed_iron_ore', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')

	event.shaped('geggy:unfinished_bucket', [
		'A A',
		'ABA',
		' A '
	], {
		A: 'modern_industrialization:iron_dust',
		B: 'geggy:wooden_form'
	}).damageIngredient('geggy:wooden_form')

	// 1.19 grout > geggy
	event.shapeless('geggy:uncooked_primitive_brick', ['geggy:craut', 'geggy:kelp_dust', 'geggy:wooden_form']).damageIngredient('geggy:wooden_form')

	//iron curse
	event.shapeless('modern_industrialization:iron_tiny_dust', ['minecraft:iron_nugget', 'minecraft:iron_nugget', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')

	event.shapeless('geggy:primitive_brick_dust', ['geggy:primitive_brick', 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')
	
	event.shaped('6x modern_industrialization:copper_tiny_dust', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'modern_industrialization:copper_nugget',
		B: 'geggy:stone_mortar'
	}).damageIngredient('geggy:stone_mortar')
	// no need tin nuggets > dusts, already create milling available, post-cog pre-bronze

	event.shaped('2x geggy:wrought_small_dust', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'geggy:wrought_nugget',
		B: 'geggy:stone_mortar'
	}).damageIngredient('geggy:stone_mortar')

	event.shaped('2x geggy:unfired_tempered_dust', [
		'ACA',
		'DBD',
		'   '
	], {
		A: 'modern_industrialization:iron_dust',
		B: 'geggy:wooden_form',
		C: 'geggy:kelp_dust',
		D: 'geggy:primitive_brick_dust'
	}).damageIngredient('geggy:wooden_form')
	
	event.shaped('8x geggy:unfired_clay_brick', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:clay_ball',
		B: 'geggy:wooden_form'
	}).damageIngredient('geggy:wooden_form')

	event.shaped('3x geggy:unfired_coke_oven_brick', [
		'AAA',
		'CBC',
		'DDD'
	], {
		A: 'minecraft:clay_ball',
		B: 'geggy:wooden_form',
		C: 'minecraft:gravel',
		D: '#c:sand'
	}).damageIngredient('geggy:wooden_form')
	
	event.shaped('geggy:wrought_dust', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'geggy:wrought_small_dust',
		B: 'geggy:wooden_form'
	}).damageIngredient('geggy:wooden_form')
	
	event.shaped('minecraft:clay', [
		'AAA',
		' B ',
		'AAA'
	], {
		A: 'minecraft:clay_ball',
		B: 'geggy:wooden_form'
	}).damageIngredient('geggy:wooden_form')
	event.shaped('minecraft:clay', [
		'AAA',
		' B ',
		'AAA'
	], {
		A: 'geggy:clay_dust',
		B: 'geggy:wooden_form'
	}).damageIngredient('geggy:wooden_form')
	
	event.remove({id: 'create:crafting/materials/sand_paper'})
	event.shapeless('create:sand_paper', ['geggy:quartz_sand', 'minecraft:paper'])


});	