let tarifa;
function servicio(estado,estrato) {

    if (estado == "1") {
      switch (estrato) {
        case "1":
          tarifa = "10000"
          break;
        case "2":
          tarifa = "150000"
          break;
        case "3":
          tarifa = "30000"
          break;
        case "4":
          tarifa = "50000"
          break;
        case "5":
          tarifa = "65000"
          break;
      }
    } else {
      tarifa = "0"
    }
  }
  
  let formulario = document.querySelector("#agregarnombre")
  formulario.addEventListener("click",(el)=>{
      el.preventDefault();
      let nombre = document.getElementById("nombre").value
      let estado = document.getElementById("estado").value
      let estrato = document.getElementById("estrato").value
      let tbody = document.getElementById("respuesta")
      servicio(estado,estrato)
      let html = `<tr><td>${nombre}</td><td>${estrato}</td><td>${tarifa}</td></tr>`
      tbody.innerHTML+=html
    })

