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

## Første utkast av datamodellen


 # Underveis dokumentasjon
 ## Teknologi som er brukt

 ## Datamodell

 ## API endepunk

 ## Beskrivelse av frontende
