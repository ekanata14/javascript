// Javascript OOP

/* There are 2 property
Internal interface: The property and method that is accessible within the class
External interface: The property and method that isn't accessible outside the class

Access Identifier
Public: Accessible from anywhere
Private: Accessible within the class
*/

class Car{
    // Make property private
    #testingVar2 = 'testing private variable in the class';
    constructor(car, kph){
        this.car = car;
        this.kph = kph;
        // Make property private
        var testVar = 'testing private';
        this._testingVar = 'testing private access';

        this.heading = document.createElement('h1');
        console.log("Testing Constructor");
    }


    run(){
        // this.heading.innerText(`${$this.car} is running at ${kph}`);
        // document.body.append(this.heading);
        console.log(`${this.car} is running at ${this.kph} kph`);
    }

    static test(){
        console.log('Testing static method');
    }
}

const myCar = new Car('DreamerCar', 500);

myCar.run();

const yourCar = new Car('YourCar', 250);

yourCar.run();

// Static Method
Car.test();

// Testing private variable from class
thisCar = new Car('test', 1000);
console.log(thisCar.testVar);
console.log(thisCar.testingVar);
console.log(thisCar.testingVar2);