
let cuenta = [
{ codigo: "1001", nombre: "cafe", precio: 1.20 }, 
{ codigo: "1001", nombre: "cafe", precio: 1.20 }, 
{ codigo: "1005", nombre: "zumo naranja", precio: 1.70 }, 
{ codigo: "1003", nombre: "bocadillo tortilla", precio: 2.50 }
]

function reducir(lista, valorInicial, f) {
    let res = valorInicial;
    let sol = f(lista, res);
    return sol;
}


let precioTotal = 0;
const calcularPrecio = reducir(cuenta,precioTotal, function(cuenta, precioTotal) {
    for (let i = 0; i < cuenta.length; i++) {
        precioTotal += cuenta[i].precio;
    }
    // console.log(precioTotal);
    return precioTotal;
} )


console.log(calcularPrecio);
