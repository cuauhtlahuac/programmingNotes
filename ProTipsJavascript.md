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

### Make code concise and efficient as possible.

#### 1. Destructuring
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

#### 2. Template literals

 - **The ${``}**
```js
`hola ${varName}, es un gusto`;
```
- **Wierd usage:** Instead of use (), you can use `` and pass it the arguments inside like...
```js
function horseAge(str, age){
const ageStr = age > 5 ? 'old' : 'young';
return `${str[0]}${ageStr} at ${age} years`;
}
//Look at instead of () I using `` that is weird but works
const bio2 = horseAge`This horse is ${horse.age}`;
// it will be printing: This horse is old at 7 years
```
You can use like template and use to return multiple values!

#### 3. Spread sintax...

- To explain I will adding the entire code below with comments, but basically, you can add multiples props and values without write line by line, it's write only once.

```js
const pikachu = {name: 'pikachu'};
const stats = {hp: 40, attack: 60, defense: 45};

'Bad Object...'
/*
pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;
*/

//const lvl0 = Object.assign(pikachu, stats);
//const lvl1 = Object.assign(pikachu, {hp: 70});

'Good Object...'
const lvl0 = {...pikachu, ...stats};
const lvl1 = {...pikachu, hp: 70};

//in array spreed works like push method
let pokemons = ['Arbok', 'Raichu', 'Sandshrew'];
//if you want to add new Pockemons don't do pokemons.push('pikachu')
//instead do:
pokemons = [...pokemons, 'Pikachu', 'Snorlax', 'Charizard'];
//Unshift...
pokemonsUnshift = ['Pikachu', 'Snorlax', 'Charizard',...pokemons,];
```
#### 4. Loops...

Same case than before, I will explain with the code and his comments, but in short, the for and while loops can be replace for the new array methods, that in one line of code return the wished values.

```js
const orders = [500, 30, 99, 15, 223];

//'BAD CODE...';
// Multiples variables and process
/*
const total = 0;
const withTax = [];
const highValue = [];

for(let i = 0; i<...)...
*/
//'GOOD CODE...';
// * With Modern array methods...

// To calculate the total with array reduce
// Use all back function with two arguments,
// The first argument is the accumulate value
// The second is the current value in the loop
const total = orders.reduce(
//line below will retun the total
(accumulate,current)=>accumulate + current
)
// To return a tax value use map
const withTax = orders.map(v=>v * 1.1);
// To return higher value use filter method.
// This method only returns the true value
//in this case only will return 500 and 223
const highValue = orders.filter(v=>v > 100)
console.log({
    total,
    withTax,
    highValue
});
```
### Async / Await.
- promise have three states:
 1. Pending: You don't know if you will get that phone
 2. Fulfilled: Mom is happy, she buys you a brand new phone
 3. Rejected: Your mom is happy, she withholds the phone
 
- Follow the code...

```js
const random = ()=>{
    return Promise.resolve(Math.random());
}

// BAD Promise CODE...X
/*
const sumRandomAsyncNums = ()=>{
    let first;
    let second;
    let third;
    return random()
    .then(v=>{
        first = v;
        console.log("first: ", {v})
        return random()
        .then(v =>{
            second = v;
            console.log("second: ", {v})
            return random()
            .then(v => {
                third = v;
                console.log("third: ", {v})
                return first + second + third;
            })
        })
    }) 
}
*/

// GOOD CODE...OK
// optimised is with ASYNC:

const sumRandomAsyncNums = async()=>{
    //Insted of .then better use await for each variable
    const first = await random();
    const second = await random();
    const third = await random();
    console.log(`result= ${first + second + third}`)
}

sumRandomAsyncNums()
```
