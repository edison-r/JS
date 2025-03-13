"use strict"

function main(){

    let resultDiv = document.getElementById("resultado");

    let plateSelect = document.getElementById("plato").value;
    let prefUser = document.getElementById("preferencia").value;

    let message = "";

    switch(plateSelect){
        case "carne":
            if(prefUser == "vegano"){
                message = "vostè no pot menjar aquest plat";
            } else {
                message = "perfecte, comanda correcta";
            }
            break;
        case "pasta":
            if(prefUser == "gluten"){
                message = "vostè no pot menjar aquest plat";
            } else {
                message = "perfecte, comanda correcta";
            }  
            break;
        case "rissotto":
            if(prefUser == "lactosa"){
                message = "vostè no pot menjar aquest plat";
            } else {
                message = "perfecte, comanda correcta";
            }  
            break;
    }

    resultDiv.innerHTML = message;

}