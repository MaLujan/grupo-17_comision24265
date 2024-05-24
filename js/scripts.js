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

document.getElementById('clubForm').addEventListener('submit', function(event) {
    let valid = true;

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const edad = document.getElementById('edad');
    const terminos = document.getElementById('terminos');

    const errorNombre = document.getElementById('errorNombre');
    const errorEmail = document.getElementById('errorEmail');
    const errorEdad = document.getElementById('errorEdad');
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

    // Validación de edad
    if (edad.value === '') {
        errorEdad.style.display = 'block';
        valid = false;
    } else {
        errorEdad.style.display = 'none';
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
