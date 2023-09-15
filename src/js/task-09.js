// Funcția pentru a genera o culoare aleatorie în format hexazecimal
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// Obținem elementele necesare din DOM
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

// Adăugăm un ascultător de eveniment pentru clic pe buton
changeColorButton.addEventListener("click", function () {
  // Generăm o culoare aleatorie
  const randomColor = getRandomHexColor();

  // Setăm culoarea de fundal a body-ului cu culoarea generată
  document.body.style.backgroundColor = randomColor;

  // Actualizăm valoarea span-ului cu culoarea generată
  colorSpan.textContent = randomColor;
});
