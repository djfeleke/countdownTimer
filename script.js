// Set the date we're counting down to
var countDownTo = new Date("January 1, 2022 00:00:00").getTime();

// Getting the DOM elements on which we are displaying

const daysLft = document.getElementById('days');
const hoursLft = document.getElementById('hours');
const minutesLft = document.getElementById('minutes');
const secondsLft = document.getElementById('seconds');


// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var current = new Date().getTime();

    // Find the distance between now and the count down date
    var timeLeftInSeconds = (countDownTo - current) / 1000;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(timeLeftInSeconds / (60 * 60 * 24));
    var hours = Math.floor((timeLeftInSeconds % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((timeLeftInSeconds % (60 * 60)) / (60));
    var seconds = Math.floor(timeLeftInSeconds % (60));

    // Display the result in the element with id="demo"
    //  document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    daysLft.innerHTML = days;
    hoursLft.innerHTML = timeFormatter(hours);
    minutesLft.innerHTML = timeFormatter(minutes);
    secondsLft.innerHTML = timeFormatter(seconds);

    // If the count down is finished, write some text

}, 1000);

function timeFormatter(time) {
    return time < 10 ? `0${time}` : time;
}