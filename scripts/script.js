/******************************************************************************
FUNCTION INDEX:
    @Function used to set up the countdown Timer
    @Function to Start the pomodoro Timer 
    @Function to Restart the Timer
    @Function to Stop the Timer
    @Information slider (Toggle Up / Down)
    @Adds task to the list 
    @Removes task once "tick" has been clicked



*******************************************************************************/
var anInterval;
var twentyMinutes = 60 * 24.985;

function popUp() {
    alert("25 Minutes is up! Take a short break and click 'Start' when you're ready");
}

/////////     @Function used to set up the countdown Timer    //////////
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    anInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = display;
            popUp(); //alerts user to take a break
            clearInterval(anInterval);

            
        }
    }, 1000);
}



///////////       @Function to Start the pomodoro Timer    /////////////
var startButton = $("#start");
var resetButton = $("#reset");
var stopButton = $("#stop");
display = document.querySelector('#time');


$(document).ready(function(){
    $(startButton).click(function(){
      $(startButton).hide();
      $(resetButton).fadeIn(200);
      startTimer(twentyMinutes, display);
    });
  });



//////////         @Function to Restart the Timer         ///////////////
$(document).ready(function(){
  $(resetButton).click(function(){
    clearInterval(anInterval);
    $(resetButton).hide();
      $(startButton).show();
    display.innerHTML = "25:00";

  });
});



//////////         @Function to Stop the Timer         ///////////////
$(function(){
  $(stopButton).click(function(){
    clearInterval(anInterval);
  });
});


//////////     @Information slider (Toggle Up / Down)     ///////////////
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
        $("#initial").text( $("#initial").text() == '?' ? "X" : "?");
    });
});




//////////  @Adds task to the list   /////////////////
$('form').submit(function () {
    if ($("#populate_list").val() !== '') {
        var input_value = $('#populate_list').val();
        $("ul").append( "<li><input type='button' id='done' value='&#10004'></input>" + input_value + "</li>");
    };
    $('#populate_list').val('');
    return false;
});


//////////  @Removes task once "tick" has been clicked /////////////
$(document).on('click', '#done', function (e) {
    e.preventDefault();
    $(this).parent().remove();
});





