const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".btn-danger");
const display = document.getElementById("display");
const round = document.querySelector(".roundDisplay");



let count = 0;
let counter = 0;

incrementBtn.addEventListener("click", () => {
    count += 4;
    display.textContent = count;

    counter++;
    round.textContent = counter;


});

decrementBtn.addEventListener("click", () => {

    if (count === 0 || counter === 0) {
        count = 0;
        counter = 0;

    }
    else {

        count -= 4;
        counter--;

    };
    display.textContent = count;
    round.textContent = counter;



});

resetBtn.addEventListener("click", () => {
    count = 0;
    counter = 0;
    display.textContent = count;
    round.textContent = counter;



});