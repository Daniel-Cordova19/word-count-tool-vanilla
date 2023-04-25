// 1. Capturar el evento click en el botón LISTO
//2. Recuperar el valor que el usuario a colocado en el input
//3. Poner el número de caracter en el div#output

document.querySelector('#btn').addEventListener('click', function(){
    console.log('Has hecho click ');


const word = document.querySelector('#str').value;

console.log('valor: ', word);

let wordResult = word.length;
document.querySelector('#output').textContent = 'El número de carácteres es ' + wordResult;
});