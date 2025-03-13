function main(){

    let num = parseInt(document.getElementById("num").value);
    let unidad = document.getElementById("unidad").value;

    let resultDiv = document.getElementById("resultado");

    if(validate(num)){
        resultDiv.innerHTML = "Inserta un número válido"
        return;
    }

    calcular(num, unidad);

    // console.log(num, unidad);

}

function validate(a){
    return isNaN(a);
}

function calcular(a, b){ // a: num / b: unidad
 
    let resultDiv = document.getElementById("resultado");
    let result = null;

    switch(b){
        case "mtoft": 
            result = a * 3.2808;
            break;
        case "fttom":
            result = a * 0.3048;
            break;
        case "mtoyd": 
            result = a * 1.0936;
            break;
        case "ydtom":
            result = a * 0.9144;
            break;
    }

    // console.log(a, b);

    resultDiv.innerHTML = `${a}  convertido es: ${result.toFixed(3)}`

}