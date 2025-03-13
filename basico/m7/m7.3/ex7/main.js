"use strict"

const vistaMenu = document.getElementById("vistaMenu")
let resultDiv = document.getElementById("resultado")

// el menú por defecto no se ve
vistaMenu.style.display = "none";

function main(opcionMenu){

    resultDiv.innerHTML = "";

    switch(opcionMenu){
        case "Calcular material tabla":
            materialTabla();
            break;
        case "Imprimir forecast":
            imprimirForecast();
            break;
        case "Coste por reserva":
            costeReserva();
            break;
        case "Salir":
            salirMenu();
            break;
        default:
            resultDiv.innerHTML = "Opción no valida<br>";
    }

}

function abrirMenu(){
    vistaMenu.style.display = "block";
}

function materialTabla(){

    let opcionExp = confirm("¿Tienes experiencia surfeando?\nAceptar: Si / Cancelar: No");

    if(opcionExp){
        resultDiv.innerHTML = "Recomendación: Tabla de fibra<br>";
    } else {
        resultDiv.innerHTML = "Recomendación: Tabla de espuma<br>";
    }   
}

function imprimirForecast(){

    let ola = prompt("Tamaño Ola en metros:");

    if(isNaN(ola)){
        resultDiv.innerHTML = "Por favor, introduce un número de metros válido";
    } else {

        if(ola > 2){
            resultDiv.innerHTML = "Olas grandes<br>";
        } else {
            resultDiv.innerHTML = "Olas pequeñas<br>";
        }
    }
}

function costeReserva(){
    
    let minutosReserva = prompt("¿Cuántos minutos quieres reservar?");
   
    if(isNaN(minutosReserva) || minutosReserva <= 0){
        resultDiv.innerHTML = "Por favor, introduce un número de metros válido";
        return;
    } 

    let tipoTabla = prompt("Introduce el tipo de tabla (fibra o espuma):").toLowerCase();
    let coste = 0;


    if (tipoTabla == "espuma"){
        coste = (minutosReserva / 60) * 20;
    } else if(tipoTabla == "fibra"){
        coste = (minutosReserva / 60) * 35;
    } else {
        resultDiv.innerHTML = "Tipo tabla no válido"
        return;
    }

    resultDiv.innerHTML = `El total de la reserva es ${coste}€<br>`;

}

function salirMenu(){
    vistaMenu.style.display = "none";
}