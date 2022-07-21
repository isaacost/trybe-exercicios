const checaNumero = (meuNumero, numero) => meuNumero === numero;

const sorteio = (meuNumero, callback) => {
    const numero = Math.floor((Math.random() * 5) + 1);

    if (callback(meuNumero, numero)) {
        return 'Parabéns, você ganhou!!!!!!!!!';
    }

    return 'Tente novamente';
};

console.log(sorteio(3, checaNumero));