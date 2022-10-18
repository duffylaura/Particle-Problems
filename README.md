# PARTICLE SOLUTIONS
Got Particle Problems? We got Particle Solutions!

https://duffylaura.github.io/Particle-Problems/

## Description
![pollution-description](https://user-images.githubusercontent.com/113512061/196066564-b4a25c7d-a447-4369-aa2c-151c199b07e1.png)

We want a reliable, easy/enjoyable to use app that tells the user the pollen count and the air quality in their location (or the location they choose to search). 

Like light coming through a window in a dusty room, we want to illuminate how many particles are in the air in a simple way for anyone, but especially for those with asthma, allergies, and other conditions in which high particle count in the air is a struggle. 

Our application will provide a solution to those with Particle Problems in one click, instead of several Googles per day. 

![image](https://user-images.githubusercontent.com/113512061/196461906-d53b02ea-7879-45e6-963e-348309ab4372.png)


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [API](#api-calls)
- [Technologies](#technologies-used)
- [CSS](#css-framework)
- [Credits](#credits)
- [License](#license)

## Installation
 
 Our team came together to decide how to create an application that is easy to use and useful for users who are interest about the air quality and pollen count. 
 Our Workflow:
 ![image](https://user-images.githubusercontent.com/113512061/196134893-112b77c0-95cc-49d8-8e49-ab04d6e85f21.png)


## Technologies Used    
* GitHub
* Apple Photos “MarkUp” feature
* MarkDown
* HTML
* CSS 
* JavaScript 
* APIs: Breeze-O-Meter and Open Weather Map
* Libraries: Bulma, Leaflet, jQuery, jQuery widgets

 ## Usage

![todaymap](https://user-images.githubusercontent.com/113512061/196237021-f0ef57b5-e4f9-41d6-b01a-c2f6bb6dfbde.gif)
![3dayforecast](https://user-images.githubusercontent.com/113512061/196237689-4dfadbb8-8f8f-4b22-af0b-f3d8d7ef1798.gif)
![aap](https://user-images.githubusercontent.com/113512061/196238033-a1c77de2-e2e7-43df-ae3c-ff880b8d894a.gif)


 
Breakdown of how to use Particle Solutions!
1. Enter a city on the landing page.
2. Select if you want to see Today or a Three-Day Forecast, then click submit.
    * Today's Forecast will show you a map and as a user, you can move the map around.
    * The user has options to select either one of the buttons to display: air pollution, grass pollen, tree pollen, or weed pollen.
    * 3-Day Forecast will display easily readable data of the current and the following 2 days about levels of pollen and air quality.
    * The user may click on the "Link for info on AQI" to access more information about AQI levels.
3. On the landing page, the user can select My Asthma Action Plan or the Access & Giving Back buttons. 
    * The My Asthma Action Plan page allows the user to input their data and save it all in one place so they can refer to it or make changes to it.
    * The Giving Back page is still in progress but the goal there is to allow the user to access more data if they want to donate to organizations that provde resources to the community who has asthma and/or struggles to get the proper care for their severe allergies. 


## API calls 
When the user clicks the submit button on the landing page after inputing their city of choice and selecting the radio option of today's or 3-day forecast, there will be api call(s). These api calls allow us to use data from other websites and select to show what content to show the user. This can be seen in the console of the web browser. 

![consoleapi](https://user-images.githubusercontent.com/113512061/196467298-166d442b-517b-429e-b342-1a7551616b33.gif)



###  Here are code snippets of how we used server-side API:

```
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
```

```
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
```

## CSS Framework

We used [BULMA](https://bulma.io/) to style our webpage!

Here is how our application functions on a smaller screen size.

![Particles Solutions](https://user-images.githubusercontent.com/113512061/196472775-579aca27-3bd8-4274-aa4a-8533843c665e.gif)


## Learning Objectives
* We definitely learned how to dynamically work with each other to avoid merging repo conflicts.
* We also have learned about server-apis on how to use them, use new libraries like BULMA to style our webspage, and use library like Leaflet to provide us a map so we can present it to our users.
* Most importantly we collarative with each other to test out what failed and what works!

## Credits

Collaborators:
* Laura D. https://github.com/duffylaura
* Mai M. https://github.com/SkyWalkerMM26
* Nicole G. https://github.com/ncguan
* Philip H. https://github.com/PhilipHuang2

## License

MIT License
* Please refer to the LICENSE file in the Repository.

---

