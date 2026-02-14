const regresaTrue = () => {
  console.log("Regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("Regresa false");
  return false;
};

console.warn("Not o la negacion");
console.log(true);
console.log(!true); // false
console.log(!!!false); // true

console.log(!regresaTrue());
console.log(!regresaFalse());

console.warn("And");
console.log(true && true);
console.log(true && false);

console.log("===========");
// ejecuta solo regresaFalse porque ya devuelve false, por lo que no sigue
console.log(regresaFalse() && regresaTrue());
// ejecuta regresaTrue y como es true sigue y ejecuta regresaFalse aunque posteriormente devuelva false
console.log(regresaTrue() && regresaFalse());

console.log('4 condiciones ->', true && true && true && false);

console.log("===========");
console.warn("Or"); // true
console.log(true || false);
console.log(false || false);

console.log(regresaFalse() || regresaTrue());
// ejecuta regresaTrue y como es true ya para porque ya sabe que va a dar true
console.log(regresaTrue() || regresaFalse());

console.log('4 condiciones ->', true || true || true || false);


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

// si es true, devuelve el ultimo valor 
// const a1 = true && 'Hola Mundo' && 150;
// si es false para 
const a1 = false && 'Hola Mundo' && 150;

const a2 = 'Hola' && 'Mundo' && soyFalse && true;

const a3 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso';

console.log({a1, a2, a3}); 

if (true || true || true || false) {
    console.log('Hacer algo');  
}else{
    console.log('Hacer otra cosa');
}