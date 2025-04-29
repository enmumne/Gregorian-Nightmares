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
	Wooden: 60 > 50
    Stone: 132 > 100
    Iron: 251 > 400 
    Golden: 33 > 52
    Diamond: 1562 > 2000 > reset
    Netherite: 2032 > 2500 > reset
	
	diamond: obsidian, ancient debris
	iron: redstone, diamond, emerald, gold (precious only need stone), 
*/	

ItemEvents.toolTierRegistry (event => {
	
	// vanilla axe, stone 9, iron 9, diamond 9
	// vanilla sword, stone 5, iron 6, diamond 7  
	// modded axe, stone 5, iron 6, diamond 7	
	// modded sword, stone 4, iron 5, diamond 6 
	// raw
	// flint axe 8.4 0.9s, reinforced 8.8 0.9 
	// flint sword 5.4 1.6s, reinforced 5.8 1.6s


  event.add('flint', tier => {
    tier.uses = 140
    tier.speed = 4.2
    tier.attackDamageBonus = 1.4
    tier.level = 0
    tier.enchantmentValue = 14
	tier.repairIngredient = 'minecraft:flint'
  })
  event.add('reinforced_flint', tier => {
    tier.uses = 220
    tier.speed = 5.2
    tier.attackDamageBonus = 1.8
    tier.level = 1
    tier.enchantmentValue = 14
	tier.repairIngredient = 'minecraft:flint'
  })
  event.add('bronze', tier => {
    tier.uses = 280
    tier.speed = 6.0
    tier.attackDamageBonus = 2.5
    tier.level = 1
    tier.enchantmentValue = 14
	tier.repairIngredient = 'modern_industrialization:bronze_ingot'
  })
  event.add('steel', tier => {
    tier.uses = 500
    tier.speed = 6.0
    tier.attackDamageBonus = 2.5
    tier.level = 2
    tier.enchantmentValue = 1
	tier.repairIngredient = 'modern_industrialization:steel_plate'
  })
  event.add('galvanized', tier => {
    tier.uses = 600
    tier.speed = 6.2
    tier.attackDamageBonus = 2.5
    tier.level = 2
    tier.enchantmentValue = 5
	tier.repairIngredient = 'geggy:galvanized_steel_plate'
  })
 
})	

// feet / leg / chest / head
// durability multiplies 13,15,16,11

ItemEvents.armorTierRegistry(event => {
    event.add('steel', tier => {
        tier.durabilityMultiplier = 27;
        tier.slotProtections = [2, 5, 7, 2];
        tier.enchantmentValue = 0;
        tier.equipSound = 'minecraft:item.armor.equip_iron';
        tier.repairIngredient = 'modern_industrialization:steel_plate';
        tier.toughness = 0.5;
        tier.knockbackResistance = 0.05;
    })
	
	event.add('bronze', tier => {
        tier.durabilityMultiplier = 8;
        tier.slotProtections = [1, 3, 4, 1];
        tier.enchantmentValue = 15;
        tier.equipSound = 'minecraft:item.armor.equip_iron';
        tier.repairIngredient = 'modern_industrialization:bronze_plate';
        tier.toughness = 0.0;
        tier.knockbackResistance = 0.0;
    });
})

ItemEvents.modification(event => {
	
	// stone & wood nerf, more space for flint
	event.modify('minecraft:wooden_pickaxe', pickaxe => {
        pickaxe.setMaxDamage(50)
    })
	event.modify('minecraft:wooden_axe', pickaxe => {
        pickaxe.setMaxDamage(50)
    })
	event.modify('minecraft:wooden_hoe', pickaxe => {
        pickaxe.setMaxDamage(50)
    })
	event.modify('minecraft:wooden_sword', pickaxe => {
        pickaxe.setMaxDamage(50)
    })
	event.modify('minecraft:wooden_shovel', pickaxe => {
        pickaxe.setMaxDamage(50)
    })
	
	event.modify('minecraft:stone_pickaxe', pickaxe => {
        pickaxe.setMaxDamage(100)
    })
	event.modify('minecraft:stone_axe', pickaxe => {
        pickaxe.setMaxDamage(100)
    })
	event.modify('minecraft:stone_hoe', pickaxe => {
        pickaxe.setMaxDamage(100)
    })
	event.modify('minecraft:stone_sword', pickaxe => {
        pickaxe.setMaxDamage(100)
    })
	event.modify('minecraft:stone_shovel', pickaxe => {
        pickaxe.setMaxDamage(100)
    })
	
	
    event.modify('minecraft:iron_pickaxe', pickaxe => {
        pickaxe.setMaxDamage(400)
    })
    event.modify('minecraft:golden_pickaxe', pickaxe => {
        pickaxe.setMaxDamage(52)
    })


    event.modify('minecraft:iron_axe', axe => {
        axe.setMaxDamage(400)
    })
    event.modify('minecraft:golden_axe', axe => {
        axe.setMaxDamage(52)
    })


    event.modify('minecraft:iron_sword', sword => {
        sword.setMaxDamage(400)
    })
    event.modify('minecraft:golden_sword', sword => {
        sword.setMaxDamage(52)
    })
	

    event.modify('minecraft:iron_hoe', hoe => {
        hoe.setMaxDamage(400)
    })
    event.modify('minecraft:golden_hoe', hoe => {
        hoe.setMaxDamage(52)
    })
	

    event.modify('minecraft:iron_shovel', shovel => {
        shovel.setMaxDamage(400)
    })
    event.modify('minecraft:golden_shovel', shovel => {
        shovel.setMaxDamage(52)
    })


// helmet, chestplate, leggings, boots
// turtle shell 275


    event.modify('minecraft:turtle_helmet', helmet => {
        helmet.setMaxDamage(350)
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


// chainmail 165, 240, 225, 195
// bop??


// iron 165, 240, 225, 195 


    event.modify('minecraft:iron_helmet', helmet => {
        helmet.setMaxDamage(220)
    })


    event.modify('minecraft:iron_chestplate', chestplate => {
        chestplate.setMaxDamage(360)
    })


    event.modify('minecraft:iron_leggings', leggings => {
        leggings.setMaxDamage(320)
    })


    event.modify('minecraft:iron_boots', boots => {
        boots.setMaxDamage(260)
    })


// netherite 407, 592, 555, 481


// golden 77, 112, 105, 91


    event.modify('minecraft:golden_helmet', helmet => {
        helmet.setMaxDamage(100)
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
	
	
	
	// * 20 = EU // 64k eu = 16 items = 3200 here
	// bucket creosote should smelt 40 items, 160k eu stored
	event.modify('modern_industrialization:coke', item => {   
		item.burnTime = 3200
	})
	event.modify('modern_industrialization:coke_dust', item => {   
		item.burnTime = 3200
	})
	event.modify('modern_industrialization:creosote_bucket', item => {   
		item.burnTime = 8000
	})
	event.modify('modern_industrialization:coke_block', item => {   
		item.burnTime = 32000
	})
	event.modify('minecraft:charcoal', item => {   
		item.burnTime = 900
	})
	
	event.modify('farmersdelight:tree_bark', item => {   
		item.burnTime = 25
	})
	event.modify('geggy:oak_bark', item => {   
		item.burnTime = 25
	})
	event.modify('geggy:dark_oak_bark', item => {   
		item.burnTime = 25
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
event.create('geggy:mold_bottle').displayName('Bottle Mold');
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

event.create('geggy:endstone_dust').texture('kubejs:item/dust_dull').color(0, '#80835D');
//event.create('geggy:endstone_dust')

event.create('geggy:sharp_plate');
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
event.create('geggy:unfired_axe_mold');
event.create('geggy:axe_mold');
event.create('geggy:filled_axe_mold');
event.create('geggy:bronze_axe_head');
event.create('geggy:unfired_shovel_mold');
event.create('geggy:shovel_mold');
event.create('geggy:filled_shovel_mold');
event.create('geggy:bronze_shovel_head');
event.create('geggy:unfired_sword_mold');
event.create('geggy:sword_mold');
event.create('geggy:filled_sword_mold');
event.create('geggy:bronze_sword_head');
event.create('geggy:unfired_hoe_mold');
event.create('geggy:hoe_mold');
event.create('geggy:filled_hoe_mold');
event.create('geggy:bronze_hoe_head');

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
event.create('geggy:silty_copper_can').displayName('Silty Copper Can');
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

event.create('geggy:plant_ball').displayName('Plant Ball');

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

event.create('geggy:enderpearl_dust')
event.create('geggy:item_filter')
event.create('geggy:zinc_foil')
event.create('geggy:steel_wire')
event.create('geggy:steel_fine_wire')
event.create('geggy:endereye_dust')
event.create('geggy:energetic_alloy_dust')
event.create('geggy:vibrant_alloy_dust')
event.create('geggy:conductive_iron_dust')
event.create('geggy:black_steel_dust')
event.create('geggy:red_alloy_dust')
event.create('geggy:black_bronze_dust')
event.create('geggy:hot_vibrant_alloy_ingot')
event.create('geggy:vibrant_alloy_ingot')
event.create('geggy:vibrant_alloy_plate')
event.create('geggy:vibrant_alloy_ring')
event.create('geggy:vibrant_alloy_rotor')

event.create('geggy:raw_rubber_dust')
event.create('geggy:propolis')
event.create('geggy:sticky_resin')

event.create('geggy:black_steel_ingot')
event.create('geggy:black_steel_plate')
event.create('geggy:black_steel_wire')
event.create('geggy:black_steel_fine_wire')
event.create('geggy:aluminium_fine_wire')
event.create('geggy:low_voltage_coil')
event.create('geggy:medium_voltage_coil')
event.create('geggy:high_voltage_coil')
event.create('geggy:magnetic_iron_rod')
event.create('geggy:neodymium_ingot')
event.create('geggy:neodymium_rod')
event.create('geggy:magnetic_neodymium_rod')
event.create('geggy:tungstensteel_fine_wire')
event.create('geggy:extreme_voltage_coil')

event.create('geggy:brass_rod')
event.create('geggy:manganese_ingot')
event.create('geggy:manganese_rod')
event.create('geggy:quartzite_dust')
event.create('geggy:quartzite')
event.create('geggy:alumina_seed_crystal')
event.create('geggy:ruby_boule')
event.create('geggy:exquisite_ruby')
event.create('geggy:flawless_ruby')
event.create('geggy:ruby')

event.create('geggy:tin_alloy_ingot')
event.create('geggy:aluminium_foil')
event.create('geggy:bronze_foil')
event.create('geggy:nichrome_rod')


event.create('geggy:mince_meat')
event.create('geggy:hot_cement_clinker')
event.create('geggy:cement_clinker')
event.create('geggy:cement_dust')
event.create('geggy:animal_fat')
event.create('geggy:small_silver_pipe')
event.create('geggy:canned_magnesium_diboride')
event.create('geggy:magnesium_diboride_tube')
event.create('geggy:canned_mercury_barium_calcium_cuprate')
event.create('geggy:mercury_barium_calcium_cuprate_tube')
event.create('geggy:uranium_triplatinum_ingot')
event.create('geggy:uranium_triplatinum_fine_wire')
event.create('geggy:canned_samarium_iron_arsenic_oxide')
event.create('geggy:samarium_iron_arsenic_oxide_tube')
event.create('geggy:hot_tantalum_carbide_ingot')
event.create('geggy:tantalum_carbide_ingot')
event.create('geggy:tantalum_carbide_plate')
event.create('geggy:hot_titanium_carbide_ingot')
event.create('geggy:titanium_carbide_ingot')
event.create('geggy:titanium_carbide_plate')
event.create('geggy:hot_tungstencarbide_ingot')
event.create('geggy:tungstencarbide_ingot')
event.create('geggy:tungstencarbide_rod')
event.create('geggy:hot_molybdenum_disilicide_ingot')
event.create('geggy:molybdenum_disilicide_ingot')
event.create('geggy:molybdenum_disilicide_double_ingot')
event.create('geggy:molybdenum_disilicide_long_rod')
event.create('geggy:molybdenum_disilicide_double_plate')
event.create('geggy:polycaprolactam_bar')
event.create('geggy:nylon_string')
event.create('geggy:gaseous_rocks')

event.create('geggy:rtm_alloy_hot_ingot').displayName('RTM Alloy Hot Ingot')
event.create('geggy:rtm_alloy_ingot').displayName('RTM Alloy Ingot')
event.create('geggy:rtm_alloy_plate').displayName('RTM Alloy Plate')
event.create('geggy:vanadiumsteel_dust')
event.create('geggy:vanadiumsteel_ingot')
event.create('geggy:vanadiumsteel_plate')
event.create('geggy:tungstencarbide_plate')
event.create('geggy:osmiridium_hot_ingot')
event.create('geggy:osmiridium_ingot')
event.create('geggy:osmiridium_plate')
event.create('geggy:trinium_plate')
event.create('geggy:hss-s_plate').displayName('HSS-S Plate')
event.create('geggy:enriched_naquadah_hot_ingot')
event.create('geggy:enriched_naquadah_ingot')
event.create('geggy:enriched_naquadah_plate')
event.create('geggy:naquadah_alloy_hot_ingot')
event.create('geggy:naquadah_alloy_ingot')
event.create('geggy:naquadria_hot_ingot')
event.create('geggy:naquadria_ingot')
event.create('geggy:naquadria_plate')
event.create('geggy:tritanium_ingot')
event.create('geggy:tritanium_plate')
event.create('geggy:nichrome_wire')
event.create('geggy:rtm_alloy_wire').displayName('RTM Alloy Wire')
event.create('geggy:hss-s_wire').displayName('HSS-S Wire')
event.create('geggy:naquadah_wire')
event.create('geggy:trinium_wire')
event.create('geggy:tritanium_wire')
event.create('geggy:stainless_steel_foil')
event.create('geggy:vanadiumsteel_foil')
event.create('geggy:tungstencarbide_foil')
event.create('geggy:osmiridium_foil')
event.create('geggy:enriched_naquadah_foil')
event.create('geggy:naquadria_foil')

event.create('geggy:uncorked_glass_bottle')
event.create('geggy:bottle_cork')
event.create('geggy:tree_bark_dust')
event.create('geggy:ground_tree_bark')
event.create('geggy:mixed_cork')
event.create('geggy:pressed_cork')
event.create('geggy:oak_bark')
event.create('geggy:dark_oak_bark')

event.create('geggy:gold_pickaxe_head')
event.create('geggy:gold_axe_head')
event.create('geggy:gold_sword_head')
event.create('geggy:gold_hoe_head')
event.create('geggy:gold_shovel_head')

event.create('geggy:crushed_precious_ore')
event.create('geggy:purified_precious_ore')

event.create('geggy:netherite_dust')
event.create('geggy:netherium_dust')
event.create('geggy:netherite_hot_ingot')

event.create('geggy:flint_pickaxe_left_arm')
event.create('geggy:flint_pickaxe_right_arm')
event.create('geggy:flint_pickaxe_head_main')
event.create('geggy:dull_flint_pickaxe_head')
event.create('geggy:sharpened_flint_pickaxe_head')
event.create('geggy:rose_quartz_blend')

event.create('geggy:sugar_cane_dust')
event.create('geggy:malted_grain')

event.create('geggy:iron_screw')
event.create('geggy:magnetic_iron_bolt')
event.create('geggy:red_alloy_rod')
event.create('geggy:red_alloy_bolt')
event.create('geggy:zinc_rod')
event.create('geggy:zinc_ring')
event.create('geggy:round_glass_pane')
event.create('geggy:small_coal_dust').displayName('Small Pile of Coal Dust')

event.create('geggy:galvanized_steel_plate') // 16
event.create('geggy:galvanized_steel_curved_plate') // 16
event.create('geggy:galvanized_steel_rod') // 8
event.create('geggy:galvanized_steel_bolt') // 2
event.create('geggy:galvanized_steel_small_gear') // 16
event.create('geggy:galvanized_steel_gear') // 64
event.create('geggy:galvanized_steel_ring') // 4
event.create('geggy:long_galvanized_steel_rod') // 4

event.create('geggy:incomplete_galvanized_plate')
event.create('geggy:incomplete_galvanized_curved_plate')
event.create('geggy:incomplete_galvanized_gear')
event.create('geggy:incomplete_galvanized_ring')
event.create('geggy:incomplete_long_galvanized_rod')
event.create('geggy:incomplete_galvanized_machine_casing')

event.create('geggy:steel_minecart_wheels')
event.create('geggy:hardened_stick')

event.create('geggy:gold_chip')

event.create('geggy:unfired_bucket_mold_side')
event.create('geggy:bucket_mold_side')
event.create('geggy:ready_unfinished_bucket_side');
event.create('geggy:smelted_unfinished_bucket_side');
event.create('geggy:bucket_side');

event.create('geggy:base_connector');

event.create('geggy:raw_stibnite');
event.create('geggy:stibnite_dust');
event.create('geggy:enhanced_battery_alloy_plate');
event.create('geggy:enhanced_battery_alloy_curved_plate');
event.create('geggy:polished_copper_plate');
event.create('geggy:raw_bucket');
event.create('geggy:unlit_torch');
event.create('geggy:cathode_mix');
event.create('geggy:andesite_alloy_slice');
event.create('geggy:hardened_andesite_alloy');
event.create('geggy:simple_pipe_motor');

event.create('geggy:copper_blade_part');
event.create('geggy:tin_blade_part');
event.create('geggy:bronze_blade_part');
event.create('geggy:aluminum_blade_part');
event.create('geggy:stainless_steel_blade_part');
event.create('geggy:titanium_blade_part');

event.create('geggy:certus_quartz_rod');
event.create('geggy:flummox_crystal').displayName('Flummoxed Crystal');
event.create('geggy:slick_bloody_crystal');
event.create('geggy:computer_monitor_cover');
event.create('geggy:ccf').displayName('Cheap Chinese Fan');

event.create('geggy:sand_dust');

/*
.tooltip('§8')

ItemEvents.tooltip(tooltip => {

tooltip.add('mod:item', ["", "", ''])

});

*/

event.create('geggy:reinforced_tool_rod')
event.create('geggy:low_grade_resin_raw')
event.create('geggy:low_grade_resin')

event.create('geggy:flint_pickaxe', 'pickaxe').tier('flint')
event.create('geggy:flint_axe', 'axe').tier('flint')
event.create('geggy:flint_sword', 'sword').tier('flint')
event.create('geggy:flint_shovel', 'shovel').tier('flint')
event.create('geggy:flint_hoe', 'hoe').tier('flint')

event.create('geggy:reinforced_flint_pickaxe', 'pickaxe').tier('reinforced_flint')
event.create('geggy:reinforced_flint_axe', 'axe').tier('reinforced_flint')
event.create('geggy:reinforced_flint_sword', 'sword').tier('reinforced_flint')
event.create('geggy:reinforced_flint_shovel', 'shovel').tier('reinforced_flint')
event.create('geggy:reinforced_flint_hoe', 'hoe').tier('reinforced_flint')

event.create('geggy:bronze_pickaxe', 'pickaxe').tier('bronze')
event.create('geggy:bronze_axe', 'axe').tier('bronze')
event.create('geggy:bronze_sword', 'sword').tier('bronze')
event.create('geggy:bronze_shovel', 'shovel').tier('bronze')
event.create('geggy:bronze_hoe', 'hoe').tier('bronze')

event.create('geggy:steel_pickaxe', 'pickaxe').tier('steel')
event.create('geggy:steel_axe', 'axe').tier('steel')
event.create('geggy:steel_sword', 'sword').tier('steel')
event.create('geggy:steel_shovel', 'shovel').tier('steel')
event.create('geggy:steel_hoe', 'hoe').tier('steel')

event.create('gegology:copper_chunk').texture('gegology:item/gt-chunk').color(0xFF825A)

	// from MI:foundation
	function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
	}

	let gegologyore = (name, hex) => {
		event.create('gegology:'+name+'_ore')
			.displayName(capitalize(name)+' Ore').texture('gegology:item/gt-ore').color(hex);
        event.create('gegology:crushed_'+name+'_ore')
			.displayName('Crushed '+capitalize(name)+' Ore').texture('gegology:item/gt-crushed').color(hex);
		event.create('gegology:tiny_crushed_'+name+'_ore')
			.displayName('Tiny Crushed '+capitalize(name)+' Ore').texture('gegology:item/gt-crushedtiny').color(hex);
		event.create('gegology:purified_'+name+'_ore')
			.displayName('Purified '+capitalize(name)+' Ore').texture('gegology:item/gt-purified').color(hex);
		event.create('gegology:tiny_purified_'+name+'_ore')
			.displayName('Tiny Purified '+capitalize(name)+' Ore').texture('gegology:item/gt-purifiedtiny').color(hex);
		event.create('gegology:refined_'+name+'_ore')
			.displayName('Refined '+capitalize(name)+' Ore').texture('gegology:item/gt-refined').color(hex);
		event.create('gegology:tiny_refined_'+name+'_ore')
			.displayName('Tiny Refined '+capitalize(name)+' Ore').texture('gegology:item/gt-refinedtiny').color(hex);
		event.create('gegology:'+name+'_dust')
			.displayName(capitalize(name)+' Dust').texture('gegology:item/gt-dust').color(hex);
		event.create('gegology:small_'+name+'_dust')
			.displayName('Small '+capitalize(name)+' Dust').texture('gegology:item/gt-dustsmall').color(hex);	
		event.create('gegology:tiny_'+name+'_dust')
			.displayName('Tiny '+capitalize(name)+' Dust').texture('gegology:item/gt-dusttiny').color(hex);	
		event.create('gegology:purified_'+name+'_dust')
			.displayName('Purified '+capitalize(name)+' Dust').texture('gegology:item/gt-purifieddust').color(hex);
		event.create('gegology:tiny_purified_'+name+'_dust')
			.displayName('Tiny Purified '+capitalize(name)+' Dust').texture('gegology:item/gt-purifieddusttiny').color(hex);	

    };

	gegologyore('azurite', 0x537DBC)
	gegologyore('cassiterite', 0xA2A2A2)
	gegologyore('kesterite', 0x5B875B)
	gegologyore('malachite', 0x055C05)
    gegologyore('tetrahedrite', 0xC01E00)
	
	
	
	let gegologycompore = (namepr, name, hex) => {
		event.create('gegology:'+namepr+'_'+name+'_ore')
			.displayName(''+capitalize(namepr)+' '+capitalize(name)+' Ore').texture('gegology:item/gt-ore').color(hex);
        event.create('gegology:crushed_'+namepr+'_'+name+'_ore')
			.displayName('Crushed '+capitalize(namepr)+' '+capitalize(name)+' Ore').texture('gegology:item/gt-crushed').color(hex);
		event.create('gegology:tiny_crushed_'+namepr+'_'+name+'_ore')
			.displayName('Tiny Crushed '+capitalize(namepr)+' '+capitalize(name)+' Ore').texture('gegology:item/gt-crushedtiny').color(hex);
		event.create('gegology:purified_'+namepr+'_'+name+'_ore')
			.displayName('Purified '+capitalize(namepr)+' '+capitalize(name)+' Ore').texture('gegology:item/gt-purified').color(hex);
		event.create('gegology:tiny_purified_'+namepr+'_'+name+'_ore')
			.displayName('Tiny Purified '+capitalize(namepr)+' '+capitalize(name)+' Ore').texture('gegology:item/gt-purifiedtiny').color(hex);
		event.create('gegology:refined_'+namepr+'_'+name+'_ore')
			.displayName('Refined '+capitalize(namepr)+' '+capitalize(name)+' Ore').texture('gegology:item/gt-refined').color(hex);
		event.create('gegology:tiny_refined_'+namepr+'_'+name+'_ore')
			.displayName('Tiny Refined '+capitalize(namepr)+' '+capitalize(name)+' Ore').texture('gegology:item/gt-refinedtiny').color(hex);
		event.create('gegology:'+namepr+'_'+name+'_dust')
			.displayName(''+capitalize(namepr)+' '+capitalize(name)+' Dust').texture('gegology:item/gt-dust').color(hex);
		event.create('gegology:small_'+namepr+'_'+name+'_dust')
			.displayName('Small '+capitalize(namepr)+' '+capitalize(name)+' Dust').texture('gegology:item/gt-dustsmall').color(hex);	
		event.create('gegology:tiny_'+namepr+'_'+name+'_dust')
			.displayName('Tiny '+capitalize(namepr)+' '+capitalize(name)+' Dust').texture('gegology:item/gt-dusttiny').color(hex);	
		event.create('gegology:purified_'+namepr+'_'+name+'_dust')
			.displayName('Purified '+capitalize(namepr)+' '+capitalize(name)+' Dust').texture('gegology:item/gt-purifieddust').color(hex);
		event.create('gegology:tiny_purified_'+namepr+'_'+name+'_dust')
			.displayName('Tiny Purified '+capitalize(namepr)+' '+capitalize(name)+' Dust').texture('gegology:item/gt-purifieddusttiny').color(hex);	

    };
	
	gegologycompore('native', 'antimony', 0xA0A0AF)
	gegologycompore('native', 'arsenic', 0x676756)
	gegologycompore('native', 'copper', 0xBA5F42)
	gegologycompore('native', 'zinc', 0xB4ADAD)
	
	gegologycompore('brown', 'limonite', 0xD87000)
	

	
event.create('geggy:raw_steel_sword_blade');
event.create('geggy:raw_steel_pickaxe_head');
event.create('geggy:raw_steel_axe_head');
event.create('geggy:raw_steel_shovel_head');
event.create('geggy:raw_steel_hoe_head');	

event.create('geggy:incomplete_steel_sword_blade');
event.create('geggy:incomplete_steel_pickaxe_head');
event.create('geggy:incomplete_steel_axe_head');
event.create('geggy:incomplete_steel_shovel_head');
event.create('geggy:incomplete_steel_hoe_head');
	
event.create('geggy:steel_sword_blade');
event.create('geggy:steel_pickaxe_head');
event.create('geggy:steel_axe_head');
event.create('geggy:steel_shovel_head');
event.create('geggy:steel_hoe_head');

event.create('geggy:polished_tool_rod');

event.create('geggy:galvanized_steel_sword_blade');
event.create('geggy:galvanized_steel_pickaxe_head');
event.create('geggy:galvanized_steel_axe_head');
event.create('geggy:galvanized_steel_shovel_head');
event.create('geggy:galvanized_steel_hoe_head');

event.create('geggy:galvanized_steel_pickaxe', 'pickaxe').tier('galvanized')
event.create('geggy:galvanized_steel_axe', 'axe').tier('galvanized')
event.create('geggy:galvanized_steel_sword', 'sword').tier('galvanized')
event.create('geggy:galvanized_steel_shovel', 'shovel').tier('galvanized')
event.create('geggy:galvanized_steel_hoe', 'hoe').tier('galvanized')	

event.create('geggy:unfinished_steel_helmet');
event.create('geggy:unfinished_steel_chestplate');
event.create('geggy:unfinished_steel_leggings');
event.create('geggy:unfinished_steel_boots');

event.create('geggy:bronze_helmet', 'helmet')
    .tier('bronze');
    
event.create('geggy:bronze_chestplate', 'chestplate')
    .tier('bronze');

event.create('geggy:bronze_leggings', 'leggings')
    .tier('bronze');

event.create('geggy:bronze_boots', 'boots')
    .tier('bronze');
		
event.create('geggy:steel_helmet', 'helmet')
    .tier('steel');
    
event.create('geggy:steel_chestplate', 'chestplate')
    .tier('steel');

event.create('geggy:steel_leggings', 'leggings')
    .tier('steel');

event.create('geggy:steel_boots', 'boots')
    .tier('steel');

event.create('geggy:unsavory_brain').food(food => {
	food
    	.hunger(6)
    	.saturation(0.7)
      	.effect('poison', 600, 2, 1) // 30 sec x 20 tics
		.effect('nausea', 400, 2, 1)
		.effect('hunger', 200, 0, 1)
})
			
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
    .create('geggy:silty_clay')
	.thinTexture(0x736174)
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
	
	event
    .create('geggy:refined_glue')
	.thinTexture(0xF9C988)
    .noBucket
	
	event
    .create('geggy:rubber')
	.thinTexture(0x969366)
    .noBucket
	
	event
    .create('geggy:grain_solution')
	.thinTexture(0x8C9371)
    .noBucket
	
	event
    .create('geggy:tin_alloy')
	.thinTexture(0x9FA0A2)
    .noBucket

	event
    .create('geggy:concrete')
	.thinTexture(0x595A5D)
    .noBucket
	
	event
    .create('geggy:molten_red_alloy')
	.thinTexture(0xB80122)
    .noBucket
	
	event
    .create('geggy:molten_energetic_alloy')
	.thinTexture(0xD77F29)
    .noBucket
	
	event
    .create('geggy:molten_vibrant_alloy')
	.thinTexture(0x809A2B)
    .noBucket
	
	event
    .create('geggy:molten_naquadah')
	.thinTexture(0x208420)
    .noBucket
	
	event
    .create('geggy:liquid_naquadah_alloy')
	.thinTexture(0x272727)
    .noBucket
	
	event
    .create('geggy:molten_tungstensteel')
	.thinTexture(0x787ABC)
    .noBucket
	
	event
    .create('geggy:liquid_tritanium')
	.thinTexture(0x50090C)
    .noBucket
	
	event
    .create('geggy:liquid_duranium')
	.thinTexture(0x428D8D)
    .noBucket
	
	event
    .create('geggy:liquid_gallium')
	.thinTexture(0xC3C3E1)
    .noBucket
	
	event
    .create('geggy:molten_gold')
	.thinTexture(0xFBDD47)
    .noBucket
	
	event
    .create('geggy:ancient_debris_slurry')
	.thinTexture(0x5B3B2B)
    .noBucket
	
	event
    .create('geggy:clarified_sugary_water')
	.thinTexture(0x7B9D86)
    .noBucket
	
	event
    .create('geggy:mash')
	.thinTexture(0x78674D)
    .noBucket
	
	event
    .create('geggy:fish_oil')
	.thinTexture(0xA7944B)
    .noBucket
	
	event
    .create('geggy:sludge')
	.thinTexture(0x1E1410)
    .noBucket
	
	event
    .create('geggy:fermented_biomass')
	.thinTexture(0x364307)
    .noBucket
	
	event
    .create('geggy:liquid_zinc')
	.thinTexture(0xC6CBBF)
    .noBucket
	
	event
    .create('geggy:fluix_slurry')
	.thinTexture(0x772FD1)
    .noBucket
	
	event
    .create('geggy:silicon_slurry')
	.thinTexture(0x59584E)
    .noBucket
	
})	

//onEvent('block.registry', (event) => {
StartupEvents.registry('block', event => {

event.create('geggy:j_stripped_log').material('wood').displayName('Multiuse Stripped Log').hardness(3).tagBlock('minecraft:mineable/axe')
event.create('geggy:reinforced_glass').material('glass').hardness(3).tagBlock('minecraft:mineable/pickaxe').defaultTranslucent()
event.create('geggy:borosilicate_glass').material('glass').hardness(3).tagBlock('minecraft:mineable/pickaxe').defaultTranslucent()
event.create('geggy:clay_bricks');
event.create('geggy:concrete_light').material('stone').displayName('Light Concrete').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)

// 1/19 missing grout, tinkers
event.create('geggy:craut').displayName('Craut').tagBlock('minecraft:mineable/shovel');

event.create('geggy:gloom_block').material('iron').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)

})


