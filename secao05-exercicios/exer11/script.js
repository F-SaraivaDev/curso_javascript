let num = 41
let cont = 0

for(let i = 1; i <= num; i++){
    if(num % i == 0){
        cont++
    }
}

if(cont == 2){
    console.log(`O número ${num} é primo`)
}else{
    console.log(`O número ${num} não é primo`)
}


