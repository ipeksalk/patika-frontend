function showTime() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = weekDays[date.getDay()];
  m = checkTime(m);
  s = checkTime(s);
  let now = h + ":" + m + ":" + s + " " + day;
  document.getElementById('myClock').innerHTML = now;
  setTimeout(showTime, 1000);
}

function checkTime(i) {
  return i = i < 10 ? "0" + i : i; // add zero in front of numbers < 10
}

showTime();
