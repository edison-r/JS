
/* Els estudis lingüístics moderns diuen que les paraules més boniques del diccionari són aquelles 
que contenen 9 lletres i comencen per la lletra 'H', o bé, contenen 5 lletres i comencen per la 
lletra 'P'.Fes un programa que demani una paraula i determini si és bonica o no (segons el patró 
explicat prèviament). El mètode charAt() segur que et pot ajudar en aquest exercici. */
    
function descubrirPalabra(){

    let resultDiv = document.getElementById("resultado");
    let palabraInp = document.getElementById("palabra").value.toLowerCase().trim();
    let messageOut ="";
    let error1 = '<small style="color:red"> introducir palabra válida </small>';

    console.log(palabraInp.charAt(0));
    console.log(palabraInp);

    if (palabraInp === "") return resultDiv.innerHTML = error1;

    if (((palabraInp.charAt(0) == "h") && palabraInp.length == 9) || ((palabraInp.charAt(0) == "p") && palabraInp.length == 5)){
        messageOut = "Tu palabra es bonita :)";
    } else messageOut = "Tu palabra no es bonita :(";
    
    resultDiv.innerHTML = messageOut;

}
