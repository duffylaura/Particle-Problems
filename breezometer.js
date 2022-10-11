API_KEY = "f7ef38aba28849b8819220ae11e4b3e3";
var pollenEndPoint = "https://api.breezometer.com/pollen/v2/forecast/daily?";



var button = document.getElementById("clickEndpoint");


// one day call of SF pollen count
button.addEventListener('click', function() {
    // console.log(pollenEndPoint + "lat=" + "28.538336" + "&lon=" + "-81.379234" + "&key=" + API_KEY + "&days=5");

    fetch(pollenEndPoint + "lat=" + "37.774929" + "&lon=" + "-122.419418" + "&key=" + API_KEY + "&days=1")
    // fetch("https://api.breezometer.com/pollen/v2/forecast/daily?lat=48.857456&lon=2.354611&days=3&key=" + API_KEY + "&features=types_information,plants_information")
    .then((response) => response.json())
    .then((data) => console.log(data));
});

// 3 day call of SF pollen count
// button.addEventListener('click', function(){
//     fetch( pollenEndPoint + 
//             "&lat=" + "48.857456" +
//             "&lon=" + "2.354611" + 
//             "&key=" + API_KEY +
//             "&days=" + "3" +
//             "&features=" + "types_information,plants_information"  )
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// });



