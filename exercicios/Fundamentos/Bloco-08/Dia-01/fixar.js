const acordando = () => 'Acordando!!';

const cafe = () => 'Bora tomar café!!!';

const dormir = () => 'Partiu dormir!!';

const doingThings = (callback) => console.log(callback());

// Ao chamar a função doingThings:
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

doingThings(acordando);
doingThings(cafe);
doingThings(dormir);