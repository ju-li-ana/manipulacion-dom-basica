//Por etiqueta
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const input = document.querySelector('input');

//Por clase
const parrafito = document.getElementsByClassName('.parrafito');

//Por ID
const pid = document.getElementById('pid');


console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.innerHTML = 'TExto que cambia';
h1.innerText = 'TExto que cambia';
h1.getAttribute('verde');
//h1.setAttribute('nombreClaseActual, nombreQueQuiereQueCambie')

h1.classList.add('rojo'); //agrea clase sin eliminar lo que está puesto en HTML
h1.classList.remove('verde'); //Quita cualquier clase que señales
//h1.classList.toggle('verde');
//h1.classList.contains('verde'); 

input.value = '569';

//Crear un nuevo elemento desde 0, desde JS
//document.createElement('img');
//document.createElement('span');

const img = document.createElement('img');
img.setAttribute('src', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fvector-premium%2Fimagen-dibujos-animados-hongo-palabra-hongo_587001-200.jpg%3Fw%3D2000&tbnid=jB3jh8GoAS2uHM&vet=12ahUKEwii_sylmMyCAxXTTbgEHZJwA-sQMygBegQIARAv..i&imgrefurl=https%3A%2F%2Fwww.freepik.es%2Fvector-premium%2Fimagen-dibujos-animados-hongo-palabra-hongo_40808794.htm&docid=BjTeHgfuetWkEM&w=2000&h=2000&q=imagen&ved=2ahUKEwii_sylmMyCAxXTTbgEHZJwA-sQMygBegQIARAv')

//pid.innerHTML   (se puede usar)
//pid.appendChild   (se puede usar)

pid.append(img);