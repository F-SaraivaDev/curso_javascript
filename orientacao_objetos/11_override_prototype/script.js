class Carro{
    constructor(modelo, ano, marca, rodas){
        this.modelo = modelo
        this.ano = ano
        this.marca = marca
    }

    abastecido(){
        console.log("Carro abastecido? "+ true)
    }
}

Carro.prototype.marca = "Fiat"
Carro.prototype.rodas = 4

let carro1 = new Carro("Fusca", 68, "Volkswagen")

//console.log(carro1.rodas)
//carro1.abastecido()

console.log(Carro.prototype.marca)
console.log(carro1.marca)