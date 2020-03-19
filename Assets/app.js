$(document).ready(function () {
    //This will display the current date
    $("#currentDay").text(moment().format("dddd , MMM Do YYYY"));
});

$(".saveBtn").on("click" , function(){
var value = $(this).siblings(".description").val();
var time = $(this).parent().attr("id")
//save in local storage
localStorage.setItem(time, value);
});