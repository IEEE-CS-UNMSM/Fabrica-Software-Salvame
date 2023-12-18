document.addEventListener('DOMContentLoaded', function () {
  // Inicializar el estado
  let pasoActual = 1;
  mostrarPaso(pasoActual);
  const soyExtranjeroBtn = document.getElementById('extranjero');
  soyExtranjeroBtn.addEventListener('click', function () {
    mostrarFormularioDatosExtranjero();
  });
});

function siguientePaso() {
  // Obtener el paso actual
  let pasoActual = obtenerPasoActual();

  // Verificar si estamos en el cuarto paso
  if (pasoActual === 4) {
    mostrarFormularioDatosLocal();
  } else {
    // Obtener el siguiente paso
    let siguientePaso = pasoActual + 1;

    // Mostrar el siguiente paso
    mostrarPaso(siguientePaso);
  }
}
function mostrarFormularioDatosExtranjero() {
  // Ocultar el formulario de datos-local
  document.getElementById('datos-local').classList.add('inactive');

  // Mostrar el formulario de datos-extranjero
  document.getElementById('datos-extranjero').classList.remove('inactive');
}

function mostrarFormularioDatosLocal() {
  // Ocultar todos los contenidos excepto el formulario de datos-local
  let secciones = document.querySelectorAll('.content1, .content2, .content3, .content4');
  secciones.forEach(seccion => {
    if (seccion.id !== 'datos-local') {
      seccion.style.display = 'none';
    }
  });

  // Mostrar el formulario de datos-local
  document.getElementById('datos-local').classList.remove('inactive');
}


function obtenerPasoActual() {
  // Encontrar el elemento activo
  let elementos = document.querySelectorAll('.intermedio');
  for (let i = 0; i < elementos.length; i++) {
    if (elementos[i].querySelector('div').id === 'active') {
      return i + 1;
    }
  }
  return 1; // Si no se encuentra, regresar al primer paso por defecto
}

function mostrarPaso(paso) {
  // Ocultar todos los pasos
  let elementos = document.querySelectorAll('.intermedio');
  elementos.forEach(elemento => {
    elemento.querySelector('div').id = '';
  });

  // Mostrar el paso actual
  elementos[paso - 1].querySelector('div').id = 'active';
  
  // Ocultar todos los contenidos
  let secciones = document.querySelectorAll('.content1, .content2, .content3, .content4');
  secciones.forEach(seccion => {
    seccion.style.display = 'none';
  });

  // Mostrar la sección correspondiente al paso
  if (paso <= secciones.length) {
    secciones[paso].style.display = 'block';
  }


}
document.addEventListener('DOMContentLoaded', function () {
    var fileInput = document.getElementById('file-input');
    var previewImage = document.getElementById('preview');
    var uploadLabel = document.getElementById('custom-upload-button');
    var dropText = document.querySelector('.subir-img h1');
    var previewContainer = document.getElementById('preview-container');

    fileInput.addEventListener('change', function () {
        var file = fileInput.files[0];

        if (file) {
            var reader = new FileReader();

            reader.onload = function (e) {
                previewImage.src = e.target.result;

                // Ocultar el texto y el botón cuando la imagen se carga
                dropText.style.display = 'none';
                uploadLabel.style.display = 'none';

                // Mostrar el contenedor de vista previa
                previewContainer.style.display = 'block';
            };

            reader.readAsDataURL(file);
        }
    });
});

// Mostrar por defecto el contenido1 al cargar la página
mostrarPaso(1);
