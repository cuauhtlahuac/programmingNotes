function missingArg(){
	throw new Error("missing argument");
}


function square(a=missingArg()){
	console.log(a*a)
}

square(10);
square();