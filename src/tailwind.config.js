/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#FFFFFF",

        brown: {
          light: "#FFF9F2",
          soft: "#EDE1D3",
          medium: "#C2A889", // navbar (recommended)
          rich: "#B89B7A",
          dark: "#7D5A23",
          text: "#3b2a23",
          muted: "#6b4f43",
          accent: "#7a5c4b",

        },
      },
    },
  },
  plugins: [],
};
