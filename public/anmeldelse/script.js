async function sendAnmeldelse(event) {
    event.preventDefault(); // Stopper siden fra å laste på nytt

    // 1. Henter ut verdiene fra input-feltene i HTML
    const dato = document.getElementById("dato_felt").value;
    const kommentar = document.getElementById("kommentar_felt").value;
    const rating = document.getElementById("rating_felt").value;
    
    // Vi må vite hvilket album dette gjelder (f.eks. fra URL-en)
    const urlParams = new URLSearchParams(window.location.search);
    const utgivelses_id = urlParams.get('id');

    // 2. Lager objektet som skal sendes
    const nyAnmeldelse = {
        dato: dato,
        kommentar: kommentar,
        rating: Number(rating),
        bruker_id: 1, // Midlertidig hardkodet til vi har innlogging
        utgivelses_id: Number(utgivelses_id)
    };

    try {
        // 3. SENDER DATA TIL BACKEND (POST)
        const respons = await fetch('/api/skriv_anmeldelse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Forteller serveren at dette er JSON
            },
            body: JSON.stringify(nyAnmeldelse) // Gjør objektet om til tekst
        });

        if (respons.ok) {
            const resultat = await respons.json();
            alert(resultat.message);
            window.location.href = "/oversikt_album/index.html"; // Gå tilbake
        } else {
            alert("Noe gikk galt ved lagring.");
        }
    } catch (error) {
        console.error("Feil ved fetch:", error);
    }
}

// Koble funksjonen til skjemaet
document.getElementById("anmeldelse_skjema").addEventListener("submit", sendAnmeldelse);