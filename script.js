function addLeadingZero(number) {
    return number < 10 ? '0' + number : number
}

function updateClock() {
    const hoursElement = document.querySelector('.numbers');
    const dayElement = document.querySelector('.day');
    const now = new Date();

    const hours = addLeadingZero(now.getHours());
    const minutes = addLeadingZero(now.getMinutes());
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    hoursElement.textContent = `${hours}:${minutes}`;
    dayElement.textContent = days[now.getDay()];
}

setInterval(updateClock, 1000);
updateClock();