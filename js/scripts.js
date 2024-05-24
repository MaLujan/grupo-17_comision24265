//Header and footer 

document.addEventListener("DOMContentLoaded", function() {
    // Cargo el header y footer desde index.html
    fetch('./index.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const header = doc.getElementById('header').innerHTML;
            document.getElementById('header-placeholder').innerHTML = header;

            const footer = doc.getElementById('footer').innerHTML;
            document.getElementById('footer-placeholder').innerHTML = footer;
        });
});

//-------------------------------------------------------------------------------------

//Contenedor seccion deportes + info

document.addEventListener("DOMContentLoaded", function() {
    function createMasInfoSection() {
        return `
            <div class="mas-info">
                <h1 class="fuente-principal title-masinfo">+ INFO</h1>
                <p class="fuente-secundaria font-size-consulte">SEDE SOCIAL:  C. 17 1498, Gonnet, Provincia de Buenos Aires</p>
            </div>
        `;
    }

    function appendSectionToContainers(containerClass) {
        const containers = document.getElementsByClassName(containerClass);
        if (containers.length > 0) {
            for (let i = 0; i < containers.length; i++) {
                containers[i].innerHTML += createMasInfoSection();
            }
        } else {
            console.error(`Containers with class ${containerClass} not found.`);
        }
    }

    // Agrego el contenedor + info
    appendSectionToContainers('mas-info-container');
});

document.getElementById("clubForm").addEventListener("submit", function(event) {
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
        errorNombre.textContent = "El nombre no puede contener un número.";
        errorNombre.style.display = "block";
        valid = false;
    } else {
        errorNombre.style.display = "none";
    }

    // Validación del email
    const email = document.getElementById("email").value;
    const errorEmail = document.getElementById("errorEmail");

    if (!email) {
        errorEmail.textContent = "Este campo es obligatorio.";
        errorEmail.style.display = "block";
        valid = false;
    } else {
        errorEmail.style.display = "none";
    }

    // Validación de la edad
    const edad = document.getElementById("edad").value;
    const errorEdad = document.getElementById("errorEdad");

    if (!edad) {
        errorEdad.textContent = "Este campo es obligatorio.";
        errorEdad.style.display = "block";
        valid = false;
    } else {
        errorEdad.style.display = "none";
    }

    // Validación de los términos y condiciones
    const terminos = document.getElementById("terminos").checked;
    const errorTerminos = document.getElementById("errorTerminos");

    if (!terminos) {
        errorTerminos.textContent = "Debe aceptar los términos y condiciones.";
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