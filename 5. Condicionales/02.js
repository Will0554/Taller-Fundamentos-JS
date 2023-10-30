/*2. Declara una variable para representar la temperatura en grados Celsius.
Utiliza una estructura if-else para determinar si la temperatura está por encima o por debajo de cero grados y
 muestra un mensaje apropiado.*/

let temperaturaCelsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));

if (temperaturaCelsius > 0) {
    console.log("La temperatura está por encima de cero grados.");
} else if (temperaturaCelsius < 0) {
    console.log("La temperatura está por debajo de cero grados.");
} else {
    console.log("La temperatura es igual a cero grados.");
} 