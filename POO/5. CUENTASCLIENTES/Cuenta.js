"use strict"

class Cuenta
{
    constructor(numeroCuenta){
        this._numeroCuenta = numeroCuenta;
        this._saldo = 0;
    }

    get numeroCuenta(){ return this._numeroCuenta; }
    get saldo(){ return this._saldo; }

    /* set numeroCuenta(numeroCuenta){ this._numeroCuenta = numeroCuenta; }
    set saldo(saldo){ this._saldo = saldo; } */

    ingresarDinero(importe){
        if (importe > 0){
            this._saldo += parseInt(importe);
            return `Ingreso realizado correctamente. Saldo actual: ${this._saldo}`;
        } else{
            return "Importe no válido";
        }
    }

    retirarDinero(importe) {
        if (importe > 0 && importe <= this._saldo){
            this._saldo -= importe;
            return `Retirado ${importe}€.<br>Nuevo saldo: ${this._saldo}€`;
        } else{
            return "Fondos insuficientes o importe no válido";
        }
    }
}