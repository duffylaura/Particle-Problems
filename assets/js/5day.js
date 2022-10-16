var airindex = document.getElementById("air-index")
var cardheaderdate = document.getElementById("card-date")
var air = localStorage.getItem("AQI");
var carddateUnix = localStorage.getItem("UNIX"); 
var correctDate = moment.unix(carddateUnix).format("dddd MM/DD/YYYY");
var saveCity = localStorage.getItem("cityName")
var uppersaveCity = saveCity.toUpperCase();
// var lat2 = localStorage.getItem("lat");
// var lon2 = localStorage.getItem("lon");
var mainHeader = document.getElementById("container-header");
var apiText = document.getElementById("api");
var grass = document.getElementById("grass");
var tree = document.getElementById("tree");
var weed = document.getElementById("weed");


// airindex.append(air);
var cardBody = document.getElementById("card-body");
cardBody.innerHTML = "";
// cardheaderdate.append(correctDate);
mainHeader.append(uppersaveCity + " 3 Day Forecast");


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

        for(var i = 0; i < 3; i++){
           
            var cards = document.createElement("div");
            cards.setAttribute("class", "card tile");
            var cardContent = document.createElement("table");
            cardContent.setAttribute("class", "table has-text-centered");
            var timerow = document.createElement("tr");
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
            // var result = h4 + newgrasspollen + newtreepollen + newweedpollen
            timetext.append(h4)
            grasstext.append(newgrasspollen);
            treetext.append(newtreepollen);
            weedtext.append(newweedpollen);
            timerow.append(timetext)
            grassrow.append(grasstext);
            treerow.append(treetext);
            weedrow.append(weedtext);
            // tablerow.append(result);
            cardContent.append(timerow, grassrow, treerow, weedrow);
            // cards.append(cardContent);
            cardBody.append(cardContent); 
        }
            // var icon = document.createElement("img"); if we want to add in image
            // icon.setAttribute("src", "" + newImageIcon + ".png"); if we want to add in image
            

            })})}
  
        

    geoCode5day()


