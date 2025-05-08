
function verificar(event) {
    event.preventDefault();

    const username = document.getElementById("usuario").value.trim();
    const password = document.getElementById("contrasena").value.trim();


    const usuarioFijo = {
        usuario: "erikanm",
        contrasena: "1234"
    }
    if (username === usuarioFijo.usuario && password === usuarioFijo.contrasena) {
        alert("¡Login exitoso! Bienvenid@");
    } else {
        alert("Oh oh! Revisa tus datos...");
    }
}