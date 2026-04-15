// henter ut infroen fra apien, og sender det ut som en array i consolloggen
async function henter_alle_artister() {
    try {

        const response = await fetch('/api/alle_artister');
        const data = await response.json();
        console.log(data);

        const utskrift = document.getElementById("artist_liste");
        utskrift.innerHTML = "";

        //siden arrayen 'data' består kun av lister, så trenger vi bare en for løkke
        for (let i = 0; i < data.length; i++){
             //jeg oppretter en div beholder for hver artist

             let artistDiv = document.createElement("div");
             artistDiv.className = "artister"; // Setter HTML-attributtet class="artister" på elementet, og nytting for css

             let navn = document.createElement("h3");
             navn.innerText = data[i].artist_navn;

             let bilde = document.createElement("img");
             bilde.src = "/bilder/" + data[i].bilde;
             bilde.alt = "Bilde er av" + data[i].artist_navn;
             bilde.style.width = "150px";

             artistDiv.appendChild(navn);
             artistDiv.appendChild(bilde);

             //Putt hele artist-diven inn i hovedutskriften på nettsiden
             utskrift.appendChild(artistDiv);


        }
       


    }
    
    catch (error){
        console.error("kunne ikke hente artistene:", errror)

    }
}

henter_alle_artister();




