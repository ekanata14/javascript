// Destructuring Array
// Same as destruturing object, but it is for array and it is using square bracket [].
// And the name of the destructured variable is independent

// Declaring Array
const favorites = ['Nasi Goreng', 'Ayam Lalapan', 'Ayam Bakar', 'Soto Ayam'];

// Destructuring Array
// It's different from object, the destructured variable in array is based on the index while object is based on the properties
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

// also you can make destructured array without declaring the variable based on the index order, you can skip it
const [, , third, ] = favorites;
console.log(' ')
console.log(third);

// Destructuring assignment
// Destructuring assigment is replacing the value of the variable.
let myFood = "Ice Cream";
let herFood = "Noodles";

// The myFood variable contains "Ice Cream" value

[myFood, herFood] = favorites;

// After the variable is brought to destructuring assignment, the value will be changed with the value on the array based on the index position
// That's how destructuring assigment works. It's also same with destructuring assigment in object.

console.log(' ')
console.log(myFood);
console.log(herFood);


