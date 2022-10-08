// function for calling the array
function callArray(callArray){
    console.log(callArray);
}

// Creating the array
let nilaiSiswa = [90, 100, 85, 100, 95, 93, 100];

// calling the array
callArray(nilaiSiswa);

// Insert the value to the last array index
nilaiSiswa.push('nilai');

callArray(nilaiSiswa);

// Delete the last array index
nilaiSiswa.pop();

callArray(nilaiSiswa);

// Delete the first array index
nilaiSiswa.shift();

callArray(nilaiSiswa);

// Insert the value at the first index of array
nilaiSiswa.unshift('test Unshift');

callArray(nilaiSiswa);

// Delete the value index of array but the position will be empty
delete nilaiSiswa[1];

callArray(nilaiSiswa);

// Delete the element of array, first parameter is for index start, and the second one is how many element do you want to delete
nilaiSiswa.splice(1, 1);

callArray(nilaiSiswa);

nilaiSiswa.splice(1,2);
callArray(nilaiSiswa);

