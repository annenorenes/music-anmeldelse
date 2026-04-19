const databasen =  require('better-sqlite3'); // i denne oppgaven ligger daten i en databse jeg har opprettet. Node.js har ikke innebygd støtte til sqlite, somer grunnen til at jeg bruker en tredej-parts pakke, som heter 'better-sqlite3'. Dette gjør progrmamet per robust

const db = new databasen('musikk.db'); //oppretter en forbindelse til filen. 

module.exports = db; //gjør forbindelsen tilgjengelig for alle

