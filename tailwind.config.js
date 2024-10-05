/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      san: [
        "dinneuzeitgroteskltw01",
        "san-serif"
      ],
      inter: [
        "'Inter'", 
        "sans-serif"
      ]
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        primary: {
          DEFAULT: "rgb(27,45,128)",
          "100": "rgb(27,45,128,.1)",
          "200": "rgb(27,45,128,.2)",
          "300": "rgb(27,45,128,.3)",
          "400": "rgb(27,45,128,.4)",
          "500": "rgb(27,45,128,.5)",
          "600": "rgb(27,45,128,.6)",
          "700": "rgb(27,45,128,.7)",
          "800": "rgb(27,45,128,.8)",
          "900": "rgb(27,45,128,.9)"
        },
        secondary: {
          DEFAULT: "rgb(255,64,64)",
          "100": "rgb(255,64,64,.1)",
          "200": "rgb(255,64,64,.2)",
          "300": "rgb(255,64,64,.3)",
          "400": "rgb(255,64,64,.4)",
          "500": "rgb(255,64,64,.5)",
          "600": "rgb(255,64,64,.6)",
          "700": "rgb(255,64,64,.7)",
          "800": "rgb(255,64,64,.8)",
          "900": "rgb(255,64,64,.9)"
        }
      }
    }
  },
  plugins: []
};
