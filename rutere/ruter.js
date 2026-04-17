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

module.exports = router;