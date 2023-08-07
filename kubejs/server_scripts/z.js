PlayerEvents.loggedIn(event => {	
    if (!event.player.stages.has('wfirst')) {
		event.player.give(Item.of('ftbquests:book'))
		//Utils.server.runCommand(`gamerule doInsomnia false`)
		event.player.stages.add('wfirst')
	}
});	

ServerEvents.loaded(event => {
	Utils.server.runCommand('gamerule doTraderSpawning false')
    let data = event.server.persistentData
    if (!data.contains("loaded")) {
		event.server.runCommandSilent('difficulty hard')
    }
    data.putBoolean("loaded", true)
})


//ServerEvents.loaded(e => e.server.runCommandSilent('reload'))
//ServerEvents.loaded(e => e.server.runCommandSilent('/kubejs reload client_scripts'))

/*
ServerEvents.loaded(event => {	
	event.server.schedule(25000, () => { 
		Utils.server.runCommand(`/kubejs reload client_scripts`)
		Utils.server.runCommand(`tell @a Please check the recipe to make a bed (white).`)	
		Utils.server.runCommand(`tell @a If you see the vanilla one it means recipes didn't load, try "/reload".`)
	})
});
*/

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



