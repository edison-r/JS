function main(){

    let resultDiv = document.getElementById("resultado");

    resultDiv.innerHTML ="";

    for (let i = 100; i >= 0; i--){
        if (i % 2 == 0){
            resultDiv.innerHTML += `${i} <br>`;
        }
    }

}