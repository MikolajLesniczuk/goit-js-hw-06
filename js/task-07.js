'use strict'
const SizeControl = document.querySelector('#font-size-control')
const Text = document.querySelector('#text')

const changeSize = () => {
    Text.style.fontSize = `${SizeControl.value}.px`
}

SizeControl.addEventListener('input',changeSize)

// Napisz skrypt, który reaguje na zmianę wartości elementu input#font-size-control (zdarzenie input) 
// i zmienia styl inline span#text aktualizując właściwość font-size. 
// W rezultacie, podczas zmiany wartości suwakiem, ma zmieniać się rozmiar tekstu w elemencie span

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

