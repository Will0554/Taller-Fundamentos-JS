/*2. Usando el prompt captura el nombre de un producto. Define una variable que se llame precio con el valor 
inicial de 0 (cero) e incrementa el precio en 1 por cada letra que tenga el producto, ejemplo:

    - Si el producto se llama 'Mango', el precio debe ser de 5. El mensaje será `El mango tiene un valor de $5 la unidad`
    - Si el producto se llama 'Mandarina', el precio debe ser de 9. El mensaje será  `El mandarina tiene un valor de $9 la unidad`*/

let producto = prompt("Ingresa el nombre del producto:");
let precio = producto.length;

console.log("El " + producto.toLowerCase() + " tiene un valor de $" + precio + " la unidad");

