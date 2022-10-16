var btns = document.querySelector('.buttons')
var mapTitle = document.querySelector('#map-title');

var getCityName = localStorage.getItem("cityName");
geoCodeApi();

function geoCodeApi (){
    var geocodeKey = 'f4ac9ae98ce232f81e1a8c7e3fd76a5a';
    var url = 'https://api.openweathermap.org/geo/1.0/direct?q='+getCityName+'&limit=1&appid='+geocodeKey
    console.log(url)
    fetch(url).then(function(response){
        return response.json()
    }).then(function(data){
        var lat = data[0].lat;
        var lon = data[0].lon;
        mapTitle.textContent = getCityName;
        API_KEY = "f7ef38aba28849b8819220ae11e4b3e3";
        var map = L.map('map', {minZoom: 10}).setView([lat, lon], 13);
        var corner1 = L.latLng((lat-0.05), lon-0.05),
        corner2 = L.latLng(lat+0.05, lon+0.05),
        bounds = L.latLngBounds(corner1, corner2);
        map.setMaxBounds(bounds);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);


var overlayExist = false;
var layer;

$("button").click(function(){
    if (overlayExist == true){
        layer.remove();
    }
    if(this.id == "airPollutionBtn"){
        layer = L.tileLayer('https://tiles.breezometer.com/v1/air-quality/pm25/current-conditions/{z}/{x}/{y}.png?key={key}', {
            key: API_KEY,
            maxZoom: 19,
            tms: false,
            opacity: 0.45,
            attribution: '&copy; <a href="https://www.breezometer.com/terms-of-use">Breezometer</a>'
            }).addTo(map)
    overlayExist = true;
    }
    else {
        if (overlayExist == true){
            layer.remove();
        }
        if(this.id == "grassPollenBtn"){
            var pollenType = "grass";
        }
        else if (this.id == "treePollenBtn"){
            var pollenType = "tree";
        }
        else if (this.id == "weedPollenBtn"){
            var pollenType = "weed";
        }
        layer = L.tileLayer('https://tiles.breezometer.com/v1/pollen/' + pollenType + '/forecast/daily/{z}/{x}/{y}.png?key={key}', {
            key: API_KEY,
            maxZoom: 19,
            tms: false,
            opacity: 0.45,
            attribution: '&copy; <a href="https://www.breezometer.com/terms-of-use">Breezometer</a>'
        }).addTo(map)
        overlayExist = true;
    }
});
    })
}

