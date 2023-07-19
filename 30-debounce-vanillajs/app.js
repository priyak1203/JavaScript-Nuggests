const btn = document.querySelector('.btn');

// msg should be displayed only after 2s of last button click

const debounce = () => {
  let timeoutID;
  return () => {
    console.log(timeoutID);
    clearInterval(timeoutID);
    timeoutID = setTimeout(() => {
      console.log('Button Clicked');
    }, 2000);
  };
};

btn.addEventListener('click', debounce());
