"use strict"

class Ordenador
{
    constructor(marca, modelo, procesador, ram, disco){
        this._marca = marca;
        this._modelo = modelo;
        this._procesador = procesador;
        this._ram = ram;
        this._disco = disco;
    }

    get marca(){ return this._marca; }
    get modelo(){ return this._modelo; }
    get procesador(){ return this._procesador; }
    get ram(){ return this._ram; }
    get disco(){ return this._disco; }

    set procesador(procesador){ this._procesador = procesador; }
    set ram(ram){ this._ram = ram; }
    set disco(disco){ this._disco = disco; }

    ejecutando(programa){
        return `En estos momentos se está ejecutando: ${programa} en el PC ${this._marca}, ${this._modelo}`
    }
    toSring(){
        return `Ordenador: ${this._marca} ${this._modelo} con procesador ${this._procesador}, ${this._ram} de RAM y ${this._disco} de disco.`;
    }
}