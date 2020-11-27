const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secondsEL = document.getElementById('seconds');

const newyears = "1 jan 2021";


function countdown() {
    const newyeardate = new Date(newyears);
    const currentdate =  new Date();

    const totalseconds = (newyeardate - currentdate) / 1000;
    const days = Math.floor(totalseconds / 3600 /24);
    const hours = Math.floor(totalseconds / 3600 %24);
    const mins = Math.floor(totalseconds / 60 %60);
    const seconds = Math.floor(totalseconds % 60);
    console.log(days, hours, mins, seconds);

   daysEL.innerHTML = days;
   hoursEL.innerHTML = formatTime(hours);
   minsEL.innerHTML = formatTime(mins);
   secondsEL.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);