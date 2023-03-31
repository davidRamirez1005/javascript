
 let arrayData = []
 let cedula = prompt("Ingresa un número Cedula:")
 while (cedula != "0") {
     let nombre = prompt("ingrese nombre del usuario");
     let horas = prompt("ingrese horas trabajadas del usuario");
     let salarioHora = prompt("ingrese salario por hora del usuario")
     let salarioBruto = horas * salarioHora;
     let descuentoEPS = salarioBruto * 0.04;
     let descuentoPension = salarioBruto * 0.04;
     let auxilio = 0;  
     if (salarioBruto <= 1160000 ){
         console.log ("obtiene auxilio")
         auxilio = 140606
     }
     else{
         console.log ("no obtiene auxilio")
     }  
     let salarioNeto = salarioBruto + auxilio - descuentoEPS - descuentoPension;   
     arrayData.push({ cedula, nombre, horas, salarioHora, salarioBruto, descuentoEPS, descuentoPension, salarioNeto, auxilio })
     cedula = prompt("Ingresa otro número de Cedula:");
 
 alert("Programa finalizado")
    let tablaDatos = document.getElementById("tablaDatos")  
    arrayData.forEach((el) => {      
         const hijo = document.createElement("tr")
         tablaDatos.appendChild(hijo)
         let td1 = document.createElement("td")
         td1.innerHTML = el.cedula
         let td2 = document.createElement("td")
         td2.innerHTML = el.nombre
         let td3 = document.createElement("td")
         td3.innerHTML = el.horas
         let td4 = document.createElement("td")
         td4.innerHTML = el.salarioHora
         let td5 = document.createElement("td")
         td5.innerHTML = el.salarioBruto
         let td6 = document.createElement("td")
         td6.innerHTML = el.descuentoEPS
         let td7 = document.createElement("td")
         td7.innerHTML = el.descuentoPension
         let td8 = document.createElement("td")
         td8.innerHTML = el.auxilio
         let td9 = document.createElement("td")
         td9.innerHTML = el.salarioNeto
         hijo.appendChild(td1)    
         hijo.appendChild(td2)    
         hijo.appendChild(td3)    
         hijo.appendChild(td4)    
         hijo.appendChild(td5)    
         hijo.appendChild(td6)    
         hijo.appendChild(td7)    
         hijo.appendChild(td8)    
         hijo.appendChild(td9)    
})

// let arrayData = []
// let cedula = prompt("Ingresa un número Cedula:");

// while (cedula !== "0") {
//   const nombre = prompt("ingrese nombre del usuario");
//   const horas = prompt("ingrese horas trabajadas del usuario");
//   const salarioHora = prompt("ingrese salario por hora del usuario");
  
//   const salarioBruto = horas * salarioHora;
//   const descuentoEPS = salarioBruto * 0.04;
//   const descuentoPension = salarioBruto * 0.04;
//   let auxilio = 0;

//   if (salarioBruto <= 1160000 ){
//     console.log ("obtiene auxilio")
//     auxilio = 140606
//   }
//   else{
//     console.log ("no obtiene auxilio")
//   }
  
//   const salarioNeto = salarioBruto + auxilio - descuentoEPS - descuentoPension;   
//   arrayData.push({ cedula, nombre, horas, salarioHora, salarioBruto, descuentoEPS, descuentoPension, salarioNeto, auxilio });
//   cedula = prompt("Ingresa otro número de Cedula:");
// }

// alert("Programa finalizado");

// const tbodyHtml = document.getElementById("tbodyHtml");
// const tdElements = ["cedula", "nombre", "horas", "salarioHora", "salarioBruto", "descuentoEPS", "descuentoPension", "auxilio", "salarioNeto"].map(field => {
//   const tdHtml = document.createElement("td");
//   tdHtml.innerHTML = el[field];
//   return tdHtml;
// });

// arrayData.forEach(el => {
//   const trHtml = document.createElement("tr");
//   trHtml.append(...tdElements.map(td => td.cloneNode(true)));
//   tbodyHtml.appendChild(trHtml);
// });