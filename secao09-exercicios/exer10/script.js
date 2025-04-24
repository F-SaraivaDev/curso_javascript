let calculadora = {
    soma: function(num1, num2){
        return num1 + num2
    },

    subtracao: function(num1, num2){
        return num1 - num2
    },

    multiplicacao: function(num1, num2){
        return num1 * num2
    },

    divisao: function(num1, num2){
        return num1 / num2
    }
}

console.log(calculadora.soma(5,6))
console.log(calculadora.subtracao(10,8))
console.log(calculadora.multiplicacao(9,5))
console.log(calculadora.divisao(12,2))