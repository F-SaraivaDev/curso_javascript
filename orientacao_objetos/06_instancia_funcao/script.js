function novaPessoa(nome, idade, cpf){
    let pessoa = Object.create({})
    pessoa.nome = nome
    pessoa.idade = idade
    pessoa.cpf = cpf
    return pessoa
}

let pessoa1 = novaPessoa("Fernando", 30, "222-222-222-22")

console.log(pessoa1)