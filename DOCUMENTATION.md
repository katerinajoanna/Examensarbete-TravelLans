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
    "title": "platsens namnt",
    "description": "beskrivning",
    "video": null,
    "image": "<url-adress>",
    "linkInfo": "länk",
    "category": "caves",
    "country": "landets namn",
    "location": {
        "lat": 0,
        "lng": 0
    }
}
```

**Beskrivning:**
Lägger till en ny plats i databasen. Alla fält är obligatoriska för att skapa en ny plats.
OBS! Man kan ange koordinater för platsen, men inte nödvändigtvis.

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
Uppdaterar information om en plats. `placeId` är en fyrsiffrig identifierare, t.ex. `0001`, `0002`, `0003`. Man kan ändra bild eller lägga till en video. Skrev då i json "image":  eller "video": .

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
**OBS!** `placeId` är en fyrsiffrig identifierare, t.ex. `0001`, `0002`, `0003`.

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
## Endpoint: Ladda ner platser på kontinenter efter kategori

**Endpoint:**
GET:  https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/places/{continent}/{category}

**Exempel:**
GET:  https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/places/africa/national parks

**Beskrivning:**
Får platser på en given kontinent efter **kategori**- caves,national parks, waterfalls, mountains .

## Ladda ner en specifik plats
**Endpoint:**
GET: https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/place/{continent}/{placeId}

**Exempel:**
GET: https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/place/europe/0005

**Beskrivning:**
Få en specifik plats med **placeId** 
**OBS!** placeId är fyra siffror: t.ex. 0001, 0010 .

## Registrering
**Endpoint:**
POST:  https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/auth/register

**Exempel bodyjson:**
```
POST: {
    "username": "bogdan",
    "email": "bogdan@test.com",
    "password": "a3b3b3b3",
    "confirmPassword": "a3b3b3b3",
    "country": "Sweden",
    "city": "Karlsklona"
}
```
**Beskrivning:**
Lägger till registreringsanvändare.
Till exempel, om e-postmeddelandet upprepas får vi fel 400 och svarar:
```
{
	"success": false,
	"error": "This email is already registered."
}
```
Om användarnamnet redan finns får vi fel 400 och svarar:
```
{
	"success": false,
	"error": "The username is already taken."
}
```
**OBS!** Lösenord måste vara 8 tecken långt, användarnamn måste vara minst 3 tecken långt, kan innehålla siffror, t.ex. jan123, det kan också vara e-post .
Man kan registrera en administratör med den tilldelade e-postadressen konrad@example.com, i .env kan du lägga till administratörer: ADMIN_EMAILS=konrad@example.com, konrad2@example.com

## Inloggning
**Endpoint:**
POST: https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/auth/login

**Exempel bodyjson:**
```
{
	"username": "Maria",
	"password": "abcd1234"
}
```
**Beskrivning:**
Loggar in en befintlig användare.
Om det inte finns får vi fel 400 och svar:
```
 {
	"success": false,
	"error": "Invalid username or email"
}
```

## RefreshToken
**Endpoint:**
POST: http://localhost:3000/auth/refresh

**Exempel bodyjson:**
```
{
    "refreshToken": " accessTocen”
}
```
**Beskrivning:**
Användaren tilldelas en token vid inloggning, giltig i 2 timmar, ** accessToken**, efter att tiden har gått kan han uppdatera den genom att logga in igen ( ** refreshToken** )
 **OBS!** ????


## Lägga till favorit
**Endpoint:**
POST: https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/auth/favorite

**Exempel bodyjson:**
För inloggade användare:
```
{
  "userId": "22e8c06",
  "placeId": "0005",
  "continent": "Oceania"  
}
```
För de som inte är inloggade:
```
{
  "deviceId": "test-device-1",
  "placeId": "0005",
  "continent": "Europe"
}
```
**Beskrivning:**
Lägger till favoriter för inloggade och utloggade användare, en utloggad användare kan se och ha favoriter på andra enheter, de kommer inte att förlora sina valda platser.
**OBS!** För inloggade användare tillhandahåller vi "userId", för icke inloggade användare "deviceID"

## Ladda ner favorit
**Endpoint:**
GET: https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/auth/favorites/{userId}

**Exempel:**
GET: https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/auth/favorites/cb070bd

**Beskrivning:**
Laddar ner alla poster för en given användare.
**ObS!** "userId" kan hämtas med en token på webbplatsen jwt.io

## Lägger till anteckningar/inlägg
**Endpoint:**
POST: https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/auth/note

**Exempel bodyjson:**
```
{
 "note": "Tekst notatki",
  "continent": "asia"
}
**Headers:**
```{
  "Content-Type": "application/json",
  "Authorization": "Bearer Your_Token_JWT"
}
```
**Beskriwning:**
Anteckningar läggs till av en inloggad användare.
**OBS!** i rubriksektionen (Headers) är det nödvändigt att lägga till Your_Token_JWT accessToken (giltigt i 2 timmar) för att lägga till en anteckning

## Laddar ned användardata
**Endpoint:**
GET: https://f1wohl0jpd.execute-api.eu-north-1.amazonaws.com/auth/user
**Beskrivning:**
Detta endpoint hämtar användardata baserat på den autentiserade användaren. En giltig token krävs för att få en lyckad respons.
**Autentisering:**
Förfrågan måste inkludera en giltig autentiseringstoken i headers.

**Svar:**
Lyckad förfrågan (200 OK):
Om token är giltig returneras användarens data:
```{
  "success": true,
  "data": {
    "username": "Adrian",
    "city": "Gdansk",
    "country": "Poland"
  }
}
```
Ogiltig token (400 Bad Request):
Om token är felaktig eller saknas returneras ett felmeddelande:
```
{
  "success": false,
  "error": "Invalid token or missing username"
}
```
