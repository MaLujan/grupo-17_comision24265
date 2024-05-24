document.getElementById("contactForm").addEventListener("submit", function(event) {
    let valid = true;

    // Validación del nombre
    const nombre = document.getElementById("nombre").value;
    const errorNombre = document.getElementById("errorNombre");
    const nombreRegex = /^[a-zA-Z\s]+$/;

    if (!nombre) {
        errorNombre.textContent = "Este campo es obligatorio.";
        errorNombre.style.display = "block";
        valid = false;
    } else if (!nombreRegex.test(nombre)) {
        errorNombre.textContent = "El nombre no debe contener números.";
        errorNombre.style.display = "block";
        valid = false;
    } else {
        errorNombre.style.display = "none";
    }

    // Validación del email
    const email = document.getElementById("email").value;
    const errorEmail = document.getElementById("errorEmail");

    if (!email) {
        errorEmail.style.display = "block";
        valid = false;
    } else {
        errorEmail.style.display = "none";
    }

    // Validación del asunto
    const asunto = document.getElementById("asunto").value;
    const errorAsunto = document.getElementById("errorAsunto");

    if (!asunto) {
        errorAsunto.style.display = "block";
        valid = false;
    } else {
        errorAsunto.style.display = "none";
    }

    // Validación del mensaje
    const mensaje = document.getElementById("mensaje").value;
    const errorMensaje = document.getElementById("errorMensaje");

    if (!mensaje) {
        errorMensaje.style.display = "block";
        valid = false;
    } else {
        errorMensaje.style.display = "none";
    }

    // Validación de los términos y condiciones
    const terminos = document.getElementById("terminos").checked;
    const errorTerminos = document.getElementById("errorTerminos");

    if (!terminos) {
        errorTerminos.style.display = "block";
        valid = false;
    } else {
        errorTerminos.style.display = "none";
    }

    // Si algún campo no es válido, prevenir el envío del formulario
    if (!valid) {
        event.preventDefault();
    }
});
