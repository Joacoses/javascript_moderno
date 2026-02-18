/**
 *
 * @param {Array<String>} deck Ejemplo: ['9C', 'JC', '9D',...]
 * @returns {String} Devuelve la nueva carta del jugador
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw new Error("No hay cartas en el deck");
    }
    const carta = deck.pop();
    return carta;
};
