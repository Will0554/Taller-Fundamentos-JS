/*2. Usa el prompt para solicitar un número que representará el mes del año (por ejemplo, 1 para enero, 2 para febrero, etc.).
 Utiliza una estructura switch para mostrar cuántos días tiene ese mes.*/

let mes = prompt("Ingresa un número de mes (1-12):");

switch (mes) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
        console.log("El mes tiene 31 días.");
        break;
    case "4":
    case "6":
    case "9":
    case "11":
        console.log("El mes tiene 30 días.");
        break;
    case "2":
        console.log("El mes tiene 28 o 29 días.");
        break;
    default:
        console.log("Número de mes fuera de rango.");
}
