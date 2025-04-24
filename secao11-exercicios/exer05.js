/**
 * Crie uma classe conta bancária
 * Com as propriedades de saldo na conta corrente, saldo na conta
 * poupança e juros da poupança
 * Crie os métodos de depósito e saque, também um método para
 * transferir dinheiro da poupança para a corrente
 * Além disso crie uma conta especial que herda da conta normal
 * Na conta especial os juros são dobrados da conta normal
 */

class Conta{
     constructor(saldoContaCorrente, saldoContaPoupanca, juros){
        this.saldoContaCorrente = saldoContaCorrente
        this.saldoContaPoupanca = saldoContaPoupanca
        this.juros = juros
     }

deposito(valor){
    this.saldoContaCorrente += valor
}

saque(valor){
    this.saldoContaCorrente -= valor
}

transferenciaContaPoupanca(valor){
    this.saldoContaCorrente -= valor 
    this.saldoContaPoupanca += valor
}

transferenciaContaCorrente(valor){
    this.saldoContaPoupanca -= valor
    this.saldoContaPoupanca += valor
}

jurosDeAniversario(){
    let juros = this.saldoContaPoupanca * this.juros / 100
    this.saldoContaPoupanca += juros
}

}

class ContaEspecial extends Conta{
    constructor(saldoContaCorrente, saldoContaPoupanca, juros){
    super(saldoContaCorrente,saldoContaPoupanca, juros*2)
    }
}


let conta = new Conta(1000, 5000, 1)

console.log(conta)

conta.saque(500)

console.log(conta)

conta.deposito(5000)

console.log(conta)

conta.transferenciaContaPoupanca(3000)

console.log(conta)

conta.jurosDeAniversario()

console.log(conta)


let contaVip = new ContaEspecial(10000, 50000, 1)

console.log(contaVip)

contaVip.saque(5000)

console.log(contaVip)

contaVip.jurosDeAniversario()

console.log(contaVip)