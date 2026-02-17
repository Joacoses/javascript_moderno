
//-------------------------------------
//  Lista<T>, T-->Boolean -->
//  filtrar(lista, f)
//  --> Lista<T>
//-------------------------------------
function filtrar(lista, f) {
    let res = [];
    for (let i = 0; i < lista.length; i++) {
        // Solo guarda el elemento si la función f devuelve true
        if (f(lista[i])) {
            res.push(lista[i]);
        }
    }
    return res;
}








