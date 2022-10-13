var airPollutionBtnEl = document.querySelector("#airPollutionBtn");
var grassBtnEl = document.querySelector("#grassPollenBtn");
var treeBtnEl = document.querySelector("#grassPollenBtn");
var weedBtnEl = document.querySelector("#grassPollenBtn");

API_KEY = "f7ef38aba28849b8819220ae11e4b3e3";
var map = L.map('map', {minZoom: 10}).setView([28.538336, -81.379234], 13);
var pollenEndPoint = "https://api.breezometer.com/pollen/v2/forecast/daily?";

var corner1 = L.latLng((28.538336-0.05), -81.379234-0.05),
corner2 = L.latLng(28.538336+0.05, -81.379234+0.05),
bounds = L.latLngBounds(corner1, corner2);
map.setMaxBounds(bounds);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/*fetch(pollenEndPoint + "lat=" + 28.538336 + "&lon=" + -81.379234 + "&key=" + API_KEY + "&days=1")
    // fetch("https://api.breezometer.com/pollen/v2/forecast/daily?lat=48.857456&lon=2.354611&days=3&key=" + API_KEY + "&features=types_information,plants_information")
    .then((response) => response.json())
    .then((data) => console.log(data));*/


airPollutionBtnEl.addEventListener('click', function(){
//air quality overlay
    L.tileLayer('https://tiles.breezometer.com/v1/air-quality/pm25/current-conditions/{z}/{x}/{y}.png?key={key}', {
        key: API_KEY,
        maxZoom: 19,
        tms: false,
        opacity: 0.45,
        attribution: '&copy; <a href="https://www.breezometer.com/terms-of-use">Breezometer</a>'
    }).addTo(map)
});

grassBtnEl.addEventListener('click', function(){
    L.tileLayer('https://tiles.breezometer.com/v1/pollen/grass/forecast/daily/{z}/{x}/{y}.png?key={key}', {
        key: API_KEY,
        maxZoom: 19,
        tms: false,
        opacity: 0.45,
        attribution: '&copy; <a href="https://www.breezometer.com/terms-of-use">Breezometer</a>'
    }).addTo(map);
});

treeBtnEl.addEventListener('click', function(){
    L.tileLayer('https://tiles.breezometer.com/v1/pollen/tree/forecast/daily/{z}/{x}/{y}.png?key={key}', {
        key: API_KEY,
        maxZoom: 19,
        tms: false,
        opacity: 0.45,
        attribution: '&copy; <a href="https://www.breezometer.com/terms-of-use">Breezometer</a>'
    }).addTo(map);
});

weedBtnEl.addEventListener('click', function(){
    L.tileLayer('https://tiles.breezometer.com/v1/pollen/weed/forecast/daily/{z}/{x}/{y}.png?key={key}', {
        key: API_KEY,
        maxZoom: 19,
        tms: false,
        opacity: 0.45,
        attribution: '&copy; <a href="https://www.breezometer.com/terms-of-use">Breezometer</a>'
    }).addTo(map);
});