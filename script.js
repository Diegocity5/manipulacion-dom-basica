const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultS = document.querySelector("#result");

// btn.addEventListener('click', sumar);
// form.addEventListener('submit', sumar);
/*obtener objeto para tener mas detalles del evento
le podemos colocar cualquier nombre yo le coloque event simplemente para ser
mas especifico*/
// function sumar(event){
//     event.preventDefault();
//     console.log({event});
//     let message = 'Tu resultado de la suma es: ';
//     let operation = parseInt(input1.value) + parseInt(input2.value);
//     return resultS.innerText = message + operation;
// }

//Tambien podemos con el evento click en el ultimo boton
//del formulario