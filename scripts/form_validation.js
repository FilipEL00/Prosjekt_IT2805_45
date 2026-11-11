
/* ==========================================
   FORM VALIDATION - CONTACT PAGE
   Henriksen Lyd- og Sceneproduksjon
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Find the contact form
    const form = document.querySelector(".contact form");

    // Stop if the form does not exist
    if (!form) {
        return;
    }

    // Select input fields
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const titleInput = document.getElementById("title");
    const dateInput = document.getElementById("date");
    const descriptionInput = document.getElementById("description");

    // Check that the required fields exist
    if (!nameInput || !emailInput || !titleInput || !descriptionInput) {
        return;
    }

    // Display error messages
    function showError(input, message) {
        input.setCustomValidity(message);
        input.reportValidity();
    }

    // Clear error messages
    function clearError(input) {
        input.setCustomValidity("");
    }

    // Remove errors when the user edits a field
    [nameInput, emailInput, titleInput, descriptionInput].forEach(input => {
        input.addEventListener("input", function () {
            clearError(input);
        });
    });

    // Validate the form when submitted
    form.addEventListener("submit", function (event) {

        // Clear previous validation errors
        [nameInput, emailInput, titleInput, descriptionInput].forEach(
            clearError
        );

        // Validate full name
        if (nameInput.value.trim().length < 2) {
            event.preventDefault();

            showError(
                nameInput,
                "Vennligst skriv inn navnet ditt (minst 2 tegn)."
            );
            return;
        }

        // Validate email address
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput.value.trim())) {
            event.preventDefault();

            showError(
                emailInput,
                "Vennligst skriv inn en gyldig e-postadresse."
            );
            return;
        }

        // Validate project title
        if (titleInput.value.trim().length < 3) {
            event.preventDefault();

            showError(
                titleInput,
                "Prosjekttittelen må inneholde minst 3 tegn."
            );
            return;
        }

        // Validate optional date
        if (dateInput && dateInput.value) {
            const selectedDate = new Date(dateInput.value + "T00:00:00");

            if (Number.isNaN(selectedDate.getTime())) {
                event.preventDefault();

                showError(
                    dateInput,
                    "Vennligst velg en gyldig dato."
                );
                return;
            }
        }

        // Validate project description
        if (descriptionInput.value.trim().length < 10) {
            event.preventDefault();

            showError(
                descriptionInput,
                "Beskrivelsen må inneholde minst 10 tegn."
            );
            return;
        }

        
        // Check HTML5 validity as well
        if (!form.checkValidity()) {
            event.preventDefault();
            form.reportValidity();
            return;
        }

        // Validation successful
        event.preventDefault();

        alert(
            "Skjemaet er validert! " +
            "Dette er en demonstrasjon, " +
            "og ingen e-post er sendt."
        );

    });

});
