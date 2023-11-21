/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primaryColor: "#15803D",
            secondaryColor: "#16A34A",
            yellowColor: "#FEB60D",
            textColor: "#373737",
            textColor1: "#212529",
            headingColor: "#000000",
         },

         boxShadow: {
            panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
         },
      },
   },
   plugins: [],
};
