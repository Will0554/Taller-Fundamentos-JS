/*5. Declara un objeto que represente a una persona con propiedades como nombre, edad y dirección. Luego, muestra la información de la persona en la consola accediendo directamente a sus propiedades. 
El mensaje debe decir algo como: `Juan tiene 45 años y vive en la calle 63 con carrera 24`*/

let persona = {
    nombre: "Juan",
    edad: 45,
    direccion: "calle 63 con carrera 24"
};

console.log(persona.nombre + " tiene " + persona.edad + " años y vive en " + persona.direccion);
