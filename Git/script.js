"use strict";
const loadingElement = document.getElementsByClassName("loading")[0];
setTimeout(() => {
    loadingElement.classList.add("active");
}, 10);
window.addEventListener("click", () => {
    loadingElement.classList.remove("loading");
    setTimeout(() => {
        loadingElement.classList.add("loading");
    }, 10);
});