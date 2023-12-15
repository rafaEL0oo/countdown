// Set the date we're counting down to
var countDownDate = new Date("Jun 30, 2024 10:00:00").getTime();
const DAYS_COUNT = document.querySelector('.days h2')

const HOURS_COUNT = document.querySelector('.hours h2')

const MINUTES_COUNT = document.querySelector('.minutes h2')

const SECONDS_COUNT = document.querySelector('.seconds h2')



// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML = `<b>${days}</b>d <b>${hours}</b>h <b>${minutes}</b>m <b>${seconds}</b>s`;

  DAYS_COUNT.textContent = days
  HOURS_COUNT.textContent = hours
  MINUTES_COUNT.textContent = minutes
  SECONDS_COUNT.textContent = seconds
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = '<img src="/img/the-end.png" alt="the end">'
  }
}, 1000);