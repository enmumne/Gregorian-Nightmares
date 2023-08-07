// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

//JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
//})


ItemEvents.tooltip(event => {
//onEvent('item.tooltip', event => {

event.add('geghilarity:sacred_platinoreum', '§7This plate is a lie. It is made of your tears.')

event.add('geggy:j_tool_rod', '§7DJ2 called and wants its recipe back.')
event.add('geggy:j_planks', '§7For chests and crafting table.')

event.add('minecraft:rotten_flesh', '§7Use shears on zombies to obtain, 3 attempts, 85% chance.')
event.add('minecraft:rotten_flesh', '§7Process in a mixer to obtain leather.')

event.add('geggy:gravel_dust', '§7To be merged into a Gravel block.')

event.add('drilly:drill_group1', '§7For tin and copper.')
event.add('drilly:drill_group2', '§7For coal, iron and lignite.')
event.add('drilly:drill_group3', '§7For lead, nickel and zinc.')
event.add('drilly:drill_group4', '§7For salt, redstone, precious ore and bauxite.')
event.add('drilly:drill_group5', '§7For mozanite, tungsten and uranium.')
event.add('drilly:drill_groupx', '§7For nether quartz.')

event.add('geggy:cogwheel', '§7Internal use only.')

event.add('modern_industrialization:sulfur_tiny_dust', '§7Obtained early from washing Lignite Crushed Dust.')

event.add('geghilarity:cobalt_dust', '§7(Use EMI for recipe)')

let s0 = '₀';
let s1 = '₁';
let s2 = '₂';
let s3 = '₃';
let s4 = '₄';
let s5 = '₅';
let s6 = '₆';
let s7 = '₇';
let s8 = '₈';
let s9 = '₉';

	event.add('geghilarity:alumina', '§eAl'+s2+'O'+s3)
	event.add('geghilarity:aluminium_hydride', '§eAlH'+s3)
	event.add('geghilarity:aluminium_hydroxide', '§eAl(OH)'+s3)
	event.add('geghilarity:aluminium_trifluoride', '§eAlF'+s3)
	event.add('geghilarity:alumino_silicate_wool', '§eAl'+s2+'SiO'+s5)
	event.add('geghilarity:ammonium_chloride_dust', '§eNH'+s4+'Cl') // no dust in tj?
	event.add('geghilarity:ammonium_metavanadate_dust', '')
	event.add('geghilarity:ammonium_sulfate_dust', '§e(NH'+s4+')'+s2+'SO'+s4)
	event.add('geghilarity:antimony_trifluoride_dust', '§eSbF'+s3)
	event.add('geghilarity:antimony_trioxide_dust', '§eSb'+s2+'O'+s3)
	event.add('geghilarity:asbestos', '§eMg'+s3+'Si'+s2+'H'+s4+'O'+s9)
	event.add('geghilarity:ashes', '§eC')
	event.add('geghilarity:biotite_dust', '§eKMg'+s3+'Al'+s3+'F'+s2+'Si'+s3+'O'+s1+s0)
	event.add('geghilarity:calcium_chloride_dust', '§eCaCl'+s2)
	event.add('geghilarity:calcium_dust', '§eCa')
	event.add('geghilarity:calcium_hydroxide_dust', '§eCa(OH)'+s2)
	event.add('geghilarity:calcium_tungstate_dust', '§eWCaO'+s4)
	event.add('geghilarity:carbon_dust', '§eC')
	event.add('geghilarity:charcoal_dust', '§eC')
	event.add('geghilarity:chromium_trioxide_dust', '§eCrO'+s3)
	event.add('geghilarity:cobalt_dust', '§eCo')
	event.add('geghilarity:crude_rhodium_metal_dust', '§eRh?')
	event.add('geghilarity:crushed_nickel', '§eNi')
	event.add('geghilarity:disodium_phosphate', '§eNa'+s2+'HPO'+s4)


})

REIEvents.groupEntries(event => {

/*	
event.groupItemsByTag('chipped:amethyst_block', 'Amethyst Block', 'chipped:amethyst_block')
event.groupItemsByTag('chipped:coal_block', 'Coal Block', 'chipped:coal_block')
event.groupItemsByTag('chipped:crying_obsidian', 'Crying Obsidian', 'chipped:crying_obsidian')
event.groupItemsByTag('chipped:lodestone', 'Lodestone', 'chipped:lodestone')
event.groupItemsByTag('chipped:lapis_block', 'Lapis Block', 'chipped:lapis_block')
event.groupItemsByTag('chipped:diamond_block', 'Diamond Block', 'chipped:diamond_block')
event.groupItemsByTag('chipped:emerald_block', 'Emerald Block', 'chipped:emerald_block')
event.groupItemsByTag('chipped:gold_block', 'Gold Block', 'chipped:gold_block')
event.groupItemsByTag('chipped:iron_block', 'Iron Block', 'chipped:iron_block')
event.groupItemsByTag('chipped:netherite_block', 'Netherite Block', 'chipped:netherite_block')
event.groupItemsByTag('chipped:sponge', 'Sponge', 'chipped:sponge')
event.groupItemsByTag('chipped:glowstone', 'Glowstone', 'chipped:glowstone')
event.groupItemsByTag('chipped:waxed_exposed_copper_block', 'Waxed Copper', 'chipped:waxed_exposed_copper_block')
event.groupItemsByTag('chipped:waxed_weathered_copper', 'Waxed Weathered Copper', 'chipped:waxed_weathered_copper')
event.groupItemsByTag('chipped:waxed_copper_block', 'Waxed Copper Block', 'chipped:waxed_copper_block')
event.groupItemsByTag('chipped:waxed_oxidized_copper', 'Waxed Oxidized Copper', 'chipped:waxed_oxidized_copper')
event.groupItemsByTag('chipped:blue_ice', 'Blue Ice', 'chipped:blue_ice')
event.groupItemsByTag('chipped:chipped_dirt', 'Dirt', 'chipped:dirt')
event.groupItemsByTag('chipped:ice', 'Ice', 'chipped:ice')
event.groupItemsByTag('chipped:packed_ice', 'Packed Ice', 'chipped:packed_ice')
event.groupItemsByTag('chipped:snow_block', 'Snow Block', 'chipped:snow_block')
event.groupItemsByTag('chipped:clay', 'Clay', 'chipped:clay')
event.groupItemsByTag('chipped:mud', 'Mud', 'chipped:mud')
event.groupItemsByTag('chipped:packed_muc', 'Packed Mud', 'chipped:packed_muc')
event.groupItemsByTag('chipped:brown_mushroom', 'Brown Mushroom', 'chipped:brown_mushroom')
event.groupItemsByTag('chipped:red_mushroom', 'Red Mushroom', 'chipped:red_mushroom')
event.groupItemsByTag('chipped:cobweb', 'Cobweb', 'chipped:cobweb')

event.groupItemsByTag('chipped:red_sandstone', 'Red Sandstone', 'chipped:red_sandstone')
event.groupItemsByTag('chipped:sandstone', 'Sandstone', 'chipped:sandstone')
event.groupItemsByTag('chipped:stone', 'Stone', 'chipped:stone')
event.groupItemsByTag('chipped:smooth_stone', 'Smooth Stone', 'chipped:smooth_stone')
event.groupItemsByTag('chipped:tuff', 'Tuff', 'chipped:tuff')

event.groupItemsByTag('chipped:bricks', 'Bricks', 'chipped:bricks')
event.groupItemsByTag('chipped:mud_bricks', 'Mud Bricks', 'chipped:mud_bricks')
event.groupItemsByTag('chipped:pointed_dripstone', 'Pointed Dripstone', 'chipped:pointed_dripstone')
event.groupItemsByTag('chipped:iron_bars', 'Iron Bars', 'chipped:iron_bars')
event.groupItemsByTag('chipped:sea_lantern', 'Sea Lantern', 'chipped:sea_lantern')
event.groupItemsByTag('chipped:redstone_lamp', 'Redstone Lamp', 'chipped:redstone_lamp')
event.groupItemsByTag('chipped:redstone_block', 'Redstone Block', 'chipped:redstone_block')
*/

event.groupItemsByTag('minecraft:leaves', 'Leaves', 'minecraft:leaves')
//event.groupItemsByTag('minecraft:wool_carpets', 'Carpets', 'minecraft:wool_carpets')

event.groupItems('gegbuck', 'Gegs Buckets', [/^(geghilarity:).*(bucket)$/])

event.groupItems('chipped:grouped', 'Chipped Groups', [/^(chipped:).*$/])

/*
Ingredient.of('@chipped').stacks.forEach(item => {
	
	for(let tag of item.tags){
        if(tag.namespace == 'chipped'){
			console.log('bldsgfregre: ' + tag)
			event.groupItemsByTag('chipped:' + tag,  tag + 'Block', 'chipped:' + tag)
            //global.chipped_map[item.id] = true;
            //return true;
        }
    }
	
	let here = item.path
	
	event.groupItemsByTag('chipped:' + here,  here + 'Block', 'chipped:' + here)
})	
*/
	
	
})

/*
	REIEvents.information(event => {
  //event.add('geghilarity:nitric_acid', 'Title', ['Line 1', 'Line 2'])
  event.addItem('geggy:iron_curved_plate', 'dgfhgfh', ['dghfghfgh'])
})
*/

const HID = [
 "modern_industrialization:forge_hammer",	
 "vinery:cooking_pot",
 "create:copper_sheet",
 "create:iron_sheet",
 "create:golden_sheet"
 ];
 
 REIEvents.hide('item', (event) => {
    HID.forEach(id => event.hide(id));
});

REIEvents.removeCategories(event => {
    event.remove('vinery:cooking_pot_display')
	event.remove('vinery:cooking_pot')
})

//ClientEvents.loggedIn(e => e.server.runCommandSilent('/kubejs reload client_scripts'))

//ClientEvents.loggedIn(event => event.server.schedule(10, event.server, function(callback) {callback.server.runCommandSilent(`execute as ${event.player.name.text} run kubejs reload client_scripts`)}))