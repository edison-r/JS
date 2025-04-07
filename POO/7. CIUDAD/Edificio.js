"use strict"

class Edificio
{
    constructor(nombre, nPlantas, superficie){
        this._nombre = nombre;
        this._nPlantas = nPlantas;
        this._superficie = superficie;
    }

    get nombre(){ return this._nombre; }
    get nPlantas(){ return this._nPlantas; }
    get superficie(){ return this._superficie; }

    limpiar()
    {
        let tiempo = ((this._superficie / 5) + ((this._nPlantas - 1) * 0.5));
        let costeMensual = tiempo * 30;
        return `Se tardará ${tiempo.toFixed(2)} minutos en limpiar. Coste mensual: ${costeMensual.toFixed(2)}€`;
        //return { tiempo, costeMensual }; // devuelve un objeto literal con dos propiedades
    }

}

class Hotel extends Edificio
{
    constructor(nombre, nPlantas, superficie, nHabitaciones){
        super(nombre, nPlantas, superficie);
        this._nHabitaciones = nHabitaciones;
    }

    get nHabitaciones(){ return this.nHabitaciones; }

    set nHabitaciones(nHabitaciones){ return this._nHabitaciones = nHabitaciones; }

    calcularCosteVigilanciaHotel()
    {
        const salario = 1300;
        const plusPeligrosidad = 500;
        const superficioMaxima = 1000;

        let personal = Math.ceil(this._superficie / superficioMaxima);
        let costeMensual = personal * (salario + plusPeligrosidad);

        return costeMensual;
    }

    calcularMantenimiento()
    {
        const salarioMensual = 1000;
        const habitacionesPorPersona = 20;

        let personal = Math.ceil(this._numHabitaciones / habitacionesPorPersona);
        let mantenimiento = personal * salarioMensual;

        return `Personal necesario: ${personal} con un coste de ${mantenimiento}€ mensual`; 
    }

    toString()
    {
        return `El hotel ${this._nombre}, de ${this._superficie} m² y ${this._nPlantas} plantas
                Tiene ${this._numHabitaciones} habitaciones`;
    }
}

class Hospital extends Edificio
{
    constructor(nombre, nPlantas, superficie, nPacientes){
        super(nombre, nPlantas, superficie);
        this._nPacientes = nPacientes;
    }

    get nPacientes(){ return this._nPacientes; }
    set nPacientes(nPacientes){ this._nPacientes = nPacientes; }

    calcularCosteVigilanciaHospital()
    {
        const salario = 1300;
        const plusPeligrosidad = 0;
        const superficioMaxima = 1000;

        let personal = Math.ceil(this._superficie / superficioMaxima);
        let costeMensual = personal * (salario + plusPeligrosidad);

        return costeMensual;
    }

    repartirComida()
    {
        let raciones = this._nPacientes * 3;
        return `Se están repartiendo ${raciones} raciones`;
    }

    toString()
    {
        return `Hospital ${this._nombre} de ${this._superficie} m² y ${this._nPlantas} plantas.
                En este momento tiene ${this._nPacientes} pacientes`;
    }
}

class Cine extends Edificio
{
    constructor(nombre, nPlantas, superficie, aforo){
        super(nombre, nPlantas, superficie);
        this._aforo = aforo;
    }

    get aforo(){ return this._aforo; }

    set aforo(aforo){ this._aforo = aforo; }

    calcularCosteVigilanciaCine()
    {
        const salario = 1300;
        const plusPeligrosidad = 0;
        const superficioMaxima = 3000;

        let personal = Math.ceil(this._superficie / superficioMaxima);
        let costeMensual = personal * (salario + plusPeligrosidad);

        return costeMensual;
    }

    proyectarSesion(precioEntrada, asistentes)
    {
        let recaudacion = precioEntrada * asistentes;
        if (asistentes > this._aforo)
            recaudacion = this._aforo * precioEntrada;
        return `Se han recaudado ${recaudacion.toFixed(2)}€`;
    }

    toString()
    {
        return `El cine ${this._nombre}, de ${this._superficie} m² y ${this._nPlantas} plantas`;
    }
}