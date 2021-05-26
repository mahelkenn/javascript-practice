// Dropdown menu section //
const button = document.querySelector(".button");
const dropdown = document.querySelector(".dropdown");


const menu = button.addEventListener("click", function () {
    if (dropdown.classList.contains("hide")) {
        dropdown.classList.remove("hide");    
    }
    else {
        dropdown.classList.add("hide");
    };
});

// Coloring Section //

const click = function (color) {
    let color1 = document.querySelectorAll(`.${color}`);
    
    color1.forEach(function(c1, index) {
        c1.addEventListener("click", function() {
            c1.style.background = `${color}`;
            c1.innerText = "";
        });
    });
};

click("orange");
click("blue");
click("black");
click("green");
click("yellow");
click("purple");
click("turquoise");
click("red");

// Counter Section //
const resetButton = document.querySelector("#reset");
const increaseButton = document.querySelector("#increase");
const decreaseButton = document.querySelector("#decrease");
const counter = document.querySelector("#counter");
let counterValue = 0;

resetButton.addEventListener("click", function() {
    counterValue = 0;
    counter.innerText = `${counterValue}`;
    color(counterValue);
})

increaseButton.addEventListener("click", function() {
    counterValue += 1;
    counter.innerText = `${counterValue}`;
    color(counterValue);
})

decreaseButton.addEventListener("click", function() {
    counterValue -= 1;
    counter.innerText = `${counterValue}`;
    color(counterValue);
})

const color = function(counterValue) {
    if (counterValue > 0) {
        counter.style.color = "green";
    } else if (counterValue < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
}