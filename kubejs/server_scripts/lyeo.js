ServerEvents.recipes(event => {
	
	//FERRIC REE CHLORIDES (ad astra)
	event.recipes.modern_industrialization.electrolyzer({
		eu: 60,
		duration: 576,
		fluid_inputs: [ 
			{fluid: "geghilarity:ferric_ree_chloride", amount: 2000}
		],
		item_outputs: [
				{item: "ad_astra:raw_desh", amount: 1}
		],
		fluid_outputs: [
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		]
	})	
	
	
})	