function limpiarTabla() {
    document.querySelectorAll('tbody tr').forEach((row) => {
      row.delete();
    });
  }
function calcular(corte1,corte2,corte3) {
    let nota1 = corte1 * 0.33
    let nota2 = corte2 * 0.33
    let nota3 = corte3 * 0.34

    let definitiva = nota1 + nota2 + nota3;
    console.log(definitiva.toFixed(1))
    return definitiva.toFixed(1);

}


let formulario = document.querySelector("#agregarNotas")
formulario.addEventListener("click",(el)=>{
  el.preventDefault()

  let corte1 = parseFloat(document.getElementById("corte1").value);
  let corte2 = parseFloat(document.getElementById("corte2").value);
  let corte3 = parseFloat(document.getElementById("corte3").value);
  
  let definitiva = parseFloat(calcular(corte1,corte2,corte3))
  
  let tbody = document.getElementById("cuerpoTabla");
  let html = `<tr><td>${corte1}</td><td>${corte2}</td><td>${corte3}</td><td>${definitiva}</td></tr>`
  tbody.innerHTML += html

  document.getElementById("corte1").value = ""
  document.getElementById("corte2").value = ""
  document.getElementById("corte3").value = ""
})