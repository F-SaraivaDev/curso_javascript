let pessoa = {
    "nome" : "Fernando",
    "idade" : 28,
    "profissão": "Programador",
    "Cursos":["JavaScript", "Java", "Phyton", "CSS", "HTML"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)
console.log(typeof pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto)

console.log(pessoaJSON)
console.log(typeof pessoaJSON)

console.log(pessoaJSON.Cursos[2])