class Room{
	constructor(name, square){
		this.__name = name;
		this.__square = square;
	}

	getName(){
		return this.__name;
	}

	setName(name){
		this.__name = name;
	}

	getSquare(){
		return this.__square;
	}

	setSquare(square){
		this.__square = square;
	}

	devices = [];

	addDevice(obj){
		this.devices.push(obj);
	}
}