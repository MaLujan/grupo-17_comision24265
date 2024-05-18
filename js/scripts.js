function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(el => {
        const file = el.getAttribute('data-include');
        if (file) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    el.innerHTML = data;
                    el.removeAttribute('data-include');
                    adjustPaths(el); // Ajusta las rutas relativas
                    includeHTML(); // Llama recursivamente para incluir elementos anidados
                })
                .catch(err => console.error('Error including HTML:', err));
        }
    });
}

function adjustPaths(container) {
    const links = container.querySelectorAll('a[data-root]');
    links.forEach(link => {
        const href = link.getAttribute('href');
        const depth = getRelativeDepth();
        const newHref = depth + href;
        link.setAttribute('href', newHref);
    });
}

function getRelativeDepth() {
    const path = window.location.pathname;
    const depth = path.split('/').length - 2; // -2 porque el último elemento es el archivo y el primero es vacío
    let relativePath = '';
    for (let i = 0; i < depth; i++) {
        relativePath += '../';
    }
    return relativePath;
}

document.addEventListener('DOMContentLoaded', includeHTML);
