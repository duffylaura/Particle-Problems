// Doing Well //

/* var formEl = $('#doing-well-form');
var doingWellEl = $('#doing-well');
var doingWellListEl = $('#doing-well-list');

var printDoingWell = function (name) {
  var listEl = $('<li>');
  listEl.addClass('doing-well-list-group-item').text(name);
  listEl.appendTo(doingWellListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var doingWell = doingWellEl.val();

  printDoingWell(doingWell);

  doingWellEl.val('');
  
};

formEl.on('submit', handleFormSubmit);

*///////////////////////

// Asthma Getting Worse //

var gettingWorseFormEl = $('#getting-worse-form');
var gettingWorseEl = $('#getting-worse');
var gettingWorseListEl = $('#getting-worse-list');

var printGettingWorse = function (name) {
  var gwlistEl = $('<li>');
  gwlistEl.addClass('getting-worse-list-group-item').text(name);
  gwlistEl.appendTo(gettingWorseListEl);
};

var handleGettingWorseFormSubmit = function (event) {
  event.preventDefault();

  var gettingWorse = gettingWorseEl.val();

  printGettingWorse(gettingWorse);

  gettingWorseEl.val('');
  
};

gettingWorseFormEl.on('submit', handleGettingWorseFormSubmit);

// Medical Alert //

var medicalAlertFormEl = $('#medical-alert-form');
var medicalAlertEl = $('#medical-alert');
var medicalAlertListEl = $('#medical-alert-list');

var printMedicalAlert = function (name) {
  var malistEl = $('<li>');
  malistEl.addClass('medical-alert-list-group-item').text(name);
  malistEl.appendTo(medicalAlertListEl);
};

var handleMedicalAlertFormSubmit = function (event) {
  event.preventDefault();

  var medicalAlert = medicalAlertEl.val();

  printMedicalAlert(medicalAlert);

  medicalAlertEl.val('');
  
};

medicalAlertFormEl.on('submit', handleMedicalAlertFormSubmit);

//// Local Storage ///

renderDoingWell(); 

var doingWellButton = document.querySelector("#doing-well-button");

doingWellButton.addEventListener("click", function(event){
  event.preventDefault(); 
  var ul = document.getElementById("doing-well-list");

  var input = document.getElementById("doing-well");

  var li = document.createElement("li"); 

  li.setAttribute('id', input.value);

  li.appendChild(document.createTextNode(input.value));

  ul.appendChild(li);
  
  var doingWellStorage = document.querySelector("#doing-well").value;
  
  var index = Math.floor(Math.random() * 10)

  var key = index.toString();

  localStorage.setItem(key, doingWellStorage);

});


function renderDoingWell() {
  var output0 = localStorage.getItem("0");
  var output1 = localStorage.getItem("1");
  var output2 = localStorage.getItem("2");
  var output3 = localStorage.getItem("3");
  var output4 = localStorage.getItem("4");
  var output5 = localStorage.getItem("5");
  var output6 = localStorage.getItem("6");
  var output7 = localStorage.getItem("7");
  var output8 = localStorage.getItem("8");
  var output9 = localStorage.getItem("9");
  var output10 = localStorage.getItem("10");

  var list = document.querySelector("#doing-well-list");

  // list.textContent = output0, output1, output2, output3, output4, output5, output6, output7, output8, output9, output10; 

  list.textContent = output8;
}




/*
var list = document.querySelector("#doing-well-list");
var doingWellButton = document.querySelector("#doing-well-button");


renderDoingWell(); 

function renderDoingWell () {
  var doingWellStorage = localStorage.getItem("doingWellKey");
  list.textContent = doingWellStorage;
}

doingWellButton.addEventListener("click", function(event) {
  event.preventDefault();
  var doingWellStorage = document.querySelector("#doing-well").value;
  list.textContent = doingWellStorage;
  localStorage.setItem("doingWellKey", doingWellStorage);
  renderDoingWell(); 
  }
); */