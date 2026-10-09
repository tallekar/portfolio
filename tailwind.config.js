/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          975: "#121212",
          950: "#121212",
          900: "#121212",
          850: "#121212",
          800: "#121212",
        },
        neon: {
          cyan: "#67e8f9",
          blue: "#4f8cff",
          pink: "#ff5fd2",
          violet: "#6fa8ff",
          amber: "#dbeafe",
          lime: "#b7ff65",
        },
      },
      boxShadow: {
        neon: "0 0 40px rgba(103, 232, 249, 0.22)",
        neonPink: "0 0 34px rgba(255, 95, 210, 0.12)",
        card: "0 24px 80px rgba(0, 0, 0, 0.42)",
        insetGlow: "inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        aurora:
          "radial-gradient(circle at 20% 20%, rgba(103,232,249,0.22), transparent 32%), radial-gradient(circle at 80% 0%, rgba(79,140,255,0.18), transparent 28%), radial-gradient(circle at 50% 100%, rgba(255,95,210,0.08), transparent 38%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        meteor: "meteor 8s linear infinite",
        fadeUp: "fadeUp 0.8s ease forwards",
        drift: "drift 18s ease-in-out infinite",
        spinSlow: "spinSlow 20s linear infinite",
        shimmer: "shimmer 3.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        meteor: {
          "0%": { transform: "translate3d(0, 0, 0) scale(1)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": {
            transform: "translate3d(-480px, 280px, 0) scale(0.75)",
            opacity: "0",
          },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(18px, -20px, 0)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Orbitron", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
