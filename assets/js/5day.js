var airindex = document.getElementById("air-index")
var cardheaderdate = document.getElementById("card-date")

var air = localStorage.getItem("AQI");
airindex.append(air);

var carddate = localStorage.getItem("UNIX"); 
cardheaderdate.append(carddate);

var breezokey = "f7ef38aba28849b8819220ae11e4b3e3";

function geoCodeApi (search){
    console.log(search)
    var geocodeKey = 'f4ac9ae98ce232f81e1a8c7e3fd76a5a';
    var url = 'https://api.openweathermap.org/geo/1.0/direct?q='+search+'&limit=1&appid='+geocodeKey
    console.log(url)
    fetch(url).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(data){
        console.log(data);
        // console.log([0]);
        var lat = data[0].lat;
        var lon = data[0].lon;
        console.log(lat)
        breezometer(lat,lon)
    })}
        
    function breezometer(lat,lon){
    fetch("https://api.breezometer.com/pollen/v2/forecast/daily?"+lat+"&"+lon+"&5=3&"+breezokey).then(function(response){ 
        return response.json()
    }).then(function(data){
        console.log(data)
        
    })

    }