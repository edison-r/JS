"use strict"

function main(){

    let palabra = document.getElementById("palabra").value.toLowerCase();
    let array = Array.from(palabra);
    // let array = palabra.split(''); -> hace lo mismo que Array.from
    
    let palabraFinal = palabraAlReves(array);
    display(palabraFinal);

}

function palabraAlReves(a){

    let palabraFinal = "";

    for (let i = (a.length - 1); i >= 0; i--) {
        palabraFinal += a[i];  
        // console.log(palabraFinal);
    }
    return palabraFinal;
        // palabraFinal = a.reverse(); -> hace lo mismo que el for

}

function display(a){

    document.getElementById("resultado").innerHTML = `${a}`;

} 