"use strict"

let resultDiv = document.getElementById("resultado");

function descubrirPalabra(){

    let error1 = '<small style="color:red"> introducir palabra válida </small>';
    let palabraArr = [];

    let palabraInp = "";

    do {
        palabraInp = prompt("Introduce tu palabra");

        if (palabraInp == "") return resultDiv.innerHTML = error1;

        if (((palabraInp.charAt(0) == "h") && palabraInp.length == 9) || ((palabraInp.charAt(0) == "p") && palabraInp.length == 5)){
            palabraArr.push(palabraInp);
        } 
    } while(palabraArr.length < 3);

    resultDiv.innerHTML = `Palabras: ${palabraArr}`;

}