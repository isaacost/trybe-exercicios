let word = 'trybe';
let inversa = '';

for (let i = word.length - 1; i >= 0; i -= 1){
    inversa += word[i];
}

console.log(inversa);