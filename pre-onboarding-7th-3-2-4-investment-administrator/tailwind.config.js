/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        myDarkBlue: "#041627",
        myBlue: "#458ff7",
        myGray: "#eff2f5",
        myLightGray: "#f0f0f0",
        myBeigeGray: "#f5f5f5",
        myLightBlack: "#2a2a2a",
        myBeige: "#fafafa"
      }
    }
  },
  plugins: []
};
