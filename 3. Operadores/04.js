/*4. Crea un programa que calcule el área de un triángulo utilizando la fórmula: `área = (base * altura) / 2`. 
Solicita al usuario que ingrese los valores de la base y la altura usando el prompt*/

let base = parseFloat(prompt("Ingresa el valor de la base del triángulo:"));

let altura = parseFloat(prompt("Ingresa el valor de la altura del triángulo:"));

let area = (base * altura) / 2;

alert("El área del triángulo es: " + area);
