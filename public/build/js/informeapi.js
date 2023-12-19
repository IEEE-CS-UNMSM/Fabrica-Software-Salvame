const informeContainer = document.querySelector('.informe__grid');

const apiUrl = 'http://localhost:3000/informes';

fetch(apiUrl)
    .then(response => {
        console.log(response);
        if (!response.ok) {
            throw new Error(`La solicitud falló con estado ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        informeContainer.innerHTML = '';

        data.forEach(animal => {
            let card = document.createElement('div');
            card.classList.add('card');

            let content = document.createElement('div');
            content.classList.add('card__content');

            let family = document.createElement('h3');
            family.classList.add('Familia');
            family.textContent = animal.especie;
            content.appendChild(family);

            let image = document.createElement('img');
            image.classList.add('card__image');
            image.setAttribute('src', `../src/img/${animal.especie.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}.webp`);
            image.setAttribute('alt', `${animal.especie}`);
            card.appendChild(image);

            let lugar = document.createElement('div');
            lugar.classList.add('card__lugar');

            let especie = document.createElement('p');
            especie.classList.add('Especie');
            especie.textContent = animal.nombreComun;
            lugar.appendChild(especie);

            let zonas = document.createElement('p');
            zonas.classList.add('Zonas');
            zonas.textContent = `${animal.departamento}/ ${animal.provincia}`;
            lugar.appendChild(zonas);

            content.appendChild(lugar);

            let fecha = document.createElement('p');
            fecha.classList.add('card__fecha');
            fecha.textContent = animal.codigoPostalUbicacion;
            content.appendChild(fecha);

            card.appendChild(content);

            informeContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error al obtener los datos:', error));