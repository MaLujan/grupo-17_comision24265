document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar un componente HTML
    function loadComponent(id, url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar el componente: ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(error => console.error(error));
    }

    // Cargo el header y footer
    loadComponent('header', '/components/header.html'); // Ruta relativa para GitHub Pages
    loadComponent('footer', '/components/footer.html'); // Ruta relativa para GitHub Pages
});
