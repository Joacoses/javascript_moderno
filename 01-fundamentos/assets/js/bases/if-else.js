let a = 5;

if (a > 10) {
  console.log("a mayor que 10");
}

// console.log('Fin programa')

const hoy = new Date();
let dia = hoy.getDay();

console.log({ dia });

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("Lunes");

  //   if (dia === 1) {
  //     console.log("Lunes");
  //   } else {
  //     console.log("No es lunes ni domingo");
  //   }
} else if (dia === 2) {
  console.log("Martes");
} else {
  console.log("No es lunes, martes o domingo");
}

const diasLetras = {
  0: "domingo",
  1: "lunes",
  2: "martes",
  3: "miercoles",
  4: "jueves",
  5: "viernes",
  6: "sabado",
};


const diasLetras2 = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado",];

// dia de la semana
console.log(diasLetras2[dia] || "Dia no esta definido");
