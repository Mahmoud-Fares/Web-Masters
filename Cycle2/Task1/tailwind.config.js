/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./**/*.{html,js}"],
   theme: {
      container: {
         center: true,
         maxWidth: "72rem",
      },
      colors: {
         primary: {
            DEFAULT: "#1f1f1f",
            dark: "#050505",
         },
         secondary: "#fbfbfb",
         muted: "#545454",
         white: "#fff",
         transparent: "transparent",
      },
      fontSize: {
         hero: "clamp(2.5rem, 8vw + 1rem, 8.3125rem)",
         h2: "clamp(1.5rem, 2vw + 1rem, 3.625rem)",
         h3: "clamp(1.125rem, 1.6vw + 0.75rem, 1.5rem)",

         "p-sm": "clamp(0.875rem, 1.3vw + 0.3rem, 1rem)",
         p: "clamp(0.9rem, 1.4vw + 0.4rem, 1.125rem)",
         "p-lg": "clamp(1rem, 1.5vw + 0.5rem, 1.25rem)",
      },
      extend: {
         borderRadius: {
            sm: "0.25rem",
         },
         fontFamily: {
            inter: ["Inter", "sans-serif"],
         },
         gridTemplateColumns: {
            fluid: "repeat(auto-fit,minmax(min(22rem, 100%), 1fr))",
         },
         transitionProperty: {
            smooth: "all, transform, opacity",
         },
         transitionDuration: {
            smooth: "300ms",
         },
         transitionTimingFunction: {
            smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
         },
      },
   },
};
