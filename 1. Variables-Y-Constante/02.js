/**2. Declara una constante llamada PI y asigna el valor de π (aproximadamente 3.14159) a ella. Luego, 
pide al usuario que ingrese el radio de un círculo y calcula su área utilizando la constante PI.*/

const PI = 3.14159;
let radio = parseFloat(prompt("Ingresa el radio del círculo:"));
let area = PI * Math.pow(radio, 2);

console.log("El área del círculo con radio " + radio + " es " + area);
