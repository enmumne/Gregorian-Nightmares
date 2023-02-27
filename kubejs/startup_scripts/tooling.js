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

ItemEvents.modification(event => {
    event.modify('environmentz:heating_stones', pickaxe => {
        pickaxe.setMaxDamage(900);
    });
});

/*
ItemEvents.modification(event => {
    event.modify('minecraft:torch', tor => {
		tor.enchantments:"minecraft:fire_aspect";
    });
});
*/

ItemEvents.modification(event => {
    event.modify('minecraft:iron_pickaxe', pickaxe => {
        pickaxe.setMaxDamage(400);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:golden_pickaxe', pickaxe => {
        pickaxe.setMaxDamage(52);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:diamond_pickaxe', pickaxe => {
        pickaxe.setMaxDamage(2500);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:netherite_pickaxe', pickaxe => {
        pickaxe.setMaxDamage(3200);
    });
});

ItemEvents.modification(event => {
    event.modify('minecraft:iron_axe', axe => {
        axe.setMaxDamage(400);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:golden_axe', axe => {
        axe.setMaxDamage(52);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:diamond_axe', axe => {
        axe.setMaxDamage(2500);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:netherite_axe', axe => {
        axe.setMaxDamage(3200);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:iron_sword', sword => {
        sword.setMaxDamage(400);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:golden_sword', sword => {
        sword.setMaxDamage(52);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:diamond_sword', sword => {
        sword.setMaxDamage(2500);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:netherite_sword', sword => {
        sword.setMaxDamage(3200);
    });
});

ItemEvents.modification(event => {
    event.modify('minecraft:iron_hoe', hoe => {
        hoe.setMaxDamage(400);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:golden_hoe', hoe => {
        hoe.setMaxDamage(52);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:diamond_hoe', hoe => {
        hoe.setMaxDamage(2500);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:netherite_hoe', hoe => {
        hoe.setMaxDamage(3200);
    });
});

ItemEvents.modification(event => {
    event.modify('minecraft:iron_shovel', shovel => {
        shovel.setMaxDamage(400);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:golden_shovel', shovel => {
        shovel.setMaxDamage(52);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:diamond_shovel', shovel => {
        shovel.setMaxDamage(2500);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:netherite_shovel', shovel => {
        shovel.setMaxDamage(3200);
    });
});

// helmet, chestplate, leggings, boots
// turtle shell 275

ItemEvents.modification(event => {
    event.modify('minecraft:turtle_helmet', helmet => {
        helmet.setMaxDamage(450);
    });
});


// leather 55, 80 75 65

ItemEvents.modification(event => {
    event.modify('minecraft:leather_helmet', helmet => {
        helmet.setMaxDamage(80);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:leather_chestplate', chestplate => {
        chestplate.setMaxDamage(120);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:leather_leggings', leggings => {
        leggings.setMaxDamage(100);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:leather_boots', boots => {
        boots.setMaxDamage(85);
    });
});

// diamond 363, 528, 495, 429

ItemEvents.modification(event => {
    event.modify('minecraft:diamond_helmet', helmet => {
        helmet.setMaxDamage(550);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:diamond_chestplate', chestplate => {
        chestplate.setMaxDamage(700);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:diamond_leggings', leggings => {
        leggings.setMaxDamage(650);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:diamond_boots', boots => {
        boots.setMaxDamage(550);
    });
});

// chainmail 165, 240, 225, 195
// bop??


// iron 165, 240, 225, 195 

ItemEvents.modification(event => {
    event.modify('minecraft:iron_helmet', helmet => {
        helmet.setMaxDamage(240);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:iron_chestplate', chestplate => {
        chestplate.setMaxDamage(400);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:iron_leggings', leggings => {
        leggings.setMaxDamage(350);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:iron_boots', boots => {
        boots.setMaxDamage(300);
    });
});

// netherite 407, 592, 555, 481

ItemEvents.modification(event => {
    event.modify('minecraft:netherite_helmet', helmet => {
        helmet.setMaxDamage(650);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:netherite_chestplate', chestplate => {
        chestplate.setMaxDamage(850);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:netherite_leggings', leggings => {
        leggings.setMaxDamage(780);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:netherite_boots', boots => {
        boots.setMaxDamage(720);
    });
});

// golden 77, 112, 105, 91

ItemEvents.modification(event => {
    event.modify('minecraft:golden_helmet', helmet => {
        helmet.setMaxDamage(120);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:golden_chestplate', chestplate => {
        chestplate.setMaxDamage(150);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:golden_leggings', leggings => {
        leggings.setMaxDamage(130);
    });
});
ItemEvents.modification(event => {
    event.modify('minecraft:golden_boots', boots => {
        boots.setMaxDamage(110);
    });
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

event.create('geggy:wooden_form', 'basic').displayName('Wooden Form').maxDamage(50);
//event.create('geggy:stone_bowl').displayName('Stone Bowl');
event.create('geggy:stone_mortar', 'basic').displayName('Stone Mortar').maxDamage(50);
event.create('geggy:soft_hammer', 'basic').displayName('Soft Hammer').maxDamage(50);

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

event.create('geggy:wrought_dust').displayName('Pig Iron Dust');
event.create('geggy:wrought_small_dust').displayName('Small Pile of Pig Iron');
event.create('geggy:wrought_nugget').displayName('Pig Iron Nugget');
event.create('geggy:wrought_ingot').displayName('Pig Iron Ingot');
event.create('geggy:wrought_plate').displayName('Pig Iron Plate');
event.create('geggy:mold').displayName('Steel Mold');
event.create('geggy:mold_ball').displayName('Ball Mold');
event.create('geggy:mold_block').displayName('Block Mold');
event.create('geggy:mold_bottle').displayName('Ball Mold');
event.create('geggy:mold_ingot').displayName('Ingot Mold');
event.create('geggy:mold_nugget').displayName('Nugget Mold');
event.create('geggy:mold_plate').displayName('Plate Mold');

event.create('geggy:invar_curved_plate');

event.create('geggy:biocircuit').displayName('Programmed Bio Circuit');
event.create('geggy:gb_cellulose_fiber').displayName('Golden-Brown Cellulose Fiber');
event.create('geggy:gb_biomass').displayName('Golden-Brown Biomass');
event.create('geggy:plant_mass');
event.create('geggy:bio_chaff');

event.create('geggy:netherrack_dust')

event.create('geggy:endstone_dust');

event.create('geggy:sharp_plate');

/*
.tooltip('§8')

ItemEvents.tooltip(tooltip => {

tooltip.add('mod:item', ["", "", ''])

});

*/

})

//onEvent('block.registry', (event) => {
StartupEvents.registry('block', event => {

event.create('geggy:j_stripped_log').material('wood').displayName('Multiuse Stripped Log').hardness(3).tagBlock('minecraft:mineable/axe')
event.create('geggy:clay_bricks');

// 1/19 missing grout, tinkers
event.create('geggy:craut').displayName('Craut').tagBlock('minecraft:mineable/shovel');

})


