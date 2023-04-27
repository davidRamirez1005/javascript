


let minimo = 1160000,
auxTx,
salarioBruto,
bonificaciones,
eps,
pension,
salarioNeto
// menosGana=[],
// promedio,
// masGana=[],
// total,
// num=0,
// cedula=[],
// max,
// min

function nomina(categoria,cedula) {

    if (categoria == "auxiliar A") {
        salarioBruto = minimo
        auxTx = 400000
        eps = ((minimo * 0.04) - minimo) + minimo * 2
        pension = ((minimo * 0.04) - minimo) + minimo * 2
        bonificaciones = 100000
        salarioNeto = salarioBruto + auxTx + bonificaciones
      }
      else if (categoria == "auxiliar B"){
        salarioBruto = (minimo*0.20)+minimo
        auxTx = 400000
        eps = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        pension = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        bonificaciones = 100000
        salarioNeto = salarioBruto + auxTx + bonificaciones
      }
      else if (categoria == "tecnico A"){
        salarioBruto = (minimo*1.5)
        auxTx = 0
        eps = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        pension = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        bonificaciones = 150000
        salarioNeto = salarioBruto + auxTx + bonificaciones
      }
      else if (categoria == "tecnico B"){
        salarioBruto = (minimo*2.0)
        auxTx = 0
        eps = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        pension = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        bonificaciones = 150000
        salarioNeto = salarioBruto + auxTx + bonificaciones
      }
      else if (categoria == "profesional A"){
        salarioBruto = (minimo*2.5)
        auxTx = 0
        eps = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        pension = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        bonificaciones = 200000
        salarioNeto = salarioBruto + auxTx + bonificaciones
      }
      else if (categoria == "profesional B"){
        salarioBruto = (minimo*3.0)
        auxTx = 0
        eps = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        pension = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        bonificaciones = 250000
        salarioNeto = salarioBruto + auxTx + bonificaciones
      }
      else if (categoria == "director A"){
        salarioBruto = (minimo*4.0)
        auxTx = 0
        eps = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        pension = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        bonificaciones = 500000
        salarioNeto = salarioBruto + auxTx + bonificaciones
      }
      else if (categoria == "director B"){
        salarioBruto = (minimo*4.5)
        auxTx = 0
        eps = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        pension = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        bonificaciones = 1000000
        salarioNeto = salarioBruto + auxTx + bonificaciones
      }
      else if (categoria == "gerente deportivo"){
        salarioBruto = (minimo*6.0)
        auxTx = 0
        eps = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        pension = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        bonificaciones = 2000000
        salarioNeto = salarioBruto + auxTx + bonificaciones
      }
      else if (categoria == "gerente general"){
        salarioBruto = (minimo*10.0)
        auxTx = 0
        eps = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        pension = ((salarioBruto * 0.04) - salarioBruto) + salarioBruto * 2
        bonificaciones = 5000000
        salarioNeto = salarioBruto + auxTx + bonificaciones
      }


        // num = new (Array);
        // num.push(cedula);

        // console.log(num.length);
      // masGana.push(salarioBruto)
      //   max = Math.max(masGana);
      //   console.log(max);

      //   min = Math.min(menosGana);
      //   console.log(min);
}




let formulario = document.querySelector("#calcular")
formulario.addEventListener("click",(el)=>{
    el.preventDefault();
    let cedula = document.getElementById("cedula").value
    let nombre = document.getElementById("nombre").value
    let categoria = document.getElementById("categoria").value
    let tbody = document.getElementById("respuesta")
    nomina(categoria,cedula)
    let html = `<tr><td>${cedula}</td><td>${nombre}</td><td>${categoria}</td><td>${salarioBruto}</td><td>${auxTx}</td><td>${bonificaciones}</td><td>${eps}</td><td>${pension}</td><td style="background-color: rgba(71, 61, 139, 0.616);">${salarioNeto}</td></tr>`
    tbody.innerHTML+=html

    document.getElementById("cedula").value = ""
    document.getElementById("nombre").value = ""
    document.getElementById("categoria").value = ""

    // let tbodyResumen = document.getElementById("resumen")

    let totalSalario = []
      totalSalario.push(salarioNeto)
      console.log(totalSalario);

    // let htmlResumen = `<tr><td>${0}</td><td>${min}</td><td>${promedio}</td><td>${max}</td><td>${total}</td></tr>`
    // tbodyResumen.innerHTML+=htmlResumen

  })