const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contrasena");
const checkbox = document.getElementById("checkbox");
const logueo = document.getElementById("logueo");
const loginForm = document.getElementById("loginForm");

function mostrarMensaje(tipo, texto, inputParaFoco = null) {
    if (mensajeDiv) {
        mensajeDiv.textContent = texto;
        mensajeDiv.style.color = tipo === 'exito' ? 'lightgreen' : 'red';
        if (inputParaFoco) inputParaFoco.focus();
    }
}


function habilitarLogueo() {
    logueo.disabled = !terminos.checked;
}

terminos.addEventListener("change", habilitarLogueo);


loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    loguear();
});


habilitarLogueo();