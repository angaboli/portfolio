/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
  primary:"rgba(var(--primary), <alpha-value>)",
        secondary:"rgba(var(--secondary), <alpha-value>)",
        accent:"rgba(var(--accent), <alpha-value>)",
        neutral:"rgba(var(--neutral), <alpha-value>)",
        bkgStart:"rgba(var(--bkg-start), <alpha-value> )",
        bkgEnd :"rgba(var(--bkg-end), <alpha-value> )",
      }
    },
  },
  plugins: [],
};
