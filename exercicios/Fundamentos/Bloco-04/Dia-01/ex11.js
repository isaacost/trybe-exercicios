let salario = 3000.00;
let INSS;
let IR;

if (salario <= 1556.94) {
    INSS = salario * 0.08;
    salario = salario - INSS;
} else if (salario > 1556.95 && salario <= 2594.92) {
    INSS = salario * 0.09;
    salario = salario - INSS;
} else if (salario > 2594.93 && salario <= 5189.82) {
    INSS = salario * 0.11;
    salario = salario - INSS;
} else {
    INSS = 570.88;
    salario = salario - INSS;
}

console.log(INSS);


if (salario <= 1903.98) {
    IR = 0;
    salario = salario - IR;
} else if (salario > 1903.99 && salario <= 2826.65) {
    IR = (salario * 0.075) - 142.80;
    salario = salario - IR;
} else if (salario > 2826,66 && salario <= 3751.05) {
    IR = (salario * 0.15) - 354.80;
    salario = salario - IR;
} else if (salario > 3751.06 && salario <= 4664.68) {
    IR = (salario * 0.225) - 636.13;
    salario = salario - IR;
} else {
    IR = (salario * 0.275) - 869.36;
    salario = salario - IR; 
}

console.log(IR);
console.log(salario);