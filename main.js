const element = document.querySelector(`h1`);
let isAnimated = false;

element.addEventListener(`click`, () => {
  if (isAnimated) {
    element.classList.remove(`Forward`);
    element.classList.add(`Backwards`);
    isAnimated = false;
  } else {
    element.classList.remove(`Backwards`);
    element.classList.add(`Forward`);
    isAnimated = true;
  }
});
