/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "bg-base": "#2C3333",
        "bg-surface": "#1e2a2a",
        gold: "#F5A623",
        teal: "#4a9e96",
        "teal-dark": "#2E5D57",
        "text-primary": "#F5F5F5",
        "text-secondary": "#C8D4D4",
        "text-muted": "#8A9BA8",
      },
    },
  },
  plugins: [],
}
