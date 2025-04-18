import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    fontFamily: {
      marker: ["var(--font-permanent-marker)", "serif"],
      display: ["var(--font-oswald)", "sans-serif"],
      body: ["var(--font-montserrat)", "Helvetica", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "yellowy-1": "#f4d65b",
        "greeny-1": "#233c3d",
        "greeny-2": "#507b6e",
        "greeny-3": "#71b8ad",
        "greeny-4": "#c3dab8",
        "bluey-1": "#233d5c",
        "orange-bp": "#f39200",
        "blue-jup": "#0000ff",
        "blue-jup-hover": "#4444ff",
        "energy-yellow": {
          // yellowy-1
          "50": "#fefbec",
          "100": "#fbf3ca",
          "200": "#f7e790",
          "300": "#f4d65b",
          "400": "#f1c12e",
          "500": "#eaa316",
          "600": "#cf7d10",
          "700": "#ac5a11",
          "800": "#8c4714",
          "900": "#733a14",
          "950": "#421d06",
        },
        "gable-green": {
          // greeny-1
          "50": "#f4f9f9",
          "100": "#d9eeec",
          "200": "#b3dcd8",
          "300": "#85c3c0",
          "400": "#5ba6a4",
          "500": "#418b8a",
          "600": "#326f6f",
          "700": "#2c5759",
          "800": "#264849",
          "900": "#233c3d",
          "950": "#102123",
        },
        como: {
          // greeny-2
          "50": "#f5f8f6",
          "100": "#ddeae4",
          "200": "#bbd4ca",
          "300": "#92b6aa",
          "400": "#6a9788",
          "500": "#507b6e",
          "600": "#3f6258",
          "700": "#355049",
          "800": "#2d423c",
          "900": "#293834",
          "950": "#141f1d",
        },
        tradewind: {
          // greeny-3
          "50": "#f4f9f8",
          "100": "#d9eee9",
          "200": "#b3dcd4",
          "300": "#71b8ad",
          "400": "#5ca59c",
          "500": "#428a82",
          "600": "#336e69",
          "700": "#2c5955",
          "800": "#274846",
          "900": "#243d3c",
          "950": "#102322",
        },
        cello: {
          /// bluey-1
          "50": "#f3f6fc",
          "100": "#e7eef7",
          "200": "#c9daee",
          "300": "#99bce0",
          "400": "#629ace",
          "500": "#3e7db9",
          "600": "#2d629c",
          "700": "#264f7e",
          "800": "#234569",
          "900": "#233d5c",
          "950": "#16253b",
        },
        "persian-green": {
          "50": "#effefc",
          "100": "#c7fff7",
          "200": "#90ffee",
          "300": "#51f7e4",
          "400": "#1de4d4",
          "500": "#04c8bb",
          "600": "#00a099",
          "700": "#05807c",
          "800": "#0a6563",
          "900": "#0d5452",
          "950": "#003233",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
