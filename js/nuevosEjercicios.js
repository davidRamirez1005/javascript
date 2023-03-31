// calculo interes completo

const calcularInteres = (p, r, n) => p * (1 + r)**n;

const buildFila = (anio,monto)=>{
    return `<tr>
    <td>${anio}</td>
    <td>${monto.toFixed(2)}</td>
    </tr>`
}

function montoDeposito() {
    let p = Number(prompt("Ingrese valor de la inversión: "))
    let r = 0.05
    let n = 10
    
    let strHTML = "";

    console.log("Año \t Monto de depósito \t Monto de depósito \t Monto de depósito")
    console.log("-".repeat(35))
    let monto = 0
    for (let i = 1; i <= 10; i++) {
        monto = calcularInteres(p, r, i)
        console.log(`${i} \t\t ${monto.toFixed(2)}\t\t ${monto.toFixed(2)}`)
        strHTML += buildFila(i,monto); 
    }
    

    document.getElementById("respuesta").innerHTML = strHTML
}


function mensaje (){
    alert("vamos bien")
}
