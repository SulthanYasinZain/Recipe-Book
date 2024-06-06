/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      small: "0.5px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        colors: {
          text: "#e4f2e3",
          background: "#070e06",
          primary: "#46b63e",
          secondary: "#22671d",
          accent: "#2fa225",
        },
      },
    },
  },
  plugins: [],
};
