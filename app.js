// 1. IMPORTS (Henter biblioteker)
const express = require('express');
const path = require('path');
const cors = require('cors');
const Database = require('better-sqlite3');

// 2. INITIALIZATION (Oppretter appen og databasen)
const app = express();
const db = new Database('musikk.db');
const PORT = 3000;

// 3. MIDDLEWARE (Konfigurasjon - rekkefølge her er viktig!)
app.use(cors());
app.use(express.json());
app.use(express.static('public')); 



// Denne linjen må stå ETTER "const app = express();"
app.use('/bilder', express.static(path.join(__dirname, 'bilder')));

// 4. RUTOR (Logikk)
app.get('/api/alle_artister', (req, res) => {
    try {
        const artister = db.prepare('SELECT * FROM artist;').all();
        res.json(artister);
    } catch (error) {
        res.status(500).json({ error: "Feil ved henting av artister" });
    }
});

app.get('/api/alle_album', (req, res) => {
    const album = db.prepare('SELECT * FROM utgivelse;').all();
    res.json(album);
});

// 5. START SERVER
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});