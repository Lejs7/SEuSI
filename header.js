const template = document.createElement('template');
template.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">Museoguide</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Navigation umschalten">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Museumsinfo">Museumsinfo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Qr-code">qr-code</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Kontakt">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
`
document.body.appendChild(template.content);
