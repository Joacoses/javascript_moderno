let a = 10;
let b = a;
a = 30;

// console.log({ a, b });

let juan = { nombre: "juan" };
// let ana = juan;
// {...X} si queremos que se cree un objeto igual a otro pero con diferentes valores
// hacer igualaciones que apunten a diferentes espacios en memoria
// ! Cuando esta entre {...X} se llama operador "spread"
let ana = { ...juan };
ana.nombre = "Ana";

console.log({ juan, ana });

// ! Cuando esta como argumento (...Y) se llama "rest"
// const cambiarNombre = ( ...persona )

// de esta forma, estariamos apuntando al mismo espacio de memoria y por tanto tendriamos el mismo resultado "Tony"
// const cambiarNombre = ( ...persona ) => {

const cambiarNombre = ({ ...persona }) => {
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiarNombre(peter);

console.log({ peter, tony });

// Arreglos

let frutas = ["manzana", "pera", "piña"];

let otrasFrutas = frutas.slice(); // este es mas lento
// let otrasFrutas = [...frutas]; // este es mas rapido y "gusta mas?"


otrasFrutas.push("Mango");

console.log({ frutas, otrasFrutas });
