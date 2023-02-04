/*
var buscar = document.querySelectorAll('.lista li')[2];
console.log(buscar);
*/

//Alterando textos no DOM
//innerHTML
//textContent

let mudei = document.querySelector('#frase');
let lista = document.querySelectorAll('.lista li')[2];

mudei.innerHTML = "Já mudei pelo DOM!"
lista.textContent = "Ultima Lista!"


lista.style.color="green";
mudei.style.color="blue";