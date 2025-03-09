# Documentation API

## Endpoint: Lägg til Kontinent

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
Uppdaterar information om en plats. `placeId` är en 4-siffrig identifierare, t.ex. `0001`, `0002`, `0003`.

## Endpoint: Att hämta alla kontinenter

## Endpoint: Att hämta ett kontinent

## Endpoint:  Att ta bort en plats

## Endpoint: Att uppdatera kontinent
