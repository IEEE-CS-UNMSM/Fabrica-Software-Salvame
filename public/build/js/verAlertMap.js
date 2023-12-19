let map;
let marker;
let userCoords = { lat: 0, lng: 0 };

const calendar = document.querySelector("#fecha")
const option = document.querySelector("#departament")
const buscar = document.querySelector("#buscar")
console.log(buscar);
buscar.addEventListener("click", ()=>{console.log(calendar.value, option.value)})
/* 
option.addEventListener("click", ()=>{
    console.log(option.value);
}) */
let dict ={
    wasa:"wasa"
} 


//creamos array vacio para los marcadores 
let coordenadas = [];
let markers = [];
//peticion pero para mostrar todas las alertas al incio
const obtenerCoords =  async()=>{
    if(option.value===0){
    const res = fetch("http://localhost:3000/marker")
    const coords = await res.json()
    coords.array.forEach(element => {
        let coord = {
            lat:element["latitud"],
            lng:element["longitud"]
        }
        coordenadas.push(coord)
    });
    }
    else{
        let dep = {departamento:option.value}
        const res = fetch("http://localhost:3000/marker", {
            method:"POST",
            body:JSON.stringify(dep),
            headers:{
                "Content-Type":"Apliaction.json"
            }
        })    
        const coords = await res.json()
        coords.array.forEach(element => {
        let coord = {
            lat:element["latitud"],
            lng:element["longitud"]
        }
        coordenadas.push(coord)
    });
        

    }
}


function iniciarMap() {
    obtenerCoords();
    //peticion a api
        coordenadas.forEach((element) =>{
            marker = new google.maps.Marker({
                position:element,
                map:map,
                draggable:false
            })
            markers.push(marker)
        })
    

    map.addListener('click', (evt) => {
        console.log(evt);
        marker.setPosition(evt.latLng);
        updateMarkerPosition(marker.getPosition());
    });

}
