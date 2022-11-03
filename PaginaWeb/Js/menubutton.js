"use strict";


let formulario = document.querySelector("#Compra");

formulario.addEventListener("submit",enviarSugerencia);


function enviarSugerencia(e) {
    e.preventDefault();
    let form = new FormData(formulario);
    let nombre = form.get("nombre");
    let mensaje = document.querySelector("#mensajeForm");
    mensaje.innerHTML = `Hola, ${nombre}. Se le contactara en la brevedad. ¡Gracias!`;
}

