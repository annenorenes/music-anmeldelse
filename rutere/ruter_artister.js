const express = require('express'); //gjør ekxpress tilgjengelig. filen
const router = express.Router(); //vi oppretter en variabel ved hjelp av express sin innebyggede router verktøy. På denne måten kan ruteren håndtere foresprøsmåler
const db = require('../database'); //sier at varibelen db 

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
