// Width/Height - window, any element
// innerHeight, innerWidth - window
// getBoundingClientRect() - any element

console.log('Height', window.innerHeight);
console.log('width', window.innerWidth);

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

btn.addEventListener('click', () => {
  const dimensions = box.getBoundingClientRect();
  console.log(dimensions);
});
