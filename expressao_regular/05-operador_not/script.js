
const regex = /[^ab]/

console.log(regex.test("a"))
console.log(regex.test("Aqui tem a"))

console.log()

const regex2 = /[^a-z]/

console.log(regex2.test("a"))
console.log(regex2.test("aceitafrase"))
console.log(regex2.test("113 adsdf"))