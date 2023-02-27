// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

//JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
//})

ItemEvents.tooltip(event => {
//onEvent('item.tooltip', event => {

event.add('geghilarity:sacred_platinoreum', '§7This plate is a lie. It is made of your tears.')

event.add('geggy:j_tool_rod', '§7DJ2 called and wants its recipe back.')
event.add('geggy:j_planks', '§7For chests and crafting table.')


})