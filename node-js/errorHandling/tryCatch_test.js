// class ValidationError extends Error{
// 	constructor(message){
//      super(message);
//       this.name = "Validation Error";
//     }
// }
// // TODO 2
// function validateNumberInput(a,b,c){
// 	if(typeof a != "number"){
//     	throw new ValidationError('Argumen pertama harus number');
//     }
  
//   	if(typeof b != "number"){
//      	throw new ValidationError('Argumen kedua harus number'); 
//     }
  
//   	if(typeof c != "number"){
//         throw new ValidationError('Argumen ketiga harus number'); 
//     }
// }

// const detectTriangle = (a, b, c) => {
//   // TODO 3
//   try{
//     validateNumberInput(a,b,c);
//   } catch(error){
//     console.log(error.message);
//   }

//   if (a === b && b === c) {
//     return 'Segitiga sama sisi';
//   }

//   if (a === b || a === c || b === c) {
//     return 'Segitiga sama kaki';
//   }

//   return 'Segitiga sembarang';
// };

try {
    const arr = [1, 2, 3, 4];
    for (let i = 0; i <= 4; i++) {
        console.log(arr[i]);
    }
} catch(e) {
    console.log("Out of bounds");
}
