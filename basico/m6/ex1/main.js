/* Calculadora arcaica. El programa demana a l’usuari/ària que introdueixi dos números i l’operació 
que desitja realitzar. 
Cada operació (suma, resta, multiplicació, divisió i mòdul) estarà programada en una funció diferent. */

function calcular(){
        
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let operacion = document.getElementById("operacion").value;

    let result = null;
    
    if (isNaN(num1) || isNaN(num2)){
        document.getElementById("resultado").innerHTML = "Introduce dos números válidos"
        return;
    } 

    switch (operacion){
        case "suma":
            result = suma(num1, num2);
            break;
        case "resta":
            result = resta(num1, num2);
            break;
        case "mult":
            result = mult(num1, num2);
            break;
        case "div":
            result = div(num1, num2);
            break;
        case "mod":
            result = mod(num1, num2);
            break; 
        default:
            result = "Operación no válida";
        
    }

    document.getElementById("resultado").innerHTML = `El resultado es: ${result}`

}

function suma(a, b){
    return a + b;
}

function resta(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

function mod(a, b){
    return a % b;
}