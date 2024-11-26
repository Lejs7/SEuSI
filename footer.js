
const template = document.createElement('template');
template.innerHTML = `
     <footer class="bg-light py-4 mt-auto">
    <div class="container">
        <div class="row">
            <div class="col-md-6 text-center text-md-start">
                <p class="mb-0">&copy; 2024 Museoguide. Alle Rechte vorbehalten.</p>
            </div>
            <div class="col-md-6 text-center text-md-end">
                <a href="Datenschutz.html" class="text-decoration-none mx-2">Datenschutz</a>
                <a href="Impressum.html" class="text-decoration-none mx-2">Impressum</a>
            </div>
        </div>
    </div>
</footer>

`
document.body.appendChild(template.content);
