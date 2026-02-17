const fher = {
    nombre: "Fernando",
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    },
};

// fher.imprimir();

// UpperCamelCase -> para indicar que se va a usar para crear instancias
// Ok esto se debe crear con la palabra reservada new 
// Esto se hacia antiguamente, ahora solo se deberia usar para compatibilidad
function Persona(nombre, edad = 10) {
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    };
}


const maria = new Persona("Maria", 18);
const melissa = new Persona("Melissa", 83);
// console.log(maria);
maria.imprimir();
melissa.imprimir();
