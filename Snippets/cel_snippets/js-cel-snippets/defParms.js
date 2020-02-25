//default parameters
const multiply = (a, mult = 2) => {
  //mult = mult !== undefined ? mult : 2;
  console.log(a * mult);
};
// parametro definido como 2
multiply(2, 2);
// parametro no definido
multiply(2);
// parametro indefinido
multiply(2, undefined);
//0 parametro definido como cero
multiply(2, 0);
// parametro definido como 5
multiply(5, 10);
