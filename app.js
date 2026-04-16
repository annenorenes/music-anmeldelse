// 1. IMPORTS (Henter biblioteker)
const express = require('express');
const path = require('path');
const cors = require('cors');
const Database = require('better-sqlite3');

const artistRuter = require('./rutere/ruter_artister');
const albumRuter = require('./rutere/ruter_album');

const app = express();
// const db = new Database('musikk.db');
const PORT = 3000;

// 3. MIDDLEWARE (Konfigurasjon - rekkefølge her er viktig!)
app.use(cors());
app.use(express.json());
app.use(express.static('public')); 
app.use('/bilder', express.static(path.join(__dirname, 'bilder')));

//finn ut hva app use betyr
app.use('/api', artistRuter);
app.use('/api', albumRuter);


// 5. START SERVER
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});