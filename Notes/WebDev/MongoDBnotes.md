# MONGO DB

1. Primero **descarga** (official page)[http://mongodb.com/]
2. Descarga el servidor comunitario, (Community server)[https://www.mongodb.com/download-center/community]
3. Completa la instalacion
4. **Importante!**: en c:/ root debe estar o debes crear la ruta data/db, aquí estará la configuración.

* Mongo DB es un servidor, pensemos en un circulo, dentro de él hay bases de datos, dentro hay **colecciones** que son como _tablas_ en SQL. Dentro las tablas **Documentos** (_registros_ en SQL)

* Cada **documento** se representa con partes de clave valor.   

```js
{
'field1': value,
'field2': value
}
```
ejemplo: 
```js
{
'nombre': 'Leonardo',
'apellido': 'Kuffo',
'id': '123456',
'edad': 21
}
```

**Colecciones** conjunto de Documentos. Una Coleccion va a tener todos los usuarios, personas, productos ...

### Usar Mongo...

1. Tenemos que **abrir dos archivos**, que hay que buscar en la carpeta donde se intaló mongo (C:\Program Files\MongoDB\Server\4.0\bin).
    * *Primero*, **mongod.exe**: este activará el servidor de Mongo, de aquí se va a alimentar el cliente.
    * *Seguno*, **mongo.exe** : Luego un cliente en este caso mongo. En él se ejecuan los comandos.
    
## Crear
+ Para **crear una BD** usar comando ```>use miTienda```, **use** sirve para switchear si existe la base o para crearla.
+ Para crear una **coleccion** para la base de datos de manera **implicita**, si no esta creada la crea ya **agrega un documento** _(registro en SQL)_. Escribe el comando **insert({})** dentro de la base en la terminal. Productos es el nombre de la colección.
```js
db.productos.insert({'id': '2','nombre': 'Camiseta M','valor': 15.0, 'stock': 5})
```
+ Crear una **colección** de forma **explicita**, no se agrega un documento cuando la creas, se usa el comando **createCollection()**
```js
db.createCollection("productos")
```

## Ver
+ Para **ver todas las bases** usa ```>show dbs```, si no se ve la resien creada es que no tiene datos.
+ Para **ver todas la colecciones** escribir ```show collections```
+ Para **ver** lo que esta **dentro de la colección** escribir el nombre de la coleccion y los comandos **find()** and **pretty()**
```db.productos.find().pretty()```

## Editar
+ Para **editar** un **Documento**_(regitro en sql)_, usar el comando **update({},{$set: {}})** Entre parentesis se pasan dos parámetros. El primero es el campo que tiene que cumplir el documento que voy a editar, por ejemplo el id. El segundo se pone lo que yo quiero poner se usa **$set** seguido de un objeto con la llave y el nuevo valor, también se pueden agregar nuevos campos y valores.
**NOTA:**Hasta aquí solo se cambia **un solo documento**, si quicieramos cambiar todos los que cumplan cierta condicion, se debe agregar un **tercer parametro, {multi: true}**
```js
 db.productos.update({'id':'2'},{$set: {'valor': 20.36, 'nuevoCampo':'nuevo valor'}})
```

## Eliminar
+ Para **eliminar un documento** usar **deleteOne({})**, primer parametro es el campo que queremos relacionar, como el id. ```js db.productos.deleteOne({'id': '2'})``` 
+ Para **eliminar colecciones** escribir el nombre de la colección y comando **drop** ```db.productos.drop()```
+ Para **eliminar una Base de Datos** asegurarnos que estamos dentro de la base de datos y luego escribir el comando **dropDatabase()** 
```db.dropDatabase()```

## Consultas
+ El comando para hacer consultas, es el comando **find()**. Para encontrar solo uno **findOne()**. El primer parametro es el o los campos y valor a buscar.
```js
db.productos.find({'valor': 20.36})
```
+ También se puede preguntar si un valor es menor que otro (less than), se usa la palabra clave **$lt**.
```js
db.productos.find({'valor': {$lt: 30.0}})
```
+ Otras operaciones son:
    * Igualdad: {'stock': 0}
    * Menor que: {'valor': {$lt: 15}}
    * Menor o igual que: {'valor': {$lte: 15.6}}
    * Mayor que: {'valor': {$gt: 18.0}}
    * Mayor igual que: {'valor': {$gte: 18.6}}
    * No es igual: {'valor': {$ne: 0}}
    * And: {{'key': 'value1'}{'key': 'value2'}}
    * OR: ```js{$or:[{key1: value1},{key2:value2}]]}```

+ **Combinar** operadores por ejempo AND + OR
```js
{
    'key1': value1,
    $or: [{key2: {$lt: value2},{key3: value3}}]
}
```
