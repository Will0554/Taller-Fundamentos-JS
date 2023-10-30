/*4. Crea un programa que solicite al usuario una opción de menú (por ejemplo, 1 para "Ver perfil", 2 para "Editar configuración", etc.)
 y utilice una estructura switch para realizar la acción correspondiente.*/

let opcion = prompt("Selecciona una opción de menú:\n1. Ver perfil\n2. Editar configuración\n3. Ayuda\n4. Salir");

switch (opcion) {
    case "1":
        console.log("Has elegido 'Ver perfil'.");
        break;
    case "2":
        console.log("Has elegido 'Editar configuración'.");
        break;
    case "3":
        console.log("Has elegido 'Ayuda'.");
        break;
    case "4":
        console.log("Has elegido 'Salir'.");
        break;
    default:
        console.log("Opción no válida. Por favor, elige una opción válida.");
}
