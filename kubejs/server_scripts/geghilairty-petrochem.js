ServerEvents.recipes(event => {
	
	// preliminar oil overhaul
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 200,
		fluid_inputs: [
			{fluid: "modern_industrialization:crude_oil", amount: 1000},
			{fluid: "minecraft:water", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diluted_oil", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 160,
		fluid_inputs: [
			{fluid: "geghilarity:diluted_oil", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:oily_brine", amount: 100},
			{fluid: "geghilarity:desalted_oil", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 160,
		fluid_inputs: [
			{fluid: "geghilarity:oily_brine", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:desalted_oil", amount: 200},
			{fluid: "geghilarity:salt_water", amount: 1000}
		]
	})
	
	event.remove([
		"modern_industrialization:petrochem/distillation/crude_oil_full", 
		"modern_industrialization:petrochem/distillation/crude_oil_0", 
		"modern_industrialization:petrochem/distillation/crude_oil_1",
		"modern_industrialization:petrochem/distillation/crude_oil_2"
	])
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:desalted_oil", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sulfuric_oil_residue", amount: 150},
			{fluid: "geghilarity:sulfuric_fuel_oil", amount: 150},
			{fluid: "geghilarity:sulfuric_diesel", amount: 200},
			{fluid: "modern_industrialization:sulfuric_heavy_fuel", amount: 100},
			{fluid: "modern_industrialization:sulfuric_naphtha", amount: 200},
			{fluid: "modern_industrialization:sulfuric_light_fuel", amount: 100},
			{fluid: "geghilarity:sulfuric_refinery_gas", amount: 500}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 20,
		fluid_inputs: [
			{fluid: "geghilarity:desalted_oil", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sulfuric_refinery_gas", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 40,
		fluid_inputs: [
			{fluid: "geghilarity:desalted_oil", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:sulfuric_naphtha", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 40,
		fluid_inputs: [
			{fluid: "geghilarity:desalted_oil", amount: 200}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sulfuric_diesel", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 40,
		fluid_inputs: [
			{fluid: "geghilarity:desalted_oil", amount: 200}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sulfuric_fuel_oil", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 40,
		fluid_inputs: [
			{fluid: "geghilarity:desalted_oil", amount: 200}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sulfuric_oil_residue", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:desalted_oil", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:sulfuric_light_fuel", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:desalted_oil", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:sulfuric_heavy_fuel", amount: 50}
		]
	})
	
	event.remove([
		"modern_industrialization:petrochem/sulfuric_purification/light_fuel", 
		"modern_industrialization:petrochem/sulfuric_purification/heavy_fuel", 
		"modern_industrialization:petrochem/sulfuric_purification/naphtha"
	])
	
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 30,
		item_inputs: [
			{item: "geghilarity:alumina_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 45},
			{fluid: "geghilarity:sulfuric_refinery_gas", amount: 180}
		],
		fluid_outputs: [
			{fluid: "geghilarity:treated_sulfuric_refinery_gas", amount: 180}
		]
	})
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 30,
		item_inputs: [
			{item: "geghilarity:alumina_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 45},
			{fluid: "modern_industrialization:sulfuric_naphtha", amount: 180}
		],
		fluid_outputs: [
			{fluid: "geghilarity:treated_sulfuric_naphtha", amount: 180}
		]
	})
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 30,
		item_inputs: [
			{item: "geghilarity:alumina_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 45},
			{fluid: "geghilarity:sulfuric_diesel", amount: 180}
		],
		fluid_outputs: [
			{fluid: "geghilarity:treated_sulfuric_diesel", amount: 180}
		]
	})
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 30,
		item_inputs: [
			{item: "geghilarity:alumina_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 45},
			{fluid: "geghilarity:sulfuric_fuel_oil", amount: 180}
		],
		fluid_outputs: [
			{fluid: "geghilarity:treated_sulfuric_fuel_oil", amount: 180}
		]
	})
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 30,
		item_inputs: [
			{item: "geghilarity:alumina_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 45},
			{fluid: "geghilarity:sulfuric_oil_residue", amount: 180}
		],
		fluid_outputs: [
			{fluid: "geghilarity:treated_sulfuric_oil_residue", amount: 180}
		]
	})
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 30,
		item_inputs: [
			{item: "geghilarity:alumina_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 45},
			{fluid: "modern_industrialization:sulfuric_light_fuel", amount: 180}
		],
		fluid_outputs: [
			{fluid: "geghilarity:treated_sulfuric_light_fuel", amount: 180}
		]
	})
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 30,
		item_inputs: [
			{item: "geghilarity:alumina_catalyst_bed", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 45},
			{fluid: "modern_industrialization:sulfuric_heavy_fuel", amount: 180}
		],
		fluid_outputs: [
			{fluid: "geghilarity:treated_sulfuric_heavy_fuel", amount: 180}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:treated_sulfuric_refinery_gas", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:refinery_gas", amount: 1000},
			{fluid: "geghilarity:sour_gas", amount: 250}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:treated_sulfuric_naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:naphtha", amount: 1000},
			{fluid: "geghilarity:sour_gas", amount: 250}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:treated_sulfuric_diesel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:diesel", amount: 1000},
			{fluid: "geghilarity:sour_gas", amount: 250}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:treated_sulfuric_fuel_oil", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:fuel_oil", amount: 1000},
			{fluid: "geghilarity:sour_gas", amount: 250}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:treated_sulfuric_oil_residue", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:oil_residue", amount: 1000},
			{fluid: "geghilarity:sour_gas", amount: 250}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:treated_sulfuric_light_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 1000},
			{fluid: "geghilarity:sour_gas", amount: 250}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:treated_sulfuric_heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:heavy_fuel", amount: 1000},
			{fluid: "geghilarity:sour_gas", amount: 250}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 8,
		fluid_inputs: [
			{fluid: "geghilarity:treated_sulfuric_refinery_gas", amount: 40}
		],
		fluid_outputs: [
			{fluid: "geghilarity:refinery_gas", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 8,
		fluid_inputs: [
			{fluid: "geghilarity:treated_sulfuric_naphtha", amount: 40}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:naphtha", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 8,
		fluid_inputs: [
			{fluid: "geghilarity:treated_sulfuric_diesel", amount: 40}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:diesel", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 8,
		fluid_inputs: [
			{fluid: "geghilarity:treated_sulfuric_fuel_oil", amount: 40}
		],
		fluid_outputs: [
			{fluid: "geghilarity:fuel_oil", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 8,
		fluid_inputs: [
			{fluid: "geghilarity:treated_sulfuric_oil_residue", amount: 40}
		],
		fluid_outputs: [
			{fluid: "geghilarity:oil_residue", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 8,
		fluid_inputs: [
			{fluid: "geghilarity:treated_sulfuric_light_fuel", amount: 40}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 8,
		fluid_inputs: [
			{fluid: "geghilarity:treated_sulfuric_heavy_fuel", amount: 40}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:heavy_fuel", amount: 40}
		]
	})
	
	// recycle hydrogen fully + 1 sulfur
	event.custom({ 
		type: "modern_industrialization:advanced_centrifuge",
		eu: 120,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:ethanolamine_mix", amount: 1000},
			{fluid: "geghilarity:sour_gas", amount: 3000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 1000},
			{fluid: "geghilarity:rich_amine", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 120,
		duration: 160,
		fluid_inputs: [
			{fluid: "geghilarity:rich_amine", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hydrogen_sulfide", amount: 1000},
			{fluid: "geghilarity:ethanolamine_mix", amount: 1000}
		]
	})
	// GCP
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 30,
		duration: 36,
		fluid_inputs: [
			{fluid: "geghilarity:hydrogen_sulfide", amount: 1000}
		],
		item_outputs: [	
			{item: "modern_industrialization:sulfur_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 2000}
		]
	})
	
	///// CRACKING /////
	///// CRACKING /////
	
	event.remove([
		"modern_industrialization:petrochem/steam_cracking/heavy_fuel", 
		"modern_industrialization:petrochem/steam_cracking/light_fuel", 
		"modern_industrialization:petrochem/steam_cracking/naphtha"
	])
	
	// lightly steam light
	
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 30,
		duration: 260,
		fluid_inputs: [
			{fluid: "modern_industrialization:steam", amount: 1000},
			{fluid: "modern_industrialization:light_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:lightly_steam-cracked_light_fuel", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_light_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:heavy_fuel", amount: 150},
			{fluid: "modern_industrialization:naphtha", amount: 400},
			{fluid: "modern_industrialization:toluene", amount: 40},
			{fluid: "modern_industrialization:benzene", amount: 200},
			{fluid: "geghilarity:butene_mixture", amount: 75},
			{fluid: "modern_industrialization:butadiene", amount: 60},
			{fluid: "geghilarity:propane", amount: 20},
			{fluid: "modern_industrialization:propene", amount: 150},
			{fluid: "geghilarity:ethane", amount: 10},
			{fluid: "modern_industrialization:ethylene", amount: 50},
			{fluid: "modern_industrialization:methane", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_light_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:heavy_fuel", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_light_fuel", amount: 100}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:naphtha", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_light_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:toluene", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_light_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:benzene", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_light_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butene_mixture", amount: 75}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_light_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:butadiene", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_light_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:propane", amount: 20}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_light_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:propene", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_light_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethane", amount: 10}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_light_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:ethylene", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_light_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 25}
		]
	})
	
	// lightly steam heavy
	
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 30,
		duration: 260,
		fluid_inputs: [
			{fluid: "modern_industrialization:steam", amount: 1000},
			{fluid: "modern_industrialization:heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:lightly_steam-cracked_heavy_fuel", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 300},
			{fluid: "modern_industrialization:naphtha", amount: 50},
			{fluid: "modern_industrialization:toluene", amount: 25},
			{fluid: "modern_industrialization:benzene", amount: 125},
			{fluid: "geghilarity:butene_mixture", amount: 25},
			{fluid: "modern_industrialization:butadiene", amount: 15},
			{fluid: "geghilarity:propane", amount: 3},
			{fluid: "modern_industrialization:propene", amount: 30},
			{fluid: "geghilarity:ethane", amount: 5},
			{fluid: "modern_industrialization:ethylene", amount: 50},
			{fluid: "modern_industrialization:methane", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_heavy_fuel", amount: 100}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_heavy_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:naphtha", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:toluene", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_heavy_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:benzene", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butene_mixture", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:butadiene", amount: 15}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:propane", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:propene", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethane", amount: 5}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_heavy_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:ethylene", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_heavy_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 25}
		]
	})
	
	// lightly steam naphtha
	
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 30,
		duration: 260,
		fluid_inputs: [
			{fluid: "modern_industrialization:steam", amount: 1000},
			{fluid: "modern_industrialization:naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:lightly_steam-cracked_naphtha", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:heavy_fuel", amount: 75},
			{fluid: "modern_industrialization:light_fuel", amount: 150},
			{fluid: "modern_industrialization:toluene", amount: 45},
			{fluid: "modern_industrialization:benzene", amount: 150},
			{fluid: "geghilarity:isoprene", amount: 150},
			{fluid: "geghilarity:butene_mixture", amount: 80},
			{fluid: "modern_industrialization:butadiene", amount: 150},
			{fluid: "geghilarity:propane", amount: 15},
			{fluid: "modern_industrialization:propene", amount: 200},
			{fluid: "geghilarity:ethane", amount: 35},
			{fluid: "modern_industrialization:ethylene", amount: 200},
			{fluid: "modern_industrialization:methane", amount: 200}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:heavy_fuel", amount: 75}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_naphtha", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:toluene", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_naphtha", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:benzene", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_naphtha", amount: 200}
		],
		fluid_outputs: [
			{fluid: "geghilarity:isoprene", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_naphtha", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butene_mixture", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_naphtha", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:butadiene", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:propane", amount: 15}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_naphtha", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:propene", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethane", amount: 35}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_naphtha", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:ethylene", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_steam-cracked_naphtha", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 40}
		]
	})
	
	// severely steam light
	
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 30,
		duration: 260,
		fluid_inputs: [
			{fluid: "modern_industrialization:high_pressure_steam", amount: 1000},
			{fluid: "modern_industrialization:light_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:severely_steam-cracked_light_fuel", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_light_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:heavy_fuel", amount: 50},
			{fluid: "modern_industrialization:naphtha", amount: 100},
			{fluid: "modern_industrialization:toluene", amount: 30},
			{fluid: "modern_industrialization:benzene", amount: 150},
			{fluid: "geghilarity:butene_mixture", amount: 65},
			{fluid: "modern_industrialization:butadiene", amount: 50},
			{fluid: "geghilarity:propane", amount: 50},
			{fluid: "modern_industrialization:propene", amount: 250},
			{fluid: "geghilarity:ethane", amount: 50},
			{fluid: "modern_industrialization:ethylene", amount: 250},
			{fluid: "modern_industrialization:methane", amount: 250}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_light_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:heavy_fuel", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_light_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:naphtha", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_light_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:toluene", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_light_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:benzene", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_light_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butene_mixture", amount: 65}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_light_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:butadiene", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_light_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:propane", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_light_fuel", amount: 100}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:propene", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_light_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethane", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_light_fuel", amount: 100}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:ethylene", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_light_fuel", amount: 100}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 25}
		]
	})
	
	// severely steam heavy
	
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 30,
		duration: 260,
		fluid_inputs: [
			{fluid: "modern_industrialization:high_pressure_steam", amount: 1000},
			{fluid: "modern_industrialization:heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:severely_steam-cracked_heavy_fuel", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 100},
			{fluid: "modern_industrialization:naphtha", amount: 125},
			{fluid: "modern_industrialization:toluene", amount: 80},
			{fluid: "modern_industrialization:benzene", amount: 125},
			{fluid: "geghilarity:butene_mixture", amount: 80},
			{fluid: "modern_industrialization:butadiene", amount: 50},
			{fluid: "geghilarity:propane", amount: 10},
			{fluid: "modern_industrialization:propene", amount: 100},
			{fluid: "geghilarity:ethane", amount: 15},
			{fluid: "modern_industrialization:ethylene", amount: 150},
			{fluid: "modern_industrialization:methane", amount: 150}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_heavy_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_heavy_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:naphtha", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_heavy_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:toluene", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_heavy_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:benzene", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_heavy_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butene_mixture", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_heavy_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:butadiene", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:propane", amount: 10}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_heavy_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:propene", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethane", amount: 15}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_heavy_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:ethylene", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_heavy_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 30}
		]
	})
	
	// severely steam naphtha
	
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 30,
		duration: 260,
		fluid_inputs: [
			{fluid: "modern_industrialization:high_pressure_steam", amount: 1000},
			{fluid: "modern_industrialization:naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:severely_steam-cracked_naphtha", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:heavy_fuel", amount: 25},
			{fluid: "modern_industrialization:light_fuel", amount: 50},
			{fluid: "modern_industrialization:toluene", amount: 20},
			{fluid: "modern_industrialization:benzene", amount: 100},
			{fluid: "geghilarity:isoprene", amount: 350},
			{fluid: "geghilarity:butene_mixture", amount: 50},
			{fluid: "modern_industrialization:butadiene", amount: 50},
			{fluid: "geghilarity:propane", amount: 15},
			{fluid: "modern_industrialization:propene", amount: 300},
			{fluid: "geghilarity:ethane", amount: 65},
			{fluid: "modern_industrialization:ethylene", amount: 500},
			{fluid: "modern_industrialization:methane", amount: 500}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:heavy_fuel", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_naphtha", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:toluene", amount: 20}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_naphtha", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:benzene", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_naphtha", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:isoprene", amount: 35}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_naphtha", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butene_mixture", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_naphtha", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:butadiene", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:propane", amount: 15}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_naphtha", amount: 100}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:propene", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethane", amount: 65}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_naphtha", amount: 100}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:ethylene", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:severely_steam-cracked_naphtha", amount: 100}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 50}
		]
	})
	
	// lightly hydro light
	
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 30,
		duration: 260,
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 1000},
			{fluid: "modern_industrialization:light_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_light_fuel", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_light_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:naphtha", amount: 800},
			{fluid: "geghilarity:butane", amount: 150},
			{fluid: "geghilarity:propane", amount: 200},
			{fluid: "geghilarity:ethane", amount: 125},
			{fluid: "modern_industrialization:methane", amount: 125}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 48,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_light_fuel", amount: 40}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:naphtha", amount: 32}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_light_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butane", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_light_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "geghilarity:propane", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_light_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethane", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_light_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 25}
		]
	})
	
	// lightly hydro heavy
	
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 30,
		duration: 260,
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 1000},
			{fluid: "modern_industrialization:heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_heavy_fuel", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 600},
			{fluid: "modern_industrialization:naphtha", amount: 100},
			{fluid: "geghilarity:butane", amount: 100},
			{fluid: "geghilarity:propane", amount: 200},
			{fluid: "geghilarity:ethane", amount: 75},
			{fluid: "modern_industrialization:methane", amount: 75}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_heavy_fuel", amount: 100}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 60}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_heavy_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:naphtha", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_heavy_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butane", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_heavy_fuel", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:propane", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethane", amount: 75}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 1200,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 75}
		]
	})
	
	// lightly hydro naphtha
	
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 30,
		duration: 260,
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 1000},
			{fluid: "modern_industrialization:naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_naphtha", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butane", amount: 800},
			{fluid: "geghilarity:propane", amount: 300},
			{fluid: "geghilarity:ethane", amount: 250},
			{fluid: "modern_industrialization:methane", amount: 250}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 48,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_naphtha", amount: 30}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butane", amount: 32}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_naphtha", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:propane", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_naphtha", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethane", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:lightly_hydro-cracked_naphtha", amount: 100}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 25}
		]
	})
	
	// severely hydro light
	
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 30,
		duration: 260,
		fluid_inputs: [
			{fluid: "geghilarity:hot_high-pressure_hydrogen", amount: 1000},
			{fluid: "modern_industrialization:light_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:severely_hydro-cracked_light_fuel", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_light_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:naphtha", amount: 200},
			{fluid: "geghilarity:butane", amount: 125},
			{fluid: "geghilarity:propane", amount: 125},
			{fluid: "geghilarity:ethane", amount: 1500},
			{fluid: "modern_industrialization:methane", amount: 1500}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_light_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:naphtha", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_light_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butane", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_light_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "geghilarity:propane", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 48,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_light_fuel", amount: 40}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethane", amount: 60}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 48,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_light_fuel", amount: 40}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 60}
		]
	})
	
	// severely hydro heavy
	
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 30,
		duration: 260,
		fluid_inputs: [
			{fluid: "geghilarity:hot_high-pressure_hydrogen", amount: 1000},
			{fluid: "modern_industrialization:heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:severely_hydro-cracked_heavy_fuel", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_heavy_fuel", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 200},
			{fluid: "modern_industrialization:naphtha", amount: 250},
			{fluid: "geghilarity:butane", amount: 300},
			{fluid: "geghilarity:propane", amount: 300},
			{fluid: "geghilarity:ethane", amount: 175},
			{fluid: "modern_industrialization:methane", amount: 175}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_heavy_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_heavy_fuel", amount: 100}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:naphtha", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_heavy_fuel", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butane", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_heavy_fuel", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:propane", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_heavy_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethane", amount: 35}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_heavy_fuel", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 35}
		]
	})
	
	// severely hydro naphtha
	
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 30,
		duration: 260,
		fluid_inputs: [
			{fluid: "geghilarity:hot_high-pressure_hydrogen", amount: 1000},
			{fluid: "modern_industrialization:naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:severely_hydro-cracked_naphtha", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_naphtha", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butane", amount: 125},
			{fluid: "geghilarity:propane", amount: 125},
			{fluid: "geghilarity:ethane", amount: 1500},
			{fluid: "modern_industrialization:methane", amount: 1500}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_naphtha", amount: 200}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butane", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_naphtha", amount: 200}
		],
		fluid_outputs: [
			{fluid: "geghilarity:propane", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 48,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_naphtha", amount: 40}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethane", amount: 60}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 48,
		fluid_inputs: [
			{fluid: "geghilarity:severely_hydro-cracked_naphtha", amount: 40}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 60}
		]
	})
	
	// steam propane
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 300,
		fluid_inputs: [
			{fluid: "modern_industrialization:steam", amount: 1000},
			{fluid: "geghilarity:propane", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:steam-cracked_propane", amount: 700}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 120,
		duration: 80,
		fluid_inputs: [
			{fluid: "modern_industrialization:steam", amount: 1000},
			{fluid: "geghilarity:propane", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:steam-cracked_propane", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_propane", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:butadiene", amount: 50},
			{fluid: "modern_industrialization:propene", amount: 150},
			{fluid: "modern_industrialization:ethylene", amount: 500},
			{fluid: "modern_industrialization:methane", amount: 150},
			{fluid: "modern_industrialization:hydrogen", amount: 150}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_propane", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:butadiene", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_propane", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:propene", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_propane", amount: 100}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:ethylene", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_propane", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_propane", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 30}
		]
	})
	
	// steam ethane
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 300,
		fluid_inputs: [
			{fluid: "modern_industrialization:steam", amount: 1000},
			{fluid: "geghilarity:ethane", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:steam-cracked_ethane", amount: 700}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 120,
		duration: 80,
		fluid_inputs: [
			{fluid: "modern_industrialization:steam", amount: 1000},
			{fluid: "geghilarity:ethane", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:steam-cracked_ethane", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_ethane", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:butadiene", amount: 50},
			{fluid: "modern_industrialization:propene", amount: 50},
			{fluid: "modern_industrialization:ethylene", amount: 800},
			{fluid: "modern_industrialization:methane", amount: 50},
			{fluid: "modern_industrialization:hydrogen", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_ethane", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:butadiene", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_ethane", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:propene", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 48,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_ethane", amount: 40}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:ethylene", amount: 32}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_ethane", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_ethane", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 25}
		]
	})
	
	// steam butane
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 300,
		fluid_inputs: [
			{fluid: "modern_industrialization:steam", amount: 1000},
			{fluid: "geghilarity:butane", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:steam-cracked_butane", amount: 700}
		]
	})
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 120,
		duration: 80,
		fluid_inputs: [
			{fluid: "modern_industrialization:steam", amount: 1000},
			{fluid: "geghilarity:butane", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:steam-cracked_butane", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_butane", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:butadiene", amount: 150},
			{fluid: "modern_industrialization:propene", amount: 250},
			{fluid: "modern_industrialization:ethylene", amount: 350},
			{fluid: "modern_industrialization:methane", amount: 150},
			{fluid: "modern_industrialization:hydrogen", amount: 100}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_butane", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:butadiene", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_butane", amount: 100}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:propene", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_butane", amount: 100}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:ethylene", amount: 35}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 240,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_butane", amount: 200}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:methane", amount: 30}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 15,
		duration: 600,
		fluid_inputs: [
			{fluid: "geghilarity:steam-cracked_butane", amount: 500}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:hydrogen", amount: 50}
		]
	})
	
	// SUSY GASOLINE
	
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:ammonia", amount: 2425},
			{fluid: "geghilarity:dichloroethane", amount: 1525}
		],
		fluid_outputs: [
			{fluid: "geghilarity:aminated_ethylene_mixture", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 30,
		duration: 300,
		fluid_inputs: [
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 3050},
			{fluid: "geghilarity:aminated_ethylene_mixture", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:neutralized_aminated_ethylene_mixture", amount: 4050}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 30,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:neutralized_aminated_ethylene_mixture", amount: 4050}
		],
		fluid_outputs: [
			{fluid: "geghilarity:triethylenetetramine", amount: 100},
			{fluid: "geghilarity:aminoethylpiperazine", amount: 50},
			{fluid: "geghilarity:diethylenetriamine", amount: 300},
			{fluid: "geghilarity:ethylenediamine", amount: 500},
			{fluid: "geghilarity:piperazine", amount: 50}	
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:neutralized_aminated_ethylene_mixture", amount: 4050}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diethylenetriamine", amount: 150}	
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:neutralized_aminated_ethylene_mixture", amount: 4050}
		],
		fluid_outputs: [
			{fluid: "geghilarity:aminoethylpiperazine", amount: 25}	
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:neutralized_aminated_ethylene_mixture", amount: 4050}
		],
		fluid_outputs: [
			{fluid: "geghilarity:triethylenetetramine", amount: 50}	
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 7,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:neutralized_aminated_ethylene_mixture", amount: 2025}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethylenediamine", amount: 250}
		]
	})
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 120,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:potassium_dust", amount: 1},
			{item: "geghilarity:molecular_sieve_dust", amount: 4}
		],
		item_outputs: [	
			{item: "geghilarity:potassium-loaded_molecular_sieve_dust", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu: 120,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:potassium-loaded_molecular_sieve_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:isoprene", amount: 4000}
		],
		item_outputs: [	
			{item: "geghilarity:saturated_potassium-loaded_molecular_sieve_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:purified_isoprene", amount: 4000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 120,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:saturated_potassium-loaded_molecular_sieve_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:benzene", amount: 50}
		],
		item_outputs: [	
			{item: "geghilarity:potassium-loaded_molecular_sieve_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:cyclopentadiene_solution", amount: 100}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:cyclopentadiene_solution", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:benzene", amount: 1000},
			{fluid: "geghilarity:cyclopentadiene", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 30,
		duration: 16,
		fluid_inputs: [
			{fluid: "geghilarity:cyclopentadiene_solution", amount: 80}
		],
		fluid_outputs: [
			{fluid: "geghilarity:cyclopentadiene", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:reaction_furnace",
		eu: 60,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:iron_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:carbon_monoxide", amount: 5000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:crude_iron_pentacarbonyl", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 30,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:crude_iron_pentacarbonyl", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:iron_pentacarbonyl", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 120,
		duration: 300,
		fluid_inputs: [
			{fluid: "geghilarity:cyclopentadiene", amount: 2000},
			{fluid: "geghilarity:iron_pentacarbonyl", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:ferrocene_dust", amount: 11}
		],
		fluid_outputs: [
			{fluid: "geghilarity:carbon_monoxide", amount: 5000},
			{fluid: "modern_industrialization:hydrogen", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 120,
		duration: 200,
		item_inputs: [
			{item: "modern_industrialization:aluminum_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:phenol", amount: 3000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:aluminium_phenolate", amount: 1000},
			{fluid: "modern_industrialization:hydrogen", amount: 3000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 120,
		duration: 5,
		fluid_inputs: [
			{fluid: "geghilarity:isobutylene", amount: 100},
			{fluid: "geghilarity:phenol", amount: 50},
			{fluid: "geghilarity:aluminium_phenolate", amount: 50, probability: 0.0}
		],
		fluid_outputs: [
			{fluid: "geghilarity:2_6_di_tert_butylphenol", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 12,
		duration: 80,
		fluid_inputs: [
			{fluid: "modern_industrialization:creosote", amount: 200}
		],
		fluid_outputs: [
			{fluid: "geghilarity:cresol", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 120,
		duration: 5,
		fluid_inputs: [
			{fluid: "geghilarity:isobutylene", amount: 100},
			{fluid: "geghilarity:cresol", amount: 50},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 50, probability: 0.0}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butylated_hydroxytoluene", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 12,
		duration: 200,
		fluid_inputs: [
			{fluid: "modern_industrialization:creosote", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:xylenol", amount: 25}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 120,
		duration: 5,
		fluid_inputs: [
			{fluid: "geghilarity:isobutylene", amount: 50},
			{fluid: "geghilarity:xylenol", amount: 50},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 50, probability: 0.0}
		],
		fluid_outputs: [
			{fluid: "geghilarity:2_4_dimethyl_6_tert_butylphenol", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:2_4_dimethyl_6_tert_butylphenol", amount: 300},
			{fluid: "geghilarity:butylated_hydroxytoluene", amount: 300}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_antioxidants", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:2_6_di_tert_butylphenol", amount: 300},
			{fluid: "geghilarity:butylated_hydroxytoluene", amount: 300}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_antioxidants", amount: 1000}
		]
	})	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:2_4_dimethyl_6_tert_butylphenol", amount: 300},
			{fluid: "geghilarity:2_6_di_tert_butylphenol", amount: 300}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_antioxidants", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:ferrocene_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:iso-octane", amount: 300}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_antioxidants", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:ethylenediamine", amount: 300},
			{fluid: "geghilarity:2_6_di_tert_butylphenol", amount: 300}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_antioxidants", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:ferrocene_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:toluene", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_antioxidants", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:ferrocene_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:tetraethyl_lead", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_antioxidants", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:ethylenediamine", amount: 300},
			{fluid: "geghilarity:butylated_hydroxytoluene", amount: 300}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_antioxidants", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:ethylenediamine", amount: 300},
			{fluid: "geghilarity:2_4_dimethyl_6_tert_butylphenol", amount: 300}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_antioxidants", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 30,
		duration: 300,
		item_inputs: [
			{item: "modern_industrialization:sodium_dust", amount: 1},
			{item: "modern_industrialization:lead_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:sodium-lead_alloy_ingot", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 114,
		item_inputs: [
			{item: "geghilarity:sodium-lead_alloy_ingot", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:sodium-lead_alloy_dust", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:bubble_reactor",
		eu: 120,
		duration: 5,
		fluid_inputs: [
			{fluid: "modern_industrialization:ethylene", amount: 50},
			{fluid: "geghilarity:hydrogen_chloride", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:chloroethane", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:batch_reactor",
		eu: 120,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:sodium-lead_alloy_dust", amount: 8}
		],
		fluid_inputs: [
			{fluid: "geghilarity:chloroethane", amount: 4000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:tetraethyl_lead_sludge", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 30,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:tetraethyl_lead_sludge", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:tetraethyl_lead", amount: 500}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 120,
		duration: 5,
		fluid_inputs: [
			{fluid: "geghilarity:isobutylene", amount: 50},
			{fluid: "geghilarity:isobutane", amount: 50},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 50, probability: 0.0}
		],
		fluid_outputs: [
			{fluid: "geghilarity:iso-octane", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:tetraethyl_lead", amount: 100},
			{fluid: "geghilarity:iso-octane", amount: 300}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_antiknock", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "modern_industrialization:toluene", amount: 500},
			{fluid: "geghilarity:iso-octane", amount: 300}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_antiknock", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:tetraethyl_lead", amount: 100},
			{fluid: "modern_industrialization:toluene", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_antiknock", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 120,
		duration: 3,
		fluid_inputs: [
			{fluid: "modern_industrialization:propene", amount: 50},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 50},
			{fluid: "minecraft:water", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:hydrated_propene", amount: 150}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:hydrated_propene", amount: 3000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diluted_sulfuric_acid", amount: 2000},
			{fluid: "geghilarity:isopropyl_alcohol", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 30,
		duration: 20,
		fluid_inputs: [
			{fluid: "geghilarity:aluminium_chloride", amount: 1000}
		],
		item_outputs: [
			{item: "geghilarity:aluminium_chloride_dust", amount: 4}
		]
	})
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 5,
		item_inputs: [
			{item: "geghilarity:aluminium_chloride_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:butane", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:isobutane", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:bed_reactor",
		eu: 30,
		duration: 5,
		item_inputs: [
			{item: "geghilarity:chromium_trioxide_dust", amount: 1, probability: 0.0}
		],
		fluid_inputs: [
			{fluid: "geghilarity:isobutane", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:isobutylene", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 120,
		duration: 5,
		fluid_inputs: [
			{fluid: "geghilarity:isobutylene", amount: 50},
			{fluid: "minecraft:water", amount: 50},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 50, probability: 0.0}
		],
		fluid_outputs: [
			{fluid: "geghilarity:tert-butyl_alcohol", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 30,
		duration: 5,
		fluid_inputs: [
			{fluid: "geghilarity:methanol", amount: 50},
			{fluid: "geghilarity:isobutylene", amount: 50}
		],
		fluid_outputs: [
			{fluid: "geghilarity:ethyl_tert-butyl_ether", amount: 50}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:isopropyl_alcohol", amount: 200},
			{fluid: "geghilarity:tert-butyl_alcohol", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_oxygenates", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:isopropyl_alcohol", amount: 200},
			{fluid: "geghilarity:n-butanol", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_oxygenates", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:isopropyl_alcohol", amount: 200},
			{fluid: "geghilarity:methanol", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_oxygenates", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:isopropyl_alcohol", amount: 200},
			{fluid: "geghilarity:ethyl_tert-butyl_ether", amount: 150}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_oxygenates", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:isopropyl_alcohol", amount: 200},
			{fluid: "modern_industrialization:ethanol", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_oxygenates", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:tert-butyl_alcohol", amount: 100},
			{fluid: "geghilarity:ethyl_tert-butyl_ether", amount: 150}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_oxygenates", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:tert-butyl_alcohol", amount: 100},
			{fluid: "modern_industrialization:ethanol", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_oxygenates", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:tert-butyl_alcohol", amount: 100},
			{fluid: "geghilarity:n-butanol", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_oxygenates", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:tert-butyl_alcohol", amount: 100},
			{fluid: "geghilarity:methanol", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_oxygenates", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:n-butanol", amount: 100},
			{fluid: "modern_industrialization:ethanol", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_oxygenates", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:n-butanol", amount: 100},
			{fluid: "geghilarity:ethyl_tert-butyl_ether", amount: 150}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_oxygenates", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:n-butanol", amount: 100},
			{fluid: "geghilarity:methanol", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_oxygenates", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:methanol", amount: 500},
			{fluid: "geghilarity:ethyl_tert-butyl_ether", amount: 150}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_oxygenates", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:methanol", amount: 500},
			{fluid: "modern_industrialization:ethanol", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_oxygenates", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:ethyl_tert-butyl_ether", amount: 150},
			{fluid: "modern_industrialization:ethanol", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_oxygenates", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:stirred_tank",
		eu: 120,
		duration: 5,
		fluid_inputs: [
			{fluid: "geghilarity:propane", amount: 50},
			{fluid: "geghilarity:nitric_acid", amount: 150}
		],
		fluid_outputs: [
			{fluid: "geghilarity:diluted_nitromethane", amount: 200},
			{fluid: "geghilarity:nitric_oxide", amount: 100}
		]
	})
	event.custom({ 
		type: "modern_industrialization:distillery",
		eu: 30,
		duration: 160,
		fluid_inputs: [
			{fluid: "geghilarity:diluted_nitromethane", amount: 160}
		],
		fluid_outputs: [
			{fluid: "geghilarity:nitromethane", amount: 40}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:nitromethane", amount: 500},
			{fluid: "modern_industrialization:diethyl_ether", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_general_additives", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "modern_industrialization:diethyl_ether", amount: 500},
			{fluid: "geghilarity:acetone", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_general_additives", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		fluid_inputs: [
			{fluid: "geghilarity:nitromethane", amount: 500},
			{fluid: "geghilarity:acetone", amount: 500}
		],
		fluid_outputs: [
			{fluid: "geghilarity:gasoline_general_additives", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 120,
		duration: 20,
		fluid_inputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 1000},
			{fluid: "geghilarity:gasoline_general_additives", amount: 100},
			{fluid: "geghilarity:gasoline_oxygenates", amount: 100},
			{fluid: "geghilarity:gasoline_antiknock", amount: 100},
			{fluid: "geghilarity:gasoline_antioxidants", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:supreme_gasoline", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 120,
		duration: 20,
		fluid_inputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 1000},
			{fluid: "geghilarity:gasoline_general_additives", amount: 100},
			{fluid: "geghilarity:gasoline_oxygenates", amount: 100},
			{fluid: "geghilarity:gasoline_antiknock", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:premium_gasoline", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 120,
		duration: 20,
		fluid_inputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 1000},
			{fluid: "geghilarity:gasoline_general_additives", amount: 100},
			{fluid: "geghilarity:gasoline_oxygenates", amount: 100},
			{fluid: "geghilarity:gasoline_antioxidants", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:premium_gasoline", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 120,
		duration: 20,
		fluid_inputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 1000},
			{fluid: "geghilarity:gasoline_general_additives", amount: 100},
			{fluid: "geghilarity:gasoline_antiknock", amount: 100},
			{fluid: "geghilarity:gasoline_antioxidants", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:premium_gasoline", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 120,
		duration: 20,
		fluid_inputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 1000},
			{fluid: "geghilarity:gasoline_oxygenates", amount: 100},
			{fluid: "geghilarity:gasoline_antiknock", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:midgrade_gasoline", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 120,
		duration: 20,
		fluid_inputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 1000},
			{fluid: "geghilarity:gasoline_oxygenates", amount: 100},
			{fluid: "geghilarity:gasoline_antioxidants", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:midgrade_gasoline", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 120,
		duration: 20,
		fluid_inputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 1000},
			{fluid: "geghilarity:gasoline_general_additives", amount: 100},
			{fluid: "geghilarity:gasoline_antioxidants", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:midgrade_gasoline", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:lcr",
		eu: 120,
		duration: 20,
		fluid_inputs: [
			{fluid: "modern_industrialization:light_fuel", amount: 1000},
			{fluid: "geghilarity:gasoline_general_additives", amount: 100},
			{fluid: "geghilarity:gasoline_antiknock", amount: 100}
		],
		fluid_outputs: [
			{fluid: "geghilarity:midgrade_gasoline", amount: 1000}
		]
	})
	
	// rough
	
	event.custom({ 
		type: "modern_industrialization:cracking_unit",
		eu: 60,
		duration: 260,
		item_inputs: [
			{item: "geghilarity:cracking_catalyst", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:fuel_oil", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:upgraded_fuel_oil_mix", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 160,
		fluid_inputs: [
			{fluid: "geghilarity:upgraded_fuel_oil_mix", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:spent_cracking_catalyst", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:diesel", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 60,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:spent_cracking_catalyst", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:cracking_catalyst", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:flue_gas", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:salloy",
		eu: 60,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:molecular_sieve_dust", amount: 1},
			{item: "geggy:clay_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:cracking_catalyst", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:distillation_tower",
		eu: 60,
		duration: 120,
		fluid_inputs: [
			{fluid: "geghilarity:refinery_gas", amount: 1000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:butane", amount: 100},
			{fluid: "geghilarity:propane", amount: 100},
			{fluid: "geghilarity:ethane", amount: 100},
			{fluid: "modern_industrialization:methane", amount: 750}
		]
	})

	
})	

/*

	event.custom({ 
		type: "modern_industrialization:",
		eu: 30,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:", amount: 1000}
		]
	})

*/