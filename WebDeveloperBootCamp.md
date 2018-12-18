## INTRO TO BACKEND
- _www.udemy.com_ = 23.2353.47.175 (is IP Address)
- The Slash say to server what information need to return
### Static vs. Dynamic
- Statics is the same html,  css and js file
- Dimamic when refresh the page send back diferent html, css and js files.
- [**_stackshare.io/_**](https://stackshare.io/): To know the stack of some page
### http in deep
- **_postman_**: Tool for know request and debuging
  - Request: get, post, put, delete ...
    * GET: Retreave content, don't modify nothing in db, just asking for something. 
  - Body
  - Headers, metadata about the response
    * Content type
    * status code: there are different status codes
    * date
- Params: ?, q, =, &, for example: `https://www.reddit.com/search?q=beagle&type=link`
- ip address
- http request, response (as a cicle)
### Introduction to Node
- Server Code

- **To start the server in Node files can use the code below in the app.js file:**

       app.listen(3000,function(){//some code here...});
    
- **To run the file write** `node app.js` **in the terminal**
- 
___
## Notes from the past.
- Express = Routes, encargado de esuchar requerimientos y depues decidir que eviar de vuelta.
- $npm install Express (--save, para guardarlo en el archivo Json.)
- var express = require("express") = para llamar a Express
- var app = express() / para guardar express en variable y usarla despues...app.get("/",function...) / !Checar la documentacion de Express! - - http://expressjs.com/en/api.html -
- npm init / inicia el json package.
- Checar Route parameter en la documentacion de express
- / Para traer el dato de la ruta ("/dog") que escribio el usuario / :  req.params.name  :  esto se puede guardar en una variable,
- se puede guadar un parametro con minusculas para asegurar las coincidencias / toLowerCase(name);
- res.render("name.ejs", {object: object}); / para llevar los valores a el archivo ejs. para usar EJS se necesita instalar el npm.
- para evitar usar la terminacion ejs en los archivos sepone lo siguiente dentro y en el top de app.js / app.set("view engine", "ejs");
- res.render("name.html") / funciona tambien para renderizarhtml puro, pero sin las ventajas de los ejs tags.
-   Para conectar servicios (assets), como link tags etc... Se linkea como siempre se recomienda guardar los recursos externos en una carpeta llamada "public"
- En app.js se puede llamar la carpeta para que express reconozca y vincule, se hace de la sig. forma / app.use(express.static("public")) .
- TEMPLATES.- Para crear uno dentro de la carpeta "views" la carpeta "partials" ahi se guardan los teplates que se repitan en l aplicacion, como el header y el footer : views/partials/header.ejs , footer.ejs
- Para incluir los templates en la parte donde se vaya a usar dentro del archivo ejs poner <% include partials/header%> / en el css si no se ve hay que ponerle "/" antes.
- POST request:  
- BODY PARSER: body-parser / npm install body-parser --save / sirve para extraer la informacion del lado del cliente al servidor. para requerirla / var body parser = require("body-parser") / IMPORTANTE: Para decirle a Express que use body-parser / app.use(bodyParser.urlencoded({extended: true}));
- El codigo se encuentra aqui como referencia de como usar body parser. https://github.com/cuauhtlahuac/webappsFirststeps/blob/master/UdemyApps/IntroToExpress/moreExpress/PostRequestDemo/app.js
- REQUEST : Sirve para requerir una url en especifico y trae la informacion de dicha url / se instala igualmente / npm install request / sus funciones principales son error, response, body. RESPONSE es para checar el estatus de la conexion por ejemplo 200 es OK. la sintaxis es / request("url", function(){....}) para ver una ejemplo:  https://github.com/cuauhtlahuac/webappsFirststeps/blob/master/UdemyApps/IntroToExpress/moreExpress/movie_search_app/app.js
- Request nos regresa por lo regular strings, por lo que hay que cambiarlo de tipo de datos en caso de que el dato sea un objeto por ejemplo. para eso usamos JSON.parse(body) 

MONGO DB - Instalar mongo db, seguir las instrucciones del seguiente link:
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
para ejecutar Mongo> "C:\Program Files\MongoDB\Server\3.6\bin\mongo.exe"
Se tiene que instalar en el sistema Operativo.

- mongod.exe corre mongo en el sistema.
- mongo shell, es la consola.
****************
Clase 267 Introducción a Mongoose pt.1
Que es MONGOOSE?: http://mongoosejs.com/
it's an elegant mongodb object modeling for node.js

En la carpeta de Databases crear un archivo js. dentro de la carpeta donde se creo el archivo instalar mongoose. 

-Para instalarlo...
npm install mongoose
¿Qué es Moongose? Objecto Model para Node.js, hace posible usar mongo db dentro de los archivos js

Después require Moongose dentro del archivo js. + Para conectarlo en el archivo escribir:
mongoose.connect("mongodb://localhost/nombre_de_la_DB"), si no existe la DB al correrlo y no encontrarlo, se va a crear por mi.

Despues una variable catSchema = new moongose.Schema({object, cada parametro con su type of data});

Despues creo una variable Cat = mongoose.model("Cat", catSchema) **//** Con esto se crea el modelo para crear Cats basandose en el catSchema como modelo.
