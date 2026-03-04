/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: "#DFDCD5",
        medBackground: "#B8B5AE",
        darkBackground: "#1F1F1F",
        medDarkBackground: "#2E2E2E",
        primaryText: "#E0E0E0",
        secondaryText: "#B0B0B0",
        accentColor: "#FF6F61",
        borderColor: "#3A3A3A",
        linkBackground: "#8E8B85",
      },
      backgroundImage: {
        "light-to-medium": "linear-gradient(180deg, #DFDCD5 0%, #B8B5AE 100%)",
        "medium-to-dark": "linear-gradient(180deg, #2E2E2E 0%, #1F1F1F 100%)",
      },
    },
  },
  plugins: [],
};
