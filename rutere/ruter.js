const express = require('express');
const router = express.Router();
const db = require('../database');


router.get('/alle_album', (req, res) => {
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

router.get('/alle_artister', (req, res) => {
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



// router.post('/skriv_anmeldelse', (req, res) => {
//     try {
//         const anmeldelse = db.prepare('SELECT * FROM anmeldelse;').all()
//         req.json(anmeldelse);
//     }
    
//     catch (error) {
//         res.status(500).json({
//             error: "Feil ved innsending av data"
//         })
//     }
// });

// router.post('/skriv_anmeldelse', (req, res) => {
//     try {
//         // 1. Vi henter ut dataene som brukeren sendte fra skjemaet
//         const { dato, kommentar, rating, bruker_id, utgivelses_id } = req.body;

//         // 2. Vi forbereder en INSERT-spørring i stedet for SELECT
//         const leggTil = db.prepare(`
//             INSERT INTO anmeldelse (dato, kommentar, rating, bruker_id, utgivelses_id)
//             VALUES (?, ?, ?, ?, ?)
//         `);

//         // 3. Vi kjører spørringen med dataene fra brukeren
//         leggTil.run(dato, kommentar, rating, bruker_id, utgivelses_id);

//         // 4. Vi sender et svar tilbake om at det gikk bra
//         res.json({ message: "Anmeldelsen ble lagret i databasen!" });
//     } 
//     catch (error) {
//     // Dette skriver den EKTE feilmeldingen i den sorte terminalen din!
//     console.log("--- SQL FEIL START ---");
//     console.error(error.message); 
//     console.log("--- SQL FEIL SLUTT ---");

//     res.status(500).json({
//         error: "Feil ved innsending: " + error.message
//     });
//     }
//     }
// );

router.post('/skriv_anmeldelse', (req, res) => {
    try {
        console.log("BODY:", req.body);

        const { dato, kommentar, rating, bruker_id, utgivelses_id } = req.body;

        console.log("DATA:", dato, kommentar, rating, bruker_id, utgivelses_id);

        const leggTil = db.prepare(`
            INSERT INTO anmeldelse (dato, kommentar, rating, bruker_id, utgivelses_id)
            VALUES (?, ?, ?, ?, ?)
        `);

        leggTil.run(dato, kommentar, rating, bruker_id, utgivelses_id);

        res.json({ message: "Anmeldelsen ble lagret i databasen!" });
    } catch (error) {
        console.error("SQL FEIL:", error.message);

        res.status(500).json({
            error: error.message
        });
    }
});

router.get('/skriv_anmeldelse', (req, res) => {
    res.send("Ruta finst! Bruk POST for å sende data.");
});

module.exports = router;