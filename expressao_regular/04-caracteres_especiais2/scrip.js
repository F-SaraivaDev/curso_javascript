const dia = /\d\d/

console.log(dia.test("2019") && "2019".length == 2)
console.log(dia.test("asdfg"))
console.log(dia.test("05"))
console.log(dia.test("asdf56"))

const palavraDeTresLetras = /\w\w\w/ //True de 3 letras ou mais. menos de 3 será false

console.log()

console.log(palavraDeTresLetras.test("asdfg"))
console.log(palavraDeTresLetras.test("as"))
console.log(palavraDeTresLetras.test("asdf56"))