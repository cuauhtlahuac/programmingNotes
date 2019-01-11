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
