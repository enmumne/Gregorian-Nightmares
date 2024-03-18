//requires: toms_storage

ServerEvents.recipes(event => {
	
	event.remove([
		"toms_storage:storage_terminal",
		"toms_storage:crafting_terminal",
		"toms_storage:inventory_connector",
		"toms_storage:wireless_terminal",
		"toms_storage:adv_wireless_terminal"
		
	])
	
	// 4 planks, 2 redstone comparator, 1 glowstone, 1 chest, 1 glass
	event.shaped('toms_storage:ts.storage_terminal', [
		'BEB',
		'CDC',
		'BAB'
	], {
		A: 'minecraft:diamond',
		B: '#minecraft:planks',
		C: 'create:precision_mechanism',
		D: 'modern_industrialization:bronze_gear',
		E: 'minecraft:glowstone'
	})
	
		// 4 diamonds, 4 crafting table, 1 storage terminal
	event.shaped('toms_storage:ts.crafting_terminal', [
		'EBE',
		'CDC',
		'EAE'
	], {
		A: 'minecraft:diamond',
		B: 'minecraft:crafting_table',
		C: 'create:precision_mechanism',
		D: 'toms_storage:ts.storage_terminal',
		E: 'geggy:treated_plank'
	})
	
	// 4 planks, 2 chest, 1 diamond, 1 comparator, 1 ender pearl
	event.shaped('toms_storage:ts.inventory_connector', [
		'BAB',
		'CDC',
		'BEB'
	], {
		A: 'modern_industrialization:analog_circuit',
		B: 'modern_industrialization:steel_rod',
		C: 'minecraft:diamond',
		D: 'wiredredstone:ender_redstone_mixture',
		E: 'modern_industrialization:motor'
	})
	
})

ServerEvents.tags('item', event => { 
  
  event.add('c:hidden_from_recipe_viewers', 'toms_storage:ts.wireless_terminal')
  event.add('c:hidden_from_recipe_viewers', 'toms_storage:ts.adv_wireless_terminal')
  
});