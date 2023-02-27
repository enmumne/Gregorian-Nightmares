PlayerEvents.loggedIn(event => {	
    if (!event.player.stages.has('wfirst')) {
		event.player.give(Item.of('ftbquests:book'))
		//Utils.server.runCommand(`gamerule doInsomnia false`)
		event.player.stages.add('wfirst')
	}
});	
	
ServerEvents.loaded(event => {	
	event.server.schedule(4000, () => { 
		Utils.server.runCommand(`tell @a Reloading scripts in 10 seconds, please be patient... The game will freeze until done.`)
		Utils.server.runCommand(`tell @a This lag has been kindly gifted to you by KubeJS.`)
	})
	event.server.schedule(14000, () => { 
		Utils.server.runCommand(`reload`)
	})		
});
