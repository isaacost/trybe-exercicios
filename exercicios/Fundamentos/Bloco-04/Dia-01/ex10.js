const custo = 242.00;
const venda = 373.00;
let custoComImposto = custo * 1.20;
let lucro = (venda - custoComImposto)*1000;

if (custo < 0 || venda < 0) {
    console.log('ERRO!');
} else {
    console.log(lucro);
}
