function main(){

    let caracter = document.getElementById("caracter").value;
    let num = parseInt(document.getElementById("num").value);

    let resultDiv = document.getElementById("resultado");

    resultDiv.innerHTML = ""; // limpia la pantalla

    if (validate(num)){
        resultDiv.innerHTML = "Introduce un número válido";
        return;
    }

    dibujo(num, caracter);

}

function validate(a){
    return isNaN(a) || a < 0;
}

function dibujo(a , b){

    let resultDiv = document.getElementById("resultado");
    
    for (let i = 1; i <= a; i++) { // dibuja un salto de línea cada vez que se ejecuta
        for (let j = 1; j <= a; j++) { // dibuja el caracter escogido los num de veces introducido
            resultDiv.innerHTML += `${b}`;
        }
        resultDiv.innerHTML += `<br>`;
    }
}