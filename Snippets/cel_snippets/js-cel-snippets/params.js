// assign undefinided parameters

function sum(...params){
	var total = params.reduce((acum,elem){
		acum + elem
	})
	console.log(total)
}

sum(1,3,6,7);
sum(103,45)