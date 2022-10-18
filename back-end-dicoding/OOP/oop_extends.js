// Extend and overriding class

class Vehicle{
    constructor(vehicleName, vehicleLevel){
        this.vehicleName = vehicleName;
        this.vehicleLevel = vehicleLevel;
        console.log("Class is made");
    }

    display(){
        console.log(`Your vehicle is ${this.vehicleName} and it's ${this.vehicleLevel}`);
    }
}

const bmw = new Vehicle('bmw', 'high level');

bmw.display();

class Car extends Vehicle{
    constructor(vehicleName, vehicleLevel, vehicleType){
        super(vehicleName, vehicleLevel);
        this.vehicleType = vehicleType;
        console.log("Class car is made extended from class Vehicle");
    }

    display(){
        super.display();
        console.log(`And the car type is ${this.vehicleType}`);
    }
}

const car = new Car('lamborghini', 'super high', 'car');

car.display();



