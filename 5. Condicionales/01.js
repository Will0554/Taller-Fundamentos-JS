/*1. Crea un programa que solicite al usuario un número y determine si es positivo, 
negativo o cero utilizando una estructura condicional (if).*/

let numero = parseFloat(prompt("Ingresa un número:"));

if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es igual a cero.");
}