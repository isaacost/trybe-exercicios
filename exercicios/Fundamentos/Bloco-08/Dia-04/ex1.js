const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
    // escreva seu código aqui
    const resultado = arrays.reduce((acc, curr) => acc.concat(curr), [])
    return resultado;
}

console.log(flatten());