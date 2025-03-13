function main(){

    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let result = null;

    // console.log(num1, num2)

    if (validate(num1, num2) == true){
        document.getElementById("resultado").innerHTML = "Introduce dos números válidos";
        return;
    } 

    result = calculate(num1, num2);

    document.getElementById("resultado").innerHTML = `¿${num1} es mútiplo de ${num2}? - ${result}`;

}

function validate(a, b){
    return ((isNaN(a)) || (isNaN(b))) ? true : false;
}

function calculate(a, b){
    return a % b == 0 ? true : false;
}

