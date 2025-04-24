let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9_]/

console.log(validarNomeUsuario.test("fernando@"))
console.log(validarNomeUsuario.test("fernando_saraiva"))
console.log(validarNomeUsuario.test("121312146464646"))
console.log(validarNomeUsuario.test("fe"))
