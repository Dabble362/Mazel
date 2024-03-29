function animatePlaceholder() {
  const searchBar = document.getElementById("searchBar");

  if (searchBar) {
    let index = 0;
    const sentence = "What are you looking for?";
    const msDelayBetweenLetters = 120;

    const interval = setInterval(() => {
      searchBar.placeholder = sentence.substring(0, index);

      index++;
    }, msDelayBetweenLetters);

    setTimeout(() => {
      clearInterval(interval);
    }, msDelayBetweenLetters * sentence.length + 1000);
  }
}

window.addEventListener("DOMContentLoaded", animatePlaceholder);
