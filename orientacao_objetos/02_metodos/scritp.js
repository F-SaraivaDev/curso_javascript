const pessoa = {
    nome: "Carlos",

    mudarNome: function(nome){
        return this.nome = nome
    }
}

console.log(pessoa.nome)
pessoa.mudarNome("Fernando")
console.log(pessoa.nome)
console.log(pessoa.nome)