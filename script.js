const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    nav.classList.toggle("active")
})

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    nav.classList.remove("active")
}));



