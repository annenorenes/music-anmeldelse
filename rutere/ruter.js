const express = require('express');
const router = express.Router();
const db = require('../database');


router.get('/hente_alle_album', (req, res) => {
    try {
        const album = db.prepare('SELECT * FROM utgivelse;').all();
        res.json(album);
        
    }

    catch (error) {
        res.status(500).json({
            error: "Feil ved henting av album"
        });
    }
})

router.get('/hente_alle_artister', (req, res) => {
    try {
        const artister = db.prepare('SELECT * FROM artist;').all();
        res.json(artister);
    }

    catch (error) {
        res.status(500).json({
            error: "Feil ved henting av artister"
        });
    }
});


router.post('/skriv_anmeldelse', (req, res) => {
    try {
        const {dato, kommentar, rating, utgivelses_id } = req.body; //body er en varibalen, som består av fire verdier (dato, kommentar, rating, utgivelses_id) med data, som skal sendes inn i databasen. Vi requester å sende daten til de fire verdiene inn

        //gjør deg klar til å legge til data i databsen
        const leggTil = db.prepare(` 
            INSERT INTO anmeldelse (dato, kommentar, rating, utgivelses_id)
            VALUES (?, ?, ?, ?)
        `);
        
        leggTil.run(dato, kommentar, rating, utgivelses_id); //run() bruker når vi skal endre data i databaser

        res.json({ message: "Anmeldelsen ble lagret!" });
    } catch (error) {
        console.error("SQL FEIL:", error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router; //Exporterer ruterene slik at det er mulig å hente api endepunktene 

