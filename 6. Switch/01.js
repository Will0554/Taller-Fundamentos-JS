/*1. Crea un programa que solicite al usuario tres notas calcular el promedio. El rango permitido es de 0 a 5, incluidos decimales. Utilice una estructura switch para mostrar un mensaje correspondiente a la calificación ingresada, así:
   - Si saca menos de 2.5 ( `'Insuficiente, has perdido la materia'` )
   - Si saca 2.5 y de menos de 3.5 ( `'Insuficiente, tienes derecho a habilitar'` )
   - Si saca 3.5 y menos de 4.0 ( `'Aceptable'` )
   - Si saca 4.1 y hasta 5.0 ( `'Excelente'` )*/

let nota1 = prompt("Ingresa la primera nota (0-5):");
let nota2 = prompt("Ingresa la segunda nota (0-5):");
let nota3 = prompt("Ingresa la tercera nota (0-5):");

let nota1Num = Number(nota1);
let nota2Num = Number(nota2);
let nota3Num = Number(nota3);

let promedio = (nota1Num + nota2Num + nota3Num) / 3;

switch (true) {
    case promedio < 2.5:
        console.log("Insuficiente, has perdido la materia");
        break;
    case promedio >= 2.5 && promedio < 3.5:
        console.log("Insuficiente, tienes derecho a habilitar");
        break;
    case promedio >= 3.5 && promedio < 4.0:
        console.log("Aceptable");
        break;
    case promedio >= 4.0 && promedio <= 5.0:
        console.log("Excelente");
        break;
    default:
        console.log("Calificación fuera de rango.");
}
