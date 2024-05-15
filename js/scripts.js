document.addEventListener("DOMContentLoaded", function() {
    // Cargar el encabezado desde el archivo header.html
    fetch('../partials/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    // Cargar el pie de página desde el archivo footer.html
    fetch('../partials/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});