let hour = document.getElementById("hour");
let minute = document.getElementById("min");
let second = document.getElementById("sec");

function displayTime () {
    let date = new Date ();

    // Getting hours, minutes & seconds from date
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourRotation = 30*hours + minutes/2;
    let minuteRotation = 6*minutes;
    let secondRotation = 6*seconds;

    // Setting rotation for each element
    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    second.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(displayTime, 1000);