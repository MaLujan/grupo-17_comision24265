document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');
    const terminos = document.getElementById('terminos');

    const errorNombre = document.getElementById('errorNombre');
    const errorEmail = document.getElementById('errorEmail');
    const errorAsunto = document.getElementById('errorAsunto');
    const errorMensaje = document.getElementById('errorMensaje');
    const errorTerminos = document.getElementById('errorTerminos');

    // Validación de nombre
    if (nombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, ingrese su nombre.';
        errorNombre.style.display = 'block';
        valid = false;
    } else if (!/^[a-zA-Z]+$/.test(nombre.value)) {
        errorNombre.textContent = 'El nombre no puede contener números.';
        errorNombre.style.display = 'block';
        valid = false;
    } else {
        errorNombre.style.display = 'none';
    }

    // Validación de email, asunto, mensaje y términos
    // (mismo código que antes)

    // Si no es válido, prevenir el envío del formulario
    if (!valid) {
        event.preventDefault();
    }
});
