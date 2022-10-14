var localStorageCheck = document.getElementById("localStorageCheck");
var sendParameter = document.getElementById("sendLocalParameters");
var readParameter = document.getElementById('readLocalParameters');

localStorageCheck.addEventListener('click', function(){
    console.log(localStorage);
})

// how to send local parameters
sendParameter.addEventListener('click', function(){
    window.location.href = "secondPage.html" + "?info=has_info&multiple=is_multiple";

});


// how to take local parameters
readParameter.addEventListener('click', function(){
    //breaks the url into one long string
    var params = window.location.search.slice(1).split('&');
    console.log(params)
    // splitting up the params into key pair items
    var objectParams= {};
    for(var i = 0; i < params.length; i++)
    {
        var splitParam = params[i].split("=");
        console.log(splitParam);
        objectParams[splitParam[0]] = splitParam[1];
    }
    console.log(objectParams);
})