


const carros = ['Ford', 'Mazda', 'Honda','Toyota']

let i = 0;

console.warn('While');

/* while (i < carros.length) {
    console.log(carros[i]);
    i++;
} */


while (carros[i]) {
    if (i === 1) {
        // break;
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}


console.warn('Do While');

let j=0;

// ! la diferencia es que "do while" siempre va a realizar el primer caso aunque devuelva undefined
do {
    console.log(carros[j]);
    j++;
} while (carros[j]);
