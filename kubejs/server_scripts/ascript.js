// priority: 0

//settings.logAddedRecipes = true
//settings.logRemovedRecipes = true
//settings.logSkippedRecipes = false
//settings.logErroringRecipes = true


console.info("MI & Create recipes.")


function fluid_volume_to_fabric(volume) {
	return volume * 81
}

function wired_redstone(event) {
	event.custom({
			"type": "create:mixing",
			"ingredients": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"item": "minecraft:iron_ingot"}],
			//"ingredients": [{count: 4, "item": "minecraft:redstone"},{"item": "minecraft:iron_ingot"}],
			"results": [{"item": "wiredredstone:redstone_alloy_ingot"}]
	})
	//event.recipes.createMixing("wiredredstone:redstone_alloy_ingot", [
	//	Item.of("minecraft:redstone", 4),
	//	"minecraft:iron_ingot"
	//])

	event.remove({type: "wiredredstone:redstone_assembler_shaped"})
	event.remove({type: "wiredredstone:redstone_assembler_shapeless"})
	

	event.custom({ 
		type: "modern_industrialization:wiremill",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "wiredredstone:redstone_alloy_ingot"}
		],
		item_outputs: [
			{item: "wiredredstone:red_alloy_wire", amount: 4}
		]
	})

	function dyed_wire(color) {
		event.custom({
			"type": "create:compacting",
			"ingredients": [{"item": "wiredredstone:red_alloy_wire"},{"tag": `c:${color}_dyes`}],
			"results": [{"item": `wiredredstone:${color}_insulated_wire`}]
		})
		//event.recipes.createCompacting(`wiredredstone:${color}_insulated_wire`,["wiredredstone:red_alloy_wire", `#c:${color}_dyes`])
	}
	
	function dyed_bundled_cable(color) {
		event.custom({
			"type": "create:compacting",
			"ingredients": [{"item": "wiredredstone:bundled_cable"},{"tag": `c:${color}_dyes`}],
			"results": [{"item": `wiredredstone:${color}_bundled_cable`}]
		})
		//event.recipes.createCompacting(`wiredredstone:${color}_bundled_cable`, ["wiredredstone:bundled_cable", `#c:${color}_dyes`])
	}

	
	event.replaceInput({mod: "wiredredstone", output: "wiredredstone:redstone_assembler"}, "minecraft:crafting_table", "modern_industrialization:basic_machine_hull")

	dyed_wire("white")
	dyed_wire("orange")
	dyed_wire("magenta")
	dyed_wire("light_blue")
	dyed_wire("yellow")
	dyed_wire("lime")
	dyed_wire("pink")
	dyed_wire("gray")
	dyed_wire("light_gray")
	dyed_wire("cyan")
	dyed_wire("purple")
	dyed_wire("blue")
	dyed_wire("brown")
	dyed_wire("green")
	dyed_wire("red")
	dyed_wire("black")

	dyed_bundled_cable("white")
	dyed_bundled_cable("orange")
	dyed_bundled_cable("magenta")
	dyed_bundled_cable("light_blue")
	dyed_bundled_cable("yellow")
	dyed_bundled_cable("lime")
	dyed_bundled_cable("pink")
	dyed_bundled_cable("gray")
	dyed_bundled_cable("light_gray")
	dyed_bundled_cable("cyan")
	dyed_bundled_cable("purple")
	dyed_bundled_cable("blue")
	dyed_bundled_cable("brown")
	dyed_bundled_cable("green")
	dyed_bundled_cable("red")
	dyed_bundled_cable("black")

	event.custom({ 
		type: "modern_industrialization:packer",
		eu: 2,
		duration: 200,
		item_inputs: [
			{item: "wiredredstone:red_alloy_wire", amount: 5},
			{item: "minecraft:string", amount: 4}
		],
		item_outputs: [
			{item: "wiredredstone:bundled_cable"}
		]
	})

	event.custom({
			"type": "create:pressing",
			"ingredients": [{"item": "minecraft:smooth_stone"}],
			"results": [{"item": "wiredredstone:stone_plate"},{"item": "wiredredstone:stone_plate"}]
		})
	//event.recipes.createPressing(Item.of("wiredredstone:stone_plate", 2), ["minecraft:smooth_stone"])
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "minecraft:smooth_stone"}
		],
		item_outputs: [
			{item: "wiredredstone:stone_plate", amount: 2}
		]
	})

	event.shapeless("wiredredstone:redstone_wire_plate", ["minecraft:redstone", "wiredredstone:stone_plate"])

	let wired_redstone_shaped_dict = {
		R: "minecraft:redstone",
		P: "wiredredstone:redstone_wire_plate",
		D: "wiredredstone:redstone_delay_line",
		C: "wiredredstone:redstone_cathode",
		A: "wiredredstone:redstone_anode",
		S: "wiredredstone:stone_plate",
	}
	
	event.shaped("wiredredstone:redstone_delay_line", [
		" RP",
		"RP ",
		"P  ",
	],
	{
		R: "minecraft:redstone",
		P: "wiredredstone:redstone_wire_plate",
	})

	event.shaped("wiredredstone:redstone_cathode", [
		"RR ",
		"RR ",
		"SP ",
	], 
	{
		R: "minecraft:redstone",
		P: "wiredredstone:redstone_wire_plate",
		S: "wiredredstone:stone_plate",
	})

	event.shaped("wiredredstone:redstone_anode", [
		"RRR",
		"SPS",
		"   ",
	],
	{
		R: "minecraft:redstone",
		P: "wiredredstone:redstone_wire_plate",
		S: "wiredredstone:stone_plate",
	})

	event.shapeless("wiredredstone:redstone_inverting_cathode", ["minecraft:redstone_torch", "wiredredstone:redstone_cathode"])

	event.shaped("wiredredstone:gate_diode", [
		"SAS",
		"SCS",
		"SPS"
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		C: "wiredredstone:redstone_cathode",
		A: "wiredredstone:redstone_anode",
		S: "wiredredstone:stone_plate",
	})

	event.shaped("wiredredstone:gate_and", [
		"AIA",
		"III",
		"SPS",
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		A: "wiredredstone:redstone_anode",
		S: "wiredredstone:stone_plate",
		I: "wiredredstone:redstone_inverting_cathode"
	})

	event.shaped("wiredredstone:gate_or", [
		"SIS",
		"PIP",
		"SPS",
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		S: "wiredredstone:stone_plate",
		I: "wiredredstone:redstone_inverting_cathode"
	})

	event.shaped("wiredredstone:gate_nand", [
		"AAA",
		"III",
		"SPS"
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		A: "wiredredstone:redstone_anode",
		S: "wiredredstone:stone_plate",
		I: "wiredredstone:redstone_inverting_cathode"
	})

	event.shaped("wiredredstone:gate_nor", [
		"SAS",
		"PIP",
		"SPS"
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		A: "wiredredstone:redstone_anode",
		S: "wiredredstone:stone_plate",
		I: "wiredredstone:redstone_inverting_cathode"
	})

	event.shaped("wiredredstone:gate_not", [
		"SAS",
		"SIS",
		"SPS",
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		A: "wiredredstone:redstone_anode",
		S: "wiredredstone:stone_plate",
		I: "wiredredstone:redstone_inverting_cathode"
	})

	event.shaped("wiredredstone:gate_repeater", [
		"DID",
		"PIP",
		"SPP",
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		D: "wiredredstone:redstone_delay_line",
		S: "wiredredstone:stone_plate",
		I: "wiredredstone:redstone_inverting_cathode"
	})

	event.shaped("wiredredstone:gate_rs_latch", [
		"AIP",
		"PPP",
		"PIA",
	],
	{
		P: "wiredredstone:redstone_wire_plate",
		A: "wiredredstone:redstone_anode",
		I: "wiredredstone:redstone_inverting_cathode"
	})


}


	/*
	event.recipes.createSplashing("modern_industrialization:bronze_drill", ["kubejs:dirty_bronze_drill"])
	event.recipes.createSplashing("modern_industrialization:copper_drill", ["kubejs:dirty_copper_drill"])
	event.recipes.createSplashing("modern_industrialization:steel_drill", ["kubejs:dirty_steel_drill"])
	event.recipes.createSplashing("modern_industrialization:stainless_steel_drill", ["kubejs:dirty_stainless_steel_drill"])
	event.recipes.createSplashing("modern_industrialization:aluminum_drill", ["kubejs:dirty_aluminum_drill"])
	event.recipes.createSplashing("modern_industrialization:titanium_drill", ["kubejs:dirty_titanium_drill"])
	event.recipes.createSplashing("kubejs:mob_slaughtering_drill", ["kubejs:dirty_mob_slaughtering_drill"])
	event.recipes.createSplashing("kubejs:andesite_alloy_drill", ["kubejs:dirty_andesite_alloy_drill"])
	event.recipes.createSplashing("modern_industrialization:gold_drill", ["kubejs:dirty_gold_drill"])
	*/

	


function qol_recipes(event) {
	event.custom({
			"type": "create:milling",
			"processingTime": 100,
			"ingredients": [{"tag": "minecraft:leaves"}],
			"results": [{"item": "minecraft:green_dye"}]
	})
	//event.recipes.createMilling("minecraft:green_dye", ["#minecraft:leaves"])
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": "create:dough"},{"item": "minecraft:green_dye"}],
		"results": [{"item": "minecraft:slime_ball"}]
	})
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": "create:dough"},{"item": "minecraft:lime_dye"}],
		"results": [{"item": "minecraft:slime_ball"}]
	})

	event.remove({id: "kibe:golden_lasso"})
	//event.remove({output: "kibe:golden_lasso"})
	
	event.shaped("2x kibe:golden_lasso", [
		"   ",
		"RLR",
		"   "
	], {
		R: "modern_industrialization:gold_rod",
		L: "minecraft:lead"
	})

	event.remove({id: "kibe:diamond_kibe"})
	//event.remove({output: "kibe:diamond_kibe"})
	event.remove({id: "kibe:cursed_kibe"})
	//event.remove({output: "kibe:cursed_kibe"})
	event.remove({id: "timeinabottle:time_in_a_bottle"})
	//event.remove({output: "timeinabottle:time_in_a_bottle"})
	event.shaped("kibe:diamond_kibe", [
		"DGD",
		"GDG",
		"DGD"
	], {
		D: "minecraft:diamond",
		G: "kibe:golden_kibe"
	})
	
	event.custom({
		"type": "create:mechanical_crafting",
		"key": {"K":{"item": "kibe:kibe"}, "N" :{"item": "minecraft:nether_star"}},
		"pattern": [" K ", "KNK", " K "],
		"result": {"item": "kibe:cursed_kibe"}
	})

	/*
	event.recipes.createMechanicalCrafting("kibe:cursed_kibe", [
		" K ",
		"KNK",
		" K "
	], {
		K: "kibe:kibe",
		N: "minecraft:nether_star"
	})
	*/	

	const gold_tier_kibes = [
		"kibe:glider_left_wing",
		"kibe:glider_right_wing",
		"kibe:magnet",
		"kibe:slime_boots",
		"kibe:slime_sling",
		//"timeinabottle:time_in_a_bottle",
		"kibe:xp_shower",
		"kibe:xp_drain",
		"kibe:escape_rope",
		"kibe:heater",
		"kibe:dehumidifier"
	]

	const diamond_tier_kibes = [
		"kibe:water_ring",
		"kibe:magma_ring",
		"kibe:light_ring",
	]

	const cursed_tier_kibes = [
		"kibe:angel_ring"
	]

	function kibe_stonecutting(result, kibe) {
		event.remove({type: "minecraft:crafting_shaped", output: result })
		event.stonecutting(result, kibe)
	}

	gold_tier_kibes.forEach(result => {
		kibe_stonecutting(result, "kibe:golden_kibe")
	})
	diamond_tier_kibes.forEach(result => {
		kibe_stonecutting(result, "kibe:diamond_kibe")
	})
	cursed_tier_kibes.forEach(result => {
		kibe_stonecutting(result, "kibe:cursed_kibe")
	})

//FUCK YOU

	event.custom({
		type: "create:mixing",
		"heatRequirement": "heated",
		ingredients: [
			//Item.of("minecraft:rotten_flesh", 20),
			{"item": "minecraft:rotten_flesh"},{"item": "minecraft:rotten_flesh"},{"item": "minecraft:rotten_flesh"},{"item": "minecraft:rotten_flesh"},{"item": "minecraft:rotten_flesh"},
			//{count:20, "item": "minecraft:rotten_flesh"},
			{amount: 40500, "fluid":"minecraft:water"}
			//Ingredient.of(Fluid.of("minecraft:water", fluid_volume_to_fabric(100))).toJson()
		],
		results: [{
			"item":"minecraft:leather"
			//Item.of("minecraft:leather").toResultJson()
		}],
		processingTime: 1200
	})
	
	event.remove([
		"dankstorage:1",
		"dankstorage:6",
		"dankstorage:7",
	    "dankstorage:5_to_6",
		"dankstorage:6_to_7"
	])

	// event.replaceInput({type: "minecraft:crafting_shaped", output: "travelstaff:travel_staff"}, "minecraft:iron_ingot", "modern_industrialization:iron_rod")
	// event.replaceInput({type: "minecraft:crafting_shaped", output: "travelstaff:travel_anchor"}, "minecraft:iron_ingot", "modern_industrialization:iron_plate")
	// event.replaceInput({type: "minecraft:crafting_shaped", output: "travelstaff:travel_anchor"}, "minecraft:iron_block", "modern_industrialization:iron_large_plate")
	
	event.shaped("dankstorage:dank_1", [
		" B ",
		"BAB",
		"CB "
	], {
		A: "extended_drawers:single_drawer",
		B: "modern_industrialization:steel_plate",
		C: "modern_industrialization:capacitor"
	})
	
	event.custom({
		"type": "create:mechanical_crafting",
		"key": {"C":{"item": "minecraft:crying_obsidian"}, "D" :{"item": "dankstorage:dank_5"}},
		"pattern": ["CCC", "CDC", "CCC"],
		"result": {"item": "dankstorage:dank_6"}
	})
	event.custom({
		"type": "create:mechanical_crafting",
		"key": {"C":{"item": "minecraft:crying_obsidian"}, "S" :{"item": "minecraft:stick"}},
		"pattern": ["CCC", "CSC", "CCC"],
		"result": {"item": "dankstorage:5_to_6"}
	})
	event.custom({
		"type": "create:mechanical_crafting",
		"key": {"N":{"item": "minecraft:nether_star"}, "D" :{"item": "dankstorage:dank_6"}},
		"pattern": ["NNN", "NDN", "NNN"],
		"result": {"item": "dankstorage:dank_7"}
	})
	event.custom({
		"type": "create:mechanical_crafting",
		"key": {"N":{"item": "minecraft:nether_star"}, "S" :{"item": "minecraft:stick"}},
		"pattern": ["NNN", "NSN", "NNN"],
		"result": {"item": "dankstorage:6_to_7"}
	})

	/*
	event.recipes.createMechanicalCrafting("dankstorage:dank_6", [
		"CCC",
		"CDC",
		"CCC"
	], {
		C: "minecraft:crying_obsidian",
		D: "dankstorage:dank_5"
	})

	event.recipes.createMechanicalCrafting("dankstorage:5_to_6", [
		"CCC",
		"CSC",
		"CCC"
	], {
		C: "minecraft:crying_obsidian",
		S: "minecraft:stick"
	})
	
	event.recipes.createMechanicalCrafting("dankstorage:dank_7", [
		"NNN",
		"NDN",
		"NNN"
	], {
		N: "minecraft:nether_star",
		D: "dankstorage:dank_6"
	})

	event.recipes.createMechanicalCrafting("dankstorage:6_to_7", [
		"NNN",
		"NSN",
		"NNN"
	], {
		N: "minecraft:nether_star",
		S: "minecraft:stick"
	})
	*/

	event.remove({type: "minecraft:crafting_shaped", output: "ironchests:iron_dolly"})
	event.remove({type: "minecraft:crafting_shaped", output: "ironchests:diamond_dolly"})

	event.replaceInput({mod: "ironchests"}, "minecraft:iron_ingot", "modern_industrialization:iron_plate")
	event.replaceInput({mod: "ironchests"}, "minecraft:copper_ingot", "modern_industrialization:copper_plate")
	event.replaceInput({mod: "ironchests"}, "minecraft:gold_ingot", "modern_industrialization:gold_plate")
	event.replaceInput({mod: "ironchests"}, "minecraft:diamond", "modern_industrialization:diamond_plate")

	event.shaped("ironchests:iron_dolly", [
		"R  ",
		"R  ",
		"PRR"
	], {
		R: "modern_industrialization:iron_rod",
		P: "modern_industrialization:iron_plate"
	})

	event.shaped("ironchests:diamond_dolly", [
		"P  ",
		"P  ",
		"LPP"
	], {
		L: "modern_industrialization:iron_large_plate",
		P: "modern_industrialization:diamond_plate"
	})

	event.remove({id: "kibe:redstone_timer"})
	//event.remove({output: "kibe:redstone_timer"})
	event.shaped("kibe:redstone_timer", [
		"SRS",
		"RCR",
		"SRS"
	],
	{
		R: "minecraft:redstone",
		C: "create:cuckoo_clock",
		S: "minecraft:stone"
	})

	// TO FIX check 1.18
	event.replaceInput({mod: "kibe", output: "kibe:heater"}, "minecraft:blaze_powder", "modern_industrialization:copper_wire")
	event.replaceInput({mod: "kibe", output: "kibe:dehumidifier"}, "minecraft:sponge", "modern_industrialization:copper_wire")



	// check 1.18 only crafing table
	event.replaceInput({mod: "buildinggadgets", output: "buildinggadgets:template_manager"}, "minecraft:gold_ingot", "modern_industrialization:gold_plate")
	event.replaceInput({mod: "buildinggadgets", output: "buildinggadgets:template_manager"}, "minecraft:lapis_lazuli", "modern_industrialization:basic_machine_hull")
	event.replaceInput({mod: "buildinggadgets", output: "buildinggadgets:template_manager"}, "minecraft:emerald", "modern_industrialization:emerald_plate")

	event.replaceInput({mod: "extended_drawers"}, "minecraft:cobblestone", "wiredredstone:stone_plate")
	event.replaceInput({mod: "extended_drawers", output: "extended_drawers:lock"}, "minecraft:gold_ingot", "modern_industrialization:gold_plate")
	event.replaceInput({mod: "extended_drawers", output: "extended_drawers:t2_upgrade"}, "minecraft:stick", "modern_industrialization:iron_rod")
	event.replaceInput({mod: "extended_drawers", output: "extended_drawers:t4_upgrade"}, "minecraft:end_rod", "modern_industrialization:titanium_rod")
	event.replaceInput({mod: "extended_drawers", output: "extended_drawers:t4_upgrade"}, "minecraft:shulker_box", "modern_industrialization:titanium_barrel")

	// TO FIX SCANNABLE BROKEN 1.19
	//event.replaceInput({output: "scannable:scanner"}, "minecraft:quartz", "modern_industrialization:lead_ingot")
	//event.remove({output: "scannable:blank_module"})

	//event.recipes.createCompacting("scannable:blank_module", ["minecraft:green_dye", "modern_industrialization:gold_plate"])
}


//onEvent("recipes", event => {
ServerEvents.recipes(event => {	

	qol_recipes(event)
	wired_redstone(event)

	// MISC SETUP
	// replace create sheets -> MI plates
	// remove LV plates recipes from MI
	// check 1.18 plates from ingot in create pressing?
	//event.remove({id: "create:iron_sheet"})
	event.remove({mod: "create", output: "create:iron_sheet"})
	event.replaceInput({mod: "create"}, "create:iron_sheet", "modern_industrialization:iron_plate")
	event.replaceOutput({mod: "create"}, "create:iron_sheet", "modern_industrialization:iron_plate")

	//event.remove({id: "create:copper_sheet"})
	event.remove({mod: "create", output: "create:copper_sheet"})
	event.replaceInput({mod: "create"}, "create:copper_sheet", "modern_industrialization:copper_plate")
	event.replaceOutput({mod: "create"}, "create:copper_sheet", "modern_industrialization:copper_plate")
	event.replaceOutput({id: "create:copper_ingot"}, "create:copper_sheet", "modern_industrialization:copper_plate")
	event.replaceOutput({id: "create:pressing/copper_ingot"}, "create:copper_sheet", "modern_industrialization:copper_plate")
	event.replaceOutput({type: "create:pressing"}, "create:copper_sheet", "modern_industrialization:copper_plate")

	//event.remove({id: "create:golden_sheet"})
	event.remove({mod: "create", output: "create:golden_sheet"})
	event.replaceInput({mod: "create"}, "create:golden_sheet", "modern_industrialization:gold_plate")
	event.replaceOutput({mod: "create"}, "create:golden_sheet", "modern_industrialization:gold_plate")
	
	//added TO FIX NOT WARNING, createaddition internal recipes not modified
	event.replaceInput({mod: "createaddition"}, "create:iron_sheet", "modern_industrialization:iron_plate")
	event.replaceInput({mod: "createaddition"}, "create:copper_sheet", "modern_industrialization:copper_plate")
	event.replaceInput({mod: "createaddition"}, "create:golden_sheet", "modern_industrialization:gold_plate")
	event.replaceInput({type: "create:sequenced_assembly"}, "create:iron_sheet", "modern_industrialization:iron_plate")
	event.replaceInput({type: "create:sequenced_assembly"}, "create:copper_sheet", "modern_industrialization:copper_plate")
	event.replaceInput({type: "create:sequenced_assembly"}, "create:golden_sheet", "modern_industrialization:gold_plate")

	// added
	event.custom({
		"type": "create:pressing",
		"ingredients": [{ "item": "minecraft:copper_ingot"}],
		"results": [{"item": "modern_industrialization:copper_plate"}]
	})
	event.custom({
		"type": "create:pressing",
		"ingredients": [{ "item": "modern_industrialization:tin_ingot"}],
		"results": [{"item": "modern_industrialization:tin_plate"}]
	})
	event.custom({
		"type": "create:pressing",
		"ingredients": [{"item": "minecraft:gold_ingot"}],
		"results": [{"item": "modern_industrialization:gold_plate"}]
	})
	event.custom({
		"type": "create:pressing",
		"ingredients": [{"item": "modern_industrialization:bronze_ingot"}],
		"results": [{"item": "modern_industrialization:bronze_plate"}]
	})
		

	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 2,
		duration: 100,
		item_inputs: [
			{item: "modern_industrialization:iron_plate", amount: 1}
		],
		item_outputs: [
			{item: "geggy:iron_curved_plate", amount: 1}
		]
	})
	
	event.custom({
		"type": "create:pressing",
		"ingredients": [{"item": "modern_industrialization:copper_plate"}],
		"results": [{"item": "modern_industrialization:copper_curved_plate"}]
	})
	event.custom({
		"type": "create:pressing",
		"ingredients": [{"item": "modern_industrialization:gold_plate"}],
		"results": [{"item": "modern_industrialization:gold_curved_plate"}]
	})
	event.custom({
		"type": "create:pressing",
		"ingredients": [{"item": "modern_industrialization:bronze_plate"}],
		"results": [{"item": "modern_industrialization:bronze_curved_plate"}]
	})
	
	event.custom({
		"type": "create:pressing",
		"ingredients": [{ "item": "modern_industrialization:copper_curved_plate"}],
		"results": [{"item": "modern_industrialization:copper_plate"}]
	})
	event.custom({
		"type": "create:pressing",
		"ingredients": [{"item": "modern_industrialization:gold_curved_plate"}],
		"results": [{"item": "modern_industrialization:gold_plate"}]
	})
	event.custom({
		"type": "create:pressing",
		"ingredients": [{"item": "modern_industrialization:bronze_curved_plate"}],
		"results": [{"item": "modern_industrialization:bronze_plate"}]
	})
	
	event.custom({
		"type": "create:pressing",
		"ingredients": [{"item": "modern_industrialization:lead_ingot"}],
		"results": [{"item": "modern_industrialization:lead_plate"}]
	})
	
	/*
	event.recipes.createPressing("modern_industrialization:copper_curved_plate", "modern_industrialization:copper_plate")
	event.recipes.createPressing("modern_industrialization:gold_curved_plate", "modern_industrialization:gold_plate")
	event.recipes.createPressing("modern_industrialization:bronze_curved_plate", "modern_industrialization:bronze_plate")

	event.recipes.createPressing("modern_industrialization:copper_plate", "modern_industrialization:copper_curved_plate")
	event.recipes.createPressing("modern_industrialization:gold_plate", "modern_industrialization:gold_curved_plate")
	event.recipes.createPressing("modern_industrialization:bronze_plate", "modern_industrialization:bronze_curved_plate")
	*/

	

	// create millstone
	// TO FIX check 1.18 recipe for millstone is cogwheel + andesite casing + stone
	event.replaceInput({type: "minecraft:crafting_shaped", output: "create:millstone"}, "create:andesite_alloy", "modern_industrialization:iron_plate")


	// remove AE2 silicon, replace recipes with MI Silicon
	event.replaceInput({mod: "ae2"}, "ae2:silicon", "modern_industrialization:silicon_ingot")
	event.replaceOutput({mod: "ae2"}, "ae2:silicon", "modern_industrialization:silicon_ingot")
	event.remove({type: "modern_industrialization:macerator", output: "modern_industrialization:silicon_dust"})

	// TO FIX-check
	// crying obsidian
	event.custom({
			"type": "create:mixing",
			"ingredients": [{"item": "minecraft:obsidian"},{"item": "minecraft:obsidian"},{"item": "minecraft:obsidian"},{"item": "minecraft:obsidian"},{"item": "minecraft:obsidian"},{"item": "minecraft:ghast_tear"}],
			//"ingredients": [{"item": "minecraft:obsidian", count: 5},{"item": "minecraft:ghast_tear"}],
			"results": [{"item": "minecraft:crying_obsidian"}]
	})
	//event.recipes.createMixing("minecraft:crying_obsidian", [Item.of("minecraft:obsidian", 5), "minecraft:ghast_tear"])

	// STEAM AGE

	// forge hammer
	// TO FIX check 1.18 steel block
	
	/*
	event.recipes.createMilling(Item.of("minecraft:raw_iron", 2), "minecraft:iron_ore")
	event.recipes.createMilling(Item.of("minecraft:raw_copper", 2), "minecraft:copper_ore")
	event.recipes.createMilling(Item.of("minecraft:raw_gold", 2), "minecraft:gold_ore")
	event.recipes.createMilling(Item.of("modern_industrialization:raw_tin", 2), "modern_industrialization:tin_ore")
	event.recipes.createMilling(Item.of("modern_industrialization:coal_crushed_dust", 2), "minecraft:coal_ore")
	event.recipes.createMilling(Item.of("modern_industrialization:redstone_crushed_dust", 2), "minecraft:redstone_ore")

	event.recipes.createMilling("modern_industrialization:iron_dust", "minecraft:raw_iron")
	event.recipes.createMilling("modern_industrialization:copper_dust", "minecraft:raw_copper")
	event.recipes.createMilling("modern_industrialization:gold_dust", "minecraft:raw_gold")
	event.recipes.createMilling("modern_industrialization:tin_dust", "modern_industrialization:raw_tin")
	event.recipes.createMilling("modern_industrialization:coal_dust", "modern_industrialization:coal_crushed_dust")
	event.recipes.createMilling("modern_industrialization:redstone_dust", "modern_industrialization:redstone_crushed_dust")

	// deepslate milling recipes
	event.recipes.createMilling(Item.of("modern_industrialization:coal_crushed_dust", 2), "minecraft:deepslate_coal_ore")
	event.recipes.createMilling(Item.of("minecraft:raw_iron", 2), "minecraft:deepslate_iron_ore")
	event.recipes.createMilling(Item.of("minecraft:raw_copper", 2), "minecraft:deepslate_copper_ore")
	event.recipes.createMilling(Item.of("minecraft:raw_gold", 2), "minecraft:deepslate_gold_ore")
	event.recipes.createMilling(Item.of("minecraft:raw_gold", 2), "minecraft:nether_gold_ore")
	event.recipes.createMilling(Item.of("modern_industrialization:redstone_crushed_dust", 2), "minecraft:deepslate_redstone_ore")
	event.recipes.createMilling(Item.of("create:raw_zinc", 2), "create:deepslate_zinc_ore")
	event.recipes.createMilling(Item.of("modern_industrialization:raw_tin", 2), "modern_industrialization:deepslate_tin_ore")
	*/

	event.remove({type: "minecraft:crafting_shapeless", output: "modern_industrialization:bronze_dust"})
	
	// bronze dust
	event.custom({
			"type": "create:mixing",
			"ingredients": [{"item": "modern_industrialization:copper_dust"},{"item": "modern_industrialization:copper_dust"},{"item": "modern_industrialization:copper_dust"},{"item": "modern_industrialization:tin_dust"}],
			"results": [{count: 4, "item": "modern_industrialization:bronze_dust"}]
	})
	/*
	event.recipes.createMixing(
		Item.of("modern_industrialization:bronze_dust", 4),
		[
			"modern_industrialization:copper_dust",
			"modern_industrialization:copper_dust",
			"modern_industrialization:copper_dust",
			"modern_industrialization:tin_dust",
		]
	)
	event.recipes.createPressing("modern_industrialization:bronze_plate", "modern_industrialization:bronze_ingot")
	*/

	// MI components
	// rod
	event.custom({
			"type": "create:cutting",
			processingTime: 50,
			"ingredients": [{"item": "minecraft:copper_ingot"}],
			"results": [{"item": "modern_industrialization:copper_rod"}]
	})
	event.custom({
			"type": "create:cutting",
			processingTime: 50,
			"ingredients": [{"item": "minecraft:gold_ingot"}],
			"results": [{"item": "modern_industrialization:gold_rod"}]
	})
	event.custom({
			"type": "create:cutting",
			processingTime: 50,
			"ingredients": [{"item": "modern_industrialization:tin_ingot"}],
			"results": [{"item": "modern_industrialization:tin_rod"}]
	})
	event.custom({
			"type": "create:cutting",
			processingTime: 75,
			"ingredients": [{"item": "modern_industrialization:bronze_ingot"}],
			"results": [{"item": "modern_industrialization:bronze_rod"}]
	})


	// bolt

	event.custom({
			"type": "create:cutting",
			processingTime: 50,
			"ingredients": [{"item": "modern_industrialization:copper_rod"}],
			"results": [{count: 2, "item": "modern_industrialization:copper_bolt"}]
	})
	event.custom({
			"type": "create:cutting",
			processingTime: 50,
			"ingredients": [{"item": "modern_industrialization:gold_rod"}],
			"results": [{count: 2, "item": "modern_industrialization:gold_bolt"}]
	})
	event.custom({
			"type": "create:cutting",
			processingTime: 50,
			"ingredients": [{"item": "modern_industrialization:tin_rod"}],
			"results": [{count: 2, "item": "modern_industrialization:tin_bolt"}]
	})
	event.custom({
			"type": "create:cutting",
			processingTime: 50,
			"ingredients": [{"item": "modern_industrialization:bronze_rod"}],
			"results": [{count: 2, "item": "modern_industrialization:bronze_bolt"}]
	})
	/*
	event.recipes.createCutting(Item.of("modern_industrialization:iron_bolt", 2), "modern_industrialization:iron_rod")
	event.recipes.createCutting(Item.of("modern_industrialization:copper_bolt", 2), "modern_industrialization:copper_rod")
	event.recipes.createCutting(Item.of("modern_industrialization:gold_bolt", 2), "modern_industrialization:gold_rod")
	event.recipes.createCutting(Item.of("modern_industrialization:tin_bolt", 2), "modern_industrialization:tin_rod")
	event.recipes.createCutting(Item.of("modern_industrialization:bronze_bolt", 2), "modern_industrialization:bronze_rod")
	*/

	// ring on create rolling mill

	/*
	event.recipes.createPressing("modern_industrialization:iron_ring", "modern_industrialization:iron_rod")
	event.recipes.createPressing("modern_industrialization:copper_ring", "modern_industrialization:copper_rod")
	event.recipes.createPressing("modern_industrialization:gold_ring", "modern_industrialization:gold_rod")
	event.recipes.createPressing("modern_industrialization:tin_ring", "modern_industrialization:tin_rod")
	event.recipes.createPressing("modern_industrialization:bronze_ring", "modern_industrialization:bronze_rod")
	*/


	/*
	event.recipes.createCompacting("modern_industrialization:bronze_machine_casing", [
		Item.of("modern_industrialization:bronze_plate", 8),
		"modern_industrialization:bronze_gear"
	])
	*/
 
	// hopper
	//event.replaceInput({id: "minecraft", output: "minecraft:hopper"}, "minecraft:iron_ingot", "modern_industrialization:iron_plate")

	// uncooked steel (removed)
	/*
	event.remove({type: "minecraft:crafting_shapeless", output: "modern_industrialization:uncooked_steel_dust"})
	event.custom({
			"type": "create:mixing",
			"ingredients": [{"item": "modern_industrialization:iron_dust"},{"item": "modern_industrialization:iron_dust"},{"item": "modern_industrialization:iron_dust"},{"item": "modern_industrialization:iron_dust"},{"item": "modern_industrialization:iron_dust"},{"item": "modern_industrialization:iron_dust"},{"item": "modern_industrialization:iron_dust"}, {"item": "modern_industrialization:coke_dust"},{"item": "modern_industrialization:coke_dust"}],
			//"ingredients": [{count: 7, "item": "modern_industrialization:iron_dust"}, {count: 2, "item": "modern_industrialization:coke_dust"}],
			"results": [{count: 9, "item": "modern_industrialization:uncooked_steel_dust"}]
	})
	*/
	
	/*
	event.recipes.createMixing(
		Item.of("modern_industrialization:uncooked_steel_dust", 9),
		[
			Item.of("modern_industrialization:iron_dust", 7),
			Item.of("modern_industrialization:coke_dust", 2)
		]
	)
	*/

	// fire clay
	event.remove({type: "minecraft:crafting_shaped", output: "modern_industrialization:fire_clay_dust"})
	
	event.custom({
			"type": "create:milling",
			"processingTime":100,
			"ingredients": [{"item": "minecraft:brick"}],
			"results": [{"item": "modern_industrialization:brick_dust"}]
	})
	event.custom({
			"type": "create:milling",
			"processingTime":200,
			"ingredients": [{"item": "minecraft:bricks"}],
			"results": [{count: 4, "item": "modern_industrialization:brick_dust"}]
	})
	//event.recipes.createMilling("modern_industrialization:brick_dust", "minecraft:brick")
	//event.recipes.createMilling(Item.of("modern_industrialization:brick_dust", 4), "minecraft:terracotta")
	//event.recipes.createMilling(Item.of("modern_industrialization:brick_dust", 4), "minecraft:bricks")

	// pbf mixer
	event.remove({type: "modern_industrialization:mixer", output: `modern_industrialization:fire_clay_dust`})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 100,
		item_inputs : [
			{item: "geggy:clay_dust", amount: 3},
			{item: "modern_industrialization:brick_dust", amount: 2},
			{item: "magick:calcite_dust", amount: 2},
			{item: "geggy:andesite_mix"}
		],
		item_outputs :[
			{item: "modern_industrialization:fire_clay_dust", amount: 2}
		]
	})
	
	/*
	event.recipes.createMixing(
		Item.of("modern_industrialization:fire_clay_dust", 2),
		[
			"modern_industrialization:brick_dust",
			"modern_industrialization:brick_dust",
			"minecraft:clay_ball",
			"minecraft:clay_ball"
		]
	)
	*/

	// invar
	// just MI mixer
	/*
	event.recipes.createMixing(
		"modern_industrialization:invar_dust",
		[
			Item.of("modern_industrialization:iron_dust", 2),
			"modern_industrialization:nickel_dust"
		]
	)
	*/

	// END STEAM AGE

	// ELECTRIC AGE
	// create belts
	event.remove({mod: "create", output: "create:belt_connector"})
	event.shaped("2x create:belt_connector", [
		"RRR",
		"RRR",
		"   "
	], {
		R: "modern_industrialization:rubber_sheet",
	})
	
	event.custom({
		type: "create:compacting",
		ingredients: [
		// changed to kelp from paper
			{"item": "geggy:heated_rubber"},
			{"item": "geggy:heated_rubber"},
		],
		results: [
			{count: 1, "item": "modern_industrialization:rubber_sheet"}
		],
		processingTime: 100
	})

	event.remove({mod: "create", output: "create:crushing_wheel"})
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "create:andesite_alloy"},
		"D": {"item": "create:water_wheel"},
		"E": {"item": "modern_industrialization:iron_gear"},
		"F": {"item": "modern_industrialization:steel_rod"}
		},
		pattern: [
			"AAAAA",
			"AFEFA",
			"AEDEA",
			"AFEFA",
			"AAAAA"
		],
		result: {
			"item": "create:crushing_wheel"
		}
	})
	
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "modern_industrialization:bronze_curved_plate"},
		"B": {"item": "modern_industrialization:bronze_rod"}
		},
		pattern: [
			"A",
			"B"
		],
		result: {
			"item": "modern_industrialization:bronze_blade"
		}
	})
	
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "geggy:polished_copper_plate"},
		"B": {"item": "modern_industrialization:rubber_sheet"}
		},
		pattern: [
			"B",
			"A",
			"B"
		],
		result: {
			"item": "modern_industrialization:analog_circuit_board"
		}
	})
	
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"C": {"item": "powah:energy_cable_starter"},
		"D": {"item": "geggy:galvanized_steel_plate"},
		"E": {"item": "geggy:galvanized_steel_rod"},
		"F": {"item": "modern_industrialization:motor"},
		"G": {"item": "geggy:galvanized_steel_gear"}
		},
		pattern: [
			"DDD",
			"CEE",
			"CFG"
		],
		result: {
			"item": "modern_industrialization:piston"
		}
	})
	
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "modern_industrialization:steel_rod_magnetic"},
		"E": {"item": "modern_industrialization:copper_wire"},
		"F": {"item": "powah:energy_cable_starter"},
		"G": {"item": "geggy:galvanized_steel_rod"},
		"H": {"item": "geggy:cobalt_ring"}
		},
		pattern: [
			"FEG",
			"EAE",
			"GEH"
		],
		result: {
			"item": "modern_industrialization:motor"
		}
	})
	
	event.remove({id: 'modern_industrialization:electric_age/component/craft/pump'})
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "moderndynamics:fluid_pipe"},
		"B": {"item": "modern_industrialization:tin_rotor"},
		"C": {"item": "modern_industrialization:tin_bolt"},
		"D": {"item": "modern_industrialization:motor"}
		},
		pattern: [
			"AAA",
			"BDB",
			"CBC"
		],
		result: {
			"item": "modern_industrialization:pump"
		}
	})
	
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "geggy:simple_pipe_motor"},
		"G": {"item": "modern_industrialization:steel_gear"},
		"X": {"item": "geggy:invar_curved_plate"},
		"F": {"item": "geggy:reinforced_glass_pane"},
		"H": {"item": "modern_industrialization:invar_rod"}
		},
		pattern: [
			" XHX ",
			"AFFFG",
			" XHX "
		],
		result: {
			"item": "moderndynamics:item_pipe", "count": 6
		}
	})
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"G": {"item": "modern_industrialization:bronze_rotor"},
		"X": {"item": "geggy:potin_curved_plate"},
		"F": {"item": "geggy:reinforced_glass_pane"},
		"H": {"item": "modern_industrialization:rubber_sheet"}
		},
		pattern: [
			" XXX ",
			"HFGFH",
			" XXX "
		],
		result: {
			"item": "moderndynamics:fluid_pipe", "count": 6
		}
	})
	
	event.remove({id: 'create:crafting/kinetics/water_wheel'})
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "create:shaft"},
		"D": {"item": "create:gearbox"},
		"E": {"item": "geggy:hardened_plank"},
		"F": {"item": "geggy:treated_plank"}
		},
		pattern: [
			"EEEEE",
			"EAFAE",
			"EFDFE",
			"EAFAE",
			"EEEEE"
		],
		result: {
			"item": "create:water_wheel"
		}
	})
	
	event.remove({id: 'create:crafting/kinetics/large_water_wheel'})
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"A": {"item": "create:shaft"},
		"D": {"item": "create:water_wheel"},
		"E": {"item": "geggy:hardened_plank"},
		"F": {"item": "create:sail_frame"}
		},
		pattern: [
			"EEEEE",
			"EAFAE",
			"EFDFE",
			"EAFAE",
			"EEEEE"
		],
		result: {
			"item": "create:large_water_wheel"
		}
	})
	/*
	event.recipes.createMechanicalCrafting("create:crushing_wheel", [
		"AAA",
		"ADA",
		"AAA"
	], {
		A: "create:andesite_alloy",
		D: "modern_industrialization:bronze_drill"
	})
	*/

	
	/*
	event.recipes.createMilling("kubejs:brass_dust", ["create:brass_ingot"])
	event.recipes.createMilling("kubejs:zinc_dust", ["create:zinc_ingot"])
	event.recipes.createMilling(Item.of("create:raw_zinc", 2), ["create:zinc_ore"])
	event.recipes.createMilling("kubejs:zinc_dust", ["create:raw_zinc"])
	*/

	event.custom({ 
		type: "modern_industrialization:macerator",
			eu: 2,
			duration: 200,
			item_inputs: [
				{item: "create:brass_sheet"}
			],
			item_outputs: [
				{item: "kubejs:brass_dust"}
			]
		}
	)

	event.custom({ 
		type: "modern_industrialization:macerator",
			eu: 2,
			duration: 100,
			item_inputs: [
				{item: "create:raw_zinc"}
			],
			item_outputs: [
				{item: "kubejs:zinc_dust", amount: 1},
				{item: "kubejs:zinc_dust", amount: 1, probability: 0.5},
			]
		}
	)


	event.smelting("create:zinc_ingot", "kubejs:zinc_dust")
	
	event.shaped("3x kubejs:brass_dust", [
		"BB ",
		"BA ",
		"   ",
	], {
		B: "modern_industrialization:copper_dust",
		A: "kubejs:zinc_dust"
	})

	event.custom({ 
		type: "modern_industrialization:mixer",
			eu: 2,
			duration: 100,
			item_inputs: [
				{item: "modern_industrialization:copper_dust", amount: 3},
				{item: "kubejs:zinc_dust", amount: 1}
			],
			item_outputs: [
				{item: "kubejs:brass_dust", amount: 4}
			]
		}
	) 
	// restore create progression
	//event.smelting("create:brass_ingot", ["kubejs:brass_dust"])
	event.custom({
			"type": "create:mixing",
			"ingredients": [{"item": "modern_industrialization:copper_dust"},{"item": "modern_industrialization:copper_dust"},{"item": "modern_industrialization:copper_dust"},
			{"item": "kubejs:zinc_dust"}],
			"results": [{"count": 3, "item": "kubejs:brass_dust"}]
	})
	event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": "kubejs:brass_dust"}],
			"results": [{"item": "create:brass_ingot"}]
	})

	// deployer, mechanical arm & mechanical crafter
	// for sean: there are shapeless recipes left out using the electron tube, since this is shaped only
	// still broken, see potato cannon
	event.replaceInput({mod: "create", type: "minecraft:crafting_shaped"}, "create:electron_tube", "modern_industrialization:capacitor")
	event.replaceInput({mod: "create"}, "create:precision_mechanism", "modern_industrialization:analog_circuit")
	event.replaceInput({type: "create:mechanical_crafting"}, "create:precision_mechanism", "modern_industrialization:analog_circuit")
	event.replaceInput({type: "create:mechanical_crafting", output: "create:potato_cannon"}, "create:precision_mechanism", "modern_industrialization:analog_circuit")
	
	event.remove({mod: "create", output: "create:mechanical_arm"})
	event.shaped("create:mechanical_arm", [
		"BBD",
		"BA ",
		"EC ",
	], {
		B: "create:brass_sheet",
		A: "modern_industrialization:analog_circuit",
		C: "create:brass_encased_large_cogwheel",
		D: "create:andesite_alloy",
		E: "create:precision_mechanism"
	})

	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 2,
		duration: 600,
		item_inputs: [
			{item:"create:brass_sheet", amount: 3},
			{item: "modern_industrialization:analog_circuit"},
			{item: "create:brass_encased_large_cogwheel"},
			{item: "create:precision_mechanism"},
			{item: "create:andesite_alloy"}
		],
		item_outputs: [
			{item: "create:mechanical_arm"}
		]
	})

	event.replaceInput({mod: "modern_industrialization", output: "modern_industrialization:robot_arm"}, "modern_industrialization:analog_circuit", "create:mechanical_arm")


	// circuits
	
	event.remove({type: "modern_industrialization:assembler", output: "modern_industrialization:analog_circuit"})
	event.remove({type: "minecraft:crafting_shaped", output: "modern_industrialization:analog_circuit"})

	// assembler
	event.remove({type: "minecraft:crafting_shaped", output: "modern_industrialization:assembler"})

	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"R": {"item": "modern_industrialization:robot_arm"},
		"C": {"item": "modern_industrialization:analog_circuit"},
		"B": {"item": "modern_industrialization:conveyor"},
		"H": {"item": "modern_industrialization:basic_machine_hull"}
		},
		pattern: [
			"RCR",
			"BHB",
			"RCR"
		],
		result: {
			"item": "modern_industrialization:assembler"
		}
	})
	/*
	event.recipes.createMechanicalCrafting("modern_industrialization:assembler", [
		"RCR",
		"BHB",
		"RCR"
	], {
		R: "modern_industrialization:robot_arm",
		C: "modern_industrialization:analog_circuit",
		B: "modern_industrialization:conveyor",
		H: "modern_industrialization:basic_machine_hull"
	})
	*/

	// electronic circuit
	

	// END ELECTRIC AGE


	// AE2



	event.custom({ 
		type: "modern_industrialization:mixer",
			eu: 2,
			duration: 100,
			item_inputs: [
				{tag: "ae2:glass_cable", amount: 1}
			],
			fluid_inputs: [
				{fluid: "minecraft:water", amount: 50},
			],
			item_outputs: [
				{item: "ae2:fluix_glass_cable", amount: 1}
			]
		}
	)

	// END AE2

	// DIGITAL AGE

	// TO FIX - fixed?
	event.remove({mod: "modern_industrialization", output: "modern_industrialization:digital_circuit"})

	
	/*
	event.recipes.createSequencedAssembly([
		Item.of("modern_industrialization:digital_circuit").withChance(100.0)
	], 
	"modern_industrialization:digital_circuit_board", 
	[
		event.recipes.createDeploying("kubejs:incomplete_digital_circuit", ["kubejs:incomplete_digital_circuit", "modern_industrialization:electronic_circuit"]),
		event.recipes.createDeploying("kubejs:incomplete_digital_circuit", ["kubejs:incomplete_digital_circuit", "modern_industrialization:or_gate"]),
		event.recipes.createDeploying("kubejs:incomplete_digital_circuit", ["kubejs:incomplete_digital_circuit", "modern_industrialization:and_gate"]),
		event.recipes.createDeploying("kubejs:incomplete_digital_circuit", ["kubejs:incomplete_digital_circuit", "modern_industrialization:not_gate"]),
	]).transitionalItem("kubejs:incomplete_digital_circuit").loops(2)
	*/

	event.custom({ 
		type: "modern_industrialization:implosion_compressor",
		eu: 100,
		duration: 6000,
		item_inputs: [
			{item: "minecraft:bone", amount: 256},
			{item: "modern_industrialization:industrial_tnt", amount: 64},
			{item: "minecraft:soul_sand", amount: 256},
		],
		item_outputs: [
			{item: "minecraft:nether_star"}
		]
	})

	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 8,
		duration: 3000,
		item_inputs: [
			{item: "create:empty_blaze_burner", amount: 1},
			{item: "minecraft:blaze_powder", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 1000}
		],
		item_outputs: [
			{item: "create:blaze_burner"}
		]
	})

	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 8,
		duration: 100,
		item_inputs: [
			{tag: "c:ingots", amount: 1}
		],
		item_outputs: [
			{item: "ae2:matter_ball", amount: 1}
		]
	})

	event.replaceInput({type: "create:compacting", output: "create:blaze_cake_base"}, "minecraft:egg", "kibe:cursed_kibe")

	// max 9 ingredients ???
	/*
	event.custom({
		type: "create:mixing",
		heatRequirement: "superheated",
		ingredients: [
		{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},{"item": "create:andesite_alloy"},
			//Ingredient.of("create:andesite_alloy", 64).toJson(),
			Fluid.of("modern_industrialization:styrene", fluid_volume_to_fabric(100)).toJson()
		],
		results: [
			Item.of("create:chromatic_compound").toJson()
		],
		processingTime: 100
	})
	//.superheated()
	*/

	// creative create
	event.custom({ 
		type: "modern_industrialization:implosion_compressor",
		eu: 100,
		duration: 6000,
		item_inputs: [
			{item: "create:refined_radiance", amount: 64},
			{item: "create:refined_radiance", amount: 64},
			{item: "create:refined_radiance", amount: 64},
			{item: "create:refined_radiance", amount: 64},
		],
		item_outputs: [
			{item: "create:creative_motor", amount: 1}
		]
	})

	// END DIGITAL AGE

	// NUCLEAR AGE
	

	//TO FIX missing ae2things
	/*
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"S": {"item": "ae2:quantum_entangled_singularity"},
		"T": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:tritium"}}}}),
		"D": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:deuterium"}}}})},
		"H": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:hydrogen"}}}})},
		"O": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:oxygen"}}}})},
		"L": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:light_fuel"}}}})},
		"J": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:heavy_fuel"}}}})},
		"B": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:diesel"}}}})},
		"A": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:soldering_alloy"}}}})},
		"C": {"item": "ae2things:fluid_storage_cell_4096k"}
		},
		pattern: [
			"SBCBS",
			"HDTDL",
			"CTSTC",
			"ODTDJ",
			"SACAS"
		],
		result: {
			"item": "ae2:creative_fluid_cell"
		}
	})
	*/
	/*
	event.recipes.createMechanicalCrafting("ae2:creative_fluid_cell", [
		"SBCBS",
		"HDTDL",
		"CTSTC",
		"ODTDJ",
		"SACAS",
	],
	{
		S: "ae2:quantum_entangled_singularity",
		T: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:tritium"}}}}),
		D: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:deuterium"}}}}),
		H: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:hydrogen"}}}}),
		O: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:oxygen"}}}}),
		L: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:light_fuel"}}}}),
		J: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:heavy_fuel"}}}}),
		B: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:diesel"}}}}),
		A: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:soldering_alloy"}}}}),
		C: "ae2things:fluid_storage_cell_4096k"
	})
	*/
	
	//1.19 TO FIX missing ae2things
	/*
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"S": {"item": "ae2:quantum_entangled_singularity"},
		"U": {"item": "modern_industrialization:uranium_fuel_rod_depleted"},
		"A": {"item": "modern_industrialization:analog_circuit"},
		"E": {"item": "modern_industrialization:electronic_circuit"},
		"D": {"item": "modern_industrialization:digital_circuit"},
		"P": {"item": "modern_industrialization:processing_unit"},
		"R": {"item": "modern_industrialization:cadmium_control_rod"},
		"B": {"item": "modern_industrialization:plutonium_block"},
		"C": {"item": "ae2things:item_storage_cell_4096k"}
		},
		pattern: [
			"SBCBS",
			"RUAUR",
			"CPSEC",
			"RUDUR",
			"SBCBS"
		],
		result: {
			"item": "ae2:creative_item_cell"
		}
	})
	*/
	
	/*
	event.recipes.createMechanicalCrafting("ae2:creative_item_cell", [
		"SBCBS",
		"RUAUR",
		"CPSEC",
		"RUDUR",
		"SBCBS",
	],
	{
		S: "ae2:quantum_entangled_singularity",
		U: "modern_industrialization:uranium_fuel_rod_depleted",
		A: "modern_industrialization:analog_circuit",
		E: "modern_industrialization:electronic_circuit",
		D: "modern_industrialization:digital_circuit",
		P: "modern_industrialization:processing_unit",
		R: "modern_industrialization:cadmium_control_rod",
		B: "modern_industrialization:plutonium_block",
		C: "ae2things:item_storage_cell_4096k"
	})
	*/

	// END NUCLEAR AGE

	// ENDGAME

	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"S": {"item": "modern_industrialization:superconductor_storage_unit"},
		"Q": {"item": "modern_industrialization:quantum_circuit"},
		"U": {"item": "modern_industrialization:quantum_upgrade"},
		"R": {"item": "create:creative_motor"},
		"A": {"item": "ae2:quantum_entangled_singularity"},
		"M": {"item": "modern_industrialization:singularity"}
		},
		pattern: [
			"RMAMR",
			"MUQUM",
			"AQSQA",
			"MUQUM",
			"RMAMR"
		],
		result: {
			"item": "modern_industrialization:creative_storage_unit"
		}
	})
	/*
	event.recipes.createMechanicalCrafting("modern_industrialization:creative_storage_unit", [
		"RMAMR",
		"MUQUM",
		"AQSQA",
		"MUQUM",
		"RMAMR",
	],
	{
		S: "modern_industrialization:superconductor_storage_unit",
		Q: "modern_industrialization:quantum_circuit",
		U: "modern_industrialization:quantum_upgrade",
		R: "create:creative_motor",
		A: "ae2:quantum_entangled_singularity",
		M: "modern_industrialization:singularity"
	})
	*/

	// STILL BROKEN 1.19
	/*
	event.custom({
		type: "create:mechanical_crafting",
		key: {
		"S": {"item": "ae2:quantum_entangled_singularity"},
		"C": {"item": "modern_industrialization:creative_storage_unit"},
		"M": {"item": "create:creative_motor"},
		"U": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:uu_matter"}}}})},
		"D": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:deuterium"}}}})},
		"T": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:tritium"}}}})},
		"G": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:acrylic_glue"}}}})},
		"H": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:high_pressure_heavy_water_steam"}}}})},
		"A": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:argon"}}}})},
		"B": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:boosted_diesel"}}}})},
		"P": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:polyethylene"}}}})},
		"N": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:nylon"}}}})},
		"L": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:hydrochloric_acid"}}}})},
		"T": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:helium_3"}}}})},
		"R": {"item": Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:helium_plasma"}}}})}
		},
		pattern: [
			"CRTRC",
			"GDUDA",
			"HUSUP",
			"NTUTL",
			"MRBRM"
		],
		result: {
			"item": "modern_industrialization:creative_tank"
		}
	})
	*/
	/*
	event.recipes.createMechanicalCrafting("modern_industrialization:creative_tank", [
		"CRTRC",
		"GDUDA",
		"HUSUP",
		"NTUTL",
		"MRBRM",
	],
	{
		S: "ae2:quantum_entangled_singularity",
		C: "modern_industrialization:creative_storage_unit",
		M: "create:creative_motor",
		U: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:uu_matter"}}}}),
		D: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:deuterium"}}}}),
		T: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:tritium"}}}}),
		G: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:acrylic_glue"}}}}),
		H: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:high_pressure_heavy_water_steam"}}}}),
		A: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:argon"}}}}),
		B: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:boosted_diesel"}}}}),
		P: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:polyethylene"}}}}),
		N: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:nylon"}}}}),
		L: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:hydrochloric_acid"}}}}),
		T: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:helium_3"}}}}),
		R: Item.of('modern_industrialization:titanium_tank', {BlockEntityTag:{amt:5184000,fluid:{fk:{fluid:"modern_industrialization:helium_plasma"}}}}),
	})
	*/

	event.remove({mod: "modern_industrialization", output: "modern_industrialization:replicator"})
	event.custom({ 
		type: "modern_industrialization:assembler",
		eu: 1,
		duration: 20,
		item_inputs: [
			{item: "modern_industrialization:creative_tank", amount: 1},
		],
		item_outputs: [
			{item: "modern_industrialization:replicator", amount: 1}
		]
	})

	event.shapeless("modern_industrialization:creative_tank", ["modern_industrialization:creative_tank"])
	// END ENDGAME
})


//onEvent("item.tags", event => {
ServerEvents.tags('item', event => {	
	
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get("forge:cobblestone").add("minecraft:diamond_ore")

	// group up cobblestone generators for Quest Completion
	event.add("kibe:cobblestone_generators", [
		"kibe:cobblestone_generator_mk1", 
		"kibe:cobblestone_generator_mk2",
		"kibe:cobblestone_generator_mk3",
		"kibe:cobblestone_generator_mk4",
		"kibe:cobblestone_generator_mk5"
	])

	const lv_cables = [
		"modern_industrialization:copper_cable",
		"modern_industrialization:tin_cable",
		"modern_industrialization:silver_cable"
	]

	const mv_cables = [
		"modern_industrialization:cupronickel_cable",
		"modern_industrialization:electrum_cable",
		"modern_industrialization:aluminum_cable"
	]
	const hv_cables = [
		"modern_industrialization:kanthal_cable"
		
	]
	const ev_cables = [
		"modern_industrialization:annealed_copper_cable",
		"modern_industrialization:platinum_cable"
	]

	// mi cables
	event.add("modern_industrialization:cables", lv_cables.concat(mv_cables).concat(hv_cables.concat(ev_cables)))
	// event.add("modern_industrialization:cables", mv_cables)
	// event.add("modern_industrialization:cables", hv_cables)
	// event.add("modern_industrialization:cables", ev_cables)
	event.add("modern_industrialization:cables", "modern_industrialization:superconductor_cable")

	event.add("modern_industrialization:lv_cables", lv_cables)
	event.add("modern_industrialization:mv_cables", mv_cables)
	event.add("modern_industrialization:hv_cables", hv_cables)
	event.add("modern_industrialization:ev_cables", ev_cables)
	
	const inventory_tabs_hide_list = [
		"ae2:fluix_glass_cable"
	]

	event.add("inventorytabs:mod_compat_blacklist", inventory_tabs_hide_list)

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get("forge:cobblestone").remove("minecraft:mossy_cobblestone")
})

//onEvent("entity.loot_tables", event => {
ServerEvents.entityLootTables(event => {	
	// add bone drops to sheep, pig & cow entities
	event.modifyEntity("minecraft:cow", table => {
		table.addPool(pool => {
			pool.addItem("minecraft:bone")
			pool.addItem("minecraft:leather")
		})
	})

	event.modifyEntity("minecraft:pig", table => {
		table.addPool(pool => {
			pool.addItem("minecraft:bone")
		})
	})

	event.modifyEntity("minecraft:sheep", table => {
		table.addPool(pool => {
			pool.addItem("minecraft:bone")
		})
	})
})

