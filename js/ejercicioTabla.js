
const buildFila = (anio, montoCredito,valorTotal,capitalMensual,interesMensual,valorCuota) => {
    return `<tr>
          <td>${anio}</td>
          <td>${montoCredito.toFixed(2)}</td>
          <td>${valorTotal.toFixed(2)}</td>
          <td>${capitalMensual.toFixed(2)}</td>
          <td>${interesMensual.toFixed(2)}</td>
          <td>${Math.ceil(valorCuota).toFixed(2)}</td>

      </tr>`;
  }


function calcularCredito() {
    let montoCredito = parseFloat(prompt("Ingrese el monto del crédito:"));
    let tasaInteresAnual = parseInt(prompt("Ingrese la tasa de interés anual (%):"));
    let numCuotas = parseInt(prompt("Ingrese el número de cuotas:"));
  
    let strHTML = "";

    let tasaInteresMensual = tasaInteresAnual / 12 / 100; 
    let valorCuota = Math.ceil(montoCredito * tasaInteresMensual / (1 - Math.pow(1 + tasaInteresMensual, -numCuotas)));
    let interesMensual = montoCredito * tasaInteresMensual;
    let capitalMensual = montoCredito/numCuotas;
    let valorTotal = montoCredito+(interesMensual*numCuotas)
    console.log("Monto del crédito: $" + montoCredito.toFixed(2));
    console.log("Tasa de interés anual: " + tasaInteresAnual.toFixed(2) + "%");
    console.log("Número de cuotas: " + numCuotas);
    console.log("valor total del credito: "+valorTotal.toFixed(2))
    console.log("Valor de cada cuota: $" + Math.ceil(valorCuota.toFixed(2)));
    console.log("Interés mensual: $" + interesMensual.toFixed(2))
    console.log("Capital mensual: $" + capitalMensual.toFixed(2));
    
  console.log("meses \t\t valor \t\t valor total \t capital \t\t intereses \t\t total")
    console.log("-".repeat(83))
    for (let i = 1; i <= numCuotas; i++) {
        montoCredito-=capitalMensual
console.log(`${i} \t\t ${montoCredito.toFixed(2)}\t\t${valorTotal.toFixed(2)} \t\t ${capitalMensual.toFixed(2)} \t\t${interesMensual.toFixed(2)} \t\t ${valorCuota.toFixed(2)}  `)
      valorTotal-=valorCuota
      strHTML += buildFila(i, montoCredito,valorTotal,capitalMensual,interesMensual,valorCuota);
    }
    document.getElementById("respuesta").innerHTML = strHTML;
}
calcularCredito()
  
  