/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // IMPORTANT
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: {
          DEFAULT: "#0F3D3E",
          dark: "#071314",
        },
        main: {
          DEFAULT: "#F4F8F8",
          dark: "#0B1C1D",
        },
        section: {
          DEFAULT: "#EAF2F2",
          dark: "#132F30",
        },
        button: {
          DEFAULT: "#0F3D3E",
          dark: "#1F4D4E",
        },
        navbarButton: {
          DEFAULT: "#F4F8F8",
          dark: "#1A2E2F",
        },
        heading: {
          DEFAULT: "#0E1B1B",
          dark: "#EAF2F2",
        },
        text: {
          DEFAULT: "#3F4F4F",
          dark: "#CFE8E8",
        },
      },
    },
  },
  plugins: [],
};
