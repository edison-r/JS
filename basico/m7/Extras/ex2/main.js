function main(){

    let num = parseInt(document.getElementById("num").value);
    let resultDiv = document.getElementById("resultado");

    resultDiv.innerHTML = "";

    if(validate(num)){
        return resultDiv.innerHTML = "Introduce un número válido";
    }

    calcular(num);

}

function validate(a){
    return isNaN(a) || a < 1 || a > 9;
}

function calcular(a){

    let resultDiv = document.getElementById("resultado");
    // a = 5

    for(i = 1; i <= a ; i++ ){
        for(j = 1; j <= i; j++){
            resultDiv.innerHTML += `${i} `;
        }
        resultDiv.innerHTML += `<br>`;
    }

}