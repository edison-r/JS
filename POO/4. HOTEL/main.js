"use strict"

const resultDiv = document.getElementById("resultado");
const hoteles = [];

// Crear hoteles de prueba
hoteles.push(new Hotel("Hilton", 100, 10, 5000));
hoteles.push(new Hotel("W", 200, 15, 8000));
hoteles.push(new Hotel("Marriot", 50, 5, 3000));
hoteles.push(new Hotel("Ritz", 150, 12, 6000));
hoteles.push(new Hotel("FourSeasons", 120, 8, 4500));

// Por defecto los menús aparecen ocultos
ocultarFormulario();
mostrarBBDD();

function ocultarFormulario()
{
    vistaCrearHotel.style.display = "none";
    vistaDarDeBajaHotel.style.display = "none";
    vistaVerHotel.style.display = "none";
    vistaModificarHotel.style.display = "none";
    resultDiv.innerHTML = "";
}

function mostrarBBDD()
{
    const bbddDiv = document.getElementById("bbdd");
    bbddDiv.innerHTML = `<strong>Hoteles en BBDD:</strong><br>
                        <small><i>Nombre | nº Hab | nº Plantas | Superficie</i></small><br><br>`;

    for (let i = 0; i < hoteles.length; i++){
        const hotel = hoteles[i];
        const hotelElement = document.createElement('div'); // crea un div para cada hotel

        hotelElement.textContent = `${hotel.nombreHotel} | ${hotel.numHabitaciones} | ${hotel.numPlantas} | ${hotel.superficieHotel}`;
        bbddDiv.appendChild(hotelElement); // añade los divs creados al div "bbdd"
    }
}

function main(opcionMenu) {
    // Ocultamos todos los menús antes de mostrar el seleccionado
    ocultarFormulario();
    resultDiv.innerHTML = "";

    switch(opcionMenu) {
        case "Crear Hotel":
            vistaCrearHotel.style.display = "block";
            break;
        case "Dar de Baja Hotel":
            vistaDarDeBajaHotel.style.display = "block";
            break;
        case "Ver Hotel":
            vistaVerHotel.style.display = "block";
            break;
        case "Modificar Hotel":
            vistaModificarHotel.style.display = "block";
            break;
        default:
            resultDiv.innerHTML = "Opción no válida";
    }
}

function buscarHotel(nombreHotel)
{
    let i;

    i = 0;
    while (i < hoteles.length){
        if(hoteles[i].nombreHotel === nombreHotel) {
            return { hotel: hoteles[i], index: i }; // devuelve un objeto con dos propiedades
        }
        i++;   
    }
    return null;
}

function crearHotel()
{
    let nombreHotel = document.getElementById("nombreHotelCrear").value;
    let numHabitaciones = parseInt(document.getElementById("numHabitaciones").value);
    let numPlantas = parseInt(document.getElementById("numPlantas").value);
    let superficieHotel = parseFloat(document.getElementById("superficie").value);

    // Validar que los campos no estén vacíos
    if (!nombreHotel || !numHabitaciones || !numPlantas || !superficieHotel) {
        resultDiv.innerHTML = "Por favor, completa todos los campos correctamente.";
        return;
    }
    
    let resultado = buscarHotel(nombreHotel);

    if (resultado === null){
        hoteles.push(new Hotel(nombreHotel, numHabitaciones, numPlantas, superficieHotel));
        resultDiv.innerHTML = `Hotel ${nombreHotel} se ha dado de alta`;
        // Limpiar los campos después de crear el hotel
        document.getElementById("nombreHotelCrear").value = "";
        document.getElementById("numHabitaciones").value = "";
        document.getElementById("numPlantas").value = "";
        document.getElementById("superficie").value = "";
    } else {
        resultDiv.innerHTML = `Hotel ${nombreHotel} ya estaba creado`;
    }
    mostrarBBDD();
}

function darDeBajaHotel()
{
    let nombreHotel = document.getElementById("nombreHotelBaja").value;

    let resultado = buscarHotel(nombreHotel);

    if (resultado !== null)
    {
        hoteles.splice(resultado.index, 1);
        resultDiv.innerHTML = `Hotel ${nombreHotel} dado de baja`;
        document.getElementById("nombreHotelBaja").value = "";
    } else {
        resultDiv.innerHTML = `Hotel ${nombreHotel} no encontrado`;
    }
    mostrarBBDD();
}

function verHotel()
{
    let nombreHotel = document.getElementById("nombreHotelVer").value;

    let resultado = buscarHotel(nombreHotel);

    if (resultado !== null){
        let hotel = hoteles[resultado.index]
        resultDiv.innerHTML = hotel.toString();
        resultDiv.innerHTML += hotel.calcularMantenimiento();
        document.getElementById("nombreHotelVer").value = "";
    } else {
        resultDiv.innerHTML = `Hotel ${nombreHotel} no encontrado`;
    }
}

function modificarHotel()
{
    let nombreHotel = document.getElementById("nombreHotelModificar").value;
    let numHabitaciones = parseInt(document.getElementById("numHabitacionesModificar").value);
    let numPlantas = parseInt(document.getElementById("numPlantasModificar").value);
    let superficieHotel = parseFloat(document.getElementById("superficieModificar").value);

    if (!nombreHotel || !numHabitaciones || !numPlantas || !superficieHotel) {
        resultDiv.innerHTML = "Por favor, completa todos los campos correctamente";
        return;
    }

    let resultado = buscarHotel(nombreHotel);

    if (resultado !== null){
        let hotel = hoteles[resultado.index]

        hotel.numHabitaciones = numHabitaciones;
        hotel.numPlantas = numPlantas;
        hotel.superficieHotel = superficieHotel;
        resultDiv.innerHTML = `Hotel ${nombreHotel} modificado correctamente`;
        document.getElementById("nombreHotelModificar").value = "";
        document.getElementById("numHabitacionesModificar").value = "";
        document.getElementById("numPlantasModificar").value = "";
        document.getElementById("superficieModificar").value = "";
    } else {
        resultDiv.innerHTML = `Hotel ${nombreHotel} no encontrado`;
    }
    mostrarBBDD();
}