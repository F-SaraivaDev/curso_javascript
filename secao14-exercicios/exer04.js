const validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(validarIp.test("192.168.1.2"))
console.log(validarIp.test("127.0.0.1"))
console.log(validarIp.test("127.p.0.1"))
console.log(validarIp.test("0.0.1"))