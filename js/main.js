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

// Review Section //
const back = document.querySelector("#back");
const forward = document.querySelector("#forward");
const reviewDescription = document.querySelector("#review-descrip");
const name = document.querySelector(".name");

back.addEventListener("click", function() {
    let p = pickReview();
    name.innerText = `${p.name}`;
    reviewDescription.innerText = `${p.review}`;
});

forward.addEventListener("click", function() {
    let p = pickReview();
    name.innerText = `${p.name}`;
    reviewDescription.innerText = `${p.review}`;
});

const reviewDetails = function(name, reviewDescrip) {
    const review = {
        name: name,
        review: reviewDescrip
    }
    return review;
};

const tom = reviewDetails("Tom", "LOVE IT");
const barb = reviewDetails("Barb", "Best thing ever");
const peter = reviewDetails("Peter", "Not my fave");
const jan = reviewDetails("Jan", "Can't wait to return!");

const reviewers = [tom, barb, peter, jan];

const pickReview = function () {
    let random = Math.random() * 4;
    let index = Math.floor(random);
    return reviewers[index];
};

// Quiz Section //
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const right = document.querySelector(".right");
const wrong = document.querySelector(".wrong");

one.addEventListener("click", function() {
    wrong.classList.remove("hide");
});

two.addEventListener("click", function() {
    wrong.classList.remove("hide");
});

three.addEventListener("click", function() {
    wrong.classList.remove("hide");
});

four.addEventListener("click", function() {
    wrong.classList.add("hide");
    right.classList.remove("hide");
});