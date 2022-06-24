let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0].length;
let menor = array[0].length;
let j = 0;
let k = 0;



for (let i = 0; i < array.length; i += 1) {
     if (maior < array[i].length) {
         maior = array[i].length;
         j = i;

     } else {
         maior = maior;
     }
     if (menor > array[i].length) {
         menor = array[i].length;
         k = i;
 } else {
    menor = menor;
 }
    
 }

console.log('O maior valor é:' + maior + ' da palavra ' + array[j]);
console.log('O menor valor é:' + menor + ' da palavra ' + array[k]);