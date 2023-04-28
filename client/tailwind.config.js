/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: {
          100: "#cceed7",
          200: "#99dcaf",
          300: "#66cb88",
          400: "#33b960",
          500: "#00a838",
          600: "#00862d",
          700: "#006522",
          800: "#004316",
          900: "#00220b"
      },
      secondary: {
          100: "#f1f8de",
          200: "#e3f1bc",
          300: "#d6ea9b",
          400: "#c8e379",
          500: "#badc58",
          600: "#95b046",
          700: "#708435",
          800: "#4a5823",
          900: "#252c12"
      },
      tertiary: {
          100: "#fefffa",
          200: "#fdfff4",
          300: "#fcffef",
          400: "#fbffe9",
          500: "#faffe4",
          600: "#c8ccb6",
          700: "#969989",
          800: "#64665b",
          900: "#32332e"
      },
      white: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#ecf0f1",
          700: "#888888",
          800: "#555555",
          900: "#333333"
      },
      frost:{
          100: "#ffffffe6",
          200: "#ffffffcc",
          300: "#ffffffb3",
          400: "#ffffff99",
          500: "#ffffff80",
          600: "#92929299",
          700: "#555555b3",
          800: "#2e2e2ecc",
          900: "#141414e6"
      },
    },
  },
  plugins: [],
}

