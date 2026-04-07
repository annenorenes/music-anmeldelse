// Server-bit, setter opp en Express-app
const express = require('express');
const app = express();

const PORT = 3000;

// Middleware for å servere statiske filer fra "public" mappen
app.use(express.static('public'));

// Databasen
const Database = require('better-sqlite3');
const db = new Database('musikk.db');

// CORS-middleware for å tillate forespørsler fra andre domener
const cors = require('cors');
app.use(cors());

// ...
app.get('/api/alle_artister', (req, res) => {
    // ...
    const artister = db.prepare('SELECT * FROM artist;').all();
    res.json(artister);
});

app.get('/api/alle_album', (req, res) => {
    const album = db.prepare('SELECT * FROM utgivelse;').all();
    res.json(album);
})

// Åpner en viss port på serveren, og starter serveren
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});