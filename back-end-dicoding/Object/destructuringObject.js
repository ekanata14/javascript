// Destructuring object is, assigning the property of an object to a variable outside of the object

// Declaring an object
const computer_2 = {
    cpu : 'i7',
    gpu : 'rtx 3060',
    ram : '32gb',
    ssd : '512gb',   
}

// Destructuring object with ES6 and the default value using the equal
const {cpu, gpu, ram, ssd, fan = '120rpm'} = computer_2;

// Print the destructured object variable
console.log(cpu, gpu, ram, ssd, fan);

// You can also change the destrutured variable with the other variable name
const {cpu : localCpu, gpu : localGpu, ram : localRam, ssd : localSSD, fan : localFan} = computer_2;

console.log(localCpu);
console.log(localGpu);
console.log(localRam);
console.log(localSSD);

// Destructuring assignment
// let cpu = 'i9';
// let gpu = 'rtx 3050';

// ({cpu, gpu} = computer_2);

// console.log(cpu);
// console.log(gpu);



