PlayerEvents.loggedIn(event => {	
    if (!event.player.stages.has('wfirst')) {
		event.player.give(Item.of('ftbquests:book'))
		//Utils.server.runCommand(`gamerule doInsomnia false`)
		event.player.stages.add('wfirst')
	}
});	

ServerEvents.loaded(e => e.server.runCommandSilent('reload'))
//ServerEvents.loaded(e => e.server.runCommandSilent('/kubejs reload client_scripts'))

ServerEvents.loaded(event => {	
	event.server.schedule(22000, () => { 
		Utils.server.runCommand(`/kubejs reload client_scripts`)
		Utils.server.runCommand(`tell @a Please check the recipe to make a bed (white).`)	
		Utils.server.runCommand(`tell @a If you see the vanilla one it means recipes didn't load, try "/reload".`)
	})
});

/*
ServerEvents.loaded(event => {	
	event.server.schedule(4000, () => { 
		Utils.server.runCommand(`tell @a Reloading scripts in 30 seconds, please be patient... The game will freeze until done.`)
		Utils.server.runCommand(`tell @a This lag has been kindly gifted to you by KubeJS.`)
	})
	event.server.schedule(36000, () => { 
		Utils.server.runCommand(`tell @a The game will freeze again until done.`)
		Utils.server.runCommand(`reload`)
	})		
});
*/

const Transaction = Java.loadClass('net.fabricmc.fabric.api.transfer.v1.transaction.Transaction')
const ItemVariant = Java.loadClass('net.fabricmc.fabric.api.transfer.v1.item.ItemVariant')

global.recipes = {
    create: {
        manual_depot_application: function (event, output, inputOnDepot, inputInHand) {
            if (event.block == 'create:depot' && event.block.entityData.HeldItem != undefined) {
                let depotItem = Item.of(event.block.entityData.HeldItem.Item.id, event.block.entityData.HeldItem.Item.Count, event.block.entityData.HeldItem.Item.tag)
                let handItem = event.player.mainHandItem
                if (inputOnDepot.equals(depotItem) && inputInHand.equals(handItem)) {
                    event.cancel()
                    let tx = Transaction.openOuter()
                    if (depotItem.count > (handItem.count / inputInHand.count)) {
                        // If the remainder of ingredients is on the depot
                        event.player.give(Item.of(output, (handItem.count / inputInHand.count), output.nbt))
                        event.block.entity.getItemStorage(Direction.UP).extract(ItemVariant.of(Item.of(inputOnDepot).itemStack), (handItem.count / inputInHand.count), tx)
                    } else {
                        // If the remainder of the ingredients is in the hand, or equal
                        event.block.entity.getItemStorage(Direction.UP).extract(ItemVariant.of(Item.of(inputOnDepot).itemStack),  depotItem.count, tx)
                        event.block.entity.getItemStorage(Direction.UP).insert(ItemVariant.of(Item.of(output).itemStack), depotItem.count, tx)
                    }
                    handItem.count -= depotItem.count * inputInHand.count
                    tx.commit()
                }
            }
        }
    }
}
global.recipes.createManualDepotApplication = global.recipes.create.manual_depot_application

BlockEvents.rightClicked(event => {	
    global.recipes.create.manual_depot_application(event,
        // Output
        'minecraft:sand',
        // Inputs
        'minecraft:stick', // On depot
        'minecraft:flint' // In hand
    )
});


