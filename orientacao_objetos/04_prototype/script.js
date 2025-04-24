const pessoa = {
   cpf: "222-222-222-22",
}

//console.log(Object.getPrototypeOf(pessoa));
//console.log(Object.getPrototypeOf(pessoa) == Object.prototype);
//console.log(pessoa.hasOwnProperty('cpf'))

const pessoaNova = Object.create(pessoa)

console.log(pessoaNova.cpf)
console.log(pessoaNova.hasOwnProperty('cpf'))
console.log(Object.getPrototypeOf(pessoaNova) == pessoa)