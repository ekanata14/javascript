// Functional Programming Concept

// Pure Function
// The function doesn't depend on value outside the function or the paramaeter.
// And pure function should not produce side effect.

// Example

const hitungLuasLingkaran = (jarijari) => {
    // Put the value inside the function that can't be changed directly, that's the concept of pure function
    return 3.14 * (jarijari * jarijari);
}

console.log(hitungLuasLingkaran(50));

// Impure
const person = {
    name : 'Bobo'
};
const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
}
const newPerson = createPersonWithAge(18, person);
console.log(person, newPerson);

// Pure 
const buatOrangDenganUmur = (umur, orang) => {
    return {...orang, umur}
}
const buatOrangDenganPekerjaan = (pekerjaan, orang) => {
    return {...orang, pekerjaan}
}
const orang = {
    name : 'Gakure'
};

const orangBaru = buatOrangDenganUmur(18, orang);
const orangKerja = buatOrangDenganPekerjaan('Programmer', orang);

console.log(orangBaru);
console.log(orangKerja);

// ----------------------------

// Immutability
// Immutable means that object can't be changed after it's created. Instead of change it,
// It makes a new object based on old object.
// Example with map function
const car = ['BMW', 'Lamborghini', 'Toyota'];
const newCarWithExcMark = car.map((car) => `${car}!`);
console.log(newCarWithExcMark);

const user = {
    firstName : 'gakure',
    lastName : 'drem' //Typo
} 

const createUserWithNewLastName = (newLastName, user) => {
    return {...user, lastName : newLastName}
}

const newUser = createUserWithNewLastName('dream', user);

console.log(newUser);