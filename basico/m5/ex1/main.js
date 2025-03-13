"use strict"

    let resultDiv = document.getElementById("resultado");
    let message = "";

function main(){
    variables();
    errorValidation(numNombre, nombresArr);
    namesStartsWithA(nombresArr, arrResult);
    display();
}

function variables(){
    let numNombre = parseInt(document.getElementById("numNombres").value);
    let nombres = document.getElementById("nombre").value.toLowerCase();
    
    let nombresArr= nombres.split(' '); 
    const arrResult = [];
}

function errorValidation(numNombre, nombresArr){
    if(isNaN(numNombre) || numNombre <= 0){
        message = "Por favor, introduce un número válido de nombres que quieres introducir.";
    } else if(numNombre != nombresArr.length){
        message = `Por favor, introduce ${numNombre} nombres.<br>
        Ahora tienes ${nombresArr.length} introducidos.`;
    }
}

function namesStartsWithA(nombresArr, arrResult){
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

function display(){
    resultDiv.innerHTML = message;
}