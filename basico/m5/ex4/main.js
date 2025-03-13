"use strict"

let resultDiv = document.getElementById("resultado");

function main(){

    let qtyKids = parseInt(prompt("Introduce el número de niños para la reserva"));
    
    let yearsSum = 0;

    if(isNaN(qtyKids) || qtyKids <= 0){
        alert("Por favor, introduce un número váido de niños para la reserva.");
        return;
    }

    for(let i = 0; i < qtyKids; i++){  

        let yearsKids = 0;

        while(isNaN(yearsKids) || yearsKids < 5 || yearsKids > 12){
            
            yearsKids = parseInt(prompt("Año de niño (de 5 a 12)"));
        }

        if(yearsKids >= 5 && yearsKids <= 12){
            yearsSum += yearsKids;
        }
    }

    resultDiv.innerHTML = `Media de edad: ${(yearsSum / qtyKids).toFixed(2)}`;

}