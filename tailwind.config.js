/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primaryColor: "#15803D",
            secondaryColor: "#16A34A",
            textColor: "#373737",
            textColor1: "#212529",
            headingColor: "#000000",
         },
      },
   },
   plugins: [],
};
