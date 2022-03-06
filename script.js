"use strict";

function updateClock() {
  console.log(new Date());
  let clock = document.querySelector(".clocksecond");

  const timeNow = new Date();
  const hours = timeNow.getHours() * 3600;
  const minutes = timeNow.getMinutes() * 60;
  const seconds = timeNow.getSeconds();

  document.querySelector(".clocksecond").textContent = hours+minutes+seconds;

  //   if (t.total <= 0) {
  //     clearInterval(timeInterval);
  //   }
}

// updateClock(); // run function once at first to avoid delay
const timeInterval = setInterval(updateClock, 1000);
