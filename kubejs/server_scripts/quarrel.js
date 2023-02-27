	function legacy_quarry_recipes(event) {
	event.remove({type:"modern_industrialization:quarry"})
	
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_bronze_drill"}],
			"results": [{"item": "modern_industrialization:bronze_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_copper_drill"}],
			"results": [{"item": "modern_industrialization:copper_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_steel_drill"}],
			"results": [{"item": "modern_industrialization:steel_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_stainless_steel_drill"}],
			"results": [{"item": "modern_industrialization:stainless_steel_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_aluminum_drill"}],
			"results": [{"item": "modern_industrialization:aluminum_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_titanium_drill"}],
			"results": [{"item": "modern_industrialization:titanium_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_mob_slaughtering_drill"}],
			"results": [{"item": "kubejs:mob_slaughtering_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_andesite_alloy_drill"}],
			"results": [{"item": "kubejs:andesite_alloy_drill"}]
	})
	event.custom({
			"type": "create:splashing",
			"ingredients": [{"item": "kubejs:dirty_gold_drill"}],
			"results": [{"item": "modern_industrialization:gold_drill"}]
	})
	
	
	event.recipes.modern_industrialization.quarry(
		{
			eu: 16,
			duration: 600,
			item_inputs: [
				{item: "modern_industrialization:aluminum_drill", amount: 1}
			],
			item_outputs: [
				{
					item: "kubejs:dirty_aluminum_drill",
					amount: 1,
					probability: 1
				},
				{
					// AE2 1.19?????
					item: "ae2:quartz_cluster",
					amount: 8,
					probability: 0.02
				}
			]
		}
	)

	// to remove
	event.recipes.modern_industrialization.quarry(
		{
			eu: 8,
			duration: 600,
			item_inputs: {
				item: "modern_industrialization:bronze_drill",
				amount: 1,
				probability: 1
			},
			item_outputs : [
				{
					item: "kubejs:dirty_bronze_drill",
					amount: 1,
					probability: 1
				},
				{
					item: "minecraft:iron_ore",
					amount: 8,
					probability: 0.05
				},
				{
					item: "minecraft:coal_ore",
					amount: 8,
					probability: 0.05
				},
				{
					item: "minecraft:copper_ore",
					amount: 4,
					probability: 0.05
				},
				{
					item: "modern_industrialization:tin_ore",
					amount: 6,
					probability: 0.05
				},
				{
					// gold nerf
					item: "geggy:precious_ore",
					amount: 5,
					probability: 0.03
				},
				{
					item: "minecraft:redstone_ore",
					amount: 10,
					probability: 0.02
				}
			]
		}
	)
	
	
	event.shaped("kubejs:andesite_alloy_drill_head", [
		"AAA",
		"AOA",
		"OOO"
	], {
		A: "create:andesite_alloy",
		O: "minecraft:obsidian"
	})

	event.shaped("kubejs:andesite_alloy_drill", [
		"  D",
		"GI ",
		"FG "
	], {
		D: "kubejs:andesite_alloy_drill_head",
		G: "modern_industrialization:iron_gear",
		I: "moderndynamics:item_pipe",
		F: "moderndynamics:fluid_pipe"
	})


	event.shaped("kubejs:mob_slaughtering_drill_head", [
		"RRR",
		"ROR",
		"SSS"
	], {
		R: "wiredredstone:redstone_alloy_ingot",
		O: "minecraft:obsidian",
		S: "wiredredstone:stone_plate"
	})

	event.shaped("kubejs:mob_slaughtering_drill", [
		"  D",
		"GI ",
		"FG "
	], {
		D: "kubejs:mob_slaughtering_drill_head",
		G: "modern_industrialization:iron_gear",
		I: "moderndynamics:item_pipe",
		F: "moderndynamics:fluid_pipe"
	})

	event.recipes.modern_industrialization.quarry(
		{
			type: "modern_industrialization:quarry",
			eu: 4,
			duration: 600,
			item_inputs: {
				item: "modern_industrialization:copper_drill",
				amount: 1,
				probability: 1
			},
			item_outputs: [
				{
					item: "kubejs:dirty_copper_drill",
					amount: 1,
					probability: 1
				},
				{
					item: "minecraft:cobblestone",
					amount: 64,
					probability: 1
				},
				{
					item: "minecraft:diorite",
					amount: 16,
					probability: 0.25
				},
				{
					item: "minecraft:andesite",
					amount: 16,
					probability: 0.25
				},
				{
					item: "minecraft:granite",
					amount: 16,
					probability: 0.25
				},
				{
					item: "minecraft:dirt",
					amount: 10,
					probability: 0.5
				},
				{
					item: "minecraft:gravel",
					amount: 10,
					probability: 0.5
				},
				{
					item: "minecraft:cobbled_deepslate",
					amount: 16,
					probability: 0.25
				},
				{
					item: "minecraft:tuff",
					amount: 16,
					probability: 0.25
				},
			]
		}
	)

	event.recipes.modern_industrialization.quarry(
		{
			type: "modern_industrialization:quarry",
			eu: 8,
			duration: 600,
			item_inputs: {
				item: "modern_industrialization:gold_drill",
				amount: 1,
				probability: 1
			},
			item_outputs: [
				{
					item: "kubejs:dirty_gold_drill",
					amount: 1,
					probability: 1
				},
				{
					item: "minecraft:netherrack",
					amount: 64,
					probability: 1
				},
				{
					item: "minecraft:blackstone",
					amount: 16,
					probability: 0.25
				},
				{
					item: "minecraft:basalt",
					amount: 16,
					probability: 0.25
				},
				{
					item: "minecraft:soul_soil",
					amount: 20,
					probability: 0.10
				},
				{
					item: "minecraft:magma_block",
					amount: 10,
					probability: 0.05
				},
				{
					item: "minecraft:soul_sand",
					amount: 20,
					probability: 0.25
				},
				{
					item: "minecraft:ancient_debris",
					amount: 1,
					probability: 0.01
				},
				{
					item: "minecraft:glowstone",
					amount: 12,
					probability: 0.05
				},
				{
					item: "minecraft:nether_quartz_ore",
					amount: 6,
					probability: 0.15
				},
				{
					// gold nerf
					item: "geggy:nether_precious_ore",
					amount: 5,
					probability: 0.05
				},				
			]
		}
	)

	event.recipes.modern_industrialization.quarry(
		{
			type: "modern_industrialization:quarry",
			eu: 12,
			duration: 600,
			item_inputs: {
				item: "modern_industrialization:steel_drill",
				amount: 1,
				probability: 1
			},
			item_outputs: [
				{
					item: "kubejs:dirty_steel_drill",
					amount: 1,
					probability: 1
				},
				{
					item: "modern_industrialization:antimony_ore",
					amount: 5,
					probability: 0.04
				},
				{
					item: "minecraft:diamond_ore",
					amount: 6,
					probability: 0.02
				},
				{
					item: "minecraft:lapis_ore",
					amount: 10,
					probability: 0.01
				},
				{
					item: "modern_industrialization:lead_ore",
					amount: 5,
					probability: 0.05
				},
				{
					item: "modern_industrialization:nickel_ore",
					amount: 6,
					probability: 0.03
				},
				{
					item: "modern_industrialization:bauxite_ore",
					amount: 8,
					probability: 0.05
				},
				{
					item: "modern_industrialization:salt_ore",
					amount: 4,
					probability: 0.03
				},
				{
					item: "minecraft:emerald_ore",
					amount: 4,
					probability: 0.025
				},
				{
					item: "modern_industrialization:quartz_ore",
					amount: 10,
					probability: 0.02
				},
				{
					item: "modern_industrialization:lignite_coal_ore",
					amount: 6,
					probability: 0.04
				},
			]
		}
	)

	event.recipes.modern_industrialization.quarry(
		{
			type: "modern_industrialization:quarry",
			eu: 32,
			duration: 600,
			item_inputs: {
				item: "modern_industrialization:stainless_steel_drill",
				amount: 1,
				probability: 1
			},
			item_outputs: [
				{
					item: "kubejs:dirty_stainless_steel_drill",
					amount: 1,
					probability: 1
				},
				// TEMP titanium, 10 0.015 to bauxite
				{
					item: "modern_industrialization:bauxite_ore",
					amount: 10,
					probability: 0.05
				},
				{
					item: "modern_industrialization:tungsten_ore",
					amount: 5,
					probability: 0.02
				},
				{
					item: "modern_industrialization:mozanite_ore",
					amount: 5,
					probability: 0.05
				},
				// added nickel
				{
					item: "modern_industrialization:nickel_ore",
					amount: 8,
					probability: 0.05
				},
				// extremely temporary
				{
					item: "geghilarity:vanadium_magnetite_dust",
					amount: 2,
					probability: 0.05
				}
				/*
				{
					item: "modern_industrialization:platinum_ore",
					amount: 4,
					probability: 0.03
				},
				*/
			]
		}
	)

	event.recipes.modern_industrialization.quarry(
		{
			type: "modern_industrialization:quarry",
			eu: 128,
			duration: 600,
			item_inputs: {
				item: "modern_industrialization:titanium_drill",
				amount: 1,
				probability: 1
			},
			item_outputs: [
				{
					item: "kubejs:dirty_titanium_drill",
					amount: 1,
					probability: 1
				},
				{
					item: "modern_industrialization:uranium_ore",
					amount: 10,
					probability: 0.02
				},
				// iridium 5 0.01 > nickel
				{
					item: "modern_industrialization:nickel_ore",
					amount: 9,
					probability: 0.06				
				},
			]
		}
	)

	event.recipes.modern_industrialization.quarry(
		{
			type: "modern_industrialization:quarry",
			eu: 32,
			duration: 600,
			item_inputs: {
				item: "kubejs:mob_slaughtering_drill",
				amount: 1,
				probability: 1
			},
			item_outputs: [
				{
					item: "kubejs:dirty_mob_slaughtering_drill",
					amount: 1,
					probability: 1
				},
				{
					item: "minecraft:blaze_rod",
					amount: 1,
					probability: 0.01
				},
				{
					item: "minecraft:ender_pearl",
					amount: 1,
					probability: 0.01
				},
				{
					item: "minecraft:ghast_tear",
					amount: 1,
					probability: 0.01
				},
				{
					item: "minecraft:bone",
					amount: 5,
					probability: 0.05
				},
				{
					item: "minecraft:rotten_flesh",
					amount: 5,
					probability: 0.05
				}
			]
		}
	)

	
	event.recipes.modern_industrialization.quarry(
		{
			type: "modern_industrialization:quarry",
			eu: 16,
			duration: 600,
			item_inputs: {
				item: "kubejs:andesite_alloy_drill",
				amount: 1,
				probability: 1
			},
			item_outputs: [
				{
					item: "kubejs:dirty_andesite_alloy_drill",
					amount: 1,
					probability: 1
				},
				{
					item: "create:zinc_ore",
					amount: 1,
					probability: 0.03
				},
			]
		}
	)
	
}


ServerEvents.recipes(event => {
	
	/*
	event.recipes.modern_industrialization.puff(2, 100)
        .itemIn("modern_industrialization:bronze_drill", 0.04)
        .itemOut("minecraft:iron_ore", 0.4)
        .itemOut("minecraft:coal_ore", 0.4)
        .itemOut("minecraft:copper_ore", 0.2)
        .dimension("overworld")
        .adjacentBlock("geghilarity:ironicus_maximum", "below")
	*/
	
	event.shaped('drilly:whole_tier1_experience', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'drilly:tiny_tier1_experience'
	})
	event.shaped('drilly:whole_tier2_experience', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'drilly:tiny_tier2_experience'
	})
	event.shaped('drilly:whole_tier3_experience', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'drilly:tiny_tier3_experience'
	})

	event.shaped('modern_industrialization:bronze_drill1', [
		'BCB',
		'ADA',
		'BDB'
	], {
		A: 'modern_industrialization:copper_rod',
		B: 'modern_industrialization:copper_plate',
		C: 'modern_industrialization:copper_gear',
		D: 'create:cogwheel'
	})

	event.shaped('modern_industrialization:bronze_drill2', [
		'BAB',
		'CEC',
		'BDB'
	], {
		A: 'drilly:whole_tier1_experience',
		B: 'modern_industrialization:bronze_plate',
		C: 'modern_industrialization:bronze_gear',
		D: 'modern_industrialization:bronze_drill1',
		E: 'modern_industrialization:bronze_machine_casing'
	})	

	event.shaped('modern_industrialization:bronze_drill3', [
		'BAB',
		'CEC',
		'BDB'
	], {
		A: 'drilly:whole_tier2_experience',
		B: 'modern_industrialization:bronze_plate',
		C: 'modern_industrialization:bronze_gear',
		D: 'modern_industrialization:bronze_drill2',
		E: 'modern_industrialization:bronze_machine_casing'
	})	
	
	event.shaped('modern_industrialization:steel_drill4', [
		'BAB',
		'CEC',
		'BDB'
	], {
		A: 'drilly:whole_tier3_experience',
		B: 'modern_industrialization:bronze_plate',
		C: 'modern_industrialization:bronze_gear',
		D: 'modern_industrialization:bronze_drill3',
		E: 'modern_industrialization:steel_machine_casing'
	})
	
	event.shaped('drilly:copper_drill', [
		' B ',
		'BCB',
		' D '
	], {
		B: 'modern_industrialization:copper_plate',
		C: 'create:cogwheel',
		D: 'create:mechanical_piston'
	})
	
	event.shaped('drilly:bronze_base_drill', [
		' B ',
		'BCB',
		'ADA'
	], {
		A: 'modern_industrialization:bronze_rod',
		B: 'modern_industrialization:bronze_plate',
		C: 'create:cogwheel',
		D: 'create:mechanical_piston'
	})
	

	
	// Tier 1/2 copper
	
	event.recipes.modern_industrialization.drill1(2, 6000)
        .itemIn("drilly:copper_drill", 0.09)
		.itemIn("drilly:drill_group1", 0.00)
        .itemOut("5x minecraft:raw_copper", 0.35)
        .itemOut("modern_industrialization:raw_tin",  0.25)
        .itemOut("minecraft:raw_iron", 0.07)
		.itemOut("minecraft:coal", 0.08)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("001_coppercore_slow")
	
	/*
	event.recipes.modern_industrialization.drill1(1, 6000)
        .itemIn("drilly:copper_drill", 0.09)
		.itemIn("drilly:drill_group1", 0.00)
        .itemOut("5x minecraft:raw_copper", 0.35)
        .itemOut("modern_industrialization:raw_tin",  0.25)
        .itemOut("minecraft:raw_iron", 0.07)
		.itemOut("minecraft:coal", 0.08)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("001_coppercore_slow")
		*/
		
	event.recipes.modern_industrialization.drill2(1, 6000)
        .itemIn("drilly:copper_drill", 0.14) // 0.09
		.itemIn("drilly:drill_group1", 0.00)
        .itemOut("5x minecraft:raw_copper", 0.39) // +4
        .itemOut("modern_industrialization:raw_tin",  0.29) // +4
        .itemOut("minecraft:raw_iron", 0.08) // +1
		.itemOut("minecraft:coal", 0.09)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("009_coppercore_slow")	
		
	event.recipes.modern_industrialization.drill1(2, 3600)
        .itemIn("drilly:copper_drill", 0.12)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("5x minecraft:raw_copper", 0.32)
		.itemOut("modern_industrialization:raw_tin",  0.22)
		.itemOut("minecraft:raw_iron", 0.10)
		.itemOut("minecraft:coal", 0.11)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("002_coppercore_fast")
		
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:copper_drill", 0.17) // 0.12
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("5x minecraft:raw_copper", 0.36)
		.itemOut("modern_industrialization:raw_tin",  0.26)
		.itemOut("minecraft:raw_iron", 0.11)
		.itemOut("minecraft:coal", 0.12)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("010_coppercore_fast")	
		
	// copper/tin	

	event.recipes.modern_industrialization.drill1(1, 6000)
        .itemIn("drilly:copper_drill", 0.10)
		.itemIn("drilly:drill_group1", 0.00)
        .itemOut("2x modern_industrialization:raw_tin", 0.35)
        .itemOut("minecraft:raw_copper",  0.20)
        .itemOut("minecraft:raw_iron", 0.07)
		.itemOut("minecraft:coal", 0.08)
		.itemOut("2x minecraft:andesite", 0.12)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("003_tincore_slow")
		
	event.recipes.modern_industrialization.drill2(1, 6000)
        .itemIn("drilly:copper_drill", 0.15)
		.itemIn("drilly:drill_group1", 0.00)
        .itemOut("2x modern_industrialization:raw_tin", 0.39)
        .itemOut("minecraft:raw_copper",  0.24)
        .itemOut("minecraft:raw_iron", 0.08)
		.itemOut("minecraft:coal", 0.09)
		.itemOut("2x minecraft:andesite", 0.14) // +2
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("011_tincore_slow")	
		
	event.recipes.modern_industrialization.drill1(2, 3600)
        .itemIn("drilly:copper_drill", 0.13)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("2x modern_industrialization:raw_tin", 0.33)
		.itemOut("minecraft:raw_copper",  0.18)
		.itemOut("minecraft:raw_iron", 0.10)
		.itemOut("minecraft:coal", 0.11)
		.itemOut("2x minecraft:andesite", 0.10)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("004_tincore_fast")
		
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:copper_drill", 0.18)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("2x modern_industrialization:raw_tin", 0.37)
		.itemOut("minecraft:raw_copper",  0.22)
		.itemOut("minecraft:raw_iron", 0.11)
		.itemOut("minecraft:coal", 0.12)
		.itemOut("2x minecraft:andesite", 0.12) // +2
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("012_tincore_fast")	
		
	// copper/coal			

	event.recipes.modern_industrialization.drill1(1, 6000)
        .itemIn("drilly:copper_drill", 0.08)
		.itemIn("drilly:drill_group2", 0.00)
        .itemOut("5x minecraft:coal", 0.35)
        .itemOut("modern_industrialization:lignite_coal",  0.25)
        .itemOut("minecraft:raw_iron", 0.1)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("005_coalcore_slow")
		
	event.recipes.modern_industrialization.drill2(1, 6000)
        .itemIn("drilly:copper_drill", 0.13)
		.itemIn("drilly:drill_group2", 0.00)
        .itemOut("5x minecraft:coal", 0.39)
        .itemOut("modern_industrialization:lignite_coal",  0.28) // +3
        .itemOut("minecraft:raw_iron", 0.11)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("013_coalcore_slow")	
		
	event.recipes.modern_industrialization.drill1(2, 3600)
        .itemIn("drilly:copper_drill", 0.11)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("5x minecraft:coal", 0.32)
		.itemOut("modern_industrialization:lignite_coal",  0.2)
		.itemOut("minecraft:raw_iron", 0.1)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("006_coalcore_fast")
		
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:copper_drill", 0.16)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("5x minecraft:coal", 0.36)
		.itemOut("modern_industrialization:lignite_coal",  0.23)
		.itemOut("minecraft:raw_iron", 0.11)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("014_coalcore_fast")

	// copper/lignite	

	event.recipes.modern_industrialization.drill1(1, 6000)
        .itemIn("drilly:copper_drill", 0.07)
		.itemIn("drilly:drill_group2", 0.00)
        .itemOut("4x modern_industrialization:lignite_coal",  0.35)
		.itemOut("2x minecraft:andesite", 0.25)
        .itemOut("minecraft:raw_iron", 0.06)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")
		.id("007_lignitecore_slow")
		
	event.recipes.modern_industrialization.drill2(1, 6000)
        .itemIn("drilly:copper_drill", 0.12)
		.itemIn("drilly:drill_group2", 0.00)
        .itemOut("4x modern_industrialization:lignite_coal",  0.39)
		.itemOut("2x minecraft:andesite", 0.28) // +3
        .itemOut("minecraft:raw_iron", 0.07)
		.itemOut("drilly:tiny_tier1_experience", 0.5)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")
		.id("015_lignitecore_slow")	
		
	event.recipes.modern_industrialization.drill1(2, 3600)
        .itemIn("drilly:copper_drill", 0.10)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("4x modern_industrialization:lignite_coal",  0.32)
		.itemOut("2x minecraft:andesite", 0.22)
		.itemOut("minecraft:raw_iron", 0.05)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")	
		.id("008_lignitecore_fast")	

	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:copper_drill", 0.15)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("4x modern_industrialization:lignite_coal",  0.36)
		.itemOut("2x minecraft:andesite", 0.25)
		.itemOut("minecraft:raw_iron", 0.06)
		.itemOut("drilly:tiny_tier1_experience", 0.3)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")	
		.id("016_lignitecore_fast")		
		
	// TIER 2/bronze1	
		
	event.recipes.modern_industrialization.drill2(1, 6000)
        .itemIn("drilly:bronze_base_drill", 0.09)
		.itemIn("drilly:drill_group1", 0.00)
        .itemOut("9x minecraft:raw_copper", 0.35)
        .itemOut("2x modern_industrialization:raw_tin",  0.25)
        .itemOut("2x minecraft:raw_iron", 0.07)
		.itemOut("2x minecraft:coal", 0.08)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("017_coppercore_slow")
		
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.12)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("9x minecraft:raw_copper", 0.32)
		.itemOut("2x modern_industrialization:raw_tin",  0.22)
		.itemOut("2x minecraft:raw_iron", 0.10)
		.itemOut("2x minecraft:coal", 0.11)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("018_coppercore_fast")

	event.recipes.modern_industrialization.drill2(1, 6000)
        .itemIn("drilly:bronze_base_drill", 0.10)
		.itemIn("drilly:drill_group1", 0.00)
        .itemOut("4x modern_industrialization:raw_tin", 0.35)
        .itemOut("2x minecraft:raw_copper",  0.20)
        .itemOut("2x minecraft:raw_iron", 0.07)
		.itemOut("2x minecraft:coal", 0.08)
		.itemOut("4x minecraft:andesite", 0.12)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("019_tincore_slow")
		
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.13)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("4x modern_industrialization:raw_tin", 0.33)
		.itemOut("2x minecraft:raw_copper",  0.18)
		.itemOut("2x minecraft:raw_iron", 0.10)
		.itemOut("2x minecraft:coal", 0.11)
		.itemOut("4x minecraft:andesite", 0.10)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("020_tincore_fast")

	event.recipes.modern_industrialization.drill2(1, 6000)
        .itemIn("drilly:bronze_base_drill", 0.08)
		.itemIn("drilly:drill_group2", 0.00)
        .itemOut("9x minecraft:coal", 0.35)
        .itemOut("2x modern_industrialization:lignite_coal",  0.25)
        .itemOut("2x minecraft:raw_iron", 0.1)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("021_coalcore_slow")
		
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.11)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("9x minecraft:coal", 0.32)
		.itemOut("2x modern_industrialization:lignite_coal",  0.2)
		.itemOut("2x minecraft:raw_iron", 0.1)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("022_coalcore_fast")

	event.recipes.modern_industrialization.drill2(1, 6000)
        .itemIn("drilly:bronze_base_drill", 0.07)
		.itemIn("drilly:drill_group2", 0.00)
        .itemOut("8x modern_industrialization:lignite_coal",  0.35)
		.itemOut("3x minecraft:andesite", 0.25)
        .itemOut("2x minecraft:raw_iron", 0.06)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")
		.id("023_lignitecore_slow")
		
	event.recipes.modern_industrialization.drill2(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.10)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("8x modern_industrialization:lignite_coal",  0.32)
		.itemOut("3x minecraft:andesite", 0.22)
		.itemOut("2x minecraft:raw_iron", 0.05)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")	
		.id("024_lignitecore_fast")
		
	// TIER 3/bronze2	
	
	event.recipes.modern_industrialization.drill3(1, 6000)
        .itemIn("drilly:bronze_base_drill", 0.15) // +6
		.itemIn("drilly:drill_group1", 0.00)
        .itemOut("9x minecraft:raw_copper", 0.39) // +4
        .itemOut("2x modern_industrialization:raw_tin",  0.29) // +4
        .itemOut("2x minecraft:raw_iron", 0.08) // +1
		.itemOut("2x minecraft:coal", 0.09)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("025_coppercore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.18)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("9x minecraft:raw_copper", 0.36)
		.itemOut("2x modern_industrialization:raw_tin",  0.26)
		.itemOut("2x minecraft:raw_iron", 0.11)
		.itemOut("2x minecraft:coal", 0.12)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("026_coppercore_fast")

	event.recipes.modern_industrialization.drill3(1, 6000)
        .itemIn("drilly:bronze_base_drill", 0.16)
		.itemIn("drilly:drill_group1", 0.00)
        .itemOut("4x modern_industrialization:raw_tin", 0.39)
        .itemOut("2x minecraft:raw_copper",  0.26)
        .itemOut("2x minecraft:raw_iron", 0.08)
		.itemOut("2x minecraft:coal", 0.09)
		.itemOut("4x minecraft:andesite", 0.14)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("027_tincore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.16)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("4x modern_industrialization:raw_tin", 0.37)
		.itemOut("2x minecraft:raw_copper",  0.24)
		.itemOut("2x minecraft:raw_iron", 0.11)
		.itemOut("2x minecraft:coal", 0.12)
		.itemOut("4x minecraft:andesite", 0.12)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("028_tincore_fast")

	event.recipes.modern_industrialization.drill3(1, 6000)
        .itemIn("drilly:bronze_base_drill", 0.14)
		.itemIn("drilly:drill_group2", 0.00)
        .itemOut("9x minecraft:coal", 0.39)
        .itemOut("2x modern_industrialization:lignite_coal",  0.28)
        .itemOut("2x minecraft:raw_iron", 0.11)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("029_coalcore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.17)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("9x minecraft:coal", 0.36)
		.itemOut("2x modern_industrialization:lignite_coal",  0.28)
		.itemOut("2x minecraft:raw_iron", 0.11)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("030_coalcore_fast")

	event.recipes.modern_industrialization.drill3(1, 6000)
        .itemIn("drilly:bronze_base_drill", 0.13)
		.itemIn("drilly:drill_group2", 0.00)
        .itemOut("8x modern_industrialization:lignite_coal",  0.39)
		.itemOut("3x minecraft:andesite", 0.28)
        .itemOut("2x minecraft:raw_iron", 0.07)
		.itemOut("drilly:tiny_tier2_experience", 0.35)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")
		.id("031_lignitecore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_base_drill", 0.16)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("8x modern_industrialization:lignite_coal",  0.36)
		.itemOut("3x minecraft:andesite", 0.25)
		.itemOut("2x minecraft:raw_iron", 0.06)
		.itemOut("drilly:tiny_tier2_experience", 0.22)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")	
		.id("032_lignitecore_fast")
		
	// TIER 3/bronze2

	event.recipes.modern_industrialization.drill3(1, 6000)
        .itemIn("drilly:bronze_refined_drill", 0.15) // +6
		.itemIn("drilly:drill_group1", 0.00)
        .itemOut("15x minecraft:raw_copper", 0.35) // +6
        .itemOut("3x modern_industrialization:raw_tin",  0.25) // +1
        .itemOut("3x minecraft:raw_iron", 0.07)
		.itemOut("3x minecraft:coal", 0.08)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("033_coppercore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill", 0.12)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("15x minecraft:raw_copper", 0.32)
		.itemOut("3x modern_industrialization:raw_tin",  0.22)
		.itemOut("3x minecraft:raw_iron", 0.10)
		.itemOut("3x minecraft:coal", 0.11)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("034_coppercore_fast")

	event.recipes.modern_industrialization.drill3(1, 6000)
        .itemIn("drilly:bronze_refined_drill", 0.10)
		.itemIn("drilly:drill_group1", 0.00)
        .itemOut("7x modern_industrialization:raw_tin", 0.35)
        .itemOut("3x minecraft:raw_copper",  0.20)
        .itemOut("3x minecraft:raw_iron", 0.07)
		.itemOut("3x minecraft:coal", 0.08)
		.itemOut("5x minecraft:andesite", 0.12)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("035_tincore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill", 0.13)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("7x modern_industrialization:raw_tin", 0.33)
		.itemOut("3x minecraft:raw_copper",  0.18)
		.itemOut("3x minecraft:raw_iron", 0.10)
		.itemOut("3x minecraft:coal", 0.11)
		.itemOut("5x minecraft:andesite", 0.10)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("036_tincore_fast")

	event.recipes.modern_industrialization.drill3(1, 6000)
        .itemIn("drilly:bronze_refined_drill", 0.08)
		.itemIn("drilly:drill_group2", 0.00)
        .itemOut("15x minecraft:coal", 0.35)
        .itemOut("3x modern_industrialization:lignite_coal",  0.25)
        .itemOut("3x minecraft:raw_iron", 0.1)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("037_coalcore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill", 0.11)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("15x minecraft:coal", 0.32)
		.itemOut("3x modern_industrialization:lignite_coal",  0.2)
		.itemOut("3x minecraft:raw_iron", 0.1)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("038_coalcore_fast")

	event.recipes.modern_industrialization.drill3(1, 6000)
        .itemIn("drilly:bronze_refined_drill", 0.07)
		.itemIn("drilly:drill_group2", 0.00)
        .itemOut("12x modern_industrialization:lignite_coal",  0.35)
		.itemOut("4x minecraft:andesite", 0.25)
        .itemOut("3x minecraft:raw_iron", 0.06)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")
		.id("039_lignitecore_slow")
		
	event.recipes.modern_industrialization.drill3(2, 3600)
        .itemIn("drilly:bronze_refined_drill", 0.10)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("12x modern_industrialization:lignite_coal",  0.32)
		.itemOut("4x minecraft:andesite", 0.22)
		.itemOut("3x minecraft:raw_iron", 0.05)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")	
		.id("040_lignitecore_fast")	
		
	// tier 4/bronze2	
	
	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill", 0.15) // +6
		.itemIn("drilly:drill_group1", 0.00)
        .itemOut("15x minecraft:raw_copper", 0.39) // +6
        .itemOut("3x modern_industrialization:raw_tin",  0.29) // +1
        .itemOut("3x minecraft:raw_iron", 0.08)
		.itemOut("3x minecraft:coal", 0.09)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("041_coppercore_slow")
		
	event.recipes.modern_industrialization.drill3(4, 3600)
        .itemIn("drilly:bronze_refined_drill", 0.12)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("15x minecraft:raw_copper", 0.36)
		.itemOut("3x modern_industrialization:raw_tin",  0.26)
		.itemOut("3x minecraft:raw_iron", 0.11)
		.itemOut("3x minecraft:coal", 0.12)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("042_coppercore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill", 0.10)
		.itemIn("drilly:drill_group1", 0.00)
        .itemOut("7x modern_industrialization:raw_tin", 0.39)
        .itemOut("3x minecraft:raw_copper",  0.24)
        .itemOut("3x minecraft:raw_iron", 0.08)
		.itemOut("3x minecraft:coal", 0.09)
		.itemOut("5x minecraft:andesite", 0.14)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("043_tincore_slow")
		
	event.recipes.modern_industrialization.drill3(4, 3600)
        .itemIn("drilly:bronze_refined_drill", 0.13)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("7x modern_industrialization:raw_tin", 0.37)
		.itemOut("3x minecraft:raw_copper",  0.24)
		.itemOut("3x minecraft:raw_iron", 0.11)
		.itemOut("3x minecraft:coal", 0.12)
		.itemOut("5x minecraft:andesite", 0.12)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("044_tincore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill", 0.08)
		.itemIn("drilly:drill_group2", 0.00)
        .itemOut("15x minecraft:coal", 0.39)
        .itemOut("3x modern_industrialization:lignite_coal",  0.28)
        .itemOut("3x minecraft:raw_iron", 0.11)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("045_coalcore_slow")
		
	event.recipes.modern_industrialization.drill3(4, 3600)
        .itemIn("drilly:bronze_refined_drill", 0.11)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("15x minecraft:coal", 0.36)
		.itemOut("3x modern_industrialization:lignite_coal",  0.23)
		.itemOut("3x minecraft:raw_iron", 0.11)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("046_coalcore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill", 0.07)
		.itemIn("drilly:drill_group2", 0.00)
        .itemOut("12x modern_industrialization:lignite_coal",  0.39)
		.itemOut("4x minecraft:andesite", 0.28)
        .itemOut("3x minecraft:raw_iron", 0.07)
		.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")
		.id("047_lignitecore_slow")
		
	event.recipes.modern_industrialization.drill3(4, 3600)
        .itemIn("drilly:bronze_refined_drill", 0.10)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("12x modern_industrialization:lignite_coal",  0.36)
		.itemOut("4x minecraft:andesite", 0.25)
		.itemOut("3x minecraft:raw_iron", 0.06)
		.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")	
		.id("048_lignitecore_fast")	
		
	// tier4/steelmix

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill", 0.15) // +6
		.itemIn("drilly:drill_group1", 0.00)
        .itemOut("20x minecraft:raw_copper", 0.35) // +5
        .itemOut("4x modern_industrialization:raw_tin",  0.25) // +1
        .itemOut("4x minecraft:raw_iron", 0.07)
		.itemOut("4x minecraft:coal", 0.08)
		//.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("049_coppercore_slow")
		
	event.recipes.modern_industrialization.drill3(4, 3600)
        .itemIn("drilly:bronze_refined_drill", 0.12)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("20x minecraft:raw_copper", 0.32)
		.itemOut("4x modern_industrialization:raw_tin",  0.22)
		.itemOut("4x minecraft:raw_iron", 0.1)
		.itemOut("4x minecraft:coal", 0.11)
		//.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:copper_corenode", "below")
		.id("050_coppercore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill", 0.10)
		.itemIn("drilly:drill_group1", 0.00)
        .itemOut("9x modern_industrialization:raw_tin", 0.35)
        .itemOut("4x minecraft:raw_copper",  0.20)
        .itemOut("4x minecraft:raw_iron", 0.07)
		.itemOut("4x minecraft:coal", 0.08)
		.itemOut("6x minecraft:andesite", 0.12)
		//.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("051_tincore_slow")
		
	event.recipes.modern_industrialization.drill3(4, 3600)
        .itemIn("drilly:bronze_refined_drill", 0.13)
		.itemIn("drilly:drill_group1", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("9x modern_industrialization:raw_tin", 0.33)
		.itemOut("4x minecraft:raw_copper",  0.18)
		.itemOut("4x minecraft:raw_iron", 0.1)
		.itemOut("4x minecraft:coal", 0.11)
		.itemOut("6x minecraft:andesite", 0.1)
		//.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:tin_corenode", "below")
		.id("052_tincore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill", 0.08)
		.itemIn("drilly:drill_group2", 0.00)
        .itemOut("20x minecraft:coal", 0.35)
        .itemOut("4x modern_industrialization:lignite_coal",  0.25)
        .itemOut("4x minecraft:raw_iron", 0.1)
		//.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")
		.id("053_coalcore_slow")
		
	event.recipes.modern_industrialization.drill3(4, 3600)
        .itemIn("drilly:bronze_refined_drill", 0.11)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("20x minecraft:coal", 0.32)
		.itemOut("4x modern_industrialization:lignite_coal",  0.2)
		.itemOut("4x minecraft:raw_iron", 0.1)
		//.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:coal_corenode", "below")	
		.id("054_coalcore_fast")

	event.recipes.modern_industrialization.drill3(2, 6000)
        .itemIn("drilly:bronze_refined_drill", 0.07)
		.itemIn("drilly:drill_group2", 0.00)
        .itemOut("15x modern_industrialization:lignite_coal",  0.35)
		.itemOut("5x minecraft:andesite", 0.25)
        .itemOut("4x minecraft:raw_iron", 0.06)
		//.itemOut("drilly:tiny_tier3_experience", 0.28)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")
		.id("055_lignitecore_slow")
		
	event.recipes.modern_industrialization.drill3(4, 3600)
        .itemIn("drilly:bronze_refined_drill", 0.10)
		.itemIn("drilly:drill_group2", 0.00)
		.itemIn("minecraft:lever", 0.00)
		.itemOut("15x modern_industrialization:lignite_coal",  0.32)
		.itemOut("5x minecraft:andesite", 0.22)
		.itemOut("4x minecraft:raw_iron", 0.05)
		//.itemOut("drilly:tiny_tier3_experience", 0.18)
        .dimension("overworld")
        .adjacentBlock("geggy:lignite_corenode", "below")	
		.id("056_lignitecore_fast")	
		
	////////////////////////////////////////	bucket = 1000mb = 1/20tick = 16.6 min autonomy 1 bucket/ 2000 max tank
	// 25 sec, 1000 steam bucket max recipe, 500 ticks
	event.recipes.modern_industrialization.proto(2, 1000)
        .itemIn("2x modern_industrialization:coal_tiny_dust")
		.fluidIn("minecraft:water", 50)
		.fluidOut("modern_industrialization:steam", 4050)
		.id("protoboy")		
	

	legacy_quarry_recipes(event)
	
})	