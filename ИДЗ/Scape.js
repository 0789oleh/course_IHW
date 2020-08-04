class Scape extends Device{
	constructor (name, isOpened){
		suprer(name, isOpened);	
	}
	open(){
		isOpened = true;
	}
	close(){
		isOpened = false;
	}
}