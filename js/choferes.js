let vnombres = new Array()

function ordenar2() {
    let nombre = document.miformulario.nombre.value
    let vnombres2 = document.miformulario.ordenados.value.split("\n")
    vnombres2.push(nombre)
    vnombres2.sort()

    document.miformulario.ordenados.value = vnombres2.join("\n");

    document.miformulario.nombre.value="";
}