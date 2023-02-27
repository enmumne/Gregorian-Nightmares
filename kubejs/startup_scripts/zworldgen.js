//onEvent('block.registry', (event) => {
StartupEvents.registry('block', event => {

	event.create('geggy:precious_ore').material('stone').displayName('Precious Ore').hardness(9).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:nether_precious_ore').material('stone').displayName('Nether Precious Ore').hardness(9).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:deepslate_precious_ore').material('stone').displayName('Deepslate Precious Ore').hardness(9).tagBlock('minecraft:mineable/pickaxe')
	
	event.create('geggy:iron_corenode').material('stone').hardness(50).noDrops()
	//event.create('geggy:deepslate_iron_corenode').material('stone').hardness(666).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:copper_corenode').material('stone').hardness(50).noDrops()
	//event.create('geggy:deepslate_copper_corenode').material('stone').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:tin_corenode').material('stone').hardness(50).noDrops()
	//event.create('geggy:deepslate_tin_corenode').material('stone').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:coal_corenode').material('stone').hardness(50).noDrops()
	//event.create('geggy:deepslate_coal_corenode').material('stone').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:antimony_corenode').material('stone').hardness(50).noDrops()
	//event.create('geggy:deepslate_antimony_corenode').material('stone').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:bauxite_corenode').material('stone').hardness(50).noDrops()
	//event.create('geggy:deepslate_bauxite_corenode').material('stone').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:lead_corenode').material('stone').hardness(50).noDrops()
	//event.create('geggy:deepslate_lead_corenode').material('stone').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:lignite_corenode').material('stone').hardness(50).noDrops()
	//event.create('geggy:deepslate_lignite_corenode').material('stone').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:mozanite_corenode').material('stone').hardness(50).noDrops()
	//event.create('geggy:deepslate_mozanite_corenode').material('stone').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:nickel_corenode').material('stone').hardness(50).noDrops()
	event.create('geggy:zinc_corenode').material('stone').hardness(50).noDrops()
	//event.create('geggy:deepslate_nickel_corenode').material('stone').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:salt_corenode').material('stone').hardness(50).noDrops()
	//event.create('geggy:deepslate_salt_corenode').material('stone').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:tungsten_corenode').material('stone').hardness(50).noDrops()
	//event.create('geggy:deepslate_tungsten_corenode').material('stone').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:uranium_corenode').material('stone').hardness(50).noDrops()
	//event.create('geggy:deepslate_uranium_corenode').material('stone').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:precious_corenode').material('stone').hardness(50).noDrops()
	//event.create('geggy:deepslate_precious_corenode').material('stone').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:redstone_corenode').material('stone').hardness(50).noDrops()
	//event.create('geggy:deepslate_redstone_corenode').material('stone').hardness(50).tagBlock('minecraft:mineable/pickaxe')


})

//onEvent('worldgen.add', event => {

WorldgenEvents.remove(event => {	
	
	event.removeFeatureById('underground_ores', ['minecraft:ore_gold', 'minecraft:ore_gold_deltas', 'minecraft:ore_gold_extra', 'minecraft:ore_gold_lower', 'minecraft:ore_gold_nether'])
	
	
  console.info('HELP')
  //console.debugEnabled = true;

  // print all features for a given biome filter
  //event.printFeatures('', 'minecraft:plains')

  event.removeOres(props => {
    // much like ADDING ores, this supports filtering by worldgen layer...
    props.worldgenLayer = 'underground_ores'


    // BlockStatePredicate to remove iron and copper ores from the given biomes
    // Note tags may NOT be used here, unfortunately...
    props.blocks = ['modern_industrialization:iridium_ore', 'modern_industrialization:deepslate_iridium_ore', 'modern_industrialization:titanium_ore', 'modern_industrialization:deepslate_titanium_ore']
  })
  
  /*
  event.removeSpawnsByID(spawns => {
    spawns.entities.values = [
      'minecraft:phantom'
    ]
  })
  */

});
/*
MIMaterialEvents.addMaterials(event => {
    event.createMaterial("Ironicus Maximum", "ironicus", 0x80ffff, // english name, internal name, and material color in hex
        builder => {
        builder


            .ore({ 
                "generate": true, // does the ore generate in the world
                "ore_set": "copper", // texture set, same principle as for blocks (found in "textures/materialsets/ores")
                "vein_size": 1, // the vein size
                "veins_per_chunk": 88, // the number of veins per chunk
                "max_y": 64, // the maximum y level
				"min_y": 54,
                // the generation parameters are only required if generate is true
  

	 
            //})  
			}, false) 
			//a second boolean optional parameter can be passed to only add the deepslate or if true or normal ore if false
            // default is to add both
            .rawMetal("copper") // add a raw metal with the "copper" texture (found in "textures/materialsets/raw"), same principle as for blocks
            // as for ore, a second boolean optional parameter can be passed to only add the raw ore block if true or the raw ore item if false
            // default is to add both, equivalent to .rawMetal("copper", true).rawMetal("copper", false)
            .defaultRecipes() // add the default recipes for the material (crafting, smelting and machines)
            .forgeHammerRecipes(); // add the forge hammer recipes 
    });
});
*/

/*
MIMaterialEvents.addMaterials(event => {
    event.createMaterial("Ironicus Maximum", "ironicus", 0x80ffff, // english name, internal name, and material color in hex
        builder => {
        builder

			.addParts("ingot", "nugget", "dust", "tiny_dust", "rod", "gear", "ring", "blade", "rotor", "coil", "plate", "bolt", "large_plate")
            // addParts adds the simple parts to the material ie, the one already defined in MI and that don't need more parameters 
            .barrel("Super Barrel", "super_barrel", 69) // add a barrel with 69 stacks capacity and custom english name and path (both optional)
            .tank("Super Tank", "super_tank", 42) // add a tank same as above but for buckets capacity
            .block("copper") // add a simple block with the "copper" texture (found in "textures/materialsets/blocks") 
            .cable("ev") // add an EV tiers cable 
            .specialCasing("Super Zinc Casing", "super_zinc_casing", 8.0) // add a special casing with custom english name and path (both required) 
            // and 8.0 blast resistance (also optional, default is 6.0)
            .machineCasing(8.0) // same as above but for machine casings but the custom name and path are optional
            .pipeCasing(8.0) // add a pipe casing, only blast resistance can be specified

            .ore({ 
                "generate": true, // does the ore generate in the world
                "ore_set": "copper", // texture set, same principle as for blocks (found in "textures/materialsets/ores")
                "vein_size": 1, // the vein size
                "veins_per_chunk": 88, // the number of veins per chunk
                "max_y": 64, // the maximum y level
				"min_y": 54,
                // the generation parameters are only required if generate is true
  
                "min_xp" : 0
                "max_xp" : 0
                 max and min xp dropped by the ore, default is 0 for both. Must be zero if the ore drop raw ores 
	 
            //})  
			}, false) 
			//a second boolean optional parameter can be passed to only add the deepslate or if true or normal ore if false
            // default is to add both
            .rawMetal("copper") // add a raw metal with the "copper" texture (found in "textures/materialsets/raw"), same principle as for blocks
            // as for ore, a second boolean optional parameter can be passed to only add the raw ore block if true or the raw ore item if false
            // default is to add both, equivalent to .rawMetal("copper", true).rawMetal("copper", false)
            .defaultRecipes() // add the default recipes for the material (crafting, smelting and machines)
            .forgeHammerRecipes(); // add the forge hammer recipes 
    });
});
*/
	
WorldgenEvents.add(event => {	

	const {anchors} = event
		

		//ore.addTarget('minecraft:gold_ore', 'geggy:precious_ore'), 
		//ore.addTarget('minecraft:deepslate_gold_ore', 'geggy:deepslate_precious_ore'),
		//ore.addTarget('minecraft:nether_gold_ore', 'geggy:nether_precious_ore')
		
/*
	event.addOre((ore) => {
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:ironicus_maximum'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:ironicus_maximum'),
		
		ore.count([180, 200])
				.squared()
				.uniformHeight(
					anchors.absolute(40),
					anchors.absolute(30)	
					//anchors.absolute(-64),
					//anchors.absolute(90)	 
				)								 
				
        ore.size = 3
		//ore.noSurface = 1.0  
        ore.worldgenLayer = "underground_ores"
			
	})
	*/
	
	/*
	event.addOre((ore) => {
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:deepslate_ironicus_maximum'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:deepslate_ironicus_maximum'),
		
		ore.count([20, 50])
				.triangleHeight(
					anchors.absolute(-20),
					anchors.absolute(20)	 
				)								 
				
        ore.size = 5
		//ore.noSurface = 1.0  
        ore.worldgenLayer = "underground_ores"
			
	})	
	*/
		
	/*	
	event.addOre((ore) => {
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:ironicus_maximum'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:ironicus_maximum'),
		
		ore.count([20, 30])
				.triangleHeight(
					anchors.absolute(-64),
					anchors.absolute(90)	 
				)								 
				
        ore.size = 1
		//ore.noSurface = 1.0  
        ore.worldgenLayer = "underground_decoration"
			
	})	
		
	event.addOre((ore) => {
		ore.addTarget('minecraft:iron_ore', 'geggy:ironicus_maximum'),
		ore.addTarget('minecraft:deepslate_iron_ore', 'geggy:deepslate_ironicus_maximum'),
		ore.addTarget('#c:ores', 'geggy:ironicus_maximum'),
		
		ore.count([100, 110])
				.triangleHeight(
					anchors.absolute(-20),
					anchors.absolute(20)	 
				)								 
				
        ore.size = 10
		ore.noSurface = 1.0  
        ore.worldgenLayer = "underground_decoration"
			
	})
	*/
	
	event.addOre((ore) => {
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:precious_ore'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:deepslate_precious_ore'),
		
		ore.count([3, 6])
				.squared()
				.triangleHeight(
					anchors.absolute(-64),
					anchors.absolute(32)	 
				)								 
				
        ore.size = 9 
        ore.noSurface = 0.5  
        ore.worldgenLayer = "underground_ores"		
	})
	
	// INFINITE ORE NODES
	event.addOre((ore) => {
		ore.id = 'geggy:ironinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:iron_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:iron_corenode'),
		
		ore.count([1])		
			.squared()
			.triangleHeight(
				anchors.absolute(-24),
				anchors.absolute(40)	 
			)								 
				
        ore.size = 3 
		ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:copperinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:copper_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:copper_corenode'),
		
		ore.count([1])
			.squared()
			.triangleHeight(
				anchors.absolute(8),
				anchors.absolute(80)	 
			)								 
				
        ore.size = 3 
		ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:tininf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:tin_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:tin_corenode'),
		
		ore.count([1])
			.squared()
			.triangleHeight(
				anchors.absolute(-8),
				anchors.absolute(48)	 
			)								 
				
        ore.size = 3 
		ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:coalinf_a'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:coal_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:coal_corenode'),
		
		ore.count([1])
			.squared()
			.triangleHeight(
				anchors.absolute(-40),
				anchors.absolute(0)	 
			)								 
				
        ore.size = 3 
		ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:coalinf_b'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:coal_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:coal_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(32),
				anchors.absolute(128)	 
			)								 
				
        ore.size = 3 
		ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:antimonyinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:antimony_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:antimony_corenode'),
		
		ore.count([1])
			.squared()
			.triangleHeight(
				anchors.absolute(-32),
				anchors.absolute(40)	 
			)								 
				
        ore.size = 3 
		ore.chance = 3
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:bauxiteinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:bauxite_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:bauxite_corenode'),
		
		ore.count([1])
			.squared()
			.triangleHeight(
				anchors.absolute(-56),
				anchors.absolute(-8)	 
			)								 
				
        ore.size = 3 
		ore.chance = 2
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:leadinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:lead_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:lead_corenode'),
		
		ore.count([1])
			.squared()
			.triangleHeight(
				anchors.absolute(0),
				anchors.absolute(56)	 
			)								 
				
        ore.size = 3 
		ore.chance = 2
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:ligniteinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:lignite_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:lignite_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(0),
				anchors.absolute(128)	 
			)								 
				
        ore.size = 3 
		ore.chance = 2
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:mozaniteinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:mozanite_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:mozanite_corenode'),
		
		ore.count([1])
			.squared()
			.triangleHeight(
				anchors.absolute(-56),
				anchors.absolute(-32)	 
			)								 
				
        ore.size = 3 
		ore.chance = 3
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:nickelinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:nickel_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:nickel_corenode'),
		
		ore.count([1])
			.squared()
			.triangleHeight(
				anchors.absolute(-16),
				anchors.absolute(40)	 
			)								 
				
        ore.size = 3 
		ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:zincinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:zinc_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:zinc_corenode'),
		
		ore.count([1])
			.squared()
			.triangleHeight(
				anchors.absolute(-16),
				anchors.absolute(40)	 
			)								 
				
        ore.size = 3 
		ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:saltinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:salt_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:salt_corenode'),
		
		ore.count([1])
			.squared()
			.triangleHeight(
				anchors.absolute(0),
				anchors.absolute(64)	 
			)								 
				
        ore.size = 3 
		ore.chance = 2
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:tungsteninf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:tungsten_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:tungsten_corenode'),
		
		ore.count([1])
			.squared()
			.triangleHeight(
				anchors.absolute(-56),
				anchors.absolute(-32)	 
			)								 
				
        ore.size = 3 
		ore.chance = 4
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:uraniuminf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:uranium_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:uranium_corenode'),
		
		ore.count([1])
			.squared()
			.triangleHeight(
				anchors.absolute(-56),
				anchors.absolute(-40)	 
			)								 
				
        ore.size = 3 
		ore.chance = 4
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:preciousinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:precious_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:precious_corenode'),
		
		ore.count([1])
			.squared()
			.triangleHeight(
				anchors.absolute(-56),
				anchors.absolute(0)	 
			)								 
				
        ore.size = 3 
		ore.chance = 2
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:redstoneinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:redstone_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:redstone_corenode'),
		
		ore.count([1])
			.squared()
			.triangleHeight(
				anchors.absolute(-64),
				anchors.absolute(-40)	 
			)								 
				
        ore.size = 3 
		ore.chance = 3
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	
	
})	

/*
onEvent('worldgen.add', event => {
	// use the anchors helper from the event (NOTE: this requires newer versions of KubeJS)
	// if you are using an older version of KubeJS, you can use the methods in the ore properties class
	const {anchors} = event

	event.addOre((ore) => {
		ore.id = "kubejs:glowstone_test_lmao" // (optional, but recommended) custom id for the feature


		// examples on how to use targets
		ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:glowstone') // replace anything in the vanilla stone_ore_replaceables tag with Glowstone
		ore.addTarget('minecraft:deepslate', 'minecraft:nether_wart_block')       // replace Deepslate with Nether Wart Blocks


		ore.count([15, 50])                      // generate between 15 and 50 veins (chosen at random), you could use a single number here for a fixed amount of blocks
				.squared()                       // randomly spreads the ores out across the chunk, instead of generating them in a column
				.triangleHeight(				 // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
						anchors.aboveBottom(32), // the lower bound should be 32 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
						anchors.absolute(96)	 // the upper bound, meanwhile is set to be just exactly at Y = 96
				)								 // in total, the ore can be found between Y levels -32 and 96, and will be most likely at Y = (96 + -32) / 2 = 32
	    
        // more, optional parameters (default values are shown here)
        ore.size = 9                            // max. vein size
        ore.noSurface = 0.5                     // chance to discard if the ore would be exposed to air
        ore.worldgenLayer = "underground_ores"  // what generation step the ores should be generated in (see below)
      	ore.chance = 0							// if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
    })
	

})
*/
