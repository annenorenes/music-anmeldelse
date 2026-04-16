async function henterData() {
    try {
        const res = await fetch('/api/alle_album');
        const data = await res.json();
        console.log(data);

        const utskrift = document.getElementById("album_liste");
        utskrift.innerHTML = "";

        for (let i = 0; i < data.length; i++){

            let albumDiv = document.createElement("div"); //oppretter et div element for hver som printes ut
            albumDiv.className = "album";

            let albumNavn = document.createElement("h3");
            albumNavn.innerText = data[i].titel;


        

        }
    }

    catch (error) {
        console.log = "Kunne ikke hente ut dataene";
    }
    
}

henterData();