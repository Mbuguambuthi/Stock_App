const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".btn-danger");
const display = document.getElementById("display");



let count = 0;

incrementBtn.addEventListener("click", () => {
    count += 4;
    display.textContent = count;


});

decrementBtn.addEventListener("click", () => {
    count -= 4;
    display.textContent = count;


});

resetBtn.addEventListener("click", () => {
    count = 0;
    display.textContent = count;

});