const reg = /\w+: (Matheus|Fernando|Maria)/

console.log(reg.test("Nome: Fernando"))
console.log(reg.test("Nome: José"))
console.log(reg.test("Nome: Maria"))