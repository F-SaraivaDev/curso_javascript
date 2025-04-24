class Carro{
    constructor(modelo, cor){
        this.modelo = modelo
        this.cor = cor
    }

    abastecido(){
        console.log("Carro abastecido? "+ true)
    }

    get getCor(){
       return this.cor
    }

    set setCor(cor){
       this.cor = cor
    }
}

let carro1 = new Carro("Fusca", "Vermelho")

console.log(carro1)

carro1.setCor = "Branco";

console.log(carro1.getCor)