"use strict"

const ordenadores = [];
const resultDiv = document.getElementById("resultado");

function crearOrdenadores(){
    for(let i = 1; i <= 2; i++){
        let marca = prompt("Introduce la marca del ordenador " + i);
        let modelo = prompt("Introduce el modelo del ordenador" + i);
        let procesador = prompt("Introduce el procesador del ordenador" + i);
        let ram = prompt("Introduce la RAM del ordenador" + i);
        let disco = prompt("Introduce el disco del ordenador" + i);

        let ordenador = new Ordenador(marca, modelo, procesador, ram, disco);
        ordenadores.push(ordenador);
    }

    ordenadores[0].disco = 1;

    console.log(ordenadores);
    console.log(ordenadores[0])
    console.log(ordenadores[1].ejecutando("Chrome"));
    console.log(ordenadores[0].toSring());
}

function buscarMarca(){
    let marca = prompt("Introduce la marca a buscar");
    let encontrado = false;
    let i;

    i = 0;
    while (i < ordenadores.length && !encontrado){
        if (ordenadores[i].marca === marca){
            encontrado = true;
        } else {
            i++;
        }
    }
    mostrarResultado(encontrado, i);
}

function buscarModelo(){
    let modelo = prompt("Introduce el modelo a buscar");
    let encontrado = false;
    let i;

    i = 0;
    while (i < ordenadores.length && !encontrado){
        if (ordenadores[i].modelo === modelo){
            encontrado = true;
        } else {
            i++
        }
    }
    mostrarResultado(encontrado, i);
}

function mostrarResultado(encontrado, i){
    if (encontrado) { // encontrado == true
        console.log(ordenadores[i].toSring());
    } else {
        console.log(`No hay ordenadores con ese parámetro de búsqueda`);
    }
}

/*Otra manera de buscar sin variable bool

function buscarMarca(){
    let marca = prompt("Introduce la marca a buscar");
    let ordenador = null;
    let i;

    i = 0;
    while (i < ordenadores.length && ordenador == null){
        if (ordenadores[i].marca == marca){
            ordenador = ordeadores[i];
        }
        i++;
    }
    
    if (ordeador != null){
        resultDiv.innerHTML = ordenador.toString();
    } else {
        resultDiv.innetHTML = `PC no encontrado`;
    }
}*/