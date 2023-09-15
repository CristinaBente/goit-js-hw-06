const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById("value");

let counterValue = 0;

function updateValue() {
  valueSpan.textContent = counterValue;
}

// Adaugă handler - decrementare
decrementBtn.addEventListener("click", () => {
  counterValue--;
  updateValue();
});

// Adaugăm handler- incrementare
incrementBtn.addEventListener("click", () => {
  counterValue++;
  updateValue();
});

// Actualizăm valoarea
updateValue();
