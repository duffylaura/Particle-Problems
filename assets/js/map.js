API_KEY = "f7ef38aba28849b8819220ae11e4b3e3";
var map = L.map('map', {minZoom: 10}).setView([28.538336, -81.379234], 13);
var pollenEndPoint = "https://api.breezometer.com/pollen/v2/forecast/daily?";

var corner1 = L.latLng((28.538336-0.05), -81.379234-0.05),
corner2 = L.latLng(28.538336+0.05, -81.379234+0.05),
bounds = L.latLngBounds(corner1, corner2);
map.setMaxBounds(bounds);
//var mapEl = document.querySelector("#map");

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/*fetch(pollenEndPoint + "lat=" + 28.538336 + "&lon=" + -81.379234 + "&key=" + API_KEY + "&days=1")
    // fetch("https://api.breezometer.com/pollen/v2/forecast/daily?lat=48.857456&lon=2.354611&days=3&key=" + API_KEY + "&features=types_information,plants_information")
    .then((response) => response.json())
    .then((data) => console.log(data));*/

var pollenType = "grass";

L.tileLayer('https://tiles.breezometer.com/v1/pollen/' + pollenType +'/forecast/daily/{z}/{x}/{y}.png?key={key}', {
    key: API_KEY,
    maxZoom: 19,
    tms: false,
    opacity: 0.45,
    attribution: '&copy; <a href="https://www.breezometer.com/terms-of-use">Breezometer</a>'
}).addTo(map);

//air quality overlay
/*L.tileLayer('https://tiles.breezometer.com/v1/air-quality/pm25/current-conditions/{z}/{x}/{y}.png?key={key}', {
    key: API_KEY,
    maxZoom: 19,
    tms: false,
    opacity: 0.45,
    attribution: '&copy; <a href="https://www.breezometer.com/terms-of-use">Breezometer</a>'
}).addTo(map);*/