const d = document, 
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.getElementById("crud-template").content,
$fragment = d.createDocumentFragment();

const getAll = async () => {
try {
  let res = await fetch("http://localhost:4500/agendar/"),
    json = await res.json();

  if (!res.ok) throw { status: res.status, statusText: res.statusText };

  console.log(json,res);
  json.forEach((el) => {
    $template.querySelector(".mate").textContent = el.materia;
    $template.querySelector(".sem").textContent = el.semestre;
    $template.querySelector(".cort").textContent = el.corte;
    $template.querySelector(".edit").dataset.id = el.id;
    $template.querySelector(".edit").dataset.mate = el.materia;
    $template.querySelector(".edit").dataset.sem = el.semestre;
    $template.querySelector(".edit").dataset.cort = el.corte;
    $template.querySelector(".delete").dataset.id = el.id;

    let $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
  });

  $table.querySelector("tbody").appendChild($fragment);
} catch (err) {
  let message = err.statusText || "Ocurrió un error";
  $table.insertAdjacentHTML(
    "afterend",
    `<p><b>Error ${err.status}: ${message}</b></p>`
  );
}
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {
if (e.target === $form) {
  e.preventDefault();

  if (!e.target.id.value) {
    //Create - POST
    try {
      let options = {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            materia: e.target.materia.value,
            semestre: e.target.semestre.value,
            corte: e.target.corte.value,
          }),
        },
        res = await fetch("http://localhost:4500/agendar", options),
        json = await res.json();

      if (!res.ok)
        throw { status: res.status, statusText: res.statusText };

      location.reload();
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      $form.insertAdjacentHTML(
        "afterend",
        `<p><b>Error ${err.status}: ${message}</b></p>`
      );
    }
  } else {
    //Update - PUT
    try {
      let options = {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            materia: e.target.materia.value,
            semestre: e.target.semestre.value,
            corte: e.target.corte.value,
          }),
        },
        res = await fetch(
          `http://localhost:4500/agendar/${e.target.id.value}`,
          options
        ),
        json = await res.json();

      if (!res.ok)
        throw { status: res.status, statusText: res.statusText };

      location.reload();
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      $form.insertAdjacentHTML(
        "afterend",
        `<p><b>Error ${err.status}: ${message}</b></p>`
      );
    }
  }
}
});

d.addEventListener("click", async (e) => {
if (e.target.matches(".edit")) {
  $title.textContent = "Editar";
  $form.materia.value = e.target.dataset.mate;
  $form.semestre.value = e.target.dataset.sem;
  $form.corte.value = e.target.dataset.cort;
  $form.id.value = e.target.dataset.id;
}

if (e.target.matches(".delete")) {
  let isDelete = confirm(
    `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
  );

  if (isDelete) {
    //Delete - DELETE
    try {
      let options = {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
        },
        res = await fetch(
          `http://localhost:4500/agendar/${e.target.dataset.id}`,
          options
        ),
        json = await res.json();

      if (!res.ok)
        throw { status: res.status, statusText: res.statusText };

      location.reload();
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      alert(`Error ${err.status}: ${message}`);
    }
  }
}
});