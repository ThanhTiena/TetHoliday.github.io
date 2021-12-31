const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const daysE2 = document.getElementById("days-date");
const hoursE2 = document.getElementById("hours-date");
const minsE2 = document.getElementById("mins-date");
const secondsE2 = document.getElementById("seconds-date");

const newYears = "1 Jan 2022";
const date = "28 Apr 2021";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function countdownDate() {
    const newYearsDate = new Date(date);
    const currentDate = new Date();

    const totalSeconds = (currentDate - newYearsDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysE2.innerHTML = days;
    hoursE2.innerHTML = formatTime(hours);
    minsE2.innerHTML = formatTime(mins);
    secondsE2.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();
countdownDate();
setInterval(countdown, 1000);
setInterval(countdownDate, 1000);