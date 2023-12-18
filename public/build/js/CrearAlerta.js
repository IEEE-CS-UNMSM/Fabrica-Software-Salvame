
document.addEventListener('DOMContentLoaded', function () {
  // Inicializar el estado
  let pasoActual = 1;
  mostrarPaso(pasoActual);
});

function siguientePaso() {
  // Obtener el siguiente paso
  let pasoActual = obtenerPasoActual();
  let siguientePaso = pasoActual + 1;

  // Mostrar el siguiente paso
  mostrarPaso(siguientePaso);
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

  // Mostrar u ocultar botones según el paso
  if (paso === 4) {
    document.getElementById('Vamos').style.display = 'none';
    document.getElementById('ENVIAR').style.display = 'block';
  } else {
    document.getElementById('Vamos').style.display = 'block';
    document.getElementById('ENVIAR').style.display = 'none';
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
