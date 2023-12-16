let map;
let marker;
const distanciaLugar = document.querySelector('.mostrar-ubicacion__distancia p');
const lat = document.querySelector('.mostrar-ubicacion__titulo .lat');
const lng = document.querySelector('.mostrar-ubicacion__titulo .lng');
let userCoords = { lat: 0, lng: 0 };


//creamos array vacio para los marcadores 
let coordenadas = [];


const capturarButton = document.querySelector('.btn-capturar');

function iniciarMap() {
    const coord = { lat: -12.054357, lng: -77.084362 }; // Coordenadas de UNMSM
    const coord2 = { lat: -12.06274765, lng: -77.149327 };
    // Inicializar mapa
    map = new google.maps.Map(document.getElementById('map'), { 
        zoom: 5,
        center: coord,
    });

    //peticion a la api


    // Inicializar marker
    
    wasa = [marker = new google.maps.Marker({
        position: coord,
        map: map,
        draggable: true,
    })
,
    marker2 = new google.maps.Marker({
        position: coord2,
        map: map,
        draggable: true,
    })];
    

    map.addListener('click', (evt) => {
        console.log(evt);
        marker.setPosition(evt.latLng);
        updateMarkerPosition(marker.getPosition());
    });

}
