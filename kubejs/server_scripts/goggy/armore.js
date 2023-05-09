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
	
	
	

})	
	