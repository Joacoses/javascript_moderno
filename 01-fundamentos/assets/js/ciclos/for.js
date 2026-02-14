const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"];

console.warn("For tradicional");

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}


console.warn("For in");

for (const i in heroes) {
    if (!Object.hasOwn(heroes, i)) continue;
    
    console.log(heroes[i]);
    
    
}


console.warn("For in");

for (const hero of heroes) {
    console.log(hero);
}






