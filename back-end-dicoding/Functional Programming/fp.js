// FUNCTIONAL PROGRAMMING
// Functional Programming is programming paradigm where the computing process based on math.
// This is written with declarative style that is focused with 'what to solve' not 'how to solve'
// with imperative style

// Imperative style
console.log('Imperative Style');
const food = ['Nasi Goreng', 'Mie Goreng', 'Mie Kuah'];

const foodWithExcMark = [];

for(let i = 0; i < food.length; i++){
    foodWithExcMark.push(`${food[i]}!`);
}

console.log(foodWithExcMark);

// The code above is imperative style. That's the meaning of 'how to solve' where you think how the for loop works to solve the case.

// Declarative style

console.log('Declarative Style');
const food_2 = ['Nasi Goreng', 'Mie Goreng', 'Mie Kuah'];

const food_2WithExcMark = food_2.map((food_2) => `${food_2}!`);

console.log(food_2WithExcMark);

// The code above is declarative style. This is more concise and it's focused on 'what to solve' 


