/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6D28D9',    // Deep Purple
        secondary: '#F43F5E',  // Bright Red
        accent: '#FBBF24',     // Golden Yellow
        background: '#F3F4F6', // Light Gray
        text: '#1F2937',       // Dark Gray
      },
    },
  },
  plugins: [],
};
