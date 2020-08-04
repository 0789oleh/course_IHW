class Fridge extends Device{
	constructor(name, isSwithed){
		super(name, isSwithed)
		this.__isOpened = false;
	}
	open(){
		this.__isOpened = true;
		console.log(name + 'is opened');
	}
	close(){
		this.__isOpened = false;
		console.log(name + 'is closed');
	}
}