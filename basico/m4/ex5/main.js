/*Fer un programa que demani dos números i un operador(+,-,*,/).
Al final, el programa ha d'imprimir per pantalla el resultat de fer l’operació 
que contingui la variable operador.*/

function calcular(){
    
    let resultDiv = document.getElementById("resultado");

    let num1 = parseInt(window.prompt("Introduce el primer número"));
    let num2 = parseInt(window.prompt("Introduce el segundo número"));
    let operador = window.prompt("Introduce el operador (+,-,*,/)");
    
    let result = null;
    let message = "";

    if (isNaN(num1) || isNaN(num2)){
        resultDiv.innerHTML = "Por favor, introduce un número";
    } else {
        switch (operador){
            case "+":
                result = num1 + num2;
                message = `${num1} ${operador} ${num2} = ${result}`;
                break;
            case "-":
                result = num1 - num2;
                message = `${num1} ${operador} ${num2} = ${result}`;
                break;
            case "*":
                result = num1 * num2;
                message = `${num1} ${operador} ${num2} = ${result}`;
                break;
            case "/":
                result = num1 / num2;
                message = `${num1} ${operador} ${num2} = ${result}`;
                break;
            default:
                message = "Introduce un operador correcto";
        }
    }

    resultDiv.innerHTML = message;
}