function checarNumero(num){
    let number = Number(num)
    if(Number.isNaN(number)){
        alert("Por favor, informe somente números!")
    }else{
        return number
    } 
}

checarNumero(5)
checarNumero('asdf')

let number = prompt("Digite um número")
checarNumero(number)