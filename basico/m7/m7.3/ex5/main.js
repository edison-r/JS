"use strict"

let resultDiv = document.getElementById("resultado");
let message = "";

function main(){

    let palabras = document.getElementById("palabras").value.toLowerCase();
    let palabrasArr = palabras.split(' ');
    const arrResult = [];

    wordsWithA(palabrasArr, arrResult);
    display();

}

function wordsWithA(palabrasArr, arrResult){
    for(let i = 0; i < palabrasArr.length; i++){ 
        if(palabrasArr[i].includes('a')){
        arrResult.push(palabrasArr[i]);
        }
    }

    if(arrResult == 0){
        message = "No hay palabras que contengan 'A'";
    } else {
        message = `Hay ${arrResult.length} palabra(s) que contienen 'A': ${arrResult}`;
    }
}

function display(){
    resultDiv.innerHTML = message;
}