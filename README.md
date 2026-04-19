# overskrift 

Min ide!
Jeg tenker å lage en tjeneste hvor man kan anmelde album og singler offentlig

## Tjenesten skal inneholde 
- Innloggingsystem for å kunne opprette en egen bruker
- Lister for å f.eks. kunne legge til alle mine favoritt tekno album, eller de beste singlene i 2026 så langt
- Muligheten til å anmelde en musikk

## Hva sider skal denne tjenesten vise?
- Startside: Skal gi deg muligheten til å opprette bruker, eller logge med en allerede laget bruker
- Nav bar: Skal inneholde "Hjemmeside", "Profil", "Anmeldelser", "Venner", "Dine lister"
- Hovedsiden: Her skal ny musikk ligge. Her vil jeg at både ny musikk av populære artister skal ligge, og ny musikk fra artister som du følger (vil helst at det skal være artister som du ofte hører på, men da må jeg gi muligheten til å koble til spotify/apple musik)
- Anmeldelser: Her skal du kunne se dine tidligere anmeldelser og venner siden anmeldelser. 
- Venner: Her vil det ligge en liste over alle brukere du følger. Det vil også komme opp reccomended brukere, som er da brukere som har mange følgere, eller/og anmelder mye av den sammen musikken som deg
- Dine lister: Her skal du kunne opprette egne lister, både private og offentlige 
## Krav til min tjeneste 
Jeg trenge å opprette noen krav, slik at jeg kan danne en best mulig datamodell 


- En profil kan skrive flere anmeldelser
- En anmeldelse tilhører kun en bruker
- Et album og en singel kan bli anmeld av flere brukere


- En artist kan ha produsere flere album og singler
- Et album og en singel kan ha flere artister 
- Et album kan inneholde flere sanger


- En bruker kan opprette flere lister
- En liste tilhører bare en bruker 
- Brukeren kan legge til flere album og sanger i listene
- Album og sanger kan være lagt til i flere lister

- en bruker kan følge flere brukere (venner)
- en bruker kan bli fulgt av flere brukere (venner)
- en bruker kan ikke følge seg selv

Kommentar
- En profil må beste av et brukernavn, passord, email
- En anmeldelse kan inneholde, rating, dato og tekst
- I en anmeldese kan en bruker anmelde enten et album eller en singel. I en anmeldelse kan man kun anmlede en av delene 
- Et album og en singel bestpr av tittel, utgivingsdato, sjanger


 # Underveis dokumentasjon
 ## Teknologi som er brukt

I dette prosjektet har jeg måtte brukt, samt lært masse om hva og hvordan teknologien gjør det mulig å skape denne tjenesten

## Backend

### Node.js
 Node.js er «Runtime system» -et til JavaScript. Før Node.js, når man skulle opprette en tjeneste som besto av en frontende og en backende, altså en nettside som kommuniserte med serveren, kunne ikke JavaScript gjøre dette aleine. Det krevdes andre programmeringsspråk. Med node.js kunne du lage webapplikasjoner som har en backend som kommuniserer med frontende. 
 
#### Nmp
 Dette kan man sammenligne med en verktøyskasse. Nmp består av mange tusen «open source librabies» , og på den måten gjør det å kode enklere, ettersom det gir oss muligheten til å hente ekstrerne bibloteker og pakker.
 
#### Avhengigheter
 Vi laster ned, gjennom nmp, videre avhengigheter for å kunne opprette våres web-applikasjon. Vi laster ned ‘Express’, ‘Better-sqlite3’ og ‘corse’
 
#### Express
 Express gir oss muligheten til å ta i bruk et robust ‘Routing system’. Vi kan bruke express til å definere hvordan web-applikasjonen reagerer, som i min kode har jeg brukt GET  og POST. De to gjør ulike ting, hvor GET henter data fra databasen og viser det på nettsiden, mens POST sender inn data i databsen

 #### Corse
 Corse er en avhengighet vi lastet ned, og fungerer som en sikkerhets mekanisme. Corse gir forntenden muligheten til å kommuiserene med backenden, også vica versa. 
 
## Lagring 

#### Better-sqlite3
 Avhengigheten ‘better-sqlte3’ er den nyeste versjonen av denne avhengigheten, og gir oss muligheten til å kommunisere med sqlite.
 
 Jeg lagrer databasen jeg opprettete i SQLiteStudio i samme repositorien min, og ved hjelp av Better-Sqlite3 har jeg muligheten til å sende inn data og hente ut data
 
## Frontend
 
 
 

 # Datamodell
 
 ## Datamodellen designet i draw.io

![Bildetekst](./bilder/database4.drawio.png);
 Jeg har delt systemet i fire tabeller. Dette er på en måte første utkast, og er ikke, nærheten til å være ferdig fylt ut, men det er et bra første utkast. Datamodellen har tre relasjoner, og derfor oppfyller minste kravet 
 
 - Bruker: Lagrer informasjon om dem som anmelder
 - Artist: Inneholder enkel informasjon om artister
 - Inneholder informasjon om spesifikke album eller singler, knyttet til en artist
 - Anmeldelse: En sentral tabell som knytter sammen en bruker og en utgivelse med en rating og en tekstlig kommentar.
 
 ## Relasjoner: 
 I modellen er det to ulike relasjoner som oppstår
 
 En til en (1:N) mellom artister og utgielser, ettersom en artist kan ha mange utgivelser, og en utgivelse kan kun en artist. Det er et krav jeg har valgt for denne oppgaven for å slippe et mange til mange forholdt 
 
 Forholdet mellom bruker og utgivelse er et mange til mange forhold, ettersom en bruker kan anmelde mange utgivelser, og en utgivelse kan bli anmeldt flere ganger. Jeg løser dette problemet med å opprette en koblingstabell, ‘Anmeldelse’ som gir hver ny anmeldelse en egen id. 
 
 Tabellen Anmeldelse inneholder fremmednøkler (FK) fra begge de andre tabellene. Den henter bruker_id fra Bruker. Den henter utgivelses_id fra Utgivelse. I tillegg lagrer den data som er spesifikke, som rating, kommentar og dato
 
 Mellom Bruker og Anmeldelse blir det en ting mange forhold (1:N), hvor en bruker kan skrive felere anmeldelser, men en anmeldelse tilhører bare en bruker. Det samme gjeler forholden mellom Anmeldelse og Utgivelse, hvor en utigvelse kan ha mange anmeldelser, men hver anmeldelse er kun knyttet til en utgivelse
 
## Normalisering:
 Ved å skille dette ut i en egen tabell, følger jeg reglene for normalisering. Jeg slipper å lagre brukernavnet på nytt hver gang noen skriver en anmeldelse.
 
### Opprette databasen i SQLiteStudio 
 
 Videre skrev jeg inn alle tabeller og kolloner ut ifra datamodellen. Jeg lå samt inn test data. 
 
 På denne tiden viste jeg ikke at jeg sto ovenfor et problem. Jeg velger å skrive det her, i stedet for lengre nede i dokumentet hvor jeg beskriver andre utfordringer, ettersom det er i databasen jeg måtte ta en avgjørelse. 
 
 Problemet som oppstå var når jeg skulle opprette POST ruteren. Her var målet å kunne skrive inn en anmeldelse også få den lagret i anmeldelse tabellen, som da er tom, og klar for å ta i mot data.
 
 Det som skjer, er at databasen ikke lagrer dataen jeg sender inn. Dataen, altså det jeg skrevet i skjemaet, anmeldelsen, blir skrevet ut i terminal.  Jeg ser i databasen, og ser at anmeldelse har fremmednøkklene «bruker_id» og «utgivelses_id», som jeg tror skapet et problem. Siden det er ingen innloggings side, enda, vil bruker_id ha null data. 
 
 Det som skjer er at dataen som skjemaet for inn blir ikke sendt inn, selv etter daten blir sendt korrekt ut. Jeg forstå at problemet må ligge hentingen av daten. Problemet lå i bruker_id. Anmeldelse tabellen forventer bruker_id for å koble anmeldelsen send til en bruker. Bruker_id er oblegatorisk, og ettersom innloggingsystemet mangles foreløbing, vil SQLite sende ut: Foreign Key constraint failed
 
### Hvordan velger jeg å løse dette: 
 Jeg har valgt å fjerne bruker kolonnen fra databasen. Dette er noe jeg kan forhåpentligvis legge til i seinere tid når jeg har fått på plass innlogging, men nå lager det unødvendig trøbbel.
 
 Jeg for til å sende data inn i databasen, som vil si at jeg har fått til en kommunikasjon mellom frontende og bakenden! Jeg ser tydelig at data som sendes inn lagres, og jeg må refreshe for å få opp ny data lagt inn. Jeg sletter ved å trykke på knappen ves siden av commit. 
 
 En annen løsing kynne vært å hardkode inn en slagst test bruker, for å så kunne beholde bruker kolonnen uten et ferdig innlogginsssytem. Dette kunne vært bra for å koble anmeldelser til en bruker, samt negativt, ettersom hver anmeldelse ville vært lagret på samme bruker
 
 
 

 ## API endepunk

 ## Beskrivelse av frontende
