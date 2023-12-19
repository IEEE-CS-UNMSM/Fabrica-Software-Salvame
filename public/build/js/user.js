document.addEventListener("DOMContentLoaded", function () {
    // Realiza una solicitud AJAX para obtener los datos del usuario
    fetch('/auth-log')
        .then(response => response.json())
        .then(userData => {
            // Accede a la primera palabra en el objeto userData
            const userNamesElement = document.getElementById('userNames');
            if (userNamesElement) {
                // Divide el nombre completo en palabras y toma la primera
                const nombre = userData.nombres.split(' ')[0];
                userNamesElement.textContent = `¡Hola!, ${nombre}`;
            }

            document.getElementById('btnSingIn').style.display = 'none';
            document.getElementById('btnLogin').style.display = 'none';

            const id = userData.userId;
            // Mostrar un enlace al perfil
            const perfilLink = document.getElementById('linkPerfil');
            perfilLink.style.display = 'inline-block';
            perfilLink.href = `/user/${id}`;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
    
    
});


  document.addEventListener("DOMContentLoaded", function () {
    const userIdA = obtenerId(); // Asegúrate de tener tu lógica para obtener el ID

    const misAlertasLink = document.getElementById("misAlertasLink");
    misAlertasLink.href = `/user/${userIdA}/mis-alertas`;
  });

  function obtenerId() {
    const currentUrl = window.location.href;
    const userIdMatch = currentUrl.match(/\/user\/([^/]+)/);
    return userIdMatch ? userIdMatch[1] : 'defaultUserId';
  }

