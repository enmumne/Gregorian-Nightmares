// Created by TheonlyTazz
// Requested by Trystero
// Function to "Shear" any entity

function entitySnipSnip(event, entity, item, output, dropchance, amount){
    if(event.target.type == entity && event.item == item){

        //check if already sheared
        if (event.target.persistentData?.sheared == undefined) {
            event.target.persistentData.sheared = 1
        } else {
            event.target.persistentData.sheared++
        }
        if (event.target.persistentData.sheared >= amount) return


        //roll chance
        let randomChance = Math.floor(Math.random() * 100)
		
		if (randomChance <= dropchance){

			let {x, y, z} = event.target
			let itemEntity = event.level.createEntity("item")

			itemEntity.y= y + 0.6
			itemEntity.x= x
			itemEntity.z= z
			itemEntity.item = output
			itemEntity.item.count = 1
			itemEntity.motionY = 0.32
			itemEntity.spawn()
		}

        event.player.damageHeldItem()
		
}}

ItemEvents.entityInteracted(event =>{
    entitySnipSnip(event, 'minecraft:zombie', 'minecraft:shears', 'minecraft:rotten_flesh', 85, 3)
})

/*
function entitySnipSnip(event, entity, item, output, dropmin, dropmax, amount){
    if(event.target.type == entity && event.item == item){

        //check if already sheared
        if (event.target.persistentData?.sheared == undefined) {
            event.target.persistentData.sheared = 1
        } else {
            event.target.persistentData.sheared++
        }
        if (event.target.persistentData.sheared >= amount) return


        //roll random amount
        let randomAmount = Math.floor(Math.random() * (dropmax - dropmin + 1) + dropmin)

        let {x, y, z} = event.target
        let itemEntity = event.level.createEntity("item")

        itemEntity.y= y + 0.5
        itemEntity.x= x
        itemEntity.z= z
        itemEntity.item = output
        itemEntity.item.count = randomAmount
        itemEntity.motionY = 0.32
        itemEntity.spawn()

        event.player.damageHeldItem()
}}

ItemEvents.entityInteracted(event =>{
//  entitySnipSnip(event, entity.id, item, output, minimumAmount, maximumAmount,)
    entitySnipSnip(event, 'minecraft:zombie', 'minecraft:shears', 'minecraft:rotten_flesh', 1, 3, 3)
    entitySnipSnip(event, 'minecraft:villager', 'minecraft:shears', 'minecraft:emerald', 1, 1, 99)
})
*/