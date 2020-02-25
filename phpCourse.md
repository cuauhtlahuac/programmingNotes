# PHP

## Variables.

`$varname = "value"`

Comillas dobles para usar variables.

`echo "hola $varname"`

= _hola value_

Concatenar se usa un punto

`echo 'hola ' . $varname`

_= hola value_

Saber tipo de dato con gettype

```
echo gettype($varname)
```

## Constantes

Declarar constantes, las constantes atm se vuelven globales.

`define('pi',3.1416)`

## Arreglos.
````
$arr = array(6,8,'Falcón);
$arr2way= [2,4'master'];
echo arr[1];
````
### Arreglo asociativo.
````
$arr arr('tel:' => 4567,'edad'=>45, 'name'=>'peter');
echo arr['name'];
````
###   arreglos multidimencinales
````
   $amigos = array(
   	array(array('peter',30,'US')),
   	array('name'=>'Lys')
   	);
   echo $amigos[0][0][1];
   echo '/n' . $amigos[1]['name'];
````

### Ordenar arreglos
````
sort($arreglo);
rsort($arreglo); #revers
````
## Condicionales
````
if(condicion){
#code
}else if{
#code
}else{
}
````
### Atajo condicionales
If true ? Do : else Do


[ ] Revisar 
- [ ] Comparativos
- [ ] Condicionales
- [ ] Operdores

## Switch

`switch($value){
case  ' ':
#instrucciones
break;`

## Ciclos
### For
for($i = 0;i >=10;$i ++){
#code
}

### While
`while (condition){ 
#block of code to be executed; 
}`


### Do while

`$i = 9; 
do{
 echo "$i is"." <br>"; 
} while($i < 9); `


### foreach 
solo para arreglos

`foreach($arreglo as $item){
#code...
}`

### foreach arreglo asociativo

`foreach($arr as $key => $val){}`

### Brake
Corta la ejecución de un ciclo

`brake;`

### Continue

Salta a la siguiente ejecución

`continue;`

## Funciones
`
function saludo($params){
return $result
}
`

## Scope
Las variables globales pueden ser accesadas desde cualquier lugar excepto dentro de funciones.

`$variable;
función(){
echo $variable;
};
#mostrara un error para solucionarlo #pasalo como parametro`

El scope aplica también para variables dentro de funciones, si queremos acceder a ellas debemos de retornarlas.

## include and requiere
Nos permiten incluir archivos dentro de otro archivo PHP, por ejemplo la vista de una pagina puede ir en otro archivo y carpeta y de ahí llamarlo.

**Include** arroja un warning pero no detiene la ejecución del resto del código en caso de  que no lo encuentre.
`include('vista.php');`

**Require** arroja fatal error y no ejecuta el resto del código en caso de que no lo encuentre.
`require('vista.php');`


## Methods
### isset, 
verifica si una variable tiene valor o no
`isset($val)`

Count cuenta los elementos de array o arreglo asociativo.
`count($arr)`

### Var dump

Imprime el type and value 

`var_dump(value)`

### Print r
Imprime el valor de una variable de forma simplificada, ideal para arrays

`print_r(value)`;

### die()
Corta todo lo que esta debajo de la función

## String
[Funciones de string](https://php.net/manual/en/ref.strings.php)

### html especial charts
Sirve por ejemplo para evitar que el usuario escriba código html, porque convierte el texto a entidades de html.

`
$texto = '<b>texto</b>'
#sin html especial charts
**texto**
htmlspecialchars($texto);
< b>texto...
`
### trim
Corta los espacios en blanco al principio y al final de una cadena.

### substr
Corta desde el index indicado como primer parametro y cuantas letras como segundo.

### strlen
Te regresa la longitud de una cadena

### string Cases
strtoupper($texto);
strtolower($texto);

### string posición
Te devuelve la posición de una letra en una. cadena.
strpos($text,'h');

## arreglos
[Funciones de Arrays](https://php.net/manual/es/ref.array.php)
### estract
Te guarda las llaves de un arreglo asociativo como variables, como destructurs de js.

`estract ($arreglo);`

Hora puedes llamar cualquier llave como variable y usar sus valores.

### array pop
Quita el ultimo elemento de un arreglo y lo puedes guardar en una variable.

`array_pop($array)`

### join
Pone un string entre cada valor del index del array

`join("-",$array);`

### sort
Ordena los elementos en orden ascendente

`sort($array)`

### rsort
Ordena los elementos en orden descendente

### count
Count cuenta el total de elementos de un arreglo

### reverse
Ordena un arreglo al revés de como esta ordenado.

`reverse($array);`

## TIPS

### phpinfo
Para saber con que versión de PHP estas trabajando, ejecuta `phpinfo();` dentro de tu documento PHP. Si tu versión de PHP es menor a siete, instala la última versión de Xamp

### funcion die
No permite ejecuciones por debajo.

### declaraciones tipo escalar
Te permite restringir el tipo de dato de un parametro. Si tu le pasas un dato a una función, le puedes decir que solo quieres del tipo integer, string etc.
Como se escribe?
`function (int $num){}` 

### declaraciones typo devolución
Solo permite a una función regresar un typo de dato especifico. Por ejemplo solo enteros o strings etc.
Como se escribe?
`function() : int {return $num}`

#### declare strict types
Si necesitas solo valores estrictos, (no números dentro de strings), cuando restringes tipos de datos coloca en el top.
 `declare(strict_types=1)`

### comparador nave espacial
<=>
Regresa 0,1 o -1; cero los dos son igual, uno izq mayor.