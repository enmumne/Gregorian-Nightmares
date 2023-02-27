//import crafttweaker.api.ingredient.IIngredient;
//import crafttweaker.api.item.IItemStack;

//MultiLoader example!

/** 
* This example uses a Map or Associative Array. 
* For more information refer to the appropriate documentation page located here, under the ZenCode docs:
* https://docs.blamejared.com/1.18/en/zencode/AssociativeArrays
*/

//Creates a map that links each log to each plank

/*
val log_plank_map as IItemStack[IIngredient] = {
  <item:minecraft:oak_log>: <item:minecraft:oak_planks>,
  <item:minecraft:spruce_log>: <item:minecraft:spruce_planks>,
  <item:minecraft:birch_log>: <item:minecraft:birch_planks>,
  <item:minecraft:jungle_log>: <item:minecraft:jungle_planks>,
  <item:minecraft:acacia_log>: <item:minecraft:acacia_planks>,
  <item:minecraft:dark_oak_log>: <item:minecraft:dark_oak_planks>,
  
  <item:byg:aspen_log>: <item:byg:aspen_planks>
  <item:byg:baobab_log>: <item:byg:baobab_planks>
  <item:byg:blue_enchanted_log>: <item:byg:blue_enchanted_planks>
  <item:byg:bulbis_log>: <item:byg:bulbis_planks>
  <item:byg:cherry_log>: <item:byg:cherry_planks>
  <item:byg:cika_log>: <item:byg:cika_planks>
  <item:byg:cypress_log>: <item:byg:cypress_planks>
  <item:byg:ebony_log>: <item:byg:ebony_planks>
  <item:byg:ether_log>: <item:byg:ether_planks>
  <item:byg:fir_log>: <item:byg:fir_planks>
  <item:byg:green_enchanted_log>: <item:byg:green_enchanted_planks>
  <item:byg:holly_log>:  <item:byg:holly_planks>
  <item:byg:imparius_log>: <item:byg:imparius_planks>
  <item:byg:jacaranda_log>: <item:byg:jacaranda_planks>
  <item:byg:lament_log>: <item:byg:lament_planks>
  <item:byg:mahogany_log>: <item:byg:mahogany_planks>
  <item:byg:mangrove_log>: <item:byg:mangrove_planks>
  <item:byg:maple_log>: <item:byg:maple_planks>
  <item:byg:nightshade_log>: <item:byg:nightshade_planks>
  <item:byg:palm_log>: <item:byg:palm_planks>
  <item:byg:pine_log>: <item:byg:pine_planks>
  <item:byg:rainbow_eucalyptus_log>: <item:byg:rainbow_eucalyptus_planks>
  <item:byg:redwood_log>: <item:byg:redwood_planks>
  <item:byg:skyris_log>: <item:byg:skyris_planks>
  <item:byg:willow_log>: <item:byg:willow_planks>
  <item:byg:witch_hazel_log>: <item:byg:witch_hazel_planks>
  <item:byg:zelkova_log>: <item:byg:zelkova_planks>
  <item:byg:sythian_log>: <item:byg:sythian_planks>
  <item:byg:embur_log>: <item:byg:embur_planks>
	
	//<item:biomesoplenty:fir_log>: <item:biomesoplenty:fir_planks>,
    //<item:biomesoplenty:redwood_log>: <item:biomesoplenty:redwood_planks>,
    //<item:biomesoplenty:cherry_log>: <item:biomesoplenty:cherry_planks>,
    //<item:biomesoplenty:mahogany_log>: <item:biomesoplenty:mahogany_planks>,
    //<item:biomesoplenty:jacaranda_log>: 
    //<item:biomesoplenty:palm_log>: <item:biomesoplenty:palm_planks>,
    //<item:biomesoplenty:willow_log>: <item:biomesoplenty:willow_planks>,
    //<item:biomesoplenty:dead_log>: <item:biomesoplenty:dead_planks>,
    //<item:biomesoplenty:magic_log>: <item:biomesoplenty:magic_planks>,
    //<item:biomesoplenty:umbran_log>: <item:biomesoplenty:umbran_planks>,
    //<item:biomesoplenty:hellbark_log>: <item:biomesoplenty:hellbark_planks>,
	
  //You can expand this with modded logs and planks or change it to something else.
};
//loops over left and right part of the map, as per standard map looping structures.
//log is an IIngredient and plank is an IItemStack, as per our declaration above.
for log, plank in log_plank_map {
    //removes the plank recipes
   craftingTable.remove(plank);
   //Description
   
   println("Remaking logs and planks to one half of the original output");
   //Remakes the recipe with the conditions we want (in this case, you get a 2:1 plank to log ratio)
   craftingTable.addShapeless("log_to_planks_" + plank.registryName.path, plank * 2, [log]);
}
*/

/*

for item in <tag:items:minecraft:planks> {

	val out = item.defaultInstance.registryName;
    out = str.replace("_wood", "_planks");

	craftingTable.addShapeless("log_to_plak_", item * 2, [out]);
}

*/

/*
craftingTable.addShaped("tnk_pattern", <item:tconstruct:pattern>, [
[<item:minecraft:stick>, <item:minecraft:paper> ],
[<tag:items:minecraft:planks>, <item:minecraft:stick> ]
]);
*/

// 1.19 missing pattern from tinkers, replaced with j_planks
craftingTable.addShapeless("wooden_form", <item:geggy:wooden_form>, [<item:farmersdelight:flint_knife>.anyDamage().transformDamage(),<item:geggy:j_planks>]);



craftingTable.addShapeless("chad", <item:geggy:chad> * 2, [<item:geggy:stone_mortar>.anyDamage().transformDamage(),<item:minecraft:sugar_cane>,<item:minecraft:sugar_cane>,<item:minecraft:sugar_cane>]);
craftingTable.addShapeless("wood_pulp", <item:geggy:wood_pulp>, [<item:geggy:stone_mortar>.anyDamage().transformDamage(),<tag:items:minecraft:logs>]);
craftingTable.addShapeless("quartz_sand", <item:geggy:quartz_sand>, [<item:geggy:stone_mortar>.anyDamage().transformDamage(),<tag:items:c:sand>]);
craftingTable.addShapeless("clay_dust", <item:geggy:clay_dust>, [<item:geggy:stone_mortar>.anyDamage().transformDamage(),<item:minecraft:clay>]);
craftingTable.addShapeless("flint_dust_tiny", <item:geggy:flint_dust_tiny>, [<item:geggy:stone_mortar>.anyDamage().transformDamage(),<item:minecraft:flint>]);
craftingTable.addShapeless("kelp_dust", <item:geggy:kelp_dust>, [<item:geggy:stone_mortar>.anyDamage().transformDamage(),<item:minecraft:dried_kelp>]);
craftingTable.addShapeless("brick_dust", <item:modern_industrialization:brick_dust>, [<item:geggy:stone_mortar>.anyDamage().transformDamage(),<item:minecraft:bricks>]);
craftingTable.addShapeless("bricks_dust", <item:geggy:small_brick_dust>, [<item:geggy:stone_mortar>.anyDamage().transformDamage(),<item:minecraft:brick>]);

craftingTable.addShapeless("coke_dust", <item:modern_industrialization:coke_dust>, [<item:geggy:stone_mortar>.anyDamage().transformDamage(),<item:modern_industrialization:coke>, <item:modern_industrialization:coke>]);

craftingTable.addShapeless("coal_dust", <item:modern_industrialization:coal_dust>, [<item:geggy:stone_mortar>.anyDamage().transformDamage(),<item:minecraft:coal>, <item:minecraft:coal>]);

craftingTable.addShapeless("quartz_n", <item:modern_industrialization:quartz_dust> * 2, [<item:geggy:stone_mortar>.anyDamage().transformDamage(),<item:minecraft:quartz_block>]);

craftingTable.addShapeless("iron_more", <item:modern_industrialization:iron_tiny_dust> * 2, [<item:geggy:stone_mortar>.anyDamage().transformDamage(),<item:create:crushed_iron_ore>]);

//craftingTable.addShapeless("flint", <item:minecraft:flint>, [<item:minecraft:stick>]);

// 1.19 grout > geggy
craftingTable.addShapeless("unk_primitive_brick", <item:geggy:uncooked_primitive_brick> * 2, [<item:geggy:wooden_form>.anyDamage().transformDamage(),<item:geggy:craut>,<item:geggy:kelp_dust>]);

//iron curse
//craftingTable.addShapeless("iron_ingot", <item:geggy:wrought_dust>, [<item:geggy:stone_mortar>.anyDamage().transformDamage(),<item:geggy:wrought_nugget> * 15]);
craftingTable.addShapeless("iron_dust", <item:modern_industrialization:iron_tiny_dust>, [<item:geggy:stone_mortar>.anyDamage().transformDamage(),<item:minecraft:iron_nugget>, <item:minecraft:iron_nugget>]);
craftingTable.addShapeless("primitive_dust", <item:geggy:primitive_brick_dust>, [<item:geggy:stone_mortar>.anyDamage().transformDamage(),<item:geggy:primitive_brick>]);

craftingTable.addShaped("small_wrought", <item:geggy:wrought_small_dust> * 2, [
	[<item:geggy:wrought_nugget>,<item:geggy:wrought_nugget>,<item:geggy:wrought_nugget>],
	[<item:geggy:wrought_nugget>,<item:geggy:stone_mortar>.anyDamage().transformDamage(),<item:geggy:wrought_nugget>],
	[<item:geggy:wrought_nugget>,<item:geggy:wrought_nugget>,<item:geggy:wrought_nugget>]]);

craftingTable.addShaped("unfired_tempered", <item:geggy:unfired_tempered_dust> * 2, [
	[<item:modern_industrialization:iron_dust>,<item:geggy:kelp_dust>,<item:modern_industrialization:iron_dust>],
	[<item:geggy:primitive_brick_dust>,<item:geggy:wooden_form>.anyDamage().transformDamage(),<item:geggy:primitive_brick_dust>],
	[]]);

craftingTable.addShaped("clay_brick", <item:geggy:unfired_clay_brick> * 8, [
	[<item:minecraft:clay_ball>,<item:minecraft:clay_ball>,<item:minecraft:clay_ball>],
	[<item:minecraft:clay_ball>,<item:geggy:wooden_form>.anyDamage().transformDamage(),<item:minecraft:clay_ball>],
	[<item:minecraft:clay_ball>,<item:minecraft:clay_ball>,<item:minecraft:clay_ball>]]);
	
craftingTable.addShaped("unfired_coke_oven_brick", <item:geggy:unfired_coke_oven_brick> * 3, [
	[<item:minecraft:clay_ball>,<item:minecraft:clay_ball>,<item:minecraft:clay_ball>],
	[<item:minecraft:gravel>,<item:geggy:wooden_form>.anyDamage().transformDamage(),<item:minecraft:gravel>],
	[<tag:items:minecraft:sand>,<tag:items:minecraft:sand>,<tag:items:minecraft:sand>]]);

// not supported, lol clownshoes, 1.18 too advanced to add tooltips
//<tag:fluids:geghilarity:nitric_acid>.asIIngredient().addTooltip("Storage, what can I say more?");