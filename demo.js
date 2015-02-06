var monsters = [];
var scientists = [];
var numMonsters = 10;
var numScientists = 10;
var numRooms = 5;

// put all this in a setup function

// create monsters
for(var i=0; i<numMonsters; i++) {

	var type = Math.random() < 0.5 ? 'herbivore' : 'carnivore';
	monsters.push(new Monster(type));
}
// test2
// create scientists
for(var i=0; i<numScientists; i++) {
	scientists.push(new Scientist());
}

// create park & zones
var world = new World();
for(var i=0; i<numRooms; i++) {

	var room = new Room();

	var numRandomScientists = Math.floor(Math.random() * 3);
	for(var j=0; j<numRandomScientists && scientists.length > 0; j++) {
		// var randomScientistIndex = Math.floor(Math.random() * scientists.length);
		// var randomScientist = scientists.splice(randomScientistIndex, 1)[0];
		// zone.scientists.push(randomScientist);
		room.scientists.push(scientists.pop())
	}

	// we should really have a helper function that randomly moves an item from one array to another!
	var numRandomMonsters = Math.floor(Math.random() * 3);
	for(var j=0; j<numRandomMonsters && monsters.length > 0; j++) {
		room.monsters.push(monsters.pop())
	}

	world.rooms.push(room);

}

room.scientists = room.scientists.concat(scientists)
room.monsters = room.monsters.concat(monsters)

// create airport
var airport = new Room();
airport.name = 'airport';
world.rooms.push(airport);

// assign adjacent zones
world.rooms[0].nextRooms = [
	world.rooms[1],
	world.rooms[2],
	world.rooms[3],
	airport
];
world.rooms[1].nextRooms = [
	world.rooms[2],
	world.rooms[4],
	airport
];
world.rooms[2].nextRooms = [
	world.rooms[3],
	world.rooms[4]
];
world.rooms[3].nextRooms = [
	world.rooms[4]
];
world.rooms[4].nextRooms = [
	airport
];

console.log('world', world);
console.log('survivors', world.getSurvivors())
