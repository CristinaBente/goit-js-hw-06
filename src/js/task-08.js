// Obținem formularul folosind clasa .login-form
const loginForm = document.querySelector(".login-form");

// Adăugăm un ascultător de eveniment pentru evenimentul 'submit' al formularului
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Previne reîncărcarea paginii la submit

  // Creăm un obiect FormData pentru a colecta datele formularului
  const formData = new FormData(loginForm);

  // Inițializăm un obiect în care vom stoca datele formularului
  const formObject = {};

  // Iterăm prin perechile cheie-valoare din formData
  for (const [name, value] of formData.entries()) {
    formObject[name] = value;
  }

  // Verificăm dacă ambele câmpuri sunt completate
  if (formObject.email === "" || formObject.password === "") {
    alert("Please fill in all fields.");
  } else {
    // Afișăm obiectul cu datele formularului în consolă
    console.log("Form data:", formObject);

    // Resetăm formularul pentru a șterge valorile câmpurilor
    loginForm.reset();
  }
});
