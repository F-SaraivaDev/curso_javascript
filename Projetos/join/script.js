let frase = "fernandosaraiva;outlook.com.br"

let palavras = frase.split(";")

console.log(palavras)

let novoEmail = palavras.join("@")

console.log(novoEmail)