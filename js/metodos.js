const numeros = [1, 2, 3];
//push
numeros.push(4, 5);
console.log(numeros); // Salida: [1, 2, 3, 4, 5]

//pop
const ultimoNumero = numeros.pop();
console.log(ultimoNumero); // Salida: 5
console.log(numeros); // Salida: [1, 2, 3, 4]

//shift
const primerNumero = numeros.shift();
console.log(primerNumero); // Salida: 1
console.log(numeros); // Salida: [2, 3, 4]

//unshift
numeros.unshift(0);
console.log(numeros); // Salida: [0, 2, 3, 4]

//concat
const numeros2 = [5, 6];
const numerosCombinados = numeros.concat(numeros2);
console.log(numerosCombinados); // Salida: [0, 2, 3, 4, 5, 6]

// forEach()
const numerosxx = [1, 2, 3, 4, 5];
numerosxx.forEach(numero => console.log(numero)); // Salida: 1 2 3 4 5

// map()
const numerosxxDobles = numerosxx.map(numero => numero * 2);
console.log(numerosxxDobles); // Salida: [2, 4, 6, 8, 10]

// filter()
const numerosxxPares = numerosxx.filter(numero => numero % 2 === 0);
console.log(numerosxxPares); // Salida: [2, 4]

// find()
const primerNumeroMayorQueTres = numerosxx.find(numero => numero > 3);
console.log(primerNumeroMayorQueTres); // Salida: 4

// every()
const todosMayoresQueCero = numerosxx.every(numero => numero > 0);
console.log(todosMayoresQueCero); // Salida: true

// some()
const algunMenorQueCero = numerosxx.some(numero => numero < 0);
console.log(algunMenorQueCero); // Salida: false

// reduce()
const sumaDeNumerosxx = numerosxx.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(sumaDeNumerosxx); // Salida: 15

const numeroszz = [1, 2, 3, 4, 5];

// includes()
const incluyeTres = numeroszz.includes(3);
console.log(incluyeTres); // Salida: true

// indexOf()
const indiceDelCuatro = numeroszz.indexOf(4);
console.log(indiceDelCuatro); // Salida: 3

// lastIndexOf()
const ultimoIndiceDelTres = numeroszz.lastIndexOf(3);
console.log(ultimoIndiceDelTres); // Salida: 2

// slice()
const numeroszzDel2Al4 = numeroszz.slice(1, 4);
console.log(numeroszzDel2Al4); // Salida: [2, 3, 4]

// splice()
numeroszz.splice(2, 0, 6, 7);
console.log(numeroszz); // Salida: [1, 2, 6, 7, 3, 4, 5]

// concat()
const masNumeroszz = [6, 7, 8];
const todosLosNumeroszz = numeroszz.concat(masNumeroszz);
console.log(todosLosNumeroszz); // Salida: [1, 2, 6, 7, 3, 4, 5, 6, 7, 8]

// join()
const numeroszzSeparadosPorGuiones = numeroszz.join('-');
console.log(numeroszzSeparadosPorGuiones); // Salida: "1-2-6-7-3-4-5"

// expresiones regulares


//match
const texto = "La vida es bella";
const patron = /vida/;

const resultado = texto.match(patron);

console.log(resultado); // ["vida"]

function contarPalabras() {
    const texto = "Hola mundo, mundo cruel, mundo hermoso";
    const palabra = prompt("Ingrese la palabra a buscar:");
    const patron = new RegExp(palabra, "gi");
    const resultado = texto.match(patron);
    console.log(`La palabra '${palabra}' aparece ${resultado.length} veces en el texto.`);
  }
  
  contarPalabras();

  
  
