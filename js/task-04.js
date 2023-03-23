const counter = document.querySelector('#counter');
const value = counter.querySelector("#value");

const decrBtn = counter.querySelector("button[data-action='decrement']");

const incrBtn = counter.querySelector("button[data-action='increment']");


let counterValue = 0;

decrBtn.addEventListener("click", () => {
    counterValue --
    value.textContent = counterValue;
});

incrBtn.addEventListener("click", () => {
    counterValue++
    value.textContent = counterValue;
});