const newYears = "19 mar 2022";
const daysTx = document.getElementById("days");
const hoursTx = document.getElementById("hours");
const minsTx = document.getElementById("mins");
const secTx = document.getElementById("sec");

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totleSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totleSeconds / 3600 / 24);
    const hours = Math.floor(totleSeconds / 3600) % 24;
    const mins = Math.floor(totleSeconds / 60) % 60;
    const sec = Math.floor(totleSeconds) % 60;

    daysTx.innerHTML = days;
    hoursTx.innerHTML = formatTime(hours);
    minsTx.innerHTML = formatTime(mins);
    secTx.innerHTML = formatTime(sec);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

// initial call

countdown();
setInterval(countdown, 1000);