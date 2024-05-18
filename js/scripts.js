document.addEventListener("DOMContentLoaded", function() {
    // Cargo el header desde index.html
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

