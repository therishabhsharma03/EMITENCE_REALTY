/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: "#90EE90",
      },
    },
  },
  plugins: [],
};
