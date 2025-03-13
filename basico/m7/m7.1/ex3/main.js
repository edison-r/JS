function main(){

    let num1 = parseInt(document.getElementById("numero1").value);
    let result = null;
    let resultDiv = document.getElementById("resultado")

    console.log(num1);

    if (validate(num1)){ // lo mismo que if (validate(num1) == true){}
        resultDiv.innerHTML = "Introduce un número válido";
        return;
    }

    result = calculate(num1);
    
    if (result){ // lo mismo que if (result == true){}
        return resultDiv.innerHTML = `El numero ${num1} es PAR`;
    } else return resultDiv.innerHTML = `El numero ${num1} es IMPAR`;
}

function validate(a){
    // return isNaN(a) ? true : false;
    return isNaN(a); // esto es lo mismo que hacer un ternario con boleano
}

function calculate(a){
    // return a % 2 == 0 ? true : false;
    return a % 2 == 0;
}