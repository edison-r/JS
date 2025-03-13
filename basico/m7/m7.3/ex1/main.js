"use strict"

function validate(tasca) {
    return !isNaN(tasca);    
}

function contenidor(tasca) {
    tasques.push(tasca);
    return;   
}

function mostra() {
    const tasquesHTML = [];
    
    for (let index = 0; index < tasques.length; index++) {
        tasquesHTML.push(
            `<input type = "checkbox" value = "${index}" id="tasca-${index}">
            // <label for= "tasca-${index}">${tasques[index]}</label><br>`
        );               
        
    }
    return resultDiv.innerHTML = `${tasquesHTML.join("")}`  
}

function esborrar() {
    const checkbox = document.querySelectorAll("#result input[type='checkbox']");

    for (let i = checkbox.length - 1; i >= 0; i--) {
        if (checkbox[i].checked) {
            tasques.splice(i, 1);
        }
        
    }
    mostra();
}

function sortir() {
    let vista = document.getElementById("vista");
    vista.style.display = "none";
}

function obrir() {
    vista.style.display = "block";
}

const tasques = [];
let resultDiv = document.getElementById("result");
vista.style.display = "none";

function afegeix() {
    let tasca = document.getElementById("tasca").value;
    let error = `<p style= "color:red";>"NO MOLA"</p>`;

    if (validate(tasca))
        return resultDiv.innerHTML = error;

    contenidor(tasca);
    //Borrar el contenido
    document.getElementById("tasca").value = "";
    resultDiv.innerHTML = ""; 

}