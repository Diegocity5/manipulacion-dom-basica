/*El objecto principal para manejar lo elementos que el usuario ve
se llama el Document

//El objecto document del browser nos da muchas propiedades y metodos
 para seleccionar elementos estas propiedades.

//.getElementByName()
//.getElementById()
//.getElementByClassName()
//.querySelector() es muy parecido a css
//h1, #id, .class*/
//.querySelectorAll(); nos hace una coleccion

//Puedes elegir cualquiera de estos metodos
//el profe Juan david prefiere .querySelector():

//variables para guardar nuestro elementos seleccionados
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
const age = document.getElementById('age');


console.log(input.value);
console.log(age.value);

//imprimir todos los elementos
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
    age,
});