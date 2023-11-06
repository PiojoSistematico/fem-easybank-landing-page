/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#2d314d",
        "primary-2": "#31d35c",
        "primary-3": "#2bb7da",
        "neutral-1": "#9698a6",
        "neutral-2": "#f3f4f6",
        "neutral-3": "#fafafa",
        "neutral-4": "#ffffff",
      },
      fontFamily: {
        PublicSans: ["PublicSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
