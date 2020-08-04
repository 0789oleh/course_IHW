class Device{
	constructor(name, isSwitched){
		this.__name = name;
		this.__switched = Boolean(isSwitched);
	}
	getName(){
		return this.__name;
	}
	setName(name){
		this.__name = name;
	}
	turnOn(){
		this.__switched = true;
	}
	turnOff(){
		this.__switched = false;
	}
	showStatement(){
		statement;
		if (this.__switched) {
			this.__statement = 'switched on';
		}else{
			this.__statement = 'switched off';
		}
		console.log('Name: ' + this.__name + 'Statement: ' + this.__statement);
	}
}
