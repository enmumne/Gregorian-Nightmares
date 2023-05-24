/*
let machineIds = [
    'bronze_evaporation_tank',
    'clay_quarry'
]



// Add tags
ServerEvents.tags('block', event => {
    machineIds.forEach(id => {
        event.add('minecraft:mineable/pickaxe', `modern_industrialization:${id}`)
        event.add('minecraft:needs_stone_tool', `modern_industrialization:${id}`)
    })
})

// Add loot table (self drop)
ServerEvents.blockLootTables(event => {
    machineIds.forEach(id => {
        event.addSimpleBlock(`modern_industrialization:${id}`)
    })
})

*/

function MI(id) { return `modern_industrialization:${id}`}

ServerEvents.recipes(event => {

function machineRecipe(recipeType, eu, duration) { return event.recipes.modern_industrialization[recipeType](eu, duration) }



event.shaped(MI('clay_quarry'), ['BBB','BPB','BRB'], {B:'minecraft:mud_bricks',P:'create:fluid_pipe',R:'create:propeller'})
machineRecipe('mine_clay', 2, 150).itemOut('geggy:clay_copper_can').fluidIn('minecraft:water', 1000).itemIn('geggy:copper_can')



let evaporate = (duration) => machineRecipe('evaporation', 2, duration);
    evaporate(600).itemOut('minecraft:packed_mud').itemIn('minecraft:mud')

    event.shaped(MI('bronze_evaporation_tank'), [
        'C',
        'P',
        'T'
    ], {C: MI('bronze_machine_casing'), P: 'create:fluid_pipe', T: 'create:fluid_tank'})
	
})	




