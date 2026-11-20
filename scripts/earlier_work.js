
document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");
    const dialog = document.getElementById("project-dialog");
    if (!dialog || projectCards.length === 0) {
        return;
    }

    const dialogImage = dialog.querySelector(".dialog-image");
    const dialogCategory = dialog.querySelector(".dialog-category");
    const dialogTitle = dialog.querySelector(".dialog-title");
    const dialogDescription = dialog.querySelector(".dialog-description");
    const closeButton = dialog.querySelector(".dialog-close");

    // Åpne prosjektvindu
    projectCards.forEach((card) => {
        card.addEventListener("click", () => {
            const image = card.querySelector("img");
            const category = card.querySelector(".project-category");
            const title = card.querySelector("h3");
            const description = card.querySelector(".project-description");

            if (!image || !category || !title || !description) {
                return;
            }

            // Hent informasjon fra prosjektkortet
            dialogImage.src = image.src;
            dialogImage.alt = image.alt;

            dialogCategory.textContent = category.textContent;
            dialogTitle.textContent = title.textContent;
            dialogDescription.textContent = description.dataset.fullDescription
                || description.textContent;

            // Vis vinduet
            dialog.showModal();
        });
    });
    // Lukk med X-knappen
    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    // Lukk ved å trykke utenfor vinduet
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
});
