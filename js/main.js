
const button = document.querySelector(".button");
const h2 = document.querySelectorAll("h2");
const dropdown = document.querySelector(".dropdown");


const menu = button.addEventListener("click", function () {
    if (dropdown.classList.contains("hide")) {
        dropdown.classList.remove("hide");    
    }
    else {
        dropdown.classList.add("hide");
    };
});