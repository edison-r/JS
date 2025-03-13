function main() {
    var primo = false;
    var num = prompt("Escoge un número: ");
    debugger;
    if (num > 1) {
        primo = esPrimo(num);
        debugger;

    }
    alert(primo);
}


function esPrimo(num) {
    let primo = true;
    let i = 2;
    debugger;

    while (primo && i < num) {
        debugger;
        if (num % i == 0) {
            primo = false;
            debugger;
        }
        i++;
        debugger;
    }
    return primo;
}
