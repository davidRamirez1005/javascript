

console.log(document.body.children[0]);
console.log(document.querySelector("h1"));
console.log(document.querySelector("#nombre"));

console.log(document.querySelectorAll("#nombre"));

let h1 = document.querySelector("#nombre")
h1.innerHTML="<em>campus lands</em>"

let img = document.createElement("img")
img.src="https://www.eltiempo.com/files/image_640_428/uploads/2018/03/22/5ab428c6cda71.jpeg"
img.width = "250"
console.log(img);

// document.querySelector("body").append(img)

document.querySelector("h1").insertAdjacentElement("beforebegin",img)

for (let i = 0; i <= 2; i++) {
    let nombre = prompt("ingrese nombre")
    let apellido = prompt("ingrese apellido")
    let altura = prompt("ingrese altura")
    
    let tr = document.createElement("tr")
    let td = document.createElement("td")

    

}



