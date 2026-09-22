import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#f5efe0",   // Warm ivory (main background)
          warm: "#ece3ce",      // Paper deep
          muted: "#dcc89c",     // Paper warm
          card: "#fbf8f1",
        },
        ink: {
          DEFAULT: "#1a1712",   // Main text
          soft: "#2a241c",
          muted: "#6b6355",
          faint: "#8a8170",
        },
        // Safety alias: map terracotta to rich gold so zero orange can ever leak
        terracotta: {
          DEFAULT: "#c5a059",
          dark: "#a68032",
          light: "#e5c478",
          tint: "#faf4eb",
        },
        navy: {
          DEFAULT: "#0d1527",   // Midnight luxury navy
          deep: "#070b14",
          soft: "#141f36",
          card: "#111c30",
          tint: "#f2f5fa",
        },
        forest: {
          DEFAULT: "#16382B",
          tint: "#EDF5F1",
        },
        gold: {
          DEFAULT: "#c5a059",   // Rich metallic gold
          deep: "#9a7426",
          dark: "#a68032",
          champagne: "#d4af37",
          metallic: "#b8964e",
          light: "#e5c478",
          pale: "#f3e5c8",
          tint: "#faf4eb",
        },
        line: {
          DEFAULT: "#d9c69a",   // Rule / borders
          subtle: "#ece3ce",
          strong: "#dcc89c",
          gold: "#c5a05940",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        serif: ["var(--font-poppins)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
        editorial: "840px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(26, 23, 18, 0.04), 0 8px 24px -8px rgba(26, 23, 18, 0.08)",
        cardHover: "0 4px 12px rgba(26, 23, 18, 0.06), 0 20px 36px -12px rgba(26, 23, 18, 0.12)",
        book: "0 4px 6px -1px rgba(26, 23, 18, 0.1), 0 20px 40px -15px rgba(26, 23, 18, 0.28), -4px 0 10px rgba(26, 23, 18, 0.15)",
        bookHover: "0 10px 20px -3px rgba(26, 23, 18, 0.15), 0 30px 60px -20px rgba(26, 23, 18, 0.35), -6px 0 16px rgba(26, 23, 18, 0.2)",
        subtle: "0 1px 2px rgba(26, 23, 18, 0.05)",
      },
      borderRadius: {
        xs: "3px",
        sm: "5px",
        md: "8px",
        lg: "12px",
      },
      letterSpacing: {
        editorial: "0.08em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;