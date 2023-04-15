'use strict'
const Input = document.querySelector('#validation-input')
const PasswordLength = Number.parseInt(Input.dataset.length)

const test = () =>{
if(Input.value.length === 0){
  Input.classList.remove('invalid')
  Input.classList.remove('valid')
}
else if (Input.value.length === PasswordLength){
  Input.classList.remove('invalid')
Input.classList.add('valid')
}
else {
  Input.classList.remove('valid')
  Input.classList.add('invalid')
}

 }

Input.addEventListener('blur', test)



// Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza czy wartość wprowadzona przez użytkownika spełnia warunek walidacji (ma odpowiednią długość)

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />


// Informacja o liczbie symboli, która powinna znajdować się w polu input, zawarta się w jego atrybucie data-length.
// Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielony, a jeśli liczba jest nieprawidłowa - czerwony.
// Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do plików źródłowych zadania.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
