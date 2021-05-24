
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

const orange = document.querySelectorAll(".orange");
const blue = document.querySelectorAll(".blue");

orange.forEach(function(o, index) {
    o.addEventListener("click", function() {
        o.style.background = "orange";
    });
});

blue.forEach(function(b, index) {
    b.addEventListener("click", function() {
        b.style.background = "blue";
    });
});