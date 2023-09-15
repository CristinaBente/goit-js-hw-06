// Obținem elementul de input pe care vrem să aplicăm validarea
const validationInput = document.getElementById("validation-input");

// Adăugăm un eveniment pentru a asculta atunci când input-ul își pierde focalizarea (evenimentul blur)
validationInput.addEventListener("blur", function () {
  // Obținem lungimea dorită din atributul data-length al elementului
  const desiredLength = parseInt(validationInput.getAttribute("data-length"));

  // Obținem valoarea introdusă în input și eliminăm spațiile de la început și sfârșit
  const enteredValue = validationInput.value.trim();

  // Verificăm dacă lungimea valorii introduse este egală cu lungimea dorită
  if (enteredValue.length === desiredLength) {
    // Dacă lungimea este corectă, eliminăm clasa invalid (dacă există) și adăugăm clasa valid
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    // Dacă lungimea nu este corectă, eliminăm clasa valid (dacă există) și adăugăm clasa invalid
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
