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
        catering: {
          gold: "#D97706", // Amber-600
          goldLight: "#F59E0B", // Amber-500
          goldDark: "#B45309", // Amber-700
          emerald: "#065F46", // Emerald-800
          emeraldLight: "#047857", // Emerald-700
          emeraldSoft: "#ECFDF5", // Emerald-50
          warmBg: "#FFFDF9",
          warmBorder: "#FDE68A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
