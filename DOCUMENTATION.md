# Documentation API

## Endpoint: Lägg till kontinent

**Endpoint:**
POST: `https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/continent`

**Exempelbody (JSON):**
```
{
    "continent": "northamerica",
    "name": "North America",
    "description": "Explore the stunning landscapes of North America",
    "video": "https://mytrawellens.s3.eu-north-1.amazonaws.com/ampnVideo.mp4"
}
```

**Beskrivning:**
Lägger till en ny kontinent i databasen. Alla fält är obligatoriska för att skapa en ny kontinent.

## Endpoint: Lägg till plats

**Endpoint:** 
 POST: `https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/place`

**Exempelbody (JSON):**
```
{
    "continent": "asia",
    "title": "",
    "description": "",
    "video": null,
    "image": "",
    "linkInfo": "",
    "category": "caves",
    "country": "",
    "location": {
        "lat": 0,
        "lng": 0
    }
}
```

**Beskrivning:**
Lägger till en ny plats i databasen. Alla fält är obligatoriska för att skapa en ny plats.

## Endpoint: Uppdatera platsinformation

**Endpoint:**  
PUT: `https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/place/{continent}/{placeId}`

**Exempel:**  
PUT: `https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/place/europe/0001`

**Exempelbody (JSON):**
```json
{
    "title": "Ny titel",
    "description": "Ny beskrivning"
}
```

**Beskrivning:**  
Uppdaterar information om en plats. `placeId` är en fyrsiffrig identifierare, t.ex. `0001`, `0002`, `0003`.

## Endpoint: Hämta alla kontinenter

**Endpoint:**
GET: `https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/continents`

**Beskrivning:** 
Hämtar information om alla kontinenter och deras geografiska lägen (platser).

## Endpoint: Hämta ett kontinent

**Endpoint:**
GET: `https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/continent/{continent}`

**Exempel:**
GET: `https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/continent/oceania`

**Beskrivning:**
Hämtar information om en specifik kontinent och dess geografiska platser.

## Endpoint:  Ta bort en plats

**Endpoint:**
DELETE: `https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/place/{continent}/{placeId}`

**Exempel:**
DELETE: `https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/place/europe/0010`

**Beskrivning:**
Obs! `placeId` är en fyrsiffrig identifierare, t.ex. `0001`, `0002`, `0003`.

## Endpoint: Uppdatera en kontinent

**Endpoint:**
PUT: `https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/continent/{continent}`

**Exempel:**
PUT: `https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/continent/europe`

**Exempelbody (JSON):**
```json
{
    "description": "Ny beskrivning"
}
```