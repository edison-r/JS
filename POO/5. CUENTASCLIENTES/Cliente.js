"use strict"

class Cliente
{
    constructor(dni, nombre, apellido){
        this._dni = dni;
        this._nombre = nombre;
        this._apellido = apellido;
        this._cuentas = [];
    }

    get dni(){ return this._dni; }
    get nombre(){ return this._nombre; }
    get apellido(){ return this._apellido; }
    get cuentas() { return this._cuentas; }

    set nombre(nombre){ this._nombre = nombre; }
    set apellido(apellido){ this._apellido = apellido; }

    agregarCuenta(cuenta){
        this._cuentas.push(cuenta);
    }

    toString(){
        return `DNI: ${this.dni}<br>Nombre: ${this.nombre}<br>Apellido: ${this.apellido}`;
    }

}