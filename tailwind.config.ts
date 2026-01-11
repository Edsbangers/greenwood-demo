import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "forest-green": "#1a4d2e",
        "forest-dark": "#0d2818",
        "electric-cyan": "#00d4ff",
        "greenwood-dark": "#0a1612",
        "greenwood-card": "#111d17",
      },
    },
  },
  plugins: [],
} satisfies Config;
