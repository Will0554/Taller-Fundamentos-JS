/*3. Escribe un programa que pida al usuario su edad y determine si es un niño, 
adolescente o adulto utilizando una estructura if-else-if.*/

let edad = prompt("Ingresa tu edad:");

if (edad < 13) {
    console.log("Eres un niño.");
} else if (edad >= 13 && edad < 18) {
    console.log("Eres un adolescente.");
} else {
    console.log("Eres un adulto.");
}