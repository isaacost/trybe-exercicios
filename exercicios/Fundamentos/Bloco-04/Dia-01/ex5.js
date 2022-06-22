const a = 50;
const b = 90;
const c = 40;

if (a < 0 || b < 0 || c < 0) {
    console.log('ERRO! Um angulo não é válido!')
} else if (a + b + c == 180) {
    console.log(true);
} else {
    console.log(false);
}