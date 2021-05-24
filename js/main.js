
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