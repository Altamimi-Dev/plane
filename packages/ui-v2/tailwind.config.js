const convertToHSL = (variableName) => `hsl(var(${variableName}))`;

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  prefix: "",
  theme: {
    extend: {
      colors: {
        neutral: {
          50: convertToHSL("--color-neutral-50"),
          100: convertToHSL("--color-neutral-100"),
          200: convertToHSL("--color-neutral-200"),
          300: convertToHSL("--color-neutral-300"),
          400: convertToHSL("--color-neutral-400"),
          500: convertToHSL("--color-neutral-500"),
          600: convertToHSL("--color-neutral-600"),
          700: convertToHSL("--color-neutral-700"),
          800: convertToHSL("--color-neutral-800"),
          900: convertToHSL("--color-neutral-900"),
          950: convertToHSL("--color-neutral-950"),
        },
        brand: {
          50: convertToHSL("--color-brand-50"),
          100: convertToHSL("--color-brand-100"),
          200: convertToHSL("--color-brand-200"),
          300: convertToHSL("--color-brand-300"),
          400: convertToHSL("--color-brand-400"),
          500: convertToHSL("--color-brand-500"),
          600: convertToHSL("--color-brand-600"),
          700: convertToHSL("--color-brand-700"),
          800: convertToHSL("--color-brand-800"),
          900: convertToHSL("--color-brand-900"),
          950: convertToHSL("--color-brand-950"),
        },
        success: {
          50: convertToHSL("--color-success-50"),
          100: convertToHSL("--color-success-100"),
          200: convertToHSL("--color-success-200"),
          300: convertToHSL("--color-success-300"),
          400: convertToHSL("--color-success-400"),
          500: convertToHSL("--color-success-500"),
          600: convertToHSL("--color-success-600"),
          700: convertToHSL("--color-success-700"),
          800: convertToHSL("--color-success-800"),
          900: convertToHSL("--color-success-900"),
          950: convertToHSL("--color-success-950"),
        },
        warning: {
          50: convertToHSL("--color-warning-50"),
          100: convertToHSL("--color-warning-100"),
          200: convertToHSL("--color-warning-200"),
          300: convertToHSL("--color-warning-300"),
          400: convertToHSL("--color-warning-400"),
          500: convertToHSL("--color-warning-500"),
          600: convertToHSL("--color-warning-600"),
          700: convertToHSL("--color-warning-700"),
          800: convertToHSL("--color-warning-800"),
          900: convertToHSL("--color-warning-900"),
          950: convertToHSL("--color-warning-950"),
        },
        error: {
          50: convertToHSL("--color-error-50"),
          100: convertToHSL("--color-error-100"),
          200: convertToHSL("--color-error-200"),
          300: convertToHSL("--color-error-300"),
          400: convertToHSL("--color-error-400"),
          500: convertToHSL("--color-error-500"),
          600: convertToHSL("--color-error-600"),
          700: convertToHSL("--color-error-700"),
          800: convertToHSL("--color-error-800"),
          900: convertToHSL("--color-error-900"),
          950: convertToHSL("--color-error-950"),
        },
        information: {
          50: convertToHSL("--color-information-50"),
          100: convertToHSL("--color-information-100"),
          200: convertToHSL("--color-information-200"),
          300: convertToHSL("--color-information-300"),
          400: convertToHSL("--color-information-400"),
          500: convertToHSL("--color-information-500"),
          600: convertToHSL("--color-information-600"),
          700: convertToHSL("--color-information-700"),
          800: convertToHSL("--color-information-800"),
          900: convertToHSL("--color-information-900"),
          950: convertToHSL("--color-information-950"),
        },
        oncolor: {
          light: convertToHSL("--on-color-light"),
          dark: convertToHSL("--on-color-dark"),
        },
      },
    },
    fontFamily: {
      custom: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
