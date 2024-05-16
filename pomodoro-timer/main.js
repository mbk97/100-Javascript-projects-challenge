const timer = document.getElementById("timer");
const startTimer = document.getElementById("start");
const stopTimer = document.getElementById("stop");
const resetTimer = document.getElementById("reset");

//!**  padStart() is a method in JavaScript used to pad a string with another string until the resulting string reaches the desired length. This method is particularly useful when you need to ensure that a string has a certain minimum length, typically when formatting text.
// ** string.padStart(targetLength [, padString])

let interval;
let timeLeft = 1500; // Represents 25 minutes in seconds

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60); // Convert remaining seconds to minutes
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timer.innerHTML = formattedTime;
}

function startTimerFunction() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}

function stopTimerFunction() {
  clearInterval(interval);
}

function resetTimerFunction() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

startTimer.addEventListener("click", () => {
  startTimerFunction();
});

stopTimer.addEventListener("click", () => {
  stopTimerFunction();
});

resetTimer.addEventListener("click", () => {
  resetTimerFunction();
});
