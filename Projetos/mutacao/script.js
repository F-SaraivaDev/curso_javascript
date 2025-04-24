let pessoa = {
	nome: "Fernando"
}

let pessoa2 = pessoa

console.log(pessoa == pessoa2)

pessoa2.nome = "Jorge"

console.log(pessoa.nome)

pessoa.nome = "Maria"

console.log(pessoa2.nome)