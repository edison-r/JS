"use strict"

function main(){

    let resultDiv = document.getElementById("resultado");

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let arr1 = num1.split(',').map(Number); // num1.split(',') -> separa cada numero por las comas
    let arr2 = num2.split(',').map(Number); // .map(Number) -> convierte los strings en nums

    let arrResult = [];

    if (verifyLength(arr1, arr2)){
        resultDiv.innerHTML = "Ingresa dos series de números del mismo tamaño";
        return;
    }

    calculateArray(arr1, arr2, arrResult);
    negativeToPositive(arrResult);
    
    display(arr1, arr2, arrResult);

}

function verifyLength(arr1, arr2){
    return arr1.length != arr2.length;
}

function calculateArray(arr1, arr2, arrResult){

    for(let i = 0; (i < arr1.length); i++){ // recorre los array
        
        if(arr1[i] % 2 == 0 && arr2[i] % 2 ==0){ // mira si los dos elementos del array son pares
            arrResult.push(arr1[i] + arr2[i]);
        } else if(arr1[i] % 2 != 0 && arr2[i] % 2 !=0) { // mira si los dos elementos del array son impares
            arrResult.push(arr1[i] * arr2[i]);
        } else { 
            if(arr1[i] % 2 == 0){ // verifica si la posicion [i] es par
                arrResult.push(arr2[i] - arr1[i]); // si es par, resta el impar al par
            } else {
                arrResult.push(arr1[i] - arr2[i]); // si no, lo hace al reves
            }
        }
        
    }
}

function negativeToPositive(arrResult){

    for(let i = 0; i < arrResult.length; i++){ // recorre el array de resultado
        
        if(arrResult[i] < 0){ // si es menor q 0, lo modifica al valor absoluto
            arrResult[i] *= -1; // *= es lo mismo que (arrResult[i] = arrResult[i] * -1);
            // arrResult[i] = Math.abs(arrResult[i]); -> método para valor absoluto
        }
        
    }

}

function display(arr1, arr2, arrResult){

    let resultDiv = document.getElementById("resultado");
    resultDiv.innerHTML = `[${arr1}]<br>[${arr2}]<br><br>[${arrResult}]<br>`

}