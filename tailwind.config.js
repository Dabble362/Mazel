/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs", "./views/partials/*.ejs"],
  theme: {
    screens: {
      sm: "400px",
      md: "800px",
      lg: "1024px",
      xl: "1760",
    },
    maxWidth: {
      eighty: "80%",
    },
    extend: {
      colors: {
        "key-lime": "#EDEF8A",
        "forest-green": "#073D00",
        "pale-spring-bud": "#E6E7A7",
        "dark-slate-gray": "#35524A",
        "caput-mortuum": "#5E3023",
        "success-green": "#36d399",
        "max-yel-green": "#DEEf57",
      },
      backgroundImage: {
        "hero-background": "url('../imgs/pexels-elle-hughes-1660030.jpg')",
        "sm-background": "url('../imgs/pexels-elle-hughes-sm.jpg')",
      },
      backdropBlur: {
        xs: "1px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          success: "#073D00",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
