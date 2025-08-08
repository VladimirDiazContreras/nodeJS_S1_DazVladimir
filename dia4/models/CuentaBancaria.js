class CuentaBancaria{
    #saldo //Atributo privado

    constructor(titular,saldoInicial){
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    depositar(monto){
        if(monto>0){
            this.#saldo += monto;
        }
        
    }
    verSaldo(){
        return this.#saldo;
    }
}
module.exports = CuentaBancaria;
/* Con el uso de campos privados (#), protegemos el estado
interno del objeto, reforzando la seguridad y confiabilidad del
sistema. 
Hay que recordar que el encapsulamiento buscar ocultar los detalles internos
y exponer solo lo necesario.
*/
