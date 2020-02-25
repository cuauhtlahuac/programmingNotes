//Sphere volume
//3/4πr**3
const sphereVolume =(radius)=>{
	const pi = 3.1416
	let volumen = (4/3 * pi )* (radius ** 3 )
	return volumen
}

console.log(sphereVolume(5))
