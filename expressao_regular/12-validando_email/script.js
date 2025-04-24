const validaEmail = /\w+@\w+\.\w+/

console.log(validaEmail.test("fernando.saraiva@outlook.com.br"))
console.log(validaEmail.test("saraivafds@gmail.com"))
console.log(validaEmail.test("gmail.com"))
console.log(validaEmail.test("fernando@gmail"))

