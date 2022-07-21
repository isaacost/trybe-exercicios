const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostasDoEstudante = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'C'];

const comparaRespostas = (gabarito, respostasDoEstudante) => {
    if (gabarito === respostasDoEstudante) {
        return 1;
    } if (respostasDoEstudante === 'N.A') {
        return 0;
    }
    return -0.5;
}

const nota = (gabarito, respostasDoEstudante, callback) => {
    let contador = 0;
    for (let i = 0; i <= gabarito.length; i += 1) {
        const compara = callback(gabarito[i], respostasDoEstudante[i]);
        contador += compara;
    }

    return `Nota: ${contador} pontos `;
};

console.log(nota(gabarito, respostasDoEstudante, comparaRespostas));