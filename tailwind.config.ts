import type { Config } from "tailwindcss";

export default {
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
        primary: {
          desaturatedRed: "hsl(0, 36%, 70%)",
          softRed: "hsl(0, 93%, 68%)",
        },
        secondary: {
          darkGrayishRed: "hsl(0, 6%, 24%)",
        },
      },
      backgroundImage: {
        whiteToLightRed:
          "linear-gradient(135deg, hsl(0, 100%, 98%), hsl(0, 80%, 86%))",
        lightRedToRed:
          "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
      },
    },
  },
  plugins: [],
} satisfies Config;
