const cep = /\d{2}.\d{3}-\d{3}/

console.log(cep.test("21.850-210"))
console.log(cep.test("21,850-210"))
console.log(cep.test("21850-210"))

console.log()

const tel = /\(\d{2}\)\d{4,5}-\d{4}/

console.log(tel.test("(99)9999-9999"))
console.log(tel.test("(58)22222-9999"))
console.log(tel.test("(58)2222288-9999"))