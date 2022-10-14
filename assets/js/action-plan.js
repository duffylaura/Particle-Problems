
// Doing Well //

var formEl = $('#doing-well-form');
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

///////////////////////

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