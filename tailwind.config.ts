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
        primary: "#1B2A4A",
        "primary-dark": "#142038",
        dark: "#1A1A1A",
        "dark-light": "#2A2A2A",
        "dark-card": "#333333",
      },
      fontFamily: {
        sans: ["Noto Sans KR", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
