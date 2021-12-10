const months = document.querySelector('.months');
const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function countdown() {
    const year = new Date().getFullYear();
    //*console.log(year);
    const birthday = new Date(`27 aug, ${year} 00:00:01`);
    //*console.log(birthday);
    const today = new Date();
    console.log(today);
    let birthdayCountdown = '';
    if (today > birthday) {
        birthdayCountdown = today - birthday;
    } else {
        birthdayCountdown = birthday - today;
    }

    let countdownMonth = Math.floor(birthdayCountdown / 1000 / 60 / 60 / 24 / 30);
    let countdownDay = Math.floor(birthdayCountdown / 1000 / 60 / 60 / 24);
    console.log(countdownDay);
    let countdownHour = Math.floor(birthdayCountdown / 1000 / 60 / 60) % 24;
    console.log(countdownHour);
    let countdownMinutes = Math.floor(birthdayCountdown / 1000 / 60) % 60;
    console.log(countdownMinutes);
    let countdownSeconds = Math.floor(birthdayCountdown / 1000) % 60;
    console.log(countdownSeconds);
    months.textContent = formatTime(countdownMonth);
    day.textContent = formatTime(countdownDay);
    hour.textContent = formatTime(countdownHour);
    minute.textContent = formatTime(countdownMinutes);
    second.textContent = formatTime(countdownSeconds);

    function formatTime(time) {
        if (time < 10) {
            return `0${time}`;
        } else return time;
    }
    /* 
    hour.textContent = birthdayCountdown - countdownDay * 24; */
}
setInterval(countdown, 1000);
