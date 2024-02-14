import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        modem: "#ff7d00",
        ni: "#a4a4a4",
        eco: "#89bd2c",
        gdr: "#e04013",
        hor: "#009fcb",
        lfi: "#de0542",
        lr: "#2a4294",
        liot: "#d0d700",
        rn: "#003a3f",
        ren: "#fdc300",
        soc: "#f1898f",
      },
    },
  },
  plugins: [],
};
export default config;
