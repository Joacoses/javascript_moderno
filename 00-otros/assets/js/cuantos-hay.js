
let cuenta = [
{ codigo: "1001", nombre: "cafe", precio: 1.20 }, 
{ codigo: "1001", nombre: "cafe", precio: 1.20 }, 
{ codigo: "1005", nombre: "zumo naranja", precio: 1.70 }, 
{ codigo: "1003", nombre: "bocadillo tortilla", precio: 2.50 }
]

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

function cuantosHay(jsons,codigo) {
    let lista = filtrar(jsons, function (n) {
        if (n.codigo == codigo) {
            return true
        }
    })
    return lista.length;
}

console.log(cuantosHay(cuenta,'1001'));