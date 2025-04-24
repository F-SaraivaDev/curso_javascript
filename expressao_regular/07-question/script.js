const padrao = /abacax?i/ //O x fica opcional na palavra ao verificar com o regex

console.log(padrao.test("abacaxi"))
console.log(padrao.test("abacai"))
console.log(padrao.test("aacai"))
console.log(padrao.test("aacaxi"))
console.log(padrao.test("maça"))

console.log()

const padrao2 = /\d+\w?/

console.log(padrao2.test("123"))
console.log(padrao2.test("12345asdf"))
console.log(padrao2.test("1"))
console.log(padrao2.test("a"))
console.log(padrao2.test("a2"))
console.log(padrao2.test(true))
console.log(padrao2.test(" "))
console.log(padrao2.test("1a"))
