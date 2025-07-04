//onEvent('block.registry', (event) => {
StartupEvents.registry('block', event => {
	
	console.log('BLOCK REGISTRY')
	
	event.create('geggy:oleous_sand').material('sand').displayName('Oleous Sand').hardness(2).tagBlock('minecraft:mineable/shovel').requiresTool(false)
	event.create('geggy:andesite_block').material('stone').displayName('Andesite Alloy Frame').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('geggy:andesite_casing_1', 'cardinal').material('stone').displayName('Unfinished Andesite Casing').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('geggy:andesite_casing_2', 'cardinal').material('stone').displayName('Unfinished Andesite Casing').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('geggy:andesite_casing_3', 'cardinal').material('stone').displayName('Unfinished Andesite Casing').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('geggy:andesite_casing_4', 'cardinal').material('stone').displayName('Unfinished Andesite Casing').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('geggy:andesite_casing_5', 'cardinal').material('stone').displayName('Unfinished Andesite Casing').hardness(8).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	event.create('gegology:saphirite_ore', 'cardinal').material('stone').displayName('Saphirite Ore').hardness(200).tagBlock('minecraft:mineable/pickaxe').tagBlock('c:obsidian').requiresTool(true)
	event.create('gegology:jivolite_ore', 'cardinal').material('stone').displayName('Jivolite Ore').hardness(200).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).tagBlock('c:obsidian').requiresTool(true)
	event.create('gegology:stiratite_ore', 'cardinal').material('stone').displayName('Stiratite Ore').hardness(200).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).tagBlock('c:obsidian').requiresTool(true)
	event.create('gegology:crotinium_ore', 'cardinal').material('stone').displayName('Crotinum Ore').hardness(200).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).tagBlock('c:obsidian').requiresTool(true)
	event.create('gegology:rubyte_ore', 'cardinal').material('stone').displayName('Rubyte Ore').hardness(200).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).tagBlock('c:obsidian').requiresTool(true)
	event.create('gegology:sheldon_ore', 'cardinal').material('stone').displayName('Sheldonite Ore').hardness(200).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).tagBlock('c:obsidian').requiresTool(true)
	
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
	event.create('geggy:iron_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	//event.create('geggy:deepslate_iron_corenode').material('iron').hardness(666).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:copper_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	//event.create('geggy:deepslate_copper_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:tin_corenode').material('stone').hardness(200).lightLevel(0.8).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	//event.create('geggy:deepslate_tin_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:coal_corenode').material('stone').hardness(200).lightLevel(0.9).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	//event.create('geggy:deepslate_coal_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:antimony_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	//event.create('geggy:deepslate_antimony_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:bauxite_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	//event.create('geggy:deepslate_bauxite_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:lead_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	//event.create('geggy:deepslate_lead_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:lignite_corenode').material('stone').hardness(200).lightLevel(0.8).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	//event.create('geggy:deepslate_lignite_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:mozanite_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	//event.create('geggy:deepslate_mozanite_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:nickel_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	event.create('geggy:zinc_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	//event.create('geggy:deepslate_nickel_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:salt_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	//event.create('geggy:deepslate_salt_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:tungsten_corenode').material('stone').hardness(200).lightLevel(0.8).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	//event.create('geggy:deepslate_tungsten_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:uranium_corenode').material('stone').hardness(200).lightLevel(0.8).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	//event.create('geggy:deepslate_uranium_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:precious_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	//event.create('geggy:deepslate_precious_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:redstone_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	//event.create('geggy:deepslate_rediron_corenode').material('iron').hardness(50).tagBlock('minecraft:mineable/pickaxe')
	event.create('geggy:quartz_corenode').material('stone').hardness(200).lightLevel(0.7).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	
	event.create('geggy:oilsands_corenode').material('stone').hardness(200).lightLevel(0.9).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	event.create('geggy:gaseous_corenode').material('stone').hardness(200).lightLevel(0.9).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true)
	
	/*
	event.create('gegology:gegology').material('stone').hardness(200).lightLevel(0.9).tagBlock('minecraft:needs_iron_tool').tagBlock('c:obsidian').requiresTool(true).textureJson({
            layer0: "gegology:item/gt-refined",
            layer1: "gegology:item/gt-purifiedtiny",
        })
	*/

})

//onEvent('worldgen.add', event => {

WorldgenEvents.remove(event => {
	
	//event.removeFeatureById('underground_ores', ['minecraft:ore_gold', 'minecraft:ore_gold_deltas', 'minecraft:ore_gold_extra', 'minecraft:ore_gold_lower', 'minecraft:ore_gold_nether'])
	//event.removeFeatureById('underground_decoration', ['minecraft:ore_gold', 'minecraft:ore_gold_deltas', 'minecraft:ore_gold_extra', 'minecraft:ore_gold_lower', 'minecraft:ore_gold_nether'])
	event.removeFeatureById('underground_ores', ['minecraft:ore_gold', 'minecraft:ore_gold_deltas', 'minecraft:ore_gold_lower', 'minecraft:ore_gold_nether'])
	event.removeFeatureById('underground_decoration', ['minecraft:ore_gold', 'minecraft:ore_gold_deltas', 'minecraft:ore_gold_lower', 'minecraft:ore_gold_nether'])
	
  //console.debugEnabled = true;

  // print all features for a given biome filter
  //event.printFeatures('', 'minecraft:plains')

  event.removeOres(props => {
    // much like ADDING ores, this supports filtering by worldgen layer...
    props.worldgenLayer = 'underground_ores'


    // BlockStatePredicate to remove iron and copper ores from the given biomes
    // Note tags may NOT be used here, unfortunately...
    props.blocks = ['meadow:alpine_gold_ore', 'create_new_age:magnetite_block', 'create_new_age:thorium_ore', 'modern_industrialization:iridium_ore', 'modern_industrialization:deepslate_iridium_ore', 'modern_industrialization:titanium_ore', 'modern_industrialization:deepslate_titanium_ore', 'minecraft:nether_gold_ore']
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


	
WorldgenEvents.add(event => {	


	const {anchors} = event
		

		//ore.addTarget('minecraft:gold_ore', 'geggy:precious_ore'), 
		//ore.addTarget('minecraft:deepslate_gold_ore', 'geggy:deepslate_precious_ore'),
		//ore.addTarget('minecraft:nether_gold_ore', 'geggy:nether_precious_ore')
		

	
	// OW gold
	
	event.addOre((ore) => {
		ore.id = 'geggy:owgold1'
		ore.biomes = '#minecraft:is_overworld'
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
	
	// nether gold
	
	event.addOre((ore) => {
		ore.id = 'geggy:nethergold1'
		ore.biomes = '#minecraft:is_nether'
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
		ore.biomes = '#minecraft:is_nether'
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
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:iron_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:iron_corenode'),
		
		ore.count([1])		
			.squared()
			//.triangleHeight(
			.uniformHeight(
				anchors.absolute(-24),
				anchors.absolute(40)	 
			)								 
				
        ore.size = 5 
		ore.chance = 2
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:ironinfup'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:iron_corenode'),
		
		ore.count([1])		
			.squared()
			//.triangleHeight(
			.uniformHeight(
				anchors.absolute(80),
				anchors.absolute(120)	 
			)								 
				
        ore.size = 5 
		ore.chance = 2
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:copperinf'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:copper_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:copper_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(0),
				anchors.absolute(80)	 
			)								 
				
        ore.size = 5 
		//ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:copperinfup'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:copper_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(90),
				anchors.absolute(180)	 
			)								 
				
        ore.size = 5 
		//ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:tininf'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:tin_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:tin_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(-8),
				anchors.absolute(48)	 
			)								 
				
        ore.size = 5 
		//ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:tininfup'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:tin_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(60),
				anchors.absolute(160)	 
			)								 
				
        ore.size = 5 
		//ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:coalinf_a'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:coal_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:coal_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(-40),
				anchors.absolute(0)	 
			)								 
				
        ore.size = 5 
		ore.chance = 2
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:coalinf_b'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:coal_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:coal_corenode'),
		
		ore.count([2])
			.squared()
			.uniformHeight(
				anchors.absolute(32),
				anchors.absolute(128)	 
			)								 
				
        ore.size = 5 
		//ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:bauxiteinf'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:bauxite_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:bauxite_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(-56),
				anchors.absolute(-8)	 
			)								 
				
        ore.size = 5 
		ore.chance = 2
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:bauxiteinfup'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:bauxite_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(80),
				anchors.absolute(200)	 
			)								 
				
        ore.size = 5 
		ore.chance = 2
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})

	event.addOre((ore) => {
		ore.id = 'geggy:ligniteinf'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:lignite_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:lignite_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(0),
				anchors.absolute(128)	 
			)								 
				
        ore.size = 5
		//ore.chance = 1
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})


	event.addOre((ore) => {
		ore.id = 'geggy:tungsteninf'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:tungsten_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:tungsten_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(-56),
				anchors.absolute(-32)	 
			)								 
				
        ore.size = 5
		ore.chance = 4
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:uraniuminf'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:uranium_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:uranium_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(-56),
				anchors.absolute(-40)	 
			)								 
				
        ore.size = 5 
		ore.chance = 4
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})

	event.addOre((ore) => {
		ore.id = 'geggy:redstoneinf'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:redstone_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:redstone_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(-64),
				anchors.absolute(-40)	 
			)								 
				
        ore.size = 5 
		ore.chance = 3
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:quartzinf'
		ore.biomes = '#minecraft:is_nether'
		ore.addTarget('minecraft:netherrack', 'geggy:quartz_corenode')
		
		ore.count([4])
			.squared()
			.uniformHeight(
				anchors.aboveBottom(10),
				anchors.belowTop(10)	 
			)								 
				
        ore.size = 5 
        ore.noSurface = 0.0  
        ore.worldgenLayer = "underground_decoration"		
	})
	
	// new oil
	event.addOre((ore) => {
		ore.id = 'geggy:oil'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#c:sand', 'geggy:oilsands_corenode'),
		ore.addTarget('#c:sandstone', 'geggy:oilsands_corenode'),
		
		ore.count([1])
			.squared()
			.uniformHeight(
				anchors.absolute(20),
				anchors.absolute(100)	 
			)								 
				
        ore.size = 8 
        ore.noSurface = 0.0  
        ore.worldgenLayer = "underground_decoration"		
	})
	event.addOre((ore) => {
		ore.id = 'geggy:gas1'
		ore.biomes = '#minecraft:is_nether'
		ore.addTarget('minecraft:netherrack', 'geggy:gaseous_corenode')
		
		ore.count([3])
				.squared()
				.uniformHeight(
					anchors.aboveBottom(10),
					anchors.belowTop(10)
						 
				)								 
				
        ore.size = 6
        ore.noSurface = 0.0  
        ore.worldgenLayer = "underground_decoration"		
	})
	/*
	event.addOre((ore) => {
		ore.id = 'geggy:gas'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'geggy:gaseous_corenode'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'geggy:gaseous_corenode'),
		
		ore.count([2])
			.squared()
			.uniformHeight(
				anchors.aboveBottom(10),
				anchors.belowTop(10)	 
			)								 
				
        ore.size = 6 
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	*/
	
	// andesite extra
	event.addOre((ore) => {
		ore.id = 'geggy:andesite_extra'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:andesite'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'minecraft:andesite'),
		
		ore.count([3])
			.squared()
			.uniformHeight(
				anchors.absolute(-15),
				anchors.absolute(90)	 
			)								 
				
        ore.size = 64 
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_decoration"		
	})
	
	// redstone extra
	event.addOre((ore) => {
		ore.id = 'geggy:redstone_extra'
		ore.biomes = '#minecraft:is_overworld'
		ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:redstone_ore')
		
		ore.count([5])
			.squared()
			.uniformHeight(
				anchors.absolute(100),
				anchors.absolute(200)	 
			)								 
				
        ore.size = 9 
        ore.noSurface = 0.0 
        ore.worldgenLayer = "underground_ores"		
	})
	
	///////////////
	
	event.addOre((ore) => {
		ore.id = 'geggy:eden_sa'
		ore.biomes = /^edenring:.*/
		ore.addTarget('#minecraft:stone_ore_replaceables', 'gegology:saphirite_ore'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'gegology:saphirite_ore'),
		
		ore.count([1])
				.squared()
				.triangleHeight(
					anchors.absolute(105),
					anchors.absolute(230)	 
				)								 
				
        ore.size = 4 
		ore.chance = 5
        ore.noSurface = 1.0  
        ore.worldgenLayer = "underground_ores"		
	})
	
	event.addOre((ore) => {
		ore.id = 'geggy:eden_ji'
		ore.biomes = /^edenring:.*/
		ore.addTarget('#minecraft:stone_ore_replaceables', 'gegology:jivolite_ore'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'gegology:jivolite_ore'),
		
		ore.count([1])
				.squared()
				.triangleHeight(
					anchors.absolute(85),
					anchors.absolute(200)	 
				)								 
				
        ore.size = 4 
		ore.chance = 5
        ore.noSurface = 1.0  
        ore.worldgenLayer = "underground_ores"		
	})
	
	event.addOre((ore) => {
		ore.id = 'geggy:eden_sti'
		ore.biomes = /^edenring:.*/
		ore.addTarget('#minecraft:stone_ore_replaceables', 'gegology:stiratite_ore'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'gegology:stiratite_ore'),
		
		ore.count([1])
				.squared()
				.triangleHeight(
					anchors.absolute(65),
					anchors.absolute(180)	 
				)								 
				
        ore.size = 4 
		ore.chance = 5
        ore.noSurface = 1.0  
        ore.worldgenLayer = "underground_ores"		
	})
	
	event.addOre((ore) => {
		ore.id = 'geggy:eden_cro'
		ore.biomes = /^edenring:.*/
		ore.addTarget('#minecraft:stone_ore_replaceables', 'gegology:crotinium_ore'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'gegology:crotinium_ore'),
		
		ore.count([1])
				.squared()
				.triangleHeight(
					anchors.absolute(45),
					anchors.absolute(150)	 
				)								 
				
        ore.size = 4 
		ore.chance = 5
        ore.noSurface = 1.0  
        ore.worldgenLayer = "underground_ores"		
	})
	
	event.addOre((ore) => {
		ore.id = 'geggy:eden_ru'
		ore.biomes = /^edenring:.*/
		ore.addTarget('#minecraft:stone_ore_replaceables', 'gegology:rubyte_ore'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'gegology:rubyte_ore'),
		
		ore.count([1])
				.squared()
				.triangleHeight(
					anchors.absolute(25),
					anchors.absolute(120)	 
				)								 
				
        ore.size = 4 
		ore.chance = 5
        ore.noSurface = 1.0  
        ore.worldgenLayer = "underground_ores"		
	})
	
	event.addOre((ore) => {
		ore.id = 'geggy:eden_sh'
		ore.biomes = /^edenring:.*/
		ore.addTarget('#minecraft:stone_ore_replaceables', 'gegology:sheldon_ore'),
		ore.addTarget('#minecraft:deepslate_ore_replaceables', 'gegology:sheldon_ore'),
		
		ore.count([1])
				.squared()
				.triangleHeight(
					anchors.absolute(5),
					anchors.absolute(100)	 
				)								 
				
        ore.size = 4 
		ore.chance = 5
        ore.noSurface = 1.0  
        ore.worldgenLayer = "underground_ores"		
	})
	
	
})	
