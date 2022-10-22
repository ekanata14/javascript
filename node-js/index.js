// Testing node js

console.log("Hello World");
console.log("Testing node js");

// Node JS way
// const {coffeeStock, isCoffeeMachineReady} = require('./state');
// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);

// ES6 way
// Import one value
// import coffeeStock from "./state.js";

// Import some values
// import {coffeeStock, isCoffeeMachineReady} from "./state.js";

// console.log(coffeeStock);
// console.log(`Mesin Kopi nya : ${isCoffeeMachineReady}`);

// const makeCoffee = (type, mg)=>{
//     if(coffeeStock[type] >= mg){
//         console.log("Kopi berhasil dibuat");
//     } else {
//         console.log("Bahan kurang");
//     }
// }

// makeCoffee('robusta', 500);

import Tiger from "./Tiger.js"
import Wolf from "./Wolf.js"

console.log(Tiger);

const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl();
  }
  return 'Harimau dan serigala sama-sama kuat!';
};

const myTiger = new Tiger();
const myWolf = new Wolf();

const result = fight(myTiger, myWolf);

console.log(result);


// TODO 4
export {fight, myTiger, myWolf, result}