const API_KEY = "31158224af77573a973076ffedf7f688"

const search = document.querySelector('#search')
const Inputvalue = document.querySelector('#inputvalue')
const Map_main = document.querySelector('#map')


function url_generator(city){
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
}

search.addEventListener('click', function(){
    event.preventDefault()
    let City_Name  = Inputvalue.value;
    url = url_generator(City_Name);

    fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            let lon = data.coord.lon
            let lat = data.coord.lat
            console.log(data)
            mapp(lon, lat);
            console.log(data);
            
        })
})


function mapp(lon, lat){
let mymap = L.map(Map_main).setView([lat, lon], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieW9uaWJhYmkiLCJhIjoiY2toa20xdXg4MWNsbTJ6cDk0d25iM2drZCJ9.4LLM8wFPWi0vRWH6cWb0GA'
}).addTo(mymap);

    let landmark = L.marker([lat,lon]).addTo(mymap);
    let circle = L.circle([lat, lon], {
    radius: 15000,
    color: 'green',
    
}).addTo(mymap)
}