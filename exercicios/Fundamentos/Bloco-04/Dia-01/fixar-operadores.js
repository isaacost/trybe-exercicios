const currentHour = 5;
var message = '';

if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour < 22 && currentHour >= 18) {
    message = 'Rango da noite, vamos jantar :D';
} else if (currentHour < 18 && currentHour >= 14) {
    message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour < 14 && currentHour >= 11) {
    message = 'Hora do almoço!!!'
} else if (currentHour < 11 && currentHour >= 4) {
    message = 'Hmmm, cheiro de café recém passado'
}

console.log(message);

var weekDay = 'quarta-feira';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
    console.log('FINALMENTE, descanso merecido UwU');
}