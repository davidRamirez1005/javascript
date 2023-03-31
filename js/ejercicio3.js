//escoge el menor numero

function menorValor() {

    let cantNumero = Number(prompt("ingrese un numero: "))
    
    let menor = Infinity;
    for (let i = 1; i <= cantNumero; i++) {
        let num = Number(prompt("ingrese un numero: "))
        if (num < menor) menor = num;
    }
    return menor;
}
console.log(menorValor());