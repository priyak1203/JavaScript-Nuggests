// unique values

const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];

const categories = menu.map((item) => item.category);
console.log(categories);

const uniqueCategories = new Set(categories);
console.log(uniqueCategories);

const uniqueCategoryArray = ['all', ...uniqueCategories];
console.log(uniqueCategoryArray);

const unique = ['all', ...new Set(menu.map((item) => item.category))];
console.log(unique);

const result = document.getElementById('result');
result.innerHTML = unique
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join('');
