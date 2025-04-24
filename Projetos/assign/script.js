let carro = {
	marca: "Fiat",
	modelo: "Palio",
	motor: "1.0"
	
}

let adicionais = {
	arcondicionado: true,
	vidroEletrico: true
	
}

console.log(carro)

Object.assign(carro,adicionais)

console.log(carro)