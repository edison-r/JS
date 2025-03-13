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
    return isNaN(a) || a < 1;
}

function calcular(a){

    let resultDiv = document.getElementById("resultado");
    let result = 1;

    resultDiv.innerHTML += `!${a} = `

    for(i = 1; i <= a; i++){
        result = result * i;

        if(i < a){
            resultDiv.innerHTML += `${i} x `;
        } else resultDiv.innerHTML += `${i}`;

    } 

    resultDiv.innerHTML += ` = ${result}`;

}