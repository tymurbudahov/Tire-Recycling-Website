/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{tsx,css}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: [
        "Monaco",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    container: {
      center: true,
      screens: {
        sm: "50rem",
      },
    },
    extend: {
      colors: {
        slate: {
          850: "hsl(222deg 47% 16%)",
        },
        primary: {
          DEFAULT: "#b7f34b",
          500: "#b7f34b",
          600: "#a4df3e",
          700: "#8fc932",
          800: "#74a527",
          900: "#52751b",
        },
      },
    },
  },
  plugins: [],
};
