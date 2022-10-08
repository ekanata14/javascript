// Javascript Map
// Map is data type that contains key-value pairs data.
// It's similar to object but the key on map data type can be anything. It can be number, or something
// while the object just accept string and symbol data type as the key.

const myMap = new Map([
    [1, 'a number key'],
    ['1', 'a string key'],
    [true, true]
])

console.log(myMap);

const animeStudio = new Map([
    ['Naruto', 'Pierrot Studios'],
    ['Demon Slayer', 'Ufotable'],
    ['Attack on Titan (S1-S3)', 'Wit Studio'],
    ['Attact on Titan Final Season', 'Mappa']
])

console.log(animeStudio.size);
console.log(animeStudio.get('Naruto'));

animeStudio.set('Yakusoku no Neverland', 'Aniplex');

console.log(animeStudio.size);
console.log(animeStudio.get('Yakusoku no Neverland'));

console.log(animeStudio.has('Demon Slayer'));
console.log(animeStudio.delete('Naruto'));
console.log(animeStudio.size);
console.log(animeStudio);

// Dicoding test

const currency = new Map([
    ['USD', 14000],
    ['JPY', 131],
    ['SGD', 11000],
    ['MYR', 3500]
]);

const priceInJPY = 5000;

const priceInIDR = priceInJPY * currency.get('JPY');
console.log(priceInIDR);