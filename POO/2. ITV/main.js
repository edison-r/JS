"use strict"

const resultDiv = document.getElementById("resultado");

const coches = [];

function crearCoche()
{
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let potencia = document.getElementById("potencia").value;
    let cilindrada = document.getElementById("cilindrada").value;
    let color = document.getElementById("color").value;

    const coche = new Coche(marca, modelo, potencia, cilindrada, color);
    coches.push(coche);

    console.log(coches);
}

function introducirCoche()
{
    let marca, modelo, potencia, cilindrada, color, numCoche;

    numCoche = window.prompt("¿Cuántos coches quieres crear?");

    for(let i = 0; i < numCoche; i++) {
        marca = window.prompt("Marca:");
        modelo = window.prompt("Modelo:");
        potencia = window.prompt("Potencia:");
        cilindrada = window.prompt("Cilindrada:");
        color = window.prompt("Color");

        const coche = new Coche(marca, modelo, potencia, cilindrada, color);
    
        coches.push(coche);
    }
    console.log(coches);
}

function buscarCoche()
{
    let marca = window.prompt("Marca: ");
    let modelo = window.prompt("Modelo: ");
    let encontrado = false; // variable booleano
    let i = 0;

    while (i < coches.length && !encontrado) { // encontrado == false;
        if (coches[i].marca === marca && coches[i].modelo === modelo) {
            encontrado = true;
        }
        else {
            i++;
        }
    }

    if (encontrado) { // encontrado == true
        resultDiv.innerHTML = `Coche encontrado: ${coches[i].marca} ${coches[i].modelo}`;
    } else {
        resultDiv.innerHTML = `Coche no encontrado`;
    }

}