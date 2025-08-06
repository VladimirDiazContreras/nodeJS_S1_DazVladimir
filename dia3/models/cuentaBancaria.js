class CuentaBancaria{
    #saldo
    constructor(titular,saldoInicial){
        this.titular=titular;
        this.#saldo=saldoInicial;
    }
    depositar(monto){
        if(mont>0){
            this.#saldo += monto;
        }
    }
    verSaldo(){
        return this.#saldo ;
    }

}
module.exports = CuentaBancaria;
