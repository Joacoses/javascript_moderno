function crearPersona(nombre, apellido) {
  return { nombre: nombre, apellido: apellido };
}

const persona = crearPersona("joan", "costa");
// estos parentesis es para indicarle a js que quiero que me lo devuelva como un obj
const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });
const persona2 = crearPersona2("joan", "aurelio");

console.log(persona);
console.log(persona2);

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = () => {
  console.log(arguments);
};

// ... significa que te monta un array con todos los argumentos que lleguen
// ... se llama "rest" y no puede venir nada dsps de esto, pero si antes
// si se llama antes, no vendra en el "rest"
const imprimeArgumentos3 = (edad, ...args) => {
  // console.log({edad,args})
  return args;
};

// console.log(imprimeArguments(10,true,false,'Fernando','Hola'))
// console.log(imprimeArguments2(10,true,false,'Fernando','Hola'))
// console.log(imprimeArguments3(10,true,false,'Fernando','Hola'))

// como devuelve un array, podemos asignarle directamente el nombre de la variable, como se ve en el caso de abajo del const argumentos
const argumentos = imprimeArgumentos3(10, true, false, "Fernando", "Hola");

const [casado, vivo, nombre, saludo] = imprimeArgumentos3(
  10,
  true,
  false,
  "Fernando",
  "Hola",
);
console.log({ casado, vivo, nombre, saludo });

// si solo queremos obtener un dato, podemos decirle cual entre llaves -> const {apellido}
// si queremos cambiarle el nombre a la variable hacemos lo siguiente -> const {apellido: nuevoApellido}
const { apellido: nuevoApellido } = crearPersona("Fernando", "Garcia");
console.log({ nuevoApellido });






// DESESTRUCTURACION
const tony = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
};

// const imprimePropiedades = (personaje) => {
//   console.log('nombre:', personaje.nombre);
//   console.log('codeName:', personaje.codeName);
//   console.log('vivo:', personaje.vivo);
//   console.log('edad:', personaje.edad);
//   console.log('trajes:', personaje.trajes);
// };

// edad = 15, si no viene edad, setea 15 por defecto
const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
  console.log({nombre}); 
  console.log({codeName}); 
  console.log({vivo}); 
  console.log({edad}); 
  console.log({trajes}); 
};


imprimePropiedades(tony);