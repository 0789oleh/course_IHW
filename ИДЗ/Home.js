class Home{
	constructor(name, location){
		this.__name = name;
		this.__location = location;
	}

	getName(){
		return this.__name;
	}

	setName(name){
		this.__name = name;
	}

	getLocation(){
		return this.__location;
	}

	setLocation(location){
		this.__location = location;
	}

	rooms = [];

	addRoom(obj){
		this.__room = {
			name: obj.getName(),
			square: obj.getSquare()
		};
		this.rooms.push(this.__room);
	}
}