//forEach
//1:
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
];

const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach(showEmailList);

//find
//1:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
    // Adiciona seu código aqui
    return numbers.find((numbers) => (numbers % 3 === 0) && (numbers % 5 === 0));
}

console.log(findDivisibleBy3And5());

//2:
const names1 = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
    // Adicione seu código aqui:
    return names1.find((nome) => nome.length === 5);
}

console.log(findNameWithFiveLetters());

//3:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
    // Adicione seu código aqui
    return musicas.find((musica) => musica.id === id);
}

console.log(findMusic('31031685'))

//some e every
//1:
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    //Adicione seu código aqui
    return arr.some((nome) => nome === name);
}

console.log(hasName(names, 'Ana'))

//2:
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
    //Adicione seu código aqui
    return arr.every((pessoa) => pessoa.age >= minimumAge);
}

console.log(verifyAges(people, 18));

//sort
//1:
const people2 = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
people2.sort((a, b) => a.age - b.age);


console.log(people2);

//2:
const people3 = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
people3.sort((a, b) => b.age - a.age);


console.log(people3);