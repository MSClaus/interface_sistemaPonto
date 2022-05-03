var timeDisplay = document.getElementById("clock-desktop");


function relogioPt() {
  var dateString = new Date().toLocaleString("en-GB", {timeZone: "America/Sao_Paulo"});
  var formattedString = dateString.replace(", ", "  ", "");
  timeDisplay.innerHTML = formattedString;
}

setInterval(relogioPt, 1000);