var date = moment().format("LL");
$("#current-date").text(date);

function colourCoat() {
    // Sets interval in variable
    var dailyInterval = setInterval(function() {
        var currentTime = moment().hours(); 
        console.log(currentTime);

      for(let id = 9; id <= 17;id++){
            console.log(id);
           let block =  document.getElementById(JSON.stringify(id))
           console.log(block)
  
      if(id < currentTime) { 
        //past event
        document.getElementById("#id").className="past";
      }
      //current event
      if(id = currentTime) {
        document.getElementById("#id").className="present";
      }
      if (id > currentTime) {
        document.getElementById("#id").className="future";
      }
    }

  
    }, 1000);
  }

  colourCoat();


