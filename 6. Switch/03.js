/*3. Usa el prompt para que tome un valor numérico del 1 al 12 (representando un mes) 
como argumento y devuelva el nombre del mes utilizando una estructura switch.*/

let numeroMes = prompt("Ingresa un número de mes (1-12):");
let nombreMes;

switch (numeroMes) {
    case "1":
        nombreMes = "Enero";
        break;
    case "2":
        nombreMes = "Febrero";
        break;
    case "3":
        nombreMes = "Marzo";
        break;
    case "4":
        nombreMes = "Abril";
        break;
    case "5":
        nombreMes = "Mayo";
        break;
    case "6":
        nombreMes = "Junio";
        break;
    case "7":
        nombreMes = "Julio";
        break;
    case "8":
        nombreMes = "Agosto";
        break;
    case "9":
        nombreMes = "Septiembre";
        break;
    case "10":
        nombreMes = "Octubre";
        break;
    case "11":
        nombreMes = "Noviembre";
        break;
    case "12":
        nombreMes = "Diciembre";
        break;
    default:
        nombreMes = "Mes no válido";
        break;
}

console.log("El mes correspondiente al número " + numeroMes + " es " + nombreMes + ".");
