import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5680E9", // Moviy
        lightBlue: "#84CEEB", // Och ko‘k
        brightBlue: "#5AB9EA", // Yorqin ko‘k
        pastelPurple: "#C1C8E4", // Pastel binafsha
        darkPurple: "#8860D0", // To‘q binafsha
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
