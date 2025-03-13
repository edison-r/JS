function main(){

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);

    let resultDiv = document.getElementById("resultado");

    // console.log(num1, num2, num3);

    resultDiv.innerHTML = "";

    if(validate(num1) || validate(num2) || validate(num3)){
        alert("Introduce un número válido");
        return;
    }

    let resultado = determinarTriangulo(num1, num2, num3);

    resultDiv.innerHTML = resultado;

}

function validate(a){
    return isNaN(a) || a <= 0;
}

function determinarTriangulo(a, b, c){

    if (a == b && a == c){
        return "El triángulo es equilátero";
    } else if ((a == b && a != c) || (a == c && a != b) || (b == c && b != a)){
        return "El triángulo es isósceles";
    } else return "El triángulo es escaleno";
}