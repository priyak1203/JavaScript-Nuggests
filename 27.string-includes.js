// Stirng includes() - checks if a string contains another string

const firstName = 'john';

let result = firstName.includes('jo');
console.log(result); // returns true

result = firstName.includes('Jo');
console.log(result); // returns false

result = firstName.includes('peter');
console.log(result); // returns false

result = firstName.includes('j');
console.log(result); // returns true

result = firstName.includes('j', 1);
console.log(result); // returns false

const product = {
  title: 'Leather Chair',
};

let productCheck = product.title.includes('Le');
console.log(productCheck); // returns true

productCheck = product.title.includes('le');
console.log(productCheck); // returns false

const products = [
  { title: 'Modern Poster' },
  { title: 'Bar Stool' },
  { title: 'Armchair' },
  { title: 'Leather Chair' },
];

const text = 'a';

const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(text)
);

console.log(filteredProducts);
