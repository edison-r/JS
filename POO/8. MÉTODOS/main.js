    
const personas = [
    { 
        nombre: "Juan",
        dni: "12345678",
        hobbies: ["leer", "bailar"]
    },
    { 
        nombre: "María",
        dni: "87654321",
        hobbies: ["pintar", "correr", "bailar"]
    },
    { 
        nombre: "Pedro",
        dni: "98765432",
        hobbies: ["cocinar", "ver películas"]
    },
    { 
        nombre: "Laura",
        dni: "54321678",
        hobbies: ["jugar a fútbol", "viajar"]
    },
    { 
        nombre: "Carlos",
        dni: "87651234",
        hobbies: ["tocar la guitarra", "hacer ejercicio"]
    }
];

function buscarPersonaDNI() {
    let dni = document.getElementById("dniInput").value;
    let persona = personas.find(p => p.dni === dni);
    document.getElementById("resultat").innerHTML = persona ? `Persona trobada: ${persona.nombre}` : "Persona no trobada.";
}

function posicioPersonaDNI() {
    let dni = document.getElementById("dniInput").value;
    let index = personas.findIndex(p => p.dni === dni);
    document.getElementById("resultat").innerHTML = index !== -1 ? `Posició: ${index}` : "Persona no trobada.";
}

function buscarPerHobby() {
    let hobby = document.getElementById("hobbyInput").value;
    let result = personas.filter(p => p.hobbies.includes(hobby)).map(p => p.nombre).join(", ");
    document.getElementById("resultat").innerHTML = result ? `Persones amb aquest hobby: ${result}` : "Cap persona té aquest hobby.";
}

function totalHobbys() {
    let total = personas.reduce((acc, p) => acc + p.hobbies.length, 0);
    document.getElementById("resultat").innerHTML = `Total de hobbys: ${total}`;
}

function comprovarHobby() {
    let hobby = document.getElementById("hobbyInput").value;
    let existeix = personas.some(p => p.hobbies.includes(hobby));
    document.getElementById("resultat").innerHTML = existeix ? "Alguna persona té aquest hobby." : "Cap persona té aquest hobby.";
}

function primeraPersonaAmbHobby() {
    let hobby = document.getElementById("hobbyInput").value;
    let persona = personas.find(p => p.hobbies.includes(hobby));
    document.getElementById("resultat").innerHTML = persona ? `Primera persona amb aquest hobby: ${persona.nombre}` : "Cap persona té aquest hobby.";
}

function nomsEnMajuscules() {
    let noms = personas.map(p => p.nombre.toUpperCase()).join(", ");
    document.getElementById("resultat").innerHTML = `Noms en majúscules: ${noms}`;
}
