const dateTimeTxt = document.querySelector('#date-time');

/* eslint-disable */
const currentTime = luxon.DateTime.local();

const dataString = `${currentTime.monthLong} ${currentTime.day}th ${currentTime.year}, ${currentTime.hour}:${currentTime.minute} `;

dateTimeTxt.textContent = dataString;
/* eslint-enable */