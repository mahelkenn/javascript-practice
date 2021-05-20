
const button = document.querySelector(".button");
const h1 = document.querySelector("h1");

const menu = button.addEventListener("click", function () {
    h1.classList.remove("hide");
});