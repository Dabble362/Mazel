const searchBar = document.getElementById("searchBar");

let index = 0;

const sentence = "What are you looking for?";
const chars = sentence.split("");

setInterval(() => {
  if (index < chars.length) {
    searchBar.setAttribute(
      "placeholder",
      searchBar.getAttribute("placeholder") + chars[index]
    );
    index++;
  }
}, 100);
