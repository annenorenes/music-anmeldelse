// henter ut infroen fra apien, og sender det ut som en array i consolloggen
async function henter_alle_artister() {
    try {

        const response = await fetch('/api/alle_artister');
        const data = await response.json();
        console.log(data);

        const utskrift = document.getElementById("artist_liste");
        utskfit.innerHTML = "";

        //jeg oppretter en div beholder for hver artist
        

    }
    
    catch (error){
        console.error("kunne ikke hente artistene:", errror)

    }
}

henter_alle_artister();




