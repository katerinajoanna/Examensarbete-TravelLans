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
        textPrimary: '#031BBD',       // Główne teksty (np. nagłówki,arrow)
        textSecondary: '#E5A000',     // Podkreślenia, teksty dodatkowe
        bgOverlay: '#171B3D',           // Pasek przezroczysty na zdjęciu z nazwami kontynentów
        bgButton: '#2B336E',    // Tło przycisków
        bgNoteLight: '#D8E1B6',       // Tło jasne dla wpisywania notatek/opisów
        bgNoteDark: '#F2F4EA',        // Alternatywne tło dla notatek/opisów
        textMuted: '#F0EFE8',        // Kolor tekstu na jasnych tłach
        borderInput: '#2c6c9a',
      },
      boxShadow: {
        imgShadow: '-6px 6px 12px rgba(169, 166, 146, 0.45)', // images shadow
        searchShadow: '0px 4px 10px rgba(198, 195, 63, 0.25)',   //search shadow
        cardShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
        formShadow: '6px 6px 12px rgba(169, 166, 146, 0.45)',
        btnShadow: '4px 4px 8px rgba(169, 166, 146, 0.45)',
      },
      fontFamily: {
        robotoSerif: ['Roboto Serif', 'serif'],
        robotoFlex: ['Roboto Flex', 'sans-serif'],
      },
    },
    animation: {
      slideIn: 'slideIn 1s ease-in-out', // Dodaj niestandardową animację
    },
    keyframes: {
      slideIn: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
    },
  },

  plugins: [],
}

