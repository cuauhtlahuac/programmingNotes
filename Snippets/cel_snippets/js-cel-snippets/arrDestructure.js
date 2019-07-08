// Array destructure
let a, b, c;
const arr = [1, 2, 3, 4, 5, 6, 7];
// Puedes asignar el valor en un index a una variable con la ubicación.
[a, , b, ...c] = arr;

console.log(a);
// a tomó el primer valor del index
// el segundo valor no se asigno a una variable con nombre
console.log(b);
// b tomo el tercer valor
// c se le asigno el resto
console.log(c);
