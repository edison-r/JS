"use strict"

let resultDiv = document.getElementById("resultado");

// Creación del canvas para dibujar los círculos
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d"); // pincel para dibujar en el canvas
dibujarEjes();


function dibujarCirculo(x, y, radio, color)
{
    ctx.beginPath(); // Iniciar un nuevo dibujo
    ctx.arc(x, y, radio, 0, 2 * Math.PI); // 2π radianes = 360°
    ctx.strokeStyle = color;
    ctx.stroke(); // Dibujar el borde del círculo
}

function dibujarEjes()
{
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.strokeStyle = "black";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function mostarCirculos(primerCirculo, segundoCirculo)
{
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia canvas antes de dibujar
    dibujarEjes();
    
    // Ajustar coordenadas al centro del canvas
    let medioX = canvas.width / 2;
    let medioY = canvas.height / 2;

    dibujarCirculo(primerCirculo.centro.posicionX + medioX, medioY - primerCirculo.centro.posicionY, primerCirculo.radio, "red");
    dibujarCirculo(segundoCirculo.centro.posicionX+ medioX, medioY - segundoCirculo.centro.posicionY, segundoCirculo.radio, "blue");
}

function borrarFormulario()
{
    document.getElementById("primerCirculoX").value = "";
    document.getElementById("primerCirculoY").value = "";
    document.getElementById("primerCirculoRadio").value = "";
    document.getElementById("segundoCirculoX").value = "";
    document.getElementById("segundoCirculoY").value = "";
    document.getElementById("segundoCirculoRadio").value = "";
    resultDiv.innerHTML = "";
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia canvas antes de dibujar
    dibujarEjes();
}
function resultado(primerCirculo, segundoCirculo)
{
    let distancia = primerCirculo.distanciaCirculos(segundoCirculo);
    let sonIguales = primerCirculo.equals(segundoCirculo);
    let sonConcentricos = primerCirculo.sonCirculosConcentricos(segundoCirculo);
    let igualRadio = primerCirculo.tienenIgualRadio(segundoCirculo);
    let sonTangentes = primerCirculo.sonTangentes(segundoCirculo);
    let sonSecantes = primerCirculo.sonSecantes(segundoCirculo);
    let noSeTocan = primerCirculo.noSeTocan(segundoCirculo);

    resultDiv.innerHTML = `
        <p>Distancia entre los centros de los círculos: <strong>${distancia.toFixed(2)}</strong></p>
        <p>Los círculos son iguales: <strong>${sonIguales}</strong></p>
        <p>Los círculos son concéntricos: <strong>${sonConcentricos}</strong></p>
        <p>Los círculos tienen igual radio: <strong>${igualRadio}</strong></p>
        <p>Los círculos son tangentes: <strong>${sonTangentes}</strong></p>
        <p>Los círculos son secantes: <strong>${sonSecantes}</strong></p>
        <p>Los círculos no se tocan: <strong>${noSeTocan}</strong></p> 
    `;
}

function compararCirculos(){
    let primerCirculoX = parseFloat(document.getElementById("primerCirculoX").value);
    let primerCirculoY = parseFloat(document.getElementById("primerCirculoY").value);
    let primerCirculoRadio = parseFloat(document.getElementById("primerCirculoRadio").value);
    let segundoCirculoX = parseFloat(document.getElementById("segundoCirculoX").value);
    let segundoCirculoY = parseFloat(document.getElementById("segundoCirculoY").value);
    let segundoCirculoRadio = parseFloat(document.getElementById("segundoCirculoRadio").value);

    if (primerCirculoX === "" || primerCirculoY === "" || primerCirculoRadio === "" || 
        segundoCirculoX === "" || segundoCirculoY === "" || segundoCirculoRadio === ""){
        alert("Por favor, rellena todos los datos");
        return
    }

    let primerCirculo = new Circulo(primerCirculoX, primerCirculoY, primerCirculoRadio);
    let segundoCirculo = new Circulo(segundoCirculoX, segundoCirculoY, segundoCirculoRadio);

    mostarCirculos(primerCirculo, segundoCirculo);
    resultado(primerCirculo, segundoCirculo);
}