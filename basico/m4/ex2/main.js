"use strict"

function mostrarExperiencia(){
    
    let resultDiv = document.getElementById("resultado");

    let nombreInput = document.getElementById("nombre").value;
    let yearsInput = parseInt(document.getElementById("years").value);
    let error1 = '<small style="color:red"> invalid name </small>';
    let error2 = '<small style="color:red"> invalid years </small>';

    let nivel = "";

    if (typeof nombreInput != "string" || nombreInput == "") return resultDiv.innerHTML = error1;
    if (isNaN(yearsInput) || yearsInput < 0 || yearsInput > 65) return resultDiv.innerHTML = error2;

    if (yearsInput < 2){
        nivel = "nivel principiante";
    } else if (yearsInput <= 4) {
        nivel = "nivel intermedio";
    } else if (yearsInput <= 7) {
        nivel = "nivel avanzado";
    } else if (yearsInput <= 10) {
        nivel = "nivel experto";
    } else {
        nivel = "nivel Gurú";
    }
    
    resultDiv.innerHTML = `${nombreInput}, tienes un ${nivel}`;
}
