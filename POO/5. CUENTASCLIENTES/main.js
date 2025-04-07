"use strict"

const resultDiv = document.getElementById("resultado");
const clientes = [];

// clientes de prueba
clientes.push(new Cliente("1A", "Juan", "Perez"));
clientes.push(new Cliente("2B", "Maria", "Garcia"));
clientes.push(new Cliente("3C", "Carlos", "Lopez"));
clientes[0].agregarCuenta(new Cuenta("1001"));
clientes[0].agregarCuenta(new Cuenta("1002"));
clientes[1].agregarCuenta(new Cuenta("2001"));
clientes[2].agregarCuenta(new Cuenta("3001"));

console.log(clientes);

ocultarFormulario();

function ocultarFormulario()
{
    vistaCrearCliente.style.display = "none";
    vistaEliminarCliente.style.display = "none";
    vistaCrearCuenta.style.display = "none";
    vistaIngresarDinero.style.display = "none";
    vistaRetirarDinero.style.display = "none";
    resultDiv.innerHTML = "";
}

function main(opcionMenu){
    ocultarFormulario();
    resultDiv.innerHTML = "";

    switch(opcionMenu) {
        case "Crear Cliente":
            vistaCrearCliente.style.display = "block";
            break;
        case "Eliminar Cliente":
            vistaEliminarCliente.style.display = "block";
            break;
        case "Crear Cuenta":
            vistaCrearCuenta.style.display = "block";
            break;
        case "Ingresar Dinero":
            vistaIngresarDinero.style.display = "block";
            break;
        case "Retirar Dinero":
            vistaRetirarDinero.style.display = "block";
            break;
        default:
            resultDiv.innerHTML = "Opción no válida";
    }
}

function buscarCliente(dni)
{
    let i;

    i = 0;
    while (i < clientes.length){
        if (clientes[i].dni === dni){
            return { cliente: clientes[i], index: i };
        }
        i++;
    }
    return null;

    /* 
    for (let i = 0; i < clientes.length; i++){
       if (clientes[i].dni === dni){
            return { cliente: clientes[i], index: i };
        }
    }
    return null;
    */
}

function buscarCuenta(cliente, numeroCuenta)
{
    let i;

    i = 0;
    while (i < cliente.cuentas.length){
        if (cliente.cuentas[i].numeroCuenta === numeroCuenta){
            return { cuenta: cliente.cuentas[i], index: i };
        } 
        i++;
    }
    return null;
}

function crearCliente()
{
    let nombre = document.getElementById("nombre").value.toUpperCase();
    let apellido = document.getElementById("apellido").value.toUpperCase();
    let dni = document.getElementById("dni").value.toUpperCase();

    if (!nombre || !apellido || !dni){
        resultDiv.innerHTML = "Por favor, completa todos los campos correctamente";
        return;
    }

    let resultado = buscarCliente(dni);

    if (resultado === null) { 
        clientes.push(new Cliente(dni, nombre, apellido));
        resultDiv.innerHTML = `Cliente ${nombre} ${apellido} creado correctamente`;
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("dni").value = "";
    } else {
        resultDiv.innerHTML = `No puede haber dos clientes con el mismo DNI`
    }
    console.log(clientes);
}

function eliminarCliente()
{
    let dni = document.getElementById("dniEliminar").value.toUpperCase();
   
    if (!dni){
        resultDiv.innerHTML = "Por favor, rellena el DNI para eliminar el cliente";
        return;
    }

    let resultClient = buscarCliente(dni);

    if (resultClient !== null){
        clientes.splice(resultClient.index, 1);
        resultDiv.innerHTML = `Cliente con DNI: ${dni}. Eliminado`;
        document.getElementById("dniEliminar").value = "";
    } else{
        resultDiv.innerHTML = `No existe cliente con DNI ${dni}`;
    } 
    console.log(clientes);
}

function crearCuenta()
{
    let dni = document.getElementById("dniCuenta").value.toUpperCase();
    let resultClient = buscarCliente(dni);

    if (!dni){
        resultDiv.innerHTML = "Por favor, rellena el DNI para poder crear la cuenta";
        return;
    }

    if (resultClient !== null) { // si el cliente existe...
        let numeroCuenta = document.getElementById("numCuenta").value;
        let resultCuenta = buscarCuenta(resultClient.cliente, numeroCuenta);

        if (resultCuenta === null){ // si la cuenta no existe...
            const cuenta = new Cuenta(numeroCuenta);
            resultClient.cliente.agregarCuenta(cuenta);
            resultDiv.innerHTML = `Cuenta añadida correctamente`;
            document.getElementById("dniCuenta").value = "";
            document.getElementById("numCuenta").value = "";
        } else {
            resultDiv.innerHTML = `Cuenta duplicada`
        }
    } else {
        resultDiv.innerHTML = `Cliente no encontrado`
    }
    console.log(clientes);
}

function ingresarDinero()
{
    let dni = document.getElementById("dniIngreso").value.toUpperCase();

    if (!dni){
        resultDiv.innerHTML = "Por favor, rellena el DNI";
        return;
    }

    let resultClient = buscarCliente(dni);

    if (resultClient !== null){
        let numeroCuenta = document.getElementById("numCuentaIngreso").value;
        let resultCuenta = buscarCuenta(resultClient.cliente, numeroCuenta);
        
        if (resultCuenta !== null){
            let importe = parseFloat(document.getElementById("importeIngreso").value);

            if (isNaN(importe) || importe <= 0) { 
                resultDiv.innerHTML = "Por favor, introduce un importe válido";
                return;
            }
            resultDiv.innerHTML = resultCuenta.cuenta.ingresarDinero(importe);
            document.getElementById("dniIngreso").value = "";
            document.getElementById("numCuentaIngreso").value = "";
            document.getElementById("importeIngreso").value = "";
        } else {
            resultDiv.innerHTML = "Cuenta no encontrada";
        }
    } else {
        resultDiv.innerHTML = "Cliente no encontrado";
    }
    console.log(clientes);
}

function retirarDinero()
{
    let dni = document.getElementById("dniRetiro").value.toUpperCase();

    if (!dni){
        resultDiv.innerHTML = "Por favor, rellena el DNI";
        return;
    }

    let resultClient = buscarCliente(dni);

    if (resultClient !== null){
        let numeroCuenta = document.getElementById("numCuentaRetiro").value;
        let resultCuenta = buscarCuenta(resultClient.cliente, numeroCuenta);
        
        if (resultCuenta !== null){
            let importe = parseFloat(document.getElementById("importeRetiro").value);

            if (isNaN(importe) || importe <= 0) { 
                resultDiv.innerHTML = "Por favor, introduce un importe válido";
                return;
            }
            resultDiv.innerHTML = resultCuenta.cuenta.retirarDinero(importe);
            document.getElementById("dniRetiro").value = "";
            document.getElementById("numCuentaRetiro").value = "";
            document.getElementById("importeRetiro").value = "";
        } else {
            resultDiv.innerHTML = "Cuenta no encontrada";
        }
    } else {
        resultDiv.innerHTML = "Cliente no encontrado";
    }
    console.log(clientes);
}