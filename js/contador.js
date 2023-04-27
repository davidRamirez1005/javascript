/*
const BTN1 = document.querySelector(".btn-primary")
const BTN2 = document.querySelector(".btn-danger")
const TEXTCONTADOR = document.getElementById("icontador")

let contador = 0

BTN1.addEventListener("click",()=>{
    aumentarValor()
})
BTN2.addEventListener("click",()=>{
    disminuirValor()
})

function aumentarValor() {
    TEXTCONTADOR.textContent = ++ contador
}

function disminuirValor() {
    TEXTCONTADOR.textContent = -- contador
}
*/


//  Ahora usando target

const CONTENEDOR = document.querySelector(".container")
let contador = 0
const TEXTCONTADOR = document.getElementById("icontador")

CONTENEDOR.addEventListener("click",(e)=>{
    // console.log(e);
    if (e.target.classList.contains("btn-primary")) {
        TEXTCONTADOR.textContent = ++contador
    }
    else if (e.target.classList.contains("btn-danger")) {
        TEXTCONTADOR.textContent = --contador
    }
})

document.body.addEventListener("click",()=>{
    console.log("body");
})