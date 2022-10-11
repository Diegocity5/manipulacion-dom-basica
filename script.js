const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultS = document.querySelector("#result");

function sumar(){
    let message = 'Tu resultado de la suma es: ';
    let operation = parseInt(input1.value) + parseInt(input2.value);
    return resultS.innerText = message + operation;
}