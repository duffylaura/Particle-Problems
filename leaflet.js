API_KEY = "f7ef38aba28849b8819220ae11e4b3e3";
var map = L.map('map').setView([28.538336, -81.379234], 13);

// https://tiles.breezometer.com/v1/pollen/grass/forecast/daily/{z}/{x}/{y}.png?key=' + API_KEY
// 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.tileLayer('https://tiles.breezometer.com/v1/pollen/grass/forecast/daily/{z}/{x}/{y}.png?key={key}', {
    key: API_KEY,
    maxZoom: 19,
    tms: false,
    opacity: 0.45,
    attribution: '&copy; <a href="https://www.breezometer.com/terms-of-use">Breezometer</a>'
}).addTo(map);

// var marker = L.marker([51.5, -0.09]).addTo(map);

// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");