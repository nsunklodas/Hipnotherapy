const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navi = document.querySelector("nav");
const footer = document.querySelector("footer");
let lastScrollY = window.scrollY;



window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        navi.classList.add("nav--hidden");
        footer.classList.add("footer--hidden");
    } else {
        navi.classList.remove("nav--hidden");
        footer.classList.remove("footer--hidden");
    }

    lastScrollY = window.scrollY;
});



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    nav.classList.toggle("active")
});

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    nav.classList.remove("active")
}));

function function1() {
    var article = document.getElementById("article1");
    article.classList.toggle("big1");
};

function function2() {
    var article1 = document.getElementById("article2");
    article1.classList.toggle("big2");
};

function function3() {
    var article = document.getElementById("article3");
    article.classList.toggle("big3");
};

function function4() {
    var article1 = document.getElementById("article4");
    article1.classList.toggle("big4");
}


