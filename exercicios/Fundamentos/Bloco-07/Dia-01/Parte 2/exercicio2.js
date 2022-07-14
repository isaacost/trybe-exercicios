// const maiorPalavra = (string) => {
//     const palavraArray = string.split(' ');
//     let maiorTamanho = 0;
//     let resultado;

//     for (const palavra of palavraArray) {
//         if (palavra.length > maiorTamanho) {
//             maiorTamanho = palavra.length;
//             resultado = palavra;
//         }

//     }

//     return resultado;
// }

// console.log(maiorPalavra('Antonio foi ao banheiro e não sabemos o que aconteceu'));

const maiorPalavra = (string) => string.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
console.log(maiorPalavra('Antonio foi ao banheiro e não sabemos o que aconteceu'));