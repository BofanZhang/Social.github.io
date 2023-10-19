const element = document.querySelector(`#test1`);
const element2 = document.querySelector(`#test2`);
let isAnimated = false;
let isAnimated2 = false;

var str = `This is the first line\nand this is the second line`;
// Fix This Part In Order to Fit An Size Msg into the Box

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

element2.addEventListener(`click`, () => {
  if (isAnimated2) {
    element2.classList.remove(`Forward`);
    element2.classList.add("Backwards");
    isAnimated2 = false;
  } else {
    element2.classList.remove(`Backwards`);
    element2.classList.add(`Forward`);
    isAnimated2 = true;
  }
});
