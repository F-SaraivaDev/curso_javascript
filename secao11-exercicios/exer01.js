class Conta{
    constructor(saldo){
        this.saldo = saldo
    }
    
    deposito(valor){
       this.saldo += valor
    }

    saque(valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente para realizar o saque!")
        }else{
            this.saldo -= valor
        }
        
    }
}

let conta1 = new Conta(15)

console.log(conta1.saldo)
conta1.deposito(30)
console.log(conta1.saldo)
conta1.saque(3000)
conta1.saque(5)
console.log(conta1.saldo)