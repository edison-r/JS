"use strict"

let resultDiv = document.getElementById("resultado");

function main(){

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let resultado = null;

    let numMenor = Math.min(num1, num2)
    let numMayor = Math.max(num1, num2)
        
    for(let i = numMenor; i <= numMayor; i++){
        resultado += i
    }

    resultDiv.innerHTML = `Resultado: ${resultado}`

}
