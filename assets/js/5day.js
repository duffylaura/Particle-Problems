var airindex = document.getElementById("air-index")
var cardheaderdate = document.getElementById("card-date")

var air = localStorage.getItem("AQI");
airindex.append(air);

var carddateUnix = localStorage.getItem("UNIX"); 
var correctDate = moment.unix(carddateUnix).format("MM/DD/YYYY");
cardheaderdate.append(correctDate);

var saveCity = localStorage.getItem("cityName")
var uppersaveCity = saveCity.toUpperCase();

var lat2 = localStorage.getItem("lat");
var lon2 = localStorage.getItem("lon");

geoCode5day()

function geoCode5day (){
    var geocodeKey = "f4ac9ae98ce232f81e1a8c7e3fd76a5a";
    var url = "https://api.openweathermap.org/geo/1.0/direct?q="+saveCity+"&limit=1&appid="+geocodeKey
    console.log(saveCity)
    fetch(url).then(function(response){
        return response.json()
    }).then(function(data){
        var lat = data[0].lat;
        var lon = data[0].lon;
        breezometer(lat,lon)
        localStorage.setItem("lat", lat);
        localStorage.setItem("lon", lon);
    })
}
      
function breezometer(lat,lon){
    var breezokey = "f7ef38aba28849b8819220ae11e4b3e3";
    url= "https://api.breezometer.com/pollen/v2/forecast/daily?lat="+lat+"&lon="+lon+"&key="+breezokey+"&days=3"
    fetch(url).then(function(response){ 
        console.log(response)
        return response.json()
    }).then(function(data){
        console.log(data);
    })
}

function currentCity(){
    var apiKey = "aa3ac1aee36fc947283c79786b233621";
    var url = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat2}&lon=${lon2}&appid=${apiKey}`
    fetch(url).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(data){
        console.log(data)
        // data = data.list[0]
        // createCards(data)
        })
    }
    
    currentCity()

