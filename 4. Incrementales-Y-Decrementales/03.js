/*3. Es noche de amor y amistad, en esta ocasión el cover para ingresar a la disco incrementará 2 veces para 
los chicos y decrementará 2 veces para las chicas. El valor habitual es de 7 dólares. Usando el prompt solicite
 el nombre y el genero de una persona e imprima usando alert() el siguiente mensaje si es un chico 
 `Juan tu entrada a la disco vale $9 dólares`, en caso de ser chica `Ana tu entrada a la disco vale $5 dólares`*/

let nombre = prompt("Ingresa tu nombre:");
let genero = prompt("Ingresa tu género (chico o chica):");

let costoEntrada = 7;

if (genero.toLowerCase() === "chico") {
    costoEntrada *= 2; // Incrementar el costo para los chicos
    alert(nombre + ", tu entrada a la disco vale $" + costoEntrada + " dólares");
} else if (genero.toLowerCase() === "chica") {
    costoEntrada -= 2; // Decrementar el costo para las chicas
    alert(nombre + ", tu entrada a la disco vale $" + costoEntrada + " dólares");
} else {
    alert("Género no reconocido. Ingresa 'chico' o 'chica' para calcular el costo de entrada.");
}
