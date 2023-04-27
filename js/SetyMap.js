const CLETRAS = new Set()
// Agrega elemento
CLETRAS.add("a")
CLETRAS.add("b")
CLETRAS.add("c")
CLETRAS.add("d")
console.log(CLETRAS);

// Eliminar elementos de un conjunto
CLETRAS.delete("c")
console.log(CLETRAS);

// Verificar si un elemento existe en el conjunto
console.log(CLETRAS.has("c"));
console.log(CLETRAS.has("d"));

// Mostrar la cantidad de elemento de un conjunto
console.log(CLETRAS.size);

// Iterar el conjunto con forEach
let str = ""
CLETRAS.forEach(letra =>{
    str += letra + ","
})
console.log(str);

// Iterar el conjunto con for .. of
console.log(CLETRAS.values());
str=""
for(let letra of CLETRAS){
    str += letra + ".."
}
console.log(str);

// Map js

function distanciaLetras(s,distance) {
    const DLETRAS = new Map()
    for (let i = 0; i <= s.length;++i ) {
        let letra = s.charAt(i)
        if (DLETRAS.has(letra)) {
            d = i - DLETRAS.get(letras) - 1
            if (d >= 0){
                pos = letra.charCodeAt(0) - 97
                if (d !== distance[pos])
                return false
            } 
            else{
                DLETRAS.set(letra,i)
            }
        }
    }
    return true
}
let s = "abaccb"
let distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let rta = distanciaLetras(s,distance)
console.log(rta);

// -------------------------------------------------------------------------

// contar el numero de veces que aparece una palabra en un texto

function contarPalabras(texto) {
    // Convierte el texto a un array de palabras
    let palabras = texto.split(" ");
    
    // Crea un Map para almacenar las palabras y sus frecuencias
    let frecuencias = new Map();
    
    // Recorre el array de palabras y cuenta sus frecuencias
    for (let palabra of palabras) {
      if (frecuencias.has(palabra)) {
        // Si la palabra ya existe en el Map, aumenta su frecuencia en 1
        frecuencias.set(palabra, frecuencias.get(palabra) + 1);
      } else {
        // Si la palabra no existe en el Map, crea una nueva entrada con frecuencia 1
        frecuencias.set(palabra, 1);
      }
    }
    
    // Devuelve el Map de frecuencias
    return frecuencias;
  }
  
  // Ejemplo de uso
  let texto = "Hola mundo hola hola";
  let frecuencias = contarPalabras(texto);
  console.log(frecuencias);


//   ----------------------------------------------------------------------

//  Contar el número de veces que una palabra aparece dentro de un texto

function contadorPalabra(frase,palabraBuscar) {
    let fraseSeparada = frase.split(" ")
    let repetido = new Map()

    for (let palabraIterada of fraseSeparada) {
        if (repetido.has(palabraIterada)) {
            console.log( repetido.set(palabraIterada, repetido.get(palabraIterada)+1));
        }
        else{
            repetido.set(palabraIterada, 1);
        }
    }
    if (repetido.has(palabraBuscar)) {
        console.log("la palabra :"+palabraBuscar+" esta : "+repetido.get(palabraBuscar)+" veces");
    } else {
        console.log("no hay ninguna palabra repetida");
        return 0;
    }
    
}
let frase = "carro uno carro dos carro tres"
let palabraBuscar = "carro"
let contador = contadorPalabra(frase,palabraBuscar)
console.log(contador);

// -------------------------------------------------------------------------

//  Contando palabras con un prefijo dado

function countPrefix(words, pref) {
    return words.reduce((count, word) => {
      count += word.startsWith(pref);
      return count;
    }, 0);
  }
  let words = ["pay", "attention", "practice", "attend"];
  let pref = "at";
  let result = countPrefix(words, pref);
  console.log(result); 
  
//   ---------------------------------------------------------------------------

// Super Dígito Recursivo

function sumaRecursividad() {
    console.log(longitud);
    let suma = longitud.reduce(function (acumulador,valor) {
        return acumulador + Number(valor) 
    },0)
    console.log(suma);
    let str = suma.toString()
    let deNuevo = str
    let longitudx2 = deNuevo.split("")
    let segundaF = longitudx2.length
    let convertidoArray = longitudx2.toString()
    let x = convertidoArray
    let y = x.split("")
     if (segundaF > 1) {
        recursivo(y)
     }
}

let longitud;
function recursivo(numero) {
    let separarlo = numero.split("")
    console.log(separarlo);
    let suma = separarlo.reduce(function (acumulador,valor) {
        return acumulador + Number(valor) 
    },0)
    console.log(suma);
    let str = suma.toString()
    let deNuevo = str
    longitud = deNuevo.split("")
    let segundaF = longitud.length
     if (segundaF > 1) {
        sumaRecursividad()
     }
}
let x = "148148148"
recursivo(x)