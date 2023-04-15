const textColor = document.querySelector('.color');
const changeButton = document.querySelector('.change-color'); 
const Body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changes = () =>{
Body.style.backgroundColor = getRandomHexColor();
textColor.textContent = getRandomHexColor();
}

changeButton.addEventListener('click', changes)

// Napisz skrypt, który zmienia kolor tła elementu <body> (poprzez style inline) po kliknięciu na button.change-color
//  i wyświetla wartość koloru w span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>


// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
