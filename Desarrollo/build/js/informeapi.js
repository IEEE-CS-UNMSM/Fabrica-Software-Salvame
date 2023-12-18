fetch('https://c564-179-6-5-117.ngrok-free.app/animal')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));


// const informeContainer = document.getElementById('informeContainer');
// const apiUrl = 'https://c564-179-6-5-117.ngrok-free.app/animal';
// console.log('hola');
// fetch(apiUrl)
//     .then(response => {
//         console.log(response);
//         if (!response.ok) {
//             throw new Error(`La solicitud falló con estado ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Limpia el contenedor antes de agregar nuevos datos
//         informeContainer.innerHTML = '';

//         // Itera sobre cada objeto animal en la lista y crea tarjetas para mostrar los datos
//         data.forEach(animal => {
//             const card = document.createElement('div');
//             card.classList.add('card');

//             const image = document.createElement('img');
//             image.classList.add('card__image');
//             image.setAttribute('src', 'src/img/reptiles.png');
//             image.setAttribute('alt', 'reptiles');
//             card.appendChild(image);

//             const content = document.createElement('div');
//             content.classList.add('card__content');

//             const family = document.createElement('h3');
//             family.classList.add('Familia');
//             family.textContent = animal.familia;
//             content.appendChild(family);

//             const lugar = document.createElement('div');
//             lugar.classList.add('card__lugar');

//             const especie = document.createElement('p');
//             especie.classList.add('Especie');
//             especie.textContent = animal.especie;
//             lugar.appendChild(especie);

//             const zonas = document.createElement('p');
//             zonas.classList.add('Zonas');
//             zonas.textContent = `Lugar: ${animal.codigoPostalUbicacion}`;
//             lugar.appendChild(zonas);

//             content.appendChild(lugar);

//             const fecha = document.createElement('p');
//             fecha.classList.add('card__fecha');
//             fecha.textContent = '17/10/2022'; // Coloca la fecha real si está disponible en los datos
//             content.appendChild(fecha);

//             card.appendChild(content);

//             informeContainer.appendChild(card);
//         });
//     })
//     .catch(error => console.error('Error al obtener los datos:', error));
