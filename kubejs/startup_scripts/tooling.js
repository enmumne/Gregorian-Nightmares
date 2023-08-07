/*
onEvent("item.modification", event => {

	//Supports any tool that has a damage, like shovel, pickaxe
	event.modify("iron_pickaxe", modification => {
		modification.setAttackDamage(5)

	})

})

onEvent("item.modification", event => {

	//Supports any tool that has a damage, like shovel, pickaxe
	event.modify("iron_pickaxe", item => {
item.tier = tierOptions => {
tierOptions.uses = 20
}
})
*/

// iron 250 gold 32 diamond 1561 neth 2031

/*
ItemEvents.modification(event => {
    event.modify('environmentz:heating_stones', pickaxe => {
        pickaxe.setMaxDamage(900);
    });
});
*/

/*
ItemEvents.modification(event => {
    event.modify('minecraft:torch', tor => {
		tor.enchantments:"minecraft:fire_aspect";
    });
});
*/

/*   uses  
	Wooden: 60
    Stone: 132
    Iron: 251
    Golden: 33
    Diamond: 1562
    Netherite: 2032
	
	diamond: obsidian, ancient debris
	iron: redstone, diamond, emerald, gold (precious only need stone), 
*/	

ItemEvents.toolTierRegistry (event => {

  event.add('flint', tier => {
    tier.uses = 180
    tier.speed = 3.0
    tier.attackDamageBonus = 1.1
    tier.level = 1
    tier.enchantmentValue = 14
	tier.repairIngredient = 'minecraft:flint'
  })
  event.add('bronze', tier => {
    tier.uses = 280
    tier.speed = 4.0
    tier.attackDamageBonus = 1.2
    tier.level = 1
    tier.enchantmentValue = 14
	tier.repairIngredient = 'modern_industrialization:bronze_ingot'
  })

  
})


ItemEvents.modification(event => {
    event.modify('minecraft:iron_pickaxe', pickaxe => {
        pickaxe.setMaxDamage(400)
    })

    event.modify('minecraft:golden_pickaxe', pickaxe => {
        pickaxe.setMaxDamage(52)
    })

    event.modify('minecraft:diamond_pickaxe', pickaxe => {
        pickaxe.setMaxDamage(2000)
    })


    event.modify('minecraft:netherite_pickaxe', pickaxe => {
        pickaxe.setMaxDamage(2500)
    })


    event.modify('minecraft:iron_axe', axe => {
        axe.setMaxDamage(400)
    })
	

    event.modify('minecraft:golden_axe', axe => {
        axe.setMaxDamage(52)
    })


    event.modify('minecraft:diamond_axe', axe => {
        axe.setMaxDamage(2000)
    })


    event.modify('minecraft:netherite_axe', axe => {
        axe.setMaxDamage(2500)
    })


    event.modify('minecraft:iron_sword', sword => {
        sword.setMaxDamage(400)
    })

    event.modify('minecraft:golden_sword', sword => {
        sword.setMaxDamage(52)
    })


    event.modify('minecraft:diamond_sword', sword => {
        sword.setMaxDamage(2000)
    })


    event.modify('minecraft:netherite_sword', sword => {
        sword.setMaxDamage(2500)
    })



    event.modify('minecraft:iron_hoe', hoe => {
        hoe.setMaxDamage(400)
    })


    event.modify('minecraft:golden_hoe', hoe => {
        hoe.setMaxDamage(52)
    })


    event.modify('minecraft:diamond_hoe', hoe => {
        hoe.setMaxDamage(2000)
    })


    event.modify('minecraft:netherite_hoe', hoe => {
        hoe.setMaxDamage(2500)
    })



    event.modify('minecraft:iron_shovel', shovel => {
        shovel.setMaxDamage(400)
    })


    event.modify('minecraft:golden_shovel', shovel => {
        shovel.setMaxDamage(52)
    })


    event.modify('minecraft:diamond_shovel', shovel => {
        shovel.setMaxDamage(2000)
    })


    event.modify('minecraft:netherite_shovel', shovel => {
        shovel.setMaxDamage(2500)
    })


// helmet, chestplate, leggings, boots
// turtle shell 275


    event.modify('minecraft:turtle_helmet', helmet => {
        helmet.setMaxDamage(450)
    })



// leather 55, 80 75 65


    event.modify('minecraft:leather_helmet', helmet => {
        helmet.setMaxDamage(80)
    })


    event.modify('minecraft:leather_chestplate', chestplate => {
        chestplate.setMaxDamage(120)
    })


    event.modify('minecraft:leather_leggings', leggings => {
        leggings.setMaxDamage(100)
    })


    event.modify('minecraft:leather_boots', boots => {
        boots.setMaxDamage(85)
    })


// diamond 363, 528, 495, 429


    event.modify('minecraft:diamond_helmet', helmet => {
        helmet.setMaxDamage(550)
    })


    event.modify('minecraft:diamond_chestplate', chestplate => {
        chestplate.setMaxDamage(700)
    })


    event.modify('minecraft:diamond_leggings', leggings => {
        leggings.setMaxDamage(650)
    })


    event.modify('minecraft:diamond_boots', boots => {
        boots.setMaxDamage(550)
    })


// chainmail 165, 240, 225, 195
// bop??


// iron 165, 240, 225, 195 


    event.modify('minecraft:iron_helmet', helmet => {
        helmet.setMaxDamage(240)
    })


    event.modify('minecraft:iron_chestplate', chestplate => {
        chestplate.setMaxDamage(400)
    })


    event.modify('minecraft:iron_leggings', leggings => {
        leggings.setMaxDamage(350)
    })


    event.modify('minecraft:iron_boots', boots => {
        boots.setMaxDamage(300)
    })


// netherite 407, 592, 555, 481


    event.modify('minecraft:netherite_helmet', helmet => {
        helmet.setMaxDamage(650)
    })


    event.modify('minecraft:netherite_chestplate', chestplate => {
        chestplate.setMaxDamage(850)
    })


    event.modify('minecraft:netherite_leggings', leggings => {
        leggings.setMaxDamage(780)
    })


    event.modify('minecraft:netherite_boots', boots => {
        boots.setMaxDamage(680)
    })


// golden 77, 112, 105, 91


    event.modify('minecraft:golden_helmet', helmet => {
        helmet.setMaxDamage(120)
    })


    event.modify('minecraft:golden_chestplate', chestplate => {
        chestplate.setMaxDamage(150)
    })


    event.modify('minecraft:golden_leggings', leggings => {
        leggings.setMaxDamage(130)
    })


    event.modify('minecraft:golden_boots', boots => {
        boots.setMaxDamage(110)
    })
	
});

// DJJJJIFICATION TWO~!!!

//onEvent('item.registry', (event) => {
StartupEvents.registry('item', event => {

event.create('geggy:j_tool_rod').displayName('Tool Rod');

event.create('geggy:j_planks').displayName('Prepared Planks');

event.create('geggy:j_crafting_base').displayName('Crafting Base');
event.create('geggy:j_crafting_top').displayName('Crafting Top');

event.create('geggy:j_wooden_pickaxe_head').displayName('Wooden Pickaxe Head');
event.create('geggy:j_wooden_axe_head').displayName('Wooden Axe Head');
event.create('geggy:j_stone_pickaxe_head').displayName('Stone Pickaxe Head');
event.create('geggy:j_stone_axe_head').displayName('Stone Axe Head');

event.create('geggy:wooden_form', 'basic').displayName('Wooden Form').maxDamage(128);
//event.create('geggy:stone_bowl').displayName('Stone Bowl');
event.create('geggy:stone_mortar', 'basic').displayName('Stone Mortar').maxDamage(128);
//event.create('geggy:soft_hammer', 'basic').displayName('Soft Hammer').maxDamage(50);

event.create('geggy:wood_pulp').displayName('Wood Pulp');
event.create('geggy:quartz_sand').displayName('Quartz Sand');
event.create('geggy:glass_dust').displayName('Glass Dust');
event.create('geggy:flint_dust_tiny').displayName('Tiny Pile of Flint Dust');
event.create('geggy:flint_dust').displayName('Flint Dust');
event.create('geggy:clay_dust').displayName('Clay Dust');
event.create('geggy:kelp_dust').displayName('Kelp Dust');
event.create('geggy:chad').displayName('Chad');
event.create('geggy:uncooked_primitive_brick').displayName('Uncooked Primitive Brick');
event.create('geggy:primitive_brick').displayName('Primitive Brick');

event.create('geggy:primitive_brick_dust').displayName('Primitive Brick Dust');
event.create('geggy:unfired_tempered_dust').displayName('Unfired Tempered Brick Dust');
event.create('geggy:unfired_tempered_brick').displayName('Unfired Tempered Brick');
event.create('geggy:tempered_brick').displayName('Tempered Brick');

event.create('geggy:unfired_clay_brick');
event.create('geggy:clay_brick');
 
//event.create('geggy:clay_brick_dust');

event.create('geggy:small_brick_dust').displayName('Small Pile of Brick Dust');

event.create('geggy:unfired_coke_oven_brick');

event.create('geggy:compressed_fireclay');

event.create('geggy:wrought_dust').displayName('Wrought Iron Dust');
event.create('geggy:wrought_small_dust').displayName('Small Pile of Wrought Iron');
event.create('geggy:wrought_nugget').displayName('Wrought Iron Nugget');
event.create('geggy:wrought_ingot').displayName('Wrought Iron Ingot');
event.create('geggy:wrought_plate').displayName('Wrought Iron Plate');
event.create('geggy:mold').displayName('Steel Mold');
event.create('geggy:mold_ball').displayName('Ball Mold');
event.create('geggy:mold_block').displayName('Block Mold');
event.create('geggy:mold_bottle').displayName('Ball Mold');
event.create('geggy:mold_ingot').displayName('Ingot Mold');
event.create('geggy:mold_nugget').displayName('Nugget Mold');
event.create('geggy:mold_plate').displayName('Plate Mold');
event.create('geggy:mold_rod').displayName('Rod Mold');

event.create('geggy:invar_curved_plate');

event.create('geggy:biocircuit').displayName('Programmed Bio Circuit');
event.create('geggy:gb_cellulose_fiber').displayName('Golden-Brown Cellulose Fiber');
event.create('geggy:gb_biomass').displayName('Golden-Brown Biomass');
event.create('geggy:plant_mass');
event.create('geggy:bio_chaff');

event.create('geggy:netherrack_dust')

event.create('geggy:endstone_dust');

event.create('geggy:sharp_plate');
event.create('geggy:unfinished_bucket');
event.create('geggy:iron_curved_plate');

event.create('geggy:reinforced_glass_pane');
event.create('geggy:reinforced_glass_mixture');

event.create('geggy:selector_1');
event.create('geggy:selector_2');
event.create('geggy:selector_3');
event.create('geggy:selector_4');
event.create('geggy:selector_5');

event.create('geggy:incomplete_copper_frame'); // 2 plates
event.create('geggy:small_copper_frame'); // 2 plates 2 bolts
event.create('geggy:ready_small_copper_frame'); // holed
event.create('geggy:dented_small_copper_frame'); // all dents
event.create('geggy:incomplete_cogwheel'); // few dents
event.create('geggy:round_small_copper_frame');


event.create('geggy:copper_quadrant');
event.create('geggy:incomplete_quadrant');
event.create('geggy:dented_quadrant');
event.create('geggy:large_copper_dented');
event.create('geggy:holed_large_copper_dented');
event.create('geggy:incomplete_large_copper_dented');

//////////////
event.create('geggy:incomplete_empty_blaze_burner'); 
event.create('geggy:hot_steel_ingot');
event.create('geggy:incomplete_steel_ingot');
event.create('geggy:blackened_rod');
event.create('geggy:blackened_plate');
event.create('geggy:compressed_netherrack');
event.create('geggy:incomplete_compressed_netherrack');
event.create('geggy:incomplete_copper_casing');
event.create('geggy:incomplete_brass_casing');
event.create('geggy:incomplete_gearbox');
event.create('geggy:unfired_pickaxe_mold');
event.create('geggy:pickaxe_mold');
event.create('geggy:filled_pickaxe_mold');
event.create('geggy:bronze_pickaxe_head');

event.create('geggy:incomplete_chest');
event.create('geggy:incomplete_toolbox');
event.create('geggy:incomplete_barrel');
event.create('geggy:incomplete_extdw').displayName('Incomplete Drawer');
event.create('geggy:incomplete_extdw_d').displayName('Incomplete Double Drawer');
event.create('geggy:incomplete_extdw_q').displayName('Incomplete Quad Drawer');
//event.create('geggy:uncooked_seared_brick');
event.create('geggy:unfinished_iron_helmet');
event.create('geggy:unfinished_iron_chestplate');
event.create('geggy:unfinished_iron_leggings');
event.create('geggy:unfinished_iron_boots');
event.create('geggy:unfinished_gold_helmet');
event.create('geggy:unfinished_gold_chestplate');
event.create('geggy:unfinished_gold_leggings');
event.create('geggy:unfinished_gold_boots');
event.create('geggy:unfinished_diamond_helmet');
event.create('geggy:unfinished_diamond_chestplate');
event.create('geggy:unfinished_diamond_leggings');
event.create('geggy:unfinished_diamond_boots');
event.create('geggy:incomplete_basic_hull');
event.create('geggy:basic_hull');
event.create('geggy:incomplete_basic_machine_hull');
event.create('geggy:treated_plank'); // tannin
event.create('geggy:hardened_plank'); // creosote
//event.create('geggy:pattern');

event.create('geggy:copper_can');
event.create('geggy:mulch_copper_can');
event.create('geggy:soaked_cured_leather');
event.create('geggy:damp_cured_leather');
event.create('geggy:cured_leather');
event.create('geggy:cured_leather_sheet');
event.create('geggy:cured_leather_strap');
event.create('geggy:cured_leather_cord');

event.create('geggy:mold_sword').displayName('Sword Mold');
event.create('geggy:mold_pickaxe').displayName('Pickaxe Mold');
event.create('geggy:mold_axe').displayName('Axe Mold');
event.create('geggy:mold_shovel').displayName('Shovel Mold');
event.create('geggy:mold_hoe').displayName('Hoe Mold');

event.create('geggy:diamond_sword_head');
event.create('geggy:diamond_pickaxe_head');
event.create('geggy:diamond_axe_head');
event.create('geggy:diamond_shovel_head');
event.create('geggy:diamond_hoe_head');

event.create('geggy:unrefined_clay');
event.create('geggy:clay_copper_can').displayName('Clayed Copper Can');
event.create('geggy:gravel_dust');
event.create('geggy:andesite_dust');
event.create('geggy:andesite_mix');

//event.create('geggy:straw');
event.create('geggy:fiber');
event.create('geggy:dried_fiber');
event.create('geggy:fiber_pulp');
event.create('geggy:filtered_pulp');
event.create('geggy:fiber_pressed').displayName('Pressed Fiber');
event.create('geggy:twine');
event.create('geggy:linen');

event.create('geggy:chadded_copper_can').displayName('Chad Copper Can')
event.create('geggy:limestone_dust');
event.create('geggy:incomplete_bronze_gear');
event.create('geggy:incomplete_iron_gear');
event.create('geggy:incomplete_tin_gear');
event.create('geggy:incomplete_gold_gear');
event.create('geggy:incomplete_steel_gear');
event.create('geggy:incomplete_invar_gear');
event.create('geggy:incomplete_copper_gear');

event.create('geggy:rubber_pulp');
event.create('geggy:heated_rubber');

event.create('geggy:diamond_shards');

//////////////////

event.create('geggy:muddy_coke_oven_blend'); 
event.create('geggy:pig_iron_ingot');
event.create('geggy:tiny_iron_blend_dust');

event.create('geggy:potin_dust');
event.create('geggy:potin_ingot');
event.create('geggy:potin_plate');
event.create('geggy:potin_curved_plate');

event.create('geggy:incomplete_fluid_pipe');
event.create('geggy:incomplete_item_pipe');

event.create('geggy:pitch_binder');
event.create('geggy:fluid_filter');

event.create('geggy:slag');

event.create('geggy:hsla_ingot').displayName('HSLA Steel Ingot')
event.create('geggy:hsla_shaft_unit').displayName('HSLA Steel Shaft Unit')
event.create('geggy:hsla_ring').displayName('HSLA Steel Ring')
event.create('geggy:hsla_plate').displayName('HSLA Steel Plate')
event.create('geggy:hsla_bolt').displayName('HSLA Steel Bolt')
event.create('geggy:incomplete_hsla_gear').displayName('Incomplete HSLA Steel Gear')
event.create('geggy:hsla_gear').displayName('HSLA Steel Gear')
event.create('geggy:brittle_iron')
event.create('geggy:saltpeter')

event.create('drilly:hsla_2x_gear_unit').displayName('HSLA 2x Gear Unit')
event.create('drilly:impeller')
event.create('drilly:base_panel')
event.create('drilly:propeller_blade')
event.create('drilly:turbine')
event.create('drilly:steam_turbine_core')
event.create('drilly:steel_shaft_bearing')
event.create('drilly:ball_bearing')
event.create('drilly:steel_shaft_core')
event.create('drilly:hub')
event.create('drilly:mount')
event.create('drilly:ignition_unit')
event.create('drilly:combustor')
event.create('drilly:radiator')
event.create('drilly:spring_ingot')
event.create('drilly:cylinder')

event.create('drilly:hsla_drill_head').displayName('HSLA Drill Head')
event.create('drilly:incomplete_hsla_drill_head').displayName('Incomplete HSLA Drill Head')
event.create('drilly:incomplete_hsla_base_drill').displayName('Incomplete HSLA Base Drill')

////
event.create('geggy:bronze_piston')
event.create('geggy:bronze_motor')
event.create('geggy:bronze_pump')
event.create('geggy:small_bronze_gear')
event.create('geggy:vacuum_tube_components')
event.create('geggy:vacuum_tube')
event.create('geggy:glass_tube')
event.create('geggy:red_alloy_ingot')
event.create('geggy:red_alloy_plate')
event.create('geggy:red_alloy_wire')
event.create('geggy:fine_red_alloy_wire')
event.create('geggy:book_binding')
event.create('geggy:incomplete_book')

event.create('geggy:rose_quartz_tube')

event.create('geggy:tin_conduct')
event.create('geggy:tin_spring')

/*
.tooltip('§8')

ItemEvents.tooltip(tooltip => {

tooltip.add('mod:item', ["", "", ''])

});

*/

event.create('geggy:flint_pickaxe', 'pickaxe').tier('flint')
event.create('geggy:bronze_pickaxe', 'pickaxe').tier('bronze')

})

StartupEvents.registry('fluid', event => {

	event
    .create('geggy:tannin')
  	//.displayName('Nitrogen Dioxide') 
	.thinTexture(0x613E34)
    .noBucket
	
	event
    .create('geggy:molten_diamond')
	.thinTexture(0x45DDCA)
    .noBucket
	
	event
    .create('geggy:liquid_clay')
	.thinTexture(0xA3ADC8)
    .noBucket
	
	event
    .create('geggy:fiber_pulpy')
	.thinTexture(0xC3BDAE)
    .noBucket
	
	event
    .create('geggy:resin')
	.thinTexture(0xBB9035)
    .noBucket
	
	event
    .create('geggy:glue')
	.thinTexture(0xCDB583)
    .noBucket
	
	event
    .create('geggy:molten_rose_quartz')
	.thinTexture(0xC94771)
    .noBucket
	
})	

//onEvent('block.registry', (event) => {
StartupEvents.registry('block', event => {

event.create('geggy:j_stripped_log').material('wood').displayName('Multiuse Stripped Log').hardness(3).tagBlock('minecraft:mineable/axe')
event.create('geggy:reinforced_glass').material('glass').hardness(3).tagBlock('minecraft:mineable/pickaxe').defaultTranslucent()
event.create('geggy:clay_bricks');

// 1/19 missing grout, tinkers
event.create('geggy:craut').displayName('Craut').tagBlock('minecraft:mineable/shovel');

})


