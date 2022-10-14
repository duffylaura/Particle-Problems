/*var cityInputEl = $('#city');

$(function () {
    var cityNames = [
      'Bootstrap',
      'C',
      'C++',
      'CSS',
      'Express.js',
      'Git',
      'HTML',
      'Java',
      'JavaScript',
      'jQuery',
      'JSON',
      'MySQL',
      'Node.js',
      'NoSQL',
      'PHP',
      'Python',
      'React',
      'Ruby',
    ];
    $('#city').autocomplete({
      source: cityNames,
    });
  });*/

var indexsubmitbtn = document.querySelector("form");
var city = document.getElementById("city").value;
var actPlanBtn = document.getElementById('aap-btn');

actPlanBtn.addEventListener("click", function(){
    window.location.href = "action-plan.html";
})


indexsubmitbtn.addEventListener("submit", function(help){
    help.preventDefault();
    
    if(document.getElementById('five-day').checked){
       getValue();
    }
    if(document.getElementById('one-day').checked){
        storeCity();
        window.location.href = 'map.html';
    }

})

var nextPage = function (e){
        window.location.href = "5day.html"
    }

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
        getWeatherAPI (lat, lon)
    })
}

    function getWeatherAPI(lat, lon){
        var apiKey = "aa3ac1aee36fc947283c79786b233621";
        var url = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
        fetch(url).then(function(response){
            console.log(response)
            return response.json()
        }).then(function(data){
            console.log(data)
            data = data.list[0]
           
            createCards(data)
            })
        }
        
                   
        
function createCards(data){
console.log(data);
var airCO = data.components.co
            var aqi = data.main.aqi;
            var cardDate = data.dt;
            localStorage.setItem("Air: co", airCO)
            localStorage.setItem("AQI", aqi)
            localStorage.setItem("UNIX", cardDate)
            nextPage()
        }
        
        
function getValue(event){
        var city = document.getElementById("city").value;
    console.log(city);
    localStorage.setItem("cityName", city);
        
        geoCodeApi(city)
       
        return
       
    }
    
function storeCity(){
    var city = document.getElementById("city").value;
    localStorage.setItem("cityName", city);
}