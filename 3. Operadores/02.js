/*2. Declara una variable numérica. Usa el prompt para pedir al usuario que ingrese un valor numérico.
 Utiliza operadores de comparación para determinar si son iguales o si una es mayor que la otra. 
 Muestra los resultados en la consola.*/

let numero1 = 10;
let numero2 = prompt("Ingresa un valor numérico:");

if (numero1 === numero2) {
    console.log("Los números son iguales.");
} else if (numero1 > numero2) {
    console.log("El primer número es mayor que el segundo.");
} else {
    console.log("El segundo número es mayor que el primero.");
}

