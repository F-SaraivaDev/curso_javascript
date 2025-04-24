let frutas = ["Banana", "Abacaxi", "Goiaba", "Uva", "Melão", "Maça"]
let nomes = ["Roberto", "Miguel", "Pedro"]

function verificaElemetosArray(vetor){
    if(vetor.length >= 5){
      console.log("Possui mais de 5 ou mais elementos!")
    
    }else{
        console.log("Possui menos de 5 elementos!")
    }
}

verificaElemetosArray(frutas)
verificaElemetosArray(nomes)