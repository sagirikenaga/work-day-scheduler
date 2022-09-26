var date = moment().format("LL");
$("#current-date").text(date);

function colourCoat() {
    // Sets interval in variable
    var dailyInterval = setInterval(function() {
        var eventTime = ("#time").moment().format("HH A").trim(); //how to convert text string into time ? 
        console.log(eventTime);
  
      if(eventTime < moment(LT)) { 
        //past event
        document.getElementbyId("#time").className="past";
      }
      //current event
      if(eventTime = moment(LT)) {
        document.getElementbyId("#time").className="present";
      }
      if (eventTime > moment(LT)) {
        document.getElementbyId("#time").className="future";
      }

  
    }, 1000); //every 1000 ms or 1 second, the code is executed .. this code is called every second within the bracket set interval (function, 1000)
  }

  colourCoat();
