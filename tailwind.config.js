/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs", "./views/partials/*.ejs"],
  theme: {
    maxWidth: {
      eighty: "80%",
    },
    extend: {
      colors: {
        "key-lime": "#EDEF8A",
        "eaton-blue": "#99D19F",
        "pale-spring-bud": "#E6E7A7",
      },
    },
  },
  plugins: [require("daisyui")],
};
