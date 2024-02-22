ServerEvents.recipes(event => {
	
	event.remove([
		"yttr:crafting/iron_nugget",
		"yttr:shattering/yttr/crafting/iron_nugget",
		"yttr:crafting/project_table",
		"yttr:crafting/spatula",
		"yttr:crafting/giant_cobblestone",
		"yttr:crafting/xl_iron_ingot",
		"yttr:crafting/big_iron",
		"yttr:crafting/big_iron_from_ingot",
		"yttr:crafting/impure_netherite_ingot_netherite",
		"yttr:crafting/impure_netherite_ingot_gold"
	])
	
	event.custom({
			"type": "create:milling",
			"processingTime":500,
			"ingredients": [{"item": "yttr:xl_iron_ingot"}],
			"results": [{"count": 6, "item": "create:crushed_raw_iron"},{"count": 3, "item": "create:crushed_raw_iron", "chance": 0.50}]
	})

})	