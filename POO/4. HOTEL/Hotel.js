"use strict"

class Hotel
{
    constructor(nombreHotel, numHabitaciones, numPlantas, superficieHotel){
        this._nombreHotel = nombreHotel;
        this._numHabitaciones = numHabitaciones;
        this._numPlantas = numPlantas;
        this._superficieHotel = superficieHotel;
    }
 
    get nombreHotel(){ return this._nombreHotel; }
    get numHabitaciones(){ return this._numHabitaciones; }
    get numPlantas(){ return this._numPlantas; }
    get superficieHotel(){ return this._superficieHotel; }

    set nombreHotel(nombreHotel){ this._nombreHotel = nombreHotel; }
    set numHabitaciones(numHabitaciones){ this._numHabitaciones = numHabitaciones; }
    set numPlantas(numPlantas){ this._numPlantas = numPlantas; }
    set superficieHotel(superficieHotel){ this._superficieHotel = superficieHotel; }

    calcularMantenimiento(){
    
        const salarioMensual = 1500;
        const habitacionesPorPersona = 20;

        let personal = Math.ceil(this._numHabitaciones / habitacionesPorPersona);
        let mantenimiento = personal * salarioMensual;

        return `<strong>Personal necesario:</strong> ${personal} con un coste de ${mantenimiento}€ mensual`; 
    }

    toString(){
        return `<strong>Hotel: </strong>${this._nombreHotel}<br>
                <strong>Número de habitaciones: </strong>${this._numHabitaciones}<br>
                <strong>Número de plantas: </strong>${this._numPlantas}<br>
                <strong>Superficie del hotel: </strong>${this._superficieHotel}m²<br>`;
    }
}