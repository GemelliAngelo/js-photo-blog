const cardTextEl = document.querySelectorAll(".card-text");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      cardTextEl[i].innerText = `${data[i].title}`;
    }
  });
