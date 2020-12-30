const closeNavBtn = document.querySelector(".close-nav");
const openNavBtn = document.querySelector(".open-nav")
const nav = document.querySelector(".nav");

closeNavBtn.addEventListener("click", () => {  
    nav.classList.remove("navigation-open")
});

openNavBtn.addEventListener("click", () => {  
    nav.classList.add("navigation-open")
});
