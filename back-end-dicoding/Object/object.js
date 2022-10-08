// Object is a data type that has key-value pair

// Function for calling the object
function myComp(){
    console.log(`My computer has ${computer.cpu} cpu, ${computer.gpu} gpu, ${computer.ram} ram and ${computer.ssd}`);
}

// Function for deleting the object
function deleteObjProperty(object, property){
    delete object[property]
}

// Declaring an object
const computer = {
    cpu : 'i7',
    gpu : 'rtx 3060',
    ram : '32gb',
    ssd : '512gb',   
}

// Calling the object

myComp();

// Changing the object
computer.cpu = 'i9';
computer.gpu = 'rtx 3090';
computer.ram = '64gb';
computer.ssd = '1tb';

// Calling the object
myComp();

//Calling delete object property function
deleteObjProperty(computer, 'cpu');

// calling the object
myComp();

// calling delete object property function
deleteObjProperty(computer, 'gpu');

// calling the object
myComp();


// Dicoding test
const restaurant = {
    name : 'Gege Restaurant',
    city : 'Denpasar',
    'favorite drink' : 'Iced Orange',
    'favorite food' : 'Chicken Geprek',
    isVegan : false
}

let name = restaurant.name;
let favoriteDrink = restaurant['favorite drink'];