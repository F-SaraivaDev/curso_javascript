//1 - var, let e const

//const { use } = require("react");

var x = 10;
var y = 15;

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

console.log('=============================')

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)


console.log('---------- arrow function ----------')
// 2 arrow function
const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => {
    return a + b
}

const meuNome = (nome) => {
    if (nome) {
        return "Olá " + nome + "!"
    } else {
        return "Olá"
    }
}

const arrowSum2 = (a, b) => a + b

const testaArrow = () => console.log("Fernando Saraiva")

console.log(sum(5, 5))
console.log(arrowSum(5, 5))
console.log(arrowSum2(5, 5))
console.log(meuNome("Fernando"))
console.log(meuNome())
testaArrow()

console.log("-------------- 3 filter --------------")
// 3 filter

const arr = [1, 2, 3, 4, 5]

const maiorNumero = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(maiorNumero)

const users = [
    { name: 'Fernando', available: true },
    { name: 'Pedro', available: false },
    { name: 'Miguel', available: false },
    { name: 'Victor', available: true },
]

const availableUsers = users.filter((user) => user.available)

console.log(availableUsers)

// 4 map
console.log("---------------- Map ----------------")

const products = [
    { name: 'camisa', price: 10.99, category: 'roupas' },
    { name: 'cafeteira', price: 49.99, category: 'eletro' },
    { name: 'microondas', price: 400.99, category: 'eletro' },
    { name: 'calça', price: 50.99, category: 'roupas' },
]

products.map((product) => {
    if (product.category === 'roupas') {
        product.emPromocao = true
    }
})

console.log(products)

// 5 templates literals

console.log('------------------ Templates Literals ------------------')

const nome = 'Fernando'
const idade = 47

console.log(`O nome do usuário é ${nome} e ele tem ${idade} anos.`)
console.log('O nome do usuário é ' + nome + ' e ele tem ' + idade + ' anos.')

// 6  Destructuring

const frutas = ["banada", "maça", "laranja"]

const [f1, f2, f3] = frutas

console.log(f1)
console.log(f2)
console.log(f3)

const produtoDetalhes = {
    nome: "Notebook Dell",
    modelo: "Dell 7430",
    preco: 1029.25,
    category: "Microcomputadores"
}

const { nome: nomeProduto, preco, category: produtoCategory, modelo } = produtoDetalhes

console.log(`O nome do produto é ${nomeProduto}, custa R$ ${preco}`)

// 6 Spread operator

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

const modeloCarro = { nome: "Palio" }
const marca = { marca: "Fiat" }
const outrasInformacoes = { km: 100000, preco: 80.000, ano: 2020 }

const carro = { ...modeloCarro, ...marca, ...outrasInformacoes }

console.log(carro)

// 8 classe

class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    produtoDesconto(desconto) {
        return this.preco * ((100 - desconto) / 100)
    }
}

const camisa = new Produto("Camisa Verde", 20.00)

console.log(camisa.nome)
console.log(camisa.produtoDesconto(10))

const tenis = new Produto("Olympikus", 120)
console.log(tenis.produtoDesconto(10))

// 9 heranca
class ProdutoComAtributos extends Produto {
    constructor(nome, preco, cores) {
        super(nome, preco)
        this.cores = cores
    }

    showCores() {
        console.log("As cores são:")
        this.cores.forEach((cor) => {
            console.log(cor)
        })
    }
}

const chapeu = new ProdutoComAtributos("Chapéu", 29.99, [
    "Preto", 
    "Azul", 
    "Verde"
])

console.log(chapeu.nome)
console.log(chapeu.produtoDesconto(30))
chapeu.showCores()


























