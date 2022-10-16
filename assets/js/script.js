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
var modalEl = document.querySelector(".modal");
var modalOKBtnEl = document.querySelector(".ok-btn");
var modalTextEl = document.querySelector("#user-valid");

actPlanBtn.addEventListener("click", function () {
  window.location.href = "action-plan.html";
})


indexsubmitbtn.addEventListener("submit", function (help) {
  help.preventDefault();
  var city = document.getElementById("city").value;
  localStorage.setItem("cityName", city);
  if (city == "") {
    modalEl.classList.add('is-active');
    modalTextEl.textContent = "Please enter a valid city name";
    modalOKBtnEl.addEventListener('click', function () {
      modalEl.classList.remove('is-active');
    });
  }
  else {
    var geocodeKey = 'f4ac9ae98ce232f81e1a8c7e3fd76a5a';
    var url = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=' + geocodeKey;
    fetch(url).then(function (response) {
      return response.json()
    }).then(function (data) {
      // console.log([0]);

      if (document.getElementById('five-day').checked) {
        if (data[0] == undefined) {
          modalEl.classList.add('is-active');
          modalTextEl.textContent = "Please enter a valid city name";
          modalOKBtnEl.addEventListener('click', function () {
            modalEl.classList.remove('is-active');
          });
        }
        else {
          getValue();
        }
      }
      else if (document.getElementById('one-day').checked) {
        if (data[0] == undefined) {
          modalEl.classList.add('is-active');
          modalTextEl.textContent = "Please enter a valid city name";
          modalOKBtnEl.addEventListener('click', function () {
            modalEl.classList.remove('is-active');
          });
        }
        else {
          storeCity();
          window.location.href = 'map.html';
        }
      }
      else {
        modalEl.classList.add('is-active');
        modalTextEl.textContent = "Please select one of the radio options";
        modalOKBtnEl.addEventListener('click', function () {
          modalEl.classList.remove('is-active');
        });
      }
    })
  }
})

var nextPage = function (e) {
  window.location.href = "5day.html"
}

function geoCodeApi(search) {
  var geocodeKey = 'f4ac9ae98ce232f81e1a8c7e3fd76a5a';
  var url = 'https://api.openweathermap.org/geo/1.0/direct?q=' + search + '&limit=1&appid=' + geocodeKey;
  fetch(url).then(function (response) {
    return response.json()
  }).then(function (data) {
    // console.log([0]);
    var lat = data[0].lat;
    var lon = data[0].lon;
    getWeatherAPI(lat, lon)
  })
}

function getWeatherAPI(lat, lon) {
  var apiKey = "aa3ac1aee36fc947283c79786b233621";
  var url = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
  fetch(url).then(function (response) {
    return response.json()
  }).then(function (data) {
    data = data.list[0]

    createCards(data)
  })
}



function createCards(data) {
  var airCO = data.components.co
  var aqi = data.main.aqi;
  var cardDate = data.dt;
  localStorage.setItem("Air: co", airCO)
  localStorage.setItem("AQI", aqi)
  localStorage.setItem("UNIX", cardDate)
  nextPage()
}


function getValue(event) {
  var city = document.getElementById("city").value;
  localStorage.setItem("cityName", city);

  geoCodeApi(city)

  return

}

function storeCity() {
  var city = document.getElementById("city").value;
  localStorage.setItem("cityName", city);
}