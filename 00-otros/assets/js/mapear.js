
//-------------------------------------

// Lista<T1>, T1-->T2, -->

// mapear()

// --> Lista<T2>

//-------------------------------------
function mapear(lista, f) {
    let res =[];

    for (let i  = 0; i  < lista.length; i ++) {
        res.push(f(lista[i]));
        // console.log(res);
    }
    return res;
}

let coches = ['Mercedes', 'Volvo', 'Ford', 'Toyota'];
let resultado = mapear(coches, function(elemento) {
    return elemento.length;
})


console.log(resultado);





