let hoursNode = document.querySelector('#hours');
let minutesNode = document.querySelector('#minutes');
let secondsNode = document.querySelector('#seconds');

function changeArrowsRotation() {
  let time = new Date();
  let hours = time.getHours() % 12,
    minutes = time.getMinutes(),
    seconds = time.getSeconds();
  let hoursDeg = (hours * 5 + (Math.floor(minutes / 15))) * 6,
    minutesDeg = minutes * 6,
    secondsDeg = seconds * 6;
  hoursNode.style.transform = `rotate(${hoursDeg}deg)`;
  minutesNode.style.transform = `rotate(${minutesDeg}deg)`;
  secondsNode.style.transform = `rotate(${secondsDeg}deg)`;
  if (seconds == 0) {
    secondsNode.classList.add('clock__hand_no-animation');
  } else {
    secondsNode.classList.remove('clock__hand_no-animation');
  }
}
changeArrowsRotation();
setInterval(changeArrowsRotation, 1000);