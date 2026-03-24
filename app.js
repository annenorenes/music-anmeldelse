const express = require('express');
const app = express();

const PORT = 3000;

const Database = require('better-sqlite3');
const db = new Database('musikk.db');

const cors = require('cors');
app.use(cors());
