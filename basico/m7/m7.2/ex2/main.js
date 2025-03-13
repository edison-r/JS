function main(){
    
    let num = parseInt(document.getElementById("num").value)
    let resultDiv = document.getElementById("resultado");
    let resultado = "";
    
    resultDiv.innerHTML = "";

    if(validate(num)){
        resultDiv.innerHTML = "Introduce un número válido";
        return;
    }

    console.log(num);

    dibujarArbol(num);

}

function validate(a){
    return isNaN(a) || a < 1;
}

function dibujarArbol(a){

    let resultDiv = document.getElementById("resultado");

    for(i = 1; i <= a; i++){
        for(j = 1; j <= i ; j++){
            resultDiv.innerHTML += `* `;
        }
        resultDiv.innerHTML += `<br>`;
    }

}