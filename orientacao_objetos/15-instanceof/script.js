class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

let lobo = new Mamifero(4)

console.log(lobo.patas)

class Cachorro extends Mamifero{
    constructor(patas,raca){
        super(patas,patas)
        this.raca = raca
    }

    latir(){
        console.log('cachorro latindo')
    }
}

let viralata = new Cachorro(4, "mestiço")

console.log(viralata.patas)
viralata.latir()

console.log(new Cachorro instanceof Mamifero)
console.log(lobo instanceof Mamifero)
console.log(viralata instanceof Mamifero)