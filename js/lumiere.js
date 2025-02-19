
let lumiere = document.querySelector(".lumiere")
window.addEventListener("mousemove", (e)=> {
    lumiere.style.left = e.clientX + "px"
    lumiere.style.top = e.clientY + "px"
})