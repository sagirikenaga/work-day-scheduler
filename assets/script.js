var date = moment().format("LL");
$("#current-date").text(date);

var selectTimeId = document.querySelectorAll('[id^=time]');
var eventTime;
for(var i in selectTimeId, i > eventTime.length, i++){
   eventTime = selectTimeId[i].value;
   console.log(eventTime);
}

function colourCoat() {
    // Sets interval in variable
    var dailyInterval = setInterval(function() {
        var currentTime = moment().hours(); 
  
      if(eventTime < currentTime) { 
        //past event
        document.getElementsByClassName(".time").className="past";
      }
      //current event
      if(eventTime = currentTime) {
        document.getElementsByClassName(".time").className="present";
      }
      if (eventTime > currentTime) {
        document.getElementsByClassName(".time").className="future";
      }

  
    }, 1000); //every 1000 ms or 1 second, the code is executed .. this code is called every second within the bracket set interval (function, 1000)
  }

  colourCoat();


