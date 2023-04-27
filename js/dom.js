// let vnombres = new Array()

// function ordenar() {
//     let nombre = document.miformulario.nombre.value;

//     vnombres.push(nombre)
//     vnombres.sort()

//     document.miformulario.ordenados.value = vnombres.join("\n");

//     document.miformulario.nombre.value="";
// }

function ordenar2() {
    let nombre = document.miformulario.nombre.value
    let vnombres2 = document.miformulario.ordenados.value.split("\n")
    vnombres2.push(nombre)
    vnombres2.sort()

    document.miformulario.ordenados.value = vnombres2.join("\n");

    document.miformulario.nombre.value="";
}

function limpiar(){
    document.miformulario.ordenados.value="";
}


console.log("inicio");

setTimeout(()=>{
    console.log("ejecutando");
},4000)


setInterval(()=>{
    console.log("ejecuta indefinidamente ");
},2000)



function cuentaRegresiva(numero) {
    console.log(numero);
  
    if (numero === 0) {
      console.log("¡Fin de la cuenta regresiva!");
    } else {
      setTimeout(()=> {
        cuentaRegresiva(numero - 1);
      }, 1000);
    }
  }
  
  cuentaRegresiva(5); // Comienza la cuenta regresiva desde 5
  

function descargarArchivo(url) {
console.log("Iniciando descarga...");
setTimeout(function() {
    console.log("Descarga finalizada: " + url);
    console.log(Event);
}, Math.floor(Math.random() * 5000) + 1000);
}

descargarArchivo("https://ejemplo.com/archivo1.pdf");
descargarArchivo("https://ejemplo.com/archivo2.pdf");
descargarArchivo("https://ejemplo.com/archivo3.pdf");



const miDiv = document.querySelector('#mi-div');
miDiv.style.backgroundColor = 'red';
miDiv.style.fontSize = '24px';



const miDiv2 = document.getElementById('mi-div2');

// Agregar un nuevo elemento
const nuevoElemento = document.createElement('p');
nuevoElemento.textContent = 'Este es un nuevo elemento';
miDiv2.appendChild(nuevoElemento);

// const elementoExistente = miDiv.querySelector('p');
// miDiv.removeChild(elementoExistente);
// // Eliminar un elemento existente


const miDiv3 = document.getElementById("mi-div3")
miDiv3.className = "c"

const inputTexto = document.getElementById('inputTexto');
const botonAgregar = document.getElementById('botonAgregar');
const texto = document.getElementById('texto');

botonAgregar.addEventListener('click', function() {
  const valor = inputTexto.value;
  texto.innerHTML += valor + ' ';
  inputTexto.value = '';
});


const miElemento = document.getElementById("mi-elemento");
miElemento.style.backgroundColor = "red";

function cambiarColor() {
    const miElemento3 = document.querySelector(".mi-elemento3");
    miElemento3.style.backgroundColor = "blue";
  }
const $body = document.body
$body.style.backgroundColor="white"
// document.body.style.backgroundColor = "red";
function fondoBody() {
    $body.style.backgroundColor="#000"
}
function cambiarColor2() {
    $body.style.backgroundColor="white"
}
const $card = document.querySelector(".card")

$card.classList.add("rotate-45")
$card.classList.add("rotate-45")


const $whatIsDOM = document.getElementById("que-es")

let text = `
<p> 
el modelo de objetos del documento,  es una API para documentos html y css
</p>

<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eos quasi asperiores rem expedita iusto soluta, inventore natus, sint nam beatae reprehenderit rerum aliquid sunt. Soluta molestias adipisci sint! Necessitatibus.</p>

<p><mark>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eos quasi asperiores rem expedita iusto soluta, inventore beatae reprehenderit rerum aliquid sunt. Soluta molestias adipisci sint! Necessitatibus.</mark></p>`

$whatIsDOM.innerHTML = text


function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (nombre == "" || email == "" || password == "") {
        alert("Por favor complete todos los campos.");
        return false;
    }
    return true;
}

const $carta = document.createElement('div');
$carta.innerHTML = `
  <h2>Carta de ejemplo</h2>
  <p>Esta es una carta de ejemplo agregada a través de JavaScript.</p>
  <img src="http://placeimg.com/2000/2000/arch" alt=""width="30%">
`;
const cartaContainer = document.getElementById('carta-container');
cartaContainer.appendChild($carta);


const estaciones = ["primavera","verano","otoño","invierno"]
$ul = document.createElement("ul")

document.write("estaciones del año")
document.body.appendChild($ul)

estaciones.forEach((el)=>{
    const $li = document.createElement("li")
    $li.textContent = el
    $ul.appendChild($li)
})

const continentes = ["america","esuropa","asia","oceania"]
$ul2 = document.createElement("ul")

document.write("continentes del mundo")
document.body.appendChild($ul2)
$ul2.innerHTML=""
continentes.forEach((el)=>($ul2.innerHTML += `<li>${el}</li>`)) 


const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];
$ul3 = document.createElement("ul")
$fragment = document.createDocumentFragment()

meses.forEach((el)=>{
    const $li = document.createElement("li")
    $li.textContent = el
    $fragment.appendChild($li)
})

document.write("meses del año")
$ul3.appendChild($fragment)
document.body.appendChild($ul3)


function holaMundo() {
  alert("S A P O DE NUEVO")
  console.log(Event);
}


const $eventoSemantico = document.getElementById("evento-semantico")
$eventoSemantico.onclick = holaMundo