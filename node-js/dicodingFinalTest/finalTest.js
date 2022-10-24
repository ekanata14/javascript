const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];

// TODO: Kode untuk menambahkan item Charlie pada index ke-2
phoneticAlphabet.splice(2,0,"Charlie");

console.log(phoneticAlphabet);

const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
delete artistsAndSongs["Keyakizaka46"];
artistsAndSongs["Blackpink"].push("Rose - Gone");

console.log(artistsAndSongs);

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));

class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

try {
    throw new MyCustomError("This is an error");
} catch (e) {
    console.log(e.message);
}

// function fetchUsername() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('JSUser');
//         }, 3000);
//     })
// }

// console.log("Fetching username...");
// fetchUsername().then((value) => {
//     console.log(`You are logged in as ${value}`);
// })
// .finally(() => {
//     console.log("Welcome!");
// })

function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
const username = fetchUsername();
console.log(`You are logged in as ${username}`);
console.log("Welcome!");