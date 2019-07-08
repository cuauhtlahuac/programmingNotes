//Toda funcion declarada tiene constructor y prototypes
function fruit(title, price) {
  this.title = title;
  this.noTaxPrice = price;
  this.amount = 1.6;
  this.price = this.noTaxPrice * this.amount;
}
// toda funcion declarada anonimamente puede asignarse como prototype
fruit.prototype.amountInfo = function() {
  return "amount " + this.amount;
};
console.log(fruit);
console.log(fruit.prototype);
console.log(fruit.prototype.constructor);
// podemos demostrar que cada funcion tiene un constructor
console.log(fruit === fruit.prototype.constructor);
console.log(fruit.__proto__);
// creamos una nueva instancia
let apple = new fruit("apple", 16);
console.log(apple);
//conserva los metodos asignados
console.log("price: " + apple.price);
console.log(apple.amountInfo());
let oranje = new fruit("orange", 5);

class veggie {
  constructor(title, price) {
    this.title = title;
    this.noTaxPrice = price;
    this.amount = 0.5;
    this.price = this.noTaxPrice * this.amount;
  }
  priceInfo() {
    console.log(this.title + " price: " + this.price);
  }
}

let carrot = new veggie("carrot", 4);
carrot.priceInfo();
