// async function sendAnmeldelse() {
//     const params = new URLSearchParams(window.location.search);
//     const utgivelses_id = params.get("utgivelses_id");

//     const dato = document.getElementById("dato").value;
//     const kommentar = document.getElementById("kommentar").value;
//     const rating = document.getElementById("rating").value;

//     try {
//         const response = await fetch('/api/skriv_anmeldelse', {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ dato, kommentar, rating, utgivelses_id })
//         });

//         const data = await response.json();
//         console.log(data);

//         if (data.message) {
//             alert("Anmeldelse sendt!");
//         } else {
//             alert("Feil: " + data.error);
//         }
//     }

//     catch (error) {
//         console.log("Kunne ikke sende anmeldelse");
//     }
// }

// document.getElementById("skjema").addEventListener("submit", function (e) {
//     e.preventDefault();
//     sendAnmeldelse();
// });



const skjema = document.getElementById("skjema")

skjema.addEventListener("submit", async function (info) {
    info.preventDefault();

    const params = new URLSearchParams(window.location.search); //params for
    const utgivelses_id = params.get("id");

    const dato = document.getElementById("dato").value;
    const kommentar = document.getElementById("kommentar").value;
    const rating = document.getElementById("rating").value;

    console.log({dato, kommentar, rating, utgivelses_id})

    try {
        const response = await fetch('/api/skriv_anmeldels', { 
            method: 'Post', 
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({dato, kommentar, rating, utgivelses_id})
        });

        if (response.ok){
            alert('Anmeldelsen har blitt send');
        } else {
            alert('Det skjedde en feil ')
        }
    } catch (error){
        console.error("Kunne ikke koble til til serveren", error);
    }



})