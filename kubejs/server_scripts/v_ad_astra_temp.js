ServerEvents.recipes(event => {
	
	event.remove([
		"ad_astra:recipes/rocket_nose_cone",
	    "ad_astra:recipes/rocket_fin",
		"ad_astra:recipes/wheel",
		"ad_astra:recipes/steel_tank",
		"ad_astra:recipes/desh_ingot_from_smelting_raw_desh",
		"ad_astra:recipes/desh_ingot_from_smelting_moon_desh_ore",
		"ad_astra:recipes/desh_ingot_from_smelting_deepslate_desh_ore",
		"ad_astra:recipes/desh_ingot_from_blasting_raw_desh",
		"ad_astra:recipes/desh_ingot_from_blasting_moon_desh_ore",
		"ad_astra:recipes/desh_ingot_from_blasting_deepslate_desh_ore",
		"ad_astra:recipes/ostrum_ingot_from_smelting_raw_ostrum",
		"ad_astra:recipes/ostrum_ingot_from_smelting_mars_ostrum_ore",
		"ad_astra:recipes/ostrum_ingot_from_smelting_deepslate_ostrum_ore",
		"ad_astra:recipes/ostrum_ingot_from_blasting_raw_ostrum",
		"ad_astra:recipes/ostrum_ingot_from_blasting_mars_ostrum_ore",
		"ad_astra:recipes/ostrum_ingot_from_blasting_deepslate_ostrum_ore",
		"ad_astra:recipes/calorite_ingot_from_smelting_raw_calorite",
		"ad_astra:recipes/calorite_ingot_from_smelting_venus_calorite_ore",
		"ad_astra:recipes/calorite_ingot_from_smelting_deepslate_calorite_ore",
		"ad_astra:recipes/calorite_ingot_from_blasting_raw_calorite",
		"ad_astra:recipes/calorite_ingot_from_blasting_venus_calorite_ore",
		"ad_astra:recipes/calorite_ingot_from_blasting_deepslate_calorite_ore",
		"ad_astra:hammering/iron_plate",
		"ad_astra:hammering/steel_plate",
		"ad_astra:hammering/desh_plate",
		"ad_astra:hammering/ostrum_plate",
		"ad_astra:hammering/calorite_plate"
	])
	
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 30720,
		duration: 900,
		item_inputs: [ 
			{item: "ad_astra:raw_desh", amount: 1}
		],
		item_outputs: [
			{item: "ad_astra:desh_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 122880,
		duration: 1200,
		item_inputs: [ 
			{item: "ad_astra:raw_ostrum", amount: 1}
		],
		item_outputs: [
			{item: "ad_astra:ostrum_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 491520,
		duration: 1600,
		item_inputs: [ 
			{item: "ad_astra:raw_calorite", amount: 1}
		],
		item_outputs: [
			{item: "ad_astra:calorite_ingot", amount: 1}
		]
	})
	
	event.shaped('ad_astra:rocket_nose_cone', [
		' A ',
		' B ',
		'BBB'
	], {
		A: 'minecraft:lightning_rod',
		B: 'geghilarity:rhodium_plated_palladium_plate'
	})
	
	event.shaped('ad_astra:rocket_fin', [
		' A ',
		'AAA',
		'A A'
	], {
		A: 'geghilarity:polybenzimidazole_sheet'
	})
	
	event.shaped('ad_astra:wheel', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: '#c:steel_plates',
		B: 'modern_industrialization:rubber_sheet'
	})
	
	event.shaped('ad_astra:steel_tank', [
		'BB ',
		'BA ',
		'BB '
	], {
		A: 'modern_industrialization:steel_tank',
		B: 'geggy:galvanized_steel_plate'
	})
	
})	
	