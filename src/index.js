
require('./styles.scss');

class Car{
	constructor(name,color)
	{
		this._name=name;
		this._color=color;
	}
	get name()
	{
		return this._name;
	}
	set name(value)
	{
		this._name=value;
	}

}

let car=new Car("Benz","red");
console.log(car.name);