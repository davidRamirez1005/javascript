function limpiarTabla() {
  document.querySelectorAll('tbody tr').forEach((row) => {
    row.remove();
  });
}

function calcular(corte1, corte2, corte3) {
  let nota1 = corte1 * 0.33;
  let nota2 = corte2 * 0.33;
  let nota3 = corte3 * 0.34;

  let definitiva = nota1 + nota2 + nota3;
  console.log(definitiva.toFixed(1));
  return definitiva.toFixed(1);
}

function guardarDatos(corte1, corte2, corte3, definitiva) {
  let datos = {
    corte1: corte1,
    corte2: corte2,
    corte3: corte3,
    definitiva: definitiva
  };

  let registros = localStorage.getItem('registros');
  if (registros) {
    registros = JSON.parse(registros);
    registros.push(datos);
  } else {
    registros = [datos];
  }

  localStorage.setItem('registros', JSON.stringify(registros));
}

function cargarDatos() {
  let registros = localStorage.getItem('registros');
  if (registros) {
    registros = JSON.parse(registros);
    let tbody = document.getElementById('cuerpoTabla');
    tbody.innerHTML = '';

    registros.forEach((datos) => {
      let html = `<tr><td>${datos.corte1}</td><td>${datos.corte2}</td><td>${datos.corte3}</td><td>${datos.definitiva}</td></tr>`;
      tbody.innerHTML += html;
    });
  }
}
let formulario = document.querySelector('#agregarNotas');
formulario.addEventListener('click', (el) => {
  el.preventDefault();
  
  let borrarForm = document.getElementById("borrarForm")
  let corte1 = parseFloat(document.getElementById('corte1').value);
  let corte2 = parseFloat(document.getElementById('corte2').value);
  let corte3 = parseFloat(document.getElementById('corte3').value);

  let definitiva = parseFloat(calcular(corte1, corte2, corte3));

  let tbody = document.getElementById('cuerpoTabla');
  let html = `<tr><td>${corte1}</td><td>${corte2}</td><td>${corte3}</td><td>${definitiva}</td></tr>`;
  tbody.innerHTML += html;

  guardarDatos(corte1, corte2, corte3, definitiva);
  borrarForm.reset();
});

cargarDatos();
