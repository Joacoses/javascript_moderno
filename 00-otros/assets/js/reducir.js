//-------------------------------------
//  Lista<T>, T, T,T-->T -->
// reducir()
// --> T
//-------------------------------------

function reducir(lista, acumulador, f) {
    for (let i = 0; i < lista.length; i++) {
        // Ejecutamos f para CADA elemento, actualizando el resultado
        acumulador = f(acumulador, lista[i]);
    }

    return acumulador;
}

let numeros = [1,2,3,4,5];

const resultado = reducir(numeros, 0, function(acc, n) {
    return acc + n;
});

console.log(resultado);