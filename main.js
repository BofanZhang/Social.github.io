const element = document.querySelector(`#test1`);
const element1 = document.querySelector(`#test2`);

let isAnimated1 = false;
let isAnimated = false;

var str = `This is the first line\nand this is the second line`;
// Fix This Part In Order to Fit An Size Msg into the Box
let msg = "<b>The Enlightenment: </b>" + "<br>" + "The Enlightenment was...";
element.addEventListener(`click`, () => {
  if (isAnimated) {
    element.classList.remove(`Forward`);
    element.classList.add(`Backwards`);
    isAnimated = false;
  } else {
    element.classList.remove(`Backwards`);
    document.getElementById("test1").innerHTML = msg;
    element.classList.add(`Forward`);
    isAnimated = true;
  }
});

element1.addEventListener(`click`, () => {
  if (isAnimated1) {
    element1.classList.remove(`element1`);
    element1.classList.add(`Backwards`);
    isAnimated1 = false;
  } else {
    element1.classList.remove(`Backwards`);
    element1.classList.add(`element1`);
    isAnimated1 = true;
  }
});
