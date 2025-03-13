"use strict"

class Persona
{
    constructor(nombre, apellido, dni)
    {
        this._nombre = nombre;
        this._apellido = apellido;
        this._dni = dni;
    }

    set nombre(nombre) { this._nombre = nombre; }
    set apellido(apellido) { this._apellido = apellido; }

    get nombre() { return this._nombre; }
    get apellido(){ return this._apellido; }
    get dni(){ return this._dni; }

    trabajar() { console.log("Estoy trabajando"); }
    jugar(juego) { console.log(this._nombre + " está jugando a " + juego); }
    comer() { console.log("Estoy comiendo"); }
}