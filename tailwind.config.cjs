const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "rgb(var(--color-white) / <alpha-value>)",
        black: "rgb(var(--color-black) / <alpha-value>)",
        grey: "rgb(var(--color-grey) / <alpha-value>)",
        emerald: "rgb(var(--color-emerald) / <alpha-value>)",
        pink: "rgb(var(--color-pink) / <alpha-value>)",
        blue: "rgb(var(--color-blue) / <alpha-value>)",
        yellow: "rgb(var(--color-yellow) / <alpha-value>)",
        red: "rgb(var(--color-red) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        transparent: "transparent",
        current: "currentColor",
      },
      fontFamily: {
        sans: ['"Wotfard"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
