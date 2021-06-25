// Dropdown menu section // --------------------------------------------------------------------------
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

// Coloring Section // --------------------------------------------------------------------------

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

// Counter Section // --------------------------------------------------------------------------
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

// Review Section // --------------------------------------------------------------------------
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

// Quiz Section // --------------------------------------------------------------------------
const submit = document.querySelector("#submit");
const right = document.querySelector(".right");
const wrong = document.querySelector(".wrong");
const next = document.querySelector("#nextQuestion");
const one = document.querySelector("#one1");
const two = document.querySelector("#two2");
const three = document.querySelector("#three3");
const four = document.querySelector("#four4");

const number = document.querySelector("#num");
const question = document.querySelector("#question");
const end = document.querySelector(".end");
let i = 2;

const createQuestion = function(q, a1, a2, a3, a4, correct) {
    const quesAndAns = {
        q: q,
        a1: a1,
        a2: a2,
        a3: a3,
        a4: a4,
        correct: correct
    };
    return quesAndAns;
};

next.addEventListener("click", function() {
    number.innerText = `Question ${i}`;
    i += 1;
    question.innerText = allQuestions[i-2].q;
    one.innerText = allQuestions[i-2].a1;
    two.innerText = allQuestions[i-2].a2;
    three.innerText = allQuestions[i-2].a3;
    four.innerText = allQuestions[i-2].a4;
    next.classList.add("hide");
    right.classList.add('hide');
});

const colorQuestion = createQuestion("What is the best color?", "blue", "green", "yellow", "none of the above", 4);
const numberQuestion = createQuestion("What is the number of completeness?", "3", "25", "7", "99", 3);
const historyQuestion = createQuestion("When was George Washington born?", "1700", "1732", "1745", "1750", 2);
const stateQuestion = createQuestion("What is the biggest state in the US?", "Texas", "California", "Alaska", "none of the above", 3);
const codingQuestion = createQuestion("What coding language is used to style HTML typically?", "CSS", "BSS", "LSS", "MSS", 1);
const tempQuestion = createQuestion("What temperature is boiling in Celsius?", "212", "100", "87", "none of the above", 2);

const allQuestions = [colorQuestion, numberQuestion, historyQuestion, stateQuestion, codingQuestion, tempQuestion];

submit.addEventListener("click", function() {
    let value = document.querySelector('input[name="choice"]:checked').value;
    if (value==allQuestions[i-2].correct) {
        wrong.classList.add("hide");
        right.classList.remove("hide");
        next.classList.remove("hide");
        if (i == (allQuestions.length + 1)) {
            next.classList.add("hide");
            submit.classList.add("hide");
            question.innerText = "";
            end.classList.remove("hide");
            right.innerHTML = "<span>Woohoo, you made it through the whole quiz - great job!</span>";
        }
    }
    else {
        right.classList.add("hide");
        wrong.classList.remove("hide");
    }
});