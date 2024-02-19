const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const count = document.getElementById("count-text");

increaseBtn.addEventListener("click", () => {
  const newCount = Number(count.innerText) + 1;
  console.log(newCount);
  count.innerText = newCount;
});

decreaseBtn.addEventListener("click", () => {
  const newCount = Number(count.innerText) - 1;
  if (newCount == 0) {
    return;
  }
  count.innerText = newCount;
});

resetBtn.addEventListener("click", () => {
  count.innerText = 0;
});
