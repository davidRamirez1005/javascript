

let valorCuota,
 capitalMensual,
 valorTotal;

function calcularCredito(tasaInteresAnual,montoCredito,numCuotas) {

     let tasaInteresMensual = tasaInteresAnual / 12 / 100; 
     valorCuota = Math.ceil(montoCredito * tasaInteresMensual / (1 - Math.pow(1 + tasaInteresMensual, -numCuotas)));
     let interesMensual = montoCredito * tasaInteresMensual;
     capitalMensual = montoCredito/numCuotas;
     valorTotal = montoCredito+(interesMensual*numCuotas)
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
         let anio = i;
         let filaTabla = document.createElement("tr");
         filaTabla.innerHTML = `
             <td>${anio}</td>
             <td>${montoCredito.toFixed(2)}</td>
             <td>${valorTotal.toFixed(2)}</td>   
             <td>${capitalMensual.toFixed(2)}</td>
             <td>${interesMensual.toFixed(2)}</td>
             <td>${Math.ceil(valorCuota).toFixed(2)}</td>`;
         document.getElementById("resultado").appendChild(filaTabla);
     }
 }
 let formulario = document.querySelector("#calcular")
 formulario.addEventListener("click",(event)=>{
   event.preventDefault()
     let montoCredito = parseInt(document.getElementById("monto").value)
     let tasaInteresAnual = parseInt(document.getElementById("interes").value)
   let numCuotas = parseInt(document.getElementById("cuotas").value)
   calcularCredito(tasaInteresAnual,montoCredito,numCuotas)
 })






