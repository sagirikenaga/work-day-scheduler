var date = moment().format("LL");
$("#current-date").text(date);

function colourCoat() {
    // Sets interval in variable
    var dailyInterval = setInterval(function() {
        // var currentTime = moment().hours(); 
        var currentTime = 15;

      for (let id = 9; id <= 17; id++) {

        if (id < currentTime) { 
            //past event
            document.getElementById(id).className="past";
        }
            //current event
            else if(id == currentTime) {
            document.getElementById(id).className="present";
        }
            else if (id > currentTime) {
            document.getElementById(id).className="future";
        }

    }
    }, 1000);
  }

  colourCoat();


