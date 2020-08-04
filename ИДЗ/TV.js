class TV extends Device{
	constructor (name, isSwitched){
		super(name, isSwitched);
		this.__currentchannell = 1;
	}
	nextChannell(){
		this.__currentchannell++;
	}
	previousChannell(){
		this.__currentchannell--;
	}
	__channells = new Map([
  		[1, 'Discovery'],
  		[2, 'M1'],
  		[3, 'TV1000'],
  		[4, 'National Geographic'],
  		[5, 'QTV']
	]);  
	showCurrentChannell(){
		console.log(this.__channells.get(this.__currentchannell));
	}
}