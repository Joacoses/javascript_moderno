/* 
2C = Two of clubs -> treboles
2D = Two of Diamonts
2H = Two of Hearts
2S = Two of Spades
 */

// ! =========================================================================================================
// ? Variables
let deck = [];

const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0;
let puntosComputadora = 0;

// ! =========================================================================================================
// ? Referencias HTML
// Cuando vamos a trabajar con el elemento mas de una vez, es recomendable que este en una variable
const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector("#btnDetener");
const btnNuevo = document.querySelector("#btnNuevo");
const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

const puntosHTML = document.querySelectorAll("small");

// ! =========================================================================================================
// ? Funciones

//-------------------------------------
// Esta funcion crea una nueva baraja aleatoria
//-------------------------------------
//  Lista<String>:tipos, Lista<String>:especiales -->
//  crearDeck()
//  --> Lista<String>:deck
//-------------------------------------
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo);
        }
        // deck.push(i+'C');
    }

    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    // console.log(deck);
    // solo funciona cuando se ejecuta el index.html, ya que esta importado alli
    deck = _.shuffle(deck);
    console.log(deck);

    return deck;
};

crearDeck();

//-------------------------------------
// Esta funcion me permite tomar una carta
//-------------------------------------
//  Lista<String>:deck --> String:carta
//  pedirCarta()
//  --> String
//-------------------------------------
const pedirCarta = () => {
    if (deck.length === 0) {
        throw "No hay cartas en el deck";
    }
    const carta = deck.pop();
    return carta;
};

// pedirCarta();

/* const valorCarta = (carta) => {
    // carta.split('');
    valor = carta.substring(0, carta.length-1);
    console.log(valor);

    let puntos = 0;

    if (isNaN(valor)) {
        puntos = (valor === 'A') ? 11 : 10;
        console.log('No es un numero');
        console.log(puntos);

    }else{
        puntos =+ valor;
        console.log(puntos);
        console.log(`Es un numero: ${puntos}`);
    }
    return valor;
} */

//-------------------------------------
// Esta funcion devuelve el valor que tiene la carta
//-------------------------------------
//  String:carta --> String:valor -->
//  valorCarta(carta)
//  --> Number
//-------------------------------------
const valorCarta = (carta) => {
    // USARÍAMOS LET AQUÍ: Si tuviéramos un acumulador que cambia en cada carta.
    const valor = carta.substring(0, carta.length - 1);
    // console.log(valor);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};


//-------------------------------------
// turno de la computadora
//-------------------------------------
//  Int:puntosMinimos --> Int:puntosComputadora -->
//  turnoComputadora(puntosMinimos)
//  --> Number
//-------------------------------------
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        puntosComputadora += valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;
        // creamos las cartas en el HMTL
        const imgCarta = document.createElement("img");
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add("carta");
        divCartasComputadora.append(imgCarta);

        if (puntosComputadora >= 21 || puntosComputadora >= puntosMinimos) {
            break;
        }
    } while ((puntosComputadora < 21) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana')
        } else if (puntosMinimos > 21 || (puntosComputadora > puntosMinimos && puntosComputadora <=21)) {
            alert('Computadora gana')
        }else if (puntosComputadora > 21) {
            alert('Jugador gana')
        }
    }, 10);
};

// ! =========================================================================================================
// ? Eventos

btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();

    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    // creamos las cartas en el HMTL
    // <img class="carta" src="assets/cartas/10C.png" />
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
});

btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener("click", () => {
    console.clear();

    // OPCION MIA
    const cartas = document.querySelectorAll(".carta");
    cartas.forEach((carta) => carta.remove());
    // OPCION FH 
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

    puntosComputadora = 0;
    puntosJugador = 0;

    // OPCION MIA
    console.log(puntosHTML);
    puntosHTML.forEach((puntosHTML) => puntosHTML.innerText=0);
    // OPCION FH
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    deck = [];
    crearDeck();
});
