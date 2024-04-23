/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        // "coral-red": "#FF6452",
        "coral-red": "rgb(var(--coral-red))",
        "slate-gray": "rgb(var(--slate-gray))",
        "pale-blue": "rgb(var(--pale-blue))",
        "white-400": "rgb(var(--white-400)/ 0.8)",
        white:'rgb(var(--color-white) / <alpha-value>)',
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      boxShadow: {
        orange: "0 4px 3px rgba(255, 152, 0, 0.2)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
