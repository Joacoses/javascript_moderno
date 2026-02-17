/**
 * ORDEN:
 * Propiedades y metodos estaticos
 * Propiedades de la clase
 * Constructor
 * Sets y Gets
 * Metodos
 * Privados
 */

class Persona {
    // static nos permite ver directamente de Persona sin instanciar nada
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre);
        console.log('Hola a todos soy un metodo estatico');
    }

    // por defecto las clases llevan implementado 'use strict'
    // los campos de la clase, son opcionales, es decir, se pueden crear en el constructor
    // la diferencia esta en que si se crean aqui, siempre se crearan en la intancia aunque
    // sea undefined
    nombre = "";
    codigo = "";
    frase = "";
    comida = "";

    // con que valores se va a construir
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        // console.log('Hola');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }

    // los sets no pueden tener el mismo nombre
    // que la propiedad a la que queremos establecer el nuevo valor
    // por eso mucha gente establece en las propiedades un "_" --> _comida = "";
    // y de esta forma, pueden usar el mismo nombre para ambas
    // set comida(comida){this._comida = comida;}
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona("Peter", "Spiderman", "Soy Pet, digo Spiderman");
const ironman = new Persona("Tony", "Ironman", "Soy Ironman");

// console.log(ironman);

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = "El pastel de tia May";

// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);

// Persona._conteo = 2;
console.log('Conteo estatico ', Persona._conteo );
console.log(Persona.conteo);
Persona.mensaje();


Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);
