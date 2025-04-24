const validarId = /\d+ID\b/ 

console.log(validarId.test("12164488ID"))
console.log(validarId.test("121644"))
console.log(validarId.test("asadfgdd"))
