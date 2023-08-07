//onEvent('block.registry', (event) => {
StartupEvents.registry('block', event => {
	
	console.log('BLOCK REGISTRY')
	
	event.create('geggy:andesite_block').material('stone').displayName('Andesite Alloy Frame').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('geggy:andesite_casing_1', 'cardinal').material('stone').displayName('Unfinished Andesite Casing').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('geggy:andesite_casing_2', 'cardinal').material('stone').displayName('Unfinished Andesite Casing').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('geggy:andesite_casing_3', 'cardinal').material('stone').displayName('Unfinished Andesite Casing').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('geggy:andesite_casing_4', 'cardinal').material('stone').displayName('Unfinished Andesite Casing').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('geggy:andesite_casing_5', 'cardinal').material('stone').displayName('Unfinished Andesite Casing').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	/*
	let andesiteblock = event.create('geggy:andesite_block').material('stone').displayName('Andesite Block').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	
	.property(BlockProperties.AXIS).notSolid()
	
	andesiteblock.modelJson = {
		
    
    "parent": "minecraft:block/cube",
    "textures": {
        "up": "geggy:block/andesite_block",
        "down": "geggy:block/down",
        "north": "geggy:block/north",
        "south": "geggy:block/south",
        "east": "geggy:block/east",
        "west": "geggy:block/west"
    }


	}
	
	
	let andesiteblock1 = event.create('geggy:andesite_casing_1').material('stone').displayName('Andesite Block').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	andesiteblock1.modelJson = {
		"parent": "block/cube",
		"textures": {
			"up": "geggy:block/andesite_block",
			"down": "geggy:block/andesite_block",
			"north": "create:block/andesite_casing",
			"south": "geggy:block/andesite_block",
			"east": "geggy:block/andesite_block",
			"west": "geggy:block/andesite_block"		
		}
	}
let andesiteblock2 = event.create('geggy:andesite_casing_2').material('stone').displayName('Andesite Block').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)

	andesiteblock2.modelJson = {
		"parent": "block/cube",
		"textures": {
			"up": "geggy:block/andesite_block",
			"down": "geggy:block/andesite_block",
			"north": "create:block/andesite_casing",
			"south": "geggy:block/andesite_block",
			"east": "create:block/andesite_casing",
			"west": "geggy:block/andesite_block"		
		}
	}
let andesiteblock3 = event.create('geggy:andesite_casing_3').material('stone').displayName('Andesite Block').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)

	andesiteblock3.modelJson = {
		"parent": "block/cube",
		"textures": {
			"up": "geggy:block/andesite_block",
			"down": "geggy:block/andesite_block",
			"north": "create:block/andesite_casing",
			"south": "geggy:block/andesite_block",
			"east": "create:block/andesite_casing",
			"west": "create:block/andesite_casing"		
		}
	}
let andesiteblock4 = event.create('geggy:andesite_casing_4').material('stone').displayName('Andesite Block').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)

	andesiteblock4.modelJson = {
		"parent": "block/cube",
		"textures": {
			"up": "create:block/andesite_casing",
			"down": "geggy:block/andesite_block",
			"north": "create:block/andesite_casing",
			"south": "geggy:block/andesite_block",
			"east": "create:block/andesite_casing",
			"west": "create:block/andesite_casing"		
		}
	}
let andesiteblock5 = event.create('geggy:andesite_casing_5').material('stone').displayName('Andesite Block').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)

	andesiteblock5.modelJson = {
		"parent": "block/cube",
		"textures": {
			"up": "create:block/andesite_casing",
			"down": "geggy:block/andesite_block",
			"north": "create:block/andesite_casing",
			"south": "create:block/andesite_casing",
			"east": "create:block/andesite_casing",
			"west": "create:block/andesite_casing"		
		}
	}	
	*/
	
	//event.create('geggy:andesite_block');
	//event.create('geggy:andesite_casing_1');
	//event.create('geggy:andesite_casing_2');
	//event.create('geggy:andesite_casing_3');
	//event.create('geggy:andesite_casing_4');
	//event.create('geggy:andesite_casing_5');
	
	let cogwheelblock = event.create('geggy:cogwheel').material('stone').displayName('Internal Cogwheel').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).property(BlockProperties.AXIS).notSolid()
	//.defaultState(defstat =>{defstat.set(BlockProperties.AXIS, 1)})
	//.fullBlock(false).notSolid()
	
	cogwheelblock.modelJson = {
    "parent": "create:block/large_wheels",
	"texture_size": [32, 32],
	"textures": {
		"0": "create:block/cogwheel_axis",
		"3": "create:block/axis_top",
		"1_2": "geggy:block/cogwheel",
		"particle": "block/stripped_spruce_log_top"
	},
	"elements": [
		{
			"name": "Axis",
			"from": [6, 0, 6],
			"to": [10, 16, 10],
			"faces": {
				"north": {"uv": [6, 0, 10, 16], "texture": "#0"},
				"east": {"uv": [6, 0, 10, 16], "texture": "#0"},
				"south": {"uv": [6, 0, 10, 16], "texture": "#0"},
				"west": {"uv": [6, 0, 10, 16], "texture": "#0"},
				"up": {"uv": [6, 6, 10, 10], "texture": "#3"},
				"down": {"uv": [6, 6, 10, 10], "texture": "#3"}
			}
		},
		{
			"name": "Gear",
			"from": [-1, 6.5, 6.5],
			"to": [17, 9.5, 9.5],
			"faces": {
				"north": {"uv": [7, 8, 16, 9.5], "texture": "#1_2"},
				"east": {"uv": [5, 8, 6.5, 9.5], "texture": "#1_2"},
				"south": {"uv": [7, 8, 16, 9.5], "texture": "#1_2"},
				"west": {"uv": [5, 8, 6.5, 9.5], "texture": "#1_2"},
				"up": {"uv": [7, 6, 16, 7.5], "texture": "#1_2"},
				"down": {"uv": [7, 6, 16, 7.5], "texture": "#1_2"}
			}
		},
		{
			"name": "Gear2",
			"from": [-1, 6.5, 6.5],
			"to": [17, 9.5, 9.5],
			"rotation": {"angle": 45, "axis": "y", "origin": [8, 8, 8]},
			"faces": {
				"north": {"uv": [7, 8, 16, 9.5], "texture": "#1_2"},
				"east": {"uv": [5, 8, 6.5, 9.5], "texture": "#1_2"},
				"south": {"uv": [7, 8, 16, 9.5], "texture": "#1_2"},
				"west": {"uv": [5, 8, 6.5, 9.5], "texture": "#1_2"},
				"up": {"uv": [7, 6, 16, 7.5], "texture": "#1_2"},
				"down": {"uv": [7, 6, 16, 7.5], "texture": "#1_2"}
			}
		},
		{
			"name": "Gear3",
			"from": [-1, 6.5, 6.5],
			"to": [17, 9.5, 9.5],
			"rotation": {"angle": -45, "axis": "y", "origin": [8, 8, 8]},
			"faces": {
				"north": {"uv": [7, 8, 16, 9.5], "texture": "#1_2"},
				"east": {"uv": [5, 8, 6.5, 9.5], "texture": "#1_2"},
				"south": {"uv": [7, 8, 16, 9.5], "texture": "#1_2"},
				"west": {"uv": [5, 8, 6.5, 9.5], "texture": "#1_2"},
				"up": {"uv": [7, 6, 16, 7.5], "texture": "#1_2"},
				"down": {"uv": [7, 6, 16, 7.5], "texture": "#1_2"}
			}
		},
		{
			"name": "Gear4",
			"from": [6.5, 6.5, -1],
			"to": [9.5, 9.5, 17],
			"faces": {
				"north": {"uv": [5, 8, 6.5, 9.5], "texture": "#1_2"},
				"east": {"uv": [7, 8, 16, 9.5], "texture": "#1_2"},
				"south": {"uv": [5, 8, 6.5, 9.5], "texture": "#1_2"},
				"west": {"uv": [7, 8, 16, 9.5], "texture": "#1_2"},
				"up": {"uv": [7, 6, 16, 7.5], "rotation": 90, "texture": "#1_2"},
				"down": {"uv": [7, 6, 16, 7.5], "rotation": 90, "texture": "#1_2"}
			}
		},
		{
			"name": "GearCaseInner",
			"from": [2, 6.55, 2],
			"to": [14, 9.45, 14],
			"faces": {
				"north": {"uv": [0, 6, 6, 7.5], "texture": "#1_2"},
				"east": {"uv": [0, 6, 6, 7.5], "texture": "#1_2"},
				"south": {"uv": [0, 6, 6, 7.5], "texture": "#1_2"},
				"west": {"uv": [0, 6, 6, 7.5], "texture": "#1_2"},
				"up": {"uv": [4, 0, 10, 6], "texture": "#1_2"},
				"down": {"uv": [4, 0, 10, 6], "texture": "#1_2"}
			}
		},
		{
			"name": "GearCaseOuter",
			"from": [4, 6, 4],
			"to": [12, 10, 12],
			"faces": {
				"north": {"uv": [0, 4, 4, 6], "texture": "#1_2"},
				"east": {"uv": [0, 4, 4, 6], "texture": "#1_2"},
				"south": {"uv": [0, 4, 4, 6], "texture": "#1_2"},
				"west": {"uv": [0, 4, 4, 6], "texture": "#1_2"},
				"up": {"uv": [0, 0, 4, 4], "texture": "#1_2"},
				"down": {"uv": [0, 0, 4, 4], "texture": "#1_2"}
			}
		}
	]
}
	/*
	cogwheelblock.blockstateJson = {
		"variants": {
    "axis=x": {
      "model": "create:block/cogwheel",
	  "uvlock": false,
      "x": 90,
      "y": 90
    },
    "axis=y": {
      "model": "create:block/cogwheel",
	  "uvlock": false,
    },
    "axis=z": {
      "model": "create:block/cogwheel",
	  "uvlock": false,
      "x": 90,
      "y": 180
    }
  }
		
		
	}
*/	
	
	/*
	event.create('geggy:cogwheel').material('stone').displayName('Internal Cogwheel').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('geggy:large_cogwheel').material('stone').displayName('Internal Large Cogwheel').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	*/

	event.create('geggy:precious_ore').material('stone').displayName('Precious Ore').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('geggy:nether_precious_ore').material('stone').displayName('Nether Precious Ore').hardness(4).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('geggy:deepslate_precious_ore').material('stone').displayName('Deepslate Precious Ore').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	// only end quarry
	event.create('geghilarity:naquadric_compound_ore').material('stone').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	
	//event.create('geggy:iron_corenode').material('stone').hardness(50).noDrops().lightLevel(0.7)
	event.create('geggy:iron_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	//event.create('geggy:deepslate_iron_corenode').material('iron').hardness(666).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:copper_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	//event.create('geggy:deepslate_copper_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:tin_corenode').material('stone').hardness(200).lightLevel(0.8).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	//event.create('geggy:deepslate_tin_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:coal_corenode').material('stone').hardness(200).lightLevel(0.9).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	//event.create('geggy:deepslate_coal_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:antimony_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	//event.create('geggy:deepslate_antimony_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:bauxite_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	//event.create('geggy:deepslate_bauxite_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:lead_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	//event.create('geggy:deepslate_lead_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:lignite_corenode').material('stone').hardness(200).lightLevel(0.8).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	//event.create('geggy:deepslate_lignite_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:mozanite_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	//event.create('geggy:deepslate_mozanite_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:nickel_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	event.create('geggy:zinc_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	//event.create('geggy:deepslate_nickel_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:salt_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	//event.create('geggy:deepslate_salt_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:tungsten_corenode').material('stone').hardness(200).lightLevel(0.8).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	//event.create('geggy:deepslate_tungsten_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:uranium_corenode').material('stone').hardness(200).lightLevel(0.8).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	//event.create('geggy:deepslate_uranium_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:precious_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	//event.create('geggy:deepslate_precious_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:redstone_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').requiresTool(true)
	//event.create('geggy:deepslate_rediron_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:quartz_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').requiresTool(true)


})

//onEvent('worldgen.add', event => {

WorldgenEvents.remove(event => {
	
	console.log('REM')	
	
	//event.removeFeatureById('underground_ores', ['minecraft:ore_gold', 'minecraft:gold_ore', 'minecraft:deepslate_gold_ore', 'minecraft:nether_gold_ore', 'minecraft:ore_gold_deltas', 'minecraft:ore_gold_extra', 'minecraft:ore_gold_lower', 'minecraft:ore_gold_nether', 'minecraft:ore_nether_gold', 'minecraft:ore_gold_buried'])
	
	event.removeFeatureById('underground_ores', ['minecraft:ore_gold', 'minecraft:ore_gold_deltas', 'minecraft:ore_gold_extra', 'minecraft:ore_gold_lower', 'minecraft:ore_gold_nether'])
	
	event.removeFeatureById('underground_decoration', ['minecraft:ore_gold', 'minecraft:ore_gold_deltas', 'minecraft:ore_gold_extra', 'minecraft:ore_gold_lower', 'minecraft:ore_gold_nether'])
	
  console.info('HELP')
  //console.debugEnabled = true;

  // print all features for a given biome filter
  //event.printFeatures('', 'minecraft:plains')

  event.removeOres(props => {
    // much like ADDING ores, this supports filtering by worldgen layer...
    props.worldgenLayer = 'underground_ores'


    // BlockStatePredicate to remove iron and copper ores from the given biomes
    // Note tags may NOT be used here, unfortunately...
    props.blocks = ['modern_industrialization:iridium_ore', 'modern_industrialization:deepslate_iridium_ore', 'modern_industrialization:titanium_ore', 'modern_industrialization:deepslate_titanium_ore', 'minecraft:nether_gold_ore']
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

console.log('WORLDGEN')	

	const {anchors} = event
		

		//ore.addTarget('minecraft:gold_ore', 'geggy:precious_ore'), 
		//ore.addTarget('minecraft:deepslate_gold_ore', 'geggy:deepslate_precious_ore'),
		//ore.addTarget('minecraft:nether_gold_ore', 'geggy:nether_precious_ore')
		

	
	// OW gold
	
	event.addOre((ore) => {
		ore.id = 'geggy:owgold1'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:dirt'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'minecraft:dirt'),
		
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
	
	// nether gold
	
	event.addOre((ore) => {
		ore.id = 'geggy:nethergold1'
		ore.addTarget('minecraft:netherrack', 'geggy:nether_precious_ore')
		
		ore.count([10])
				.squared()
				.uniformHeight(
					anchors.aboveBottom(10),
					anchors.belowTop(10)
						 
				)								 
				
        ore.size = 10
        ore.noSurface = 0.0  
        ore.worldgenLayer = "underground_decoration"		
	})
	
	event.addOre((ore) => {
		ore.id = 'geggy:nethergoldeltas2'
		ore.biomes = { id: 'minecraft:basalt_deltas' }
		ore.addTarget('minecraft:netherrack', 'geggy:nether_precious_ore')
		
		ore.count([20])
				.squared()
				.uniformHeight(
					anchors.aboveBottom(10),
					anchors.belowTop(10)	 
				)								 
				
        ore.size = 10 
        ore.noSurface = 0.0  
        ore.worldgenLayer = "underground_decoration"		
	})
	
	
	// INFINITE ORE NODES
	event.addOre((ore) => {
		ore.id = 'geggy:ironinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:iron_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:iron_corenode'),
		
		ore.count([2])		
			.squared()
			//.triangleHeight(
			.uniformHeight(
				anchors.absolute(-24),
				anchors.absolute(40)	 
			)								 
				
        ore.size = 3 
		//ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:copperinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:copper_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:copper_corenode'),
		
		ore.count([5])
			.squared()
			.uniformHeight(
				anchors.absolute(0),
				anchors.absolute(80)	 
			)								 
				
        ore.size = 3 
		//ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:tininf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:tin_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:tin_corenode'),
		
		ore.count([3])
			.squared()
			.uniformHeight(
				anchors.absolute(-8),
				anchors.absolute(48)	 
			)								 
				
        ore.size = 3 
		//ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:coalinf_a'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:coal_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:coal_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
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
		
		ore.count([5])
			.squared()
			.uniformHeight(
				anchors.absolute(32),
				anchors.absolute(128)	 
			)								 
				
        ore.size = 3 
		//ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:antimonyinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:antimony_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:antimony_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(-32),
				anchors.absolute(40)	 
			)								 
				
        ore.size = 3 
		ore.chance = 2
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:bauxiteinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:bauxite_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:bauxite_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(-56),
				anchors.absolute(-8)	 
			)								 
				
        ore.size = 3 
		ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:leadinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:lead_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:lead_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(0),
				anchors.absolute(56)	 
			)								 
				
        ore.size = 3 
		ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:ligniteinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:lignite_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:lignite_corenode'),
		
		ore.count([3])
			.squared()
			.uniformHeight(
				anchors.absolute(0),
				anchors.absolute(128)	 
			)								 
				
        ore.size = 3 
		//ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:mozaniteinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:mozanite_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:mozanite_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(-56),
				anchors.absolute(-32)	 
			)								 
				
        ore.size = 3 
		ore.chance = 2
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:nickelinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:nickel_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:nickel_corenode'),
		
		ore.count([2])
			.squared()
			.uniformHeight(
				anchors.absolute(-16),
				anchors.absolute(40)	 
			)								 
				
        ore.size = 3 
		//ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:zincinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:zinc_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:zinc_corenode'),
		
		ore.count([2])
			.squared()
			.uniformHeight(
				anchors.absolute(-24),
				anchors.absolute(48)	 
			)								 
				
        ore.size = 3 
		//ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:saltinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:salt_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:salt_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(0),
				anchors.absolute(64)	 
			)								 
				
        ore.size = 3 
		ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:tungsteninf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:tungsten_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:tungsten_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(-56),
				anchors.absolute(-32)	 
			)								 
				
        ore.size = 3 
		ore.chance = 3
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:uraniuminf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:uranium_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:uranium_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(-56),
				anchors.absolute(-40)	 
			)								 
				
        ore.size = 3 
		ore.chance = 3
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:preciousinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:precious_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:precious_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(-56),
				anchors.absolute(0)	 
			)								 
				
        ore.size = 3 
		ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:redstoneinf'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:redstone_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:redstone_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(-64),
				anchors.absolute(-40)	 
			)								 
				
        ore.size = 3 
		ore.chance = 2
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:quartzinf'
		ore.addTarget('minecraft:netherrack', 'geggy:quartz_corenode')
		
		ore.count([8])
			.squared()
			.uniformHeight(
				anchors.aboveBottom(10),
				anchors.belowTop(10)	 
			)								 
				
        ore.size = 3 
        ore.noSurface = 0.0  
        ore.worldgenLayer = "underground_decoration"		
	})
	
	// andesite extra
	event.addOre((ore) => {
		ore.id = 'geggy:andesite_extra'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:andesite'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'minecraft:andesite'),
		
		ore.count([4])
			.squared()
			.uniformHeight(
				anchors.absolute(-5),
				anchors.absolute(80)	 
			)								 
				
        ore.size = 64 
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_decoration"		
	})
	
	
})	
