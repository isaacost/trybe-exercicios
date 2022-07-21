let obj = {
    nome: "nome",
    age: 23,
};

function test(objeto, chave, valor) {

    objeto[chave] = valor;
    return objeto;
}

console.log(test(obj, "chave1", "valor1"));
