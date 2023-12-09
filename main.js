const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const elementosMenu = document.querySelectorAll(".nav a"); // Selecciona todos los elementos <a> dentro del menú

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

elementosMenu.forEach(elemento => {
    elemento.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});