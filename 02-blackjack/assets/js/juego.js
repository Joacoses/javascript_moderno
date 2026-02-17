// Funciones anonimas autoinvocadas
// De esta forma no pueden acceder los usuarios a estos campos
// Modulo Patron
const miModulo =(() => {
    "use strict";

    // ? Variables
    let deck = [];
    const tipos = ["C", "D", "H", "S"],
        especiales = ["A", "J", "Q", "K"];

    let puntosJugadores = [];

    // ? Referencias DOM
    // Cuando vamos a trabajar con el elemento mas de una vez, es recomendable que este en una variable
    const btnPedir = document.querySelector("#btnPedir"),
        btnDetener = document.querySelector("#btnDetener"),
        btnNuevo = document.querySelector("#btnNuevo");

    const divCartasJugadores = document.querySelectorAll(".divCartas"),
        puntosHTML = document.querySelectorAll("small");

    // ! =========================================================================================================
    // ? Funciones

    // Esta funcion inicializa el deck para jugar
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
        
        puntosHTML.forEach((elemento) => (elemento.innerText = 0));
        divCartasJugadores.forEach((elemento) => (elemento.innerHTML = ''));

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    };

    /**
     * Crea una nueva baraja de cartas mezclada de forma aleatoria.
     * Utiliza los arreglos globales 'tipos' (C, D, H, S) y 'especiales' (A, J, Q, K).
     * Depende de la librería Underscore.js para el mezclado.
     * @returns {Array<string>} Un nuevo arreglo de strings que representa el mazo mezclado.
     */
    const crearDeck = () => {
        // reinicializar deck
        deck = [];
        // Crear cartas numéricas
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        // Crear cartas de figuras
        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }
        // solo funciona cuando se ejecuta el index.html, ya que esta importado alli
        return _.shuffle(deck);
    };

    /**
     * Extrae y retorna la última carta del mazo actual.
     * @throws {string} Lanza un error si el mazo (deck) está vacío.
     * @returns {string} La carta obtenida (ej: '10H', 'AS', '2C').
     */
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw "No hay cartas en el deck";
        }
        return deck.pop();
    };

    /**
     * Obtiene el valor numérico de una carta a partir de su identificador textual.
     * @param {string} carta - El identificador de la carta (ej: '2C', '10D', 'AS', 'KH').
     * @returns {number} El valor de la carta en el contexto del Blackjack.
     * - Cartas numéricas: su valor nominal.
     * - Figuras (J, Q, K): 10 puntos.
     * - As (A): 11 puntos.
     */
    const valorCarta = (carta) => {
        // USARÍAMOS LET AQUÍ: Si tuviéramos un acumulador que cambia en cada carta.
        const valor = carta.substring(0, carta.length - 1);
        return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
    };

    // Turno: 0=primer jugador y el ultimo sera la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    };

    const crearCarta = (carta, turno) => {
        // creamos las cartas en el HMTL
        const imgCarta = document.createElement("img");
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add("carta");
        divCartasJugadores[turno].append(imgCarta);
    };

    const determinarGanador = () => {
        // Desestructuracion
        const [puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert("Nadie gana");
            } else if (
                puntosMinimos > 21 ||
                (puntosComputadora > puntosMinimos && puntosComputadora <= 21)
            ) {
                alert("Computadora gana");
            } else if (puntosComputadora > 21) {
                alert("Jugador gana");
            }
        }, 100);
    }

    /**
     * Ejecuta la lógica del turno de la computadora en el juego de Blackjack.
     * La computadora pedirá cartas hasta superar los puntos mínimos del jugador
     * o alcanzar el límite de 21 puntos.
     * @param {number} puntosMinimos - Los puntos que el jugador obtuvo y que la computadora debe superar.
     * @returns {void} No retorna ningún valor, pero actualiza el DOM y muestra alertas de resultado.
     */
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta,puntosJugadores.length - 1,);
            crearCarta(carta, puntosJugadores.length - 1);
        } while (puntosComputadora < 21 && puntosMinimos <= 21);

        determinarGanador(puntosMinimos,puntosComputadora)
    };

    // ! =========================================================================================================
    // ? Eventos

    btnPedir.addEventListener("click", () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);

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
        turnoComputadora(puntosJugadores[0]);
    });

    btnNuevo.addEventListener("click", () => {
        console.clear();
        inicializarJuego();
    });

    // Esto siempre tiene que ser lo ultimo del modulo 
    return {
        // como quiero que sera conocido de forma publica : a que llama
        nuevoJuego: inicializarJuego
    };

})();

/* 
(()=>{

})();

(function() {
    
})
 */
