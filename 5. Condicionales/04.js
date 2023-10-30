/*4. Crea un programa que tome un número como argumento y utilice el operador ternario para determinar 
si es par o impar. Devuelve un mensaje que indique el resultado.*/

function determinarParImpar(numero) {
    const mensaje = (numero % 2 === 0) ? "El número es par." : "El número es impar.";
    return mensaje;
}

const numero = 7;

const resultado = determinarParImpar(numero);
console.log(resultado);
