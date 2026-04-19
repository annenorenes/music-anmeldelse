// Kode for å sende data om en ny anmeldelse til serveren
document.getElementById('skjema').addEventListener('submit', async function(event) {
    event.preventDefault(); // Forhindrer at siden refresher når formen sendes inn
    
    // 1. Henter ut id fra nettadressen (URL-en)
    const params = new URLSearchParams(window.location.search);
    const utgivelses_id = params.get("id"); // OBS: Sjekk om URL-en din slutter på ?id=1 eller ?utgivelses_id=1

    // 2. Henter ut data fra form-feltene
    const dato = document.getElementById("dato").value;
    const kommentar = document.getElementById("kommentar").value;
    const rating = document.getElementById("rating").value;

    // 3. Kontrollerer at vi har fått data (Læreren din elsker console.log for sjekk!)
    console.log({ dato, kommentar, rating, utgivelses_id });

    try {
        // 4. Sender dataen til serveren via et POST-kall
        const response = await fetch('/api/skriv_anmeldelse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ dato, kommentar, rating, utgivelses_id })
        });

        // 5. Sjekker om responsen fra serveren var vellykket
        if (response.ok) {
            alert('Anmeldelsen er registrert!');
            // Her kan du evt legge til: window.location.href = "oversikt.html"; for å sende brukeren videre
        } else {
            alert('Det skjedde en feil ved registrering av anmeldelsen.');
        }
    } catch (error) {
        console.error("Kunne ikke koble til serveren:", error);
    }
});