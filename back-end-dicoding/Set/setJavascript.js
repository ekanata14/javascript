// Set Javascript
// Set is data type that contains set of values. Set don't have index order. And the value of set is unique and there is no duplication

const numberSet = new Set([1,4,5,4,1,1,1,3,4,5]);

// This will print the unique value and there is no value that is duplicated here
console.log(numberSet);

// If you want to add number to your set, just use add() function

numberSet.add(10);
numberSet.add(12);

console.log(numberSet);

// If you want to delete value on your set variable, use variableName.delete(value)
// But the argument it's not an index position. Fill it with the value itself

numberSet.delete(1);

console.log(numberSet);
