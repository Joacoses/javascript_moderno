alert('Hola Mundo');

// texto pop-up -- Hint 
let nombre = prompt('Cual es tu nombre?', 'Sin nombre');

console.log(nombre);
console.log('****' + nombre + '****');

const seleccion = confirm('¿Estas seguro de borrar esto?');
console.log(seleccion);

// este funciona en la terminal pero no en el navegador, y viceversa 
console.log(global);