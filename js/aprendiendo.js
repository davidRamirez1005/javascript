
    // FOR
// inicializacion ;    condicion ;   incremento o decremento;
for (let i = 0; i < 10; i++) {
    console.log(i);   
}

let numeros = [10,20,30,40,50,60,70,80,90]

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

let n1 = 1;
let n2 = 1;
let signo = 1;
console.log(n1); console.log (n2)
for (let index = 0; index < 5; index++) {
    let sig = n1 + signo * n2;
    console.log(sig)
    n1 = n2; n2 = sig;
    signo *= -1

}


// ------------------------------------------------------

// for in = es una estructura de control de flujo en JavaScript que se utiliza para iterar sobre las propiedades de un objeto. 

const yo ={
    nombre: "jose",
    apellido: "ramirez",
    edad: 18
}

for (const propiedades in yo) {
    console.log(propiedades + " " + yo[propiedades])
}

// // -------------------------------

// for of= iterar sobre objetos iterables en JavaScript, como son los arreglos, las cadenas de texto, los mapas y los conjuntos.

for (const elemento of numeros) {
    console.log(elemento)
}

let cadena = "jose david"
for (const caracter of cadena) {
    console.log(caracter)
}


// let numero = prompt("Ingrese un número");
// let suma = 0;

// for (let digito of numero) {
//   suma += parseInt(digito);
// }

// console.log("La suma de los dígitos de " + numero + " es: " + suma);

// let div = suma/3
// console.log(div)

// if (suma %3 ==0){
//     console.log("es divisible")
// }
// else{
//     console.log("no es divisible")
// }


// -----------------------------------

        // BREAK Y CONTINUE

const n =[1,2,3,4,5,6,7,8,9,0]

for (let i = 0; i < n.length; i++) {
    if ( i === 5){
        break;
    }
    console.log(n[i])
}
console.log("")
for (let i = 0; i < n.length; i++) {
    if ( i === 5){
        continue;
    }
    console.log(n[i])
}

// ----------------------------------
console.log()
        // ARROW Function

const sum = (a, b) => {
return a + b;
}
console.log(sum(4,5))
    
const resta = (a, b) => a - b;
console.log(resta(4,5))


const saludar =(persona) => console.log(`holaa ${persona}`)
saludar("david")


const variasLineas =() =>{
    console.log("uno")
    console.log("dos")
    console.log("tres")

}
variasLineas()


const array1 = [1, 2, 3, 4, 5];
array1.forEach(function(element) {
  console.log(element);
});

console.log()

const array2 = [1, 2, 3, 4, 5];
array2.forEach(element => console.log(element));

array2.forEach((element,index) => console.log(`${element} esta en la posicion ${index}`));


// -------------------------------------------------------------
            // switch

let color= prompt("ingrese un color: ")
switch (color) {
    case "rojo":
        console.log("el color es rojo");
        break;
    case "rojo":
        console.log("el color es rojo");
        break;
    case "verde":
        console.log("el color es verde");
        break;
    default:
        console.log("no es verde ni rojo");
        break;
}

// -----------------------------------------------------

                // FUNCIONES
let salarioBruto = parseInt(prompt("ingrese"))
function eps(x) {
    return x*0.04
}
eps(salarioBruto)


const hola = function(p1, p2){
    //cuerpo de la funcion
    return valorRetorno
}

const calcularArea = function(base,altura){
return base * altura / 2; 
}
console.log(calcularArea(2,3))


    
const flecha = (a, b) => a - b;
console.log(flecha(4,5))


function calcular(operacion,n1,n2) {
    return operacion(n1,n2)
}

let cd = calcular((n1, n2 ) => n1 * n2,6,7);
console.log(cd)

// -----------------------------------
            // parametro rest


function suma(a,b,...c){
    let resultado = a+b;

    c.forEach(function(n){
        resultado += n
    })
    return resultado
}
console.log(suma(1,2,3,4,5,6,7,8,9,10))

// -------------------------------------------

        // operador spread

const valores = [1, 2, 3];
console.log(...valores); // Output: 1 2 3

const valores2 = [4, 5, 6];
const todosLosvalores = [...valores, ...valores2];
console.log(todosLosvalores); // Output: [1, 2, 3, 4, 5, 6]

const ntos = [12,21,12,12,3,34,21]
console.log(...ntos)
        
// -------------------------------------------
        // DESTRUCTURACION

const person = {
    nombre : "jose david",
    apellido : "ramirez",
    edad : 18
}
console.log(person)
let {nombre,apellido,edad}=person
console.log(nombre,apellido,edad)

// ....
const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edaddd: 30
  };
  
  const { nombre: primerNombre, apellido: primerApellido, edaddd } = persona;
  
  console.log(primerNombre); // "Juan"
  console.log(primerApellido); // "Pérez"
  console.log(edad); // 30
  

//   .....
// -----------------------------------------
    // objetos literales

let nombrePerro = "pancho"
let edadPerro = 20

const perro ={
    nombrePerro,
    edadPerro,
    raza : "callejero",
    ladrar(){
        console.log("guauu guauu")
    }
}
console.log(perro)
perro.ladrar()
// ------------------------------------------------

        // POO

// clases = modelo a seguir
// objetos = es una instancia de una clase
// atributos = es una caracteristica o propiedad del objeto (son variables dentro del objeto)
// metodos = son las acciones que un objeto puede realizar (son fuinciones dentro de un objeto)


// funcion constructora
function Animal(nombre, genero) {
    // atributos
    this.nombre = nombre;
    this.genero = genero;
}
// metodos agregados al prototipo de la funcion constructoras
Animal.prototype.sonar = function(){
    console.log("hago sonidos porque estoy vivo")
}
Animal.prototype.saludar = function(){
    console.log(`hola me llamo ${this.nombre}`)
}

const patoLucas = new Animal ("pato lucas", "macho"),
    lolabunny = new Animal("lola bunny","hembra")

console.log(patoLucas,lolabunny)

patoLucas.sonar()
patoLucas.saludar()

lolabunny.sonar()
lolabunny.saludar()

// HERENCIA

// ------------------------------------------------------------------------

// ARRAYS

let eje = [1,2,3,4,5,6,7]
console.log(eje)
console.log(...eje)

// utilizando corchetes
let house1 = [10, 20, 30, 40];
console.log(house1);

// utilizando la palabra clave "Array"
let house2 = new Array(10, 20, 30, 40,50,60);
console.log(house2);
console.log(house2[4]);


const datico = [1, 2, 3];
console.log(...datico); // Output: 1 2 3

const datico2 = [4, 5, 6];
const todosLosdatico = [...datico, ...datico2];
console.log(todosLosdatico); // Output: [1, 2, 3, 4, 5, 6]

const ntoss = [12,21,12,12,3,34,21]
console.log(...ntoss)

// recorrer
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// eleve al cuadrado todos los numeros impares de un vector
function elevar(vector) {
    for (let i=0; i < vector.length; i++) {
        if (vector[i] % 2 !== 0){
            vector[i] = vector[i]**2
        }
    }
    return vector;
}
let v = [2,5,6,7,-1]
console.log(v)

let v2 = elevar(v)
console.log(v2)
console.log(v)


// hacer una funcion que devuelva el elemento mas grande
function elGrande(params) {
    let max = vec[0];
    for (let i = 1; i < vec.length; i++) {
      if (vec[i] > max) {
        max = vec[i];
      }
    }
    console.log(max);
}
let vec = [2,3,4,5,6,7,8,9]
let vec2 = elGrande(vec)
console.log(vec2)

// otra manera
const mayorr = [10, 50, 30, 20, 40];
const max = Math.max(...mayorr);
console.log(max); 

// ordenar un vector
function ordenar(orden) {
    orden.sort();
    console.log(orden); 
}
const ord = [4,5,6,2,8,3,4,7,9,5,1];
let ord2 = ordenar(ord)


// verificar un elemento
let myArray = [1, 2, 3, 4, 5];
let result = myArray.includes(3);
console.log(result); // true


            // CORTOCIRCUITO OR

function saludo(nom) {
    nom = nom || "desconocido"
    console.log("hola "+nom)
}
saludo("jose")
saludo()

console.log(19||"valor de la derecha")
console.log(false||"valor de la derecha")

// ------------------------------------------------------------------------------------
        // EXPRESIONES REGULARES

const email = 'juan@example.com';
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (regex.test(email)) {
    console.log('El correo electrónico es válido');
} else {
    console.log('El correo electrónico no es válido');
}

// Reemplazar texto en una cadena
const message = 'Hola, mi nombre es Juan.';
const val = /Juan/;

const newMessage = message.replace(val, 'Pedro');

console.log(newMessage); // 'Hola, mi nombre es Pedro.'

// Dividir una cadena de texto en partes
const str = '321. 213. 2. 34';
const parts = str.split('. ');
console.log(parts);
const yaDividido =parts.join("[.]")
console.log(yaDividido)


// Buscar una cadena de texto en un texto
const text = 'La programación es divertida';
const regex2 = /programación/;

if (regex2.test(text)) {
  console.log('La cadena "programación" se encuentra en el texto');
} else {
  console.log('La cadena "programación" no se encuentra en el texto');
}


// ----------------------------------------------------------------------------------------------------------------

                // MATRICES

function crearMatrices(matriz,fila,cols) {
    for (let i =0; i<fila; i++){
        matriz[i] = new Array(cols)
    }
    return matriz
}
let matriz = []
let fil = 2, col = 2
crearMatrices(matriz,fil,col)

// recorrer matrices
const myArray2 = [  [1,[10,22,33], 2, 3],[4, 5, 6],[7, 8, 9]
];

for (let i = 0; i < myArray2.length; i++) {
    for (let j = 0; j < myArray2[i].length; j++) {
      console.log(myArray2[i][j]);
    }
  }
  // Imprime los números del 1 al 9
  
  // Recorrer una matriz con el método forEach()
  const myArray3 = [10, 20, 30,[10, 20, 30]];
  
  myArray3.forEach(function(elemento) {
    console.log(elemento);
  });
  // Imprime 10, 20 y 30

// ...
function imprimirMatriz (matriz) {
    for(let f=0; f<matriz.length; f++){
        console.log(matriz[f].join("   "))
    }
}
let manga = [["papa","yuca"],["papa","yuca"],["papa","yuca"],["papa","yuca"]]
imprimirMatriz(manga)

// llenar matrices
const llenarMatriz = function(m){
    for (let f = 0; f < m.length; f++) {
        for (let c = 0; c < m[f].length; c++) {
            m[f][c] = prompt(`ingrese el dato en la matriz en m[${f+1}][${c+1}]`)
        }
        
    }
}
let fi = Number(prompt("ingrese el numero de filas"))
let co = Number(prompt("ingrese el numero de columnas"))
let matrizFinal = crearMatrices(matriz,fi,co)
llenarMatriz(matrizFinal)


// sumar filas

function sumarFilas(matriz) {
    let sumaFilas = [];
    for (let i = 0; i < matriz.length; i++) {
      let sumaFila = 0;
      for (let j = 0; j < matriz[i].length; j++) {
        sumaFila += matriz[i][j];
      }
      sumaFilas.push(sumaFila);
    }
    return sumaFilas;
  }
  
  // Ejemplo de uso
  let matrizB = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  let sumaFilas = sumarFilas(matrizB);
  console.log(sumaFilas); // [6, 15, 24]

//   o...
function sumarFilas(matriz) {
    return matriz.map(fila => fila.reduce((suma, valor) => suma + valor));
  }
  
  // Ejemplo de uso
  let matrizC = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  let sumaFilasB = sumarFilas(matrizC);
  console.log(sumaFilasB); // [6, 15, 24]
  


//   sumar columnas

// matriz de ejemplo
let matrizE = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // array para almacenar los resultados
  let resultados = [];
  
  // bucle para sumar cada columna
  for (let i = 0; i < matrizE[0].length; i++) {
    let suma = 0;
    for (let j = 0; j < matrizE.length; j++) {
      suma += matrizE[j][i];
    }
    resultados.push(suma);
  }
  
  // resultado final
  console.log(resultados); // [12, 15, 18]
  