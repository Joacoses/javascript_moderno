/* 
Dias de semana abrimos a las 11, 
pero los fines de semana abrimos a als 9
*/

// Entra a un sitio web, para consultar si esta abierto hoy...

const dia = 0; //0: domingo, 1: lunes, etc.
const horaActual = 11;

let horaApertura;
let mensaje; // Esta abierto, esta cerrado, hoy abrimos a las XX

// if (dia === 0 || dia == 6) {
/* if ([0,6].includes(dia)) {
  console.log("Fin de semana");
  horaApertura = 9;
} else {
  console.log("Dia de semana");
  horaApertura = 11;
} */

// ?-> si se cumple es X :-> si no se cumple es Y
horaApertura = [0, 6].includes(dia) ? 9 : 11;

/* if (horaActual >= horaApertura) {
  mensaje = "esta abierto";
} else {
  mensaje = `esta cerrado, hoy abrimos a las ${horaApertura}`;
} */

// mensaje=(horaActual>=horaApertura) ? 'Estamos abiertos' : `esta cerrado, hoy abrimos a las ${horaApertura}`;
mensaje =
  horaActual >= horaApertura
    ? "Estamos abiertos"
    : `esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });
