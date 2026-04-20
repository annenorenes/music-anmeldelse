const express = require('express');
const path = require('path');
const cors = require('cors');
const Database = require('better-sqlite3');

const ruter = require('./rutere/ruter.js'); 

const app = express();
const PORT = 3000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); 
app.use('/bilder', express.static(path.join(__dirname, 'bilder')));
app.use('/api', ruter)


//starter serverene med app.listen
app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});

