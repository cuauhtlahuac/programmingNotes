# Javascript Pro Tips.

## Debuggin like Pro.

#### Use Console.log...

1. Print variables into an Object.
```js
console.log({var1, var2});
```
2. Custom CSS styling, with `%c`
```js
console.log('%c message','color: deeppink; font-size: 20px');
```
3. Console table in objects with common properties. It gonna display as a table.
```js
console.table([foo,bar,baz]);
```
4. Check the performance with time...
```js
console.time('looper');
// code to inspect here
console.timeEnd('looper');
```
5. Stack trace logs (apilar registros de seguimiento). The code will print wherever the function been call it.
```js
const deleteMe = () => console.trace('bye bye database');
deleteMe();
deleteMe();
```

#### At this point you'r a debuggin expert...

## Make code concise and efficient as possible.

1. Destructuring
  - **Base Code**
  ```js
const turtle = {
  name: 'Bob',
  legs: 4,
  shell: true,
  type: 'amphibios',
  meal: 10,
  diet: 'barries'
}
```  
  - **Bad Code**
```js
function feedAnimal(animal){
  return `Feed ${animal.name} ${animal.meal} Kilos of ${animal.diet}`;
}
```  
  - **Good Code:** 
  
_Pass only the name of the props as argument_

```js
function feedAnimal({name, meal, diet}){
  return `Feed ${name} ${meal} Kilos of ${diet}`;
}
```

_Some People don't like brackets syntax so you might..._
    
```js
function feedAnimal(animal){
  const { name, meal, diet } = animal;
  return `Feed ${name} ${meal} Kilos of ${diet}`;
}
```  
