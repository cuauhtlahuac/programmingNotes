# Javascript Algorithms and Data structure masterclass

## Big O

O is for the word Operation.

Big O helps us to find the better solution between a bunch of solutions.

**Whats better means?**

Faster.
How much memory it use.
Readability.

**Browser Tool to check speed**

`performance.now()`

### what big O notation is.
Is about how runtime of the algorithm grow as the input grow.
The relationship between the input and how affects the runtime of the algorithm.

O(1):  the runtime time is a flat line, the algorithm perform always the same number of operations.

O(n): the runtime grows in a diagonal line form in proportion with the size of the input. this happens more frequently in loops, and no matter the number of the loops, it won't affect the runtime like the input would, this loops must be no nested inside other to keeping this rule.

O(n^2): the runtime grow in a curve line, regulary happens with nested loops.
You can thinking as each operation will be perform three times and in a nested loop will be three times three with a total of nine times.

### Simplify big O notation

O(2n) operation is two operation in a n input simplifies to O(n) because no matter the number of the operation the runtime depens of the input. = O(n)

O(500) five hundred operations do not affect the constant of execute only one time at the time. O(1)

O(5n^2) = 0(n^2)

### Time complexity

Time is variable, múltiple things can change his value.

### Space complexity

Basicaly is count the number of simple operations that the computer has to perform.
Count for example the multiplicación, división, addition. The numbers don't count in this case.

Things are diferentes in a loop, the operations will be bigger if the number of iteration increments.

Most primitive are constant space.
Strings has O(n) space, same case for arrays and objects, the more number of value more space they get.



###  What logarithm is
Is the pair of exponention

Example: log2(8) = 3. ---> 2^3=8
Here is to question us, how number give us eight when multipling the base number 2.

In big O the short hand is log === log2
Rule of thumbs === RT
RT: logarithm is measure the number of times you can divide a number until one

### Built-in data structures 
**through the lens of big O**

#### how objects and arrays works
Big O objects
Insertion O(1)
Removal O(1)
Searching O(n) -> Object.keys values
Accesos (n) - > hasOwnProperty

Big O arrays
Insertion ...depends
Removal ...depends
Searching O(n)
Access O(1)

#### why adding elements in the beginning of an array is costly
Because all the array needs to reindex 
#### Compare and contraste the runtime for arrays and objects, as well as built-in methods
Arrays has index, objects has keys.

## Algorithms and problem solving patterns

### define what an algorithm is

A process or set of steps to accomplish a certain task

### devise a plan to solve algorithms

#### Problem solving

Based un George Polya book _how to solve it_

1. Understand the problem
Make questions like.
Can I restate the problem in my own words?
What are the inputs that go into the problem?
- size, type, out of bounds, etc...
What are the output that should comes from the solution to the problem
Do I have enough information to solve the problem?
How can I label the important pieces
2. Explore concrete examples
Start with simple example
Progress to more complex
Explore with empty inputs
With invalid inputs
Make questions like, what about if...
3. Break it down
Make a little comments before start to code.
Using like a little guide
Explicity write out the steps you need to take
4. Solve and simplify
Solve... If you can't then solve a simply problem.
Don't stuck in one dificult part of the problem with zero progresa at all.
Start writing code of the things that you know how to do.
**Simplify**
Find the more dificulty un what you'r trying to do 
Temporary ignore that dificult
Write a simplified solution
Then incorpore that difficulty back in.
5. Look back and refactor
Make some code improving questions

### Compare and contrast problem solving patterns including:

- **frecuency counters.**
The example was by compare two lists and check if are exactly the same in size and values. We can use a nested loop but this means that the solutions will be On^2.
Then we can use a object and sabe each value as a key and give as value the number of times that the key(value) apears,  do the same with the other list and finally compare. This is On solution
- **two pointer problems**
- move value index to end, start or to the middle.
- basicaly is about to take two pointers and using to get data and compare that data, or to make computations.
- **Sliding window**
- Es como mover una ventana
- En el ejemplo suma arrays y para mover la ventana substrae el index anterior y añade el siguiente.
- **divide and conquer**
Is basicaly search from the middle and ask for the major value con left por right and divide again.

### Recursión

Is as the story of marty and the angry dragon, that only said if the first number is odd. Marty gives a new list each time to the dragon and question if the first number of the list is odd.

## stack

The stack is how the function will be call. Is  like a stack of books, the last book con top of the stack will be the first called. The last function will be the first to be called when the stack is over.

### What is recursión
Basicaly is a function that call himself.
It needs:
Base case - something that stop the recursión in some point.
Diferent input: Each time the function is call, the parameter of that function must be  a new value.

### Recursion pitfalls
* No base case
* Returning the wrong thing (like the sum but without num to add)
* instead of return using a console.log


## Collect all odds numbers of an array
### Pattern Helper method recursion
Es crear una función, dentro crear una variable (del tipo array en el ejemplo), crear una función que va a modificar el parametro usando recursion, llamar esa función recursiva, y retornar una nueva variable con los nuevos valores. Esto para que no modifiquemos la función original y no tengamos que declarar las variables fuera de nuestra función recursiva.

### Pure recursion

Se crea la función recursiva, dentro se crea una variable newArray, dentro se pregunta si el el lenght del array recibido es 0 return.
Se pregunta si el primer index es odd, se asigna a una variable newArray. Después newArray es igual a el resultado de concatenar newArray con la funcion creada pasándole el array sin el primer index.
