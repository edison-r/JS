"use strict"

function main(){

    let resultDiv = document.getElementById("resultado");

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let arr1 = num1.split(',').map(Number); // num1.split(',') -> separa cada numero por las comas
    let arr2 = num2.split(',').map(Number); // .map(Number) -> convierte los strings en nums

    let arrResult = [];

    calculateArray(arr1, arr2, arrResult);
    
    display(arr1, arr2, arrResult);

}

function calculateArray(arr1, arr2, arrResult){

    for(let i = 0; (i < arr1.length); i++){ // recorre los array
        
        if(arr1[i] % 2 == 0 && arr2[i] % 2 ==0){ // mira si los dos elementos del array son pares
            arrResult.push(arr1[i] + arr2[i]);
        } else if(arr1[i] % 2 != 0 && arr2[i] % 2 !=0) { // mira si los dos elementos del array son impares
            arrResult.push(arr1[i] + arr2[i]);
        } 
    }
}

function display(arr1, arr2, arrResult){

    let resultDiv = document.getElementById("resultado");
    resultDiv.innerHTML = `[${arr1}]<br>[${arr2}]<br><br>[${arrResult}]<br>`

}