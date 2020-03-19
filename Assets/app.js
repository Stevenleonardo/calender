$(document).ready(function () {
    //This will display the current date
    $("#currentDay").text(moment().format("dddd , MMM Do YYYY"));


$(".saveBtn").on("click" , function(){
var value = $(this).siblings(".description").val();
var time = $(this).parent().attr("id")
//save in local storage
localStorage.setItem(time, value);
});

var divs = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"]
var textAreas =["9", "10", "11", "12", "1", "2", "3", "4", "5"]

for (let i = 0; i < textAreas.length; i++) {
    var savedData = localStorage.getItem(textAreas[i]);
    if (savedData === null){
        console.log(textAreas)
    }
    else{
        $("#"+ divs[i]).text(savedData);
        console.log(savedData)
    }
}
});