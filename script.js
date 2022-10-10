//variables para guardar nuestro elementos seleccionados
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
const age = document.getElementById('age');

//imprimir todos los elementos
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
    age,
});

//innerHTML agrega texto y etiquetas html
//tener cuidado porque alguien puede introducir html.
// h1.innerHTML = "Patito <br> Feo";
///innerText agrega solo texto si agregas html lo tomara
//como texto es una buena idea para protegernos.
h1.innerText = "Patito <br> Feo";


//getAttribute() metodo para leer atributos de los elementos
// console.log(h1.getAttribute('pantalla'));
// console.log(h1.getAttribute('class'));
//modificar valores de los attributos de los elementos.
// h1.setAttribute('class', 'rojo');

//Si de modificar clases se tratara hay una mejor alternativa
//y es con el attributo .classList
//.classList.add('rojo');//Agregar nombre clase
//h1.classList.remove('verde');//Elimina nombre clase
//h1.classList.toggle();
/*Agrega el nombre de clase si no existe
y si existe la elimina su comportamiento 
parece un switch es buena para utilizarlo con eventos.*/
//h1.classList.contains('verde'); devuelve true o false

input.value = "456";

//CREAR ELEMENTOS PARA FINALIZAR
const img = document.createElement('img');
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWLTPFt-M2VTfRlh40jgoSQTZYKxcEPDbiw&usqp=CAU');

//append y appendChild funcionan igual
// pid.append(img);
pid.innerHTML = "";//quitando texto parrafo
//pid.replaceWith(img);//remplazo con la imagen
pid.appendChild(img);
