// Get element helper

const heading = document.querySelector('.heading');
// console.log(heading);

const listItems = document.querySelectorAll('.list-item');
// console.log(listItems);

// for single elements
const getSingleElement = (selector) => {
  const el = document.querySelector(selector);
  if (el) return el;

  throw new Error(`Please check selector: ${selector}`);
};

// console.log(getSingleElement('.heading'));

// for mulitiple elements
const getMultipleElements = (selector) => {
  const el = [...document.querySelectorAll(selector)];
  if (el.length > 0) return el;

  throw new Error(`Please check your ${selector}`);
};

// console.log(getMultipleElements('.list-item'));

console.log('==================================');
const getElementOld = (selector, isList) => {
  if (isList) {
    const el = [...document.querySelectorAll(selector)];
    if (!el.length < 1) return el;
    throw new Error(`Please check selector: ${selector}`);
  }

  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error(`Please check your ${selector}`);
};

// console.log(getElementOld('.heading', false));

const getElement = (selector, isList) => {
  const el = isList
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);

  // not a list -  el exists or not
  // list - el empty or not

  //   if (!isList && el) return el;
  //   if (isList && !el.length < 1) return el;

  if ((!isList && el) || (isList && !el.length < 1)) return el;

  throw new Error(`Please check selector ${selector}`);
};

console.log(getElement('.list-item', true));
console.log(getElement('.heading'));
