import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111618",
        light: "#F7F7F7",
        gray: "#E2E0DF",
        red: "#C3315D",
        pink: "#F15BB5",
        orange: "#FF7809",
        green: "#00B79F",
        blue: "#0091B5",
        violet: "#7A60B3",
      },
    },
  },
  plugins: [],
};
export default config;
