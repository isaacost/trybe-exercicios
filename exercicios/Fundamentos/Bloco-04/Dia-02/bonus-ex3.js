let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];
let multiplicacao = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (i == numbers.length - 1) {
        multiplicacao = numbers[i] * 2;
        array.push(multiplicacao);
    } else {
        let j = i + 1;
        multiplicacao = numbers[i] * numbers[j];
        array.push(multiplicacao);
    }
}

console.log(array);