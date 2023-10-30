/**5. Declara una variable de tipo string con una cadena de texto larga. Luego, utiliza métodos de cadenas para obtener la longitud de la cadena, 
 convertirla a minúsculas y mostrar la última palabra en mayúsculas. */

let texto = "Esta es una cadena de texto larga con varias palabras.";
let longitud = texto.length;
let enMinusculas = texto.toLowerCase();

let palabras = texto.split(" ");
let ultimaPalabra = palabras[palabras.length - 1];

ultimaPalabra = ultimaPalabra.toUpperCase();

console.log("Longitud de la cadena: " + longitud);
console.log("Cadena en minúsculas: " + enMinusculas);
console.log("Última palabra en mayúsculas: " + ultimaPalabra);
