"use strict"

class Punto
{
    constructor(posicionX, posicionY){
        this._posicionX = posicionX;
        this._posicionY = posicionY;
    }

    get posicionX(){ return this._posicionX; }
    get posicionY(){ return this._posicionY; }

    // set posicionX(posicionX){ this._posicionX = posicionX; }
    // set posicionY(posicionY){ this._posicionY = posicionY; }

    toString(){
        return `Posición X: (${this._posicionX}, Posición Y: ${this._posicionY})`;
    }
}