const usuarioInput = document.getElementById("usuario");
const claveInput = document.getElementById("contrasena");
const terminosCheck = document.getElementById("checkbox");
const logueoBtn = document.getElementById("logueo");
const loginForm = document.getElementById("loginForm");


function mostrarMensaje(tipo, texto, inputParaFoco = null) {
    if (mensajeDiv) {
        mensajeDiv.textContent = texto;
        mensajeDiv.style.color = tipo === 'exito' ? 'lightgreen' : 'red';
        if (inputParaFoco) inputParaFoco.focus();
    }
}


function habilitarLogueo() {
    logueoBtn.disabled = !terminosCheck.checked;
}
terminosCheck.addEventListener("change", habilitarLogueo);


loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    loguear();
});


function loguear() {
    const usuarioValor = usuarioInput.value.trim();
    const claveValor = claveInput.value.trim();
}

habilitarLogueo();