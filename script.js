const HRARM = document.querySelector("#hour");
const MINRARM = document.querySelector("#minute");
const SECRARM = document.querySelector("#second");

let hourDegValue = 15;
let minDegValue = 55;
let secDegValue = 25;

HRARM.style.transform = "rotate(" + hourDegValue + "deg)";
MINRARM.style.transform = "rotate(" + minDegValue + "deg)";
SECRARM.style.transform = "rotate(" + secDegValue + "deg)";