/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    transitionTimingFunction: {
      "custom-ease": "cubic-bezier(0.76,0,0.24,1)",
    },
    extend: {
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        shimmerY: {
          "100%": { transform: "translateY(100%)" },
        },
        shimmerX: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightWhite: "#f6f6f6",
        orange: "#e26c18",
        lightDark: "#18181c",
        darkDark: "#6d6d6d",
      },
      fontFamily: {
        polySans: ["var(--font-polysans-median)"],
        everett: ["var(--font-everett)"],
        inter: ["var(--font-inter)"],
        proximaNova: ["var(--font-proximaNova)"],
      },
      screens: {
        "3xl": "2000px",
        landing: "968px",
        footer: "860px",
        header: "930px",
        pfp: "890px",
        sevenHundo: "700px",
      },
    },
  },
  plugins: [],
};
