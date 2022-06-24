let maiorNumeroPrimo = 0;
let arrayPrimos = [];

for (let num = 2; num <= 50; num += 1){
    let primo = 0;

    for (let div = 2; div < num; div += 1) {
        if (num % div === 0) {
            primo += 1;
        }

    }

    if (primo == 0) {
        maiorNumeroPrimo = num;
        arrayPrimos.push(num);
    }
}

console.log(maiorNumeroPrimo);
console.log(arrayPrimos);