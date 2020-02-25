// spread opertor
"use strict";

var a, b, c, d, arr;

a = [1, 2];
b = [4, 5];
c = [8, 9, 10];
d = 11;

//write code here
arr = [0, ...a, 3, ...b, 6, 7, ...c, d];

// Output   [0,1,2,3,4,5,6,7,8,9,10,11]
console.log(arr);
arr.push([12, 13]);
// asignamos a la var b 
var b;
//  Cuando copias solo el array así,
// b = a, copias el puntero, la referencia y al modificar uno lo haces en el otro también.
// por eso usamos el spred operator
b = [...arr];
b.push(" new element");
// Pero si modificas el array en un segundo nivel este se modifica también en la referencia.
b[12].push(14);

console.log(b);
console.log(arr);
