/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#5A01CB",

          "secondary": "#1E0044",

          "accent": "#CEEDFF",

          "neutral": "#1C1C1C",

          "base-100": "#ffffff",

          "info": "#F41D84",

          "success": "#5FD479",

          "warning": "#FE8900",

          "error": "#dc2626",
        },
      },
      "night"
    ],
  },
  plugins: [require("daisyui")],
}