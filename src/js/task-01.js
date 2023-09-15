// Selectăm elementul <ul> cu id-ul "categories"
const categoriesList = document.querySelector("#categories");

// Selectăm toate elementele <li> cu clasa "item" din cadrul listei
const categoryItems = categoriesList.querySelectorAll("li.item");

// Numărăm și afișăm numărul total de categorii
console.log(`Number of categories: ${categoryItems.length}`);

// Iterăm prin fiecare element <li> cu clasa "item"
categoryItems.forEach((categoryItem) => {
  // Selecționăm titlul din cadrul elementului curent
  const titleElement = categoryItem.querySelector("h2");

  // Selecționăm toate elementele <li> din cadrul categoriei curente
  const categoryElements = categoryItem.querySelectorAll("ul li");

  // Afișăm titlul și numărul de elemente din acea categorie
  console.log(`Category: ${titleElement.textContent}`);
  console.log(`Elements: ${categoryElements.length}`);
});
