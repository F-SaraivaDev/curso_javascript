/*
  Podemos definir variáveis com propriedades do 
  objeto com uma notação diferente, chamada destruturing
*/

const person = {
	name: "Fernando"
	lastname: "Saraiva"
}

const {name: fname, lastname: lname} = person

console.log(fname)
console.log(lname)