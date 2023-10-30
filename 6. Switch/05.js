/*5. Usa el prompt para capturar un numero que representará una dirección cardinal (Norte, Sur, Este, Oeste). 
Utiliza una estructura switch para determinar en qué dirección se encuentra un punto cardinal opuesto 
(por ejemplo, Norte-opuesto es Sur).*/

let direccion = prompt("Ingresa una dirección cardinal (Norte, Sur, Este, Oeste):");

let direccionOpuesta;

switch (direccion) {
    case "Norte":
    case "norte":
        direccionOpuesta = "Sur";
        break;
    case "Sur":
    case "sur":
        direccionOpuesta = "Norte";
        break;
    case "Este":
    case "este":
        direccionOpuesta = "Oeste";
        break;
    case "Oeste":
    case "oeste":
        direccionOpuesta = "Este";
        break;
    default:
        console.log("Dirección no válida. Por favor, ingresa una dirección válida.");
}

if (direccionOpuesta) {
    console.log("La dirección cardinal opuesta es " + direccionOpuesta + ".");
}
