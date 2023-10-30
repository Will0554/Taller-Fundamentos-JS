/*5. Usa el prompt para capturar dos numeros que representarán los ejes X y Y. Utiliza una estructura if,
if-else para determinar en qué cuadrante se encuentra el punto que representa cada valor ingresado por el 
usuario, así:
   - Si los dos valores son positivos, el punto se encuentra en el cuadrante 1
   - Si X es positivo y Y es negativo, el punto se encuentra en el cuadrante 2
   - Si los dos valore son negaticos, el punto se encuentra en el cuadrante 3
   - Si X es negativo y Y es positivo, el punto se encuentra en el cuadrante 4 */

let x = Number(prompt("Ingresa el valor del eje X:"));
let y = Number(prompt("Ingresa el valor del eje Y:"));

if (x > 0 && y > 0) {
    console.log("El punto se encuentra en el Cuadrante 1.");
} else if (x > 0 && y < 0) {
    console.log("El punto se encuentra en el Cuadrante 2.");
} else if (x < 0 && y < 0) {
    console.log("El punto se encuentra en el Cuadrante 3.");
} else if (x < 0 && y > 0) {
    console.log("El punto se encuentra en el Cuadrante 4.");
} else if (x === 0 && y === 0) {
    console.log("El punto se encuentra en el origen.");
} else if (x === 0) {
    console.log("El punto se encuentra en el eje Y.");
} else if (y === 0) {
    console.log("El punto se encuentra en el eje X.");
} else {
    console.log("El punto se encuentra en una posición especial.");
}
