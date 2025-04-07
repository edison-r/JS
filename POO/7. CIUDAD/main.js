"use strict";

const resultDiv = document.getElementById("resultado");
let edificios = [];

// Objeto literal que mapea nombres de tipos a sus clases
const tipos = {
    "Hotel": Hotel,
    "Hospital": Hospital,
    "Cine": Cine  
};

function buscarEdificio(tipo, nombre)
{
    const tipoEdificio = tipos[tipo];

    for (let i = 0; i < edificios.length; i++){
        if (edificios[i].nombre === nombre && edificios[i] instanceof tipoEdificio){
             return { edificio: edificios[i], index: i };
         }
     }
     return null;
}

function altaEdificio()
{
    let tipo = document.getElementById("tipo").value;
    let nombre = document.getElementById("nombreAlta").value;
    let plantas = document.getElementById("plantas").value;
    let superficie = document.getElementById("superficie").value;

    let edificioResult = buscarEdificio(tipo, nombre);
    if (edificioResult === null){ // si no hay un edificio del mismo tipo con el mismo nombre...
        let edificio;

        if (tipo === "hotel"){
            let nHabitaciones = document.getElementById("habitaciones").value;
            edificio = new Edificio(nombre, plantas, superficie, nHabitaciones);
            resultDiv.innerHTML = `Hotel ${edificio._nombre} creado correctamente`;
        } else if (tipo === "hospital"){
            let nPacientes = document.getElementById("pacientes").value;
            edificio = new Edificio(nombre, plantas, superficie, nPacientes);
            resultDiv.innerHTML = `Hospital ${edificio._nombre} creado correctamente`;
        } else if (tipo === "cine"){
            let aforo = document.getElementById("aforo").value;
            edificio = new Edificio(nombre, plantas, superficie, aforo);
            resultDiv.innerHTML = `Cine ${edificio._nombre} creado correctamente`;
        }
        edificios.push(edificio);

    } else {
        resultDiv.innerHTML = `Edificio ya existente`;
    }
}

function mostrarEdifici()
{
    const nom = document.getElementById("nombre").value;
    const tipo = document.getElementById("tipo").value;

    if (!nom || !tipo){
        resultDiv.innerHTML = `Introducir todos los datos`;
        return;
    }

    let edificioResult = buscarEdificio(tipo, nombre);
 
    if (edificioResult){
        if (tipo === 'Hotel'){
            edificioResult.calcularCosteVigilanciaHotel();
            edificioResult.calcularMantenimiento();
        } else if (tipo === 'Hospital'){
            edificioResult.calcularCosteVigilanciaHospital();
            edificioResult.repartirComida();
        } else if (tipo === 'Cine'){
            edificioResult.calcularCosteVigilanciaCine();
            edificioResult.proyectarSesion();
        }
    } else {
        resultDiv.innerHTML = `Edificio no existente`;
    }
}