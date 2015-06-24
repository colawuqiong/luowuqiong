/**
 * Created by luowuqiong on 16/6/15.
 */

//----- Show and stop alert messages

var utility_alert_timeout; //this is a global variable for pop up alert

function show_alert() {
  $('#alert').show("slide", { direction: "up" }, 100);
  utility_alert_timeout = setTimeout(function () {
    $('#alert').hide("slide", { direction: "up" }, 200);
  }, 2500);
}
function stop_alert() {
  clearTimeout(utility_alert_timeout);
}

$(document).ready(function () {
  $("body").prepend( "<div id='alert'><div id='alert-text'></div></div>" );
});