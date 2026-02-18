

class Singleton {

    static instancia; //undefined
    nombre = '';

    constructor(nombre = ''){
        // instancia = undefined
        // !instancia = true
        // !!instancia = false
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }
        Singleton.instancia =this;
        this.nombre = nombre;

        // esto lo hace por defecto
        // return this;
    }

}


const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black');


console.log(`Nombre en la intancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la intancia1 es: ${instancia2.nombre}`);
console.log(`Nombre en la intancia1 es: ${instancia3.nombre}`);










