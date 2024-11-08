const cardEl = document.querySelectorAll(".card");
const cardTextEl = document.querySelectorAll(".card-text");
const cardImageEl = document.querySelectorAll(".card-image");
const overlayEl = document.querySelector(".overlay");
const buttonEl = document.querySelector(".btn.btn-outline-info");
const overlayImageEl = document.getElementById("overlay-image");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const album = data[i];
      const cardText = cardTextEl[i];
      const cardImage = cardImageEl[i];

      cardText.innerText = `${album.title}`;
      cardImage.setAttribute(`src`, `${album.url}`);
    }
    cardEl.forEach((card) => {
      card.addEventListener("click", () => {
        overlayEl.classList.remove("d-none");
        overlayImageEl.setAttribute(
          `src`,
          `${card.children[1].getAttribute("src")}`
        );
      });
    });
    buttonEl.addEventListener("click", () => {
      overlayEl.classList.add("d-none");
    });
  });
