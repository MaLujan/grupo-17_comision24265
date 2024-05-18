// Función para cargar contenido HTML desde un archivo y agregarlo a un elemento
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Obtener la ruta relativa del archivo
function getRelativePath(file) {
    const basePath = window.location.pathname.split('/').slice(0, -3).join('/');
    return `${basePath}/${file}`;
}

// Cargar header y footer cuando el documento está listo
document.addEventListener("DOMContentLoaded", function() {
    loadHTML("header", getRelativePath("header.html"));
    loadHTML("footer", getRelativePath("footer.html"));
});
