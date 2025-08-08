import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#effaff",
          100: "#def4ff",
          200: "#b6e8ff",
          300: "#75d6ff",
          400: "#2bc1ff",
          500: "#0ea5e9",
          600: "#0686c4",
          700: "#086998",
          800: "#0d587e",
          900: "#0e4968"
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem"
        }
      }
    }
  },
  plugins: []
} satisfies Config;


