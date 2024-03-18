ServerEvents.recipes(event => {
	
	event.remove([
		"byg:gold_ingot_from_smelting_brimstone_nether_gold_ore",
	    "byg:gold_ingot_from_smelting_blue_nether_gold_ore",
		"byg:gold_ingot_from_blasting_brimstone_nether_gold_ore",
		"byg:gold_ingot_from_blasting_blue_nether_gold_ore",
		"betternether:paper",
		"betterend:paper",
		"betterend:sulphur_gunpowder",
		"bclib:tag_bucket",
		"byg:gold_ingot_from_smelting_blue_nether_gold_ore",
		"betternether:glass_bottle",
		"betternether:shield",
		"bclib:tag_shield",
		"bclib:tag_hopper",
		"betternether:sugar",
		"betterend:sugar_from_root"
	])
	
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 4,
		duration: 200,
		item_inputs: [
			{item: "betternether:nether_reed_stem", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:sugar_cane_dust", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 4,
		duration: 200,
		item_inputs: [
			{item: "betterend:amber_root_raw", amount: 3}
		],
		item_outputs: [	
			{item: "geggy:sugar_cane_dust", amount: 1}
		]
	})
	
})


ServerEvents.tags('block', event => {
  event.remove('minecraft:gold_ores', 'byg:blue_nether_gold_ore')
  event.remove('minecraft:gold_ores', 'byg:brimstone_nether_gold_ore')
  event.remove('c:gold_ores', 'byg:blue_nether_gold_ore')
  event.remove('c:gold_ores', 'byg:brimstone_nether_gold_ore')
  event.remove('c:ores/gold_ores', 'byg:blue_nether_gold_ore')
  event.remove('c:ores/gold_ores', 'byg:brimstone_nether_gold_ore')

})

ServerEvents.tags('item', event => {
  event.remove('minecraft:gold_ores', 'byg:blue_nether_gold_ore')
  event.remove('minecraft:gold_ores', 'byg:brimstone_nether_gold_ore')
  event.remove('c:gold_ores', 'byg:blue_nether_gold_ore')
  event.remove('c:gold_ores', 'byg:brimstone_nether_gold_ore')

})