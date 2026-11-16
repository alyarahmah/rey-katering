import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        catering: {
          gold: "#D97706",
          goldLight: "#F59E0B",
          goldDark: "#B45309",
          emerald: "#065F46",
          emeraldLight: "#047857",
          emeraldSoft: "#ECFDF5",
          warmBg: "#FFFDF9",
          warmBorder: "#FDE68A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
