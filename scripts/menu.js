document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    navbar.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <!-- LOGO -->
                <a href="index.html" class="nav-logo">
                    <img src="Henriksen_logoer_SVG/Henriksen_hvit_logo_transparent.svg">
                    </span>
                </a>

                <!-- HAMBURGER MENY KNAPP -->
                <button class="menu-toggle"
                        aria-label="Åpne navigasjonsmeny"
                        aria-expanded="false"
                        aria-controls="nav-links">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <!-- NAVIGATION LINKER -->
                <ul class="nav-links" id="nav-links">
                    <li>
                        <a href="index.html">HJEM</a>
                    </li>
                    <li>
                        <a href="information.html">OM MEG</a>
                    </li>
                    <li>
                        <a href="portfolio.html">CV / PORTEFØLJE</a>
                    </li>
                    <li>
                        <a href="contact.html">KONTAKT</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;

    // MENY PÅ MOBIL
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");
        menuToggle.classList.toggle("open", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Lukk navigasjonsmeny" : "Åpne navigasjonsmeny"
        );
    });

    // LUKK MENY NÅR LINK TRYKKES PÅ
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    // AKTIV SIDE
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-links a").forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
});