const HRARM = document.querySelector("#hour");
const MINRARM = document.querySelector("#minute");
const SECRARM = document.querySelector("#second");

function setTheClock () {
    var nowDate = new Date();
    let hourValue = nowDate.getHours();
    let minValue = nowDate.getMinutes();
    let secValue = nowDate.getSeconds();

    // console.log(nowDate);

    let hourDegValue = hourValue*360/12 + (minValue*360/60)/12;
    let minDegValue = minValue*360/60 + (secValue*360/60)/60;
    let secDegValue = secValue*360/60;

    HRARM.style.transform = "rotate(" + hourDegValue + "deg)";
    MINRARM.style.transform = "rotate(" + minDegValue + "deg)";
    SECRARM.style.transform = "rotate(" + secDegValue + "deg)";
}

var intervalClock = setInterval(setTheClock , 1000);