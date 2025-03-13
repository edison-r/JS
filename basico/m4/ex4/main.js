/* Crea un programa que sol·liciti a l'usuari/ària que introdueixi un número de 
l'1 al 10 i mostri per pantalla el seu equivalent en lletres
(per exemple, 1 es mostraria com "u", 2 com "dos", etc.) */

function nombreNumero(){

let resultDiv = document.getElementById("resultado");

let num = parseInt(document.getElementById("numero").value);

let message = "";

    switch(num){
        case 1:
            message = "uno";
            break;
        case 2:
            message = `${num}: dos`;
            break;
        case 3:
            message = "tres";
            break;
        case 4:
            message = "cuatro";
            break;
        case 5:
            message = "cinco";
            break;
        case 6:
            message = "seis";
            break;
        case 7:
            message = "siete";
            break;
        case 8:
            message = "ocho";
            break;
        case 9:
            message = "nueve";
            break;
        case 10:
            message = "diez";
            break;
        default:
            message = "pon un número válido"
            break;
    }

    resultDiv.innerHTML = message;

}