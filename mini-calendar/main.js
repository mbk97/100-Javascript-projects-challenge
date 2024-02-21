const monthText = document.getElementById("month-text");
const dayText = document.getElementById("day-text");
const dateNum = document.getElementById("date-num");
const year = document.getElementById("year");

const date = new Date();

dateNum.innerText = date.getDate();
year.innerText = date.getFullYear();

dayText.innerHTML = date.toLocaleDateString("en", {
  weekday: "long",
});

monthText.innerHTML = date.toLocaleString("en", {
  month: "long",
});
