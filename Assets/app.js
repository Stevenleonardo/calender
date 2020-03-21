$(document).ready(function () {
    //Array of the rows
    var divs = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"]
    //Array of the textareas
    var textAreas = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]


    //This will display the current date
    setInterval(function(){
    $("#currentDay").text(moment().format("dddd , MMM Do YYYY"))
   }, 1000)

 //retrieve and save time to set variables
 var today = new Date();
 var hour = today.getHours();
 console.log(hour)
 //loop to run through each textarea of each hour
 for (var i = 0; i < textAreas.length; i++) {
    var data = $(textAreas[i]).attr("data-time");

    //changes the string into a integer
    data= parseInt(data);

    //conditionals
    if (hour < data) {
        $(textAreas[i]).addclass("col-md-10 future Savedtext")
    }
    if (hour === data) {
        $(textAreas[i]).addclass("col-md-10 present Savedtext")
    }
    if (hour > data) {
        $(textAreas[i]).addclass("col-md-10 past Savedtext")
    }
 }

 //function for when you press the save button
 $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".Savedtext").val();
    var time = $(this).parent().attr("id")
    //save item in local storage
    localStorage.setItem(time, value);
 });


 //for loop that will run through each string in the array and if there is something saved it will add to text area but if
 // nothing is saved it will equal null
 for (let i = 0; i < divs.length; i++) {
    var savedData = localStorage.getItem(divs[i]);
    if (savedData === null) {
        console.log(textAreas)
    }
    else {
        $("#" + textAreas[i]).text(savedData);
        console.log(savedData)
    }


 }
});