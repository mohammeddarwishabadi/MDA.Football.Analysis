import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        mda: {
          bg: "#0D2A1F",
          card: "#1A2F25",
          green: "#4CAF50",
          greenLight: "#81C784",
          beige: "#D9C7A3",
          white: "#FFFFFF"
        }
      },
      fontFamily: {
        // Cairo/Tajawal can be added via next/font or external provider later.
        sans: ["Cairo", "Tajawal", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(76, 175, 80, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
