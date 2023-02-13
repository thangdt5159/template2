/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        headerBg: "url('/images/headerBg.png')",
        videoMetaverse: "url('/images/temp.gif')",
      },
      keyframes: {
        tilted: {
          "0%": { transform: "perspective(1500px) rotateY(0deg)" },
          "25%": { transform: "perspective(1500px) rotateY(20deg)" },
          "50%": { transform: "perspective(1500px) rotateY(0deg)" },
          "75%": { transform: "perspective(1500px) rotateY(-20deg)" },
          "100%": { transform: "perspective(1500px) rotateY(0deg)" },
        },
      },
      animation: {
        tilted: "tilted 5s linear infinite",
      },
    },
  },
  plugins: [],
};
