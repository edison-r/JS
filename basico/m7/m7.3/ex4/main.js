"use strict"

let resultDiv = document.getElementById("resultado");

function main(){

    let documento = document.getElementById("dni").value;
    let numDNI = parseInt(documento.slice(0,-1)); // separa todo menos el último carácter
    let letraDNI = (documento.slice(-1)[0]).toUpperCase(); // separa el último elemento

    const letraDNIArr = ['T','R','W','A','G','M','Y','F','P','D'
        ,'X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

    console.log(documento, numDNI, letraDNI);
    
    let letraCorrecta = calculoLetra(numDNI,letraDNIArr);
    let letraVerificada = verificarLetra(letraDNI, letraCorrecta);
    display(letraVerificada);

}

function calculoLetra(numDNI,letraDNIArr){
    let modLetra = numDNI % 23;
    let letraDNI = letraDNIArr[modLetra]
    return letraDNI;
}

function verificarLetra(letraDNI, letraCorrecta){
    if(letraDNI == letraCorrecta){
        return `La letra ${letraDNI} es correcta`;
    } else { 
        return `La letra ${letraDNI} no es correcta, la correcta es: ${letraCorrecta}`;
    }
}

function display(letraVerificada){
    resultDiv.innerHTML = `${letraVerificada}`;
}