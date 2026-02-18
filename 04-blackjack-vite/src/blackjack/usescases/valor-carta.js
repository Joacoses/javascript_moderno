/**
 *
 * @param {String} carta Ej: '9C'
 * @returns {Number} Devuelve el valor de la carta
 */
export const valorCarta = (carta) => {
    if (!carta || carta.length === 0) {
        throw new Error("No es una carta valida");
    }
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
