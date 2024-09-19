import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: "rgba(18, 18, 18, 0.75)",
        customDarkGray: "rgb(18, 18, 18)",
        customLightGray: "rgba(18, 18, 18, 0.04",
        customWhite: "rgba(255, 255, 255, 0.7)",
        overlay: "rgba(30, 30, 30, 0.4)",
      },
      backgroundImage: {       
        bgImage: "url('/images/bgImage.svg')", 
      }
    },
  },
  plugins: [],
};
export default config;
