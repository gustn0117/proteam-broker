import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2A4A",
          dark: "#0F1A2E",
          light: "#2E4272",
          50: "#E8ECF3",
          100: "#C5CEE0",
          200: "#8FA3C4",
          300: "#5B7BB5",
          400: "#3A5A8C",
          500: "#1B2A4A",
          600: "#162240",
          700: "#0F1A2E",
          800: "#0A1220",
          900: "#050A14",
        },
        gold: {
          DEFAULT: "#C8A96E",
          light: "#D4BC8E",
          dark: "#A88B4A",
        },
      },
      fontFamily: {
        sans: ["Noto Sans KR", "Inter", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
