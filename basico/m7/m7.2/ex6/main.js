function main() {
    var primo = false;

    do {
        var num = prompt("Escoge un número: ");

        if (num > 1) {
            primo = esPrimo(num);
        }
    } while(primo != true)
    alert(`Exacte, el número ${num} és primer!`);
}

function esPrimo(num) {
    let primo = true;
    let i = 2;

    while (primo && i < num) {
        if (num % i == 0) primo = false;
        i++;
    }
    return primo;
}
