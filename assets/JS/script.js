// Display today's day and date on top
let currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

$(document).ready(function () {
    // click save to store the data
    $(".saveBtn").on("click", function () {
        let event = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        // save data in local storage
        localStorage.setItem(time, event);

        $(".notification").addClass("show");

        setTimeout(function() {
            $(".notification").removeClass("show");
        }, 3000)
    })
   
    function timeBlockColor() {
        //getting current time
        let currentTime = moment().hour();

        $(".time-block").each(function () {
            let blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // changing backgroud color to indicate if the event is future/present/past
            if (currentTime > blockTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (currentTime === blockTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    
    // get item for local storage
    // display the saved data
    // data remain after refresh
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeBlockColor();
    
})

