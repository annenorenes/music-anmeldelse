async function henter_alle_artister() {
    const response = await fetch('/api/alle_artister');
    const data = await response.json();
    console.log(data);
}

henter_alle_artister();

