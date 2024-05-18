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
                    adjustPaths(el); // Ajusto las rutas relativas
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
    const path = window.location.pathname.split('/');
    const repository = 'https://github.com/MaLujan/grupo17_comision24265'; 
    const index = path.indexOf(repository);
    const depth = path.length - index - 1; 
    let relativePath = '';
    for (let i = 0; i < depth; i++) {
        relativePath += '../';
    }
    return relativePath;
}

document.addEventListener('DOMContentLoaded', includeHTML);
