let chess = {
	pieces: {
		a1: 'rock',
		b1: 'knight',
		c1: 'bishop',
		d1: 'queen',
		e1:'keen'
	}
}
// metemos un nuevo valor directo al Object y este se va integrar a la siguiente iteracion, solo aplica para for in
Object.prototype.new = "pawn"
// para protegerte usas objectHasOwnProperty

// Nos regresa solo las llaves
for(let piece in chess.pieces){
	let p = piece
	// para saber el contenido usamos
	console.log(chess.pieces[piece])
}
console.log(
	chess.
	hasOwnProperty('pieces')
	)
	console.log("is instance: " + chess instanceof Object)
	function objectIterations(){
		const keys = Object.keys(chess.pieces);
		const values = Object.values(chess.pieces);
		const keysAndValues = Object.entries(chess.pieces)
		return [keys,values,keysAndValues]
	}
	
	console.log(
		objectIterations()
		)
