fetch('/api/alertas')
      .then(response => response.json())
      .then(data => {
          const alertsContainer = document.getElementById('alertsContainer');

          // Verifica si los datos están en un array dentro del array de respuesta
          const alerts = Array.isArray(data) ? data[0] : data;

          alerts.forEach(alert => {
              const div = document.createElement('div');
              div.classList.add('alert-row');
              
              const date = new Date(alert.horaAlerta).toLocaleDateString();

              // Establece la clase base para los botones
              let revisadoClass = 'status-button';
              let aceptadoClass = 'status-button';
              let rechazadoClass = 'status-button';

              // Agrega clases adicionales en función del estado
              if (alert.estatus === 'Aceptado') {
                revisadoClass += ' revisado';
                aceptadoClass += ' aceptado';
              } else if (alert.estatus === 'Rechazado') {
                revisadoClass += ' revisado';
                rechazadoClass += ' rechazado';
              }else{
                alert.estatus = 'sinrevisar';
              }

              const revisadoButton = `<button class="${revisadoClass}">Revisado</button>`;
              const aceptadoButton = `<button class="${aceptadoClass}">Aceptado</button>`;
              const rechazadoButton = `<button class="${rechazadoClass}">Rechazado</button>`;

              div.innerHTML = `
                  <div class="alert-id">${alert.idAlerta} - ${date}</div>
                  <div class="alert-status">
                      ${revisadoButton}
                      ${aceptadoButton}
                      ${rechazadoButton}
                  </div>
              `;

              alertsContainer.appendChild(div);
          });
      })
      .catch(error => console.error(error));