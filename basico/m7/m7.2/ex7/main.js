function main(){

    let year = parseInt(document.getElementById("year").value);
    let message = calcularBisiesto(year);

    calcularBisiesto(year);
    display(year, message);

}

function calcularBisiesto(a){

    if (a % 400 == 0 ){
        return "Bisisesto!";
    } else if (a % 4 == 0 && a % 100 != 0){
        return "BISIESTO!";
    } else return "No es bisiesto";

}

function display(a, b){
    
    let resultDiv = document.getElementById("resultado");

    resultDiv.innerHTML = `El año ${a}, es ${b}`;

}