//displays current date 
var date = moment().format("LL");
$("#current-date").text(date);

//creating function to apply classes depending on time of day
function colourCoat() {
    // Sets interval in variable
    var dailyInterval = setInterval(function() {
        var currentTime = moment().hours(); 

        //looping through id's given for time blocks
      for (let id = 9; id <= 17; id++) {

        if (id < currentTime) { 
            //past event
            document.getElementById(id).className="past description";
        }
            //current event
            else if(id == currentTime) {
            document.getElementById(id).className="present description";
        }
            //future event
            else if (id > currentTime) {
            document.getElementById(id).className="future description";
        }

    }
    }, 1000);
  }

  colourCoat();

let ls = JSON.parse(window.localStorage.getItem("event"));

// setting events into local storage 
$(".save").on("click", function () {
    // get nearby values
    let value = $(this).siblings("textarea").val();
    let hour = $(this).siblings("textarea").attr("id");
    // save in localStorage
    // localStorage.setItem(time, value);
    let todos = JSON.parse(window.localStorage.getItem("event")) || [];
    console.log(todos);
    todos.push({hour, value});
    localStorage.setItem("event", JSON.stringify(todos));
});

//sets stored event as text in text area for specific time
$("textarea").each(function(index) {
    let timeBlock = $(this).attr('id');
    for (let i = 0; i < ls.length; i++) {
        const element = ls[i];
        if (timeBlock === element.hour) {
            $(this).text(element.value);
        }
    }
  });