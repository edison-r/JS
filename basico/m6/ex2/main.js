"use strict"

    let resultDiv = document.getElementById("resultado");

function main(){

    let numNombre = parseInt(document.getElementById("numNombres").value);
    let nombres = document.getElementById("nombre").value.toLowerCase();
    let nombresArr= nombres.split(' '); 

    console.log(nombres, nombresArr);

    let message = "";
    const arrResult = [];

    if(isNaN(numNombre) || numNombre <= 0){
        message = "Por favor, introduce un número váido de nombres que quieres introducir.";
    } else if(numNombre != nombresArr.length){
        message = `Por favor, introduce ${numNombre} nombres.<br>
        Ahora tienes ${nombresArr.length} introducidos.`;
    } else {
        for(let i = 0; i < nombresArr.length; i++){
            if(nombresArr[i].startsWith('a')){
            arrResult.push(nombresArr[i]);
            }
        }

        if(arrResult == 0){
            message = "No hay nombres que comiencen con 'A'"
        } else {
            message = `Nombres que comienzan con 'A': ${arrResult}`;
        }
    }

    resultDiv.innerHTML = message;

}
