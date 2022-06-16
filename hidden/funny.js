"use strict";

function updateClock() {
  const timeNow = new Date();
  const hours = timeNow.getHours() * 3600;
  const minutes = timeNow.getMinutes() * 60;
  const seconds = timeNow.getSeconds();

  document.querySelector(".clocksecond").textContent =
    hours + minutes + seconds;
}

let interval = async () => {
  setInterval(updateClock, 1000);
};
interval();
