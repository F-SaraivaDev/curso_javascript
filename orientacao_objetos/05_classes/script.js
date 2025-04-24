let carro = {
    modelo: "Palio",
    marca: "Fiat",

    tanqueCheio: function(){
       console.log(true)
    }
}

let meuCarro = Object.create(carro)
meuCarro.modelo = "Argo"

console.log(carro.modelo)
console.log(meuCarro.modelo)
meuCarro.tanqueCheio()