ServerEvents.recipes(event => {	
	
	// forge hammer gone
	event.remove({type: "modern_industrialization:forge_hammer"})
	
	event.remove([
		"modern_industrialization:assembler_generated/vanilla_recipes/steel_forge_hammer",
		"modern_industrialization:vanilla_recipes/steel_forge_hammer_asbl", "modern_industrialization:forge_hammer",
		"modern_industrialization:materials/coal/macerator/ore_to_crushed",
		"create:crushing/raw_iron", "modern_industrialization:materials/iron/macerator/ore_to_raw",
		"modern_industrialization:materials/tin/macerator/ore_to_raw",
		"create:crushing/raw_copper", "create:crushing/raw_tin_ore", "create:crushing/raw_lead_ore",
		"create:crushing/raw_nickel_ore", "create:crushing/raw_zinc", "create:crushing/raw_tin",
		"modern_industrialization:materials/macerator/copper_ore_to_raw",
		"modern_industrialization:materials/macerator/redstone_ore_to_crushed",
		"modern_industrialization:materials/antimony/macerator/ore_to_raw",
		"modern_industrialization:materials/bauxite/macerator/ore_to_crushed",
		"modern_industrialization:materials/lead/macerator/ore_to_raw",
		"modern_industrialization:materials/lignite_coal/macerator/ore_to_crushed",
		"modern_industrialization:materials/mozanite/macerator/ore_to_crushed",
		"modern_industrialization:materials/salt/macerator/ore_to_crushed",
		"modern_industrialization:materials/nickel/macerator/ore_to_raw",
		"modern_industrialization:materials/tungsten/macerator/ore_to_raw",
		"create:crushing/nether_quartz_ore",
		"modern_industrialization:materials/macerator/quartz_ore_to_crushed"
	])
	
	// create crush, crushed and stone to be used for processing > wash for raw > macerate into dusts 
	// block mined > raw

	// milling recipes
	event.custom({
			"type": "create:milling",
			"processingTime":200,
			"ingredients": [{"item": "minecraft:flint"}],
			"results": [{"item": "geggy:flint_dust"}]
	})
	
	event.custom({
			"type": "create:milling",
			"processingTime":250,
			"ingredients": [{"item": "minecraft:raw_iron"}],
			"results": [{"count": 2, "item": "create:crushed_raw_iron"},{"item": "create:crushed_raw_iron", "chance": 0.50},{"count": 1, "item": "geggy:gravel_dust"}]
	})
	// yttr
	event.custom({
			"type": "create:milling",
			"processingTime":500,
			"ingredients": [{"item": "yttr:xl_iron_ingot"}],
			"results": [{"count": 6, "item": "create:crushed_raw_iron"},{"count": 3, "item": "create:crushed_raw_iron", "chance": 0.50}]
	})
	event.custom({
			"type": "create:milling",
			"processingTime":200,
			"ingredients": [{"item": "create:crushed_raw_iron"}],
			"results": [{"item": "modern_industrialization:iron_tiny_dust"},{"item": "modern_industrialization:iron_tiny_dust", "chance": 0.8}]
	})
	event.custom({
			"type": "create:milling",
			"processingTime":200,
			"ingredients": [{"item": "minecraft:raw_copper"}],
			"results": [{"item": "modern_industrialization:copper_dust"}]
	})
	event.custom({
			"type": "create:milling",
			"processingTime":200,
			"ingredients": [{"item": "modern_industrialization:raw_tin"}],
			"results": [{"item": "modern_industrialization:tin_dust"}]
	})
	event.custom({
			"type": "create:milling",
			"processingTime":200,
			"ingredients": [{"item": "modern_industrialization:coal_crushed_dust"}],
			"results": [{"item": "modern_industrialization:coal_dust"}]
	})
	event.custom({
			"type": "create:milling",
			"processingTime":200,
			"ingredients": [{"item": "modern_industrialization:redstone_crushed_dust"}],
			"results": [{"item": "minecraft:redstone"}]
	})

	// progression fix pipes macerator
	event.custom({
			"type": "create:milling",
			"processingTime":150,
			"ingredients": [{"item": "modern_industrialization:raw_lead"}],
			"results": [{"item": "modern_industrialization:lead_dust"}]
	})
	
	event.custom({
			"type": "create:milling",
			"processingTime":200,
			"ingredients": [{"item": "minecraft:quartz"}],
			"results": [{"item": "modern_industrialization:quartz_dust"}]
	})

	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "minecraft:obsidian", amount: 1}
		],
		item_outputs: [
			{item: "create:powdered_obsidian", amount: 1},
			{item: "minecraft:obsidian", amount: 1, probability: 0.75}
		]
	})
	
	// create brass
	event.remove({type: "create:mixing", output: "create:brass_ingot"})
	event.custom({
		type: "create:milling",
		"processingTime":200,
		ingredients: [{
			"item": "create:brass_ingot"
		}],
		results: [{
			"item": "kubejs:brass_dust"
		}]
	})
	event.custom({
		type: "create:milling",
		"processingTime":200,
		ingredients: [{
			"item": "create:zinc_ingot"
		}],
		results: [{
			"item": "kubejs:zinc_dust"
		}]
	})
	event.custom({
		type: "create:milling",
		"processingTime":200,
		ingredients: [{
			"item": "create:raw_zinc"
		}],
		results: [{
			"item": "kubejs:zinc_dust"
		}]
	})
	
		//event.remove({type: "modern_industrialization:macerator", input: `#c:salt_ores`})	
		
		
	//bb	
	//DEPP MAGICK
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			{"item": "modern_industrialization:salt_crushed_dust"}
		],
		"results": [
			{"count": 1, "item": "modern_industrialization:salt_dust"},
			{"count": 3, "item": "geghilarity:tiny_rock_salt_dust"},
			{"count": 1, "item": "magick:stone_dust"}
		]	
	})
	
})	