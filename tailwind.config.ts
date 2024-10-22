import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '10%, 30%, 50%, 70%, 90%': {
            transform: 'rotate(-10deg)',
          },
          '20%, 40%, 60%, 80%': {
            transform: 'rotate(10deg)',
          },
        },
      },
      animation: {
        shake: 'shake 1s ease-in-out',
      },
      backgroundImage: {
        hero: 'url("/images/hero.svg")',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
