"use strict"

class Coche
{
    constructor(marca, modelo, potencia, cilindrada, color)
    {
        this._marca = marca;
        this._modelo = modelo;
        this._potencia = potencia;
        this._cilindrada = cilindrada;
        this._color = color;
    }

    set potencia(potencia) { this._potencia = potencia; }
    set cilindrada(cilindrada) { this._cilindrada = cilindrada; }
    set color(color) { this._color = color; }
    
    get marca() { return this._marca; }
    get modelo() { return this._modelo; }
    get potencia() { return this._potencia; }
    get cilindrada() { return this._cilindrada; }
    get color() { return this._color; }

    arrancar() { console.log("Arrancando"); }
    acelerar() { console.log("Acelerado"); }
    girar() { console.log("Girando"); }
    frenar() { console.log("Frenando"); }
}