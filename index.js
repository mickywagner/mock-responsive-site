const closeNavBtn = document.querySelector(".close-nav");
const nav = document.querySelector(".nav");

closeNavBtn.addEventListener("click", () => {  
    nav.classList.remove("navigation-open")
});

