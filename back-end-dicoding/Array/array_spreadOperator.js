// Spread Operator

// It is used for printing all array's elements, like for each
// also, it can be used in object
let nilaiPertama = [100, 100, 90, 95, 100, 85];
let nilaiKedua = [90, 100, 85, 100, 80, 80];

console.log(...nilaiPertama);
console.log(...nilaiKedua);

let semuaNilai = [...nilaiPertama, ...nilaiKedua];

console.log(...semuaNilai);