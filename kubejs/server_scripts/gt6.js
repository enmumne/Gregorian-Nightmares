
// thanks static and phantom in MI discord for pointing me in the right direction
// that use of outputs = [] and using push() would have been unguessable, through pure trial & error

const ores = [
	{
		id: 'tetrahedrite',
		mainore: 'copper',
		crushcount: 1,
		washA: ['native_copper', 'native_zinc', 'kesterite'],
		isPersulfate: true,
		psout: ['native_copper'],
		isMercury: true,
		meout: ['native_zinc'],
		sluice: ['native_copper', 'native_antimony', 'native_zinc', 'kesterite', 'native_arsenic', 'tetrahedrite', 'tetrahedrite', 'tetrahedrite'],
		isMag: false,
		isSulfuric: true,
		sulfout: ['blue'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'alumina',
		mainore: 'alumina',
		crushcount: 1,
		washA: ['bauxite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['bauxite', 'alumina', 'gibbsite', 'alumina', 'alumina', 'alumina', 'alumina', 'alumina'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'apatite',
		mainore: 'none',
		crushcount: 4,
		washA: ['phosphorus', 'fluorite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['phosphorite', 'phosphorus', 'fluorite', 'phosphate', 'apatite', 'apatite', 'apatite', 'apatite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'arsenopyrite',
		mainore: 'arsenic',
		crushcount: 1,
		washA: ['native_gold', 'fluorite', 'cassiterite'],
		isPersulfate: false,
		isMercury: true,
		meout: ['native_gold'],
		sluice: ['native_gold', 'realgar', 'fluorite', 'cassiterite', 'huebnerite', 'arsenopyrite', 'arsenopyrite', 'arsenopyrite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'azurite',
		mainore: 'copper',
		crushcount: 5,
		washA: ['malachite'],
		isPersulfate: true,
		psout: ['malachite'],
		isMercury: false,
		sluice: ['zircon', 'malachite', 'native_hafnium', 'nikolite', 'azurite', 'azurite', 'azurite', 'azurite'],
		isMag: false,
		isSulfuric: true,
		sulfout: ['blue'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'barite',
		mainore: 'barium',
		crushcount: 1,
		washA: ['certus_quartz', 'quartzite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['certus_quartz', 'quartzite', 'barite', 'barite', 'barite', 'barite', 'barite', 'barite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'bastnasite',
		mainore: 'cerium',
		crushcount: 3,
		washA: ['monazite', 'rare_earth'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['monazite', 'rare_earth', 'native_neodymium', 'nikolite', 'bastnasite', 'bastnasite', 'bastnasite', 'bastnasite'],
		isMag: true,
		magout: ['native_neodymium', 'bastnasite', 'bastnasite', 'bastnasite', 'bastnasite'],
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'bauxite',
		mainore: 'bauxite',
		crushcount: 1,
		washA: ['hematite', 'alumina'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['kaolinite', 'ilmenite', 'hematite', 'alumina', 'gibbsite', 'bauxite', 'bauxite', 'bauxite'],
		isMag: true,
		magout: ['ilmenite', 'hematite', 'bauxite', 'bauxite', 'bauxite'],
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'biotite', // argon?
		mainore: 'biotite',
		crushcount: 1,
		washA: ['mica', 'vermiculite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['mica', 'vermiculite', 'chrysotile', 'perlite', 'biotite', 'biotite', 'biotite', 'biotite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'bromargyrite',
		mainore: 'silver',
		crushcount: 1,
		washA: ['pyrolusite', 'native_silver'],
		isPersulfate: true,
		psout: ['smithsonite'],
		isMercury: true,
		meout: ['native_silver'],
		sluice: ['pyrolusite', 'native_silver', 'chromite', 'smithsonite', 'bromargyrite', 'bromargyrite', 'bromargyrite', 'bromargyrite'],
		isMag: true,
		magout: ['pyrolusite', 'bromargyrite', 'bromargyrite', 'bromargyrite', 'bromargyrite'],
		isSulfuric: true,
		sulfout: ['blue'],
		isRegius: 2,
		isSteam: true,
	},
	{
		id: 'calcite',
		mainore: 'calcite',
		crushcount: 1,
		washA: ['malachite', 'calcite'],
		isPersulfate: true,
		psout: ['malachite'],
		isMercury: false,
		sluice: ['malachite', 'calcite', 'calcite', 'calcite', 'calcite', 'calcite', 'calcite', 'calcite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'cassiterite',
		mainore: 'tin',
		crushcount: 2,
		washA: ['molybdenite', 'arsenopyrite', 'stannite'],
		isPersulfate: false,
		isMercury: true,
		meout: ['sperrylite'],
		sluice: ['molybdenite', 'wolframite', 'fluorite', 'arsenopyrite', 'stannite', 'sperrylite', 'huebnerite', 'apatite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 3,
		regout: ['native_zinc'],
		isSteam: true,
	},
	{
		id: 'chalcopyrite',
		mainore: 'tin',
		crushcount: 2,
		washA: ['molybdenite', 'arsenopyrite', 'stannite'],
		isPersulfate: true,
		psout: ['cobaltite'],
		isMercury: true,
		meout: ['native_gold'],
		sluice: ['pyrite', 'cobaltite', 'native_cadmium', 'native_gold', 'sperrylite', 'stannite', 'native_indium', 'chalcopyrite'],
		isMag: true,
		magout: ['pyrite', 'cobaltite', 'chalcopyrite', 'chalcopyrite', 'chalcopyrite'],
		isSulfuric: true,
		sulfout: ['blue'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'chromite',
		mainore: 'chrome',
		crushcount: 1,
		washA: ['molybdenite', 'arsenopyrite', 'stannite'],
		isPersulfate: false,
		isMercury: true,
		meout: ['bromargyrite'],
		sluice: ['pyrolusite', 'hematite', 'magnesite', 'bromargyrite', 'chromite', 'chromite', 'chromite', 'chromite'],
		isMag: true,
		magout: ['pyrolusite', 'hematite', 'chromite', 'chromite', 'chromite'],
		isSulfuric: true,
		sulfout: ['green'],
		isRegius: 2,
		isSteam: true,
	},
	{
		id: 'chrysotile',
		mainore: 'asbestos',
		crushcount: 1,
		washA: ['mica', 'biotite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['mica', 'biotite', 'soapstone', 'jade', 'chrysotile', 'chrysotile', 'chrysotile', 'chrysotile'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'cinnabar',
		mainore: 'mercury',
		crushcount: 1,
		washA: ['redstone', 'sulfur'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['redstone', 'sulfur', 'glowstone', 'selenium', 'cinnabar', 'cinnabar', 'cinnabar', 'cinnabar'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'clay',
		mainore: 'clay',
		crushcount: 1,
		washA: ['redstone', 'sulfur'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['clay', 'clay', 'clay', 'clay', 'clay', 'clay', 'clay', 'clay'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'cobaltite',
		mainore: 'cobalt',
		crushcount: 1,
		washA: ['native_cobalt', 'pentlandite', 'yellow_limonite'],
		isPersulfate: true,
		psout: ['native_cobalt'],
		isMercury: false,
		sluice: ['native_cobalt', 'realgar', 'fluorite', 'pentlandite', 'yellow_limonite', 'cobaltite', 'cobaltite', 'cobaltite'],
		isMag: true,
		magout: ['realgar', 'fluorite', 'cobaltite', 'cobaltite', 'cobaltite'],
		isSulfuric: true,
		sulfout: ['red'],
		isRegius: 0, 
		isSteam: true,
	},
	{
		id: 'diatomite',
		mainore: 'diatomite',
		crushcount: 1,
		washA: ['mica', 'biotite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['mica', 'opal', 'biotite', 'perlite', 'sapphire', 'diatomite', 'diatomite', 'diatomite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'ferberite',
		mainore: 'tungsten',
		crushcount: 1,
		washA: ['tungstate', 'hematite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['tungstate', 'hematite', 'ferberite', 'ferberite', 'ferberite', 'ferberite', 'ferberite', 'ferberite'],
		isMag: true,
		magout: ['hematite', 'ferberite', 'ferberite', 'ferberite', 'ferberite'],
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'fluorite',
		mainore: 'fluorite',
		crushcount: 2,
		washA: ['hematite', 'native_sodium'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['huebnerite', 'native_yttrium', 'native_cerium', 'hematite', 'native_sodium', 'native_barium', 'fluorite', 'fluorite'],
		isMag: true,
		magout: ['hematite', 'fluorite', 'fluorite', 'fluorite', 'fluorite'],
		isSulfuric: false,
		isRegius: 0, 
		isSteam: true,
	},
	{
		id: 'galena',
		mainore: 'lead',
		crushcount: 1,
		washA: ['native_silver', 'native_lead'],
		isPersulfate: true,
		psout: ['sphalerite'],
		isMercury: true,
		meout: ['native_silver'],
		sluice: ['sphalerite', 'native_silver', 'native_lead', 'selenium', 'fluorite', 'calcite', 'galena', 'galena'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0, 
		isSteam: true,
	},
	{
		id: 'garnierite',
		mainore: 'nickel',
		crushcount: 1,
		washA: ['native_nickel', 'sperrylite'],
		isPersulfate: true,
		psout: ['native_nickel'],
		isMercury: true,
		meout: ['sperrylite'],
		sluice: ['native_nickel', 'sperrylite', 'garnierite', 'garnierite', 'garnierite', 'garnierite', 'garnierite', 'garnierite'],
		isMag: true,
		magout: ['sperrylite', 'garnierite', 'garnierite', 'garnierite', 'garnierite'],
		isSulfuric: true,
		sulfout: ['cyan'],
		isRegius: 0, 
		isSteam: true,
	},
	{
		id: 'gibbsite',
		mainore: 'bauxite',
		crushcount: 1,
		washA: ['bauxite', 'hematite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['bauxite', 'ilmenite', 'hematite', 'alumina', 'gibbsite', 'gibbsite', 'gibbsite', 'gibbsite'],
		isMag: true,
		magout: ['ilmenite', 'hematite', 'gibbsite', 'gibbsite', 'gibbsite'],
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'glowstone',
		mainore: 'glowstone',
		crushcount: 4,
		washA: ['native_silver', 'native_lead'],
		isPersulfate: false,
		isMercury: true,
		meout: ['native_gold'],
		sluice: ['redstone', 'native_gold', 'gloomstone', 'fluorite', 'glowstone', 'glowstone', 'glowstone', 'glowstone'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0, 
		isSteam: true,
	},
	{
		id: 'gloomstone',
		mainore: 'gloomstone',
		crushcount: 4,
		washA: ['native_silver', 'native_lead'],
		isPersulfate: false,
		isMercury: true,
		meout: ['native_gold'],
		sluice: ['redstone', 'native_gold', 'glowstone', 'fluorite', 'gloomstone', 'gloomstone', 'gloomstone', 'gloomstone'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0, 
		isSteam: true,
	},
	{
		id: 'gypsum',
		mainore: 'gypsum',
		crushcount: 1,
		washA: ['chrysotile', 'soapstone'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['trona', 'mirabilite', 'chrysotile', 'soapstone', 'sulfur', 'gypsum', 'gypsum', 'gypsum'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0, 
		isSteam: true,
	},
	{
		id: 'hematite',
		mainore: 'iron',
		crushcount: 1,
		washA: ['native_copper', 'native_zinc', 'kesterite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['ilmenite', 'granitic_sand', 'pyrolusite', 'clay', 'hematite', 'hematite', 'hematite', 'hematite'],
		isMag: true,
		magout: ['clay', 'hematite', 'hematite', 'hematite', 'hematite'],
		isSulfuric: true,
		sulfout: ['green'],
		isRegius: 2, 
		isSteam: true,
	},
	{
		id: 'huebnerite',
		mainore: 'tungsten',
		crushcount: 1,
		washA: ['fluorite', 'arsenopyrite', 'cassiterite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['wolframite', 'molybdenite', 'fluorite', 'arsenopyrite', 'cassiterite', 'topaz', 'huebnerite', 'huebnerite'],
		isMag: false,
		isSulfuric: true,
		sulfout: ['gray'],
		isRegius: 0, 
		isSteam: true,
	},
	{
		id: 'ilmenite',
		mainore: 'ilmenite',
		crushcount: 1,
		washA: ['hematite', 'magnesite', 'pyrolusite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['rutile', 'hematite', 'magnesite', 'pyrolusite', 'ilmenite', 'ilmenite', 'ilmenite', 'ilmenite'],
		isMag: true,
		magout: ['rutile', 'magnesite', 'ilmenite', 'ilmenite', 'ilmenite'],
		isSulfuric: true,
		sulfout: ['green'],
		isRegius: 2, 
		isSteam: true,
	},
	{
		id: 'jade',
		mainore: 'jade',
		crushcount: 1,
		washA: ['hematite', 'magnesite', 'pyrolusite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['mica', 'biotite', 'soapstone', 'chrysotile', 'jade', 'jade', 'jade', 'jade'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0, 
		isSteam: true,
	},
	{
		id: 'kaolinite',
		mainore: 'kaolinite',
		crushcount: 1,
		washA: ['clay'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['clay', 'clay', 'kaolinite', 'kaolinite', 'kaolinite', 'kaolinite', 'kaolinite', 'kaolinite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'kesterite',
		mainore: 'copper',
		crushcount: 1,
		washA: ['pyrite', 'stannite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['native_germanium', 'pyrite', 'stannite', 'kesterite', 'kesterite', 'kesterite', 'kesterite', 'kesterite'],
		isMag: true,
		magout: ['pyrite', 'kesterite', 'kesterite', 'kesterite', 'kesterite'],
		isSulfuric: true,
		sulfout: ['blue'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'magnesite',
		mainore: 'magnesium',
		crushcount: 1,
		washA: ['pyrite', 'stannite'],
		isPersulfate: true,
		psout: ['cobaltite'],
		isMercury: false,
		sluice: ['cobaltite', 'pyrolusite', 'magnesite', 'magnesite', 'magnesite', 'magnesite', 'magnesite', 'magnesite'],
		isMag: true,
		magout: ['cobaltite', 'pyrolusite', 'magnesite', 'magnesite', 'magnesite'],
		isSulfuric: true,
		sulfout: ['pink'],
		isRegius: 2,
		isSteam: true,
	},
	{
		id: 'malachite',
		mainore: 'copper',
		crushcount: 5,
		washA: ['native_copper', 'brown_limonite', 'azurite'],
		isPersulfate: true,
		psout: ['native_copper'],
		isMercury: false,
		sluice: ['native_copper', 'brown_limonite', 'calcite', 'azurite', 'native_arsenic', 'malachite', 'malachite', 'malachite'],
		isMag: true,
		magout: ['brown_limonite', 'malachite', 'malachite', 'malachite', 'malachite'],
		isSulfuric: true,
		sulfout: ['blue'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'mica',
		mainore: 'mica',
		crushcount: 1,
		washA: ['vermiculite', 'chrysotile', 'biotite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['vermiculite', 'chrysotile', 'biotite', 'perlite', 'mica', 'mica', 'mica', 'mica'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'mirabilite',
		mainore: 'mica',
		crushcount: 1,
		washA: ['trona', 'gypsum'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['trona', 'gypsum', 'mirabilite', 'mirabilite', 'mirabilite', 'mirabilite', 'mirabilite', 'mirabilite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'molybdenite',
		mainore: 'molybdenum',
		crushcount: 1,
		washA: ['powellite', 'scheelite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['powellite', 'scheelite', 'native_rhenium', 'wulfenite', 'native_osmium', 'molybdenite', 'molybdenite', 'molybdenite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'monazite',
		mainore: 'monazite',
		crushcount: 2,
		washA: ['thorium', 'native_neodymium'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['thorium', 'native_neodymium', 'rare_earth', 'nikolite', 'monazite', 'monazite', 'monazite', 'monazite'],
		isMag: true,
		magout: ['native_neodymium', 'monazite', 'monazite', 'monazite', 'monazite'],
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'nikolite',
		mainore: 'nikolite',
		crushcount: 4,
		washA: ['native_copper', 'azurite'],
		isPersulfate: true,
		psout: ['native_copper'],
		isMercury: false,
		sluice: ['native_copper', 'rare_earth', 'azurite', 'native_arsenic', 'nikolite', 'nikolite', 'nikolite', 'nikolite'],
		isMag: false,
		isSulfuric: true,
		sulfout: ['blue'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'opal',
		mainore: 'opal',
		crushcount: 1,
		washA: ['tanzanite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['tanzanite', 'opal', 'opal', 'opal', 'opal', 'opal', 'opal', 'opal'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'pentlandite',
		mainore: 'nickel',
		crushcount: 1,
		washA: ['hematite', 'sulfur', 'cobaltite'],
		isPersulfate: true,
		psout: ['cobaltite'],
		isMercury: true,
		meout: ['sperrylite'],
		sluice: ['hematite', 'sulfur', 'cobaltite', 'sperrylite', 'gypsum', 'pentlandite', 'pentlandite', 'pentlandite'],
		isMag: true,
		magout: ['sulfur', 'sperrylite', 'gypsum', 'pentlandite', 'pentlandite'],
		isSulfuric: true,
		sulfout: ['cyan'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'peridot',
		mainore: 'peridot',
		crushcount: 1,
		washA: ['peridot', 'magnesite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['perlite', 'magnesite', 'peridot', 'peridot', 'peridot', 'peridot', 'peridot', 'peridot'],
		isMag: false,
		isSulfuric: true,
		sulfout: ['pink'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'perlite',
		mainore: 'obsidian',
		crushcount: 8,
		washA: ['peridot', 'magnesite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['peridot', 'magnesite', 'perlite', 'perlite', 'perlite', 'perlite', 'perlite', 'perlite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'phosphate',
		mainore: 'phosphor',
		crushcount: 1,
		washA: ['phosphorus', 'apatite', 'fluorite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['phosphorus', 'apatite', 'fluorite', 'phosphorite', 'phosphorus', 'phosphorus', 'phosphate', 'phosphate'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'phosphorus',
		mainore: 'phosphor',
		crushcount: 3,
		washA: ['phosphorite', 'apatite', 'fluorite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['phosphorite', 'apatite', 'fluorite', 'phosphate', 'phosphorus', 'phosphorus', 'phosphorus', 'phosphorus'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'phosphorite',
		mainore: 'phosphor',
		crushcount: 1,
		washA: ['phosphorite', 'apatite', 'fluorite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['phosphorus', 'apatite', 'fluorite', 'phosphate', 'phosphorus', 'phosphorus', 'phosphorite', 'phosphorite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'powellite',
		mainore: 'molybdenum',
		crushcount: 1,
		washA: ['molybdenite', 'scheelite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['molybdenite', 'scheelite', 'powellite', 'powellite', 'powellite', 'powellite', 'powellite', 'powellite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'pyrite',
		mainore: 'hematite',
		crushcount: 1,
		washA: ['sulfur', 'hematite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['sulfur', 'phosphorus', 'hematite', 'stannite', 'selenium', 'pyrite', 'pyrite', 'pyrite'],
		isMag: true,
		magout: ['sulfur', 'phosphorus', 'stannite', 'selenium', 'pyrite'],
		isSulfuric: true,
		sulfout: ['green'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'pyrolusite',
		mainore: 'manganese',
		crushcount: 1,
		washA: ['bromargyrite', 'hematite'],
		isPersulfate: false,
		isMercury: true,
		meout: ['bromargyrite'],
		sluice: ['bromargyrite', 'hematite', 'chromite', 'pyrolusite', 'pyrolusite', 'pyrolusite', 'pyrolusite', 'pyrolusite'],
		isMag: true,
		magout: ['bromargyrite', 'chromite', 'pyrolusite', 'pyrolusite', 'pyrolusite'],
		isSulfuric: true,
		sulfout: ['gray'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'quartzite',
		mainore: 'quartz',
		crushcount: 1,
		washA: ['bromargyrite', 'hematite'],
		isPersulfate: false,
		isMercury: true,
		meout: ['bromargyrite'],
		sluice: ['certus_quartz', 'barite', 'hematite', 'quartzite', 'quartzite', 'quartzite', 'quartzite', 'quartzite'],
		isMag: true,
		magout: ['hematite', 'quartzite', 'quartzite', 'quartzite', 'quartzite'],
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'radium',
		mainore: 'radium',
		crushcount: 1,
		washA: ['radium'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['radium', 'radium', 'radium', 'radium', 'radium', 'radium', 'radium', 'radium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'realgar',
		mainore: 'arsenic',
		crushcount: 1,
		washA: ['bromargyrite', 'hematite'],
		isPersulfate: true,
		psout: ['cobaltite'],
		isMercury: false,
		sluice: ['cobaltite', 'arsenopyrite', 'realgar', 'realgar', 'realgar', 'realgar', 'realgar', 'realgar'],
		isMag: true,
		magout: ['cobaltite', 'realgar', 'realgar', 'realgar', 'realgar'],
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'redstone',
		mainore: 'redstone',
		crushcount: 4,
		washA: ['cinnabar', 'glowstone'],
		isPersulfate: true,
		psout: ['cobaltite'],
		isMercury: false,
		sluice: ['cinnabar', 'rare_earth', 'glowstone', 'redstone', 'redstone', 'redstone', 'redstone', 'redstone'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'ruby',
		mainore: 'ruby',
		crushcount: 1,
		washA: ['alumina'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['alumina', 'sapphire', 'sapphire', 'sapphire', 'ruby', 'ruby', 'ruby', 'ruby'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'rutile',
		mainore: 'titanium',
		crushcount: 1,
		washA: ['hematite', 'zircon'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['hematite', 'zircon', 'rutile', 'rutile', 'rutile', 'rutile', 'rutile', 'rutile'],
		isMag: true,
		magout: ['hematite', 'rutile', 'rutile', 'rutile', 'rutile'],
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'sapphire',
		mainore: 'sapphire',
		crushcount: 1,
		washA: ['alumina', 'ruby'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['alumina', 'ruby', 'sapphire', 'sapphire', 'sapphire', 'sapphire', 'sapphire', 'sapphire'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'scheelite',
		mainore: 'tungsten',
		crushcount: 1,
		washA: ['pyrolusite', 'molybdenite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['pyrolusite', 'molybdenite', 'calcite', 'scheelite', 'scheelite', 'scheelite', 'scheelite', 'scheelite'],
		isMag: true,
		magout: ['pyrolusite', 'scheelite', 'scheelite', 'scheelite', 'scheelite'],
		isSulfuric: true,
		sulfout: ['gray'],
		isRegius: 2,
		isSteam: true,
	},
	{
		id: 'selenium',
		mainore: 'selenium',
		crushcount: 1,
		washA: ['pyrite', 'galena'],
		isPersulfate: true,
		psout: ['sphalerite'],
		isMercury: false,
		sluice: ['pyrite', 'galena', 'sphalerite', 'native_indium', 'native_gallium', 'native_cadmium', 'selenium', 'selenium'],
		isMag: true,
		magout: ['pyrite', 'selenium', 'selenium', 'selenium', 'selenium'],
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'sheldonite',
		mainore: 'platinum',
		crushcount: 1,
		washA: ['native_nickel'],
		isPersulfate: true,
		psout: ['native_nickel'],
		isMercury: true,
		meout: ['sheldonite'],
		sluice: ['native_palladium', 'native_nickel', 'native_iridium', 'sheldonite', 'sheldonite', 'sheldonite', 'sheldonite', 'sheldonite'],
		isMag: true,
		magout: ['native_nickel', 'sheldonite', 'sheldonite', 'sheldonite', 'sheldonite'],
		isSulfuric: true,
		sulfout: ['cyan'],
		isRegius: 4,
		isSteam: true,
	},
	{
		id: 'smithsonite',
		mainore: 'platinum',
		crushcount: 1,
		washA: ['native_zinc', 'bromargyrite'],
		isPersulfate: true,
		psout: ['native_zinc'],
		isMercury: true,
		meout: ['native_zinc'],
		sluice: ['native_zinc', 'bromargyrite', 'smithsonite', 'smithsonite', 'smithsonite', 'smithsonite', 'smithsonite', 'smithsonite'],
		isMag: false,
		isSulfuric: true,
		sulfout: ['white'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'soapstone', // talc
		mainore: 'talc',
		crushcount: 1,
		washA: ['soapstone'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['soapstone', 'soapstone', 'soapstone', 'soapstone', 'soapstone', 'soapstone', 'soapstone', 'soapstone'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'soda',
		mainore: 'soda',
		crushcount: 1,
		washA: ['topaz'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['mirabilite', 'gypsum', 'trona', 'soda', 'soda', 'soda', 'soda', 'soda'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'sperrylite',
		mainore: 'talc',
		crushcount: 1,
		washA: ['native_antimony', 'native_copper', 'hematite'],
		isPersulfate: true,
		psout: ['native_copper'],
		isMercury: true,
		meout: ['sheldonite'],
		sluice: ['native_antimony', 'native_copper', 'hematite', 'native_rhodium', 'sheldonite', 'sperrylite', 'sperrylite', 'sperrylite'],
		isMag: true,
		magout: ['hematite', 'sperrylite', 'sperrylite', 'sperrylite', 'sperrylite'],
		isSulfuric: false,
		isRegius: 4,
		isSteam: true,
	},
	{
		id: 'sphalerite',
		mainore: 'zinc',
		crushcount: 1,
		washA: ['native_zinc', 'kesterite'],
		isPersulfate: true,
		psout: ['native_zinc'],
		isMercury: true,
		meout: ['native_zinc'],
		sluice: ['native_cadmium', 'native_gallium', 'native_zinc', 'kesterite', 'selenium', 'native_indium', 'sphalerite', 'sphalerite'],
		isMag: false,
		isSulfuric: true,
		sulfout: ['white'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'stannite',
		mainore: 'copper',
		crushcount: 1,
		washA: ['pyrite', 'kesterite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['native_germanium', 'pyrite', 'kesterite', 'stannite', 'stannite', 'stannite', 'stannite', 'stannite'],
		isMag: true,
		magout: ['pyrite', 'stannite', 'stannite', 'stannite', 'stannite'],
		isSulfuric: true,
		sulfout: ['blue'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'stibnite',
		mainore: 'antimony',
		crushcount: 1,
		washA: ['native_antimony', 'cinnabar', 'galena'],
		isPersulfate: true,
		psout: ['native_zinc'],
		isMercury: true,
		meout: ['native_zinc'],
		sluice: ['native_antimony', 'realgar', 'cinnabar', 'galena', 'arsenopyrite', 'pyrite', 'barite', 'calcite'],
		isMag: true,
		magout: ['pyrite', 'native_antimony', 'native_antimony', 'native_antimony', 'native_antimony'],
		isSulfuric: true,
		sulfout: ['white'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'sulfur',
		mainore: 'sulfur',
		crushcount: 1,
		washA: ['pyrite', 'chalcopyrite'],
		isPersulfate: true,
		psout: ['sphalerite'],
		isMercury: false,
		sluice: ['pyrite', 'sphalerite', 'cinnabar', 'chalcopyrite', 'arsenopyrite', 'galena', 'stibnite', 'gypsum'],
		isMag: true,
		magout: ['pyrite', 'sulfur', 'sulfur', 'sulfur', 'sulfur'],
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'tanzanite',
		mainore: 'tanzanite',
		crushcount: 1,
		washA: ['opal'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['opal', 'tanzanite', 'tanzanite', 'tanzanite', 'tanzanite', 'tanzanite', 'tanzanite', 'tanzanite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'thorium',
		mainore: 'thorium',
		crushcount: 1,
		washA: ['opal'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['native_lead', 'radium', 'rare_earth', 'thorium', 'thorium', 'thorium', 'thorium', 'thorium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'topaz',
		mainore: 'topaz',
		crushcount: 1,
		washA: ['topaz'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['topaz', 'topaz', 'topaz', 'topaz', 'topaz', 'topaz', 'topaz', 'topaz'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'trona',
		mainore: 'soda',
		crushcount: 1,
		washA: ['gypsum'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['mirabilite', 'gypsum', 'soda', 'trona', 'trona', 'trona', 'trona', 'trona'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'tungstate',
		mainore: 'tungsten',
		crushcount: 1,
		washA: ['pyrolusite', 'native_silver'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['pyrolusite', 'native_silver', 'lithium_chloride', 'tungstate', 'tungstate', 'tungstate', 'tungstate', 'tungstate'],
		isMag: true,
		magout: ['pyrolusite', 'tungstate', 'tungstate', 'tungstate', 'tungstate'],
		isSulfuric: true,
		sulfout: ['gray'],
		isRegius: 2,
		isSteam: true,
	},
	{
		id: 'uraninite',
		mainore: 'uranium',
		crushcount: 1,
		washA: ['native_lead'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['native_lead', 'radium', 'rare_earth', 'thorium', 'uraninite', 'uraninite', 'uraninite', 'uraninite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'vermiculite',
		mainore: 'vermiculite',
		crushcount: 1,
		washA: ['mica', 'biotite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['mica', 'chrysotile', 'biotite', 'diatomite', 'vermiculite', 'vermiculite', 'vermiculite', 'vermiculite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'wolframite',
		mainore: 'tungsten',
		crushcount: 1,
		washA: ['tungstate', 'hematite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['tungstate', 'hematite', 'stannite', 'magnesite', 'wolframite', 'wolframite', 'wolframite', 'wolframite'],
		isMag: true,
		magout: ['hematite', 'wolframite', 'wolframite', 'wolframite', 'wolframite'],
		isSulfuric: true,
		sulfout: ['green'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'wulfenite',
		mainore: 'molybdenum',
		crushcount: 1,
		washA: ['molybdenite', 'galena'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['powellite', 'scheelite', 'molybdenite', 'galena', 'wulfenite', 'wulfenite', 'wulfenite', 'wulfenite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'zircon',
		mainore: 'zirconium',
		crushcount: 2,
		washA: ['rutile'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['rutile', 'native_hafnium', 'uraninite', 'zircon', 'zircon', 'zircon', 'zircon', 'zircon'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_antimony',
		mainore: 'antimony',
		crushcount: 1,
		washA: ['native_zinc', 'cinnabar', 'galena'],
		isPersulfate: true,
		psout: ['native_zinc'],
		isMercury: true,
		meout: ['native_zinc'],
		sluice: ['native_zinc', 'realgar', 'cinnabar', 'galena', 'arsenopyrite', 'pyrite', 'barite', 'calcite'],
		isMag: true,
		magout: ['pyrite', 'native_antimony', 'native_antimony', 'native_antimony', 'native_antimony'],
		isSulfuric: true,
		sulfout: ['white'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_arsenic',
		mainore: 'arsenic',
		crushcount: 1,
		washA: ['native_arsenic'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['native_arsenic', 'native_arsenic', 'native_arsenic', 'native_arsenic', 'native_arsenic', 'native_arsenic', 'native_arsenic', 'native_arsenic'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_barium',
		mainore: 'barium',
		crushcount: 1,
		washA: ['native_arsenic'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['native_barium', 'native_barium', 'native_barium', 'native_barium', 'native_barium', 'native_barium', 'native_barium', 'native_barium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_cadmium',
		mainore: 'cadmium',
		crushcount: 1,
		washA: ['chalcopyrite', 'sphalerite'],
		isPersulfate: true,
		psout: ['sphalerite'],
		isMercury: false,
		sluice: ['chalcopyrite', 'sphalerite', 'selenium', 'native_cadmium', 'native_cadmium', 'native_cadmium', 'native_cadmium', 'native_cadmium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_cerium',
		mainore: 'cerium',
		crushcount: 1,
		washA: ['native_cerium'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['native_cerium', 'native_cerium', 'native_cerium', 'native_cerium', 'native_cerium', 'native_cerium', 'native_cerium', 'native_cerium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_cobalt',
		mainore: 'cobalt',
		crushcount: 1,
		washA: ['cobaltite', 'fluorite', 'pentlandite'],
		isPersulfate: true,
		psout: ['cobaltite'],
		isMercury: false,
		sluice: ['cobaltite', 'realgar', 'fluorite', 'pentlandite', 'yellow_limonite', 'native_cobalt', 'native_cobalt', 'native_cobalt'],
		isMag: true,
		magout: ['realgar', 'fluorite', 'native_cobalt', 'native_cobalt', 'native_cobalt'],
		isSulfuric: true,
		sulfout: ['red'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_copper',
		mainore: 'copper',
		crushcount: 1,
		washA: ['cobaltite', 'native_gold', 'native_nickel', 'malachite'],
		isPersulfate: true,
		psout: ['cobaltite'],
		isMercury: true,
		meout: ['native_gold'],
		sluice: ['cobaltite', 'native_gold', 'native_nickel', 'malachite', 'native_arsenic', 'native_copper', 'native_copper', 'native_copper'],
		isMag: true,
		magout: ['cobaltite', 'native_nickel', 'native_copper', 'native_copper', 'native_copper'],
		isSulfuric: true,
		sulfout: ['blue'],
		isRegius: 1,
		regout: ['native_cobalt'],
		isSteam: true,
	},
	{
		id: 'native_gallium',
		mainore: 'gallium',
		crushcount: 1,
		washA: ['native_zinc', 'selenium'],
		isPersulfate: true,
		psout: ['native_zinc'],
		isMercury: true,
		meout: ['native_zinc'],
		sluice: ['native_zinc', 'selenium', 'native_gallium', 'native_gallium', 'native_gallium', 'native_gallium', 'native_gallium', 'native_gallium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_germanium',
		mainore: 'germanium',
		crushcount: 1,
		washA: ['hematite', 'native_tin'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['hematite', 'native_tin', 'chromite', 'native_germanium', 'native_germanium', 'native_germanium', 'native_germanium', 'native_germanium'],
		isMag: true,
		magout: ['hematite', 'native_germanium', 'native_germanium', 'native_germanium', 'native_germanium'],
		isSulfuric: false,
		isRegius: false,
		isSteam: true,
	},
{
		id: 'native_gold',
		mainore: 'gold',
		crushcount: 1,
		washA: ['native_copper', 'native_nickel', 'cinnabar'],
		isPersulfate: true,
		psout: ['native_copper'],
		isMercury: true,
		meout: ['native_gold'],
		sluice: ['native_copper', 'native_nickel', 'cinnabar', 'native_gold', 'native_gold', 'native_gold', 'native_gold', 'native_gold'],
		isMag: true,
		magout: ['native_nickel', 'native_gold', 'native_gold', 'native_gold', 'native_gold'],
		isSulfuric: true,
		sulfout: ['blue'],
		isRegius: 1,
		regout: ['native_copper'],
		isSteam: true,
	},
	{
		id: 'native_hafnium',
		mainore: 'hafnium',
		crushcount: 1,
		washA: ['zircon'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['zircon', 'native_hafnium', 'native_hafnium', 'native_hafnium', 'native_hafnium', 'native_hafnium', 'native_hafnium', 'native_hafnium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},	
	{
		id: 'native_indium',
		mainore: 'indium',
		crushcount: 1,
		washA: ['selenium'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['selenium', 'native_indium', 'native_indium', 'native_indium', 'native_indium', 'native_indium', 'native_indium', 'native_indium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_iridium',
		mainore: 'iridium',
		crushcount: 1,
		washA: ['native_platinum'],
		isPersulfate: false,
		isMercury: true,
		meout: ['native_platinum'],
		sluice: ['native_platinum', 'native_osmium', 'native_rhodium', 'native_iridium', 'native_iridium', 'native_iridium', 'native_iridium', 'native_iridium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 4,
		isSteam: true,
	},
	{
		id: 'native_lead',
		mainore: 'lead',
		crushcount: 1,
		washA: ['native_silver', 'sulfur'],
		isPersulfate: false,
		isMercury: true,
		meout: ['native_silver'],
		sluice: ['native_silver', 'sulfur', 'native_lead', 'native_lead', 'native_lead', 'native_lead', 'native_lead', 'native_lead'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_lithium',
		mainore: 'lithium',
		crushcount: 1,
		washA: ['lithium_chloride'],
		isPersulfate: false,
		isMercury: true,
		meout: ['lithium_chloride'],
		sluice: ['lithium_chloride', 'native_lithium', 'native_lithium', 'native_lithium', 'native_lithium', 'native_lithium', 'native_lithium', 'native_lithium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_neodymium',
		mainore: 'neodymium',
		crushcount: 1,
		washA: ['monazite', 'rare_earth'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['monazite', 'rare_earth', 'native_neodymium', 'native_neodymium', 'native_neodymium', 'native_neodymium', 'native_neodymium', 'native_neodymium'],
		isMag: true,
		magout: ['monazite', 'rare_earth', 'native_neodymium', 'native_neodymium', 'native_neodymium'],
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_nickel',
		mainore: 'nickel',
		crushcount: 1,
		washA: ['cobaltite', 'hematite', 'pentlandite'],
		isPersulfate: true,
		psout: ['cobaltite'],
		isMercury: true,
		meout: ['sheldonite'],
		sluice: ['cobaltite', 'sheldonite', 'hematite', 'pentlandite', 'native_nickel', 'native_nickel', 'native_nickel', 'native_nickel'],
		isMag: true,
		magout: ['sheldonite', 'native_nickel', 'native_nickel', 'native_nickel', 'native_nickel'],
		isSulfuric: true,
		sulfout: ['cyan'],
		isRegius: 4,
		isSteam: true,
	},
	{
		id: 'native_osmium',
		mainore: 'osmium',
		crushcount: 1,
		washA: ['native_platinum'],
		isPersulfate: false,
		isMercury: true,
		meout: ['native_platinum'],
		sluice: ['native_iridium', 'native_platinum', 'native_ruthenium', 'native_osmium', 'native_osmium', 'native_osmium', 'native_osmium', 'native_osmium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 4,
		isSteam: true,
	},
	{
		id: 'native_palladium',
		mainore: 'palladium',
		crushcount: 1,
		washA: ['native_palladium'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['native_palladium', 'native_palladium', 'native_palladium', 'native_palladium', 'native_palladium', 'native_palladium', 'native_palladium', 'native_palladium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 4,
		isSteam: true,
	},
	{
		id: 'native_platinum',
		mainore: 'platinum',
		crushcount: 1,
		washA: ['native_nickel'],
		isPersulfate: true,
		psout: ['native_nickel'],
		isMercury: true,
		meout: ['native_platinum'],
		sluice: ['native_nickel', 'native_iridium', 'native_palladium', 'native_platinum', 'native_platinum', 'native_platinum', 'native_platinum', 'native_platinum'],
		isMag: true,
		magout: ['native_nickel', 'native_platinum', 'native_platinum', 'native_platinum', 'native_platinum'],
		isSulfuric: true,
		sulfout: ['cyan'],
		isRegius: 4,
		isSteam: true,
	},
	{
		id: 'native_rhenium',
		mainore: 'rhenium',
		crushcount: 1,
		washA: ['chalcopyrite', 'molybdenite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['chalcopyrite', 'molybdenite', 'native_rhenium', 'native_rhenium', 'native_rhenium', 'native_rhenium', 'native_rhenium', 'native_rhenium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_rhodium',
		mainore: 'rhodium',
		crushcount: 1,
		washA: ['native_rhodium'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['native_rhodium', 'native_rhodium', 'native_rhodium', 'native_rhodium', 'native_rhodium', 'native_rhodium', 'native_rhodium', 'native_rhodium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 4,
		isSteam: true,
	},
	{
		id: 'native_ruthenium',
		mainore: 'ruthenium',
		crushcount: 1,
		washA: ['native_ruthenium'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['native_ruthenium', 'native_ruthenium', 'native_ruthenium', 'native_ruthenium', 'native_ruthenium', 'native_ruthenium', 'native_ruthenium', 'native_ruthenium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 4,
		isSteam: true,
	},
	{
		id: 'native_silver',
		mainore: 'silver',
		crushcount: 1,
		washA: ['native_lead', 'sulfur'],
		isPersulfate: false,
		isMercury: true,
		meout: ['bromargyrite'],
		sluice: ['native_lead', 'sulfur', 'bromargyrite', 'native_silver', 'native_silver', 'native_silver', 'native_silver', 'native_silver'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_sodium',
		mainore: 'sodium',
		crushcount: 1,
		washA: ['native_sodium'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['native_sodium', 'native_sodium', 'native_sodium', 'native_sodium', 'native_sodium', 'native_sodium', 'native_sodium', 'native_sodium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_tin',
		mainore: 'tin',
		crushcount: 1,
		washA: ['molybdenite', 'fluorite', 'arsenopyrite'],
		isPersulfate: true,
		psout: ['sperrylite'],
		isMercury: false,
		sluice: ['molybdenite', 'wolframite', 'fluorite', 'arsenopyrite', 'stannite', 'sperrylite', 'huebnerite', 'apatite'],
		isMag: false,
		isSulfuric: true,
		sulfout: ['white'],
		isRegius: 3,
		regout: ['native_zinc'],
		isSteam: true,
	},
	{
		id: 'native_yttrium',
		mainore: 'yttrium',
		crushcount: 1,
		washA: ['native_yttrium'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['native_yttrium', 'native_yttrium', 'native_yttrium', 'native_yttrium', 'native_yttrium', 'native_yttrium', 'native_yttrium', 'native_yttrium'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'native_zinc',
		mainore: 'zinc',
		crushcount: 1,
		washA: ['native_tin'],
		isPersulfate: true,
		psout: ['native_zinc'],
		isMercury: true,
		meout: ['native_zinc'],
		sluice: ['native_tin', 'native_gallium', 'native_zinc', 'native_zinc', 'native_zinc', 'native_zinc', 'native_zinc', 'native_zinc'],
		isMag: false,
		isSulfuric: true,
		sulfout: ['white'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'brown_limonite',
		mainore: 'hematite',
		crushcount: 1,
		washA: ['malachite', 'yellow_limonite'],
		isPersulfate: true,
		psout: ['malachite'],
		isMercury: false,
		sluice: ['malachite', 'yellow_limonite', 'brown_limonite', 'brown_limonite', 'brown_limonite', 'brown_limonite', 'brown_limonite', 'brown_limonite'],
		isMag: true,
		magout: ['malachite', 'brown_limonite', 'brown_limonite', 'brown_limonite', 'brown_limonite'],
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'yellow_limonite',
		mainore: 'hematite',
		crushcount: 1,
		washA: ['native_nickel', 'brown_limonite'],
		isPersulfate: true,
		psout: ['native_nickel'],
		isMercury: false,
		sluice: ['native_nickel', 'brown_limonite', 'cobaltite', 'yellow_limonite', 'yellow_limonite', 'yellow_limonite', 'yellow_limonite', 'yellow_limonite'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'certus_quartz',
		mainore: 'quartz',
		crushcount: 2,
		washA: ['quartzite', 'barite'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['quartzite', 'barite', 'certus_quartz', 'certus_quartz', 'certus_quartz', 'certus_quartz', 'certus_quartz', 'certus_quartz'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'granitic_sand',
		mainore: 'iron',
		crushcount: 1,
		washA: ['hematite', 'native_gold'],
		isPersulfate: false,
		isMercury: true,
		meout: ['native_gold'],
		sluice: ['hematite', 'native_gold', 'granitic_sand', 'granitic_sand', 'granitic_sand', 'granitic_sand', 'granitic_sand', 'granitic_sand'],
		isMag: true,
		magout: ['native_gold', 'granitic_sand', 'granitic_sand', 'granitic_sand', 'granitic_sand'],
		isSulfuric: true,
		sulfout: ['green'],
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'lithium_chloride',
		mainore: 'lithium',
		crushcount: 1,
		washA: ['native_lithium'],
		isPersulfate: false,
		isMercury: true,
		meout: ['native_lithium'],
		sluice: ['native_lithium', 'lithium_chloride', 'lithium_chloride', 'lithium_chloride', 'lithium_chloride', 'lithium_chloride', 'lithium_chloride', 'lithium_chloride'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'platinum_sludge',
		mainore: 'platinum',
		crushcount: 1,
		washA: ['platinum_sludge'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['platinum_sludge', 'platinum_sludge', 'platinum_sludge', 'platinum_sludge', 'platinum_sludge', 'platinum_sludge', 'platinum_sludge', 'platinum_sludge'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
	{
		id: 'rare_earth',
		mainore: 'rare_earth',
		crushcount: 1,
		washA: ['rare_earth'],
		isPersulfate: false,
		isMercury: false,
		sluice: ['rare_earth', 'rare_earth', 'rare_earth', 'rare_earth', 'rare_earth', 'rare_earth', 'rare_earth', 'rare_earth'],
		isMag: false,
		isSulfuric: false,
		isRegius: 0,
		isSteam: true,
	},
]

ServerEvents.recipes(event => {
	
	let pick = (element) => {
		let newRecipe = {
			type: 'farmersdelight:cutting',
			ingredients: [{item: 'gegology:'+element.id+'_ore'}],
			tool: {type: 'farmersdelight:tool', tag: 'c:tools/pickaxes'},
			result: [
				{item: 'gegology:crushed_'+element.id+'_ore', count: element.crushcount},
				{item: 'gegology:crushed_'+element.id+'_ore', count: element.crushcount, chance: 0.25}
			],
			sound: 'minecraft:entity.item.break'
		}
		event.custom(newRecipe);
	}
	
	let press = (element) => {
		let newRecipe = {
			type: 'create:pressing',
			ingredients: [{item: 'gegology:'+element.id+'_ore'}],
			results: [
				{item: 'gegology:crushed_'+element.id+'_ore', count: element.crushcount},
				{chance: 0.5, item: 'gegology:crushed_'+element.id+'_ore', count: element.crushcount}
			]
		}
		event.custom(newRecipe);
		
		event.custom({
			type: 'modern_industrialization:macerator',
			eu: 4,
			duration: 100,
			item_inputs: [{item: 'gegology:'+element.id+'_ore', amount: 1}],
			item_outputs: [
				{item: 'gegology:crushed_'+element.id+'_ore', amount: element.crushcount},
				{item: 'gegology:crushed_'+element.id+'_ore', amount: element.crushcount, probability: 0.75}
			]
		})
	}
	
	let wash = (element) => {
		
		let outputs = [];
		outputs.push({item: 'gegology:purified_'+element.id+'_ore', count: 1});
		element.washA.forEach(out => {
             outputs.push({chance: 0.5, item: 'gegology:tiny_purified_'+out+'_ore', count: 1});
		})
		
		let newRecipe = {
			type: 'create:splashing',
			ingredients: [{item: 'gegology:crushed_'+element.id+'_ore'}],
		}
		newRecipe['results'] = outputs;
		event.custom(newRecipe);
	}
	
	let persulfate = (element) => {

		event.custom({
			type: 'modern_industrialization:chemical_bath',
			eu: 16,
			duration: 200,
			item_inputs: [{item: 'gegology:crushed_'+element.id+'_ore', amount: 1},
				{item: 'geghilarity:potassium_persulfate_dust', amount: 1}],
			item_outputs: [
				{item: 'gegology:purified_'+element.id+'_ore', amount: 1},
				{item: 'gegology:tiny_purified_'+element.psout+'_ore', amount: 2},
				{item: 'gegology:tiny_purified_'+element.psout+'_ore', amount: 2},
				{item: 'gegology:tiny_purified_'+element.psout+'_ore', amount: 2},
				{item: 'gegology:tiny_purified_'+element.psout+'_ore', amount: 2},
				{item: 'gegology:tiny_purified_'+element.psout+'_ore', amount: 1}
			]
		})
	}		

	let mercury = (element) => {
		
		event.custom({
			type: 'modern_industrialization:chemical_bath',
			eu: 16,
			duration: 200,
			item_inputs: [{item: 'gegology:crushed_'+element.id+'_ore', amount: 1}],
			fluid_inputs: [{fluid: 'geghilarity:mercury', amount: 144}],
			item_outputs: [
				{item: 'gegology:purified_'+element.id+'_ore', amount: 1},
				{item: 'gegology:tiny_purified_'+element.meout+'_ore', amount: 2},
				{item: 'gegology:tiny_purified_'+element.meout+'_ore', amount: 2},
				{item: 'gegology:tiny_purified_'+element.meout+'_ore', amount: 2},
				{item: 'gegology:tiny_purified_'+element.meout+'_ore', amount: 2},
				{item: 'gegology:tiny_purified_'+element.meout+'_ore', amount: 1}
			]
		})
		
	}	
	
	
	let tosluice = (element) => {
			
		let newRecipe = {
            type: 'modern_industrialization:sluice',
            eu: 2,
            duration: 200,
			item_inputs: [{item: 'gegology:crushed_'+element.id+'_ore', amount: 1}],
			fluid_inputs: [{fluid: 'minecraft:water', amount: 900}],
			fluid_outputs: [{fluid: 'gegology:sluice_juice', amount: 900}],
        }
		
		let outputs = [];
		outputs.push({ amount: 1, item: 'gegology:purified_'+element.id+'_ore' });
		element.sluice.forEach(out => {
             outputs.push({ amount: 1, item: 'gegology:tiny_purified_'+out+'_ore', probability: 0.35 });
		})

        newRecipe['item_outputs'] = outputs;
		
		event.custom(newRecipe);	
				
	}
	
	let magnetic = (element) => {

		event.custom({
			type: 'modern_industrialization:em_separator',
			eu: 16,
			duration: 200,
			item_inputs: [{item: 'gegology:purified_'+element.id+'_ore', amount: 1}],
			item_outputs: [
				{item: 'gegology:refined_'+element.id+'_ore', amount: 1},
				{item: 'gegology:tiny_refined_'+element.magout[0]+'_ore', amount: 1},
				{item: 'gegology:tiny_refined_'+element.magout[1]+'_ore', amount: 1},
				{item: 'gegology:tiny_refined_'+element.magout[2]+'_ore', amount: 2, probability: 0.65},
				{item: 'gegology:tiny_refined_'+element.magout[3]+'_ore', amount: 2, probability: 0.65},
				{item: 'gegology:tiny_refined_'+element.magout[4]+'_ore', amount: 2, probability: 0.65}
			]
		})	
	}
	
	let centrifuge = (element) => {

		event.custom({
			type: 'modern_industrialization:ore_centrifuge',
			eu: 16,
			duration: 200,
			item_inputs: [{item: 'gegology:purified_'+element.id+'_ore', amount: 1}],
			item_outputs: [
				{item: 'gegology:tiny_refined_'+element.id+'_ore', amount: 9},
				{item: 'gegology:tiny_refined_'+element.sluice[0]+'_ore', amount: 1, probability: 0.92},
				{item: 'gegology:tiny_refined_'+element.sluice[1]+'_ore', amount: 1, probability: 0.92},
				{item: 'gegology:tiny_refined_'+element.sluice[2]+'_ore', amount: 1, probability: 0.92}
			]
		})	
	}
	
	let sulfuric = (element) => {

		event.custom({
			type: 'modern_industrialization:chemical_bath',
			eu: 30,
			duration: 200,
			item_inputs: [{item: 'gegology:refined_'+element.id+'_ore', amount: 1}],
			fluid_inputs: [{fluid: 'modern_industrialization:sulfuric_acid', amount: 3500}],
			item_outputs: [
				{item: 'gegology:purified_'+element.id+'_dust', amount: 1},
				{item: 'gegology:tiny_purified_'+element.id+'_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_'+element.id+'_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_'+element.id+'_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_'+element.id+'_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_'+element.id+'_dust', amount: 1, probability: 0.9}
			],
			fluid_outputs: [{fluid: 'gegology:'+element.sulfout+'_vitriol', amount: 3000},
				{fluid: 'modern_industrialization:hydrogen', amount: 1000}],
		})
	}	
	
	let regius = (element) => {

		if (element.isRegius == 1){
		event.custom({
			type: 'modern_industrialization:chemical_bath',
			eu: 32,
			duration: 200,
			item_inputs: [{item: 'gegology:refined_'+element.id+'_ore', amount: 1}],
			fluid_inputs: [{fluid: 'geghilarity:aqua_regia', amount: 6500}],
			item_outputs: [
				{item: 'gegology:purified_'+element.id+'_dust', amount: 1},
				{item: 'gegology:tiny_purified_'+element.regout+'_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_'+element.regout+'_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_'+element.regout+'_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_'+element.regout+'_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_'+element.regout+'_dust', amount: 1, probability: 0.9}
			],
			fluid_outputs: [{fluid: 'geghilarity:chloroauric_acid', amount: 3000},
				{fluid: 'geghilarity:nitrogen_monoxide', amount: 1000},
				{fluid: 'minecraft:water', amount: 3000}],
		})
		} else if (element.isRegius == 2){ // manganese chloride
			event.custom({
			type: 'modern_industrialization:chemical_bath',
			eu: 32,
			duration: 200,
			item_inputs: [{item: 'gegology:refined_'+element.id+'_ore', amount: 1}],
			fluid_inputs: [{fluid: 'modern_industrialization:hydrochloric_acid', amount: 4000}],
			item_outputs: [
				{item: 'gegology:purified_'+element.id+'_dust', amount: 1},
				{item: 'gegology:small_manganese_chloride_dust', amount: 6}
			],
			fluid_outputs: [{fluid: 'minecraft:water', amount: 3000},
				{fluid: 'modern_industrialization:chlorine', amount: 1000}],
		})
		} else if (element.isRegius == 3){ // stannic
			event.custom({
			type: 'modern_industrialization:chemical_bath',
			eu: 32,
			duration: 200,
			item_inputs: [{item: 'gegology:refined_'+element.id+'_ore', amount: 1}],
			fluid_inputs: [{fluid: 'geghilarity:aqua_regia', amount: 13000}],
			item_outputs: [
				{item: 'gegology:purified_'+element.id+'_dust', amount: 1},
				{item: 'gegology:tiny_purified_'+element.regout+'_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_'+element.regout+'_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_'+element.regout+'_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_'+element.regout+'_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_'+element.regout+'_dust', amount: 1, probability: 0.9}
			],
			fluid_outputs: [{fluid: 'gegology:stannic_chloride', amount: 2500},
				{fluid: 'modern_industrialization:hydrochloric_acid', amount: 4000},
				{fluid: 'geghilarity:nitrogen_dioxide', amount: 3000}],
		})
		} else if (element.isRegius == 4){ // plat
			event.custom({
			type: 'modern_industrialization:chemical_bath',
			eu: 32,
			duration: 200,
			item_inputs: [{item: 'gegology:refined_'+element.id+'_ore', amount: 1}],
			fluid_inputs: [{fluid: 'geghilarity:aqua_regia', amount: 9750}],
			item_outputs: [
				{item: 'gegology:purified_'+element.id+'_dust', amount: 1},
				{item: 'gegology:tiny_purified_platinum_sludge_dust', amount: 4, probability: 0.9},
				{item: 'gegology:tiny_purified_platinum_sludge_dust', amount: 4, probability: 0.9},
				{item: 'gegology:tiny_purified_platinum_sludge_dust', amount: 4, probability: 0.9},
				{item: 'gegology:tiny_purified_platinum_sludge_dust', amount: 4, probability: 0.9},
				{item: 'gegology:tiny_purified_platinum_sludge_dust', amount: 4, probability: 0.9}
			],
			fluid_outputs: [{fluid: 'gegology:chloroplatinic_acid', amount: 4500},
				{fluid: 'geghilarity:nitrogen_monoxide', amount: 1500},
				{fluid: 'minecraft:water', amount: 4125}],
		})
		}	
	}
	
	let reshape = (id) => {
		if (id == 'copper')
			id = 'modern_industrialization:tiny_copper_dust';
		if (id == 'antimony')
			id = 'modern_industrialization:tiny_antimony_dust';
	}	
	
	let cracking = (element) => {

		event.custom({
			type: 'modern_industrialization:steam_cracking',
			eu: 16,
			duration: 144,
			item_inputs: [{item: 'gegology:refined_'+element.id+'_ore', amount: 1}],
			fluid_inputs: [{fluid: 'gegology:molten_paraffin_wax', amount: 144},
				{fluid: 'modern_industrialization:steam', amount: 1440}],
			item_outputs: [
				{item: 'gegology:tiny_'+element.id+'_dust', amount: 12},
				{item: 'gegology:tiny_'+element.sluice[0]+'_dust', amount: 12, probability: 0.45},
				{item: 'gegology:tiny_'+element.sluice[1]+'_dust', amount: 12, probability: 0.45}
			],
			fluid_outputs: [{fluid: 'minecraft:water', amount: 9}],
		})
	}
    
	
	let millshred = (element) => {
		
		
		event.custom({
			"type": "create:milling",
			"ingredients": [
				{"item": 'gegology:crushed_'+element.id+'_ore'}
			],
			"processingTime": 400,
			"results": [
				{"item": 'gegology:'+element.id+'_dust'},
				{"item": 'gegology:tiny_'+element.id+'_dust', "chance": 0.85},
				{"item": 'geggy:stone_dust'}
			]
		})
		
		
		event.custom({
			"type": "create:milling",
			"ingredients": [
				{"item": 'gegology:purified_'+element.id+'_ore'}
			],
			"processingTime": 200,
			"results": [
				{"item": 'gegology:'+element.id+'_dust'},
				{"item": 'gegology:small_'+element.id+'_dust', "chance": 0.9}
			]
		})
			
		// shred

		event.custom({ 
			type: "modern_industrialization:shredder",
			eu: 2,
			duration: 400,
			item_inputs: [ 
				{item: 'gegology:crushed_'+element.id+'_ore', amount: 1}
			],
			item_outputs: [
				{item: 'gegology:'+element.id+'_dust', amount: 1},
				{item: 'gegology:tiny_'+element.id+'_dust', amount: 1},
				{item: 'geggy:stone_dust', amount: 1}
			]
		})
		event.custom({ 
			type: "modern_industrialization:shredder",
			eu: 2,
			duration: 300,
			item_inputs: [ 
				{item: 'gegology:purified_'+element.id+'_ore', amount: 1}
			],
			item_outputs: [
				{item: 'gegology:'+element.id+'_dust', amount: 1},
				{item: 'gegology:small_'+element.id+'_dust', amount: 1}
			]
		})
		event.custom({ 
			type: "modern_industrialization:shredder",
			eu: 2,
			duration: 200,
			item_inputs: [ 
				{item: 'gegology:refined_'+element.id+'_ore', amount: 1}
			],
			item_outputs: [
				{item: 'gegology:'+element.id+'_dust', amount: 1},
				{item: 'gegology:small_'+element.id+'_dust', amount: 1},
				{item: 'gegology:tiny_'+element.id+'_dust', amount: 1}
			]
		})
		
		// dustpack
	
		// crushed tiny to crushed ore
		event.shapeless('gegology:crushed_'+element.id+'_ore', [ '9x gegology:tiny_crushed_'+element.id+'_ore'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 2, duration: 40, item_inputs: [{item: 'gegology:tiny_crushed_'+element.id+'_ore', amount: 9}], item_outputs: [{item: 'gegology:crushed_'+element.id+'_ore', amount: 1}]})
		event.custom({
			type: "create:compacting",
			ingredients: [
				{"item": 'gegology:tiny_crushed_'+element.id+'_ore'},{"item": 'gegology:tiny_crushed_'+element.id+'_ore'},{"item": 'gegology:tiny_crushed_'+element.id+'_ore'},{"item": 'gegology:tiny_crushed_'+element.id+'_ore'},{"item": 'gegology:tiny_crushed_'+element.id+'_ore'},{"item": 'gegology:tiny_crushed_'+element.id+'_ore'},{"item": 'gegology:tiny_crushed_'+element.id+'_ore'},{"item": 'gegology:tiny_crushed_'+element.id+'_ore'},{"item": 'gegology:tiny_crushed_'+element.id+'_ore'}
			],
			results: [
				{count: 1, "item": 'gegology:crushed_'+element.id+'_ore'}
			]
		})	
			
		// purified tiny to purified ore
		event.shapeless('gegology:purified_'+element.id+'_ore', [ '9x gegology:tiny_purified_'+element.id+'_ore'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 2, duration: 40, item_inputs: [{item: 'gegology:tiny_purified_'+element.id+'_ore', amount: 9}], item_outputs: [{item: 'gegology:purified_'+element.id+'_ore', amount: 1}]})
		event.custom({
			type: "create:compacting",
			ingredients: [
				{"item": 'gegology:tiny_purified_'+element.id+'_ore'},{"item": 'gegology:tiny_purified_'+element.id+'_ore'},{"item": 'gegology:tiny_purified_'+element.id+'_ore'},{"item": 'gegology:tiny_purified_'+element.id+'_ore'},{"item": 'gegology:tiny_purified_'+element.id+'_ore'},{"item": 'gegology:tiny_purified_'+element.id+'_ore'},{"item": 'gegology:tiny_purified_'+element.id+'_ore'},{"item": 'gegology:tiny_purified_'+element.id+'_ore'},{"item": 'gegology:tiny_purified_'+element.id+'_ore'}
			],
			results: [
				{count: 1, "item": 'gegology:purified_'+element.id+'_ore'}
			]
		})	
		
		// refined tiny to refined ore
		event.shapeless('gegology:refined_'+element.id+'_ore', [ '9x gegology:tiny_refined_'+element.id+'_ore'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 2, duration: 40, item_inputs: [{item: 'gegology:tiny_refined_'+element.id+'_ore', amount: 9}], item_outputs: [{item: 'gegology:refined_'+element.id+'_ore', amount: 1}]})	
		
		// tiny, small to dust
		event.shapeless('gegology:'+element.id+'_dust', [ '9x gegology:tiny_'+element.id+'_dust'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 2, duration: 40, item_inputs: [{item: 'gegology:tiny_'+element.id+'_dust', amount: 9}], item_outputs: [{item: 'gegology:'+element.id+'_dust', amount: 1}]})
		event.custom({
			type: "create:compacting",
			ingredients: [
				{"item": 'gegology:tiny_'+element.id+'_dust'},{"item": 'gegology:tiny_'+element.id+'_dust'},{"item": 'gegology:tiny_'+element.id+'_dust'},{"item": 'gegology:tiny_'+element.id+'_dust'},{"item": 'gegology:tiny_'+element.id+'_dust'},{"item": 'gegology:tiny_'+element.id+'_dust'},{"item": 'gegology:tiny_'+element.id+'_dust'},{"item": 'gegology:tiny_'+element.id+'_dust'},{"item": 'gegology:tiny_'+element.id+'_dust'}
			],
			results: [
				{count: 1, "item": 'gegology:'+element.id+'_dust'}
			]
		})	
		event.shapeless('gegology:'+element.id+'_dust', [ '4x gegology:small_'+element.id+'_dust'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 2, duration: 40, item_inputs: [{item: 'gegology:small_'+element.id+'_dust', amount: 4}], item_outputs: [{item: 'gegology:'+element.id+'_dust', amount: 1}]})	
		event.custom({
			type: "create:compacting",
			ingredients: [
				{"item": 'gegology:small_'+element.id+'_dust'},{"item": 'gegology:small_'+element.id+'_dust'},{"item": 'gegology:small_'+element.id+'_dust'},{"item": 'gegology:small_'+element.id+'_dust'}
			],
			results: [
				{count: 1, "item": 'gegology:'+element.id+'_dust'}
			]
		})		
		
		// purified tiny dust, to dust
		if (element.isSulfuric || element.isRegius > 0) {
		event.shapeless('gegology:purified_'+element.id+'_dust', [ '9x gegology:tiny_purified_'+element.id+'_dust'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 2, duration: 40, item_inputs: [{item: 'gegology:tiny_purified_'+element.id+'_dust', amount: 9}], item_outputs: [{item: 'gegology:purified_'+element.id+'_dust', amount: 1}]})
		}	
		
		//getting smaller dusts is quite pointless
		//event.shapeless('9x gegology:tiny_'+element.id'+_dust', [ 'gegology:'+element.id+'_dust'])

	}	
    
	
	ores.forEach(element => {
		pick(element);
		press(element);
		
		// PHASE 1, crushed > purified
		wash(element);

		if (element.isPersulfate) {
			persulfate(element)
		}
		if (element.isMercury) {
			mercury(element)
		}	

		tosluice(element)
		
		// PHASE 2, purified > refined
		if (element.isMag) {
			magnetic(element)
		}
		centrifuge(element)
	
		
		// PHASE 3, refined > purified dust
		if (element.isSulfuric) {
			sulfuric(element)
		}
		if (element.isRegius > 0) {
			regius(element)
		}
		
		if (element.isSteam) {
			cracking(element)
		}
		
		millshred(element);
	
    })
	
	event.smelting('gegology:copper_chunk', 'gegology:crushed_tetrahedrite_ore').cookingTime(200)
	event.smelting('gegology:copper_chunk', 'gegology:purified_tetrahedrite_ore').cookingTime(150)
	event.smelting('gegology:copper_chunk', 'gegology:refined_tetrahedrite_ore').cookingTime(100)
	
	event.smelting('create:copper_nugget', 'gegology:crushed_malachite_ore').cookingTime(100)
	event.smelting('create:copper_nugget', 'gegology:purified_malachite_ore').cookingTime(75)
	event.smelting('create:copper_nugget', 'gegology:refined_malachite_ore').cookingTime(50)
	
	event.smelting('minecraft:copper_ingot', 'gegology:crushed_native_copper_ore').cookingTime(200)
	event.smelting('minecraft:copper_ingot', 'gegology:purified_native_copper_ore').cookingTime(150)
	event.smelting('minecraft:copper_ingot', 'gegology:refined_native_copper_ore').cookingTime(100)
	
	// 144 36 16
	// -- 45 49
	
	let stdmelting = (nug, chunk, ingot, tiny, dust, out) => {
	
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": nug}],
		"results": [{"amount": 15*81, "fluid": out}] //15
	})
	event.custom({ 
		type: "modern_industrialization:melter",
		eu: 2,
		duration: 45,
		item_inputs: [ 
			{item: nug, amount: 1}
		],
		fluid_outputs: [
			{fluid: out, amount: 16}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_melter",
		eu: 2,
		duration: 45,
		item_inputs: [ 
			{item: nug, amount: 1}
		],
		fluid_outputs: [
			{fluid: out, amount: 16}
		]
	})
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": chunk}],
		"results": [{"amount": 34*81, "fluid": out}] // 34
	})
	event.custom({ 
		type: "modern_industrialization:melter",
		eu: 2,
		duration: 75,
		item_inputs: [ 
			{item: chunk, amount: 1}
		],
		fluid_outputs: [
			{fluid: out, amount: 36}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_melter",
		eu: 2,
		duration: 75,
		item_inputs: [ 
			{item: chunk, amount: 1}
		],
		fluid_outputs: [
			{fluid: out, amount: 36}
		]
	})
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": ingot}],
		"results": [{"amount": 135*81, "fluid": out}] //135
	})
	event.custom({ 
		type: "modern_industrialization:melter",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: ingot, amount: 1}
		],
		fluid_outputs: [
			{fluid: out, amount: 144}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_melter",
		eu: 2,
		duration: 100,
		item_inputs: [ 
			{item: ingot, amount: 1}
		],
		fluid_outputs: [
			{fluid: out, amount: 144}
		]
	})
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": tiny}],
		"results": [{"amount": 14*81, "fluid": out}] //14
	})
	event.custom({ 
		type: "modern_industrialization:melter",
		eu: 2,
		duration: 20,
		item_inputs: [ 
			{item: tiny, amount: 1}
		],
		fluid_outputs: [
			{fluid: out, amount: 16}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_melter",
		eu: 2,
		duration: 20,
		item_inputs: [ 
			{item: tiny, amount: 1}
		],
		fluid_outputs: [
			{fluid: out, amount: 16}
		]
	})
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "heated",
		"ingredients": [{"item": dust}],
		"results": [{"amount": 132*81, "fluid": out}] //132
	})
	event.custom({ 
		type: "modern_industrialization:melter",
		eu: 2,
		duration: 75,
		item_inputs: [ 
			{item: dust, amount: 1}
		],
		fluid_outputs: [
			{fluid: out, amount: 144}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_melter",
		eu: 2,
		duration: 75,
		item_inputs: [ 
			{item: dust, amount: 1}
		],
		fluid_outputs: [
			{fluid: out, amount: 144}
		]
	})
	}
	
	//copper
	stdmelting('create:copper_nugget', 'gegology:copper_chunk', 'minecraft:copper_ingot', 'modern_industrialization:copper_tiny_dust', 'modern_industrialization:copper_dust', 'geghilarity:mcopper')
	//tin
	stdmelting('modern_industrialization:tin_nugget', 'gegology:tin_chunk', 'modern_industrialization:tin_ingot', 'modern_industrialization:tin_tiny_dust', 'modern_industrialization:tin_dust', 'gegology:molten_tin')
	//lead
	stdmelting('modern_industrialization:lead_nugget', 'gegology:lead_chunk', 'modern_industrialization:lead_ingot', 'modern_industrialization:lead_tiny_dust', 'modern_industrialization:lead_dust', 'gegology:molten_lead')
	//nickel
	stdmelting('modern_industrialization:nickel_nugget', 'gegology:nickel_chunk', 'modern_industrialization:nickel_ingot', 'modern_industrialization:nickel_tiny_dust', 'modern_industrialization:nickel_dust', 'gegology:molten_nickel')
	//zinc
	stdmelting('create:zinc_nugget', 'gegology:zinc_chunk', 'create:zinc_ingot', 'geghilarity:tiny_zinc_dust', 'kubejs:zinc_dust', 'geggy:liquid_zinc')
	//antimony
	stdmelting('modern_industrialization:antimony_nugget', 'gegology:antimony_chunk', 'modern_industrialization:antimony_ingot', 'modern_industrialization:antimony_tiny_dust', 'modern_industrialization:antimony_dust', 'gegology:molten_antimony')
	//silver
	stdmelting('modern_industrialization:silver_nugget', 'gegology:silver_chunk', 'modern_industrialization:silver_ingot', 'modern_industrialization:silver_tiny_dust', 'modern_industrialization:silver_dust', 'gegology:molten_silver')
	
	let meltore = (name, tpur, pur, tdust, sdust, dust, output) => {
		event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": 'gegology:tiny_purified_'+name+'_ore'}],
			"results": [{"amount": tpur*81, "fluid": output}] 
		})
		event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": 'gegology:purified_'+name+'_ore'}],
			"results": [{"amount": pur*81, "fluid": output}] 
		})
		event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": 'gegology:tiny_'+name+'_dust'}],
			"results": [{"amount": tdust*81, "fluid": output}] 
		})
		event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": 'gegology:small_'+name+'_dust'}],
			"results": [{"amount": sdust*81, "fluid": output}] 
		})
		event.custom({
			"type": "create:mixing",
			"heatRequirement": "heated",
			"ingredients": [{"item": 'gegology:'+name+'_dust'}],
			"results": [{"amount": dust*81, "fluid": output}] 
		})
		
	}	
	
	//15 34 135 heated mixer
	//16 36 144
	
	//crushed = dust, purified = dust + small, refined = dust + small + tiny
	//skips crushed melt values and recipes
	//tetra dust= 40, (45, 49) 
	//tetra 36 45 49 /36 9 4 49	
	//malac 24 30 33 /24 6 2 32
	//azuri 16 20 22 /16 4 1 21
	//chalcopyrite 32 8 3
	//galena 48 12 5 
	
	// tiny pur/pur, t/s/d
	// pur is dust+small - (Xx)x2
	// dust is dust - (Xx)x2, small and tiny are /4 and /9
	meltore('tetrahedrite', 4, 37, 3, 7, 30, 'geghilarity:mcopper') // 37 > 37 / 40
	meltore('malachite', 2, 24, 2, 5, 20, 'geghilarity:mcopper') //
	meltore('azurite', 1, 16, 1, 3, 14, 'geghilarity:mcopper') // 
	meltore('chalcopyrite', 3, 32, 2, 6, 26, 'geghilarity:mcopper')
	
	meltore('cassiterite', 12, 109, 9, 22, 88, 'gegology:molten_tin') // 109 > 110 / 119
	
	meltore('galena', 5, 48, 4, 10, 40, 'gegology:molten_lead')
	
	meltore('sphalerite', 5, 48, 4, 10, 40, 'geggy:liquid_zinc')
	
	meltore('native_copper', 16, 144, 12, 29, 116, 'geghilarity:mcopper')
	meltore('native_lead', 16, 144, 12, 29, 116, 'gegology:molten_lead')
	meltore('native_nickel', 16, 144, 12, 29, 116, 'gegology:molten_nickel')
	meltore('native_tin', 16, 144, 12, 29, 116, 'gegology:molten_tin')
	meltore('native_zinc', 16, 144, 12, 29, 116, 'geggy:liquid_zinc')
	
	// 8 ref 16 pure dust
	let meltoret1 = (name, tpur, pur, tref, ref, tdust, sdust, dust, tpdust, pdust, output) => {
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 2,
			duration: 25,
			item_inputs: [ 
				{item: 'gegology:tiny_purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tpur}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 2,
			duration: 25,
			item_inputs: [ 
				{item: 'gegology:tiny_purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tpur}
			]
		})
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 2,
			duration: 200,
			item_inputs: [ 
				{item: 'gegology:purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: pur}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 2,
			duration: 200,
			item_inputs: [ 
				{item: 'gegology:purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: pur}
			]
		})

		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 8,
			duration: 20,
			item_inputs: [ 
				{item: 'gegology:tiny_refined_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tref}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 8,
			duration: 150,
			item_inputs: [ 
				{item: 'gegology:refined_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: ref}
			]
		})
		
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 2,
			duration: 7,
			item_inputs: [ 
				{item: 'gegology:tiny_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 2,
			duration: 7,
			item_inputs: [ 
				{item: 'gegology:tiny_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 2,
			duration: 30,
			item_inputs: [ 
				{item: 'gegology:small_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: sdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 2,
			duration: 30,
			item_inputs: [ 
				{item: 'gegology:small_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: sdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 2,
			duration: 100,
			item_inputs: [ 
				{item: 'gegology:'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: dust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 2,
			duration: 100,
			item_inputs: [ 
				{item: 'gegology:'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: dust}
			]
		})
		
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 16,
			duration: 10,
			item_inputs: [ 
				{item: 'gegology:tiny_purified_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tpdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 16,
			duration: 100,
			item_inputs: [ 
				{item: 'gegology:purified_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: pdust}
			]
		})
		
	}
	
	// tpur,pur / tref,ref / t,s,dust / t,purdust
	// start from raw dust, purified is purified - Xx, same for ref
	// pure dust is (tiny+small+small+dust) tiny pdust is /9 (difetto)
	meltoret1('tetrahedrite', 4, 41, 5, 45, 4, 9, 36, 6, 58, 'geghilarity:mcopper') // 41 > 45 / 45 > 49 / 58
	meltoret1('malachite', 3, 27, 3, 29, 2, 6, 24, 4, 38, 'geghilarity:mcopper') // 27 > 30 / 29 > 32 / 38
	meltoret1('azurite', 2, 18, 2, 19, 1, 4, 16, 2, 25, 'geghilarity:mcopper') // 18 > 20 / 19 > 21 / 25
	meltoret1('chalcopyrite', 4, 36, 4, 39, 3, 8, 32, 5, 51, 'geghilarity:mcopper')
	
	meltoret1('cassiterite', 13, 122, 14, 133, 12, 27, 108, 19, 174, 'gegology:molten_tin') // 122 > 135 / 133 > 147 // 174
	
	meltoret1('sphalerite', 6, 54, 6, 59, 5, 12, 48, 8, 77, 'geggy:liquid_zinc')
	
	meltoret1('magnesite', 18, 162, 19, 177, 16, 36, 144, 25, 232, 'gegology:magnesium_carbonate')
	
	meltoret1('nikolite', 18, 162, 19, 177, 16, 36, 144, 25, 232, 'gegology:molten_nikolite')
	
	meltoret1('native_tin', 18, 162, 19, 177, 16, 36, 144, 25, 232, 'gegology:molten_tin')
	meltoret1('native_zinc', 18, 162, 19, 177, 16, 36, 144, 25, 232, 'geggy:liquid_zinc')
	meltoret1('native_copper', 18, 162, 19, 177, 16, 36, 144, 25, 232, 'geghilarity:mcopper')
	meltoret1('native_cobalt', 18, 162, 19, 177, 16, 36, 144, 25, 232, 'gegology:molten_cobalt')
	
	meltoret1('hematite', 18, 162, 19, 177, 16, 36, 144, 25, 232, 'gegology:molten_hematite')
	
	meltoret1('cobaltite', 4, 41, 5, 45, 4, 9, 36, 6, 58, 'gegology:molten_cobalt')
	
	let meltorenopur = (name, tpur, pur, tref, ref, tdust, sdust, dust, output) => {
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 2,
			duration: 25,
			item_inputs: [ 
				{item: 'gegology:tiny_purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tpur}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 2,
			duration: 25,
			item_inputs: [ 
				{item: 'gegology:tiny_purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tpur}
			]
		})
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 2,
			duration: 200,
			item_inputs: [ 
				{item: 'gegology:purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: pur}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 2,
			duration: 200,
			item_inputs: [ 
				{item: 'gegology:purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: pur}
			]
		})

		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 8,
			duration: 20,
			item_inputs: [ 
				{item: 'gegology:tiny_refined_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tref}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 8,
			duration: 150,
			item_inputs: [ 
				{item: 'gegology:refined_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: ref}
			]
		})
		
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 2,
			duration: 7,
			item_inputs: [ 
				{item: 'gegology:tiny_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 2,
			duration: 7,
			item_inputs: [ 
				{item: 'gegology:tiny_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 2,
			duration: 30,
			item_inputs: [ 
				{item: 'gegology:small_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: sdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 2,
			duration: 30,
			item_inputs: [ 
				{item: 'gegology:small_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: sdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 2,
			duration: 100,
			item_inputs: [ 
				{item: 'gegology:'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: dust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 2,
			duration: 100,
			item_inputs: [ 
				{item: 'gegology:'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: dust}
			]
		})
		
	}
	
	meltorenopur('cinnabar', 6, 54, 6, 59, 5, 12, 48, 'geghilarity:mercury')
	
	meltorenopur('galena', 6, 54, 6, 59, 5, 12, 48, 'gegology:molten_lead')
	
	meltorenopur('native_lead', 18, 162, 19, 177, 16, 36, 144, 'gegology:molten_lead')
	
	meltorenopur('brown_limonite', 9, 81, 9, 89, 8, 18, 72, 'gegology:molten_hematite')
	meltorenopur('yellow_limonite', 9, 81, 9, 89, 8, 18, 72, 'gegology:molten_hematite')
	
	let meltoresteel = (name, tpur, pur, tref, ref, tdust, sdust, dust, tpdust, pdust, output) => {
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 4,
			duration: 25,
			item_inputs: [ 
				{item: 'gegology:tiny_purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tpur}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 4,
			duration: 25,
			item_inputs: [ 
				{item: 'gegology:tiny_purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tpur}
			]
		})
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 4,
			duration: 200,
			item_inputs: [ 
				{item: 'gegology:purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: pur}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 4,
			duration: 200,
			item_inputs: [ 
				{item: 'gegology:purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: pur}
			]
		})

		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 8,
			duration: 20,
			item_inputs: [ 
				{item: 'gegology:tiny_refined_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tref}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 8,
			duration: 150,
			item_inputs: [ 
				{item: 'gegology:refined_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: ref}
			]
		})
		
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 4,
			duration: 7,
			item_inputs: [ 
				{item: 'gegology:tiny_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 4,
			duration: 7,
			item_inputs: [ 
				{item: 'gegology:tiny_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 4,
			duration: 30,
			item_inputs: [ 
				{item: 'gegology:small_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: sdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 4,
			duration: 30,
			item_inputs: [ 
				{item: 'gegology:small_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: sdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 4,
			duration: 100,
			item_inputs: [ 
				{item: 'gegology:'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: dust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 4,
			duration: 100,
			item_inputs: [ 
				{item: 'gegology:'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: dust}
			]
		})
		
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 16,
			duration: 10,
			item_inputs: [ 
				{item: 'gegology:tiny_purified_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tpdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 16,
			duration: 100,
			item_inputs: [ 
				{item: 'gegology:purified_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: pdust}
			]
		})
		
	}
	
	// 16 nugget
	// start from dust,small tiny, then (dust+small+small+tiny) for purified dust and /9 tiny
	// purified ore is dust+small -index
	// refined 
	meltoresteel('pentlandite', 6, 54, 6, 59, 5, 12, 48, 8, 77, 'gegology:molten_nickel')
	meltoresteel('garnierite', 13, 122, 14, 133, 12, 27, 108, 19, 174, 'gegology:molten_nickel')
	meltoresteel('native_nickel', 18, 162, 19, 177, 16, 36, 144, 25, 232, 'gegology:molten_nickel')
	
	meltoresteel('stibnite', 4, 41, 5, 45, 4, 9, 36, 6, 58, 'gegology:molten_antimony')
	meltoresteel('native_antimony', 18, 162, 19, 177, 16, 36, 144, 25, 232, 'gegology:molten_antimony')
		
	event.custom({
		"type": "create:compacting",
		"ingredients": [{"amount": 11745, "fluid": "geghilarity:mcopper"}], //145
		"results": [{"item": "minecraft:copper_ingot"}]
	})
	
	event.custom({
		"type": "create:compacting",
		"ingredients": [{"amount": 11745, "fluid": "gegology:molten_tin"}],
		"results": [{"item": "modern_industrialization:tin_ingot"}]
	})
	
	event.custom({
		"type": "create:compacting",
		"ingredients": [{"amount": 11745, "fluid": "geggy:liquid_zinc"}],
		"results": [{"item": "create:zinc_ingot"}]
	})
	
	event.custom({
		"type": "create:compacting",
		"ingredients": [{"amount": 11745, "fluid": "gegology:molten_lead"}],
		"results": [{"item": "modern_industrialization:lead_ingot"}]
	})	
	
	let castmetal = (eu, time, mold, fluid, out, mat) => {
		
		let quant;
		if (mold == 'plate' || mold == 'ingot') {
			quant = 144;
		} else if (mold == 'rod' || mold == 'ring')	{
			quant = 72;
		} else quant = 576;
		
		event.custom({ 
			type: "modern_industrialization:caster",
			eu: eu,
			duration: time,
			item_inputs: [ 
				{item: 'geggy:ceramic_'+mold+'_mold', amount: 1}
			],
			fluid_inputs: [ 
				{fluid: fluid, amount: quant}
			],
			item_outputs: [
				{item: 'geggy:'+mat+'_filled_'+mold+'_mold', amount: 1}
			]
		})
		event.custom({
			"type": "create:splashing",
			"ingredients": [
				{item: 'geggy:'+mat+'_filled_'+mold+'_mold'}
			],
			"results": [
				{"count": 1, "item": out},
				{"chance": 0.91, "count": 1, "item": 'geggy:ceramic_'+mold+'_mold'}
			]	
		})
		
		event.custom({ 
			type: "modern_industrialization:caster",
			eu: eu,
			duration: time,
			item_inputs: [ 
				{item: 'geggy:mold_'+mold, amount: 1, probability: 0.0}
			],
			fluid_inputs: [ 
				{fluid: fluid, amount: quant}
			],
			item_outputs: [
				{item: out, amount: 1}
			]
		})
		
		event.custom({ 
			type: "modern_industrialization:electric_caster",
			eu: eu,
			duration: time,
			item_inputs: [ 
				{item: 'geggy:mold_'+mold, amount: 1, probability: 0.0}
			],
			fluid_inputs: [ 
				{fluid: fluid, amount: quant}
			],
			item_outputs: [
				{item: out, amount: 1}
			]
		})
		
	}	
	
	castmetal( 2, 100, 'ingot', 'geghilarity:mcopper', 'minecraft:copper_ingot', 'copper')
	castmetal( 2, 100, 'plate', 'geghilarity:mcopper', 'modern_industrialization:copper_plate', 'copper')
	castmetal( 2, 70, 'rod', 'geghilarity:mcopper', 'modern_industrialization:copper_rod', 'copper')
	castmetal( 2, 70, 'ring', 'geghilarity:mcopper', 'modern_industrialization:copper_ring', 'copper')
	castmetal( 2, 350, 'gear', 'geghilarity:mcopper', 'modern_industrialization:copper_gear', 'copper')
	
	castmetal( 2, 100, 'ingot', 'gegology:molten_tin', 'modern_industrialization:tin_ingot', 'tin')
	castmetal( 2, 100, 'plate', 'gegology:molten_tin', 'modern_industrialization:tin_plate', 'tin')
	castmetal( 2, 70, 'rod', 'gegology:molten_tin', 'modern_industrialization:tin_rod', 'tin')
	castmetal( 2, 70, 'ring', 'gegology:molten_tin', 'modern_industrialization:tin_ring', 'tin')
	castmetal( 2, 350, 'gear', 'gegology:molten_tin', 'modern_industrialization:tin_gear', 'tin')
	
	castmetal( 2, 100, 'ingot', 'geggy:liquid_zinc', 'create:zinc_ingot', 'zinc')
	castmetal( 2, 100, 'plate', 'geggy:liquid_zinc', 'createdeco:zinc_sheet', 'zinc')
	castmetal( 2, 70, 'ring', 'geggy:liquid_zinc', 'geggy:zinc_ring', 'zinc')
	
	castmetal( 2, 100, 'ingot', 'gegology:molten_lead', 'modern_industrialization:lead_ingot', 'lead')
	castmetal( 2, 100, 'plate', 'gegology:molten_lead', 'modern_industrialization:lead_plate', 'lead')
	
	castmetal( 2, 200, 'ingot', 'geghilarity:molten_bronze', 'modern_industrialization:bronze_ingot', 'bronze')
	castmetal( 2, 200, 'plate', 'geghilarity:molten_bronze', 'modern_industrialization:bronze_plate', 'bronze')
	castmetal( 2, 120, 'rod', 'geghilarity:molten_bronze', 'modern_industrialization:bronze_rod', 'bronze')
	castmetal( 2, 120, 'ring', 'geghilarity:molten_bronze', 'modern_industrialization:bronze_ring', 'bronze')
	castmetal( 2, 600, 'gear', 'geghilarity:molten_bronze', 'modern_industrialization:bronze_gear', 'bronze')
	
	castmetal( 2, 100, 'ingot', 'gegology:molten_brass', 'create:brass_ingot', 'brass')
	castmetal( 2, 100, 'plate', 'gegology:molten_brass', 'create:brass_sheet', 'brass')
	
	let castmetal2 = (eu, time, mold, fluid, out) => {
		
		let quant;
		if (mold == 'plate' || mold == 'ingot') {
			quant = 144;
		} else if (mold == 'rod' || mold == 'ring')	{
			quant = 72;
		} else quant = 576;
		
		event.custom({ 
			type: "modern_industrialization:caster",
			eu: eu,
			duration: time,
			item_inputs: [ 
				{item: 'geggy:mold_'+mold, amount: 1, probability: 0.0}
			],
			fluid_inputs: [ 
				{fluid: fluid, amount: quant}
			],
			item_outputs: [
				{item: out, amount: 1}
			]
		})
		
		event.custom({ 
			type: "modern_industrialization:electric_caster",
			eu: eu,
			duration: time,
			item_inputs: [ 
				{item: 'geggy:mold_'+mold, amount: 1, probability: 0.0}
			],
			fluid_inputs: [ 
				{fluid: fluid, amount: quant}
			],
			item_outputs: [
				{item: out, amount: 1}
			]
		})
		
	}
	
	castmetal2( 4, 200, 'ingot', 'geggy:molten_gold', 'minecraft:gold_ingot')
	castmetal2( 4, 200, 'plate', 'geggy:molten_gold', 'modern_industrialization:gold_plate')
	castmetal2( 4, 120, 'rod', 'geggy:molten_gold', 'modern_industrialization:gold_rod')
	castmetal2( 4, 120, 'ring', 'geggy:molten_gold', 'modern_industrialization:gold_ring')
	castmetal2( 4, 600, 'gear', 'geggy:molten_gold', 'modern_industrialization:gold_gear')
	
	castmetal2( 4, 200, 'ingot', 'gegology:molten_nickel', 'modern_industrialization:nickel_ingot')
	castmetal2( 4, 200, 'plate', 'gegology:molten_nickel', 'modern_industrialization:nickel_plate')
	castmetal2( 4, 120, 'rod', 'gegology:molten_nickel', 'geghilarity:nickel_rod')
	
	castmetal2( 2, 200, 'ingot', 'gegology:molten_cobalt', 'geggy:cobalt_ingot')
	castmetal2( 2, 120, 'rod', 'gegology:molten_cobalt', 'geggy:cobalt_rod')
	castmetal2( 2, 120, 'ring', 'gegology:molten_cobalt', 'geggy:cobalt_ring')
	
	event.custom({ 
		type: "modern_industrialization:ore_centrifuge",
		eu: 32,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "gegology:sluice_juice", amount: 100}
		],
		item_outputs: [
			{item: "geggy:stone_dust", amount: 1, probability: 0.75},
			{item: "modern_industrialization:copper_tiny_dust", amount: 1, probability: 0.02},
			{item: "modern_industrialization:tin_tiny_dust", amount: 1, probability: 0.01},
			{item: "geghilarity:tiny_zinc_dust", amount: 1, probability: 0.01},
			{item: "modern_industrialization:antimony_tiny_dust", amount: 1, probability: 0.01},
			{item: "geghilarity:tiny_chromite_dust", amount: 1, probability: 0.01},
		],
		fluid_outputs: [
			{fluid: "minecraft:water", amount: 50}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 16,
		duration: 100,
		fluid_inputs: [ 
			{fluid: "gegology:sluice_juice", amount: 100}
		],
		item_outputs: [
			{item: "gegology:tiny_sluice_sand", amount: 1}
		],
		fluid_outputs: [
			{fluid: "geghilarity:distilled_water", amount: 50}
		]
	})
	event.shapeless('gegology:sluice_sand', [ '9x gegology:tiny_sluice_sand'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 4, duration: 40, item_inputs: [{item: 'gegology:tiny_sluice_sand', amount: 9}], item_outputs: [{item: 'gegology:sluice_sand', amount: 1}]})
	event.custom({ 
		type: "modern_industrialization:em_separator",
		eu: 32,
		duration: 150,
		item_inputs: [ 
			{item: "gegology:sluice_sand", amount: 1}
		],
		item_outputs: [
			{item: "geggy:stone_dust", amount: 1, probability: 0.35},
			{item: "modern_industrialization:iron_tiny_dust", amount: 1, probability: 0.12},
			{item: "modern_industrialization:nickel_tiny_dust", amount: 1, probability: 0.06},
			{item: "modern_industrialization:manganese_tiny_dust", amount: 1, probability: 0.06},
			{item: "geghilarity:tiny_cobalt_dust", amount: 1, probability: 0.06},
			{item: "modern_industrialization:neodymium_tiny_dust", amount: 1, probability: 0.02}	
		]
	})
	
	// vitriol
	
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 28,
		duration: 400,
		fluid_inputs: [
			{fluid: "gegology:black_vitriol", amount: 2000}
		],
		item_outputs: [	
			{item: "modern_industrialization:iron_dust", amount: 1},
			{item: "modern_industrialization:sulfur_dust", amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 64,
		duration: 100,
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 3000},
			{fluid: "gegology:blue_vitriol", amount: 6000}
		],
		item_outputs: [	
			{item: "modern_industrialization:copper_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 7000},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 64,
		duration: 100,
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 3000},
			{fluid: "gegology:green_vitriol", amount: 6000}
		],
		item_outputs: [	
			{item: "modern_industrialization:iron_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 7000},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 64,
		duration: 100,
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 3000},
			{fluid: "gegology:red_vitriol", amount: 6000}
		],
		item_outputs: [	
			{item: "geghilarity:cobalt_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 7000},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 64,
		duration: 100,
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 3000},
			{fluid: "gegology:pink_vitriol", amount: 6000}
		],
		item_outputs: [	
			{item: "geghilarity:magnesium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 7000},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 64,
		duration: 100,
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 3000},
			{fluid: "gegology:cyan_vitriol", amount: 6000}
		],
		item_outputs: [	
			{item: "modern_industrialization:nickel_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 7000},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 64,
		duration: 100,
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 3000},
			{fluid: "gegology:white_vitriol", amount: 6000}
		],
		item_outputs: [	
			{item: "kubejs:zinc_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 7000},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 64,
		duration: 200,
		item_inputs: [ 
			{item: "geghilarity:ammonium_sulfate_dust", amount: 7},
			{item: "gegology:selenium_dioxide_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 3000},
			{fluid: "gegology:gray_vitriol", amount: 6000}
		],
		item_outputs: [	
			{item: "modern_industrialization:manganese_dust", amount: 1},
			{item: "gegology:selenium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 14000},
			{fluid: "geghilarity:ammonia", amount: 2000},
			{fluid: "modern_industrialization:oxygen", amount: 3000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 512,
		item_inputs: [ 
			{item: "gegology:selenium_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 2000}
		],
		item_outputs: [	
			{item: "gegology:selenium_dioxide_dust", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 16,
		duration: 128,
		fluid_inputs: [
			{fluid: "geghilarity:ammonia", amount: 2000},
			{fluid: "modern_industrialization:sulfuric_acid", amount: 7000}
		],
		item_outputs: [	
			{item: "geghilarity:ammonium_sulfate_dust", amount: 7}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 64,
		duration: 50,
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 3900},
			{fluid: "gegology:clay_vitriol", amount: 1700}
		],
		item_outputs: [	
			{item: "geghilarity:alumina", amount: 1} // no
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 2100},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})
	
	event.shapeless('geghilarity:cobalt_dust', [ '9x geghilarity:tiny_cobalt_dust'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 4, duration: 40, item_inputs: [{item: 'geghilarity:tiny_cobalt_dust', amount: 9}], item_outputs: [{item: 'geghilarity:cobalt_dust', amount: 1}]})
			
	event.shapeless('gegology:manganese_chloride_dust', [ '4x gegology:small_manganese_chloride_dust'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 4, duration: 40, item_inputs: [{item: 'gegology:small_manganese_chloride_dust', amount: 4}], item_outputs: [{item: 'gegology:manganese_chloride_dust', amount: 1}]})		
			
	event.custom({ 
		type: "modern_industrialization:fextract",
		eu: 16,
		duration: 100,
		item_inputs: [
			{item: "geghilarity:paraffin_wax", amount: 1}
		],

		fluid_outputs: [	
			{fluid: "gegology:molten_paraffin_wax", amount: 144}
		]
	})	

	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 64,
		duration: 400,
		item_inputs: [
			{item: "gegology:manganese_chloride_dust", amount: 3}
		],
		item_outputs: [	
			{item: "modern_industrialization:manganese_dust", amount: 1} // no
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:chlorine", amount: 2000}
		]
	})	
	
	// bauxite (only use of clay vitriol with non standard counts)
	event.custom({
			type: 'modern_industrialization:chemical_bath',
			eu: 30,
			duration: 200,
			item_inputs: [{item: 'gegology:refined_bauxite_ore', amount: 1}],
			fluid_inputs: [{fluid: 'modern_industrialization:sulfuric_acid', amount: 10500}],
			item_outputs: [
				{item: 'gegology:purified_bauxite_dust', amount: 1},
				{item: 'gegology:tiny_purified_bauxite_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_bauxite_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_bauxite_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_bauxite_dust', amount: 1, probability: 0.9},
				{item: 'gegology:tiny_purified_bauxite_dust', amount: 1, probability: 0.9}
			],
			fluid_outputs: [{fluid: 'gegology:clay_vitriol', amount: 8500},
				{fluid: 'modern_industrialization:hydrogen', amount: 3000}],
		})
		
	let generify = (inp, oup, inc, ouc) => {
		event.custom({ 
			type: "modern_industrialization:mixer",
			eu: 2,
			duration: 10,
			item_inputs: [
				{item: inp, amount: inc}
			],
			item_outputs: [	
				{item: oup, amount: ouc}
			]
		})
		
		event.shapeless(oup, [inp, 'geggy:stone_mortar']).damageIngredient('geggy:stone_mortar')
	}	
		
	let meltorele = (name, tpur, pur, tref, ref, tdust, sdust, dust, output) => {	

		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 8,
			duration: 25,
			item_inputs: [ 
				{item: 'gegology:tiny_purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tpur}
			]
		})

		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 8,
			duration: 200,
			item_inputs: [ 
				{item: 'gegology:purified_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: pur}
			]
		})

		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 8,
			duration: 20,
			item_inputs: [ 
				{item: 'gegology:tiny_refined_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tref}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 8,
			duration: 150,
			item_inputs: [ 
				{item: 'gegology:refined_'+name+'_ore', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: ref}
			]
		})
		

		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 8,
			duration: 7,
			item_inputs: [ 
				{item: 'gegology:tiny_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: tdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 8,
			duration: 30,
			item_inputs: [ 
				{item: 'gegology:small_'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: sdust}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 8,
			duration: 100,
			item_inputs: [ 
				{item: 'gegology:'+name+'_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: output, amount: dust}
			]
		})
	}	
		
	// meltorepu1 > electric only, from purified, no pure dust
	// tiny pur, pur // tiny ref, ref // tiny,small,dust
	// pur is (dust+small)-Xx, ref is standard - Xx
	// dust is (std dust)
		
	// alumina 56/126/504
	meltorele('alumina', 63, 567, 68, 618, 56, 126, 504, 'geghilarity:molten_alumina')
	meltorele('gibbsite', 22, 203, 24, 221, 20, 45, 180, 'geghilarity:molten_alumina')
	meltorele('ruby', 48, 433, 52, 471, 42, 94, 387, 'geghilarity:molten_alumina')
	meltorele('sapphire', 48, 433, 52, 471, 42, 94, 387, 'geghilarity:molten_alumina')
	meltorele('realgar', 6, 54, 6, 59, 5, 12, 48, 'gegology:molten_arsenic')
	
	meltorele('native_silver', 18, 162, 19, 177, 16, 36, 144, 'gegology:molten_silver')
	
	meltorele('native_arsenic', 18, 162, 19, 177, 16, 36, 144, 'gegology:molten_arsenic')
	
	generify('gegology:alumina_dust', 'geghilarity:alumina', 1, 1);
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 16,
		duration: 100,
		fluid_inputs: [
			{fluid: "geghilarity:molten_alumina", amount: 504}
		],
		item_outputs: [	
			{item: "geghilarity:alumina", amount: 1}
		]
	})
	
	// apatite
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 64,
		duration: 18000,
		item_inputs: [
			{item: "gegology:apatite_dust", amount: 9}
		],
		item_outputs: [	
			{item: "geghilarity:calcium_dust", amount: 5},
			{item: "geghilarity:phosphate_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		]
	})
	
	// arsenopyrite
	// arsenic goes nowhere
	event.smelting('gegology:arsenic_chunk', 'gegology:crushed_arsenopyrite_ore').cookingTime(200)
	event.smelting('gegology:arsenic_chunk', 'gegology:purified_arsenopyrite_ore').cookingTime(150)
	event.smelting('gegology:arsenic_chunk', 'gegology:refined_arsenopyrite_ore').cookingTime(100)
	
	event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 4,
			duration: 200,
			item_inputs: [ 
				{item: 'gegology:arsenopyrite_dust', amount: 1}
			],
			fluid_outputs: [
				{fluid: 'gegology:molten_arsenic', amount: 144}
			]
		})
	event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 4,
			duration: 100,
			item_inputs: [ 
				{item: 'gegology:arsenic_chunk', amount: 1}
			],
			fluid_outputs: [
				{fluid: 'gegology:molten_arsenic', amount: 36}
			]
		})	
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:arsenopyrite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1167}
		],
		item_outputs: [	
			{item: "gegology:tiny_hematite_dust", amount: 8},
			{item: "gegology:tiny_native_arsenic_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 1000}
		]
	})
		
	// azurite	
	// 29+13=42 purified melted * 11 = 462
	// electro 9+2+1 2 = 11 dusts is 15, so electro is 11 dusts to 432 copper
	// steam 19*11 = 209 + 148 = 
	// 19+12
	
	event.smelting('create:copper_nugget', 'gegology:crushed_azurite_ore').cookingTime(100)
	event.smelting('create:copper_nugget', 'gegology:purified_azurite_ore').cookingTime(75)
	event.smelting('create:copper_nugget', 'gegology:refined_azurite_ore').cookingTime(50)
		
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 32,
		duration: 3000,
		item_inputs: [
			{item: "gegology:azurite_dust", amount: 15}
		],
		item_outputs: [	
			{item: "modern_industrialization:copper_dust", amount: 3} // 432
		],
		fluid_outputs: [	
			{fluid: "gegology:carbon_trioxide", amount: 8000},
			{fluid: "modern_industrialization:oxygen", amount: 1000},
			{fluid: "minecraft:water", amount: 3000}
		]
	})

	// barite
	generify('gegology:barite_dust', 'geghilarity:barite_dust', 1, 1);
	
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 30,
		duration: 1200,
		item_inputs: [
			{item: "geghilarity:barite_dust", amount: 6}
		],
		item_outputs: [	
			{item: "gegology:native_barium_dust", amount: 1},
			{item: "modern_industrialization:sulfur_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 4000}
		]
	})
	
	// bastnasite
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 30,
		duration: 1200,
		item_inputs: [
			{item: "gegology:bastnasite_dust", amount: 6}
		],
		item_outputs: [	
			{item: "geghilarity:cerium_dust", amount: 1},
			{item: "modern_industrialization:carbon_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:fluorine", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 3000}
		]
	})
	
	// bauxite
	generify('gegology:bauxite_dust', 'modern_industrialization:bauxite_dust', 1, 1);
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 30,
		duration: 240,
		item_inputs: [ 
			{item: "gegology:purified_bauxite_dust", amount: 24}
		],
		fluid_inputs: [
				{fluid: "modern_industrialization:sodium_hydroxide", amount: 24000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:sodium_hydroxide_bauxite", amount: 24000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
			eu: 60,
			duration: 2496,
			item_inputs: [ 
				{item: "gegology:purified_bauxite_dust", amount: 24}
			],
			item_outputs: [
				{item: "geghilarity:rutile_dust", amount: 6},
				{item: "geghilarity:alumina", amount: 16}
			],
			fluid_outputs: [
				{fluid: "modern_industrialization:hydrogen", amount: 10000},
				{fluid: "modern_industrialization:oxygen", amount: 11000}
			]
		})
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 30,
		duration: 200,
		item_inputs: [ 
			{item: "gegology:purified_bauxite_dust", amount: 3},
			{item: "modern_industrialization:sodium_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 1000},	
			{fluid: "modern_industrialization:hydrogen", amount: 2000}
		],
		fluid_outputs: [
			{fluid: "geghilarity:impure_sodium_aluminate_solution", amount: 3000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:autoclave",
		eu: 30,
		duration: 500,
		item_inputs: [
			{item: "modern_industrialization:bauxite_dust", amount: 1},
			{item: "gegology:small_potassium_hydroxide_dust", amount: 6}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:high_pressure_steam", amount: 8000}
		],
		item_outputs: [	
			{item: "gegology:potassium_aluminate_dust", amount: 2},
			{item: "gegology:tiny_refined_ilmenite_ore", amount: 2, probability: 0.5},
			{item: "gegology:tiny_refined_rutile_ore", amount: 1, probability: 0.5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:distilled_water", amount: 1050}
		]
	})
	event.custom({ 
		type: "modern_industrialization:autoclave",
		eu: 30,
		duration: 800,
		item_inputs: [
			{item: "modern_industrialization:bauxite_dust", amount: 2},
			{item: "gegology:potassium_hydroxide_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:high_pressure_steam", amount: 16000}
		],
		item_outputs: [	
			{item: "gegology:potassium_aluminate_dust", amount: 4},
			{item: "gegology:tiny_refined_ilmenite_ore", amount: 2},
			{item: "gegology:tiny_refined_rutile_ore", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:distilled_water", amount: 2100}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 16,
		duration: 64,
		item_inputs: [
			{item: "geghilarity:potassium_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:distilled_water", amount: 3000}
		],
		item_outputs: [	
			{item: "gegology:potassium_hydroxide_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:hydrogen", amount: 1000}
		]
	})
	event.shapeless('gegology:potassium_hydroxide_dust', [ '4x gegology:small_potassium_hydroxide_dust'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 4, duration: 40, item_inputs: [{item: 'gegology:small_potassium_hydroxide_dust', amount: 4}], item_outputs: [{item: 'gegology:potassium_hydroxide_dust', amount: 1}]})	
	event.shapeless('4x gegology:small_potassium_hydroxide_dust', [ 'gegology:potassium_hydroxide_dust'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 4, duration: 40, item_inputs: [{item: 'gegology:potassium_hydroxide_dust', amount: 1}], item_outputs: [{item: 'gegology:small_potassium_hydroxide_dust', amount: 4}]})		
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 16,
		duration: 256,
		item_inputs: [
			{item: "geghilarity:rock_salt_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 3000}
		],
		item_outputs: [	
			{item: "gegology:small_potassium_hydroxide_dust", amount: 6}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:chlorine", amount: 500},
			{fluid: "modern_industrialization:hydrogen", amount: 1500},
			{fluid: "modern_industrialization:oxygen", amount: 500}
		]
	})
	event.custom({ 
		type: "modern_industrialization:autoclave",
		eu: 16,
		duration: 2000,
		item_inputs: [
			{item: "gegology:potassium_aluminate_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "minecraft:water", amount: 6000}
		],
		item_outputs: [	
			{item: "geghilarity:aluminium_hydroxide", amount: 7},
			{item: "gegology:potassium_hydroxide_dust", amount: 3}
		]
	})
	event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 8,
			duration: 200,
			item_inputs: [ 
				{item: 'geghilarity:aluminium_hydroxide', amount: 1}
			],
			fluid_outputs: [
				{fluid: 'geghilarity:molten_alumina', amount: 180}
			]
		})
	
	// biotite
	generify('gegology:biotite_dust', 'geghilarity:biotite_dust', 1, 1);
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 32,
		duration: 150,
		item_inputs: [
			{item: "gegology:purified_biotite_ore", amount: 1}
		],
		item_outputs: [	
			{item: "gegology:refined_biotite_ore", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:argon", amount: 90}
		]
	})
	
	// bromargyrite
	event.smelting('gegology:silver_chunk', 'gegology:crushed_bromargyrite_ore').cookingTime(300)
	event.smelting('gegology:silver_chunk', 'gegology:purified_bromargyrite_ore').cookingTime(250)
	event.smelting('gegology:silver_chunk', 'gegology:refined_bromargyrite_ore').cookingTime(200)
	
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 28,
		duration: 500,
		item_inputs: [
			{item: "gegology:bromargyrite_dust", amount: 2}
		],
		item_outputs: [	
			{item: "modern_industrialization:silver_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:bromine", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:electric_melter",
		eu: 6,
		duration: 100,
		item_inputs: [ 
			{item: 'gegology:silver_chunk', amount: 1}
		],
		fluid_outputs: [
			{fluid: 'gegology:molten_silver', amount: 36}
		]
	})
	
	// calcite (should also melt)
	generify('gegology:calcite_dust', 'magick:calcite_dust', 1, 1);
	
	// cassiterite
	event.smelting('gegology:tin_chunk', 'gegology:crushed_cassiterite_ore').cookingTime(200)
	event.smelting('gegology:tin_chunk', 'gegology:purified_cassiterite_ore').cookingTime(150)
	event.smelting('modern_industrialization:tin_ingot', 'gegology:refined_cassiterite_ore').cookingTime(100)
	
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 16,
		duration: 400,
		item_inputs: [
			{item: "gegology:cassiterite_dust", amount: 1}
		],
		item_outputs: [	
			{item: "modern_industrialization:tin_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 2000}
		]
	})
	
	// chalcopyrite
	event.smelting('gegology:copper_chunk', 'gegology:crushed_chalcopyrite_ore').cookingTime(200)
	event.smelting('gegology:copper_chunk', 'gegology:purified_chalcopyrite_ore').cookingTime(150)
	event.smelting('gegology:copper_chunk', 'gegology:refined_chalcopyrite_ore').cookingTime(100)
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:chalcopyrite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1375}
		],
		item_outputs: [	
			{item: "gegology:small_hematite_dust", amount: 5},
			{item: "gegology:small_native_copper_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 1500}
		]
	})
	
	// chromite
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 98,
		duration: 100,
		item_inputs: [
			{item: "gegology:chromite_dust", amount: 1}
		],
		item_outputs: [	
			{item: "modern_industrialization:iron_dust", amount: 2},
			{item: "geghilarity:chromite_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 4000}
		]
	})
	
	let melt = (inp, out, amount, dur) => {
		event.custom({ 
			type: "modern_industrialization:melter",
			eu: 2,
			duration: dur,
			item_inputs: [ 
				{item: inp, amount: 1}
			],
			fluid_outputs: [
				{fluid: out, amount: 144}
			]
		})
		event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 2,
			duration: dur,
			item_inputs: [ 
				{item: inp, amount: 1}
			],
			fluid_outputs: [
				{fluid: out, amount: 144}
			]
		})	
	}	
	
	// chrysotile
	event.smelting('geghilarity:asbestos_dust', 'gegology:chrysotile_dust').cookingTime(200)
	
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 32,
		duration: 1200,
		item_inputs: [
			{item: "gegology:chrysotile_dust", amount: 6}
		],
		item_outputs: [	
			{item: "geghilarity:magnesium_dust", amount: 1},
			{item: "geghilarity:silicon_dioxide_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 2000},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})
	
	
	// cinnabar
	event.smelting('gegology:mercury_chunk', 'gegology:crushed_cinnabar_ore').cookingTime(200)
	event.smelting('gegology:mercury_chunk', 'gegology:purified_cinnabar_ore').cookingTime(150)
	event.smelting('gegology:mercury_chunk', 'gegology:refined_cinnabar_ore').cookingTime(100)
	
	melt('gegology:mercury_chunk', 'geghilarity:mercury', 36, 100)
	
	event.custom({ 
		type: "modern_industrialization:ore_centrifuge",
		eu: 28,
		duration: 584,
		item_inputs: [
			{item: "gegology:cinnabar_dust", amount: 2}
		],
		item_outputs: [	
			{item: "modern_industrialization:sulfur_dust", amount: 1},
		],
		fluid_outputs: [	
			{fluid: "geghilarity:mercury", amount: 144}
		]
	})
	
	// clay
	generify('gegology:clay_dust', 'geggy:clay_dust', 1, 1);
	
	// cobaltite
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:cobaltite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 667}
		],
		item_outputs: [	
			{item: "geghilarity:tiny_cobalt_dust", amount: 3},
			{item: "gegology:tiny_native_arsenic_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 1000}
		]
	})
	
	// diatomite
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 30,
		duration: 2000,
		item_inputs: [
			{item: "gegology:diatomite_dust", amount: 10}
		],
		item_outputs: [	
			{item: "geggy:flint_dust", amount: 8},
			{item: "gegology:hematite_dust", amount: 1},
			{item: "gegology:sapphire_dust", amount: 1}
		]
	})
	
	// ferberite -- check if there's better than calcite
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 32,
		duration: 512,
		item_inputs: [
			{item: "gegology:ferberite_dust", amount: 6}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 4000}
		],
		item_outputs: [	
			{item: "gegology:ferrous_chloride_dust", amount: 3},
			{item: "gegology:tungstic_acid_dust", amount: 7}
		]
	})
	event.custom({ 
		type: "modern_industrialization:autoclave",
		eu: 480,
		duration: 40,
		item_inputs: [
			{item: "gegology:tungstic_acid_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:distilled_water", amount: 1000},
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 2000}
		],
		item_outputs: [	
			{item: "magick:calcite_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sodium_tungstate_solution", amount: 1000}
		]
	})
	event.custom({ 
			type: "modern_industrialization:electric_melter",
			eu: 16,
			duration: 119,
			item_inputs: [ 
				{item: "gegology:ferrous_chloride_dust", amount: 1}
			],
			fluid_outputs: [
				{fluid: "gegology:molten_ferrous_chloride", amount: 144}
			]
		})
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 42,
		duration: 876,
		fluid_inputs: [
			{fluid: "gegology:molten_ferrous_chloride", amount: 432}
		],
		item_outputs: [	
			{item: "modern_industrialization:iron_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:chlorine", amount: 2000}
		]
	})	
	
	// fluorite
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 16,
		duration: 400,
		item_inputs: [
			{item: "gegology:fluorite_dust", amount: 3}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 7000}
		],
		item_outputs: [	
			{item: "geghilarity:calcium_sulfate_dust", amount: 6}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:hydrogen_fluoride", amount: 4000}
		]
	})
	
	// galena
	event.smelting('gegology:lead_chunk', 'gegology:crushed_galena_ore').cookingTime(200)
	event.smelting('gegology:lead_chunk', 'gegology:purified_galena_ore').cookingTime(150)
	event.smelting('gegology:lead_chunk', 'gegology:refined_galena_ore').cookingTime(100)
	
	melt('gegology:lead_chunk', 'gegology:molten_lead', 36, 100)
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:galena_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 500}
		],
		item_outputs: [	
			{item: "modern_industrialization:silver_tiny_dust", amount: 3},
			{item: "modern_industrialization:lead_tiny_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 750}
		]
	})
	
	// garnierite
	
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 28,
		duration: 584,
		item_inputs: [
			{item: "gegology:garnierite_dust", amount: 1}
		],
		item_outputs: [	
			{item: "modern_industrialization:nickel_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})
	
	// gibbsite
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 16,
		duration: 1800,
		item_inputs: [
			{item: "gegology:gibbsite_dust", amount: 14}
		],
		item_outputs: [	
			{item: "geghilarity:alumina", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:distilled_water", amount: 9000}
		]
	})
	
	// glowstone
	generify('gegology:glowstone_dust', 'minecraft:glowstone_dust', 1, 1);
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 16,
		duration: 150,
		item_inputs: [
			{item: "gegology:glowstone_dust", amount: 10}
		],
		item_outputs: [	
			{item: "gegology:phosphorite_dust", amount: 5},
			{item: "modern_industrialization:gold_tiny_dust", amount: 3},
			{item: "geghilarity:silicon_dioxide_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:helium", amount: 1000}
		]
	})
	
	// gloomstone	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 16,
		duration: 150,
		item_inputs: [
			{item: "gegology:gloomstone_dust", amount: 10}
		],
		item_outputs: [	
			{item: "gegology:phosphorite_dust", amount: 5},
			{item: "modern_industrialization:silver_tiny_dust", amount: 3},
			{item: "geghilarity:silicon_dioxide_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:helium", amount: 1000}
		]
	})
	
	// gypsum
	generify('gegology:gypsum_dust', 'geghilarity:gypsum_dust', 1, 1);
	
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 16,
		duration: 150,
		item_inputs: [
			{item: "gegology:gypsum_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:calcium_sulfate_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:distilled_water", amount: 1000}
		]
	})
	
	// hematite
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:hematite_dust", amount: 6}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 12000}
		],
		item_outputs: [	
			{item: "gegology:ferric_chloride_dust", amount: 8}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 9000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 16,
		duration: 144,
		item_inputs: [
			{item: "modern_industrialization:iron_dust", amount: 1},
			{item: "gegology:ferric_chloride_dust", amount: 8}
		],
		item_outputs: [	
			{item: "gegology:ferrous_chloride_dust", amount: 9}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 16,
		duration: 136,
		item_inputs: [
			{item: "gegology:ferric_chloride_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "geghilarity:sulfur_dioxide", amount: 1500},
			{fluid: "minecraft:water", amount: 3000}
		],
		item_outputs: [	
			{item: "gegology:ferrous_chloride_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 3500},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:ferric_chloride_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:steam", amount: 16000}
		],
		item_outputs: [	
			{item: "gegology:ferric_oxyhydroxide_dust", amount: 7}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 6000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:ferric_oxyhydroxide_dust", amount: 14}
		],
		item_outputs: [	
			{item: "gegology:hematite_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:distilled_water", amount: 9000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 400,
		item_inputs: [
			{item: "gegology:hematite_dust", amount: 5},
			{item: "magick:calcite_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:uncooked_iron_mix", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 2,
		duration: 400,
		item_inputs: [
			{item: "gegology:purified_hematite_dust", amount: 4},
			{item: "magick:calcite_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geggy:uncooked_iron_mix", amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "geggy:uncooked_iron_mix", amount: 1},
			{item: "modern_industrialization:coal_dust", amount: 2}
			
		],
		item_outputs : [
			{item: "geggy:pig_iron_ingot", amount: 2},
			{item: "geghilarity:tiny_dark_ashes", amount: 2}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 8,
		duration: 200,
		item_inputs : [
			{item: "geggy:uncooked_iron_mix", amount: 2},
			{item: "modern_industrialization:carbon_dust", amount: 1}
			
		],
		item_outputs : [
			{item: "geggy:pig_iron_ingot", amount: 4},
			{item: "geghilarity:tiny_dark_ashes", amount: 2}
		]
	})
	
	// huebnerite
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 32,
		duration: 512,
		item_inputs: [
			{item: "gegology:huebnerite_dust", amount: 6}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 4000}
		],
		item_outputs: [	
			{item: "gegology:manganese_chloride_dust", amount: 3},
			{item: "gegology:tungstic_acid_dust", amount: 7}
		]
	})
	
	// ilmenite
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 64,
		duration: 512,
		item_inputs: [
			{item: "gegology:ilmenite_dust", amount: 5}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 7000}
		],
		item_outputs: [	
			{item: "geghilarity:rutile_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 3500},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 2000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 64,
		duration: 400,
		item_inputs: [
			{item: "gegology:purified_ilmenite_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sulfuric_acid", amount: 7000}
		],
		item_outputs: [	
			{item: "geghilarity:rutile_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:sulfuric_acid", amount: 3500},
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 2000}
		]
	})
	
	// jade ??
	
	// kaolinite
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 32,
		duration: 500,
		item_inputs: [
			{item: "gegology:kaolinite_dust", amount: 18}
		],
		item_outputs: [	
			{item: "geghilarity:calcium_dust", amount: 1},
			{item: "geggy:clay_dust", amount: 18}
		]
	})
	
	// kesterite
	event.smelting('create:copper_nugget', 'gegology:crushed_kesterite_ore').cookingTime(200)
	event.smelting('create:copper_nugget', 'gegology:purified_kesterite_ore').cookingTime(150)
	event.smelting('create:copper_nugget', 'gegology:refined_kesterite_ore').cookingTime(100)
	event.smelting('create:copper_nugget', 'gegology:kesterite_dust').cookingTime(80)
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:kesterite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		],
		item_outputs: [	
			{item: "gegology:small_native_copper_dust", amount: 1},
			{item: "geghilarity:tiny_zinc_dust", amount: 1},
			{item: "modern_industrialization:tin_tiny_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 1500}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 16,
		duration: 1000,
		item_inputs: [
			{item: "gegology:purified_kesterite_dust", amount: 2}
		],
		item_outputs: [	
			{item: "gegology:small_native_copper_dust", amount: 3},
			{item: "geghilarity:tiny_zinc_dust", amount: 3},
			{item: "modern_industrialization:tin_tiny_dust", amount: 3}
		]
	})
	
	// magnesite
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 16,
		duration: 144,
		item_inputs: [
			{item: "gegology:magnesite_dust", amount: 5}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 4000}
		],
		item_outputs: [	
			{item: "geghilarity:magnesium_chloride_dust", amount: 3},
			{item: "geghilarity:tiny_zinc_dust", amount: 1},
			{item: "modern_industrialization:tin_tiny_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 1500}
		]
	})
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "modern_industrialization:salt_dust", amount: 4}
		],
		fluid_inputs: [
			{fluid: "gegology:magnesium_carbonate", amount: 720}
		],
		item_outputs: [	
			{item: "geghilarity:magnesium_chloride_dust", amount: 3},
			{item: "geghilarity:soda_ash_dust", amount: 6}
		]
	})
	
	// malachite
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 32,
		duration: 400,
		item_inputs: [
			{item: "gegology:malachite_dust", amount: 5}
		],
		item_outputs: [	
			{item: "modern_industrialization:copper_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "gegology:carbon_trioxide", amount: 2000},
			{fluid: "modern_industrialization:hydrogen", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})
	
	// mica
	generify('gegology:mica_dust', 'geghilarity:mica_dust', 1, 1);
	
	event.custom({ 
		type: "modern_industrialization:ore_electrolyzer",
		eu: 32,
		duration: 7800,
		item_inputs: [
			{item: "gegology:mica_dust", amount: 39}
		],
		item_outputs: [	
			{item: "geghilarity:alumina", amount: 15},
			{item: "geghilarity:potassium_dust", amount: 2},
			{item: "geghilarity:silicon_dioxide_dust", amount: 18}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:fluorine", amount: 4000}
		]
	})
	
	// mirabilite
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 16,
		duration: 800,
		item_inputs: [
			{item: "gegology:mirabilite_dust", amount: 7}
		],
		item_outputs: [	
			{item: "geghilarity:sodium_sulfate_dust", amount: 7}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:distilled_water", amount: 16000}
		]
	})
	
	// molybdenite
	generify('gegology:molybdenite_dust', 'geghilarity:molybdenite_dust', 1, 1);
	
	event.shapeless('geghilarity:molybdenum_dust', [ '9x geghilarity:tiny_molybdenum_dust'])
		event.custom({ 
			type: "modern_industrialization:packer", eu: 4, duration: 40, item_inputs: [{item: 'geghilarity:tiny_molybdenum_dust', amount: 9}], item_outputs: [{item: 'geghilarity:molybdenum_dust', amount: 1}]})
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:molybdenite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1334}
		],
		item_outputs: [	
			{item: "geghilarity:tiny_molybdenum_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 2000}
		]
	})
	
	// monazite
	generify('gegology:monazite_dust', 'modern_industrialization:mozanite_dust', 1, 1);
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 32,
		duration: 100,
		item_inputs: [ 
			{item: 'gegology:tiny_monazite_dust', amount: 1}
		],
		item_outputs: [	
			{item: "gegology:tiny_rare_earth_dust", amount: 1, probability: 0.5}
		],
		fluid_outputs: [
			{fluid: 'modern_industrialization:helium', amount: 55}
		]
	})
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 32,
		duration: 200,
		item_inputs: [ 
			{item: 'gegology:small_monazite_dust', amount: 1}
		],
		item_outputs: [	
			{item: "gegology:small_rare_earth_dust", amount: 1, probability: 0.5}
		],
		fluid_outputs: [
			{fluid: 'modern_industrialization:helium', amount: 125}
		]
	})
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 32,
		duration: 500,
		item_inputs: [ 
			{item: 'gegology:monazite_dust', amount: 1}
		],
		item_outputs: [	
			{item: "gegology:rare_earth_dust", amount: 1, probability: 0.5}
		],
		fluid_outputs: [
			{fluid: 'modern_industrialization:helium', amount: 500}
		]
	})
	
	// nikolite
	event.custom({ 
		type: "modern_industrialization:ore_centrifuge",
		eu: 32,
		duration: 2000,
		fluid_inputs: [
			{fluid: "gegology:molten_nikolite", amount: 1440}
		],
		item_outputs: [	
			{item: "gegology:sodalite_dust", amount: 5},
			{item: "modern_industrialization:copper_dust", amount: 3},
			{item: "geghilarity:silicon_dioxide_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:argon", amount: 1000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 32,
		duration: 2000,
		item_inputs: [
			{item: "gegology:sodalite_dust", amount: 11}
		],
		item_outputs: [	
			{item: "geghilarity:alumina", amount: 3},
			{item: "geghilarity:silicon_dioxide_dust", amount: 3},
			{item: "modern_industrialization:sodium_dust", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:chlorine", amount: 1000}
		]
	})
	
	// opal
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 16,
		duration: 292,
		item_inputs: [
			{item: "gegology:opal_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:silicon_dioxide_dust", amount: 1}
		]
	})
	
	// pentlandite
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:pentlandite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 942}
		],
		item_outputs: [	
			{item: "gegology:small_native_nickel_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 1411}
		]
	})
	
	// peridot
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 32,
		duration: 1000,
		item_inputs: [
			{item: "gegology:peridot_dust", amount: 5}
		],
		item_outputs: [	
			{item: "geghilarity:silicon_dioxide_dust", amount: 2},
			{item: "modern_industrialization:iron_dust", amount: 1},
			{item: "geghilarity:magnesium_dust", amount: 2}
		]
	})
	
	// perlite
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 16,
		duration: 2000,
		item_inputs: [
			{item: "gegology:perlite_dust", amount: 1}
		],
		item_outputs: [	
			{item: "create:powdered_obsidian", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:distilled_water", amount: 1000}
		]
	})
	
	// phosphate
	generify('gegology:phosphate_dust', 'geghilarity:phosphate_dust', 1, 1);
	
	// phosphorus
	generify('gegology:phosphorus_dust', 'geghilarity:phosphorus_dust', 1, 1);
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 16,
		duration: 500,
		item_inputs: [
			{item: "gegology:phosphorus_dust", amount: 5}
		],
		item_outputs: [	
			{item: "geghilarity:calcium_dust", amount: 3},
			{item: "geghilarity:phosphate_dust", amount: 2}
		]
	})
	
	// phosphorite
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 16,
		duration: 900,
		item_inputs: [
			{item: "gegology:phosphorite_dust", amount: 9}
		],
		item_outputs: [	
			{item: "geghilarity:calcium_dust", amount: 5},
			{item: "geghilarity:phosphate_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:fluorine", amount: 1000}
		]
	})
	
	// powellite
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 64,
		duration: 1200,
		item_inputs: [
			{item: "gegology:powellite_dust", amount: 6}
		],
		item_outputs: [	
			{item: "geghilarity:calcium_dust", amount: 1},
			{item: "geghilarity:molybdenum_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 4000}
		]
	})
	
	// pyrite
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:pyrite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1834}
		],
		item_outputs: [	
			{item: "gegology:tiny_hematite_dust", amount: 8}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 2000}
		]
	})
	
	// pyrolusite	
	generify('gegology:pyrolusite_dust', 'geghilarity:pyrolusite_dust', 1, 1);
	
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 16,
		duration: 176,
		item_inputs: [
			{item: "gegology:pyrolusite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 8000}
		],
		item_outputs: [	
			{item: "gegology:manganese_chloride_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 6000},
			{fluid: "modern_industrialization:chlorine", amount: 2000}
		]
	})
	
	// quartzite
	generify('gegology:quartzite_dust', 'geggy:quartzite_dust', 1, 1);
	
	// radium
	
	// realgar
	event.smelting('gegology:arsenic_chunk', 'gegology:crushed_realgar_ore').cookingTime(200)
	event.smelting('gegology:arsenic_chunk', 'gegology:purified_realgar_ore').cookingTime(150)
	event.smelting('gegology:arsenic_chunk', 'gegology:refined_realgar_ore').cookingTime(100)
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:realgar_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		],
		item_outputs: [	
			{item: "gegology:small_native_arsenic_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 1500}
		]
	})
	
	// redstone
	generify('gegology:redstone_dust', 'minecraft:redstone', 1, 1);
	
	// ruby
	generify('gegology:ruby_dust', 'modern_industrialization:ruby_dust', 1, 1);
	
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 64,
		duration: 600,
		item_inputs: [
			{item: "gegology:ruby_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:alumina", amount: 5},
			{item: "gegology:crushed_chromite_ore", amount: 1}
		]
	})
	
	// rutile
	generify('gegology:rutile_dust', 'geghilarity:rutile_dust', 1, 1);
	
	// sapphire
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 32,
		duration: 1200,
		item_inputs: [
			{item: "gegology:sapphire_dust", amount: 6}
		],
		item_outputs: [	
			{item: "geghilarity:alumina", amount: 5}
		]
	})
	
	// scheelite
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 32,
		duration: 512,
		item_inputs: [
			{item: "gegology:scheelite_dust", amount: 6}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 4000}
		],
		item_outputs: [	
			{item: "geghilarity:calcium_chloride_dust", amount: 3},
			{item: "gegology:tungstic_acid_dust", amount: 7}
		]
	})
	
	// selenium
	
	// sheldonite
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:sheldonite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 334}
		],
		item_outputs: [	
			{item: "geghilarity:small_platinum_metallic_powder_dust", amount: 2},
			{item: "modern_industrialization:nickel_tiny_dust", amount: 2},
			{item: "geghilarity:tiny_palladium_salt_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 500}
		]
	})
	
	// smithsonite
	event.smelting('create:zinc_nugget', 'gegology:crushed_smithsonite_ore').cookingTime(100)
	event.smelting('create:zinc_nugget', 'gegology:purified_smithsonite_ore').cookingTime(75)
	event.smelting('create:zinc_nugget', 'gegology:refined_smithsonite_ore').cookingTime(50)
	
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 32,
		duration: 1000,
		item_inputs: [
			{item: "gegology:smithsonite_dust", amount: 5}
		],
		item_outputs: [	
			{item: "kubejs:zinc_dust", amount: 1},
			{item: "modern_industrialization:carbon_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 3000}
		]
	})
	
	// soapstone
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 16,
		duration: 100,
		item_inputs: [
			{item: "gegology:soapstone_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:plant_oil", amount: 1000}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:lubricant", amount: 1000}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 32,
		duration: 1400,
		item_inputs: [
			{item: "gegology:soapstone_dust", amount: 7}
		],
		item_outputs: [	
			{item: "geghilarity:magnesium_dust", amount: 1},
			{item: "geghilarity:silicon_dioxide_dust", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})
	
	// soda
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 16,
		duration: 200,
		item_inputs: [
			{item: "gegology:soda_dust", amount: 2}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:sodium_hydroxide", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:soda_ash_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 1000}
		]
	})
	
	// sperrylite
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 64,
		duration: 876,
		item_inputs: [
			{item: "gegology:sperrylite_dust", amount: 3}
		],
		item_outputs: [	
			{item: "geghilarity:platinum_metallic_powder_dust", amount: 1},
			{item: "gegology:native_arsenic_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 1000},
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		]
	})
	
	// sphalerite
	event.smelting('gegology:zinc_chunk', 'gegology:crushed_sphalerite_ore').cookingTime(200)
	event.smelting('gegology:zinc_chunk', 'gegology:purified_sphalerite_ore').cookingTime(150)
	event.smelting('gegology:zinc_chunk', 'gegology:refined_sphalerite_ore').cookingTime(100)
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:sphalerite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1000}
		],
		item_outputs: [	
			{item: "gegology:small_native_zinc_dust", amount: 2}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 1500}
		]
	})
	
	// stannite
	event.smelting('create:copper_nugget', 'gegology:crushed_stannite_ore').cookingTime(100)
	event.smelting('create:copper_nugget', 'gegology:purified_stannite_ore').cookingTime(75)
	event.smelting('create:copper_nugget', 'gegology:refined_stannite_ore').cookingTime(50)
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:stannite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1188}
		],
		item_outputs: [	
			{item: "gegology:small_native_copper_dust", amount: 1},
			{item: "modern_industrialization:tin_tiny_dust", amount: 1},
			{item: "gegology:small_hematite_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 1500}
		]
	})
	
	// stibnite
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:stibnite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 1200}
		],
		item_outputs: [	
			{item: "modern_industrialization:antimony_tiny_dust", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 1800}
		]
	})
	
	// sulfur
	generify('gegology:sulfur_dust', 'modern_industrialization:sulfur_dust', 1, 1);
	
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 100,
		item_inputs: [
			{item: "gegology:sulfur_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 2000}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 3000}
		]
	})
	
	// tanzanite
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 32,
		duration: 8800,
		item_inputs: [
			{item: "gegology:tanzanite_dust", amount: 44}
		],
		item_outputs: [	
			{item: "geghilarity:alumina", amount: 15},
			{item: "geghilarity:silicon_dioxide_dust", amount: 18},
			{item: "geghilarity:calcium_dust", amount: 4}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 3000},
			{fluid: "modern_industrialization:oxygen", amount: 4000}
		]
	})
	
	// tetrahedrite
	event.custom({ 
		type: "modern_industrialization:roaster",
		eu: 16,
		duration: 512,
		item_inputs: [
			{item: "gegology:tetrahedrite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:oxygen", amount: 938}
		],
		item_outputs: [	
			{item: "modern_industrialization:copper_tiny_dust", amount: 4},
			{item: "modern_industrialization:antimony_tiny_dust", amount: 1},
			{item: "gegology:small_hematite_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:sulfur_dioxide", amount: 1125}
		]
	})
	
	// thorium
	generify('gegology:thorium_dust', 'geghilarity:thorium_dust', 1, 1);
	
	// topaz
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 32,
		duration: 2600,
		item_inputs: [
			{item: "gegology:topaz_dust", amount: 13}
		],
		item_outputs: [	
			{item: "geghilarity:alumina", amount: 5},
			{item: "geghilarity:silicon_dioxide_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:fluorine", amount: 2000},
			{fluid: "minecraft:water", amount: 3000}
		]
	})
	
	// trona
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 16,
		duration: 1000,
		item_inputs: [
			{item: "gegology:trona_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:soda_ash_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:distilled_water", amount: 1000}
		]
	})
	
	// tungstate
	generify('gegology:tungstate_dust', 'geghilarity:tungstate_dust', 1, 1);
	
	event.shapeless('gegology:lithium_hydroxide_dust', [ '4x gegology:small_lithium_hydroxide_dust'])
	event.custom({ 
		type: "modern_industrialization:packer", eu: 4, duration: 40, item_inputs: [{item: 'gegology:small_lithium_hydroxide_dust', amount: 4}], item_outputs: [{item: 'gegology:lithium_hydroxide_dust', amount: 1}]})
		
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 16,
		duration: 400,
		item_inputs: [
			{item: "gegology:lithium_chloride_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:distilled_water", amount: 3000}
		],
		item_outputs: [	
			{item: "gegology:small_lithium_hydroxide_dust", amount: 6}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:chlorine", amount: 500},
			{fluid: "modern_industrialization:hydrogen", amount: 1500},
			{fluid: "modern_industrialization:oxygen", amount: 500}
		]
	})	
	
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu: 8,
		duration: 200,
		item_inputs: [
			{item: "gegology:purified_tungstate_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:tungstate_dust", amount: 1},
			{item: "geghilarity:tungstate_dust", amount: 1, probability: 0.5}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 32,
		duration: 512,
		item_inputs: [
			{item: "gegology:tungstate_dust", amount: 7}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 4000}
		],
		item_outputs: [	
			{item: "gegology:lithium_chloride_dust", amount: 4},
			{item: "gegology:tungstic_acid_dust", amount: 7}
		]
	})
	
	// uraninite
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 64,
		duration: 200,
		item_inputs: [
			{item: "gegology:uraninite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:hydrogen_fluoride", amount: 8000}
		],
		item_outputs: [	
			{item: "gegology:uranium_tetrafluoride_dust", amount: 5}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 6000}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_melter",
		eu: 32,
		duration: 200,
		item_inputs: [
			{item: "gegology:uranium_tetrafluoride_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "gegology:molten_uranium_tetrafluoride", amount: 144}
		]
	})
	event.custom({ 
		type: "modern_industrialization:mixer",
		eu: 120,
		duration: 200,
		item_inputs: [
			{item: "geghilarity:calcium_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "gegology:molten_uranium_tetrafluoride", amount: 240}
		],
		item_outputs: [	
			{item: "modern_industrialization:uranium_tiny_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "gegology:molten_fluorite", amount: 288}
		]
	})
	event.custom({ 
		type: "modern_industrialization:dehy",
		eu: 16,
		duration: 400,
		fluid_inputs: [
			{fluid: "gegology:molten_fluorite", amount: 144}
		],
		item_outputs: [	
			{item: "gegology:fluorite_dust", amount: 1}
		]
	})
	
	// vermiculite
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 32,
		duration: 7800,
		item_inputs: [
			{item: "gegology:vermiculite_dust", amount: 39}
		],
		item_outputs: [	
			{item: "geghilarity:alumina", amount: 10},
			{item: "modern_industrialization:iron_dust", amount: 3},
			{item: "geghilarity:silicon_dioxide_dust", amount: 12}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 1200},
			{fluid: "modern_industrialization:hydrogen", amount: 2000}
		]
	})
	
	// wolframite
	generify('gegology:wolframite_dust', 'geghilarity:wolframite_dust', 1, 1);
	
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu: 30,
		duration: 20,
		item_inputs: [
			{item: "gegology:purified_wolframite_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:sifted_wolframite_dust", amount: 1},
			{item: "geghilarity:sifted_wolframite_dust", amount: 1, probability: 0.5},
			{item: "geghilarity:gold_concentrate_dust", amount: 1, probability: 0.05},
			{item: "geghilarity:granite_tailing_dust", amount: 1, probability: 0.65}
		]
	})
	
	// wulfenite
	event.custom({ 
		type: "modern_industrialization:centrifuge",
		eu: 32,
		duration: 87,
		item_inputs: [
			{item: "gegology:wulfenite_dust", amount: 6}
		],
		item_outputs: [	
			{item: "modern_industrialization:lead_dust", amount: 1},
			{item: "geghilarity:molybdenite_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 4000}
		]
	})
	
	// zircon
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 84,
		duration: 1200,
		item_inputs: [
			{item: "gegology:zircon_dust", amount: 6}
		],
		item_outputs: [	
			{item: "geghilarity:zirconium_dust", amount: 1},
			{item: "geghilarity:silicon_dioxide_dust", amount: 3}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:oxygen", amount: 2000}
		]
	})
	
	// native_antimony
	generify('gegology:native_antimony_dust', 'modern_industrialization:antimony_dust', 1, 1);
	generify('gegology:tiny_native_antimony_dust', 'modern_industrialization:antimony_tiny_dust', 1, 1);
	
	// native_arsenic
	
	// native_cadmium
	event.custom({ 
		type: "modern_industrialization:compressor",
		eu: 4,
		duration: 100,
		item_inputs: [
			{item: "gegology:native_cadmium_dust", amount: 9}
		],
		item_outputs: [	
			{item: "geghilarity:cadmium_sponge", amount: 1}
		]
	})
	
	// native_cerium
	generify('gegology:native_cerium_dust', 'geghilarity:cerium_dust', 1, 1);
	
	// native_cobalt
	generify('gegology:native_cobalt_dust', 'geghilarity:cobalt_dust', 1, 1);
	generify('gegology:tiny_native_cobalt_dust', 'geghilarity:tiny_cobalt_dust', 1, 1);
	
	event.custom({ 
		type: "modern_industrialization:sifter",
		eu: 8,
		duration: 200,
		item_inputs: [
			{item: "gegology:purified_native_cobalt_dust", amount: 1}
		],
		item_outputs: [	
			{item: "geghilarity:cobalt_dust", amount: 1},
			{item: "geghilarity:cobalt_dust", amount: 1, probability: 0.5}
		]
	})
	
	// native_copper
	generify('gegology:native_copper_dust', 'modern_industrialization:copper_dust', 1, 1);
	generify('gegology:tiny_native_copper_dust', 'modern_industrialization:copper_tiny_dust', 1, 1);
	
	// native_gallium
	generify('gegology:native_gallium_dust', 'geghilarity:gallium_dust', 1, 1);
	generify('gegology:tiny_native_gallium_dust', 'geghilarity:tiny_gallium_dust', 1, 1);
	
	// native_germanium
	
	// native_gold
	generify('gegology:native_gold_dust', 'modern_industrialization:gold_dust', 1, 1);
	generify('gegology:tiny_native_gold_dust', 'modern_industrialization:gold_tiny_dust', 1, 1);
	
	// native_hafnium
	generify('gegology:native_hafnium_dust', 'geghilarity:hafnia_dust', 1, 1);
	
	// native_indium
	generify('gegology:native_indium_dust', 'geghilarity:indium_dust', 1, 1);
	
	// native_iridium
	generify('gegology:native_iridium_dust', 'modern_industrialization:iridium_dust', 1, 1);
	generify('gegology:tiny_native_iridium_dust', 'modern_industrialization:iridium_tiny_dust', 1, 1);
	
	// native_lead
	generify('gegology:native_lead_dust', 'modern_industrialization:lead_dust', 1, 1);
	generify('gegology:tiny_native_lead_dust', 'modern_industrialization:lead_tiny_dust', 1, 1);
	
	// native_lithium
	generify('gegology:native_lithium_dust', 'geghilarity:lithium_dust', 1, 1);
	
	// native_neodymium
	generify('gegology:native_neodymium_dust', 'modern_industrialization:neodymium_dust', 1, 1);
	generify('gegology:tiny_native_neodymium_dust', 'modern_industrialization:neodymium_tiny_dust', 1, 1);
	
	// native_nickel
	generify('gegology:native_nickel_dust', 'modern_industrialization:nickel_dust', 1, 1);
	generify('gegology:tiny_native_nickel_dust', 'modern_industrialization:nickel_tiny_dust', 1, 1);
	
	// native_osmium
	generify('gegology:native_osmium_dust', 'geghilarity:osmium_dust', 1, 1);
	
	event.custom({ 
		type: "modern_industrialization:alloy_blast_smelter",
		eu: 240,
		duration: 200,
		item_inputs: [
			{item: "gegology:native_osmium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:liquid_osmium", amount: 144}
		]
	})
	event.custom({ 
		type: "modern_industrialization:alloy_blast_smelter",
		eu: 240,
		duration: 150,
		item_inputs: [
			{item: "gegology:purified_native_osmium_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:liquid_osmium", amount: 232}
		]
	})
	
	// native_palladium
	generify('gegology:native_palladium_dust', 'geghilarity:palladium_metallic_powder_dust', 1, 1);
	
	// native_platinum
	generify('gegology:native_platinum_dust', 'geghilarity:platinum_metallic_powder_dust', 1, 1);
	
	// native_rhenium
	
	// native_rhodium
	
	// native_ruthenium
	
	// native_silver
	generify('gegology:native_silver_dust', 'modern_industrialization:silver_dust', 1, 1);
	generify('gegology:tiny_native_silver_dust', 'modern_industrialization:silver_tiny_dust', 1, 1);
	
	// native_sodium
	generify('gegology:native_sodium_dust', 'modern_industrialization:sodium_dust', 1, 1);
	generify('gegology:tiny_native_sodium_dust', 'modern_industrialization:sodium_tiny_dust', 1, 1);
	
	// native_tin
	generify('gegology:native_tin_dust', 'modern_industrialization:tin_dust', 1, 1);
	generify('gegology:tiny_native_tin_dust', 'modern_industrialization:tin_tiny_dust', 1, 1);
	
	// native_yttrium
	generify('gegology:native_yttrium_dust', 'modern_industrialization:yttrium_dust', 1, 1);
	generify('gegology:tiny_native_yttrium_dust', 'modern_industrialization:yttrium_tiny_dust', 1, 1);
	
	// native_zinc
	generify('gegology:native_zinc_dust', 'kubejs:zinc_dust', 1, 1);
	generify('gegology:small_native_zinc_dust', 'geghilarity:small_zinc_dust', 1, 1);
	generify('gegology:tiny_native_zinc_dust', 'geghilarity:tiny_zinc_dust', 1, 1);
	
	// brown_limonite
	event.smelting('gegology:small_hematite_dust', 'gegology:crushed_brown_limonite_ore').cookingTime(200)
	event.smelting('gegology:small_hematite_dust', 'gegology:purified_brown_limonite_ore').cookingTime(150)
	event.smelting('gegology:small_hematite_dust', 'gegology:refined_brown_limonite_ore').cookingTime(100)
	
	event.custom({ 
			type: "modern_industrialization:packer", eu: 4, duration: 40, item_inputs: [{item: 'gegology:brown_limonite_dust', amount: 1}], item_outputs: [{item: 'gegology:small_brown_limonite_dust', amount: 4}]})
		event.shapeless('4x gegology:small_brown_limonite_dust', [ 'gegology:brown_limonite_dust'])
	
	event.smelting('gegology:small_hematite_dust', 'gegology:brown_limonite_dust').cookingTime(100)
	event.smelting('gegology:tiny_hematite_dust', 'gegology:small_brown_limonite_dust').cookingTime(80)
	
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 32,
		duration: 100,
		item_inputs: [
			{item: "gegology:brown_limonite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1500}
		],
		item_outputs: [	
			{item: "gegology:ferric_chloride_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 1500}
		]
	})
	
	// yellow_limonite
	event.smelting('gegology:small_hematite_dust', 'gegology:crushed_yellow_limonite_ore').cookingTime(200)
	event.smelting('gegology:small_hematite_dust', 'gegology:purified_yellow_limonite_ore').cookingTime(150)
	event.smelting('gegology:small_hematite_dust', 'gegology:refined_yellow_limonite_ore').cookingTime(100)
	
	event.custom({ 
			type: "modern_industrialization:packer", eu: 4, duration: 40, item_inputs: [{item: 'gegology:yellow_limonite_dust', amount: 1}], item_outputs: [{item: 'gegology:small_yellow_limonite_dust', amount: 4}]})
		event.shapeless('4x gegology:small_yellow_limonite_dust', [ 'gegology:yellow_limonite_dust'])
	
	event.smelting('gegology:small_hematite_dust', 'gegology:yellow_limonite_dust').cookingTime(100)
	event.smelting('gegology:tiny_hematite_dust', 'gegology:small_yellow_limonite_dust').cookingTime(80)
	
	event.custom({ 
		type: "modern_industrialization:chemical_bath",
		eu: 32,
		duration: 100,
		item_inputs: [
			{item: "gegology:yellow_limonite_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "modern_industrialization:hydrochloric_acid", amount: 1500}
		],
		item_outputs: [	
			{item: "gegology:ferric_chloride_dust", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "minecraft:water", amount: 1500}
		]
	})
	
	// certus_quartz
	generify('gegology:certus_quartz_dust', 'ae2:certus_quartz_dust', 1, 1);
	
	// granitic_sand
	event.custom({ 
			type: "modern_industrialization:unpacker", eu: 4, duration: 40, item_inputs: [{item: 'gegology:granitic_sand_dust', amount: 1}], item_outputs: [{item: 'gegology:tiny_granitic_sand_dust', amount: 9}]})
	event.shapeless('9x gegology:tiny_granitic_sand_dust', [ 'gegology:granitic_sand_dust'])
	
	
	event.custom({  
		type: "modern_industrialization:em_separator",
		eu: 16,
		duration: 144,
		item_inputs: [ 
			{item: "gegology:granitic_sand_dust", amount: 9}
		],
		item_outputs: [
			{item: "geggy:stone_dust", amount: 1, probability: 0.35},
			{item: "geggy:quartz_sand", amount: 3},
			{item: "modern_industrialization:nickel_tiny_dust", amount: 3, probability: 0.9},
			{item: "modern_industrialization:lead_tiny_dust", amount: 2, probability: 0.9},
			{item: "geghilarity:tiny_cobalt_dust", amount: 1, probability: 0.9}	
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "gegology:granitic_sand_dust", amount: 14},
			{item: "modern_industrialization:coal_dust", amount: 6}
			
		],
		item_outputs : [
			{item: "geggy:pig_iron_ingot", amount: 6},
			{item: "geghilarity:tiny_dark_ashes", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 8,
		duration: 200,
		item_inputs : [
			{item: "gegology:granitic_sand_dust", amount: 14},
			{item: "modern_industrialization:carbon_dust", amount: 3}
			
		],
		item_outputs : [
			{item: "geggy:pig_iron_ingot", amount: 6},
			{item: "geghilarity:tiny_dark_ashes", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 2,
		duration: 400,
		item_inputs : [
			{item: "gegology:purified_granitic_sand_dust", amount: 12},
			{item: "modern_industrialization:coal_dust", amount: 6}
			
		],
		item_outputs : [
			{item: "geggy:pig_iron_ingot", amount: 6},
			{item: "geghilarity:tiny_dark_ashes", amount: 3}
		]
	})
	event.custom({ 
		type: "modern_industrialization:blast_furnace",
		eu: 8,
		duration: 200,
		item_inputs : [
			{item: "gegology:purified_granitic_sand_dust", amount: 12},
			{item: "modern_industrialization:carbon_dust", amount: 3}
			
		],
		item_outputs : [
			{item: "geggy:pig_iron_ingot", amount: 6},
			{item: "geghilarity:tiny_dark_ashes", amount: 3}
		]
	})
	
	// lithium_chloride
	event.custom({ 
		type: "modern_industrialization:electrolyzer",
		eu: 16,
		duration: 256,
		item_inputs: [
			{item: "gegology:lithium_chloride_dust", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:distilled_water", amount: 3000}
		],
		item_outputs: [	
			{item: "gegology:small_lithium_hydroxide_dust", amount: 6}
		],
		fluid_outputs: [	
			{fluid: "modern_industrialization:chlorine", amount: 500},
			{fluid: "modern_industrialization:hydrogen", amount: 1500},
			{fluid: "modern_industrialization:oxygen", amount: 500}
		]
	})
	
	// platinum_sludge
	event.custom({ 
		type: "modern_industrialization:ore_centrifuge",
		eu: 1920,
		duration: 400,
		item_inputs: [
			{item: "gegology:platinum_sludge_dust", amount: 1}
		],
		item_outputs: [	
			{item: "gegology:tiny_native_platinum_dust", amount: 1, probability: 0.51},
			{item: "gegology:tiny_native_palladium_dust", amount: 1, probability: 0.51},
			{item: "gegology:tiny_native_rhodium_dust", amount: 1, probability: 0.51},
			{item: "gegology:tiny_native_ruthenium_dust", amount: 1, probability: 0.51},
			{item: "gegology:tiny_native_osmium_dust", amount: 1, probability: 0.51},
			{item: "gegology:tiny_native_iridium_dust", amount: 1, probability: 0.51}
		]
	})
	
	// rare_earth
	generify('gegology:rare_earth_dust', 'geghilarity:rare_earth_dust', 1, 1);
	
	
	
	event.custom({ 
		type: "modern_industrialization:caster",
		eu: 2,
		duration: 150,
		fluid_inputs: [ 
			{fluid: 'gegology:molten_hematite', amount: 144}
		],
		item_outputs: [
			{item: 'gegology:hematite_dust', amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_caster",
		eu: 2,
		duration: 150,
		fluid_inputs: [ 
			{fluid: 'gegology:molten_hematite', amount: 144}
		],
		item_outputs: [
			{item: 'gegology:hematite_dust', amount: 1}
		]
	})
	
	event.custom({ 
		type: "modern_industrialization:caster",
		eu: 4,
		duration: 150,
		fluid_inputs: [ 
			{fluid: 'gegology:molten_antimony', amount: 144}
		],
		item_outputs: [
			{item: 'modern_industrialization:antimony_dust', amount: 1}
		]
	})
	event.custom({ 
		type: "modern_industrialization:electric_caster",
		eu: 4,
		duration: 150,
		fluid_inputs: [ 
			{fluid: 'gegology:molten_antimony', amount: 144}
		],
		item_outputs: [
			{item: 'modern_industrialization:antimony_dust', amount: 1}
		]
	})
	
})	

/*
	event.custom({ 
		type: "modern_industrialization:",
		eu: 30,
		duration: 300,
		item_inputs: [
			{item: "geghilarity:", amount: 1}
		],
		fluid_inputs: [
			{fluid: "geghilarity:", amount: 1000}
		],
		item_outputs: [	
			{item: "geghilarity:", amount: 1}
		],
		fluid_outputs: [	
			{fluid: "geghilarity:", amount: 1000}
		]
	})
*/	