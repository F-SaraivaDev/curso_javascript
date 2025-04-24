const pessoa = {
   // cpf: "222-222-222-22",
   maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);
console.log(pessoa.hasOwnProperty('maos'))