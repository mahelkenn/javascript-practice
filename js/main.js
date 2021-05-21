
const button = document.querySelector(".button");
const h2 = document.querySelectorAll("h2");

const menu = button.addEventListener("click", function () {
    h2.classList.remove("hide");
});