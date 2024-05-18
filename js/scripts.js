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
                    includeHTML(); // Llama recursivamente para incluir elementos anidados
                })
                .catch(err => console.error('Error including HTML:', err));
        }
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);


document.addEventListener('DOMContentLoaded', includeHTML);
