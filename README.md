# Examensarbete-TerraLens

## Välkommen till TerraLens!

Min idé är att skapa en webbaplatform som fungerar som en interaktiv reseguide till världens mest fascinerande platser. Applikationen presenterar unika platser med bilder, beskrivningar och resenärers anteckningar. Syftets uppdrag är att inspirera människor att resa, upptäcka och dela sina erfarenheter, men också att möjliggöra virtuella resor för dem som inte kan besöka dessa platser personligen.

## Funktioner
- **Utforska kontinenter** – Välj en kontinent och upptäck spännande resmål med bilder och beskrivningar.
- **Detaljerad platsinformation** – Se mer information om varje plats, inklusive länkar till ytterligare resurser.
- **Sök efter kategori** – Filtrera platser efter kategori, t.ex. berg, grottor, nationalparker och vattenfall.
- **Lägg till favoriter** – Spara dina favoritplatser för snabb åtkomst senare.
- **Lägg till inlägg** – Efter inloggning kan användare lägga till egna beskrivningar
- **Användarkonton** – Registrera dig, logga in och hantera din profil.

### Adminfunktioner
- **Moderera innehåll** – Admin kan redigera eller ta bort alla platser vid behov.
- **Video och bilder** – Möjlighet att hantera uppladdade bilder och videor.

## Teknologi
Projektet använder följande teknologier:
- **Frontend:** Vite med TypeScript och Tailwind CSS för styling.
- **Backend:** Node.js med Serverless Framework och AWS Lambda.
- **Databas:** DynamoDB för lagring av platser och användardata.
- **Mediahantering:** AWS S3 för lagring av bilder och videor.
- **Autentisering:** AWS Cognito för användarhantering och inloggning.

## Installation
1. Klona detta repo:
   ```sh
   git clone <repo-url>
   ```
2. Installera nödvändiga beroenden:
   ```sh
   npm install
   ```
3. Deploya till dev-miljön:
   ```sh
   sls deploy --stage dev
   ```

## API-dokumentation
Se [DOCUMENTATION.md](DOCUMENTATION.md) för detaljer om API-endpoints.

## Här är länk till min websida: [Klicka här](http://myapptrawel.s3-website.eu-north-1.amazonaws.com)

## Kontakt
Om du har några frågor, vänligen kontakta mig via e-post: **kasiapotar@gmail.com**.

