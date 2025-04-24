let p = Promise.resolve(new Error("Ops, algo deu errado!"))

console.log("Código executado")

p.then((value) => console.log(value))
.catch(reason => console.log("Erro " + reason))