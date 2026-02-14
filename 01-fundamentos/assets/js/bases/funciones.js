function saludar(nombre) {
  console.log(arguments);
  console.log("Hola " + nombre);
  return 1;
}

const saludar2 = function (nombre) {
  console.log("Hola " + nombre);
};

const saludarFlecha = () => {
  console.log("Hola Flecha");
};

// si tiene argumento se puede omitir el parentesis -> saludarFlecha2 = nombre => {}
const saludarFlecha2 = (nombre) => {
  console.log("Hola " + nombre + " Flecha");
};

const retornoDeSaludar = saludar("Fernando", 40, true, "Esp");
saludar2("Paski");
saludarFlecha();
saludarFlecha2("Joan");

console.log(retornoDeSaludar);

function sumar(a, b) {
  return a + b;
}

const sumar2 = (a, b) => {
  return a + b;
};

const sumar3 = (a, b) => a + b;

function getAletorio() {
    return Math.random();
}

const getAletorio2 = () => Math.random();


console.log(sumar(5, 6));
console.log(sumar2(3, 9));
console.log(sumar3(3, 13));
console.log(getAletorio());
console.log(getAletorio2());
