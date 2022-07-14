// const fatorial = numero => {
//     let resultado = 1;

//     for (let i = 2; i <= numero; i += 1) {
//         resultado *= i;
//     }

//     return resultado;
// }

// console.log(fatorial(3));

//Recursiva

const fatorial = numero => numero > 1 ? numero * fatorial(numero - 1) : 1;
console.log(fatorial(4));