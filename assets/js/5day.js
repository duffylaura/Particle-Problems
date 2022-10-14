// console.log("hello world");
// console.log(fiveDay)


// indexsubmitbtn.addEventListener("submit", function(help){
//     help.preventDefault();
//     if(document.getElementById('five-day').checked){
//         console.log("this button is checked")
//         window.location.href = "5day.html"
//     }
//     console.log("help");

// function createCards(data){
//     console.log(data)
//     // airElement.textContent = "Concentration of CO (Carbon monoxide): " + data.components.co + "μg/m3";
//     // airElement.textContent = "Concentration of CO (Carbon monoxide): " + data.components.co + "μg/m3";
//     // airElement.textContent = "Concentration of CO (Carbon monoxide): " + data.components.co + "μg/m3";
// //     // airElement.textContent = "Concentration of CO (Carbon monoxide): " + data.components.co + "μg/m3";
// //     // airElement.textContent = "Concentration of CO (Carbon monoxide): " + data.components.co + "μg/m3";
// //     // airElement.textContent = "Concentration of CO (Carbon monoxide): " + data.components.co + "μg/m3";
// }


// import {getWeatherAPI} from "./script2.js";
// console.log(getWeatherAPI);

var airindex = document.getElementById("air-index")

var air = localStorage.getItem("AQI");
airindex.append(air);

