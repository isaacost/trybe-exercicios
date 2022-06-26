//1
function palindromo(palavra) {
    let inversa = palavra.split('').reverse().join('');
    if (inversa === palavra) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));

//2

function maior(array) {
    let maiorNumero = array[0];
    let maiorIndice = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (maiorNumero < array[i]) {
            maiorNumero = array[i]
            maiorIndice = i
        }

    }
    return ('O maior valor é '+ maiorNumero+ ' no indice '+ maiorIndice)
}

console.log(maior([2, 3, 6, 7, 10, 1]));

//3

function menor(array) {
    let menorNumero = array[0];
    let menorIndice = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (menorNumero > array[i]) {
            menorNumero = array[i];
            menorIndice = i;
        }

    }
    return ('O menor valor é ' + menorNumero + ' no indice ' + menorIndice)
}

console.log(menor([2, 4, 6, 7, 10, 0, -3]));

//4

function nomes(array) {
    let quantidadeDeCaracteres = 0;
    let nome = '';

    for (let i = 0; i < array.length; i += 1) {
        if (quantidadeDeCaracteres < array[i].length) {
            quantidadeDeCaracteres = array[i].length;
            nome = array[i];
        }
    }

    return nome
}

console.log(nomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//5 entender melhor essa questão

function repeticao(array) {
    let quantidadeMaiorDeRepeticoes = 0;
    let quantidadeDeUmNumero = 0;
    let indexMaisRepetido = 0;

    for (let i = 0; i < array.length; i += 1){
        let verificador = array[i];

        for (let j = 0; j < array.length; j += 1){
            if (verificador === array[j]) {
                quantidadeDeUmNumero += 1;
            }
        }

        if (quantidadeDeUmNumero > quantidadeMaiorDeRepeticoes) {
            quantidadeMaiorDeRepeticoes = quantidadeDeUmNumero;
            indexMaisRepetido = i;
        }
        quantidadeDeUmNumero = 0;
    }
return ('O inteiro que mais se repete é: ' + array[indexMaisRepetido] + ' no total de ' + quantidadeMaiorDeRepeticoes + ' vezes.')

}
console.log(repeticao([2, 3, 2, 5, 8, 2, 3]));

//6

function somatorio(numero) {
    soma = 0;
    for (let i = 1; i <= numero; i += 1){
        soma += i;
    }
    return soma;
}

console.log(somatorio(5));

//7

function verificaFimDaPalavra(palavra, fimDaPalavra) {
    let palavraInversa = palavra.split('').reverse().join('');
    let fimInverso = fimDaPalavra.split('').reverse().join('');
    let resultado;

    for (let i = 0; i < fimDaPalavra.length; i += 1) {
        if (palavraInversa[i] !== fimInverso[i]) {
            resultado = false;
            break
        } else
            resultado = true;
    }
    return resultado;
}

console.log(verificaFimDaPalavra('trybe', 'be'));
console.log(verificaFimDaPalavra('joaofernando', 'fernan'));