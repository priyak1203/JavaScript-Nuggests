// Array Destructuring
// faster/easier way to access/unpack variables from arrays

const fruits = ['orange', 'pineapple', 'strawberry', 'mango'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];
const fruit4 = fruits[3];

console.log(fruit1, fruit2, fruit3, fruit4);

const friends = ['john', 'bob', 'peter', 'anna', 'kelly'];
const [john, bob, peter, anna, kelly] = friends;
console.log(john, bob, peter, anna, kelly);

// less variables than the length of the array
const colors = ['red', 'white', 'green'];
const [red, white] = colors;
console.log(red, white);

// more variables than length of the array
const animals = ['tiger', 'lion', 'zebra', 'elephant'];
const [tiger, lion, zebra, elephant, monkey] = animals;
console.log(tiger, lion, zebra, elephant, monkey);

const foodItems = ['burger', 'pasta', 'cake', 'chocolate', 'pizza'];
const [burger, favoriteFood] = foodItems;
console.log(burger, favoriteFood);

// omit the values in between
const flowers = ['lily', 'rose', 'daffodils', 'orchids', 'daisy'];
const [lily, , daffodils, , daisy] = flowers;
console.log(lily, daisy, daffodils);

// Swapping using variables
let first = 'Hello';
let second = 'There';

console.log(first, second);

let temp = second;
second = first;
first = temp;

console.log(first, second);

// Swapping using an array
let str1 = 'welcome';
let str2 = 'home';
console.log(str1, str2);

[str2, str1] = [str1, str2];

console.log(str1, str2);
