ServerEvents.recipes(event => {	
	
	// forge hammer gone
	event.remove({type: "modern_industrialization:forge_hammer"})
	
	event.remove([
		"modern_industrialization:assembler_generated/vanilla_recipes/steel_forge_hammer",
		"modern_industrialization:vanilla_recipes/macerator/gravel",
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
			"results": [{"count": 2, "item": "create:crushed_raw_iron"},{"item": "create:crushed_raw_iron", "chance": 0.50},{"count": 1, "item": "geggy:stone_dust"}]
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
			"processingTime":50,
			"ingredients": [{"item": "create:copper_nugget"}],
			"results": [{"item": "modern_industrialization:copper_tiny_dust"}]
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
	
	// recycle?
	
	event.custom({
		"type": "create:crushing",
		"processingTime": 100,
		"ingredients": [{"item": "minecraft:cobblestone"}],
		"results": [
			{"count": 1, "chance": 0.03, "item": "modern_industrialization:copper_tiny_dust"},
			{"count": 1, "chance": 0.02, "item": "modern_industrialization:tin_tiny_dust"},
			{"count": 1, "chance": 0.02, "item": "geghilarity:tiny_zinc_dust"}
		]
	})
	event.custom({
		"type": "create:crushing",
		"processingTime": 100,
		"ingredients": [{"item": "minecraft:cobbled_deepslate"}],
		"results": [
			{"count": 1, "chance": 0.06, "item": "modern_industrialization:iron_tiny_dust"},
			{"count": 1, "chance": 0.05, "item": "modern_industrialization:coal_tiny_dust"},
			{"count": 1, "chance": 0.03, "item": "modern_industrialization:lead_tiny_dust"},
			{"count": 1, "chance": 0.02, "item": "modern_industrialization:manganese_tiny_dust"},
			{"count": 1, "chance": 0.02, "item": "modern_industrialization:antimony_tiny_dust"}
		]
	})
	event.custom({
		"type": "create:crushing",
		"processingTime": 100,
		"ingredients": [{"item": "minecraft:diorite"}],
		"results": [
			{"count": 1, "chance": 0.05, "item": "modern_industrialization:nickel_tiny_dust"},
			{"count": 1, "chance": 0.02, "item": "magick:calcite_dust"},
			{"count": 1, "chance": 0.02, "item": "geghilarity:biotite_dust"},
			{"count": 1, "chance": 0.02, "item": "geghilarity:tiny_rock_salt_dust"}
		]
	})
	event.custom({
		"type": "create:crushing",
		"processingTime": 100,
		"ingredients": [{"item": "minecraft:granite"}],
		"results": [
			{"count": 1, "chance": 0.05, "item": "modern_industrialization:iron_tiny_dust"},
			{"count": 1, "chance": 0.04, "item": "modern_industrialization:redstone_tiny_dust"},
			{"count": 1, "chance": 0.03, "item": "modern_industrialization:nickel_tiny_dust"}
		]
	})
	event.custom({
		"type": "create:crushing",
		"processingTime": 100,
		"ingredients": [{"item": "minecraft:dripstone_block"}],
		"results": [
			{"count": 1, "chance": 0.2, "item": "geggy:clay_dust"},
			{"count": 1, "chance": 0.1, "item": "geghilarity:tiny_rock_salt_dust"}
		]
	})
	event.custom({
		"type": "create:crushing",
		"processingTime": 100,
		"ingredients": [{"item": "minecraft:tuff"}],
		"results": [
			{"count": 1, "chance": 0.1, "item": "geghilarity:dark_ashes"},
			{"count": 1, "chance": 0.06, "item": "modern_industrialization:sulfur_tiny_dust"},
			{"count": 1, "chance": 0.05, "item": "modern_industrialization:redstone_tiny_dust"},
			{"count": 1, "chance": 0.01, "item": "minecraft:emerald"}
		]
	})
	event.custom({
		"type": "create:crushing",
		"processingTime": 100,
		"ingredients": [{"item": "minecraft:smooth_basalt"}],
		"results": [
			{"count": 1, "chance": 0.06, "item": "modern_industrialization:redstone_tiny_dust"},
			{"count": 1, "chance": 0.04, "item": "modern_industrialization:lignite_coal_tiny_dust"},
			{"count": 1, "chance": 0.02, "item": "geghilarity:precious_nugget"},
			{"count": 1, "chance": 0.02, "item": "geggy:diamond_shards"}
		]
	})
	event.custom({
		"type": "create:crushing",
		"processingTime": 100,
		"ingredients": [{"item": "create:scoria"}],
		"results": [
			{"count": 1, "chance": 0.08, "item": "modern_industrialization:lignite_coal_tiny_dust"},
			{"count": 1, "chance": 0.06, "item": "modern_industrialization:redstone_tiny_dust"},
			{"count": 1, "chance": 0.02, "item": "geghilarity:precious_nugget"}
		]
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
			{"count": 1, "item": "geggy:stone_dust"}
		]	
	})
	
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 8,
		duration: 150,
		item_inputs: [ 
			{item: "minecraft:netherrack", amount: 1}
		],
		item_outputs: [
			{item: "geggy:netherrack_dust", amount: 1},
			{item: "geggy:netherrack_dust", amount: 1, probability: 0.5},
			{item: "geghilarity:precious_nugget", amount: 1, probability: 0.03}
		]
	})
	
	// bulk haunting only works on red sand, produced with redstone
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 80,
		duration: 900,
		item_inputs: [ 
			{item: "minecraft:soul_sand", amount: 5}
		],
		item_outputs: [
			{item: "minecraft:sand", amount: 1, probability: 0.9},
			{item: "geggy:saltpeter", amount: 1, probability: 0.8},
			{item: "modern_industrialization:coal_dust", amount: 1, probability: 0.5}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:crude_oil", amount: 80}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 250,
		item_inputs: [ 
			{item: "minecraft:grass_block", amount: 1}
		],
		item_outputs: [
			{item: "geggy:plant_ball", amount: 1, probability: 0.35},
			{item: "minecraft:sand", amount: 1, probability: 0.5},
			{item: "geggy:clay_dust", amount: 1, probability: 0.045}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 250,
		item_inputs: [ 
			{item: "minecraft:dirt", amount: 1}
		],
		item_outputs: [
			{item: "geggy:plant_ball", amount: 1, probability: 0.125},
			{item: "minecraft:sand", amount: 1, probability: 0.5},
			{item: "geggy:clay_dust", amount: 1, probability: 0.05}
			
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 300,
		item_inputs: [ 
			{item: "geggy:mince_meat", amount: 3}
		],
		fluid_outputs: [
			{fluid: "geghilarity:biomass", amount: 200},
			{fluid: "geghilarity:liquid_fat", amount: 10}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:smoke_stack",
		eu: 2,
		duration: 10,
		fluid_inputs: [ 
			{fluid: "modern_industrialization:steam", amount: 100}
		],
		item_outputs: [
			{item: "geghilarity:tiny_ashes", amount: 1, probability: 0.01}
			
		]
	})
	
	
	
})	