"use strict"

let resultDiv = document.getElementById("resultado");

function main(){

    let num = parseInt(document.getElementById("num").value);
    
    if (isNaN(num) || num <= 0) {
        resultDiv.innerHTML = "Introduce un número válido";
        return;
    }

    let calculo = fibonacci(num);
    display(calculo);

}

function fibonacci(num){
    if (num == 1) return [0];
    if (num == 2) return [0,1];

    const fibArr = [0,1];

    for (let i = 2; i < num; i++){
        fibArr.push(fibArr[i - 1] + fibArr[i - 2])
    }
    return fibArr;
}

function display(calculo){
    resultDiv.innerHTML = `${calculo}`;
}