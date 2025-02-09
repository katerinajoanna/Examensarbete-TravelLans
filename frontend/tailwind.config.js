/**  @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgPrimary': {
          0: '#333E89',   // 0%
          50: '#202756',   // 50%
          75: '#171B3D',   // 75%
          100: '#0D1023',  // 100%
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #333E89 0%, #202756 50%, #171B3D 75%, #0D1023 100%)',
      },
    },
  },
  plugins: [],
}

