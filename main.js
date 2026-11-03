// Seleccionamos la cabecera
const cabecera = document.querySelector('.cabecera');


// Escuchamos el evento de scroll en la ventana
window.addEventListener('scroll', function() {
    // Si bajamos más de 10 píxeles, agregamos una sombra
    if (window.scrollY > 10) {
        cabecera.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    } else {
        // Si volvemos arriba, quitamos la sombra
        cabecera.style.boxShadow = 'none';
    }
});