// FECHA

function updateDateTime() {
    const now = new Date();
    document.getElementById('fecha-hora-actual').innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();


//DESPLEGABLE
function showCategory() {
    const selectedCategory = document.getElementById("category").value;
    const sections = document.querySelectorAll(".section");
  
    sections.forEach(section => {
      section.style.display = "none";
    });
  
    if (selectedCategory) {
      const selectedSection = document.getElementById(selectedCategory);
      if (selectedSection) {
        selectedSection.style.display = "block";
      }
    }
  }


//CAMBIO DE IMÁGENES
// comunicación
document.addEventListener("DOMContentLoaded", function () {
    let imagenActual = 1;
  
    const boton = document.querySelector("#comunicacion .button");
    const imagen = document.querySelector("#comunicacion #imagen");
  
    if (boton && imagen) {
      boton.addEventListener("click", () => {
        if (imagenActual === 1) {
          imagen.src = "assets/img/smartphone.jpg";
          imagenActual = 2;
        } else {
          imagen.src = "assets/img/tlfnantiguo.jpg";
          imagenActual = 1;
        }
      });
  }
  });

// educación
document.addEventListener("DOMContentLoaded", function () {
  let imagenActual = 1;

  const boton = document.querySelector("#educacion .button1");
  const imagen = document.querySelector("#educacion #imagen1");

  if (boton && imagen) {
    boton.addEventListener("click", () => {
      if (imagenActual === 1) {
        imagen.src = "assets/img/aulatecnologica.jpg";
        imagenActual = 2;
      } else {
        imagen.src = "assets/img/aulatradicional.jpg";
        imagenActual = 1;
      }
    });
}
});

    
// transporte
document.addEventListener("DOMContentLoaded", function () {
    let imagenActual = 1;
  
    const boton = document.querySelector("#transporte .button2");
    const imagen = document.querySelector("#transporte #imagen2");
  
    if (boton && imagen) {
      boton.addEventListener("click", () => {
        if (imagenActual === 1) {
          imagen.src = "assets/img/cocheelectrico.jpg";
          imagenActual = 2;
        } else {
          imagen.src = "assets/img/cocheclasico.jpg";
          imagenActual = 1;
        }
      });
  }
  });

// Ocio
document.addEventListener("DOMContentLoaded", function () {
    let imagenActual = 1;
  
    const boton = document.querySelector("#ocio .button3");
    const imagen = document.querySelector("#ocio #imagen3");
  
    if (boton && imagen) {
      boton.addEventListener("click", () => {
        if (imagenActual === 1) {
          imagen.src = "assets/img/realidadvirtual.jpg";
          imagenActual = 2;
        } else {
          imagen.src = "assets/img/muñecos.jpg";
          imagenActual = 1;
        }
      });
  }
  });
    
// Trabajo
document.addEventListener("DOMContentLoaded", function () {
    let imagenActual = 1;
  
    const boton = document.querySelector("#trabajo .button4");
    const imagen = document.querySelector("#trabajo #imagen4");
  
    if (boton && imagen) {
      boton.addEventListener("click", () => {
        if (imagenActual === 1) {
          imagen.src = "assets/img/portatil.jpg";
          imagenActual = 2;
        } else {
          imagen.src = "assets/img/maquinadeescribir.jpg";
          imagenActual = 1;
        }
      });
  }
  });