/** @type {import('tailwindcss').Config} */
module.exports = {
  important: !1,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "Hero-sm": "url('/assets/images/trading-hero_S.png')",
        "Hero-md": "url('/assets/images/trading-hero_M.png')",
        "Hero-lg": "url('/assets/images/trading-hero_L.png')",
      },
      colors: {
        main: {
          900: "#054b9c",
          800: "#0456b5",
          700: "#0b5dba",
          600: "#1564bf",
          500: "#1d70cf",
          400: "#2574cf",
          300: "#2f7cd4",
          200: "#3b86db",
          100: "#5b9eeb",
          50: "#6baaf2",
        },
        lightMain: "#c5e0fc",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
