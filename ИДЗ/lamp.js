class Lamp extends Device{
	constructor(name, isSwitched, type){
		super(name, isSwitched);
		__type = type;
	}
	
	getType(){
		return this.__type;
	}
	setType(type){
		this.__type  = type ;
	}

}