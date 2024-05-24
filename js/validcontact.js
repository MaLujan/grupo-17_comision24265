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
        errorNombre.style.display = 'block';
        valid = false;
    } else {
        errorNombre.style.display = 'none';
    }

    // Validación de email
    if (email.value.trim() === '') {
        errorEmail.style.display = 'block';
        valid = false;
    } else {
        errorEmail.style.display = 'none';
    }

    // Validación de asunto
    if (asunto.value === '') {
        errorAsunto.style.display = 'block';
        valid = false;
    } else {
        errorAsunto.style.display = 'none';
    }

    // Validación de mensaje
    if (mensaje.value.trim() === '') {
        errorMensaje.style.display = 'block';
        valid = false;
    } else {
        errorMensaje.style.display = 'none';
    }

    // Validación de términos y condiciones
    if (!terminos.checked) {
        errorTerminos.style.display = 'block';
        valid = false;
    } else {
        errorTerminos.style.display = 'none';
    }

    // Si no es válido, prevenir el envío del formulario
    if (!valid) {
        event.preventDefault();
    }
});