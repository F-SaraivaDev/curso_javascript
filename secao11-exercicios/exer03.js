class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    set novaRua(novaRua){
        this.rua = novaRua
    }

    set novoBairro(novoBairro){
        this.bairro = novoBairro
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado
    }
}

let endereco1 = new Endereco("Rua Javier Millei", "Bangu", "Rio de Janeiro", "RJ")

console.log(endereco1)

endereco1.novaRua = "Rua Francisco Silva"
endereco1.novoBairro = "Ubari"
endereco1.novaCidade = "Ubá"
endereco1.novoEstado = "Minas Gerais"

console.log(endereco1)
