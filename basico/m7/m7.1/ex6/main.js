function main(){

    let num1 = parseInt(document.getElementById("numero1").value);
    let resultDiv = document.getElementById("resultado");

    resultDiv.innerHTML = "";

    if (validate(num1)){
        resultDiv.innerHTML = "Introduce un número del 1 al 10";
    }

    calcular(num1);

}

function validate(a){
    return a <=0 || a > 10 || isNaN(a);
}

function calcular(a){
    for (let i = 1; i <= 10; i++){
            document.getElementById("resultado").innerHTML += `${a} x ${i} = ` + (a * i) + `<br>`;
        }    
}
