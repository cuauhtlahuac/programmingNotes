# ECMA 6


## Múltiple Parameters
• Pasar múltiples parámetros
``` js
function sum(...params){
var total = params.reduce((acum,elem)=>{
	return acum + elem
	})
	return total;
}
console.log(sum(1,3,6,7));
```
Todos los valores pasados como parametros se guardan en una var del tipo array


• Constante keyword crea valores inmutables, pero no aplica para arrays y objetos, estos pueden mutar usando por ejemplo arr.push() y no lanza error.

• Let keyword tiene scope, var tiene global scope, let respeta la posición donde se declara, var es automáticamente movido al top del bloque.

• Ternary operator
condition ? res1 : res2

• Arrow function debe ser expresada, no declarada, puede ser anónimo.

• Default parameters
(parametro = 2)
Si el parametro es indefinido asigna por default el valor.

• Default parameters throw error.
(parameter=missingArg())

missingArg(){
throw new Error("missingArg argumento in función name")
}

Cuando el parametro sea nulo por default ejecutara la función con el error y el mensaje.

• destructure
Lo que eh visto funciona igual, pero una forma extra es aplicarlo directo en el parametro.
function multiply({x,y,z})
Funciona como un let;

• arr destructure
Puedes asignar el valor de un index a  variables respetando ubicaciones.
[a,,b,...c] = arr;

• arr spred operator.
Puedes guardar solo los valores de los index, sin los corchetes. Sirve para copiar un array a otro de forma independiente. Cuando copias solo el array así, b = a, copias el puntero, la referencia y al modificar uno lo haces en el otro también.

Es importante decir que si copias un array con spread op. O con slice() method se crea solo la copia en el primer nivel del array, para hacer una copia sin importar el nivel se puede usar la combinación de JSON.parse y JSON stringify.

Template literal.

Puedes poner lógica dentro del Template ${true?"hola":"adios"}

• String iterate

Un string es una instancia de String por lo que en realidad es un Objeto. Se puede saber su lenght y aplicar métodos que aplican también para arrays.

Swap values.

Usar destructuring [b,a]=[a,b]

## IIFE
Una función anónima no la puedes llamar después, si la haces expresión se puede llamar con el nombre de la variable donde se guarda la función anónima.

Que pasa si quieres crear funciones dentro de una funcion como métodos.
El problema es que si quicieras llamar un método de una función tendrías que  hacer algo fuera de sintaxis como foo().method(param)
Para lograrlo usamos en el ejercicio un IIFE. 
Inmediatly invoque función expresion.
Lo usamos para crear funciones dentro de una funcion expresada que retorna un objeto con funciones y variables. Las variables que se cambien se guardan en el closure, si se cambian variables entonces también se guardan dentro de la función.

Función constructor

En Javascript cada función is a function constructure.
Por lo tanto puedes invocar las variables y metodos de una
 instancia con tan solo llamarlos.
 
 The 'new' keyword crea una instancia de una función usando el constructor.
 Si imprimimos por ejemplo apple veremos que es una instancia de fruit constructure.

Clases.

La clases te permiten asignar constructor y prototypes en el mismo lugar.

Iterate over an object.

Para iterar un objeto en js usar los métodos
Object.keys(myObj)
Object.values(myObj)
Object.entries(myObj) // this return an array of both
Pero el profesor buscó en los métodos de los strings en la consola de chrome y mostró Symbol iterator, este método nos permite iterar sobre strings y arrays. Pero las instancias de objetos no lo tienen.

instanceof help us to know if a variable is an instance of string, object etc.

