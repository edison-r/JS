"use strict"

let resultDiv = document.getElementById("resultado");

function main(){

    let numGenerado = Math.ceil((Math.random() * 10));
    console.log(numGenerado);

    let num1 = 0;

    while(num1 != numGenerado){

        num1 = prompt("Introduce un número del 1 al 10");

        if(isNaN(num1) || num1 < 1 || num1 > 10){
            alert("ERROR: Introduce un número entre el 1 y el 10.");
            return;
        }

        if(num1 != numGenerado){
        alert(`${num1} no es el número que buscamos!
        Vuélve a intentarlo.`);
        }

    }

    resultDiv.innerHTML = `¡¡Enhorabuena, el número era ${numGenerado}!!`;

}

