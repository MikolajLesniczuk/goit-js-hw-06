
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredient = document.querySelector('#ingredients')

for(let item of ingredients){
  const list = document.createElement('li')
  list.textContent = item;
list.classList.add('item');
ingredient.append(list)

}


// W HTML znajduje się pusta lista ul#ingredients.

// <ul id="ingredients"></ul>


// W JavaScript znajduje się tablica ciągów.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// Napisz skrypt, który dla każdego elementu tablicy ingredients:

// Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
// Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
// Doda do elementu klasę item.
// Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.

