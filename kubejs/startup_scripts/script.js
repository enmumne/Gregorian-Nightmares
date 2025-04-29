// priority: 0

Platform.mods.modern_industrialization.name = 'SuckerSymphony'
Platform.mods.moderndynamics.name = 'Metaphoric Destinations'
Platform.mods.ae2.name = 'Mistaken Energistics 2'
Platform.mods.powah.name = 'Protagoras'
//Platform.mods.botania.name = 'Britannia'

console.info('Hello, World! (You will only see this line once in console, during startup)')

function incomplete_circuit(event, circuit_prefix) {
	event.create(`incomplete_${circuit_prefix}_circuit`)
}

//onEvent('item.registry', event => {
	
StartupEvents.registry('item', event => {	
	// Register new items here
	// event.create('example_item').displayName('Example Item')

	event.create("brass_dust")
	event.create("zinc_dust")

	incomplete_circuit(event, "analog")

	event.create("incomplete_blank_pattern")

	event.create("mob_slaughtering_drill_head")
	event.create("mob_slaughtering_drill")

	event.create("andesite_alloy_drill_head")
	event.create("andesite_alloy_drill")

	event.create("dirty_andesite_alloy_drill")
	event.create("dirty_mob_slaughtering_drill")
	event.create("dirty_copper_drill")
	event.create("dirty_bronze_drill")
	event.create("dirty_steel_drill")
	event.create("dirty_stainless_steel_drill")
	event.create("dirty_gold_drill")
	event.create("dirty_aluminum_drill")
	event.create("dirty_titanium_drill")
	
	event.create("osmium_drill")
	event.create("dirty_osmium_drill")
})

/* testing shit

// startup/food_items

onEvent('item.registry', (event) => {

  event.create('gn:baked_glow_berries').displayName('Baked Glow Berries').food(function(food){
  food.hunger(4)
  food.saturation(0.65)});
  
   event.create('gn:blargh').displayName('Unknown item').food(function(food){
  food.hunger(4)
  food.saturation(0.65)});

});

*/