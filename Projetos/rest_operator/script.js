/*
  Uma forma de uma função receber indefinidos parâmetros
  O operador rest vai virar um Array
  O parâmetro pe definido por: ...nome
*/

let num = 1
let num1 = 5
let num2 = 3
let num3 = 4

function imprimirNumeros(...args){
	for(let i = 0; i < args.length; i++){
		console.log(args[i])
	}
}

imprimirNumeros(num,num1,num2)
console.log("----------------------------------")
imprimirNumeros(num2,num3)
console.log("----------------------------------")
imprimirNumeros(2,6,5,10,8,9,7,4,2,85,898,4,48)


