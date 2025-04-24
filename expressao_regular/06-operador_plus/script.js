const numeros = /\d+/

console.log(numeros.test("15884444"))
console.log(numeros.test("asdfsdfs546"))
console.log(numeros.test("1"))
console.log(numeros.test("asdffdfd"))
console.log(numeros.test(" "))
