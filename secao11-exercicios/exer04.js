class Carro{
    constructor(marca, cor, gasolinaRestante, consumo){
        this.marca = marca
        this.cor = cor
        this.gasolinaRestante = gasolinaRestante
        this.consumo = consumo
    }

    dirigir(km){
       let litrosConsumidos = km / this.consumo

       this.gasolinaRestante -= litrosConsumidos
    }

    abastecer(litro){
        this.gasolinaRestante += litro
    }
}

let carro = new Carro("Fiat", "Preto", 100, 14)

console.log(carro)

carro.dirigir(100)

console.log(carro)

carro.abastecer(10)

console.log(carro)