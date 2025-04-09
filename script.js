document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });
});
document.addEventListener("DOMContentLoaded", function(){
    const imagen = document.getElementById("planta-img");
    const texto = document.getElementById("text-descripcion");
    imagen.addEventListener("click", function() {
        texto.classList.toggle("mostrar");
    });
});
function fijarDescripcion(elemento) {
    const plantas = document.querySelectorAll('.planta');
    plantas.forEach(planta => {
        if (planta !== elemento) {
            planta.classList.remove('fija');
        }
    });
    elemento.classList.toggle('fija');
}
function toggleDetalle(card) {
    const cards = document.querySelectorAll('.cos-card');
    cards.forEach(c => {
        if (c !== card) c.classList.remove('activa');
    });

    card.classList.toggle('activa');
}
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.planta-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
});