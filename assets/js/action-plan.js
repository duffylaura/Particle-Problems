//Global Variables// 
var list = document.querySelector("#doing-well-list");
var doingWellButton = document.querySelector("#doing-well-button");
var listGw = document.querySelector("getting-worse-list");
var gettingWorseButton = document.querySelector("#getting-worse-button");
var listMa = document.querySelector("#medical-alert-list");
var medicalAlertButton = document.querySelector("#medical-alert-button");
var listN = document.querySelector("#notes-list");
var notesButton = document.querySelector("#notes-button");

//Call Functions (Local Storage)//

renderDoingWell();
renderGettingWorse();
renderMedicalAlert();
renderNotes4Dr(); 

// Doing Well //

function renderDoingWell () {
  var doingWellStorage = localStorage.getItem("doingWellKey");
  if (doingWellStorage == null) {return} else {list.textContent = doingWellStorage;};
};

doingWellButton.addEventListener("click", function(event) {
  event.preventDefault();
  var doingWellStorage = document.querySelector("#doing-well").value;
  list.textContent = doingWellStorage;
  localStorage.setItem("doingWellKey", doingWellStorage);
  renderDoingWell(); 
  }
); 

// Asthma Getting Worse //

function renderGettingWorse() {
  var gettingWorseStorage = localStorage.getItem("gettingWorseKey");  
  if (gettingWorseStorage == null) {} else { listGw.textContent = gettingWorseStorage;};
};

gettingWorseButton.addEventListener ("click", function (event){
  event.preventDefault(); 
  var gettingWorseStorage = document.querySelector("#getting-worse").value; 
  listGw.textContent = gettingWorseStorage;
  localStorage.setItem ("gettingWorseKey", gettingWorseStorage); 
  renderGettingWorse(); 
});

// Medical Alert //

function renderMedicalAlert () {
  var medicalAlertStorage = localStorage.getItem("medicalAlertKey");
  if (medicalAlertStorage == null) {return} else { listMa.textContent = medicalAlertStorage;};
};

medicalAlertButton.addEventListener("click", function(event) {
  event.preventDefault();
  var medicalAlertStorage = document.querySelector("#medical-alert").value;
  listMa.textContent = medicalAlertStorage;
  localStorage.setItem("medicalAlertKey", medicalAlertStorage);
  renderMedicalAlert(); 
  }
); 

// renderNotes4Dr(); Notes for Physician //

function renderNotes4Dr () {
  var notesStorage = localStorage.getItem("notesKey");
  if (notesStorage == null) {return} else { listN.textContent = notesStorage;};
};

notesButton.addEventListener("click", function(event) {
  event.preventDefault();
  var notesStorage = document.querySelector("#notes").value;
  listN.textContent = notesStorage;
  localStorage.setItem("notesKey", notesStorage);
  renderNotes4Dr(); 
  }
); 