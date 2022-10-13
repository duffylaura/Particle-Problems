
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

  if (!doingWell) {
    console.log('You need to fill out the form!');
    return;
  }

  printDoingWell(doingWell);

  doingWellEl.val('');
  
};

formEl.on('submit', handleFormSubmit);

///////////////////////
