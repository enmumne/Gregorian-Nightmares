
// thanks static and phantom in MI discord for pointing me in the right direction
// that use of outputs = [] and using push() would have been unguessable, through pure trial & error

const ores = [
	{
		id: 'tetrahedrite',
		mainore: 'copper',
		crushcount: 1,
		washA: ['native_copper', 'native_zinc', 'kesterite'],
		isPersulfate: 2,
		psout: ['copper', 'iron', 'copper'],
		isMercury: 0,
		isSlurry: 0,
	},
	{
		id: 'malachite',
		mainore: 'copper',
		crushcount: 5,
		washA: ['native_copper', 'brown_limonite', 'azurite'],
		isPersulfate: 2,
		psout: ['copper', 'iron', 'copper'],
		isMercury: 0,
		isSlurry: 0,
	},	
	{
		id: 'azurite',
		mainore: 'copper',
		crushcount: 5,
		washA: ['malachite', 'brown_limonite', 'azurite'],
		isPersulfate: 2,
		psout: ['copper', 'iron', 'copper'],
		isMercury: 0,
		isSlurry: 0,
	},
]

ServerEvents.recipes(event => {
	
	let pick = (element) => {
		let newRecipe = {
			type: 'farmersdelight:cutting',
			ingredients: [{item: 'gegology:'+element.id+'_ore'}],
			tool: {type: 'farmersdelight:tool', tag: 'c:tools/pickaxes'},
			result: [
				{item: 'gegology:crushed_'+element.id+'_ore', count: element.crushcount},
				{item: 'gegology:crushed_'+element.id+'_ore', count: element.crushcount, chance: 0.25}
			],
			sound: 'minecraft:entity.item.break'
		}
		event.custom(newRecipe);
	}
	
	let press = (element) => {
		let newRecipe = {
			type: 'create:pressing',
			ingredients: [{item: 'gegology:'+element.id+'_ore'}],
			results: [
				{item: 'gegology:crushed_'+element.id+'_ore', count: element.crushcount},
				{chance: 0.5, item: 'gegology:crushed_'+element.id+'_ore', count: element.crushcount}
			]
		}
		event.custom(newRecipe);
	}
	
	let wash = (element) => {
		
		let outputs = [];
		outputs.push({item: 'gegology:purified_'+element.id+'_ore', count: 1});
		element.washA.forEach(out => {
             outputs.push({chance: 0.5, item: 'gegology:tiny_purified_'+out+'_ore', count: 1});
		})
		
		let newRecipe = {
			type: 'create:splashing',
			ingredients: [{item: 'gegology:crushed_'+element.id+'_ore'}],
		}
		newRecipe['results'] = outputs;
		event.custom(newRecipe);
	}
	
	
	let persulfate = (element) => {
		
		//let newRecipe = [];
		if (element.isPersulfate == 1) {
        let newRecipe = {
            type: 'modern_industrialization:assembler',
            eu: 8,
            duration: 10,
			item_inputs: [{item: "minecraft:copper_ingot", amount: 1}],
        }
		
		let outputs = [];
		element.psout.forEach(out => {
             outputs.push({ amount: 1, item: 'minecraft:' + out + '_ingot' });
		})

        newRecipe['item_outputs'] = outputs;
		event.custom(newRecipe);
		} else {
			
		let newRecipe = {
            type: 'modern_industrialization:assembler',
            eu: 16,
            duration: 10,
			item_inputs: [{item: "minecraft:iron_ingot", amount: 1}],
        }
		
		let outputs = [];
		element.psout.forEach(out => {
             outputs.push({ amount: 1, item: 'minecraft:' + out + '_ingot' });
		})

        newRecipe['item_outputs'] = outputs;
		event.custom(newRecipe);	
			
			
		}
        
        
    }
	
	let mill = (element) => {
		
		event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": 'gegology:tiny_crushed_'+element.id+'_ore'}
		],
		"processingTime": 50,
		"results": [
			{"item": 'gegology:tiny_'+element.id+'_dust', "chance": 0.9}
		]
		})
		
		event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": 'gegology:crushed_'+element.id+'_ore'}
		],
		"processingTime": 400,
		"results": [
			{"item": 'gegology:'+element.id+'_dust'},
			{"item": 'gegology:tiny_'+element.id+'_dust', "chance": 0.9}
		]
		})
		
		event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": 'gegology:tiny_purified_'+element.id+'_ore'}
		],
		"processingTime": 50,
		"results": [
			{"item": 'gegology:tiny_'+element.id+'_dust', "chance": 0.95}
		]
		})
		
		event.custom({
		"type": "create:milling",
		"ingredients": [
			{"item": 'gegology:purified_'+element.id+'_ore'}
		],
		"processingTime": 200,
		"results": [
			{"item": 'gegology:'+element.id+'_dust'},
			{"item": 'gegology:small_'+element.id+'_dust', "chance": 0.9}
		]
		})
			
	}	
	
	
	let dust = (element) => {	

		event.shapeless('gegology:crushed_'+element.id+'_ore', [ '9x gegology:tiny_crushed_'+element.id+'_ore'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 4, duration: 40, item_inputs: [{item: 'gegology:tiny_crushed_'+element.id+'_ore', amount: 9}], item_outputs: [{item: 'gegology:crushed_'+element.id+'_ore', amount: 1}]})
			
		event.shapeless('gegology:purified_'+element.id+'_ore', [ '9x gegology:tiny_purified_'+element.id+'_ore'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 4, duration: 40, item_inputs: [{item: 'gegology:tiny_purified_'+element.id+'_ore', amount: 9}], item_outputs: [{item: 'gegology:purified_'+element.id+'_ore', amount: 1}]})

		event.shapeless('gegology:refined_'+element.id+'_ore', [ '9x gegology:tiny_refined_'+element.id+'_ore'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 4, duration: 40, item_inputs: [{item: 'gegology:tiny_refined_'+element.id+'_ore', amount: 9}], item_outputs: [{item: 'gegology:refined_'+element.id+'_ore', amount: 1}]})	
		
		event.shapeless('gegology:'+element.id+'_dust', [ '4x gegology:small_'+element.id+'_dust'])
		event.shapeless('gegology:'+element.id+'_dust', [ '9x gegology:tiny_'+element.id+'_dust'])
		//getting smaller dusts is quite pointless
		//event.shapeless('9x gegology:tiny_'+element.id'+_dust', [ 'gegology:'+element.id+'_dust'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 4, duration: 40, item_inputs: [{item: 'gegology:tiny_'+element.id+'_dust', amount: 9}], item_outputs: [{item: 'gegology:'+element.id+'_dust', amount: 1}]})
		event.custom({ 
			type: "modern_industrialization:packer", eu: 4, duration: 40, item_inputs: [{item: 'gegology:small_'+element.id+'_dust', amount: 4}], item_outputs: [{item: 'gegology:'+element.id+'_dust', amount: 1}]})	
	}	
		
	
	const mercury = (element) => {}
	
	const slurry = (element) => {}
    
	
	ores.forEach(element => {
		pick(element);
		press(element);
		
		wash(element);
		if (element.isPersulfate >= 1) {
			persulfate(element)
		}
		if (element.isMercury >= 1) {
			mercury(element)
		}	
		if (element.isSlurry >= 1) {
			slurry(element)
		}
		
		mill(element);

		dust(element);

		
    })
	
	event.smelting('gegology:copper_chunk', 'gegology:crushed_tetrahedrite_ore').cookingTime(200)
	event.smelting('gegology:copper_chunk', 'gegology:purified_tetrahedrite_ore').cookingTime(150)
	event.smelting('gegology:copper_chunk', 'gegology:refined_tetrahedrite_ore').cookingTime(100)
	
	event.smelting('create:copper_nugget', 'gegology:crushed_malachite_ore').cookingTime(100)
	event.smelting('create:copper_nugget', 'gegology:purified_malachite_ore').cookingTime(75)
	event.smelting('create:copper_nugget', 'gegology:refined_malachite_ore').cookingTime(50)
	
	// 144 36 16
	// -- 45 49
	
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": "create:copper_nugget"}],
		"results": [{"amount": 15*81, "fluid": "geghilarity:mcopper"}] //15
	})
	event.custom({ 
		type: "modern_industrialization:smelter",
		eu: 2,
		duration: 45,
		item_inputs: [ 
			{item: "create:copper_nugget", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:mcopper", amount: 16}
		]
	})
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": "gegology:copper_chunk"}],
		"results": [{"amount": 34*81, "fluid": "geghilarity:mcopper"}] // 34
	})
	event.custom({ 
		type: "modern_industrialization:smelter",
		eu: 2,
		duration: 75,
		item_inputs: [ 
			{item: "gegology:copper_chunk", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:mcopper", amount: 36}
		]
	})
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": "minecraft:copper_ingot"}],
		"results": [{"amount": 135*81, "fluid": "geghilarity:mcopper"}] //135
	})
	event.custom({ 
		type: "modern_industrialization:smelter",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "minecraft:copper_ingot", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:mcopper", amount: 144}
		]
	})
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": "modern_industrialization:copper_tiny_dust"}],
		"results": [{"amount": 14*81, "fluid": "geghilarity:mcopper"}] //14
	})
	event.custom({ 
		type: "modern_industrialization:smelter",
		eu: 2,
		duration: 20,
		item_inputs: [ 
			{item: "modern_industrialization:copper_tiny_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:mcopper", amount: 16}
		]
	})
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": "modern_industrialization:copper_dust"}],
		"results": [{"amount": 132*81, "fluid": "geghilarity:mcopper"}] //132
	})
	event.custom({ 
		type: "modern_industrialization:smelter",
		eu: 2,
		duration: 75,
		item_inputs: [ 
			{item: "modern_industrialization:copper_dust", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:mcopper", amount: 144}
		]
	})
	
	let smeltore = (name, tpur, pur, tdust, sdust, dust, output) => {
		event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": 'gegology:tiny_purified_'+name+'_ore'}],
			"results": [{"amount": tpur*81, "fluid": output}] 
		})
		event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": 'gegology:purified_'+name+'_ore'}],
			"results": [{"amount": pur*81, "fluid": output}] 
		})
		event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": 'gegology:tiny_'+name+'_dust'}],
			"results": [{"amount": tdust*81, "fluid": output}] 
		})
		event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": 'gegology:small_'+name+'_dust'}],
			"results": [{"amount": sdust*81, "fluid": output}] 
		})
		event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": 'gegology:'+name+'_dust'}],
			"results": [{"amount": dust*81, "fluid": output}] 
		})
		
	}	
	
	//15 34 135 heated mixer
	//16 36 144
	
	//crushed = dust, purified = dust + small, refined = dust + small + tiny
	//skips crushed melt values and recipes
	//tetra dust= 40, (45, 49) 
	//tetra 36 45 49 /36 9 4 49	
	//malac 24 30 33 /24 6 2 32
	//azuri 16 20 22 /16 4 1 21
	
	//crushed is std - 1, tiny are /9, down
	//pur is crushed/4 + crushed
	//dust is std + 1, small and tiny are /4 and /9
	smeltore('tetrahedrite', 4, 42, 4, 9, 37, 'geghilarity:mcopper') // 41 > 46 > 50
	smeltore('malachite', 3, 28, 2, 6, 25, 'geghilarity:mcopper') // 27 > 31 > 33
	smeltore('azurite', 2, 18, 1, 4, 17, 'geghilarity:mcopper') // 18 > 21 > 22
	
	let meltoret1 = (name, tpur, pur, tref, ref, tdust, sdust, dust, output) => {
		event.custom({ 
			type: "modern_industrialization:smelter",
			eu: 2,
			duration: 25,
			item_inputs: [ 
				{item: 'gegology:tiny_purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tpur}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_smelter",
			eu: 2,
			duration: 25,
			item_inputs: [ 
				{item: 'gegology:tiny_purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tpur}
			]
		})
		event.custom({ 
			type: "modern_industrialization:smelter",
			eu: 2,
			duration: 200,
			item_inputs: [ 
				{item: 'gegology:purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: pur}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_smelter",
			eu: 2,
			duration: 200,
			item_inputs: [ 
				{item: 'gegology:purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: pur}
			]
		})

		event.custom({ 
			type: "modern_industrialization:electric_smelter",
			eu: 8,
			duration: 20,
			item_inputs: [ 
				{item: 'gegology:tiny_refined_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tref}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_smelter",
			eu: 8,
			duration: 150,
			item_inputs: [ 
				{item: 'gegology:refined_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: ref}
			]
		})
		
		event.custom({ 
			type: "modern_industrialization:smelter",
			eu: 2,
			duration: 7,
			item_inputs: [ 
				{item: 'gegology:tiny_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_smelter",
			eu: 2,
			duration: 7,
			item_inputs: [ 
				{item: 'gegology:tiny_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:smelter",
			eu: 2,
			duration: 30,
			item_inputs: [ 
				{item: 'gegology:small_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: sdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_smelter",
			eu: 2,
			duration: 30,
			item_inputs: [ 
				{item: 'gegology:small_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: sdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:smelter",
			eu: 2,
			duration: 100,
			item_inputs: [ 
				{item: 'gegology:'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: dust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_smelter",
			eu: 2,
			duration: 100,
			item_inputs: [ 
				{item: 'gegology:'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: dust}
			]
		})
		
	}
	
	// crushed, pur, ref are std (crush skipped)
	// dust is crushed + 3
	meltoret1('tetrahedrite', 5, 45, 5, 49, 4, 9, 39, 'geghilarity:mcopper') // 41 > 46 > 50 >> 43 > 48 > 52
	meltoret1('malachite', 3, 30, 3, 33, 3, 6, 27, 'geghilarity:mcopper') // 27 > 31 > 33 >> 30 > 33 > 36	
	meltoret1('azurite', 2, 20, 2, 22, 2, 4, 19, 'geghilarity:mcopper') // 18 > 21 > 22 >> 21 > 23 > 25	
	
		
	event.custom({
		"type": "create:compacting",
		"ingredients": [{"amount": 11745, "fluid": "geghilarity:mcopper"}], //145
		"results": [{"item": "minecraft:copper_ingot"}]
	})
	
	event.custom({ 
		type: "modern_industrialization:caster",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:mold_nugget", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:mcopper", amount: 144}
		],
		item_outputs: [
			{item: "create:copper_nugget", amount: 9}
		]
	})
	event.custom({ 
		type: "modern_industrialization:caster",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: "geggy:mold_ingot", amount: 1, probability: 0.0}
		],
		fluid_inputs: [ 
			{fluid: "geghilarity:mcopper", amount: 144}
		],
		item_outputs: [
			{item: "minecraft:copper_ingot", amount: 1}
		]
	})
	
	
	
})	