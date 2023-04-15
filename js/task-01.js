'use strict'
const lists = document.querySelectorAll('.item ul')
const item = document.querySelectorAll('.item')
const title = document.querySelectorAll('.item h2')

console.log(`Number of Categories: ${item.length}`);

title.forEach( (el,i) => {
const list = lists[i].getElementsByTagName('li').length;
console.log('')
console.log(`Category: ${el.textContent}`)
console.log(`Elements: ${list} `)

});


// Napisz skrypt, który:

// Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>) i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).
// Po wykonaniu w konsoli znajdą się takie komunikaty.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

