var toSecond = document.getElementById("toSecond");
var toThird = document.getElementById("toThird");

toSecond.addEventListener('click', function(){
    console.log("test button");
    // How to access another page without passing any variables and
    // with navigation history
    window.location.href = "secondPage.html";
})

toThird.addEventListener('click', function (){
    // How to access another page without passing any variables and
    // without navigation history
    window.location.replace("thirdPage.html");
})