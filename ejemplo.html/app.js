// ===== FORMULARIO =====
const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    if (nombre.value.trim() === '') {
        mensaje.textContent = 'Por favor, ingresa tu nombre.';
        return;
    }

    mensaje.textContent = '¡Bienvenido a la clase, ' + nombre.value + '!';
});

// ===== TARJETA =====
const tarjeta = document.getElementById('tarjeta');
const btnAzul = document.getElementById('btnAzul');
const btnVerde = document.getElementById('btnVerde');
const btnRojo = document.getElementById('btnRojo');

btnAzul.addEventListener('click', function() {
    tarjeta.style.backgroundColor = 'blue';
});

btnVerde.addEventListener('click', function() {
    tarjeta.style.backgroundColor = 'green';
});

btnRojo.addEventListener('click', function() {
    tarjeta.style.backgroundColor = 'red';
});