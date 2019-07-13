function formatTime(a) {
  var days = parseInt(a / 1440);
  var hours = parseInt((a - days * 1440) / 60);
  var minutes = a - days * 1440 - hours * 60;
  return days + " day(s) " + hours + " hour(s) " + minutes + " minute(s)";
}
formatTime(120);
formatTime(59);
formatTime(3601);