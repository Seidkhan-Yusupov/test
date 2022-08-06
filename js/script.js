function theClock() {
    var tClock = new Date();
    var hours = tClock.getHours();
    var minutes = tClock.getMinutes();
    var seconds = tClock.getSeconds();

    // AM & PM
    var amPm = ( hours < 12 ) ? "AM" : "PM";

    // Convert the hours component to 12-hour format
    // hours = (hours > 12) ? hours - 12 : hours;

    // Padding the hours, minutes and seconds with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    // Displaying the clock
    document.getElementById('clock').innerHTML = 
        hours + " : " + minutes + " : " + seconds + " " + amPm;
    var t = setTimeout(theClock, 500);
}