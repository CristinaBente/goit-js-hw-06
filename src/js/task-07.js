const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

// Adăugăm un ascultător de eveniment pentru evenimentul 'input' pe input-ul de control al dimensiunii fontului
fontSizeControl.addEventListener("input", function () {
  // Obținem valoarea curentă a input-ului de control al dimensiunii fontului
  const fontSizeValue = fontSizeControl.value;

  // Actualizăm stilurile inline pentru span-ul de text cu dimensiunea fontului selectată
  textSpan.style.fontSize = `${fontSizeValue}px`;
});
