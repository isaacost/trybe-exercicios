let a = 337;
let b = 124;
let c = 52;

if (a > b && a > c) {
    console.log(a);
} else if (a > b && a < c) {
    console.log(c);
} else if (a < b && a > c) {
    console.log(b);
} else if (a < b && b > c) {
    console.log(b);
} else if (a < b && b < c) {
    console.log(c);
} else if (a > b && b < c) {
    console.log(a);
} else if (a < c && b < c) {
    console.log(c);
} else if (a > c && b < c) {
    console.log(a);
} else if (a < c && b > c) {
    console.log(b);
}