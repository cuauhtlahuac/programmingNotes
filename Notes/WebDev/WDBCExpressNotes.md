# EXPRESS

+ http request-response, I do request, server response.

+ Routes are responsable to lisent, and deside what to send back.

1. Create a directory, inside create app.js file.

## Install Express
```npm install express```

## Use express
In your app.js or the file that you will use 'express' require it inside of this.

```js
//First require express
const express = require('express');
const app = express();
```

## Tell Express to liset for request (**start server**)
Use method **listen()**, I added a little console.log
```js
// Start Server
app.listen('3000','localhost',function(){
	console.log('server started!!!')
})
```

## Define our first route.
+ In the exercise, we going to create three different routes, that will respond differents messages.
+ We use a method get that recibe two params, first the route,second the logic that is a function and inside of it, must be put request and response params. Less word and more action,check the code below.
```js
// '/' => "Hi there"
app.get('/', function(req, res){
	res.send('Hi there')
}); 
```
In your browser go to **http://localhost:3000/** and you can see a "_Hi there_".
