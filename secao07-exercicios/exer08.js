function contarString(frase){
	const caracteres = frase.length
	console.log(caracteres)
	if(caracteres > 10){
		console.log("Texto muito longo")
	
	}else{
		console.log("Texto dentro do limite")
	}
}

contarString("Fernando")