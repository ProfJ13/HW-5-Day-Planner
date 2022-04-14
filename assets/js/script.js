var currentDayEl = $("#currentDay");
var currentDay;
currentDate();

function currentDate(){
    currentDay = moment().format("LLLL");
    currentDayEl.text(currentDay);
}

var dateRefresh = setInterval(currentDate, 1000)
