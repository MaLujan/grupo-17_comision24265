document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar un componente HTML
    function loadComponent(id, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(error => console.error('Error al cargar el componente:', error));
    }

    // Cargar el header y footer
    loadComponent('header', '../components/header.html');
    loadComponent('footer', '../components/footer.html');
});


