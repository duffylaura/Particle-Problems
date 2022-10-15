var airindex = document.getElementById("air-index")
var cardheaderdate = document.getElementById("card-date")

var air = localStorage.getItem("AQI");
airindex.append(air);

var carddate = localStorage.getItem("UNIX"); 
cardheaderdate.append(carddate);

var saveCity = localStorage.getItem("cityName");

function geoCode5day (){
    var geocodeKey = "f4ac9ae98ce232f81e1a8c7e3fd76a5a";
    var url = "https://api.openweathermap.org/geo/1.0/direct?q="+saveCity+"&limit=1&appid="+geocodeKey
    fetch(url).then(function(response){
        return response.json()
    }).then(function(data){
        var lat = data[0].lat;
        var lon = data[0].lon;
        breezometer(lat,lon)
    })
}
        
    function breezometer(lat,lon){
    var breezokey = "f7ef38aba28849b8819220ae11e4b3e3";
    url= "https://api.breezometer.com/pollen/v2/forecast/daily?lat="+lat+"&lon="+lon+"&days=3&key="+breezokey
    fetch(url).then(function(response){ 
        console.log(response)
        return response.json()
    }).then(function(data){
        console.log(data);
        
    })

    }

    geoCode5day()