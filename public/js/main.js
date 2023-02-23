function animatePlaceholder() {
  const searchBar = document.getElementById("searchBar");
  const placeholder = searchBar.placeholder;
  let index = 0;

  const sentence = "What are you looking for?";
  const chars = sentence.split("");

  sentence.substring(0, index);

  const interval = setInterval(() => {
    const char = chars[index % chars.length];

    const animatedPlaceholder = sentence.substring(0, index);

    searchBar.placeholder = animatedPlaceholder;

    index++;
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
}

window.addEventListener("DOMContentLoaded", animatePlaceholder);
