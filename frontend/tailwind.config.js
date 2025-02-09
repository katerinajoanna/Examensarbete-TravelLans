/**  @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgLine: '#A8C33F',            // Linie oddzielające, tło headera, stroke
        textPrimary: '#031BBD',       // Główne teksty (np. nagłówki)
        textSecondary: '#E5A000',     // Podkreślenia, teksty dodatkowe
        overlay: '#171B3D',           // Pasek przezroczysty na zdjęciu z nazwami kontynentów
        bgButton: '#2B336E',          // Tło przycisków
        bgNoteLight: '#D8E1B6',       // Tło jasne dla wpisywania notatek/opisów
        bgNoteDark: '#F2F4EA',        // Alternatywne tło dla notatek/opisów
        textMuted: '#F0EFE8',         // Kolor tekstu na jasnych tłach
      },
    },
  },
  plugins: [],
}

