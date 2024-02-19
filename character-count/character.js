const textArea = document.getElementById("textarea");
const totalCount = document.getElementById("total-counter");
const remainingCount = document.getElementById("remaining-counter");

textArea.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  const maxLength = Number(textArea.getAttribute("maxLength"));
  const currentLength = textArea.value.length;

  remainingCount.innerText = maxLength;
  totalCount.innerText = currentLength;

  if (currentLength >= maxLength) {
    textArea.classList.add("limit");
  } else {
    textArea.classList.remove("limit");
  }
}
