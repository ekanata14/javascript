const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

const isCoffeeMachineReady = true;

// Node Js Way
// module.exports = {coffeeStock, isCoffeeMachineReady};

// ES6 way
// One value to export
// export default coffeeStock;

// Some values to export
export {coffeeStock, isCoffeeMachineReady}

// console.log(module);