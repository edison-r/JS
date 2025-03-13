"use strict"

const resultDiv = document.getElementById("resultado");

// Crear BBDD de personas
const arrPersonas = [];

function main()
{
    // Capturar inputs
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;

    // Instanciar
    const persona = new Persona(nombre, apellido, dni);
    arrPersonas.push(persona); // <- Guarda el cliente creado en la BBDD
    
    /* // getters y setters
    persona.nombre = "Laura"; // Cambio nombre con setter
    // console.log(nombre); <- Aquí no ha guardado Laura en la variable

    nombre = persona.nombre; // guardo el valor de "Laura" con el getter
    console.log(nombre);

    // Llamada a métodos
    persona.trabajar();
    persona.jugar("Baldurs Gate 3");
    persona.comer(); */
}