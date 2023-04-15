'use strict'
const Input = document.querySelector('#name-input')
const Output = document.querySelector('#name-output')

const Event = (e) => {
    Output.textContent = e.currentTarget.value
    if(Input.value === ""){
        Output.textContent = "Anonymous"
    }
}

Input.addEventListener('input', Event )


// Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input (zdarzenie input) wstawia jego aktualną wartość do span#name-output. Jeśli pole input jest puste, w spanie powinien wyświetlić się tekst "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
