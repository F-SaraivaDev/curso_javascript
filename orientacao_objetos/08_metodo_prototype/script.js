function Pessoa(nome, idade, cpf) {
    this.nome = nome
    this.idade = idade
    this.cpf = cpf

}

Pessoa.prototype.estadoCivil = function () {
    console.log("Casado")
}

let pessoa1 = new Pessoa("Gilson", 49, "333-333-333-33")
pessoa1.estadoCivil()
