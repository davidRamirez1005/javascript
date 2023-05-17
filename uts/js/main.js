import scrollTopButton from "./boton.js";
import hamburgerMenu from "./menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded",()=>{
    hamburgerMenu(".panelBtn",".panel",".menu a")
    scrollTopButton(".scroll-top-btn")
})
