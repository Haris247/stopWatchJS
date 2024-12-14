const clock = document.querySelector(".watch");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let sec = 0;
let min = 0;
let hr = 0;
let interavalId;

const start = () => {
  interavalId = setInterval(() => {
    if (sec < 59) {
      sec++;
    } else if (min >= 59) {
      hr++;
      min = 0;
    } else {
      min++;
      sec = 0;
    }
    let seconds = String(sec).padStart(2, "0");
    let minutes = String(min).padStart(2, "0");
    let hours = String(hr).padStart(2, "0");
    console.log(`${hours}:${minutes}:${seconds}`);
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
  }, 1000);
};

const stop = () => {
  clearInterval(interavalId);
};
const reset = () => {
  clearInterval(interavalId);
  sec = 0;
  min = 0;
  hr = 0;
  clock.innerHTML = `00:00:00`;
};
