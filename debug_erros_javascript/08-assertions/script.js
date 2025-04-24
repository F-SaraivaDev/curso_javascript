let vetor = [1,2,3,4,5]
let vetor2 = []

function iterarArray(vetor){
    if(vetor.length == 0){
       throw new Error("O array precisa ter pelo menos um elemento") 
    
    }else{
        for (let index = 0; index < vetor.length; index++) {
            console.log(index)
            
        }
    }
}

iterarArray(vetor)
iterarArray(vetor2)