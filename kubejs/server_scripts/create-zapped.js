ServerEvents.recipes(event => {
		
	event.remove([
		"create_new_age:shapeless/energiser_t1",
		"create_new_age:shaped/carbon_brushes",
		"create_new_age:shaped/stirling_engine",
		"create_new_age:shaped/heat_pump",
		"create_new_age:shaped/redstone_magnet",
		"create_new_age:shaped/generator_coil",
		"create_new_age:shaped/basic_motor",
		"create_new_age:shaped/advanced_motor",
		"create_new_age:shaped/connector",
		"create_new_age:shaped/connector_mirrored"
	])
	
	event.shaped('geggy:base_connector', [
		' D ',
		'CBC',
		'ABA'
	], {
		A: 'create:andesite_alloy',
		B: 'modern_industrialization:copper_ring',
		C: 'create:copper_nugget',
		D: 'createdeco:copper_coin'
	})
	event.custom({
		type: "create:deploying",
		ingredients: [
			{"item": "geggy:base_connector"},
			{"item": "createdeco:gold_coin"}
		],
		results: [{
			"item": "create_new_age:electrical_connector"
		}]
	})
	
	event.shaped('create_new_age:basic_motor', [
		'EFE',
		'BAC',
		'EDE'
	], {
		A: 'create:andesite_casing',
		B: 'create_new_age:redstone_magnet',
		C: 'create:shaft',
		D: 'geggy:galvanized_steel_gear',
		E: 'modern_industrialization:steel_rod',
		F: 'modern_industrialization:inductor'
	})
	
	event.shaped('create_new_age:advanced_motor', [
		'BBB',
		'DAC',
		'BBB'
	], {
		A: 'create:brass_casing',
		B: 'create_new_age:overcharged_iron',
		C: 'create_new_age:basic_motor',
		D: 'modern_industrialization:capacitor'
	})
	
	event.shaped('create_new_age:generator_coil', [
		'BCB',
		'CAC',
		'BCB'
	], {
		A: 'create:andesite_alloy_block',
		B: 'createaddition:copper_spool',
		C: 'modern_industrialization:copper_curved_plate'
	})
	
	event.shaped('create_new_age:energiser_t1', [
		' D ',
		'CBC',
		' A '
	], {
		A: 'minecraft:lightning_rod',
		B: 'create:andesite_casing',
		C: 'modern_industrialization:copper_ring',
		D: 'create:electron_tube'
	})
	
	event.shaped('create_new_age:redstone_magnet', [
		'AAA',
		'CBC',
		'AAA'
	], {
		A: 'minecraft:iron_nugget',
		B: 'minecraft:redstone_block',
		C: 'create:rose_quartz'
	})
	
	event.shapeless('create_new_age:copper_wire', ['createaddition:copper_spool'])
	event.shapeless('createaddition:copper_spool', ['create_new_age:copper_wire'])
	
	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
			"item": "createaddition:copper_spool"
		},
		"results": [
			{"count": 2,"item": "modern_industrialization:copper_wire"}
		],
		"loops": 2,
		"sequence": [
		{
			"type": "create_new_age:energising",
			"energy_needed": 2500,
			"ingredients": [
				{"item": "create_new_age:incomplete_wire"}
			],
			"results": [
				{"item": "create_new_age:incomplete_wire"}
			]
		}],
		"transitionalItem": {"item": "create_new_age:incomplete_wire"}
	})
	
	event.shaped('create_new_age:heat_pump', [
		'ABA',
		'   ',
		'   '
	], {
		A: 'create_new_age:heat_pipe',
		B: 'create:mechanical_pump'
	})
	
	event.shaped('create_new_age:stirling_engine', [
		'ADA',
		'CBC',
		'   '
	], {
		A: 'modern_industrialization:inductor',
		B: 'minecraft:copper_block',
		C: 'create_new_age:heat_pipe',
		D: 'create:shaft'
	})
	
	event.shaped('create_new_age:carbon_brushes', [
		'ADA',
		'BCB',
		'ADA'
	], {
		A: 'create:andesite_alloy',
		B: 'create:shaft',
		C: 'minecraft:coal_block',
		D: 'modern_industrialization:tin_ring'
	})
	
})	

ServerEvents.tags('item', event => { 

	event.add('c:hidden_from_recipe_viewers', 'createaddition:electrum_ingot')
	event.add('c:hidden_from_recipe_viewers', 'createaddition:electrum_nugget')
	event.add('c:hidden_from_recipe_viewers', 'createaddition:electrum_sheet')
	event.add('c:hidden_from_recipe_viewers', 'createaddition:zinc_sheet')
	event.add('c:hidden_from_recipe_viewers', 'createaddition:copper_rod')
	event.add('c:hidden_from_recipe_viewers', 'createaddition:iron_rod')
	event.add('c:hidden_from_recipe_viewers', 'createaddition:gold_rod')
	event.add('c:hidden_from_recipe_viewers', 'createaddition:electrum_rod')
	event.add('c:hidden_from_recipe_viewers', 'createaddition:brass_rod')
	event.add('c:hidden_from_recipe_viewers', 'createaddition:electrum_amulet')

})


	