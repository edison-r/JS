"use strict"

function main(){

    let palabra = document.getElementById("palabra").value.toLowerCase();
    let array = Array.from(palabra);
    // let array = palabra.split(''); -> hace lo mismo que Array.from
    
    let palabraFinal = palabraAlReves(array);
    let palanraPalindroma = esPalindromo(palabra, palabraFinal);
    display(palanraPalindroma);

}

function palabraAlReves(array){

    let palabraFinal = "";

    for (let i = (array.length - 1); i >= 0; i--) {
        palabraFinal += array[i];  
        // console.log(palabraFinal);
    }
    return palabraFinal;
        // palabraFinal = a.reverse(); -> hace lo mismo que el for

}

function esPalindromo(palabra, palabraFinal){

    if(palabra == palabraFinal){
        return "es Palindromo!";
    } else return "no es palindromo";

}

function display(palanraPalindroma){

    document.getElementById("resultado").innerHTML = `${palanraPalindroma}`;

} 