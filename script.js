const cards = document.querySelectorAll(".card");

function removeActiveEffect() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.classList.contains("active")) {
      card.classList.remove("active");
    } else {
      removeActiveEffect();
      card.classList.add("active");
    }
  });
});
