import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
    // include other directories where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config;