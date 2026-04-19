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

            let albumTitle = document.createElement("h3");
            albumTitle.innerText = data[i].titel;

            let albumBilde = document.createElement("img");
            albumBilde.src = "/bilder/" + data[i].utgivelses_bilde;
            albumBilde.alt = "/bildet er av" + data[i].albumTitle;
            albumBilde.style.width = "150px";

            let anmeldelseKnapp = document.createElement("a");
            anmeldelseKnapp.href = "../anmeldelse/index.html?utgivelses_id=" + data[i].utgivelses_id;
            anmeldelseKnapp.innerText = "⭐ Skriv anmeldelse";



        
            albumDiv.appendChild(albumTitle);
            albumDiv.appendChild(albumBilde);
            albumDiv.appendChild(anmeldelseKnapp);


            utskrift.appendChild(albumDiv);
        }
    }

    catch (error) {
        console.log = "Kunne ikke hente ut dataene";
    }
    
}

henterData();

