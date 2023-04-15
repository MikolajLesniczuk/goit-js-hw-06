const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const Gallery = document.querySelector('.gallery')
let newImage = "";

images.forEach(({ url, alt }) => {
  const markup = `
  <li class="gallery__picture" >
    <img class="gallery__item" src="${url}" alt="${alt}">
  </li> `;
  newImage += markup;
});

Gallery.insertAdjacentHTML('afterbegin', newImage);

// Napisz skrypt do tworzenia galerii obrazów według tablicy danych. W HTML znajduje się lista ul.gallery.

// <ul class="gallery"></ul>


// Użyj tablicy obiektów images w celu utworzenia elementów <img> umieszczonych w <li>. Aby utworzyć znacznik użyj template strings i metody insertAdjacentHTML().

// Wszystkie elementy galerii powinny być dodawane do DOM podczas jednej operacji.
// Ulepsz galerię używając flexboxów lub gridów poprzez klasy CSS.
// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];
