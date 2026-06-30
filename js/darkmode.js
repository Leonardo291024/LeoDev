// Seleccionamos el botón por su ID
const btn = document.getElementById('theme-toggle');

// Añadimos el evento de clic
btn.addEventListener('click', () => {
    // Alterna la clase 'light-mode' en el elemento body
    document.body.classList.toggle('light-mode');
    
    // Documentación: Si el body tiene la clase, el CSS usará los colores claros.
    console.log("El tema ha sido cambiado.");
});