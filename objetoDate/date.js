/*
const now = new Date();
console.log(now); // muestra la fecha y hora actuales


// Crear un objeto Date con una fecha específica
const date = new Date("2023-04-20T10:30:00");
// libreria date-fns

// Obtener los componentes de fecha y hora
const year = date.getFullYear(); // 2023
const month = date.getMonth(); // 3 (abril, porque los meses se numeran desde 0)
const day = date.getDate(); // 20
const hour = date.getHours(); // 10
const minute = date.getMinutes(); // 30
const second = date.getSeconds(); // 0

// Obtener el día de la semana (0 = domingo, 1 = lunes, etc.)
const weekday = date.getDay(); // 4 (jueves)

// Obtener el número de milisegundos transcurridos desde el 1 de enero de 1970 00:00:00 UTC
const timestamp = date.getTime(); // 1685985000000

// Crear un objeto Date con una fecha y hora específicas
const newDate = new Date(2023, 3, 20, 12, 0, 0);

// Establecer un componente de fecha o hora específico
newDate.setFullYear(2024);
console.log(newDate.getFullYear()); // 2024

newDate.setHours(14);
console.log(newDate.getHours()); // 14

console.log(Date());

let fecha= new Date();
console.log(fecha);
console.log(fecha.getDate());
console.log(fecha.getFullYear());
console.log(fecha.getMonth());
console.log(fecha.getDay());
console.log(fecha.getTime());
console.log(fecha.toTimeString());
console.log(fecha.toLocaleString());


console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.toDateString());
console.log(fecha.toLocaleDateString());

let cumpleD= new Date(2005,4,26)
console.log(cumpleD)

let ahora= new Date();

let randomdate= new Date (2015,3,12,6,25,58)
console.log(randomdate)

let win95=new Date(1995,7,27);
console.log(win95)

ahora.setFullYear(2014);//asigna el año
ahora.setMonth(3)//asigna mes abril
ahora.setDate(4)//asigna día

console.log(ahora)

//string de la fecha
let now2= new Date();
console.log(now.toDateString())

//                                          EJERCICIOS

const ahorita=new Date();
const before= new Date ("October 8 2019 16:30:00")
const diff= ahorita.getTime()-before.getTime();
console.log(diff);


const minutes= Math.round(diff/1000/60);
const hours= Math.round(minutes/60);
const days= Math.round(hours/24);

console.log(minutes, hours,days);
console.log(`This post was written ${days} ago`);//5 days ago

*/

// --------------------------------------------------------------------------
let multa = 0;
let diasPasados
function dias(pactada, real) {
  let tiempoPactada = pactada.getTime();
  let tiempoReal = real.getTime();
  diasPasados = Math.trunc((tiempoReal - tiempoPactada) / (1000 * 3600 * 24));
  
  if (diasPasados <= 3) {
    multa = diasPasados * 3000;
    console.log(multa);
  } 
  else if (diasPasados >= 5) {
    multa = diasPasados * 7000;
    console.log(multa);
    alert('sancion de no prestamo por 6 meses');
  } 
  else {
    diasPasados;
  }
}

const boton = document.getElementById('calcular');

boton.addEventListener('click', miFuncion);

function miFuncion() {
  let pactada = new Date(document.getElementById('pactada').value);
  let real = new Date(document.getElementById('real').value);
  dias(pactada, real);
let nuevoParrafo = document.createElement('p');
let contenido = "tiene la diferencia de: "+diasPasados+" dias por lo que tiene multa de : "+multa;
nuevoParrafo.innerHTML = contenido;
let contenedorParrafo = document.querySelector('.parrafo');
contenedorParrafo.appendChild(nuevoParrafo);

}






