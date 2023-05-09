ServerEvents.recipes(event => {
	
	event.remove({id: 'ad_astra:recipes/rocket_nose_cone'})
	event.shaped('ad_astra:rocket_nose_cone', [
		' A ',
		' B ',
		'BBB'
	], {
		A: 'minecraft:lightning_rod',
		B: 'geghilarity:rhodium_plated_palladium_plate'
	})
	
	event.remove({id: 'ad_astra:recipes/rocket_fin'})
	event.shaped('ad_astra:rocket_fin', [
		' A ',
		'AAA',
		'A A'
	], {
		A: 'geghilarity:polybenzimidazole_sheet'
	})
	
})	
	