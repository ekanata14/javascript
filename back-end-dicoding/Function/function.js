// Function Javascript
// Function is a block of code or logic which when it's called, the function will run

const greetingHead = document.createElement('h1');
const number = document.createElement('p');

function greeting(){
    alert("Hello, learning function");
}

function greetingName(name){
    greetingHead.innerText = `Hello, ${name}`;
    document.body.append(greetingHead);
}

// Calling the function
greeting();

// Calling function and send the argument
greetingName("Dreamerdream");

// Rest Paramater
// Rest paramater is the inverse of spread operator. Rest Parameter will join some elements into one array
function calculateAllParams(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    };
    number.innerText = result
    showText = document.body.append(number)

    return showText;
}

// Calling function with rest parameter
calculateAllParams(1,2,3,4,1,2,31,231,23,123);

// -----------------------------------------------------
// ARROW FUNCTION
// Arrow function is same as function but there are some differences. This function is shorter than regular function

// Declaring Arrow Function
// It can be used on a variable or you can use this when you have to make a function inside something that doesn't need a name
const hello = () =>{
    alert("Hello");
}

// Calling arrow function within a variable
hello();

// TIPS
// If you have just one parameter to use, you don't need to type the parentheses, just type it like this = const hello = name =>{code}
// If you have no parameter, you have to type the parentheses
// If you just type arrow function in 1 line. You don't need to type the curly braces, type your code after the arrow directly. const hello = name => code (one line code works)
// If you want to return something on arrow function. You don't need to type the return. Just type the code after the arrow directly. const hello = name => code (one line code works)

const testing = () => alert('without return');

testing();

// -----------------------------------------------------
// CLOSURE
// Javascript doesn't have a way to make a function private like Java. So, the closure can make as though the function is like private
// Closure with regular function
console.log("Closure with regular function");
function init(){
    let counter = 0;

    function add(){
        return ++counter;
    }

    return add;
}

let countNumber = init();

console.log(countNumber());
console.log(countNumber());
console.log(countNumber());

// Closure with arrow function

let addNumber = ()=>{
    let countNum = 0;

    return ()=> {
        return ++countNum;
    }
}

console.log("Closure with arrow function");

let add = addNumber();

console.log(add());
console.log(add());
console.log(add());

console.log("Dicoding code test");

function minimal(a,b){
    if(a < b){
        return a;
    } else if(b < a){
        return b;
    } else{
        return a;
    }
}

console.log(minimal(20,50));

function power(a,b){
    return a ** b;
}

console.log(power(10,2));

console.log('Dicoding quiz');

function calculate(value){
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));

function minMax(arrayOfNumbers){
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for(value of arrayOfNumbers){
        if(value < currentMin){
            currentMin = value;
        } else if(value > currentMax){
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);
