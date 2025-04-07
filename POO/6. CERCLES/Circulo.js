"use strict"

class Circulo
{
    constructor(posicionX, posicionY, radio){
        this._centro = new Punto(posicionX, posicionY);
        this._radio = radio;
    }

    get centro(){ return this._centro; }
    get radio(){ return this._radio; }

    set centro(centro){ this._centro = centro; }
    set radio(radio){ this._radio = radio; }

    // todos los métodos reciben otroCirculo como parámetro y hace la comparación con el círculo actual
    // el return es un booleano que indica si se cumple la condición o no (true o false)
    
    // la distancia es entre los centros de los dos círculos

    distanciaCirculos(otroCirculo)
    {
        return Math.sqrt(
            Math.pow(this._centro.posicionX - otroCirculo.centro.posicionX, 2) + 
            Math.pow(this._centro.posicionY - otroCirculo.centro.posicionY, 2)
        );
    }

    equals(otroCirculo)
    {
        return this.distanciaCirculos(otroCirculo) === 0 && this._radio === otroCirculo.radio;
    }

    sonCirculosConcentricos(otroCirculo)
    {
        return  this._centro.posicionX === otroCirculo._centro.posicionX && 
                this._centro.posicionY === otroCirculo._centro.posicionY;
    }

    tienenIgualRadio(otroCirculo)
    {
        return this._radio === otroCirculo._radio;
    }

    sonTangentes(otroCirculo)
    {
        return  this.distanciaCirculos(otroCirculo) === this._radio + otroCirculo._radio || 
                this.distanciaCirculos(otroCirculo) === Math.abs(this._radio - otroCirculo._radio);
    }

    sonSecantes(otroCirculo)
    {
        return  Math.abs(this._radio - otroCirculo._radio) < this.distanciaCirculos(otroCirculo) && 
                this.distanciaCirculos(otroCirculo) < this._radio + otroCirculo._radio;
    }

    noSeTocan(otroCirculo)
    {
        return  this.distanciaCirculos(otroCirculo) > this._radio + otroCirculo._radio || 
                this.distanciaCirculos(otroCirculo) < Math.abs(this._radio - otroCirculo._radio);
    }

}