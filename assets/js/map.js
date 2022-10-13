API_KEY = "f7ef38aba28849b8819220ae11e4b3e3";
var map = L.map('map').setView([28.538336, -81.379234], 13);
//var mapEl = document.querySelector("#map");

// https://tiles.breezometer.com/v1/pollen/grass/forecast/daily/{z}/{x}/{y}.png?key=' + API_KEY
// 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);