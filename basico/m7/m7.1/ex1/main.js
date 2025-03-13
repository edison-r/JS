function calcular(){

    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let num3 = parseInt(document.getElementById("numero3").value);

    // console.log(num1, num2, num3)

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
        alert("¡Introduce números válidos!")
        return;
    }

    const arrayNumeros = [num1, num2, num3];

    let max = Math.max(...arrayNumeros); // El operador "..." expande los numeros del array
    let min = Math.min(num1, num2, num3); // Esto es lo mismo que poner ...arrayNumeros

    // console.log(max, min);

    let longitud = arrayNumeros.length;

    document.getElementById("resultado").innerHTML = ""; // Para limpiar la pantalla

    for (let i = 0; i < longitud; i++){
        // console.log(arrayNumeros[i])
        for (let j = i + 1; j < longitud; j++) {
            
            if (arrayNumeros[i] == arrayNumeros[j]){
                document.getElementById("resultado").innerHTML+= `${arrayNumeros[i]} y ${arrayNumeros[j]} son iguales<br>`;
            }
        }
        
    }

    document.getElementById("resultado").innerHTML += `El número mayor es: ${max}, el menor es: ${min}`;
}
