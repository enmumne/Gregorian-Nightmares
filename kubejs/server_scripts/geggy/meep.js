//requires: neepmeat

ServerEvents.recipes(event => {
	
	event.remove([
		"neepmeat:tools/projector",
		"neepmeat:fluid_transfer/fluid_drain"
	])
	
	event.shaped('neepmeat:projector', [
		'B  ',
		'AD ',
		'C  '
	], {
		A: 'minecraft:rotten_flesh',
		B: 'modern_industrialization:analog_circuit',
		C: 'minecraft:book',
		D: 'neepmeat:enlightened_brain'
	})
	
	event.shaped('neepmeat:fluid_drain', [
		'BBB',
		'A A',
		'AAA'
	], {
		A: 'minecraft:copper_ingot',
		B: 'modern_industrialization:steel_plate'
	})
	
	event.smelting('geggy:unsavory_brain', 'neepmeat:brain_rough').cookingTime(150)
	
})
