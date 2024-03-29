ServerEvents.recipes(event => {
// CINDERSCAPES

	event.remove({id: 'cinderscapes:gunpowder'})

	event.custom({ 
		type: "modern_industrialization:macerator",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "cinderscapes:sulfur", amount: 1}
		],
		item_outputs: [
			{item: "modern_industrialization:sulfur_dust", amount: 1},
			{item: "modern_industrialization:sulfur_dust", amount: 1, probability: 0.50},
			{item: "modern_industrialization:sulfur_dust", amount: 1, probability: 0.50}
		]
	})

})	
