var Monster = function(type) {
	this.name = 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)];
	if(!type) {
		throw new Error('Dinosaur must have a type!')
	}
	this.type = type;

	this.imageUrl = imageUrl;
};
Monster.prototype.render = function() {
  this.$el = $('<div>')
    .addClass('monster')
    .append(
      $('<img>')
        .attr('src', this.imageUrl)
    );
  return this.$el;
};



var Scientist = function() {
	this.name = 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)];
	this.imageUrl = imageUrl;
};
Scientist.prototype.render = function() {
  this.$el = $('<div>')
    .addClass('scientist')
    .append(
      $('<img>')
        .attr('src', this.imageUrl)
    );
  return this.$el;
};



var Player = function(name, imageUrl) {
	this.name = name;
	this.imageUrl = imageUrl;

	this.items = [];
}
Player.prototype.render = function() {
  this.$el = $('<div>')
    .addClass('player')
    .append(
      $('<img>')
        .attr('src', this.imageUrl)
    );
  return this.$el;
};

var Item = function(name, imageUrl) {
	this.name = name;
	this.imageUrl = imageUrl;
}
Item.prototype.render = function() {
  this.$el = $('<div>')
    .addClass('item')
    .append(
      $('<img>')
        .attr('src', this.imageUrl)
    );
  return this.$el;
};


var World = function(name, imageUrl) {
	this.name = name;
	this.imageUrl = imageUrl;

	this.rooms = [];
	this.players = [];
};

World.prototype.AddRooms = function(room){
	this.rooms.push(room);
}

World.prototype.addPlayer = function(player) {
  this.players.push(player);
  player.moveTo(this.$el);
  player.world = this;
};
World.prototype.render = function() {
  this.$el = $('<div>')
    .addClass('home-base')
    .append(
      $('<img>')
        .attr('src', this.imageUrl)
    );

  return this.$el;
};
var Room = function(name, imageUrl) {

	this.name = name;
	this.imageUrl = imageUrl;

	// this.scientist = null; // contain one

	this.scientists = []; // contain multiple
	this.monsters = [];
	this.nextRooms = [];
	this.items = [];

	// a static value does not stay up-to-date unless it is modified manually
	// this.safe = true;
};

Room.prototype.addMonster = function(monster) {
	this.monsters.push(monsters);
	monster.moveTo(this.$el);
	monster.room = this;
}

Room.prototype.addItems = function() {
	this.items.push(items);
}

// If the the room is safe than allow the user to travel to the specific room
Room.prototype.isSafe = function() {
	return this.monsters.every(function(dino) {
		return dino.type !== 'carnivore';
	});
};

Room.prototype.pushItem = function() {
	room.items.forEach(function(item)){
		player.items.push(item);

	}
}
Room.prototype.render = function() {
  this.$el = $('<div>')
    .addClass('room')
    .append(
      $('<img>')
        .attr('src', this.imageUrl)
    );
  return this.$el;
};



var Item = function(contents){
	this.contents = contents;
}




World.prototype.getSurvivors = function() {

	var currentWorld = this;

	var getPrecedingSafeRooms = function(zone) {
		return currentWorld.rooms
			// preceding
			.filter(function(aRoom) {
				return aRoom.nextRooms.indexOf(room) >= 0;
			})
			// safe rooms
			.filter(function(aRoom) {
				return aRoom.isSafe();
			})
	}

	// the last room is the airport
	var safeRoomsToExplore = [this.rooms[this.rooms.length-1]];
	var safeRooms = [];

	while(safeRoomsToExplore.length > 0) {

		// explore the next safe zone that hasn't been explored
		var exploredRoom = safeRoomsToExplore.pop();

		// add it to our final list of safe zones
		safeRooms.push(exploredRoom);

		// get any precending safe zones connected to the explored zone, and make them available to explore
		var newSafeRooms = getPrecedingSafeRooms(exploredRoom);
		safeRoomsToExplore = safeRoomsToExplore.concat(newSafeRooms);
	}

	// return all scientists from the final safe zones
	return safeRooms.reduce(function(survivors, room) {
		return survivors.concat(zone.scientists);
	}, []);
}













var Package = function(contents){
  this.contents = contents;
};


/////////////
// Testing //
/////////////

var world = new World('http://fc09.deviantart.net/fs71/i/2010/327/2/1/the_magi___space_port_by_bradwright-d33fe4m.jpg');

var room1 = new Target('123 Street Name', 'https://mattsko.files.wordpress.com/2010/11/space-home.jpg');
var room2 = new Target('456 Main Road', 'http://www.designmeetscomfort.com/wp-content/uploads/2012/06/jetsons.jpg');
var room3 = new Target
var room4 = new Target
var room5 = new Target
var room6 = new Target
var room7 = new Target

var player = new Player();

var monster1 = new Monster();
var monster2 = new Monster();
var monster3 = new Monster();
var monster4 = new Monster();

var item1 = new Item
var item2 = new Item
var item3 = new Item
var item4 = new Item




// Add the targets to the homeBase target list
world.targets.push(home1);
world.targets.push(home2);


// Define a base package
var ourPackage = new Package('candy canes');


$(document).on('ready', function(){
  // Append and render each element when the DOM is ready
  $('body').append(
    world.render('http://www.adventure-trader.com/images/dorado.png'),
    player.render(),

    monster1.render(),
    monster2.render(),
    monster3.render(),
    monster4.render(),

    room1.render(),
    room2.render(),
    room3.render(),
    room4.render(),
    room5.render(),
    room6.render(),
    room7.render(),
    
    item1.render(),
    item2.render(),
    item3.render()
    item4.render()
  );

  // Append the trucks
  world.addPlayer(player);
  world.addRooms(room)

  // Deliver our package
  world.deliver(ourPackage, home2);
});

