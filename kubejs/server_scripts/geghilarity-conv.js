//onEvent('recipes', event => {
ServerEvents.recipes(event => {
	
	// pile conversions PGM
	event.shapeless('geghilarity:platinum_metallic_powder_dust', [ '4x geghilarity:small_platinum_metallic_powder_dust'])
	event.shapeless('geghilarity:platinum_metallic_powder_dust', [ '9x geghilarity:tiny_platinum_metallic_powder_dust'])
	event.shapeless('9x geghilarity:tiny_platinum_metallic_powder_dust', [ 'geghilarity:platinum_metallic_powder_dust'])
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:tiny_platinum_metallic_powder_dust", amount: 9}],
			item_outputs: [{item: "geghilarity:platinum_metallic_powder_dust", amount: 1}]})
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:small_platinum_metallic_powder_dust", amount: 4}],
			item_outputs: [{item: "geghilarity:platinum_metallic_powder_dust", amount: 1}]})		
	event.recipes.modern_industrialization.unpacker({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:platinum_metallic_powder_dust", amount: 1}],
			item_outputs: [{item: "geghilarity:tiny_platinum_metallic_powder_dust", amount: 9}]})
	
	event.shapeless('geghilarity:platinum_residue_dust', [ '4x geghilarity:small_platinum_residue_dust'])
	event.shapeless('geghilarity:platinum_residue_dust', [ '9x geghilarity:tiny_platinum_residue_dust'])
	event.shapeless('9x geghilarity:tiny_platinum_residue_dust', [ 'geghilarity:platinum_residue_dust'])
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:tiny_platinum_residue_dust", amount: 9}],
			item_outputs: [{item: "geghilarity:platinum_residue_dust", amount: 1}]})
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:small_platinum_residue_dust", amount: 4}],
			item_outputs: [{item: "geghilarity:platinum_residue_dust", amount: 1}]})		
	event.recipes.modern_industrialization.unpacker({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:platinum_residue_dust", amount: 1}],
			item_outputs: [{item: "geghilarity:tiny_platinum_residue_dust", amount: 9}]})
	
	event.shapeless('geghilarity:platinum_salt_dust', [ '4x geghilarity:small_platinum_salt_dust'])
	event.shapeless('geghilarity:platinum_salt_dust', [ '9x geghilarity:tiny_platinum_salt_dust'])
	event.shapeless('9x geghilarity:tiny_platinum_salt_dust', [ 'geghilarity:platinum_salt_dust'])
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:tiny_platinum_salt_dust", amount: 9}],
			item_outputs: [{item: "geghilarity:platinum_salt_dust", amount: 1}]})
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:small_platinum_salt_dust", amount: 4}],
			item_outputs: [{item: "geghilarity:platinum_salt_dust", amount: 1}]})		
	event.recipes.modern_industrialization.unpacker({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:platinum_salt_dust", amount: 1}],
			item_outputs: [{item: "geghilarity:tiny_platinum_salt_dust", amount: 9}]})
	
	event.shapeless('geghilarity:palladium_salt_dust', [ '4x geghilarity:small_palladium_salt_dust'])
	event.shapeless('geghilarity:palladium_salt_dust', [ '9x geghilarity:tiny_palladium_salt_dust'])
	event.shapeless('9x geghilarity:tiny_palladium_salt_dust', [ 'geghilarity:palladium_salt_dust'])
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:tiny_palladium_salt_dust", amount: 9}],
			item_outputs: [{item: "geghilarity:palladium_salt_dust", amount: 1}]})
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:small_palladium_salt_dust", amount: 4}],
			item_outputs: [{item: "geghilarity:palladium_salt_dust", amount: 1}]})		
	event.recipes.modern_industrialization.unpacker({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:palladium_salt_dust", amount: 1}],
			item_outputs: [{item: "geghilarity:tiny_palladium_salt_dust", amount: 9}]})
	
	event.shapeless('geghilarity:reprecipitated_palladium_dust', [ '4x geghilarity:small_reprecipitated_palladium_dust'])
	event.shapeless('geghilarity:reprecipitated_palladium_dust', [ '9x geghilarity:tiny_reprecipitated_palladium_dust'])
	event.shapeless('9x geghilarity:tiny_reprecipitated_palladium_dust', [ 'geghilarity:reprecipitated_palladium_dust'])
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:tiny_reprecipitated_palladium_dust", amount: 9}],
			item_outputs: [{item: "geghilarity:reprecipitated_palladium_dust", amount: 1}]})
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:small_reprecipitated_palladium_dust", amount: 4}],
			item_outputs: [{item: "geghilarity:reprecipitated_palladium_dust", amount: 1}]})		
	event.recipes.modern_industrialization.unpacker({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:reprecipitated_palladium_dust", amount: 1}],
			item_outputs: [{item: "geghilarity:tiny_reprecipitated_palladium_dust", amount: 9}]})
	
	event.shapeless('geghilarity:ashes', [ '4x geghilarity:small_ashes'])
	event.shapeless('geghilarity:ashes', [ '9x geghilarity:tiny_ashes'])
	event.shapeless('9x geghilarity:tiny_ashes', [ 'geghilarity:ashes'])
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:tiny_ashes", amount: 9}],
			item_outputs: [{item: "geghilarity:ashes", amount: 1}]})
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:small_ashes", amount: 4}],
			item_outputs: [{item: "geghilarity:ashes", amount: 1}]})		
	event.recipes.modern_industrialization.unpacker({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:ashes", amount: 1}],
			item_outputs: [{item: "geghilarity:tiny_ashes", amount: 9}]})
	
	event.shapeless('geghilarity:leach_residue_dust', [ '4x geghilarity:small_leach_residue_dust'])
	event.shapeless('geghilarity:leach_residue_dust', [ '9x geghilarity:tiny_leach_residue_dust'])
	event.shapeless('9x geghilarity:tiny_leach_residue_dust', [ 'geghilarity:leach_residue_dust'])
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:tiny_leach_residue_dust", amount: 9}],
			item_outputs: [{item: "geghilarity:leach_residue_dust", amount: 1}]})
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:small_leach_residue_dust", amount: 4}],
			item_outputs: [{item: "geghilarity:leach_residue_dust", amount: 1}]})		
	event.recipes.modern_industrialization.unpacker({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:leach_residue_dust", amount: 1}],
			item_outputs: [{item: "geghilarity:tiny_leach_residue_dust", amount: 9}]})
			
	event.shapeless('geghilarity:rock_salt_dust', [ '4x geghilarity:small_rock_salt_dust'])
	event.shapeless('geghilarity:rock_salt_dust', [ '9x geghilarity:tiny_rock_salt_dust'])
	event.shapeless('9x geghilarity:tiny_rock_salt_dust', [ 'geghilarity:rock_salt_dust'])
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:tiny_rock_salt_dust", amount: 9}],
			item_outputs: [{item: "geghilarity:rock_salt_dust", amount: 1}]})
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:small_rock_salt_dust", amount: 4}],
			item_outputs: [{item: "geghilarity:rock_salt_dust", amount: 1}]})		
	event.recipes.modern_industrialization.unpacker({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:rock_salt_dust", amount: 1}],
			item_outputs: [{item: "geghilarity:tiny_rock_salt_dust", amount: 9}]})
			
	// bricks		
	event.shapeless('modern_industrialization:brick_dust', [ '4x geggy:small_brick_dust'])
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geggy:small_brick_dust", amount: 4}],
			item_outputs: [{item: "modern_industrialization:brick_dust", amount: 1}]})		

	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geggy:wrought_small_dust", amount: 4}],
			item_outputs: [{item: "geggy:wrought_dust", amount: 1}]})		

	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:tiny_indium_dust", amount: 9}],
			item_outputs: [{item: "geghilarity:indium_dust", amount: 1}]})	

	event.shapeless('geghilarity:precious_ingot', [ '9x geghilarity:precious_nugget'])
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:precious_nugget", amount: 9}],
			item_outputs: [{item: "geghilarity:precious_ingot", amount: 1}]})				
	
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:tiny_tungstate_dust", amount: 9}],
			item_outputs: [{item: "geghilarity:tungstate_dust", amount: 1}]})
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:small_tungstate_dust", amount: 4}],
			item_outputs: [{item: "geghilarity:tungstate_dust", amount: 1}]})
			
	event.recipes.modern_industrialization.packer({eu: 3, duration: 100,item_inputs: [{item: "geghilarity:small_zinc_dust", amount: 4}],
			item_outputs: [{item: "kubejs:zinc_dust", amount: 1}]})		
	
})

// tag (no hashtag) = item
