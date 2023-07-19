const btn = document.querySelector('.btn');

// ===========  Stage 1 ================= //
// 'Button Clicked' is displayed on each button click
btn.addEventListener('click', () => {
  console.log('Button Clicked');
});

// Objective :  msg should be displayed only after 2s of last button click

// ===========  Stage 2 ================= //
// 'Button Click Delayed' is displayed after 2s of each button click

const debounce1 = () => {
  setTimeout(() => {
    console.log('Button Click Delayed');
  }, 2000);
};

btn.addEventListener('click', debounce1);

// ===========  Stage 3 ================= //
// setTimeout returns id, which pass into clearTimeout
// Note: In this the execution doesnt reach console.log('Button Clicked')
// because setTimeOut is immediately cleared by clearTimeout.

const debounce = () => {
  const timeoutID = setTimeout(() => {
    console.log('Button Clicked');
  }, 2000);

  console.log(timeoutID);
  clearTimeout(timeoutID);
  console.log('Debounce');
};

btn.addEventListener('click', debounce);
