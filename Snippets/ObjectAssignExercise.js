//El metodo copia solo las propiedades enumerables
// y propias del objeto origen a un objeto destino.
//origen GET (accesso) destino SET (establecimiento).

var obj = {
    a: 1
};
var copy = Object.assign({}, obj);
console.log(copy);

function test() {
    'use strict';
    let obj1 = {
        a: 0,
        b: {
            c: 0
        }
    };
    let obj2 = Object.assign({}, obj1);
    console.log(JSON.stringify(obj2));
    // { a: 0, b: { c: 0}}

    obj1.a = 1;
    console.log(JSON.stringify(obj1));
    // { a: 1, b: { c: 0}}
    console.log(JSON.stringify(obj2));
    // { a: 0, b: { c: 0}}

    obj2.a = 2;
    console.log(JSON.stringify(obj1));
    // { a: 1, b: { c: 0}}
    console.log(JSON.stringify(obj2));
    // { a: 2, b: { c: 0}}

    obj2.b.c = 3;
    console.log(JSON.stringify(obj1));
    // { a: 1, b: { c: 3}}
    console.log(JSON.stringify(obj2));
    // { a: 2, b: { c: 3}}

    // Deep Clone
    obj1 = {
        a: 0,
        b: {
            c: 0
        }
    };
    let obj3 = JSON.parse(JSON.stringify(obj1));
    obj1.a = 4;
    obj1.b.c = 4;
    console.log(JSON.stringify(obj1));
    // {a: 4, b: { c: 4}}
    console.log(JSON.stringify(obj3));
    // { a: 0, b: { c: 0}}
}

function mineTest_1() {
    let a = {
        aa: {
            'aaa': true,
            'aab': false
        },
        ab: {
            'aba': true,
            'abb': false
        }
    }
    let b = Object.assign({},a,{ ab: Object.assign({},a.ab,{abb: true})});
    let c = Object.assign({},a,{ab: true})

    console.log(JSON.stringify(a));
    console.log(JSON.stringify(b));
    console.log(JSON.stringify(c));
    //END

}
mineTest_1();
