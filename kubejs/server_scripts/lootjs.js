LootJS.modifiers(event => {
    //event.enableLogging();

    // blocks
    event.addLootTypeModifier(LootType.BLOCK).replaceLoot("minecraft:raw_gold", LootEntry.of("geghilarity:precious_nugget").limitCount([1, 8]))
        .removeLoot("artifacts:everlasting_beef")
		.removeLoot("artifacts:night_vision_goggles")
        .removeLoot("minecraft:iron_horse_armor")
        .removeLoot("minecraft:golden_horse_armor")
        .removeLoot("minecraft:diamond_horse_armor")
        .removeLoot("minecraft:totem_of_undying")
        .replaceLoot("minecraft:gold_nugget", "geghilarity:precious_nugget")
        .replaceLoot("minecraft:gold_ingot", LootEntry.of("geghilarity:precious_nugget").limitCount([1, 6]))
        .replaceLoot("minecraft:iron_ingot", LootEntry.of("minecraft:iron_nugget").limitCount([1, 8]))
        .replaceLoot("minecraft:bucket", "kibe:wooden_bucket")
        .replaceLoot("minecraft:water_bucket", "kibe:water_wooden_bucket")
        .replaceLoot("minecraft:lava_bucket", "kibe:wooden_bucket")
        .replaceLoot("minecraft:powder_snow_bucket", "kibe:wooden_bucket")
        .replaceLoot("minecraft:milk_bucket", "kibe:water_wooden_bucket")
        .replaceLoot("minecraft:gold_ore", "geggy:precious_ore")
        .replaceLoot("minecraft:deepslate_gold_ore", "geggy:deepslate_precious_ore");
		
	const diamondstandard = LootEntry.of("minecraft:diamond_ore").when((c) =>
        c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
    );	
		
	event
        .addBlockLootModifier("minecraft:diamond_ore")
        .removeLoot(Ingredient.all)
        .addAlternativesLoot(
			diamondstandard,
            LootEntry.of("minecraft:diamond").when((c) => c.randomChance(0.3)),
            LootEntry.of("geggy:diamond_shards").limitCount([2, 6])
		);
	
	const diamondDeep = LootEntry.of("minecraft:deepslate_diamond_ore").when((c) =>
        c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
    );	
	
	event
        .addBlockLootModifier("minecraft:deepslate_diamond_ore")
        .removeLoot(Ingredient.all)
        .addAlternativesLoot(
			diamondDeep,
            LootEntry.of("minecraft:diamond").when((c) => c.randomChance(0.35)),
            LootEntry.of("geggy:diamond_shards").limitCount([2, 6])
		);	

    // chests
    event.addLootTypeModifier(LootType.CHEST)
        .removeLoot("artifacts:everlasting_beef")
		.removeLoot("artifacts:night_vision_goggles")
		.removeLoot("minecraft:totem_of_undying")
        .removeLoot("minecraft:ender_chest")
        .replaceLoot("minecraft:iron_horse_armor", "create:andesite_alloy")
        .replaceLoot("minecraft:golden_horse_armor", "create:andesite_alloy")
        .replaceLoot("minecraft:diamond_horse_armor", "create:andesite_alloy")
        .replaceLoot("minecraft:diamond_ore", "supplementaries:flax_seeds")
        .replaceLoot("minecraft:deepslate_diamond_ore", "supplementaries:flax_seeds")
		.replaceLoot("minecraft:wooden_pickaxe", "supplementaries:flax_seeds")
		.replaceLoot("minecraft:stone_pickaxe", "supplementaries:flax_seeds")
        .replaceLoot("minecraft:raw_gold_block", "modern_industrialization:coal_dust")
        .replaceLoot("minecraft:raw_gold", "modern_industrialization:coal_dust")
        .replaceLoot("minecraft:gold_nugget", "geghilarity:precious_nugget")
        .replaceLoot("minecraft:gold_ingot", LootEntry.of("geghilarity:precious_nugget").limitCount([1, 4]))
        .replaceLoot("minecraft:iron_ingot", LootEntry.of("minecraft:iron_nugget").limitCount([1, 6]))
        .replaceLoot("minecraft:bucket", "kibe:wooden_bucket")
        .replaceLoot("minecraft:water_bucket", "kibe:water_wooden_bucket")
        .replaceLoot("minecraft:lava_bucket", "kibe:wooden_bucket")
        .replaceLoot("minecraft:powder_snow_bucket", "kibe:water_wooden_bucket")
        .replaceLoot("minecraft:milk_bucket", "kibe:water_wooden_bucket")
        .replaceLoot("minecraft:diamond", "minecraft:coal")
        .replaceLoot("minecraft:gold_block", "create:andesite_alloy_block")
        .replaceLoot("minecraft:diamond_block", "minecraft:coal_block")
        .replaceLoot("minecraft:iron_block", "minecraft:obsidian")
        .replaceLoot("minecraft:raw_iron_block", "minecraft:obsidian")
        .replaceLoot("minecraft:gold_ore", "geggy:precious_ore")
        .replaceLoot("minecraft:deepslate_gold_ore", "geggy:deepslate_precious_ore")
        .replaceLoot("minecraft:glass", "minecraft:glass_bottle")
		.replaceLoot("minecraft:torch", "geggy:unlit_torch");

    // entities
    event.addLootTypeModifier(LootType.ENTITY)
        .removeLoot("artifacts:everlasting_beef")
		.removeLoot("artifacts:night_vision_goggles")
        .removeLoot("minecraft:iron_horse_armor")
        .removeLoot("minecraft:golden_horse_armor")
        .removeLoot("minecraft:diamond_horse_armor")
        .removeLoot("minecraft:totem_of_undying")
        .removeLoot("minecraft:diamond_ore")
        .removeLoot("minecraft:deepslate_diamond_ore")
        .replaceLoot("minecraft:raw_gold", "modern_industrialization:coal_dust")
        .replaceLoot("minecraft:gold_nugget", "geghilarity:precious_nugget")
        .replaceLoot("minecraft:gold_ingot", LootEntry.of("geghilarity:precious_nugget").limitCount([1, 3]))
        .replaceLoot("minecraft:iron_ingot", LootEntry.of("minecraft:iron_nugget").limitCount([1, 4]))
        .replaceLoot("minecraft:bucket", "kibe:wooden_bucket")
        .replaceLoot("minecraft:water_bucket", "kibe:water_wooden_bucket")
        .replaceLoot("minecraft:lava_bucket", "kibe:wooden_bucket")
        .replaceLoot("minecraft:powder_snow_bucket", "kibe:wooden_bucket")
        .replaceLoot("minecraft:milk_bucket", "kibe:water_wooden_bucket")
        .replaceLoot("minecraft:diamond", "minecraft:coal")
        .replaceLoot("minecraft:gold_block", "minecraft:coal_block")
        .replaceLoot("minecraft:diamond_block", "minecraft:coal_block")
        .replaceLoot("minecraft:iron_block", "minecraft:obsidian")
        .replaceLoot("minecraft:glass", "minecraft:glass_bottle");
});
