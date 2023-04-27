// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function contador(texto) {
    let resultado;
    
    while (true) {
      if (/^[a-zA-Z\s]+$/.test(texto)) {
        resultado = texto.length;
        break;
      } else {
        texto = prompt("Por favor ingrese una cadena de texto:");
      }
    }
  
    return resultado;
  }
  
  const texto = prompt("Por favor ingrese una cadena de texto:");
  const longitud = contador(texto);
  console.log("La longitud de la cadena es: " + longitud);
  


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function recortarTexto(texto, caracteres) {
  return texto.slice(0, caracteres);
}

let resultado = recortarTexto("Hola Mundo", 4);
console.log(resultado); // "Hola"


// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function devolver(texto) {
  return texto.split(" ")
}
let separar = devolver("hola que tal")
console.log(separar);


// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repetirTexto(texto, veces) {
  return Array(veces).fill(texto).join(" ");
}
// se llena cada posición del arreglo con el texto utilizando el método fill(texto), y se unen los elementos del arreglo con un espacio en blanco utilizando el método join(" "). La función devuelve la cadena resultante.
let rta = repetirTexto("Hola Mundo", 3);
console.log(rta); // "Hola Mundo Hola Mundo Hola Mundo"

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
function invertirPalabras(cadena) {
  let palabras = cadena.split("");
  let palabrasInvertidas = palabras.reverse();
  return palabrasInvertidas.join("");
}
let resultado2 = invertirPalabras("Hola Mundo");
console.log(resultado2); 


// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
function contarPalabra(texto, palabra) {
  return texto.split(' ').reduce((contador, p) => p === palabra ? contador + 1 : contador, 0);
}

const resultado3 = contarPalabra("hola mundo adios mundo", "mundo");
console.log(resultado3); // 2

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
function esPalindromo(texto) {
  const textoSinEspacios = texto.toLowerCase();
  const textoInvertido = textoSinEspacios.split('').reverse().join('');
  return textoSinEspacios === textoInvertido;
}

console.log(esPalindromo('Salas')); // true
console.log(esPalindromo('Hola mundo')); // false

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarCaracteres = (texto="",patron="")=>
(!texto)
? console.warn("no ingresaste un texto")
:(!patron)
? console.warn("no ingresaste un patron de caracteres")
:console.log(texto.replace(new RegExp(patron,"ig"),""))

eliminarCaracteres()
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5")
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
function obtenerNumeroAleatorioEnRango(min, max) {
  return Math.floor(Math.random() * (max - min) + min) ;
}
let numeroAleatorio = obtenerNumeroAleatorioEnRango(501, 600);
console.log(numeroAleatorio); 

//otra maneraa
const aleatorio = ()=>
console.log(Math.round(Math.random()*100)+500)

aleatorio()
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (numero=0)=>{
  if (!numero) return console.warn("no ingresaste un numero")

  if (typeof numero !== "number")return console.error("el valor "+numero+" ingresado, No es un numero")

  numero = numero.toString()
  let alreves = numero.split("").reverse().join()

  return((numero)===alreves)
  ? console.log("si es capicua")
  :console.log("no es capicua");
}
capicua(12)
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.


