const regex1 = /./

console.log("")

console.log(regex1.test("asdfgh"))
console.log(regex1.test(" "))
console.log(regex1.test("123"))
console.log(regex1.test("asdfgh123456"))

const regex2 = /\d/ //[0-9]

console.log("")

console.log(regex2.test("asdfgh"))
console.log(regex2.test(" "))
console.log(regex2.test("123"))
console.log(regex2.test("asdfgh123456"))

const regex3 = /\D/ //[^0-9] - negação

console.log("")

console.log(regex3.test("asdfgh"))
console.log(regex3.test(" "))
console.log(regex3.test("123"))
console.log(regex3.test("asdfgh123456"))

const regex4 = /\s/ //não aceita alfanuméricos

console.log("")

console.log(regex4.test("asdfgh"))
console.log(regex4.test(" "))
console.log(regex4.test("123"))
console.log(regex4.test("asdfgh123456"))

const regex5 = /\w/ //alfanuméricos

console.log("")

console.log(regex5.test("asdfgh"))
console.log(regex5.test(" "))
console.log(regex5.test("123"))
console.log(regex5.test("asdfgh123456"))

