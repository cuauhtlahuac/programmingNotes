// conversor

function minADias(min){
	let horas = min / 60;
	console.log("horas: " + horas)
	let dias = horas / 24
	return dias;
}
function secHours(sec){
let	min = secMin(sec)
let hours = min /60;
return console.log("sec to hours: " + hours)
}
function secMin(sec){
	return sec / 60;
}
console.log(secHours(7200))
console.log(secMin(180))
