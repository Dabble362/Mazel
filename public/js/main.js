function animatePlaceholder() {
  const searchBar = document.getElementById("searchBar");
  let index = 0;

  const sentence = "What are you looking for?";

  const time = 110;

  const interval = setInterval(() => {
    searchBar.placeholder = sentence.substring(0, index);

    index++;
  }, time);

  setTimeout(() => {
    clearInterval(interval);
  }, time * (sentence.length + 1));
}

window.addEventListener("DOMContentLoaded", animatePlaceholder);
