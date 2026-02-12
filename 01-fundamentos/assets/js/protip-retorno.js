function crearPersona(nombre, apellidos) {
  return {nombre: nombre,apellido: apellidos,};
}

const persona = crearPersona("joan", "costa");
// estos parentesis es para indicarle a js que quiero que me lo devuelva como un obj 
const crearPersona2 = (nombre, apellido) => ({nombre,apellido});
const persona2 = crearPersona2("joan", "aurelio");

console.log(persona);
console.log(persona2)


function imprimeArguments() {
    console.log(arguments)
}

const imprimeArguments2 = () =>{console.log(arguments)};

// ... significa que te monta un array con todos los argumentos que lleguen
// ... se llama "rest" y no puede venir nada dsps de esto, pero si antes
const imprimeArguments3 = (edad, ...args) =>{console.log({edad,args})};

// console.log(imprimeArguments(10,true,false,'Fernando','Hola'))
// console.log(imprimeArguments2(10,true,false,'Fernando','Hola'))
console.log(imprimeArguments3(10,true,false,'Fernando','Hola'))