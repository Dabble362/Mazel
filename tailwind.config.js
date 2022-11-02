/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs", "./views/partials/*.ejs"],
  theme: {
    screens: {
      sm: "400px",
      md: "800px",
      lg: "1024px",
      xl: "1536",
    },
    maxWidth: {
      eighty: "80%",
    },
    extend: {
      colors: {
        "key-lime": "#EDEF8A",
        "eaton-blue": "#99D19F",
        "pale-spring-bud": "#E6E7A7",
        "dark-slate-gray": "#35524A",
        "caput-mortuum": "#5E3023",
        "success-green": "#36d399",
        "max-yel-green": "#DEEf57",
      },
    },
  },
  plugins: [require("daisyui")],
};
