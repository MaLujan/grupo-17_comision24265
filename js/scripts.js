//Header and footer 

document.addEventListener("DOMContentLoaded", function() {
    // Cargo el header y footer desde index.html
    fetch('../index.html')
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
