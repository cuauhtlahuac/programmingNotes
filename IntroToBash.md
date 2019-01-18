1.- First in IOS machine: 
--
I created a file in prompt with touch command in documents with the extenction .sh, and the name script
2.- Second: Open File
--
Then I opened the file and wrote a line of code  on the top with the next text:

``` #!/bin/bash ```

There is the explanation: This tells the computer which type of interpreter to use for the script.
___
3.- run the script
--
 in the same folder were was placed with the command:  ./script.sh
___
4.- Inside of the script: 
--
to declare a variable only need the name and the assigment of value like : phrase="Hello World" and the call it with the $ symbol before the name of the variable.
___
5.- CONDITIONALS:
--
Is  Like next lines: 
```
if [ $index -lt 5 ]
then
  echo $index
else
  echo 5
fi
```
[ ]=Put inside the conditional
fi = Ends the conditionals
-lt = is one of the list of comparison operators wich is "less than"
**Here is the list of comparison operators you can use within bash scripts:**
Equal: -eq
Not equal: -ne
Less than or equal: -le
Less than: -lt
Greater than or equal: -ge
Greater than: -gt
Is null: -z
___
 6.- LOOPS:
--
There are for, while and until
example:
```
while [ $index -lt 5 ]
do
  echo $index
  index=$((index + 1))
done
```
Note that arithmetic in bash scripting uses the $((...)) syntax and within the brackets the variable name is not prepended with a $.

**Code refactor...**
```
#!/bin/bash
first_greeting="Nice to meet you!"
later_greeting="How are you?"
greeting_occasion=0
while [ $greeting_occasion -lt 3 ]
do
  if [ $greeting_occasion -lt 1 ]
  then
    echo $first_greeting
  else
    echo $later_greeting
  fi
  greeting_occasion=$((greeting_occasion + 1))
done
```
___

7.- INPUTS:
--
 We use a "read" word , other form is write a some variable and the option next to it, like: saycolors red green blue.
You can call it with $1 or $2 or $3, referring to option position.
Also you can iterate using the "$@" syntax like:
```
for color in "$@"
do
  echo color
done
```
---
Lastly Podemos acceder a archivos externos a nuestro archivo.
puedes asignar el archivo buscado a una variable, para obtener todos puedes usar * like:
``` 
files = /some/directory/* 
````
Para iterarlo e imprimir los archivos...
```
for file in $files
do
  echo $file
done
```
8.- Final Code...
--
```#!/bin/bash
first_greeting="Nice to meet you!"
later_greeting="How are you?"
greeting_occasion=0
echo "How many times should I greet?"
read greeting_limit
while [ $greeting_occasion -lt $greeting_limit ]
do
  if [ $greeting_occasion -lt 1 ]
  then
    echo $first_greeting
  else
    echo $later_greeting
  fi
  greeting_occasion=$((greeting_occasion + 1))
done
```
