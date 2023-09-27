alert ("Simulador de Cuotas");


const division = (a, b) => a / b;
const multiplicacion = (a, b) => a * b;
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;


let valor = parseInt(prompt("Ingrese el valor del producto seleccionado"));
let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas"));
let cantidadCuotas;
let cuotasRecargo;
let recargo = 1.15;


while (valor != "" && cuotas != "" && valor != "000") {
    if (valor > 0 && cuotas <= 6) {
        cantidadCuotas = division(valor, cuotas);
        alert (`El monto a abonar es de ${cantidadCuotas}`);
    } else if (valor > 0 && cuotas > 6 && cuotas <= 12){

        cantidadCuotas = parseFloat(division(valor, cuotas)).toFixed(2);
        cuotasRecargo = parseFloat(multiplicacion(cantidadCuotas, recargo)).toFixed(2);
        alert(`

        El monto a abonar es de $${cantidadCuotas} 
        + recargo adicional de %15
        Total: $${cuotasRecargo}
        
        `);
       
    } else if (valor > 0 && cuotas > 12) {
       alert ("El monto máximo de cuotas es de 12");

    } else {
        alert("Ingrese el monto y la cantidad de cuotas para evaluar el total, o ingrese 000 en ambos campos para terminar");
    }

    valor = parseInt(prompt("Ingrese el valor del producto seleccionado"));
    cuotas = parseInt(prompt("Ingrese la cantidad de cuotas"));
}