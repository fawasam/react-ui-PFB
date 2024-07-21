/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "",
      white: "#fff",
      dark: "#000",
      secondary: {
        light: "#2A2A2B",
        dark: "#1E1E1E",
      },
      blue: {
        light: "#6B61FF",
        dark: "#6C5FF5",
        circle: "#6B61FF",
      },
      purple: {
        border: "#FFC4F8",
        light: "#FE9BF3",
        dark: "#7A186F",
      },
      green: {
        border: "#6DFFCF",
        light: "#ADFFE4",
        dark: "#0A9B6B",
      },
      text: {},
    },
    fontSize: {
      heading2: "2rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  plugins: [],
};
