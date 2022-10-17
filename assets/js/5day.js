var airindex = document.getElementById("air-index")
var cardheaderdate = document.getElementById("card-date")
var air = localStorage.getItem("AQI");
var carddateUnix = localStorage.getItem("UNIX"); 
var correctDate = moment.unix(carddateUnix).format("dddd MM/DD/YYYY");
var saveCity = localStorage.getItem("cityName")
var uppersaveCity = saveCity.toUpperCase();
var mainHeader = document.getElementById("container-header");
var apiText = document.getElementById("api");
var grass = document.getElementById("grass");
var tree = document.getElementById("tree");
var weed = document.getElementById("weed");
var aqiData1 = document.getElementById("aqi-data1");
var aqiData2 = document.getElementById("aqi-data2");
var aqiData3 = document.getElementById("aqi-data3");
var cardBody = document.getElementById("card-body");


mainHeader.append(uppersaveCity + " Pollen Forecast");

//This gets fetch.then function gives the latitude and longitude when the user inputs a city name. The lat and lon is saved in the localStorage.
function geoCode5day (){
    var geocodeKey = "f4ac9ae98ce232f81e1a8c7e3fd76a5a";
    var url = "https://api.openweathermap.org/geo/1.0/direct?q="+saveCity+"&limit=1&appid="+geocodeKey
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

//This functions uses the lat and lon received to get the data from breezometter and openweathermap.
function breezometer(lat,lon){
    var breezokey = "f7ef38aba28849b8819220ae11e4b3e3";
    url= "https://api.breezometer.com/pollen/v2/forecast/daily?lat="+lat+"&lon="+lon+"&key="+breezokey+"&days=3"
    fetch(url).then(function(response){ 
        console.log(response)
        return response.json()
    }).then(function(data){
        console.log(data)
        
    var apiKey = "aa3ac1aee36fc947283c79786b233621";
    var oneweatherairurl = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(oneweatherairurl).then(function(pollutants){
        console.log(pollutants)
        return pollutants.json()
    }).then(function(pollutants){
        console.log(pollutants)
     
    // This for loop dynamically generates elements in the 5day.html using data from the previous fetch of breezometer.
    for(var i = 0; i < 3; i++){
        var cardContent = document.createElement("table");
        cardContent.setAttribute("class", "table is-fullwidth");
        var timerow = document.createElement("tr");
        timerow.setAttribute("class", "has-text-centered");
        var grassrow = document.createElement("tr");
        var treerow = document.createElement("tr");
        var weedrow = document.createElement("tr");
        var timetext = document.createElement("td");
        var grasstext = document.createElement("td");
        var treetext = document.createElement("td");
        var weedtext = document.createElement("td");
        var h4 = document.createElement("td").textContent = moment(data.data[i].date).format("MM/DD/YYYY");
        var newgrasspollen = document.createElement("td").textContent = " Grass Pollen Index: "+data.data[i].types.grass.index.category;
        var newtreepollen = document.createElement("td").textContent = "Tree Pollen Index: "+data.data[i].types.tree.index.category;
        var newweedpollen = document.createElement("td").textContent = " Weed Pollen Index: "+data.data[i].types.weed.index.category;
        timetext.append(h4);
        grasstext.append(newgrasspollen);
        treetext.append(newtreepollen);
        weedtext.append(newweedpollen);
        timerow.append(timetext)
        grassrow.append(grasstext);
        treerow.append(treetext);
        weedrow.append(weedtext);
        cardContent.append(timerow, grassrow, treerow, weedrow);
        cardBody.append(cardContent); 

      
    }

    // This gets data from air pollution api and set it to local storage.
    var day1 = pollutants.list[0].main.aqi;
    var day2 = pollutants.list[25].main.aqi;    
    var day3 = pollutants.list[50].main.aqi;
    console.log( day1, day2, day3);
    localStorage.setItem("day1aqi", day1)
    localStorage.setItem("day2aqi", day2)
    localStorage.setItem("day3aqi", day3)
    
    //This inputs the air pollution api and breezometer data into the 5day.html.
    aqiData1.append(moment(data.data[0].date).format("MM/DD/YYYY")+": "+"AQI index: "+ "Level "+day1);
    aqiData2.append(moment(data.data[1].date).format("MM/DD/YYYY")+": "+"AQI index: "+ "Level "+day2);
    aqiData3.append(moment(data.data[2].date).format("MM/DD/YYYY")+": "+"AQI index: "+ "Level "+day3);


})})}
  
        

    geoCode5day()


