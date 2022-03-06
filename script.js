"use strict";

function updateClock() {
  const timeNow = new Date();
  const hours = timeNow.getHours() * 3600;
  const minutes = timeNow.getMinutes() * 60;
  const seconds = timeNow.getSeconds();

  document.querySelector(".clocksecond").textContent =
    hours + minutes + seconds;
}

const timeInterval = setInterval(updateClock, 1000);
