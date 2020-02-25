let saludar = (() => 
{
	let saludo = "Hi";
	let cambiarSaludo=greet=>saludo = greet;
	let saludar=name=>saludo + " " + name;
	return {
		saludo,
		cambiarSaludo,
		saludar
	}
})()
console.log(saludar.saludar("human"))
saludar.cambiarSaludo("que pedo")
console.log(saludar)
console.log(saludar.saludar("perro"))

